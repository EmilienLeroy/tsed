(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{471:function(s,t,a){"use strict";a.r(t);var n=a(0),p=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"class-adapter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-adapter"}},[s._v("#")]),s._v(" Class Adapter")]),s._v(" "),a("Badge",{attrs:{text:"Class",type:"class"}}),s._v(" "),a("section",{staticClass:"table-features"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[s._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { Adapter } "),a("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"token string"},[s._v('"@tsed/adapters"')])])])]),a("tr",[a("th",[s._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.22.1/packages/adapters/src/domain/Adapter.ts#L0-L0"}},[s._v("/packages/adapters/src/domain/Adapter.ts")])])])])])]),s._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" Adapter<T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(" = ")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v("> "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/decorators/Configuration.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Configuration")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Type")])]),s._v("<T> | Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" collectionName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" indexes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        propertyKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("div",{pre:!0,attrs:{class:"language- extra-class"}},[a("pre",[a("code",[s._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span>options<span class="token punctuation">:</span> <a href="/api/adapters/domain/AdapterConstructorOptions.html"><span class="token">AdapterConstructorOptions</span></a><span class="token punctuation">,</span> configuration<span class="token punctuation">:</span> <a href="/api/di/decorators/Configuration.html"><span class="token">Configuration</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">validate</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> T<span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token keyword">void</span>&gt;<span class="token punctuation">;</span>\n<span class="token keyword">abstract</span> <span class="token function">create</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> Partial&lt;Omit&lt;T<span class="token punctuation">,</span> "_id"&gt;&gt;<span class="token punctuation">,</span> expiresAt?<span class="token punctuation">:</span> <span class="token keyword">Date</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;T&gt;<span class="token punctuation">;</span>\n<span class="token keyword">abstract</span> <span class="token function">update</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> T<span class="token punctuation">,</span> expiresAt?<span class="token punctuation">:</span> <span class="token keyword">Date</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;T | undefined&gt;<span class="token punctuation">;</span>\n<span class="token keyword">abstract</span> <span class="token function">updateOne</span><span class="token punctuation">(</span>predicate<span class="token punctuation">:</span> Partial&lt;T&gt;<span class="token punctuation">,</span> value<span class="token punctuation">:</span> Partial&lt;T&gt;<span class="token punctuation">,</span> expiresAt?<span class="token punctuation">:</span> <span class="token keyword">Date</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;T | undefined&gt;<span class="token punctuation">;</span>\n<span class="token keyword">abstract</span> <span class="token function">upsert</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> T<span class="token punctuation">,</span> expiresAt?<span class="token punctuation">:</span> <span class="token keyword">Date</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;T&gt;<span class="token punctuation">;</span>\n<span class="token keyword">abstract</span> <span class="token function">findOne</span><span class="token punctuation">(</span>predicate<span class="token punctuation">:</span> Partial&lt;T&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;T | undefined&gt;<span class="token punctuation">;</span>\n<span class="token keyword">abstract</span> <span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;T | undefined&gt;<span class="token punctuation">;</span>\n<span class="token keyword">abstract</span> <span class="token function">findAll</span><span class="token punctuation">(</span>predicate?<span class="token punctuation">:</span> Partial&lt;T&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;T<span class="token punctuation">[</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">;</span>\n<span class="token keyword">abstract</span> <span class="token function">deleteOne</span><span class="token punctuation">(</span>predicate<span class="token punctuation">:</span> Partial&lt;T&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;T | undefined&gt;<span class="token punctuation">;</span>\n<span class="token keyword">abstract</span> <span class="token function">deleteMany</span><span class="token punctuation">(</span>predicate<span class="token punctuation">:</span> Partial&lt;T&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;T<span class="token punctuation">[</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">;</span>\n<span class="token keyword">abstract</span> <span class="token function">deleteById</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;T | undefined&gt;<span class="token punctuation">;</span>\n<span class="token function">getModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Object | undefined<span class="token punctuation">;</span>\n<span class="token keyword">protected</span> <span class="token function">updateInstance</span><span class="token punctuation">(</span>src<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> payload<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n<span class="token keyword">protected</span> <span class="token function">deserialize</span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n<span class="token keyword">protected</span> <span class="token function">serialize</span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n')])])]),a("p",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[s._v("#")]),s._v(" Members")]),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/decorators/Configuration.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Configuration")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Type")])]),s._v("<T> | Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" collectionName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" indexes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     propertyKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("validate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Promise<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Partial<Omit<T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(' "_id">>'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" expiresAt?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Promise<T>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" expiresAt?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Promise<T | undefined>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("updateOne")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("predicate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Partial<T>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Partial<T>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" expiresAt?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Promise<T | undefined>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("upsert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" expiresAt?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Promise<T>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findOne")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("predicate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Partial<T>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Promise<T | undefined>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Promise<T | undefined>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("predicate?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Partial<T>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Promise<T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("deleteOne")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("predicate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Partial<T>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Promise<T | undefined>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("deleteMany")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("predicate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Partial<T>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Promise<T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("deleteById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Promise<T | undefined>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getModel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Object | undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("updateInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("deserialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("serialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])])],1)}),[],!1,null,null,null);t.default=p.exports}}]);