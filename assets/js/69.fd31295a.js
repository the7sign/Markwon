(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{255:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("MavenBadge4",{attrs:{artifact:"ext-tables"}}),t._v(" "),n("p",[t._v("This extension adds support for GFM tables.")]),t._v(" "),t._m(1),t._m(2),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("To take advantage of this functionality and render tables without limitations (including\nhorizontally scrollable layout when its contents exceed screen width), refer to "),n("router-link",{attrs:{to:"/docs/v4/recycler-table/"}},[t._v("recycler-table")]),t._v("\nmodule documentation that adds support for rendering "),n("code",[t._v("TableBlock")]),t._v(" markdown node inside Android-native "),n("code",[t._v("TableLayout")]),t._v(" widget.")],1)]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),n("p",[t._v("Padding inside a table cell")]),t._v(" "),n("ThemeProperty",{attrs:{name:"tableCellPadding",type:"@Px int",defaults:"0"}}),t._v(" "),t._m(10),t._v(" "),n("p",[t._v("The color of table borders")]),t._v(" "),n("ThemeProperty",{attrs:{name:"tableBorderColor",type:"@ColorInt int",defaults:"(text color) with 75 (0-255) alpha"}}),t._v(" "),t._m(11),t._v(" "),n("p",[t._v("The width of table borders")]),t._v(" "),n("ThemeProperty",{attrs:{name:"tableBorderWidth",type:"@Px int",defaults:"Stroke with of context TextPaint"}}),t._v(" "),t._m(12),t._v(" "),n("p",[t._v("Background of an odd table row")]),t._v(" "),n("ThemeProperty",{attrs:{name:"tableOddRowBackgroundColor",type:"@ColorInt int",defaults:"(text color) with 22 (0-255) alpha"}}),t._v(" "),n("h3",{attrs:{id:"even-row-background"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#even-row-background","aria-hidden":"true"}},[t._v("#")]),t._v(" Even row background "),n("Badge",{attrs:{text:"1.1.1"}})],1),t._v(" "),n("p",[t._v("Background of an even table row")]),t._v(" "),n("ThemeProperty",{attrs:{name:"tableEventRowBackgroundColor",type:"@ColorInt int",defaults:"0"}}),t._v(" "),n("h3",{attrs:{id:"header-row-background"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#header-row-background","aria-hidden":"true"}},[t._v("#")]),t._v(" Header row background "),n("Badge",{attrs:{text:"1.1.1"}})],1),t._v(" "),n("p",[t._v("Background of header table row")]),t._v(" "),n("ThemeProperty",{attrs:{name:"tableHeaderRowBackgroundColor",type:"@ColorInt int",defaults:"0"}})],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"tables-extension"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tables-extension","aria-hidden":"true"}},[this._v("#")]),this._v(" Tables extension")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Markwon markwon "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Markwon"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("builder")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// create default instance of TablePlugin")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TablePlugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("create")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("build")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" TableTheme tableTheme "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TableTheme"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("builder")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("tableBorderColor")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Color"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RED"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("tableBorderWidth")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("tableCellPadding")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("tableHeaderRowBackgroundColor")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Color"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BLACK"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("tableEvenRowBackgroundColor")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Color"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GREEN"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("tableOddRowBackgroundColor")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Color"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("YELLOW"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("build")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Markwon markwon "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Markwon"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("builder")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TablePlugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("create")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tableTheme"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("build")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Markwon markwon "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Markwon"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("builder")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TablePlugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("create")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("builder "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                builder\n                        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("tableBorderColor")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Color"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RED"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("tableBorderWidth")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("tableCellPadding")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("tableHeaderRowBackgroundColor")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Color"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BLACK"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("tableEvenRowBackgroundColor")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Color"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GREEN"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("tableOddRowBackgroundColor")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Color"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("YELLOW"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("build")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Please note, that "),a("em",[this._v("by default")]),this._v(" tables have limitations. For example, table contents won't be copied to clipboard if a TextView\nhas such functionality. Table will always take full width of a TextView in which it is displayed.\nAll columns will always be of the same width. So, "),a("em",[this._v("default")]),this._v(" implementation provides basic\nfunctionality which can answer some needs. These all come from the limited nature of the TextView\nto display such content.")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("If table contains links a special "),n("code",[t._v("MovementMethod")]),t._v(" must be used on a "),n("code",[t._v("TextView")]),t._v(" widget - "),n("code",[t._v("TableAwareMovementMethod")]),t._v(",\nfor example with "),n("code",[t._v("MovementMethodPlugin")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Markwon markwon "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Markwon"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("builder")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinkifyPlugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("create")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TablePlugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("create")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// use TableAwareLinkMovementMethod to handle clicks inside tables,")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// wraps LinkMovementMethod internally")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MovementMethodPlugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("create")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TableAwareMovementMethod"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("create")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("build")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("In order to provide full-fledged experience, tables must be displayed in a special widget.\nSince version "),a("code",[this._v("3.0.0")]),this._v(" Markwon provides a special artifact "),a("code",[this._v("markwon-recycler")]),this._v(" that allows\nto render markdown in a set of widgets in a RecyclerView. It also gives ability to change\ndisplay widget form TextView to any other.")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Table table "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Table"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("parse")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Markwon"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TableBlock"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyTableWidget"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setTable")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("table"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme","aria-hidden":"true"}},[this._v("#")]),this._v(" Theme")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"cell-padding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cell-padding","aria-hidden":"true"}},[this._v("#")]),this._v(" Cell padding")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"border-color"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#border-color","aria-hidden":"true"}},[this._v("#")]),this._v(" Border color")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"border-width"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#border-width","aria-hidden":"true"}},[this._v("#")]),this._v(" Border width")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"odd-row-background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#odd-row-background","aria-hidden":"true"}},[this._v("#")]),this._v(" Odd row background")])}],!1,null,null,null);e.options.__file="README.md";a.default=e.exports}}]);