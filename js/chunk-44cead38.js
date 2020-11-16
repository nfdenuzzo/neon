(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44cead38"],{2693:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.menuModel?a("component-documentation",{attrs:{examples:e.examples,model:e.menuModel,headline:e.headline}},[a("neon-card",[a("neon-card-body",[a("p",[e._v(" A side navigation component. This is displayed at the "),a("em",[e._v("larger-than-tablet")]),e._v(" breakpoint and hidden at "),a("em",[e._v("tablet")]),e._v(" and below. Use this to display menus, navigation or other items related to the main page content. A side nave had two slots, one for "),a("em",[e._v("sticky")]),e._v(" content which remains visible at all times. The other is for "),a("em",[e._v("scrolling content")]),e._v(" which is allowed to overflow below the bottom of the page. ")]),a("p",[e._v(" At the "),a("em",[e._v("tablet")]),e._v(" breakpoint and below it is recommended to use "),a("strong",[e._v("NeonDrawer")]),e._v(" to display the side navigation contents. ")])])],1)],1):e._e()},s=[],o=a("276c"),i=a("e954"),l=a("920b"),c=a("92a6"),r=a("9ab4"),p=a("60a3"),d=a("7994"),_=a("d43b"),u=a("1b4e"),m=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.menuModel=null,e.headline="Display fixed content at the side of the page",e.examples=[{title:"Side Nav example",template:"<neon-side-nav>\n  <template #sticky>\n    <h6>Sticky content</h6>\n  </template>\n  <template #scrolling>\n    <h6>Scrolling content</h6>\n    <p>Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket, kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter. Flank turkey cupim chuck pastrami picanha short loin shankle. Tongue pork loin turducken, tenderloin pork belly ham boudin spare ribs sirloin pancetta jerky picanha corned beef ribeye alcatra. Kielbasa salami flank cow, beef sausage biltong jerky prosciutto strip steak. Meatball prosciutto ham hock salami, jowl tongue kevin fatback ground round beef ribs bacon pork loin meatloaf turducken strip steak.</p>\n  </template>\n</neon-side-nav>",fixedContent:!0}],e}return Object(i["a"])(a,[{key:"mounted",value:function(){this.menuModel=u["a"].getComponentConfig("NeonSideNav")}}]),a}(p["c"]);m=Object(r["a"])([Object(p["a"])({components:{NeonCard:d["g"],NeonCardBody:d["h"],NeonSideNav:d["M"],ComponentDocumentation:_["a"]}})],m);var v=m,b=v,h=a("2877"),f=Object(h["a"])(b,n,s,!1,null,null,null);t["default"]=f.exports},"3fbc":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.example.noCard?a("div",{staticClass:"example--no-card"},[e.example.title?a("h3",[e._v(e._s(e.example.title))]):e._e(),e.example.tip?a("neon-note",{attrs:{color:"info"}},[a("span",[a("strong",[e._v("Tip:")]),e._v(e._s(" "+e.example.tip))])]):e._e(),e.example.tip?a("br"):e._e(),a("div",{staticClass:"example__output"},[a("v-runtime-template",{attrs:{"template-props":e.example.data||{},template:e.example.template}})],1),a("div",{staticClass:"example__code"},[e.example.template?a("editor",{model:{value:e.example.template,callback:function(t){e.$set(e.example,"template",t)},expression:"example.template"}}):e._e()],1)],1):a("neon-card",[e.example.title?a("neon-card-header",{staticClass:"example__title"},[a("h3",[e._v(e._s(e.example.title))])]):e._e(),a("neon-card-body",{attrs:{"full-width":e.example.fixedContent}},[e.example.tip?a("neon-note",{attrs:{color:"info"}},[a("span",[a("strong",[e._v("Tip:")]),e._v(e._s(" "+e.example.tip))])]):e._e(),e.example.tip?a("br"):e._e(),a("div",{staticClass:"example__output",class:{"example__output--fixed-content":e.example.fixedContent}},[a("v-runtime-template",{attrs:{"template-props":e.example.data||{},template:e.example.template}})],1),a("div",{staticClass:"example__code",class:{"example__code--fixed-content":e.example.fixedContent}},[e.example.template?a("editor",{model:{value:e.example.template,callback:function(t){e.$set(e.example,"template",t)},expression:"example.template"}}):e._e()],1)],1)],1)},s=[],o=a("276c"),i=a("920b"),l=a("92a6"),c=a("9ab4"),r=a("60a3"),p=a("c9e5"),d=a("172f"),_=a("3806"),u=a("5735"),m=a("6c04"),v=function(e){Object(i["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(r["c"]);Object(c["a"])([Object(r["b"])({required:!0})],v.prototype,"example",void 0),Object(c["a"])([Object(r["b"])({default:"html"})],v.prototype,"language",void 0),v=Object(c["a"])([Object(r["a"])({components:{Editor:p["a"],NeonCard:u["a"],NeonCardBody:_["a"],NeonCardHeader:d["a"],NeonNote:m["a"]}})],v);var b=v,h=b,f=a("2877"),y=Object(f["a"])(h,n,s,!1,null,null,null);t["a"]=y.exports},d43b:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.selected&&e.tabs.length>0?a("div",{staticClass:"component-documentation"},[a("div",{staticClass:"component-documentation__header"},[a("div",{staticClass:"component-documentation__header-container"},[a("h1",{staticClass:"component-documentation__title neon-h2"},[e._v(e._s(e.componentTitle))]),e.headline?a("span",{staticClass:"component-documentation__headline neon-color-text-neutral"},[e._v(e._s(e.headline))]):e._e(),a("neon-tabs",{attrs:{tabs:e.tabs,underline:!1},on:{input:e.onChangeTab},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)]),e.examplesIndex>=0?a("neon-tab",{attrs:{tab:e.tabs[e.examplesIndex],selected:e.selected===e.tabs[e.examplesIndex].key,toggleOnIf:!0}},[-1===e.descriptionIndex?a("h2",{staticClass:"neon-h3 component-documentation__description-heading"},[e._v("Description")]):e._e(),-1===e.descriptionIndex?e._t("default"):e._e(),a("examples",{attrs:{examples:e.examples}})],2):e._e(),e.descriptionIndex>=0?a("neon-tab",{attrs:{tab:e.tabs[e.descriptionIndex],selected:e.selected===e.tabs[e.descriptionIndex].key,toggleOnIf:!0}},[e.$slots.default?a("h2",{staticClass:"neon-h3"},[e._v("Description")]):e._e(),e._t("default")],2):e._e(),e.apiIndex>=0?a("neon-tab",{attrs:{tab:e.tabs[e.apiIndex],selected:e.selected===e.tabs[e.apiIndex].key,toggleOnIf:!0}},[a("h3",{staticClass:"component-documentation__tab-title"},[e._v("API")]),e.apiModel?a("api-docs",{attrs:{"api-model":e.apiModel,"component-name":e.componentName}}):e._e(),e._l(e.subApiModels,(function(e){return a("api-docs",{key:e.name,attrs:{"api-model":e.api,"component-name":e.name}})}))],2):e._e()],1):e._e()},s=[],o=(a("99af"),a("4de4"),a("c740"),a("4160"),a("c975"),a("d81d"),a("b0c0"),a("d3b7"),a("ac1f"),a("5319"),a("159b"),a("276c")),i=a("e954"),l=a("920b"),c=a("92a6"),r=a("9ab4"),p=a("60a3"),d=a("eb61"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"api-docs__wrapper"},[e.apiModel?a("neon-card",{staticClass:"api-docs"},[a("neon-card-header",[a("h2",{staticClass:"neon-h3"},[e._v(e._s(e.componentName)+" API")])]),a("neon-card-body",[e.apiModel.description?a("p",{domProps:{innerHTML:e._s(e.apiModel.description)}}):e._e(),e.hasDocs?e._e():a("neon-note",{attrs:{color:"info"}},[a("span",[a("strong",[e._v("Note:")]),e._v(" The Vue API for this component contains no properties, events or slots")])]),e.hasDocs?a("div",{staticClass:"api-docs__desktop"},[e.hasProps?a("section",{staticClass:"api-docs__section"},[a("h3",{staticClass:"neon-h4 api-docs__title",attrs:{id:"props-label"}},[e._v("Properties")]),a("table",{attrs:{"aria-labelledby":"props-label"}},[a("thead",[a("tr",[a("th",[e._v("Name")]),a("th",[e._v("Type")]),a("th",[e._v("Default")]),a("th",[e._v("Description")])])]),a("tbody",e._l(e.apiModel.props,(function(t){return a("tr",{key:t.name},[a("td",{staticClass:"api-docs__name"},[a("span",[e._v(e._s(t.name))]),t.required?a("neon-label",{attrs:{size:"xs",color:"brand",label:"required"}}):e._e()],1),a("td",{staticClass:"api-docs__type"},[e.typeLink(t)?a("neon-link",{attrs:{href:e.typeLink(t)}},[e._v(e._s(e.typeName(t))+e._s(e.isArray(t)?"[]":""))]):a("span",[e._v(e._s(e.typeName(t))+e._s(e.isArray(t)?"[]":""))])],1),a("td",{staticClass:"api-docs__default"},[t.defaultValue?a("span",[e._v(e._s(t.defaultValue.value))]):e._e()]),a("td",{staticClass:"api-docs__description"},[t.description?a("span",{domProps:{innerHTML:e._s(t.description)}}):e._e()])])})),0)])]):e._e(),e.hasEvents?a("section",{staticClass:"api-docs__section"},[a("h3",{staticClass:"neon-h4 api-docs__title",attrs:{id:"events-label"}},[e._v("Events")]),a("table",{attrs:{"aria-labelledby":"events-label"}},[a("thead",[a("tr",[a("th",[e._v("Name")]),a("th",[e._v("Type")]),a("th",[e._v("Description")])])]),a("tbody",e._l(e.apiModel.events,(function(t){return a("tr",{key:t.name},[a("td",{staticClass:"api-docs__name"},[e._v(e._s(t.name))]),a("td",{staticClass:"api-docs__type"},[e.eventTypeLink(t)?a("neon-link",{attrs:{href:e.eventTypeLink(t)}},[e._v(e._s(e.eventTypeName(t)))]):a("span",[e._v(e._s(e.eventTypeName(t)))])],1),a("td",{staticClass:"api-docs__description"},[t.description?a("span",{domProps:{innerHTML:e._s(t.description)}}):e._e()])])})),0)])]):e._e(),e.hasSlots?a("section",{staticClass:"api-docs__section"},[a("h3",{staticClass:"neon-h4 api-docs__title",attrs:{id:"slots-label"}},[e._v("Slots")]),a("table",{attrs:{"aria-labelledby":"slots-label"}},[a("thead",[a("tr",[a("th",[e._v("Name")]),a("th",[e._v("Description")])])]),a("tbody",e._l(e.apiModel.slots,(function(t){return a("tr",{key:t.name},[a("td",{staticClass:"api-docs__name"},[e._v(e._s(t.name))]),a("td",{staticClass:"api-docs__description"},[t.description?a("span",{domProps:{innerHTML:e._s(t.description)}}):e._e()])])})),0)])]):e._e()]):e._e(),e.hasDocs?a("div",{staticClass:"api-docs__responsive"},[e.hasProps?a("section",{staticClass:"api-docs__section"},[a("h3",{staticClass:"neon-h4 api-docs__title"},[e._v("Properties")]),e._l(e.apiModel.props.filter((function(e){return void 0===e.tags.ignore})),(function(t){return a("div",{key:t.name,staticClass:"api-docs__property"},[a("div",{staticClass:"api-docs__attribute"},[a("span",{staticClass:"api-docs__name"},[e._v(e._s(t.name))]),t.required?a("neon-label",{attrs:{size:"xs",color:"brand",label:"required"}}):e._e()],1),a("div",{staticClass:"api-docs__attribute"},[a("label",[e._v("Type")]),e.typeLink(t)?a("neon-link",{staticClass:"api-docs__type",attrs:{href:e.typeLink(t)}},[e._v(e._s(e.typeName(t))+e._s(e.isArray(t)?"[]":""))]):a("span",{staticClass:"api-docs__type"},[e._v(e._s(e.typeName(t))+e._s(e.isArray(t)?"[]":""))])],1),t.defaultValue?a("div",{staticClass:"api-docs__attribute"},[a("label",[e._v("Default")]),a("span",{staticClass:"api-docs__default"},[e._v(e._s(t.defaultValue.value))])]):e._e(),a("div",{staticClass:"api-docs__attribute"},[t.description?a("span",{staticClass:"api-docs__description",domProps:{innerHTML:e._s(t.description)}}):e._e()])])}))],2):e._e(),e.hasEvents?a("section",{staticClass:"api-docs__section"},[a("h3",{staticClass:"neon-h4 api-docs__title"},[e._v("Events")]),e._l(e.apiModel.events,(function(t){return a("div",{key:t.name,staticClass:"api-docs__event"},[a("div",{staticClass:"api-docs__attribute api-docs__name"},[e._v(e._s(t.name))]),a("div",{staticClass:"api-docs__attribute"},[a("label",[e._v("Type")]),e.eventTypeLink(t)?a("neon-link",{staticClass:"api-docs__type",attrs:{href:e.eventTypeLink(t)}},[e._v(e._s(e.eventTypeName(t)))]):a("span",{staticClass:"api-docs__type"},[e._v(e._s(e.eventTypeName(t)))])],1),t.description?a("div",{staticClass:"api-docs__attribute api-docs__description",domProps:{innerHTML:e._s(t.description)}}):e._e()])}))],2):e._e(),e.hasSlots?a("section",{staticClass:"api-docs__section"},[a("h3",{staticClass:"neon-h4 api-docs__title"},[e._v("Slots")]),e._l(e.apiModel.slots,(function(t){return a("div",{key:t.name,staticClass:"api-docs__slot"},[a("div",{staticClass:"api-docs__attribute api-docs__name"},[a("span",[e._v(e._s(t.name))]),t.scoped?a("neon-label",{attrs:{size:"xs",color:"brand",label:"scoped"}}):e._e()],1),t.description?a("div",{staticClass:"api-docs__attribute api-docs__description",domProps:{innerHTML:e._s(t.description)}}):e._e()])}))],2):e._e()]):e._e()],1)],1):e._e()],1)},u=[],m=(a("a4d3"),a("e01a"),a("a15b"),a("7994")),v=a("3d79"),b=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return Object(i["a"])(a,[{key:"isArray",value:function(e){var t;return"Array"===(null===(t=e.type)||void 0===t?void 0:t.name)}},{key:"typeName",value:function(e){var t;if(null===(t=e.tags)||void 0===t?void 0:t.type)return e.tags.type[0].description;if(e.type){var a,n=e.type;return this.isArray(e)||"union"===e.type.name?null===(a=n.elements)||void 0===a?void 0:a.map((function(e){if("Array"===e.name&&e.elements){var t=e.elements.length>1?"(".concat(e.elements.map((function(e){return e.name})).join(" | "),"})"):e.elements[0].name;return"".concat(t,"[]")}return e.name})).join(" | "):n.name}}},{key:"typeLink",value:function(e){return this.lookupLink(this.typeName(e))}},{key:"eventTypeName",value:function(e){var t;return(null===(t=e.type)||void 0===t?void 0:t.names[0])||void 0}},{key:"eventTypeLink",value:function(e){return this.lookupLink(this.eventTypeName(e))}},{key:"lookupLink",value:function(e){if(e){var t=v["a"].indexOf(e)>=0,a=v["b"].indexOf(e)>=0;return t?"/enums/".concat(e):a?"/models/".concat(e):void 0}}},{key:"hasDocs",get:function(){return this.hasProps||this.hasEvents||this.hasSlots}},{key:"hasProps",get:function(){var e;return(null===(e=this.apiModel.props)||void 0===e?void 0:e.length)>0}},{key:"hasEvents",get:function(){var e;return(null===(e=this.apiModel.events)||void 0===e?void 0:e.length)>0}},{key:"hasSlots",get:function(){return(this.apiModel.slots||[]).length>0}}]),a}(p["c"]);Object(r["a"])([Object(p["b"])({required:!0})],b.prototype,"apiModel",void 0),Object(r["a"])([Object(p["b"])({required:!0})],b.prototype,"componentName",void 0),b=Object(r["a"])([Object(p["a"])({components:{NeonNote:m["F"]}})],b);var h,f=b,y=f,x=a("2877"),k=Object(x["a"])(y,_,u,!1,null,null,null),C=k.exports,j=h=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.apiModel=null,e.subApiModels=[],e.tabs=[],e.selected=null,e}return Object(i["a"])(a,[{key:"onRouteChange",value:function(e){e.hash?this.selected=e.hash.substring(1):this.selected=this.tabs[0].key}},{key:"mounted",value:function(){var e,t=this,a="".concat("/neon/","docs/").concat(this.path,"/").concat(this.componentName,".json");fetch(a).then((function(e){e.json().then((function(e){t.apiModel=e}),(function(){return console.info("no component JSON at ".concat(a))}))})),(this.model.subComponents||[]).forEach((function(e){fetch("".concat("/neon/","docs/").concat(t.path,"/").concat(e.path,"/").concat(e.name,".json")).then((function(a){a.json().then((function(a){t.subApiModels.push({api:a,name:e.name})}))}))}));var n=(this.model.anchors||[]).map((function(e){return e.toLowerCase()}));this.tabs=h.defaultTabs.filter((function(e){return n.indexOf(e.key)>=0})),this.selected=(null===(e=this.$route.hash)||void 0===e?void 0:e.substring(1))||this.tabs[0].key}},{key:"onChangeTab",value:function(e){var t="#".concat(e);this.$route.hash!==t&&this.$router.replace({path:t})}},{key:"path",get:function(){return this.model.path}},{key:"componentName",get:function(){return this.model.component}},{key:"componentTitle",get:function(){return this.model.name||this.model.page}},{key:"examplesIndex",get:function(){return this.tabs.findIndex((function(e){return"examples"===e.key}))}},{key:"descriptionIndex",get:function(){return this.tabs.findIndex((function(e){return"description"===e.key}))}},{key:"apiIndex",get:function(){return this.tabs.findIndex((function(e){return"api"===e.key}))}}]),a}(p["c"]);j.defaultTabs=[{key:"examples",label:"Examples"},{key:"description",label:"Description"},{key:"api",label:"API"}],Object(r["a"])([Object(p["b"])({required:!0})],j.prototype,"model",void 0),Object(r["a"])([Object(p["b"])({required:!0})],j.prototype,"headline",void 0),Object(r["a"])([Object(p["b"])()],j.prototype,"examples",void 0),Object(r["a"])([Object(p["d"])("$route")],j.prototype,"onRouteChange",null),j=h=Object(r["a"])([Object(p["a"])({components:{ApiDocs:C,Examples:d["a"],NeonTab:m["S"],NeonTabs:m["T"]}})],j);var g=j,O=g,N=Object(x["a"])(O,n,s,!1,null,null,null);t["a"]=N.exports},eb61:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.examples?a("div",{staticClass:"examples"},[e.examples[0].noCard?e._e():a("h2",{staticClass:"neon-h3"},[e._v(" "+e._s(e.examples.length>1?"Examples":"Example")+" ")]),e._l(e.examples,(function(e){return a("div",{key:e.title,staticClass:"example"},[a("example",{attrs:{example:e}})],1)}))],2):e._e()},s=[],o=a("276c"),i=a("920b"),l=a("92a6"),c=a("9ab4"),r=a("60a3"),p=a("3fbc"),d=function(e){Object(i["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(r["c"]);Object(c["a"])([Object(r["b"])({required:!0})],d.prototype,"examples",void 0),d=Object(c["a"])([Object(r["a"])({components:{Example:p["a"]}})],d);var _=d,u=_,m=a("2877"),v=Object(m["a"])(u,n,s,!1,null,null,null);t["a"]=v.exports}}]);