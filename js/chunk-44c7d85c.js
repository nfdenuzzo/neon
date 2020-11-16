(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44c7d85c"],{"3fbc":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.example.noCard?a("div",{staticClass:"example--no-card"},[e.example.title?a("h3",[e._v(e._s(e.example.title))]):e._e(),e.example.tip?a("neon-note",{attrs:{color:"info"}},[a("span",[a("strong",[e._v("Tip:")]),e._v(e._s(" "+e.example.tip))])]):e._e(),e.example.tip?a("br"):e._e(),a("div",{staticClass:"example__output"},[a("v-runtime-template",{attrs:{"template-props":e.example.data||{},template:e.example.template}})],1),a("div",{staticClass:"example__code"},[e.example.template?a("editor",{model:{value:e.example.template,callback:function(t){e.$set(e.example,"template",t)},expression:"example.template"}}):e._e()],1)],1):a("neon-card",[e.example.title?a("neon-card-header",{staticClass:"example__title"},[a("h3",[e._v(e._s(e.example.title))])]):e._e(),a("neon-card-body",{attrs:{"full-width":e.example.fixedContent}},[e.example.tip?a("neon-note",{attrs:{color:"info"}},[a("span",[a("strong",[e._v("Tip:")]),e._v(e._s(" "+e.example.tip))])]):e._e(),e.example.tip?a("br"):e._e(),a("div",{staticClass:"example__output",class:{"example__output--fixed-content":e.example.fixedContent}},[a("v-runtime-template",{attrs:{"template-props":e.example.data||{},template:e.example.template}})],1),a("div",{staticClass:"example__code",class:{"example__code--fixed-content":e.example.fixedContent}},[e.example.template?a("editor",{model:{value:e.example.template,callback:function(t){e.$set(e.example,"template",t)},expression:"example.template"}}):e._e()],1)],1)],1)},s=[],o=a("276c"),i=a("920b"),l=a("92a6"),c=a("9ab4"),p=a("60a3"),d=a("c9e5"),r=a("172f"),_=a("3806"),m=a("5735"),u=a("6c04"),h=function(e){Object(i["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(p["c"]);Object(c["a"])([Object(p["b"])({required:!0})],h.prototype,"example",void 0),Object(c["a"])([Object(p["b"])({default:"html"})],h.prototype,"language",void 0),h=Object(c["a"])([Object(p["a"])({components:{Editor:d["a"],NeonCard:m["a"],NeonCardBody:_["a"],NeonCardHeader:r["a"],NeonNote:u["a"]}})],h);var v=h,b=v,f=a("2877"),y=Object(f["a"])(b,n,s,!1,null,null,null);t["a"]=y.exports},"8e76":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.menuModel?a("component-documentation",{attrs:{examples:e.examples,model:e.menuModel,headline:e.headline}},[a("neon-card",[a("neon-card-body",[a("p",[e._v(" A Toggle chip component used to indicate an on/off state in form inputs. This is equivalent to a checkbox. This is a variation of a checkbox/switch which can be used as an on/off button to trigger an action or used in a group for filtering. ")])])],1)],1):e._e()},s=[],o=a("276c"),i=a("e954"),l=a("920b"),c=a("92a6"),p=a("9ab4"),d=a("60a3"),r=a("7994"),_=a("d43b"),m=a("1b4e"),u=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.menuModel=null,e.headline="Chips for toggling state",e.data={checked1:!0,checked2:!0,checked3:!0,checked4:!0,checked5:!0,checked6:!0,checked7:!0,checked8:!0,checked9:!0,checked10:!0,checked11:!0,checked12:!0,checked13:!1,checked14:!0,checked15:!1,checked16:!1,checked17:!1},e.sizeTemplate='<div class="example--vertical">\n  <neon-toggle-chip size="xs" label="Extra Small" v-model="checked1" />\n  <neon-toggle-chip size="s" label="Small" v-model="checked2" />\n  <neon-toggle-chip label="Medium" v-model="checked3" />\n  <neon-toggle-chip size="l" label="Large" v-model="checked4" />\n</div>',e.noCheckTemplate='<div class="example--vertical">\n  <neon-toggle-chip :show-check="false" size="xs" label="Extra small" v-model="checked5" />\n  <neon-toggle-chip :show-check="false" size="s" label="Small" v-model="checked6" />\n  <neon-toggle-chip :show-check="false" size="m" label="Medium" v-model="checked7" />\n  <neon-toggle-chip :show-check="false" size="l" label="Large" v-model="checked8" />\n</div>',e.colorTemplate='<div class="example--vertical">\n  <neon-toggle-chip label="Brand" color="brand" v-model="checked9" />\n  <neon-toggle-chip label="Primary" color="primary" v-model="checked10" />\n  <neon-toggle-chip label="Info" color="info" v-model="checked11" />\n  <neon-toggle-chip label="Warning" color="warn" v-model="checked12" />\n</div>',e.fewOptionsTemplate='<div class="example--horizontal">\n  <neon-toggle-chip :show-check="false" size="s" label="Bacon" v-model="checked13" />\n  <neon-toggle-chip :show-check="false" size="s" label="Cheese" v-model="checked14" />\n  <neon-toggle-chip :show-check="false" size="s" label="Pineapple" v-model="checked15" />\n  <neon-toggle-chip :show-check="false" size="s" label="Mushrooms" v-model="checked16" />\n</div>',e.stateTemplate='<div class="example--vertical">\n  <neon-toggle-chip size="m" label="Disabled" color="primary" :disabled="true" v-model="checked17" />\n</div>',e.examples=[{title:"Switch sizes",template:e.sizeTemplate,data:e.data},{title:"Switches no check",template:e.noCheckTemplate,data:e.data},{title:"Switch colors",template:e.colorTemplate,data:e.data},{title:"Group toggle chips",tip:"Use toggle chips as an alternative to a multi-select with only a few options",template:e.fewOptionsTemplate,data:e.data},{title:"Disabled toggle chip",template:e.stateTemplate,data:e.data}],e}return Object(i["a"])(a,[{key:"mounted",value:function(){this.menuModel=m["a"].getComponentConfig("NeonToggleChip")}}]),a}(d["c"]);u=Object(p["a"])([Object(d["a"])({components:{ComponentDocumentation:_["a"],NeonCard:r["g"],NeonCardBody:r["h"],NeonToggleChip:r["X"]}})],u);var h=u,v=h,b=a("2877"),f=Object(b["a"])(v,n,s,!1,null,null,null);t["default"]=f.exports},d43b:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.selected&&e.tabs.length>0?a("div",{staticClass:"component-documentation"},[a("div",{staticClass:"component-documentation__header"},[a("div",{staticClass:"component-documentation__header-container"},[a("h1",{staticClass:"component-documentation__title neon-h2"},[e._v(e._s(e.componentTitle))]),e.headline?a("span",{staticClass:"component-documentation__headline neon-color-text-neutral"},[e._v(e._s(e.headline))]):e._e(),a("neon-tabs",{attrs:{tabs:e.tabs,underline:!1},on:{input:e.onChangeTab},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)]),e.examplesIndex>=0?a("neon-tab",{attrs:{tab:e.tabs[e.examplesIndex],selected:e.selected===e.tabs[e.examplesIndex].key,toggleOnIf:!0}},[-1===e.descriptionIndex?a("h2",{staticClass:"neon-h3 component-documentation__description-heading"},[e._v("Description")]):e._e(),-1===e.descriptionIndex?e._t("default"):e._e(),a("examples",{attrs:{examples:e.examples}})],2):e._e(),e.descriptionIndex>=0?a("neon-tab",{attrs:{tab:e.tabs[e.descriptionIndex],selected:e.selected===e.tabs[e.descriptionIndex].key,toggleOnIf:!0}},[e.$slots.default?a("h2",{staticClass:"neon-h3"},[e._v("Description")]):e._e(),e._t("default")],2):e._e(),e.apiIndex>=0?a("neon-tab",{attrs:{tab:e.tabs[e.apiIndex],selected:e.selected===e.tabs[e.apiIndex].key,toggleOnIf:!0}},[a("h3",{staticClass:"component-documentation__tab-title"},[e._v("API")]),e.apiModel?a("api-docs",{attrs:{"api-model":e.apiModel,"component-name":e.componentName}}):e._e(),e._l(e.subApiModels,(function(e){return a("api-docs",{key:e.name,attrs:{"api-model":e.api,"component-name":e.name}})}))],2):e._e()],1):e._e()},s=[],o=(a("99af"),a("4de4"),a("c740"),a("4160"),a("c975"),a("d81d"),a("b0c0"),a("d3b7"),a("ac1f"),a("5319"),a("159b"),a("276c")),i=a("e954"),l=a("920b"),c=a("92a6"),p=a("9ab4"),d=a("60a3"),r=a("eb61"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"api-docs__wrapper"},[e.apiModel?a("neon-card",{staticClass:"api-docs"},[a("neon-card-header",[a("h2",{staticClass:"neon-h3"},[e._v(e._s(e.componentName)+" API")])]),a("neon-card-body",[e.apiModel.description?a("p",{domProps:{innerHTML:e._s(e.apiModel.description)}}):e._e(),e.hasDocs?e._e():a("neon-note",{attrs:{color:"info"}},[a("span",[a("strong",[e._v("Note:")]),e._v(" The Vue API for this component contains no properties, events or slots")])]),e.hasDocs?a("div",{staticClass:"api-docs__desktop"},[e.hasProps?a("section",{staticClass:"api-docs__section"},[a("h3",{staticClass:"neon-h4 api-docs__title",attrs:{id:"props-label"}},[e._v("Properties")]),a("table",{attrs:{"aria-labelledby":"props-label"}},[a("thead",[a("tr",[a("th",[e._v("Name")]),a("th",[e._v("Type")]),a("th",[e._v("Default")]),a("th",[e._v("Description")])])]),a("tbody",e._l(e.apiModel.props,(function(t){return a("tr",{key:t.name},[a("td",{staticClass:"api-docs__name"},[a("span",[e._v(e._s(t.name))]),t.required?a("neon-label",{attrs:{size:"xs",color:"brand",label:"required"}}):e._e()],1),a("td",{staticClass:"api-docs__type"},[e.typeLink(t)?a("neon-link",{attrs:{href:e.typeLink(t)}},[e._v(e._s(e.typeName(t))+e._s(e.isArray(t)?"[]":""))]):a("span",[e._v(e._s(e.typeName(t))+e._s(e.isArray(t)?"[]":""))])],1),a("td",{staticClass:"api-docs__default"},[t.defaultValue?a("span",[e._v(e._s(t.defaultValue.value))]):e._e()]),a("td",{staticClass:"api-docs__description"},[t.description?a("span",{domProps:{innerHTML:e._s(t.description)}}):e._e()])])})),0)])]):e._e(),e.hasEvents?a("section",{staticClass:"api-docs__section"},[a("h3",{staticClass:"neon-h4 api-docs__title",attrs:{id:"events-label"}},[e._v("Events")]),a("table",{attrs:{"aria-labelledby":"events-label"}},[a("thead",[a("tr",[a("th",[e._v("Name")]),a("th",[e._v("Type")]),a("th",[e._v("Description")])])]),a("tbody",e._l(e.apiModel.events,(function(t){return a("tr",{key:t.name},[a("td",{staticClass:"api-docs__name"},[e._v(e._s(t.name))]),a("td",{staticClass:"api-docs__type"},[e.eventTypeLink(t)?a("neon-link",{attrs:{href:e.eventTypeLink(t)}},[e._v(e._s(e.eventTypeName(t)))]):a("span",[e._v(e._s(e.eventTypeName(t)))])],1),a("td",{staticClass:"api-docs__description"},[t.description?a("span",{domProps:{innerHTML:e._s(t.description)}}):e._e()])])})),0)])]):e._e(),e.hasSlots?a("section",{staticClass:"api-docs__section"},[a("h3",{staticClass:"neon-h4 api-docs__title",attrs:{id:"slots-label"}},[e._v("Slots")]),a("table",{attrs:{"aria-labelledby":"slots-label"}},[a("thead",[a("tr",[a("th",[e._v("Name")]),a("th",[e._v("Description")])])]),a("tbody",e._l(e.apiModel.slots,(function(t){return a("tr",{key:t.name},[a("td",{staticClass:"api-docs__name"},[e._v(e._s(t.name))]),a("td",{staticClass:"api-docs__description"},[t.description?a("span",{domProps:{innerHTML:e._s(t.description)}}):e._e()])])})),0)])]):e._e()]):e._e(),e.hasDocs?a("div",{staticClass:"api-docs__responsive"},[e.hasProps?a("section",{staticClass:"api-docs__section"},[a("h3",{staticClass:"neon-h4 api-docs__title"},[e._v("Properties")]),e._l(e.apiModel.props.filter((function(e){return void 0===e.tags.ignore})),(function(t){return a("div",{key:t.name,staticClass:"api-docs__property"},[a("div",{staticClass:"api-docs__attribute"},[a("span",{staticClass:"api-docs__name"},[e._v(e._s(t.name))]),t.required?a("neon-label",{attrs:{size:"xs",color:"brand",label:"required"}}):e._e()],1),a("div",{staticClass:"api-docs__attribute"},[a("label",[e._v("Type")]),e.typeLink(t)?a("neon-link",{staticClass:"api-docs__type",attrs:{href:e.typeLink(t)}},[e._v(e._s(e.typeName(t))+e._s(e.isArray(t)?"[]":""))]):a("span",{staticClass:"api-docs__type"},[e._v(e._s(e.typeName(t))+e._s(e.isArray(t)?"[]":""))])],1),t.defaultValue?a("div",{staticClass:"api-docs__attribute"},[a("label",[e._v("Default")]),a("span",{staticClass:"api-docs__default"},[e._v(e._s(t.defaultValue.value))])]):e._e(),a("div",{staticClass:"api-docs__attribute"},[t.description?a("span",{staticClass:"api-docs__description",domProps:{innerHTML:e._s(t.description)}}):e._e()])])}))],2):e._e(),e.hasEvents?a("section",{staticClass:"api-docs__section"},[a("h3",{staticClass:"neon-h4 api-docs__title"},[e._v("Events")]),e._l(e.apiModel.events,(function(t){return a("div",{key:t.name,staticClass:"api-docs__event"},[a("div",{staticClass:"api-docs__attribute api-docs__name"},[e._v(e._s(t.name))]),a("div",{staticClass:"api-docs__attribute"},[a("label",[e._v("Type")]),e.eventTypeLink(t)?a("neon-link",{staticClass:"api-docs__type",attrs:{href:e.eventTypeLink(t)}},[e._v(e._s(e.eventTypeName(t)))]):a("span",{staticClass:"api-docs__type"},[e._v(e._s(e.eventTypeName(t)))])],1),t.description?a("div",{staticClass:"api-docs__attribute api-docs__description",domProps:{innerHTML:e._s(t.description)}}):e._e()])}))],2):e._e(),e.hasSlots?a("section",{staticClass:"api-docs__section"},[a("h3",{staticClass:"neon-h4 api-docs__title"},[e._v("Slots")]),e._l(e.apiModel.slots,(function(t){return a("div",{key:t.name,staticClass:"api-docs__slot"},[a("div",{staticClass:"api-docs__attribute api-docs__name"},[a("span",[e._v(e._s(t.name))]),t.scoped?a("neon-label",{attrs:{size:"xs",color:"brand",label:"scoped"}}):e._e()],1),t.description?a("div",{staticClass:"api-docs__attribute api-docs__description",domProps:{innerHTML:e._s(t.description)}}):e._e()])}))],2):e._e()]):e._e()],1)],1):e._e()],1)},m=[],u=(a("a4d3"),a("e01a"),a("a15b"),a("7994")),h=a("3d79"),v=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return Object(i["a"])(a,[{key:"isArray",value:function(e){var t;return"Array"===(null===(t=e.type)||void 0===t?void 0:t.name)}},{key:"typeName",value:function(e){var t;if(null===(t=e.tags)||void 0===t?void 0:t.type)return e.tags.type[0].description;if(e.type){var a,n=e.type;return this.isArray(e)||"union"===e.type.name?null===(a=n.elements)||void 0===a?void 0:a.map((function(e){if("Array"===e.name&&e.elements){var t=e.elements.length>1?"(".concat(e.elements.map((function(e){return e.name})).join(" | "),"})"):e.elements[0].name;return"".concat(t,"[]")}return e.name})).join(" | "):n.name}}},{key:"typeLink",value:function(e){return this.lookupLink(this.typeName(e))}},{key:"eventTypeName",value:function(e){var t;return(null===(t=e.type)||void 0===t?void 0:t.names[0])||void 0}},{key:"eventTypeLink",value:function(e){return this.lookupLink(this.eventTypeName(e))}},{key:"lookupLink",value:function(e){if(e){var t=h["a"].indexOf(e)>=0,a=h["b"].indexOf(e)>=0;return t?"/enums/".concat(e):a?"/models/".concat(e):void 0}}},{key:"hasDocs",get:function(){return this.hasProps||this.hasEvents||this.hasSlots}},{key:"hasProps",get:function(){var e;return(null===(e=this.apiModel.props)||void 0===e?void 0:e.length)>0}},{key:"hasEvents",get:function(){var e;return(null===(e=this.apiModel.events)||void 0===e?void 0:e.length)>0}},{key:"hasSlots",get:function(){return(this.apiModel.slots||[]).length>0}}]),a}(d["c"]);Object(p["a"])([Object(d["b"])({required:!0})],v.prototype,"apiModel",void 0),Object(p["a"])([Object(d["b"])({required:!0})],v.prototype,"componentName",void 0),v=Object(p["a"])([Object(d["a"])({components:{NeonNote:u["F"]}})],v);var b,f=v,y=f,k=a("2877"),x=Object(k["a"])(y,_,m,!1,null,null,null),g=x.exports,C=b=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.apiModel=null,e.subApiModels=[],e.tabs=[],e.selected=null,e}return Object(i["a"])(a,[{key:"onRouteChange",value:function(e){e.hash?this.selected=e.hash.substring(1):this.selected=this.tabs[0].key}},{key:"mounted",value:function(){var e,t=this,a="".concat("/neon/","docs/").concat(this.path,"/").concat(this.componentName,".json");fetch(a).then((function(e){e.json().then((function(e){t.apiModel=e}),(function(){return console.info("no component JSON at ".concat(a))}))})),(this.model.subComponents||[]).forEach((function(e){fetch("".concat("/neon/","docs/").concat(t.path,"/").concat(e.path,"/").concat(e.name,".json")).then((function(a){a.json().then((function(a){t.subApiModels.push({api:a,name:e.name})}))}))}));var n=(this.model.anchors||[]).map((function(e){return e.toLowerCase()}));this.tabs=b.defaultTabs.filter((function(e){return n.indexOf(e.key)>=0})),this.selected=(null===(e=this.$route.hash)||void 0===e?void 0:e.substring(1))||this.tabs[0].key}},{key:"onChangeTab",value:function(e){var t="#".concat(e);this.$route.hash!==t&&this.$router.replace({path:t})}},{key:"path",get:function(){return this.model.path}},{key:"componentName",get:function(){return this.model.component}},{key:"componentTitle",get:function(){return this.model.name||this.model.page}},{key:"examplesIndex",get:function(){return this.tabs.findIndex((function(e){return"examples"===e.key}))}},{key:"descriptionIndex",get:function(){return this.tabs.findIndex((function(e){return"description"===e.key}))}},{key:"apiIndex",get:function(){return this.tabs.findIndex((function(e){return"api"===e.key}))}}]),a}(d["c"]);C.defaultTabs=[{key:"examples",label:"Examples"},{key:"description",label:"Description"},{key:"api",label:"API"}],Object(p["a"])([Object(d["b"])({required:!0})],C.prototype,"model",void 0),Object(p["a"])([Object(d["b"])({required:!0})],C.prototype,"headline",void 0),Object(p["a"])([Object(d["b"])()],C.prototype,"examples",void 0),Object(p["a"])([Object(d["d"])("$route")],C.prototype,"onRouteChange",null),C=b=Object(p["a"])([Object(d["a"])({components:{ApiDocs:g,Examples:r["a"],NeonTab:u["S"],NeonTabs:u["T"]}})],C);var O=C,j=O,T=Object(k["a"])(j,n,s,!1,null,null,null);t["a"]=T.exports},eb61:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.examples?a("div",{staticClass:"examples"},[e.examples[0].noCard?e._e():a("h2",{staticClass:"neon-h3"},[e._v(" "+e._s(e.examples.length>1?"Examples":"Example")+" ")]),e._l(e.examples,(function(e){return a("div",{key:e.title,staticClass:"example"},[a("example",{attrs:{example:e}})],1)}))],2):e._e()},s=[],o=a("276c"),i=a("920b"),l=a("92a6"),c=a("9ab4"),p=a("60a3"),d=a("3fbc"),r=function(e){Object(i["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(p["c"]);Object(c["a"])([Object(p["b"])({required:!0})],r.prototype,"examples",void 0),r=Object(c["a"])([Object(p["a"])({components:{Example:d["a"]}})],r);var _=r,m=_,u=a("2877"),h=Object(u["a"])(m,n,s,!1,null,null,null);t["a"]=h.exports}}]);