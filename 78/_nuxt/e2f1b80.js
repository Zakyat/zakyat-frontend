(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{481:function(t,e,n){t.exports=n.p+"img/1.1d8564f.png"},515:function(t,e,n){var content=n(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("e752a3ee",content,!0,{sourceMap:!1})},517:function(t,e,n){var content=n(609);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("b8664372",content,!0,{sourceMap:!1})},518:function(t,e,n){var content=n(611);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2c9e3fd1",content,!0,{sourceMap:!1})},606:function(t,e,n){"use strict";n(515)},607:function(t,e,n){var r=n(12)(!1);r.push([t.i,".tag-item[data-v-ed86a2c0]{border-color:#000}.black--text[data-v-ed86a2c0] label{color:#000}",""]),t.exports=r},608:function(t,e,n){"use strict";n(517)},609:function(t,e,n){var r=n(12)(!1);r.push([t.i,".description{display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden;height:110px}",""]),t.exports=r},610:function(t,e,n){"use strict";n(518)},611:function(t,e,n){var r=n(12)(!1);r.push([t.i,".sadaka-card[data-v-11b51bfc]{width:310px}.amounts[data-v-11b51bfc]{border:1px solid #000;border-radius:25px}",""]),t.exports=r},719:function(t,e,n){"use strict";n.r(e);var r,o=n(1),l=n(482),c=n(131),d=n.n(c),v=o.default.extend({data:function(){return{selectedTags:[],postTags:[]}},apollo:{postTags:{query:d()(r||(r=Object(l.a)(["\n        query {\n          postTags {\n            id\n            name\n          }\n        }\n      "])))}},methods:{removeTag:function(t){this.selectedTags.splice(this.selectedTags.indexOf(t),1)},removeAllTags:function(){this.selectedTags=[]}}}),m=(n(606),n(26)),_=n(27),f=n.n(_),x=n(203),h=n(463),w=n(200),y=n(198),C=n(196),k=n(516),V=n(199),T=n(201),S=n(61),$=n(545),j=n(732),O=n(68),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-center":"","justify-space-between":""}},[n("v-sheet",{staticClass:"mx-5",staticStyle:{"background-color":"inherit"},attrs:{"max-width":"700"}},[n("v-slide-group",{attrs:{"prev-icon":"mdi-chevron-left-circle-outline","next-icon":"mdi-chevron-right-circle-outline","show-arrows":""}},t._l(t.selectedTags,(function(e){return n("v-slide-item",{key:e.id},[n("v-chip",{staticClass:"mx-3 tag-item",attrs:{outlined:"",close:"","close-icon":"mdi-close","text-color":"primary"},on:{"click:close":function(n){return t.removeTag(e)}}},[n("strong",[t._v("#"+t._s(e.name))]),t._v(" \n        ")])],1)})),1)],1),t._v(" "),n("v-menu",{attrs:{"offset-y":"",transition:"slide-y-transition",bottom:"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{outlined:"",rounded:"",color:"black",dark:""}},"v-btn",o,!1),r),[t._v("\n        "+t._s(t.$t("news.tags.show_tags_button"))+"\n        "),n("v-icon",{staticClass:"mr-1"},[t._v("\n          mdi-chevron-down\n        ")])],1)]}}])},[t._v(" "),n("v-list",{staticClass:"pa-5"},[n("v-text-field",{attrs:{placeholder:t.$t("news.tags.search_tags_input"),"append-icon":"mdi-magnify",type:"text",rounded:"",outlined:"","hide-details":"",color:"black"}}),t._v(" "),n("div",{staticClass:"mt-5"},t._l(t.postTags,(function(e){return n("v-checkbox",{key:e.id,staticClass:"ma-0 pa-0 black--text",attrs:{label:"#"+e.name,value:e,color:"primary","on-icon":"mdi-check-box-outline"},model:{value:t.selectedTags,callback:function(e){t.selectedTags=e},expression:"selectedTags"}})})),1)],1),t._v(" "),n("v-divider"),t._v(" "),n("div",{staticClass:"px-5 py-2",staticStyle:{"background-color":"white"}},[n("v-btn",{staticClass:"pa-0",attrs:{text:"",color:"primary"},on:{click:t.removeAllTags}},[n("v-icon",{staticClass:"mr-1"},[t._v("\n          mdi-close\n        ")]),t._v("\n        "+t._s(t.$t("news.tags.clear_tags_button"))+"\n      ")],1)],1)],1)],1)}),[],!1,null,"ed86a2c0",null),D=component.exports;f()(component,{VBtn:x.a,VCheckbox:h.a,VChip:w.a,VDivider:y.a,VIcon:C.a,VLayout:k.a,VList:V.a,VMenu:T.a,VSheet:S.a,VSlideGroup:$.b,VSlideItem:j.a,VTextField:O.a});var M,N=o.default.extend({name:"NewsCard",props:{id:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},createdAt:{type:String,required:!0},createdBy:{type:Object,required:!0}},computed:{localeDate:function(){return new Date(this.createdAt).toLocaleDateString(this.$i18n.locale,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"})}}}),L=(n(608),n(474)),A=n(473),B=n(464),E=n(278),I=n(466),R=Object(m.a)(N,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mb-5 px-5 pt-3 pb-2",attrs:{flat:"",nuxt:"",to:"news/"+t.id}},[r("v-row",[r("v-col",{attrs:{cols:"4",md:"4"}},[r("v-img",{staticStyle:{"border-radius":"10px"},attrs:{src:n(481),width:"300px"}})],1),t._v(" "),r("v-col",{attrs:{cols:"8",md:"8"}},[r("v-card-title",{staticClass:"text-h5 pa-0"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),r("v-card-text",{staticClass:"pa-0 description"},[t._v("\n        "+t._s(t.description)+"\n      ")]),t._v(" "),r("v-row",{attrs:{align:"end"}},[r("v-card-text",{staticClass:"pb-0",staticStyle:{color:"#9da3a6"}},[t._v("\n          "+t._s(t.localeDate)+"\n          "),r("v-icon",{staticClass:"px-1",staticStyle:{color:"inherit"}},[t._v("\n            mdi-circle-small\n          ")]),t._v("\n          "+t._s(t.createdBy.bio)+"\n        ")],1)],1)],1)],1)],1)}),[],!1,null,null,null),F=R.exports;f()(R,{VCard:L.a,VCardText:A.c,VCardTitle:A.d,VCol:B.a,VIcon:C.a,VImg:E.a,VRow:I.a});var G=o.default.extend({name:"NewsList",components:{NewsCard:F},apollo:{posts:d()(M||(M=Object(l.a)(["query{\n      posts {\n        id,\n        title,\n        description,\n        createdAt,\n        createdBy {\n          bio\n        }\n      }\n    }"])))},data:function(){return{news:[{id:1,title:"Вкусности для бездомных",content:"Какие же настали морозные дни в нашей Казани. Особенно это чувствуют бездомные люди. Не всегда удается найти теплый ночлег. Единственным спасением становятся горячие бесплатные обеды. Добрый фудтрак и сотрудники «Закята» были встречены в сквере на Б.Шахиди с большой радостью в глазах.",date:new Date,author:"Майя Бурганова"},{id:2,title:"Назер — курбан для малоимущих",content:"В фонд «Закят» принесли мясо барана назер-курбана. Сотрудники Закята распределили его подопечным семьям фонда «Закята». Среди благополучателей — многодетные матери, малоимущие, одинокие старики. Все подопечные благодарят за мясную продукцию и воздают дуа за благотворителей. Пусть Аллах одарит их барактом и дарует Рай. Амин.",date:new Date,author:"Ринат Гарипов"}],posts:[]}}}),J=Object(m.a)(G,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"px-2",attrs:{cols:"12",md:"9"}},t._l(t.posts,(function(e){return n("NewsCard",t._b({key:e.id},"NewsCard",e,!1))})),1)}),[],!1,null,null,null),z=J.exports;f()(J,{VCol:B.a});var H=o.default.extend({name:"Sadaka",data:function(){return{amounts:[1,50,100],amount:null}}}),K=(n(610),n(505)),P=n(506),Q=Object(m.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"px-2",attrs:{cols:"6",md:"3"}},[n("v-card",{staticClass:"pa-5 sadaka-card",attrs:{flat:""}},[n("v-card-title",{staticClass:"pa-0"},[t._v("\n      "+t._s(t.$t("news.sadaka.title"))+"\n    ")]),t._v(" "),n("v-card-text",{staticClass:"pa-0"},[t._v("\n      "+t._s(t.$t("news.sadaka.description"))+"\n      "),n("v-text-field",{staticClass:"mt-3",attrs:{label:t.$t("news.sadaka.money_amount_input"),type:"number",min:"0",rounded:"",outlined:"","hide-details":"",color:"black"}})],1),t._v(" "),n("v-radio-group",{staticClass:"amounts pa-2",attrs:{row:"","hide-details":""},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},t._l(t.amounts,(function(a){return n("v-radio",{key:a,staticClass:"pa-0 mr-2",attrs:{label:a+" ₽",value:a}})})),1),t._v(" "),n("v-btn",{staticClass:"mt-4",attrs:{rounded:"",dark:"",block:"",color:"primary"}},[t._v("\n      Пожертвовать\n    ")])],1)],1)}),[],!1,null,"11b51bfc",null),U=Q.exports;f()(Q,{VBtn:x.a,VCard:L.a,VCardText:A.c,VCardTitle:A.d,VCol:B.a,VRadio:K.a,VRadioGroup:P.a,VTextField:O.a});var W=o.default.extend({components:{Sadaka:U,NewsList:z,TagsSlider:D}}),X=n(465),Y=Object(m.a)(W,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"pt-8 pb-5 px-2"},[n("h1",[t._v(t._s(t.$t("news.title")))]),t._v(" "),n("TagsSlider")],1),t._v(" "),n("v-row",[n("NewsList"),t._v(" "),n("Sadaka")],1)],1)}),[],!1,null,null,null);e.default=Y.exports;f()(Y,{VContainer:X.a,VRow:I.a})}}]);