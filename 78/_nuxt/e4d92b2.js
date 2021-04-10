(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{532:function(t,e,n){var content=n(651);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("06b2ef16",content,!0,{sourceMap:!1})},533:function(t,e,n){var content=n(655);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("11848e80",content,!0,{sourceMap:!1})},650:function(t,e,n){"use strict";n(532)},651:function(t,e,n){var l=n(12)(!1);l.push([t.i,".word[data-v-99d2f516]{background-color:#e0f6e0;border-radius:10px;padding:3px 0 3px 3px}",""]),t.exports=l},654:function(t,e,n){"use strict";n(533)},655:function(t,e,n){var l=n(12)(!1);l.push([t.i,".zakat-container[data-v-23f92e55]{background-color:#f2f2f2;padding:2% 6%}",""]),t.exports=l},720:function(t,e,n){"use strict";n.r(e);var l=n(1),o=n(26),r=n(27),c=n.n(r),_=n(602),d=n(603),v=n(604),f=n(605),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-expansion-panels",{attrs:{flat:""}},t._l(t.$t("zakat.questions"),(function(e){var l=e.question,o=e.answer;return n("v-expansion-panel",{key:l,staticClass:"my-2",staticStyle:{"border-radius":"10px"}},[n("v-expansion-panel-header",{staticClass:"font-weight-black"},[t._v("\n      "+t._s(l)+"\n    ")]),t._v(" "),n("v-expansion-panel-content",[t._v("\n      "+t._s(o)+"\n    ")])],1)})),1)}),[],!1,null,null,null),m=component.exports;c()(component,{VExpansionPanel:_.a,VExpansionPanelContent:d.a,VExpansionPanelHeader:v.a,VExpansionPanels:f.a});var k=l.default.extend({data:function(){return{goldPrice:3848.83,nisab:326380.784,input:null,updateDate:new Date(2020,6,12)}}}),x=n(203),y=n(474),w=n(473),C=n(120),h=n(197),$=n(163),z=n(68),V=Object(o.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"pb-1",attrs:{flat:""}},[n("v-card-title",{staticClass:"font-weight-black"},[t._v("\n    "+t._s(t.$t("zakat.calculator.title"))+"\n  ")]),t._v(" "),n("v-card-subtitle",{staticClass:"font-weight-bold"},[t._v("\n    "+t._s(t.$t("zakat.calculator.subtitle"))+"\n  ")]),t._v(" "),n("v-card-text",{staticClass:"mt-3"},[n("v-text-field",{attrs:{label:t.$t("zakat.calculator.input_label"),rounded:"",type:"number",min:"0",outlined:""},model:{value:t.input,callback:function(e){t.input=t._n(e)},expression:"input"}})],1),t._v(" "),n("v-list-item",{staticClass:"mt-n8"},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"font-weight-medium"},[t._v("\n        "+t._s(t.$t("zakat.calculator.nisab_for"))+" "+t._s(t.updateDate.toLocaleDateString(t.$i18n.locale))+"\n      ")]),t._v(" "),n("v-list-item-subtitle",{staticClass:"green--text"},[t._v("\n        "+t._s(t.$t("zakat.calculator.acording_to"))+"\n      ")])],1),t._v(" "),n("v-list-item-action",[n("v-list-item-title",{staticClass:"font-weight-medium"},[t._v("\n        "+t._s(t._f("rubles")(t.nisab))+"\n      ")]),t._v(" "),n("v-list-item-subtitle",[t._v("\n        "+t._s(t.$t("zakat.calculator.gold"))+"\n      ")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"font-weight-black"},[t._v("\n        "+t._s(t.$t("zakat.calculator.your_zakat"))+"\n      ")]),t._v(" "),n("v-list-item-subtitle",[t._v("\n        "+t._s(t.$t("zakat.calculator.taxable_amount"))+"\n      ")]),t._v(" "),n("v-list-item-subtitle",[t._v("\n        "+t._s(t.$t("zakat.calculator.taxable_amount2"))+"\n      ")])],1),t._v(" "),n("v-list-item-action",[n("v-list-item-title",{staticClass:"font-weight-black"},[t._v("\n        "+t._s(t._f("rubles")(t.input>t.nisab?.025*t.input:0))+"\n      ")])],1)],1),t._v(" "),n("v-card-actions",{staticClass:"ma-2"},[n("v-btn",{attrs:{rounded:"",disabled:t.input<t.nisab,block:"",color:"primary",large:""}},[t._v("\n      "+t._s(t.$t("zakat.calculator.donate"))+"\n    ")])],1)],1)}),[],!1,null,null,null),E=V.exports;c()(V,{VBtn:x.a,VCard:y.a,VCardActions:w.a,VCardSubtitle:w.b,VCardText:w.c,VCardTitle:w.d,VListItem:C.a,VListItemAction:h.a,VListItemContent:$.a,VListItemSubtitle:$.b,VListItemTitle:$.c,VTextField:z.a});var L=l.default.extend({props:{word:{type:String,required:!0},description:{type:String,required:!0}}}),S=(n(650),n(710)),T=Object(o.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tooltip",{attrs:{top:"","max-width":"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("span",t._g({staticClass:"word"},l),[t._v("\n      "+t._s(t.word)+"\n    ")])]}}])},[t._v(" "),n("span",[t._v(t._s(t.description))])])}),[],!1,null,"99d2f516",null),M=T.exports;c()(T,{VTooltip:S.a});var D=l.default.extend({components:{MyTooltip:M}}),P=Object(o.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"pa-6",attrs:{flat:""}},[n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/PNwRFQDfoD8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),n("h2",{staticClass:"my-4"},[t._v("\n    "+t._s(t.$t("zakat.about.what_is_zakat.question"))+"\n  ")]),t._v(" "),t._l(t.$t("zakat.about.what_is_zakat.paragraphs"),(function(e,i){return n("p",{key:i},[t._l(e,(function(e,l){return["string"==typeof e?n("span",{key:l},[t._v(t._s(e))]):n("MyTooltip",{key:l,attrs:{word:e.text,description:e.description}})]}))],2)})),t._v(" "),n("h2",[t._v(t._s(t.$t("zakat.about.required_to_pay.question")))]),t._v(" "),n("h3",[t._v(t._s(t.$t("zakat.about.required_to_pay.should_be")))]),t._v(" "),n("ul",{staticClass:"my-2",staticStyle:{"list-style-type":"'— '"}},t._l(t.$t("zakat.about.required_to_pay.list"),(function(e,i){return n("li",{key:i},[t._l(e,(function(e,l){return["string"==typeof e?n("span",{key:l},[t._v(t._s(e))]):n("MyTooltip",{key:l,attrs:{word:e.text,description:e.description}})]}))],2)})),0),t._v(" "),n("p",[t._v(t._s(t.$t("zakat.about.required_to_pay.conditions")))])],2)}),[],!1,null,null,null),j=P.exports;c()(P,{VCard:y.a});var I=l.default.extend({components:{QuestionList:m,ZakatCalculator:E,ZakatAbout:j}}),O=(n(654),n(464)),A=n(465),Z=n(466),Q=Object(o.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"zakat-container",attrs:{fluid:""}},[n("h1",[t._v(t._s(t.$t("zakat.title")))]),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pt-2 pr-2",attrs:{cols:"12",md:"8"}},[n("ZakatAbout"),t._v(" "),n("QuestionList")],1),t._v(" "),n("v-col",{staticClass:"pt-2 pl-5",attrs:{cols:"6",md:"3"}},[n("ZakatCalculator")],1)],1)],1)}),[],!1,null,"23f92e55",null);e.default=Q.exports;c()(Q,{VCol:O.a,VContainer:A.a,VRow:Z.a})}}]);