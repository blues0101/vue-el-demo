(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["collapse-demo2"],{"07d1":function(t,e,i){"use strict";i("6987")},"22a2":function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"el-collapse-item",class:{"is-active":t.isActive,"is-disabled":t.disabled}},[e("div",{attrs:{role:"tab","aria-expanded":t.isActive,"aria-controls":"el-collapse-content-"+t.id,"aria-describedby":"el-collapse-content-"+t.id}},[e("div",{staticClass:"el-collapse-item__header",class:{focusing:t.focusing,"is-active":t.isActive},attrs:{role:"button",id:"el-collapse-head-"+t.id,tabindex:t.disabled?void 0:0},on:{click:t.handleHeaderClick,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.stopPropagation(),t.handleEnterClick.apply(null,arguments))},focus:t.handleFocus,blur:function(e){t.focusing=!1}}},[t._t("title",(function(){return[t._v(t._s(t.title))]})),e("i",{staticClass:"el-collapse-item__arrow el-icon-arrow-right",class:{"is-active":t.isActive}})],2)]),e("div",{staticClass:"el-collapse-item__wrap",attrs:{role:"tabpanel","aria-hidden":!t.isActive,"aria-labelledby":"el-collapse-head-"+t.id,id:"el-collapse-content-"+t.id}},[e("div",{staticClass:"el-collapse-item__content"},[t._t("default")],2)])])},s=[],l=i("f6f4"),c=i("6bd7"),n={name:"ElCollapseItem",componentName:"ElCollapseItem",mixins:[l["a"]],data(){return{contentWrapStyle:{height:"auto",display:"block"},contentHeight:0,focusing:!1,isClick:!1,id:Object(c["a"])()}},inject:["collapse"],props:{title:String,name:{type:[String,Number],default(){return this._uid}},disabled:Boolean},computed:{isActive(){return this.collapse.activeNames.indexOf(this.name)>-1}},methods:{handleFocus(){setTimeout(()=>{this.isClick?this.isClick=!1:this.focusing=!0},50)},handleHeaderClick(){this.disabled||(this.dispatch("ElCollapse","item-click",this),this.focusing=!1,this.isClick=!0)},handleEnterClick(){this.dispatch("ElCollapse","item-click",this)}}},o=n,d=(i("922a"),i("2877")),r=Object(d["a"])(o,a,s,!1,null,"c4a08012",null);e["a"]=r.exports},6987:function(t,e,i){},"922a":function(t,e,i){"use strict";i("df75")},df75:function(t,e,i){},e0be:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"conatiner"},[e("div",{staticClass:"left"},[e("el-collapse",{staticClass:"my_colp",attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("MyElCollapseItem",{attrs:{title:"一致性 Consistency",name:"1"}},[e("div",{staticClass:"content"},[e("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])])]),e("MyElCollapseItem",{attrs:{title:"反馈 Feedback",name:"2"}},[e("div",{staticClass:"content"},[e("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])])]),e("MyElCollapseItem",{attrs:{title:"效率 Efficiency",name:"3"}},[e("div",{staticClass:"content"},[e("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])])])],1)],1),e("div",{staticClass:"right"})])])},s=[],l=i("22a2"),c={data(){return{activeName:"1"}},components:{MyElCollapseItem:l["a"]}},n=c,o=(i("07d1"),i("2877")),d=Object(o["a"])(n,a,s,!1,null,"2b4463ee",null);e["default"]=d.exports},f6f4:function(t,e,i){"use strict";function a(t,e,i){this.$children.forEach(s=>{var l=s.$options.componentName;l===t?s.$emit.apply(s,[e].concat(i)):a.apply(s,[t,e].concat([i]))})}e["a"]={methods:{dispatch(t,e,i){var a=this.$parent||this.$root,s=a.$options.componentName;while(a&&(!s||s!==t))a=a.$parent,a&&(s=a.$options.componentName);a&&a.$emit.apply(a,[e].concat(i))},broadcast(t,e,i){a.call(this,t,e,i)}}}}}]);
//# sourceMappingURL=collapse-demo2.b10ae425.js.map