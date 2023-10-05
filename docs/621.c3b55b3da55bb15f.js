"use strict";(self.webpackChunkcountryApp=self.webpackChunkcountryApp||[]).push([[621],{8621:(B,m,a)=>{a.r(m),a.d(m,{CountriesModule:()=>A});var i=a(6814),d=a(3760),t=a(4946),g=a(6306),y=a(2096),Z=a(9862);let p=(()=>{class e{constructor(o){this.http=o,this.apiUrl="https://restcountries.com/v3.1"}searchFrom(o){const{query:n,endpoint:r}=o;return this.http.get(`${this.apiUrl}/${r}/${n}`).pipe((0,g.K)(c=>(console.log(c),(0,y.of)([]))))}static#t=this.\u0275fac=function(n){return new(n||e)(t.LFG(Z.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),l=(()=>{class e{constructor(){this.placeholder="",this.onValue=new t.vpe}emitValue(o){o&&this.onValue.emit(o)}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder"},outputs:{onValue:"onValue"},decls:2,vars:1,consts:[["type","text",1,"form-control",3,"placeholder","keyup.enter"],["txtInput",""]],template:function(n,r){if(1&n){const s=t.EpF();t.TgZ(0,"input",0,1),t.NdJ("keyup.enter",function(){t.CHM(s);const U=t.MAs(1);return t.KtG(r.emitValue(U.value))}),t.qZA()}2&n&&t.Q6J("placeholder",r.placeholder)},encapsulation:2})}return e})();function f(e,u){1&e&&(t.TgZ(0,"div",2),t._uU(1," No hay paises que mostrar\n"),t.qZA())}function C(e,u){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"number"),t.qZA()()),2&e){const o=u.$implicit,n=u.index;t.xp6(2),t.Oqu(n+1),t.xp6(2),t.hij(" ",o.region," "),t.xp6(2),t.s9C("src",o.flags.svg,t.LSH),t.s9C("alt",o.name),t.xp6(2),t.hij(" ",o.name.common," "),t.xp6(2),t.hij(" ",o.capital," "),t.xp6(2),t.hij(" ",t.lcZ(13,7,o.population)," ")}}function _(e,u){if(1&e&&(t.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),t._uU(4," # "),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Regi\xf3n"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Bandera"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Nombre"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Capital"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Poblaci\xf3n"),t.qZA()()(),t.TgZ(15,"tbody"),t.YNc(16,C,14,9,"tr",4),t.qZA()()),2&e){const o=t.oxw();t.xp6(16),t.Q6J("ngForOf",o.countries)}}let h=(()=>{class e{constructor(){this.countries=[]}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],["width","15",3,"src","alt"]],template:function(n,r){if(1&n&&(t.YNc(0,f,2,0,"div",0),t.YNc(1,_,17,1,"ng-template",null,1,t.W1O)),2&n){const s=t.MAs(2);t.Q6J("ngIf",0===r.countries.length)("ngIfElse",s)}},dependencies:[i.sg,i.O5,i.JJ],encapsulation:2})}return e})();const T=[{path:"by-capital",component:(()=>{class e{constructor(o){this.countriesService=o,this.countries=[]}searchByCaptial(o){this.countriesService.searchFrom({query:o,endpoint:"capital"}).subscribe(n=>{this.countries=n})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(p))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-by-captial-page"]],decls:12,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"onValue"],[3,"countries"]],template:function(n,r){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por capital"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onValue",function(c){return r.searchByCaptial(c)}),t.qZA(),t._UZ(6,"hr"),t.qZA()(),t.TgZ(7,"div",0)(8,"div",1),t._uU(9," tabla de resultados "),t._UZ(10,"hr")(11,"countries-table",3),t.qZA()()),2&n&&(t.xp6(11),t.Q6J("countries",r.countries))},dependencies:[l,h],encapsulation:2})}return e})()},{path:"by-country",component:(()=>{class e{constructor(o){this.countriesService=o,this.countries=[]}searchByCountry(o){this.countriesService.searchFrom({query:o,endpoint:"name"}).subscribe(n=>{this.countries=n})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(p))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-by-country-page"]],decls:12,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xeds",3,"onValue"],[3,"countries"]],template:function(n,r){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por Pa\xeds"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onValue",function(c){return r.searchByCountry(c)}),t.qZA(),t._UZ(6,"hr"),t.qZA()(),t.TgZ(7,"div",0)(8,"div",1),t._uU(9," tabla de resultados "),t._UZ(10,"hr")(11,"countries-table",3),t.qZA()()),2&n&&(t.xp6(11),t.Q6J("countries",r.countries))},dependencies:[l,h],encapsulation:2})}return e})()},{path:"by-region",component:(()=>{class e{constructor(o){this.countriesService=o,this.countries=[]}searchByRegion(o){this.countriesService.searchFrom({query:o,endpoint:"region"}).subscribe(n=>{this.countries=n})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(p))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-by-region-page"]],decls:12,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por regi\xf3n",3,"onValue"],[3,"countries"]],template:function(n,r){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por regi\xf3n"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onValue",function(c){return r.searchByRegion(c)}),t.qZA(),t._UZ(6,"hr"),t.qZA()(),t.TgZ(7,"div",0)(8,"div",1),t._uU(9," tabla de resultados "),t._UZ(10,"hr")(11,"countries-table",3),t.qZA()()),2&n&&(t.xp6(11),t.Q6J("countries",r.countries))},dependencies:[l,h],encapsulation:2})}return e})()},{path:"by/:id",component:(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-country-page"]],decls:2,vars:0,template:function(n,r){1&n&&(t.TgZ(0,"p"),t._uU(1,"country-page works!"),t.qZA())},encapsulation:2})}return e})()},{path:"**",redirectTo:"by-capital"}];let v=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(T),d.Bz]})}return e})();var b=a(6208);let A=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[i.ez,v,b.m]})}return e})()}}]);