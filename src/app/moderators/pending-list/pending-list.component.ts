import { Component, OnInit } from '@angular/core';
import { ArweaveService } from '../../core/arweave.service';
import { Observable, Subscription, EMPTY, of } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';
import { getVerification } from "arverify";
import {MatDialog} from '@angular/material/dialog';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';
import { ArwikiQuery } from '../../core/arwiki-query';

@Component({
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.scss']
})
export class PendingListComponent implements OnInit {
	loadingPendingPages: boolean = false;
  pages: any[] = [];
  pendingPagesSubscription: Subscription = Subscription.EMPTY;
  arverifyProcessedAddressesMap: any = {};
  loadingInsertPageIntoIndex: boolean = false;
  insertPageTxMessage: string = '';
  arwikiQuery: ArwikiQuery|null = null;

  constructor(
  	private _arweave: ArweaveService,
    private _auth: AuthService,
    private _snackBar: MatSnackBar,
    public _dialog: MatDialog
  ) { }

  ngOnInit() {
    const adminList: any[] = this._auth.getAdminList();
    // Init ardb instance
    this.arwikiQuery = new ArwikiQuery(this._arweave.arweave);
    // Get pages
    this.loadingPendingPages = true;
    this.pendingPagesSubscription = this.arwikiQuery.getPendingPages().pipe(
      switchMap((res) => {
        let pages = res;
        let tmp_res = [];
        for (let p of pages) {
          tmp_res.push({
            id: p.node.id,
            title: this.searchKeyNameInTags(p.node.tags, 'Arwiki-Page-Title'),
            slug: this.searchKeyNameInTags(p.node.tags, 'Arwiki-Page-Slug'),
            category: this.searchKeyNameInTags(p.node.tags, 'Arwiki-Page-Category'),
            language: this.searchKeyNameInTags(p.node.tags, 'Arwiki-Page-Lang'),
            owner: p.node.owner.address,
          });
        }
        return of(tmp_res);
      }),
      switchMap((pages) => {
        return (
          this.arwikiQuery!.verifyPages(adminList, pages.map((p) => p.id))
          .pipe(
            switchMap((data) => {
              let tmp_res = [];
              const verifiedPages = data;
              const verifiedPagesList = [];
              for (let p of verifiedPages) {
                const vrfdPageId = this.searchKeyNameInTags(p.node.tags, 'Arwiki-Page-Id');
                verifiedPagesList.push(vrfdPageId);
              }
              // Check pending pages against verified pages
              for (let p of pages) {
                if (verifiedPagesList.indexOf(p.id) < 0) {
                  tmp_res.push(p);
                }
              }

              return of(tmp_res);
            })
          )
        );
      })
    )
    .subscribe({
      next: async (pages) => {
        this.pages = pages;
        this.loadingPendingPages = false;
        // Validate owner address with ArVerify
        this.arverifyProcessedAddressesMap = {};
        for (let p of pages) {
          // Avoid duplicates
          if (
            Object.prototype.hasOwnProperty.call(
              this.arverifyProcessedAddressesMap, 
              p.owner
            )
          ) {
            continue;
          }
          const arverifyQuery = await this.getArverifyVerification(p.owner);
          this.arverifyProcessedAddressesMap[p.owner] = arverifyQuery;
        }

      },
      error: (error) => {
        this.message(error, 'error');
        this.loadingPendingPages = false;
      }
    });

  }

  /*
  *	Custom snackbar message
  */
  message(msg: string, panelClass: string = '', verticalPosition: any = undefined) {
    this._snackBar.open(msg, 'X', {
      duration: 8000,
      horizontalPosition: 'center',
      verticalPosition: verticalPosition,
      panelClass: panelClass
    });
  }

  /*
  *	@dev Destroy subscriptions
  */
  ngOnDestroy() {
    if (this.pendingPagesSubscription) {
      this.pendingPagesSubscription.unsubscribe();
    }
  }

  async getArverifyVerification(_address: string) {
    const verification = await getVerification(_address);

    return ({
      verified: verification.verified,
      icon: verification.icon,
      percentage: verification.percentage
    });
  }

  searchKeyNameInTags(_arr: any[], _key: string) {
    let res = '';
    for (const a of _arr) {
      if (a.name.toUpperCase() === _key.toUpperCase()) {
        return a.value;
      }
    }
    return res;
  }

  underscoreToSpace(_s: string) {
    return _s.replace(/[_]/gi, ' ');
  }

  
  confirmValidateArWikiPage(
    _slug: string,
    _content_id: string,
    _category_slug: string
  ) {
    const dialogRef = this._dialog.open(DialogConfirmComponent, {
      data: {
        title: 'Are you sure?',
        content: 'You are about to insert a new arwiki page in the index. Do you want to proceed?'
      }
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        // Create arwiki page
        this.loadingInsertPageIntoIndex = true;
        try {
          const tx = await this.createValidationTXForArwikiPage(
            _content_id,
            _slug,
            _category_slug
          ); 

          this.insertPageTxMessage = tx;
          console.log('res', tx);
          this.message('Success!', 'success');
        } catch (error) {
          this.message(error, 'error');
        }

      }
    });
  }


  async createValidationTXForArwikiPage(
    _pageId: string,
    _slug: string,
    _category: string
  ) {
    const jwk = this._auth.getPrivateKey();
    const data = { pageId: _pageId, slug: _slug, category: _category };
    const tx = await this._arweave.arweave.createTransaction({
      data: JSON.stringify(data)
    }, jwk);
    tx.addTag('Content-Type', 'text/json');
    tx.addTag('Service', 'ArWiki');
    tx.addTag('Arwiki-Type', 'Validation');
    tx.addTag('Arwiki-Page-Id', _pageId);
    tx.addTag('Arwiki-Page-Slug', _slug);
    tx.addTag('Arwiki-Page-Category', _category);
    await this._arweave.arweave.transactions.sign(tx, jwk)
    await this._arweave.arweave.transactions.post(tx)
    return tx.id;
  }
 

}
