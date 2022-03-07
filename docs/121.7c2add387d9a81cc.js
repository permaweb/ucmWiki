"use strict";(self.webpackChunkarwiki=self.webpackChunkarwiki||[]).push([[121],{16666:(q,v,n)=>{n.r(v),n.d(v,{CategoryModule:()=>z});var u=n(69808),C=n(60870),m=n(68555),p=n(70655),T=n(51614),x=n(42654),A=n(21086),L=n(31783),f=n(87545),P=n(38952),t=n(5e3),M=n(46649),I=n(32094),b=n(57261),D=n(69817),O=n(47423),Z=n(25245),k=n(20773),N=n(65503),R=n(41496);function E(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",7)(1,"h1",8),t._uU(2),t.ALo(3,"translate"),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",9)(6,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().goBack()}),t.TgZ(7,"mat-icon"),t._uU(8,"navigate_before"),t.qZA(),t._uU(9),t.ALo(10,"translate"),t.qZA()()()}if(2&i){const e=t.oxw();t.xp6(2),t.AsE(" ",t.lcZ(3,3,"CATEGORY.BREADCRUMB_LABEL")," ",t.lcZ(4,5,"MAIN_MENU."+e.category)," "),t.xp6(7),t.hij(" ",t.lcZ(10,7,"GENERAL.BUTTONS.GO_BACK")," ")}}function U(i,o){1&i&&t._UZ(0,"mat-spinner",11)}function B(i,o){1&i&&(t.TgZ(0,"div",13),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"GENERAL.LABELS.NO_RESULTS")," "))}function S(i,o){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,B,3,3,"div",12),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",!e.pages.length)}}function Q(i,o){if(1&i&&(t.TgZ(0,"div",15),t._UZ(1,"app-article-card",16),t.qZA()),2&i){const e=o.$implicit,a=t.oxw(2);t.xp6(1),t.Q6J("article",e)("articleData",a.pagesData[e.id])("routeLang",a.routeLang)("baseURL",a.baseURL)("defaultTheme",a.defaultTheme)}}function Y(i,o){if(1&i&&(t.TgZ(0,"div",2),t.YNc(1,Q,2,5,"div",14),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.pages)}}const V=[{path:"",component:(()=>{class i{constructor(e,a,g,s,l,r){this._arweave=e,this._arwikiTokenContract=a,this._snackBar=g,this._route=s,this._location=l,this._userSettings=r,this.pagesSubscription=x.w.EMPTY,this.loadingPages=!1,this.category="",this.pages=[],this.routeLang="",this.pagesData={},this.baseURL=this._arweave.baseURL,this.arverifyProcessedAddressesMap={},this.defaultTheme="",this.errorLoadingCategory=!1}ngOnInit(){return(0,p.mG)(this,void 0,void 0,function*(){this.arwikiQuery=new T.x(this._arweave.arweave),this.category=this._route.snapshot.paramMap.get("category"),this.routeLang=this._route.snapshot.paramMap.get("lang"),this.getDefaultTheme(),this._route.paramMap.subscribe(e=>(0,p.mG)(this,void 0,void 0,function*(){this.routeLang=e.get("lang"),this.category=e.get("category"),yield this._loadContent()}))})}_loadContent(){return(0,p.mG)(this,void 0,void 0,function*(){this.loadingPages=!0;let e,a=0;try{e=yield this._arweave.arweave.network.getInfo(),a=e.height}catch(g){return void this.message(`${g}`,"error")}this.pagesSubscription=this.getPagesByCategory(this.category,this.routeLang,a).subscribe({next:g=>(0,p.mG)(this,void 0,void 0,function*(){this.pages=g,this.pagesData={},this.loadingPages=!1;for(let s of this.pages){let l=!1;try{let r=yield this._arweave.arweave.transactions.getData(s.id,{decode:!0,string:!0});this.pagesData[s.id]=r}catch(r){console.error("ErrLoading:",r),l=!0}if(l)try{console.warn("Fetching data from gw ...",s.id);const r=yield fetch(`${this._arweave.baseURL}${s.id}`);if(!r.ok)throw Error("Error fetching data!");this.pagesData[s.id]=yield r.text()}catch(r){console.error("ERR",r)}}this.arverifyProcessedAddressesMap={};for(let s of this.pages){if(Object.prototype.hasOwnProperty.call(this.arverifyProcessedAddressesMap,s.owner))continue;const l=yield this.getArverifyVerification(s.owner);this.arverifyProcessedAddressesMap[s.owner]=l}}),error:g=>{this.message(g,"error"),this.loadingPages=!1,this.errorLoadingCategory=!0}})})}slugToLabel(e){return e.replace(/_/gi," ")}message(e,a="",g){this._snackBar.open(e,"X",{duration:8e3,horizontalPosition:"center",verticalPosition:g,panelClass:a})}ngOnDestroy(){this.pagesSubscription&&this.pagesSubscription.unsubscribe()}getArverifyVerification(e){return(0,p.mG)(this,void 0,void 0,function*(){const a=yield(0,L.Ni)(e);return{verified:a.verified,icon:a.icon,percentage:a.percentage}})}sanitizeMarkdown(e){return`${(e=e.replace(/[#*=\[\]]/gi,"")).substring(0,250)} ...`}sanitizeImg(e){return e.indexOf("http")>=0?e:e?`${this.baseURL}${e}`:""}goBack(){this._location.back()}getPagesByCategory(e,a,g,s=100){let l=[],r=[],y={};return this._arwikiTokenContract.getAdminList().pipe((0,f.w)(c=>(l=c,this._arwikiTokenContract.getCategories())),(0,f.w)(c=>{if(!(e in c))throw new Error("Invalid category!");return this._arwikiTokenContract.getApprovedPages(a,-1,!0)}),(0,f.w)(c=>(y=c,r=Object.keys(c).filter(h=>c[h].category===e).map(h=>c[h].content),this.arwikiQuery.getTXsData(r))),(0,f.w)(c=>{const h=[];for(let G of c){const d=new P.default(G,this._arweave.arweave),j=this.arwikiQuery.searchKeyNameInTags(d.tags,"Arwiki-Page-Title"),w=this.arwikiQuery.searchKeyNameInTags(d.tags,"Arwiki-Page-Slug"),F=this.arwikiQuery.searchKeyNameInTags(d.tags,"Arwiki-Page-Category"),$=this.arwikiQuery.searchKeyNameInTags(d.tags,"Arwiki-Page-Img"),K=this.arwikiQuery.searchKeyNameInTags(d.tags,"Arwiki-Page-Lang");h.push({title:j,slug:w,category:F,img:$,owner:d.owner.address,id:d.id,language:K,sponsor:y[w].sponsor})}return(0,A.of)(h)}))}getDefaultTheme(){this.defaultTheme=this._userSettings.getDefaultTheme(),this._userSettings.defaultThemeStream.subscribe(e=>{this.defaultTheme=e})}validateObj(e){return!!Object.keys(e).length}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(M.N),t.Y36(I.d),t.Y36(b.ux),t.Y36(m.gz),t.Y36(u.Ye),t.Y36(D.s))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],decls:7,vars:4,consts:[[1,"container","category-page-container"],["class","row fadeIn",4,"ngIf"],[1,"row"],[1,"col-12"],["class","spinner-center",4,"ngIf"],[4,"ngIf"],["class","row",4,"ngIf"],[1,"row","fadeIn"],[1,"page-title","col-12","col-md-9"],[1,"text-right","page-title-buttons","col-12","col-md-3"],["type","button","mat-button","","color","primary",1,"btn-toolbar",3,"click"],[1,"spinner-center"],["class","text-left fadeIn",4,"ngIf"],[1,"text-left","fadeIn"],["class","col-12 col-md-6 card-page fadeIn",4,"ngFor","ngForOf"],[1,"col-12","col-md-6","card-page","fadeIn"],[3,"article","articleData","routeLang","baseURL","defaultTheme"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.YNc(1,E,11,9,"div",1),t.TgZ(2,"div",2)(3,"div",3),t.YNc(4,U,1,0,"mat-spinner",4),t.YNc(5,S,2,1,"div",5),t.qZA()(),t.YNc(6,Y,2,1,"div",6),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",!a.loadingPages&&!a.errorLoadingCategory),t.xp6(3),t.Q6J("ngIf",a.loadingPages),t.xp6(1),t.Q6J("ngIf",!a.loadingPages),t.xp6(1),t.Q6J("ngIf",!a.loadingPages))},directives:[u.O5,O.lW,Z.Hw,k.Ou,u.sg,N.y],pipes:[R.X$],styles:[".category-page-container[_ngcontent-%COMP%]{min-height:600px;margin-top:100px}.card-title[_ngcontent-%COMP%]{font-size:2.5rem;font-family:Roboto Mono,monospace;margin-bottom:20px;cursor:pointer}.card-page[_ngcontent-%COMP%]{margin-bottom:20px;margin-top:20px}.card-preview[_ngcontent-%COMP%]{margin-bottom:20px}.mini-text[_ngcontent-%COMP%]{font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.page-title[_ngcontent-%COMP%], .page-title-buttons[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}.btn-toolbar[_ngcontent-%COMP%]{color:inherit}"]}),i})()}];let J=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[m.Bz.forChild(V)],m.Bz]}),i})(),z=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[u.ez,J,C.m]]}),i})()}}]);