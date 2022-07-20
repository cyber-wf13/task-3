(function(){"use strict";var e={9832:function(e,t,l){var s=l(9242),i=l(3396),a=l(7139);const n={class:"container"},r={class:"content"},c={class:"content__title"},o={key:0,class:"form__error-message"},_=(0,i._)("button",{class:"form__button form__submit",type:"submit"}," Отправить ",-1);function d(e,t,l,d,h,f){const u=(0,i.up)("TextField"),b=(0,i.up)("ItemsField");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",r,[(0,i._)("h2",c," Элементов сохранено: "+(0,a.zw)(h.savedListItemsCount),1),(0,i._)("form",{class:"content__form form",onSubmit:t[2]||(t[2]=(0,s.iM)(((...e)=>f.handleSubmitForm&&f.handleSubmitForm(...e)),["prevent"]))},[h.isError?((0,i.wg)(),(0,i.iD)("span",o,(0,a.zw)(h.errorMessage),1)):(0,i.kq)("",!0),(0,i.Wm)(u,{class:"form__field",title:"Введите страну",onChange:t[0]||(t[0]=e=>h.countryInput=e.target.value)}),_,(0,i._)("button",{class:"form__button form__reset",type:"reset",onClick:t[1]||(t[1]=(...e)=>f.handleResetForm&&f.handleResetForm(...e))}," Сброс ")],32),(0,i.Wm)(b,{title:"Список університетів",listItems:h.universInfo},null,8,["listItems"])])])}const h={class:"items-field"},f={class:"items-field__title"},u={class:"items-field__table field-table"},b=(0,i._)("thead",{class:"field-table__head"},[(0,i._)("tr",{class:"field-table__row field-table__head-row"},[(0,i._)("th",{class:"field-table__ceil field-table__head-ceil"},"Id"),(0,i._)("th",{class:"field-table__ceil field-table__head-ceil"},"Код страны"),(0,i._)("th",{class:"field-table__ceil field-table__head-ceil"},"Расположение"),(0,i._)("th",{class:"field-table__ceil field-table__head-ceil"},"Страна"),(0,i._)("th",{class:"field-table__ceil field-table__head-ceil"},"Название"),(0,i._)("th",{class:"field-table__ceil field-table__head-ceil"},"Домен"),(0,i._)("th",{class:"field-table__ceil field-table__head-ceil"},"Ссылка"),(0,i._)("th",{class:"field-table__ceil field-table__head-ceil"},"Сохранить")])],-1),m={class:"field-table__body"},g=["onChange"],p={class:"field-table__ceil field-table__body-ceil"},v={class:"field-table__ceil field-table__body-ceil"},I={class:"field-table__ceil field-table__body-ceil"},y={class:"field-table__ceil field-table__body-ceil"},k={class:"field-table__ceil field-table__body-ceil"},w={class:"field-table__ceil field-table__body-ceil"},O={class:"field-table__ceil field-table__body-ceil"},S=["href"],C={class:"field-table__ceil field-table__body-ceil"},F=["checked"];function x(e,t,l,s,n,r){return(0,i.wg)(),(0,i.iD)("div",h,[(0,i._)("h4",f,(0,a.zw)(l.title),1),(0,i._)("table",u,[b,(0,i._)("tbody",m,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.listOfItems,((e,t)=>((0,i.wg)(),(0,i.iD)("tr",{class:"field-table__row field-table__body-row",key:t,onChange:e=>r.checkSaveHandle(t,e)},[(0,i._)("th",p,(0,a.zw)(t+1),1),(0,i._)("th",v,(0,a.zw)(e.alpha_two_code),1),(0,i._)("th",I,(0,a.zw)(e["state-province"]?e["state-province"]:"Н/А"),1),(0,i._)("th",y,(0,a.zw)(e.country),1),(0,i._)("th",k,(0,a.zw)(e.name),1),(0,i._)("th",w,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.domains,(e=>((0,i.wg)(),(0,i.iD)("span",{class:"field-table__text-accent",key:e},(0,a.zw)(e),1)))),128))]),(0,i._)("th",O,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.web_pages,(e=>((0,i.wg)(),(0,i.iD)("a",{class:"field-table__link",key:e,href:e,target:"_blank"},(0,a.zw)(e),9,S)))),128))]),(0,i._)("th",C,[(0,i._)("input",{type:"checkbox",checked:e.checked},null,8,F)])],40,g)))),128))])])])}const z={class:"input-field__title"},D=["placeholder"];function U(e,t,l,s,n,r){return(0,i.wg)(),(0,i.iD)("label",{class:(0,a.C_)(["input-field",e.$attrs.class])},[(0,i._)("h4",z,(0,a.zw)(l.title),1),(0,i._)("input",{type:"text",class:"input-field__control",onChange:t[0]||(t[0]=(...t)=>e.$attrs.onChange&&e.$attrs.onChange(...t)),placeholder:e.$attrs.placeholder},null,40,D)],2)}var E={props:{title:{default:"Control title",type:String}},inheritAttrs:!1},j=l(89);const M=(0,j.Z)(E,[["render",U]]);var H=M,L={props:{listItems:{type:Array,default:[]},title:{type:String,default:"Default title"}},mounted(){this.listOfItems=[...this.checkUniversLocalStorage()]},data(){return{listOfItems:[...this.listItems],checkedItems:localStorage.getItem("checkedItems")||0}},methods:{tableChangeHandle(e){const t=e.currentTarget.value;this.listOfItems.push(t),this.$emit("tableChange",this.listOfItems)},checkSaveHandle(e,t){let l=t.target.checked;if(l)this.listOfItems[e].checked=!0,this.saveUnivers.push(this.listOfItems[e]),this.checkedItems=Number(this.checkedItems)+1;else{this.listOfItems[e].checked=!1;const t=this.saveUnivers.findIndex((t=>t.name==this.listOfItems[e].name));this.saveUnivers.splice(t,1),this.checkedItems=Number(this.checkedItems)-1}localStorage.setItem("univers",JSON.stringify(this.saveUnivers)),localStorage.setItem("checkedItems",this.checkedItems)},checkUniversLocalStorage(){if(localStorage.getItem("univers")){const e=JSON.parse(localStorage.getItem("univers"));return e}return[]}},watch:{listItems(e){const t=e.map((e=>Object.assign(e,{checked:!1})));this.listOfItems=[...this.checkUniversLocalStorage(),...t]}},computed:{saveUnivers(){return[...this.checkUniversLocalStorage()]}},components:{TextField:H}};const T=(0,j.Z)(L,[["render",x]]);var $=T,N={name:"App",components:{TextField:H,ItemsField:$},mounted(){},data(){return{countryInput:"",universInfo:[],savedListItemsCount:Number(localStorage.getItem("checkedItems"))||0,isError:!1,errorMessage:"Error!!"}},methods:{async getUnivers(e){let t=`https://universities.hipolabs.com/search?country=${e}`;const l=await fetch(t).catch((()=>{this.generateErrorMessage("Проблемы с соединением")}));if(l.ok)return l.json()},handleSubmitForm(){""!=this.countryInput&&this.getUnivers(this.countryInput).then((e=>{0!=e.length?(this.universInfo=[...e],this.isError=!1):this.generateErrorMessage("Введите название страны")}))},handleResetForm(){this.countryInput="",this.universInfo=[],localStorage.clear()},generateErrorMessage(e){this.errorMessage=e,this.isError=!0}}};const A=(0,j.Z)(N,[["render",d]]);var K=A;(0,s.ri)(K).mount("#app")}},t={};function l(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,l),a.exports}l.m=e,function(){var e=[];l.O=function(t,s,i,a){if(!s){var n=1/0;for(_=0;_<e.length;_++){s=e[_][0],i=e[_][1],a=e[_][2];for(var r=!0,c=0;c<s.length;c++)(!1&a||n>=a)&&Object.keys(l.O).every((function(e){return l.O[e](s[c])}))?s.splice(c--,1):(r=!1,a<n&&(n=a));if(r){e.splice(_--,1);var o=i();void 0!==o&&(t=o)}}return t}a=a||0;for(var _=e.length;_>0&&e[_-1][2]>a;_--)e[_]=e[_-1];e[_]=[s,i,a]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var s in t)l.o(t,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,a,n=s[0],r=s[1],c=s[2],o=0;if(n.some((function(t){return 0!==e[t]}))){for(i in r)l.o(r,i)&&(l.m[i]=r[i]);if(c)var _=c(l)}for(t&&t(s);o<n.length;o++)a=n[o],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(_)},s=self["webpackChunktask_3"]=self["webpackChunktask_3"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=l.O(void 0,[998],(function(){return l(9832)}));s=l.O(s)})();
//# sourceMappingURL=app.66ffe72b.js.map
