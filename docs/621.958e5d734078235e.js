"use strict";(self.webpackChunkcountryApp=self.webpackChunkcountryApp||[]).push([[621],{8621:(I,m,s)=>{s.r(m),s.d(m,{CountriesModule:()=>w});var u=s(6814),l=s(3760),t=s(4946),g=s(6306),d=s(2096),Z=s(7398),_=s(9862);let p=(()=>{class e{constructor(n){this.http=n,this.apiUrl="https://restcountries.com/v3.1"}searchBy(n){const{query:o,endpoint:r}=n;return this.http.get(`${this.apiUrl}/${r}/${o}`).pipe((0,g.K)(c=>(console.log(c),(0,d.of)([]))))}searchByAlphaCode(n){return this.http.get(`${this.apiUrl}/alpha/${n}`).pipe((0,Z.U)(r=>r.length>0?r[0]:null),(0,g.K)(()=>(0,d.of)(null)))}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(_.eN))};static#n=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),y=(()=>{class e{constructor(){this.placeholder="",this.onValue=new t.vpe}emitValue(n){n&&this.onValue.emit(n)}static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder"},outputs:{onValue:"onValue"},decls:2,vars:1,consts:[["type","text",1,"form-control",3,"placeholder","keyup.enter"],["txtInput",""]],template:function(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"input",0,1),t.NdJ("keyup.enter",function(){t.CHM(a);const S=t.MAs(1);return t.KtG(r.emitValue(S.value))}),t.qZA()}2&o&&t.Q6J("placeholder",r.placeholder)},encapsulation:2})}return e})();function f(e,i){1&e&&(t.TgZ(0,"div",2),t._uU(1," No hay paises que mostrar\n"),t.qZA())}const T=function(e){return["/countries/by",e]};function A(e,i){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"td")(15,"a",6),t._uU(16,"Info"),t.qZA()()()),2&e){const n=i.$implicit,o=i.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.hij(" ",n.region," "),t.xp6(2),t.s9C("src",n.flags.svg,t.LSH),t.s9C("alt",n.name),t.xp6(2),t.hij(" ",n.name.common," "),t.xp6(2),t.hij(" ",n.capital," "),t.xp6(2),t.hij(" ",t.lcZ(13,8,n.population)," "),t.xp6(3),t.Q6J("routerLink",t.VKq(10,T,n.cca3))}}function v(e,i){if(1&e&&(t.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),t._uU(4," # "),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Regi\xf3n"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Bandera"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Nombre"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Capital"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Poblaci\xf3n"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Actions"),t.qZA()()(),t.TgZ(17,"tbody"),t.YNc(18,A,17,12,"tr",4),t.qZA()()),2&e){const n=t.oxw();t.xp6(18),t.Q6J("ngForOf",n.countries)}}let h=(()=>{class e{constructor(){this.countries=[]}static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],["width","15",3,"src","alt"],[1,"btn","btn-primary",3,"routerLink"]],template:function(o,r){if(1&o&&(t.YNc(0,f,2,0,"div",0),t.YNc(1,v,19,1,"ng-template",null,1,t.W1O)),2&o){const a=t.MAs(2);t.Q6J("ngIf",0===r.countries.length)("ngIfElse",a)}},dependencies:[u.sg,u.O5,l.rH,u.JJ],encapsulation:2})}return e})(),C=(()=>{class e{constructor(n){this.countriesService=n,this.countries=[]}searchByCaptial(n){this.countriesService.searchBy({query:n,endpoint:"capital"}).subscribe(o=>{this.countries=o})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(p))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-by-captial-page"]],decls:12,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"onValue"],[3,"countries"]],template:function(o,r){1&o&&(t.TgZ(0,"h2"),t._uU(1,"Por capital"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onValue",function(c){return r.searchByCaptial(c)}),t.qZA(),t._UZ(6,"hr"),t.qZA()(),t.TgZ(7,"div",0)(8,"div",1),t._uU(9," tabla de resultados "),t._UZ(10,"hr")(11,"countries-table",3),t.qZA()()),2&o&&(t.xp6(11),t.Q6J("countries",r.countries))},dependencies:[y,h],encapsulation:2})}return e})(),U=(()=>{class e{constructor(n){this.countriesService=n,this.countries=[]}searchByCountry(n){this.countriesService.searchBy({query:n,endpoint:"name"}).subscribe(o=>{this.countries=o})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(p))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-by-country-page"]],decls:12,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xeds",3,"onValue"],[3,"countries"]],template:function(o,r){1&o&&(t.TgZ(0,"h2"),t._uU(1,"Por Pa\xeds"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onValue",function(c){return r.searchByCountry(c)}),t.qZA(),t._UZ(6,"hr"),t.qZA()(),t.TgZ(7,"div",0)(8,"div",1),t._uU(9," tabla de resultados "),t._UZ(10,"hr")(11,"countries-table",3),t.qZA()()),2&o&&(t.xp6(11),t.Q6J("countries",r.countries))},dependencies:[y,h],encapsulation:2})}return e})();function q(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"button",4),t.NdJ("click",function(){const a=t.CHM(n).$implicit,c=t.oxw();return t.KtG(c.searchByRegion(a))}),t._uU(1),t.qZA()}if(2&e){const n=i.$implicit;t.xp6(1),t.Oqu(n)}}let b=(()=>{class e{constructor(n){this.countriesService=n,this.countries=[],this.regions=["Asia","Americas","Africa","Antarctic","Europe","Oceania"]}searchByRegion(n){this.countriesService.searchBy({query:n,endpoint:"region"}).subscribe(o=>{this.countries=o})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(p))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-by-region-page"]],decls:12,vars:2,consts:[[1,"row"],[1,"col"],["class","btn btn-primary m-1",3,"click",4,"ngFor","ngForOf"],[3,"countries"],[1,"btn","btn-primary","m-1",3,"click"]],template:function(o,r){1&o&&(t.TgZ(0,"h2"),t._uU(1,"Por regi\xf3n"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1),t.YNc(5,q,2,1,"button",2),t._UZ(6,"hr"),t.qZA()(),t.TgZ(7,"div",0)(8,"div",1),t._uU(9," tabla de resultados "),t._UZ(10,"hr")(11,"countries-table",3),t.qZA()()),2&o&&(t.xp6(5),t.Q6J("ngForOf",r.regions),t.xp6(6),t.Q6J("countries",r.countries))},dependencies:[u.sg,h],encapsulation:2})}return e})();var x=s(4664);function B(e,i){1&e&&(t.TgZ(0,"div",2),t._uU(1,"Espere porfavor"),t.qZA())}function F(e,i){if(1&e&&(t.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),t._uU(4,"Pa\xeds: "),t.TgZ(5,"strong"),t._uU(6),t.qZA()(),t._UZ(7,"hr"),t.qZA()(),t.TgZ(8,"div",3)(9,"div",5)(10,"h3"),t._uU(11,"Bandera"),t.qZA(),t._UZ(12,"img",6),t.qZA(),t.TgZ(13,"div",7)(14,"h3"),t._uU(15,"Informaci\xf3n"),t.qZA(),t.TgZ(16,"ul",8)(17,"li",9)(18,"strong"),t._uU(19,"Poblacion: "),t.qZA(),t._uU(20),t.ALo(21,"number"),t.qZA(),t.TgZ(22,"li",9)(23,"strong"),t._uU(24,"C\xf3digo: "),t.qZA(),t._uU(25),t.qZA()()()(),t.TgZ(26,"div",10)(27,"div",7)(28,"h3"),t._uU(29,"Traducciones"),t.qZA(),t.TgZ(30,"div",11)(31,"span",12),t._uU(32),t.qZA(),t.TgZ(33,"span",12),t._uU(34),t.qZA(),t.TgZ(35,"span",12),t._uU(36),t.qZA(),t.TgZ(37,"span",12),t._uU(38),t.qZA(),t.TgZ(39,"span",12),t._uU(40),t.qZA(),t.TgZ(41,"span",12),t._uU(42),t.qZA(),t.TgZ(43,"span",12),t._uU(44),t.qZA(),t.TgZ(45,"span",12),t._uU(46),t.qZA(),t.TgZ(47,"span",12),t._uU(48),t.qZA(),t.TgZ(49,"span",12),t._uU(50),t.qZA()()()()()),2&e){const n=t.oxw();t.xp6(6),t.Oqu(n.country.name.common),t.xp6(6),t.s9C("src",n.country.flags.svg,t.LSH),t.s9C("alt",n.country.name.common),t.xp6(8),t.hij(" ",t.lcZ(21,15,n.country.population)," "),t.xp6(5),t.hij(" ",n.country.cca3," "),t.xp6(7),t.Oqu(null==n.country.translations.ara?null:n.country.translations.ara.common),t.xp6(2),t.Oqu(null==n.country.translations.bre?null:n.country.translations.bre.common),t.xp6(2),t.Oqu(null==n.country.translations.ces?null:n.country.translations.ces.common),t.xp6(2),t.Oqu(null==n.country.translations.cym?null:n.country.translations.cym.common),t.xp6(2),t.Oqu(null==n.country.translations.deu?null:n.country.translations.deu.common),t.xp6(2),t.Oqu(null==n.country.translations.est?null:n.country.translations.est.common),t.xp6(2),t.Oqu(null==n.country.translations.fin?null:n.country.translations.fin.common),t.xp6(2),t.Oqu(null==n.country.translations.jpn?null:n.country.translations.jpn.common),t.xp6(2),t.Oqu(null==n.country.translations.kor?null:n.country.translations.kor.common),t.xp6(2),t.Oqu(null==n.country.translations.per?null:n.country.translations.per.common)}}const O=[{path:"by-capital",component:C},{path:"by-country",component:U},{path:"by-region",component:b},{path:"by/:id",component:(()=>{class e{constructor(n,o,r){this.activatedRoute=n,this.countriesService=o,this.router=r}ngOnInit(){this.activatedRoute.params.pipe((0,x.w)(({id:n})=>this.countriesService.searchByAlphaCode(n))).subscribe(n=>n?this.country=n:this.router.navigateByUrl(""))}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(l.gz),t.Y36(p),t.Y36(l.F0))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(o,r){if(1&o&&(t.YNc(0,B,2,0,"ng-template",null,0,t.W1O),t.YNc(2,F,51,17,"div",1)),2&o){const a=t.MAs(1);t.xp6(2),t.Q6J("ngIf",r.country)("ngIfElse",a)}},dependencies:[u.O5,u.JJ],encapsulation:2})}return e})()},{path:"**",redirectTo:"by-capital"}];let P=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(O),l.Bz]})}return e})();var J=s(6208);let w=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[u.ez,P,J.m]})}return e})()}}]);