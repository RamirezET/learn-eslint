import{_ as e,c as i,o as l,a as t}from"./app.210dd5fd.js";const m=JSON.parse('{"title":"\u521B\u5EFA\u4E00\u4E2A\u53EF\u5171\u4EAB\u7684 ESLint \u63D2\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u76EE\u6807","slug":"\u76EE\u6807"},{"level":2,"title":"Coding","slug":"coding"},{"level":2,"title":"\u6548\u679C","slug":"\u6548\u679C"}],"relativePath":"guide/\u521B\u5EFA\u4E00\u4E2A\u53EF\u5171\u4EAB\u7684ESLint\u63D2\u4EF6.md","lastUpdated":1656770147000}'),a={name:"guide/\u521B\u5EFA\u4E00\u4E2A\u53EF\u5171\u4EAB\u7684ESLint\u63D2\u4EF6.md"},n=t('<h1 id="\u521B\u5EFA\u4E00\u4E2A\u53EF\u5171\u4EAB\u7684-eslint-\u63D2\u4EF6" tabindex="-1">\u521B\u5EFA\u4E00\u4E2A\u53EF\u5171\u4EAB\u7684 ESLint \u63D2\u4EF6 <a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u53EF\u5171\u4EAB\u7684-eslint-\u63D2\u4EF6" aria-hidden="true">#</a></h1><blockquote><p>\u7EE7\u7EED\u4E0A\u4E00\u8BB2\uFF0C\u8FD9\u4E00\u8BB2\u6211\u4EEC\u6765\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5DF1\u7684 ESLint \u63D2\u4EF6\uFF0C\u5E76\u5728\u5176\u4ED6\u9879\u76EE\u4E2D\u8FD0\u7528\u5B83</p></blockquote><h2 id="\u76EE\u6807" tabindex="-1">\u76EE\u6807 <a class="header-anchor" href="#\u76EE\u6807" aria-hidden="true">#</a></h2><ul><li>\u5B89\u88C5<code>npm i -g yo</code></li><li>\u5B89\u88C5<code>npm i -g generator-eslint</code></li><li>\u8FD0\u884C<code>yo eslint:plugin</code></li><li>\u7F16\u5199\u81EA\u5B9A\u4E49\u89C4\u5219</li><li>\u5728\u5176\u4ED6\u9879\u76EE\u5B89\u88C5\u5F53\u524D\u63D2\u4EF6\uFF0C\u5E76\u914D\u7F6E\u81EA\u5B9A\u4E49\u89C4\u5219</li></ul><h2 id="coding" tabindex="-1">Coding <a class="header-anchor" href="#coding" aria-hidden="true">#</a></h2><ul><li>\u60F3\u8981\u5FEB\u901F\u521B\u5EFA eslint-plugin \u9879\u76EE\u6211\u4EEC\u5F97\u4F7F\u7528\u5B83\u7684\u811A\u624B\u67B6</li><li>\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u5B89\u88C5\u6587\u6863\u5B89\u88C5\u811A\u624B\u67B6\u6240\u9700\u7684\u4F9D\u8D56</li><li>\u6587\u6863\u5728\u8FD9\u91CC \u{1F449} <a href="https://www.npmjs.com/package/generator-eslint" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/generator-eslint</a></li></ul><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3pjv81bplj20u00upwhs.jpg" alt="image-20220629235208153" style="zoom:50%;"><ul><li>\u5B89\u88C5\u597D\u4F9D\u8D56\u540E\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u76EE\u5F55\u540D\u5C31\u53EB\u81EA\u5DF1\u7684\u63D2\u4EF6\u540D\u5B57\u5C31\u597D\uFF0C\u8FD9\u91CC\u6211\u662F\u7528\u7684\u662F monorepo \u7BA1\u7406\uFF0C\u6240\u4EE5\u76F4\u63A5\u5728 packages \u521B\u5EFA<code>eslint-plugin-sudongyeur</code>\u8FD9\u4E2A\u6587\u4EF6\u5939</li></ul><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3pjzb2f20j21dp0u00ur.jpg" alt="image-20220629235603320" style="zoom:50%;"><ul><li><p>\u7136\u540E\u8FDB\u5165<code>eslint-plugin-sudongyuer</code>\u6587\u4EF6\u5939\u76EE\u5F55\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4</p></li><li><p>\u6267\u884C <code>yo eslint:plugin</code>\u521D\u59CB\u5316\u9879\u76EE\uFF0C\u8FDB\u5165\u547D\u4EE4\u884C\u4EA4\u4E92\u754C\u9762</p></li><li><p>\u5B8C\u6210\u4EE5\u4E0B\u7684\u4EA4\u4E92\uFF0C\u6CE8\u610F\u6211\u4EEC\u8FD9\u91CC\u8981\u521B\u5EFA\u81EA\u5B9A\u4E49\u89C4\u5219\uFF0C\u6240\u4EE5\u9009\u62E9 Yes \u26A0\uFE0F\u8FD9\u91CC\u6709\u4E2A\u6CE8\u610F\u4E8B\u9879 \u6211\u4EEC\u7684 eslint \u63D2\u4EF6\u5305\u90FD\u9700\u8981\u662F<code>eslint-plugin-xxx</code>\u4EE5<code>eslint-plugin \u5F00\u5934</code>\uFF0C\u8FD9\u91CC\u4F7F\u7528\u811A\u624B\u67B6\u5B83\u4F1A\u5E2E\u6211\u4EEC\u81EA\u52A8\u5904\u7406\u7684\uFF0C\u4E0D\u7528\u62C5\u5FC3</p><p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3pk1cfwfaj20t204swfc.jpg" alt="image-20220629235801061"></p></li><li><p>\u521D\u59CB\u5316\u540E\uFF0C\u53EF\u4EE5\u770B\u89C1\u5982\u4E0B\u7684\u76EE\u5F55\u7ED3\u6784</p><p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3pk3dgf42j20f40auaah.jpg" alt="image-20220629235957965"></p></li><li><p>\u7136\u540E\u6211\u4EEC\u53EA\u9700\u8981\u5728 rules \u4E2D\u4E66\u534F\u6211\u4EEC\u7684\u81EA\u5B9A\u4E49\u89C4\u5219\u5C31\u884C\u5566\uFF0C\u8FD9\u91CC\u6211\u5C31\u7528\u6211\u4EEC\u4E4B\u524D\u5C0F\u8282\u5199\u7684<code>find-todo</code>\uFF0C\u5982\u679C\u4F60\u8FD8\u4E0D\u77E5\u9053\u5982\u4F55\u4E66\u5199\u81EA\u5B9A\u4E49\u89C4\u5219\uFF0C\u8BF7\u53C2\u8003\u8FD9\u7BC7\u6587\u7AE0 <a href="https://sudongyuer.github.io/learn-eslint/guide/%E6%89%BE%E5%88%B0%E9%A1%B9%E7%9B%AE%E4%B8%AD%E7%9A%84TODO.html" target="_blank" rel="noopener noreferrer">https://sudongyuer.github.io/learn-eslint/guide/\u627E\u5230\u9879\u76EE\u4E2D\u7684TODO.html</a></p></li></ul><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3pk56qedqj20wj0u042q.jpg" alt="image-20220630000142329" style="zoom:33%;"><ul><li>\u8FD9\u5C31\u662F\u6211\u4EEC\u5199\u597D\u81EA\u5B9A\u4E49\u89C4\u5219\u7684\u76EE\u5F55\u7ED3\u6784</li></ul><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3pk71w4vmj218t0u07a5.jpg" alt="image-20220630000329933" style="zoom:50%;"><ul><li>\u8FD9\u6837\u5C31\u7B97\u6211\u4EEC\u8FB9\u5199\u597D\u4E86\u81EA\u5DF1\u7684\u81EA\u5B9A\u4E49\u63D2\u4EF6</li><li>\u63A5\u4E0B\u6765\u53BB\u5176\u4ED6\u9879\u76EE\u5B89\u88C5\u5E76\u4F7F\u7528\uFF0C\u6211\u4EEC\u53BB\u5230 eslint-setup \u8FD9\u4E2A\u9879\u76EE\u4E2D\u53BB\u4F7F\u7528\u4E00\u4E0B\u6211\u4EEC\u7684\u63D2\u4EF6</li></ul><p>\u200B \u8FD9\u91CC\u6211\u7531\u4E8E\u4F7F\u7528\u7684 pnpm \u6240\u4EE5\u76F4\u63A5\u4F7F\u7528 workspace \u5C31\u53EF\u4EE5\u76F4\u63A5\u5C06<code>eslint-plugin-sudongyeur</code>\u8FD9\u4E2A\u8F6F\u94FE\u63A5\u8FDB\u5165\u5F53\u524D\u9879\u76EE\uFF0C\u65B9\u4FBF\u8C03\u8BD5\uFF0C\u6B63 \u5E38\u7684\u8BDD\u6211\u4EEC\u5E94\u8BE5\u662F\u5C06\u81EA\u5DF1\u5199\u597D\u7684\u63D2\u4EF6\u53D1\u5E03\u5305\u5230 npm\uFF0C\u7136\u540E\u5728\u9879\u76EE\u53BB\u4E2D\u5B89\u88C5\u5B83</p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3pk89mu05j21350u0435.jpg" alt="image-20220630000440000" style="zoom:50%;"><ul><li>\u73B0\u5728\u5230<code>eslintrc</code>\u4E2D<code>plugins</code>\u6DFB\u52A0\u6211\u4EEC\u7684\u63D2\u4EF6\u5E76\u5728<code>rules</code>\u5F00\u542F\u6211\u4EEC\u7684\u81EA\u5B9A\u4E49\u89C4\u5219</li></ul><p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3pkghkii5j215f0u0wj9.jpg" alt="image-20220630001234351"></p><h2 id="\u6548\u679C" tabindex="-1">\u6548\u679C <a class="header-anchor" href="#\u6548\u679C" aria-hidden="true">#</a></h2><p>\u5F53\u6211\u4EEC\u5728\u5F53\u524D\u9879\u76EE\u4E2D\u4F7F\u7528<code>//TODO</code>\u6CE8\u91CA\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u88AB\u6211\u4EEC\u7684\u81EA\u5B9A\u4E49\u63D2\u4EF6\u63D0\u793A</p><p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3pktcopymj216e0u0gpp.jpg" alt="image-20220630002456134"></p>',21),s=[n];function o(p,c,r,d,g,u){return l(),i("div",null,s)}var _=e(a,[["render",o]]);export{m as __pageData,_ as default};
