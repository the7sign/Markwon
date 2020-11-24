(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{243:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"inline-parser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inline-parser","aria-hidden":"true"}},[t._v("#")]),t._v(" Inline Parser "),a("Badge",{attrs:{text:"4.2.0"}})],1),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Since "),a("Badge",{attrs:{text:"4.3.0"}}),t._v(" there is also "),a("code",[t._v("MarkwonInlineParserPlugin")]),t._v(" which can be used\nto allow other plugins to customize inline parser")],1),t._v(" "),t._m(1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),a("hr"),t._v(" "),t._m(4),t._m(5),t._m(6),t._m(7),a("p",[t._v("To use custom InlineParser:")]),t._v(" "),t._m(8),a("hr"),t._v(" "),a("p",[t._v("The list of available inline processors:")]),t._v(" "),t._m(9)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Experimental")]),this._v(" commonmark-java inline parser that allows customizing\ncore features and/or extend with own.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Markwon markwon "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Markwon"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("builder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MarkwonInlineParserPlugin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("create")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Usage of "),s("em",[this._v("internal")]),this._v(" classes:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commonmark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("internal"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Bracket"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commonmark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("internal"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Delimiter"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commonmark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("internal"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Escaping"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commonmark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("internal"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Html5Entities"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commonmark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("internal"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LinkScanner"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commonmark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("internal"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Parsing"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commonmark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("internal"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inline"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AsteriskDelimiterProcessor"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commonmark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("internal"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inline"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UnderscoreDelimiterProcessor"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// all default (like current commonmark-java InlineParserImpl) ")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" InlineParserFactory factory "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" MarkwonInlineParser"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("factoryBuilder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// disable images (current markdown images will be considered as links):")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" InlineParserFactory factory "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" MarkwonInlineParser"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("factoryBuilder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("excludeInlineProcessor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BangInlineProcessor"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// disable core delimiter processors for `*`|`_` and `**`|`__`")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" InlineParserFactory factory "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" MarkwonInlineParser"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("factoryBuilder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("excludeDelimiterProcessor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AsteriskDelimiterProcessor"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("excludeDelimiterProcessor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UnderscoreDelimiterProcessor"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// disable _all_ markdown inlines except for links (open and close bracket handling `[` & `]`)")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" InlineParserFactory inlineParserFactory "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" MarkwonInlineParser"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("factoryBuilderNoDefaults")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// note that there is no `includeDefaults` method call")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("referencesEnabled")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addInlineProcessor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("OpenBracketInlineProcessor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addInlineProcessor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CloseBracketInlineProcessor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Markwon markwon "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Markwon"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("builder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("AbstractMarkwonPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("configureParser")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" Parser"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("inlineParserFactory")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inlineParserFactory"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("AutolinkInlineProcessor")]),t._v(" ("),a("code",[t._v("<")]),t._v(" => "),a("code",[t._v("<me@mydoma.in>")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("BackslashInlineProcessor")]),t._v(" ("),a("code",[t._v("\\\\")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("BackticksInlineProcessor")]),t._v(" ("),a("code",[t._v("`")]),t._v(" => "),a("code",[t._v("`code`")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("BangInlineProcessor")]),t._v(" ("),a("code",[t._v("!")]),t._v(" => "),a("code",[t._v("![alt](#src)")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("CloseBracketInlineProcessor")]),t._v(" ("),a("code",[t._v("]")]),t._v(" => "),a("code",[t._v("[link](#href)")]),t._v(", "),a("code",[t._v("![alt](#src)")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("EntityInlineProcessor")]),t._v(" ("),a("code",[t._v("&")]),t._v(" => "),a("code",[t._v("&amp;")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("HtmlInlineProcessor")]),t._v(" ("),a("code",[t._v("<")]),t._v(" => "),a("code",[t._v("<html></html>")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("NewLineInlineProcessor")]),t._v(" ("),a("code",[t._v("\\n")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("OpenBracketInlineProcessor")]),t._v(" ("),a("code",[t._v("[")]),t._v(" => "),a("code",[t._v("[link](#href)")]),t._v(")")])])}],!1,null,null,null);o.options.__file="README.md";s.default=o.exports}}]);