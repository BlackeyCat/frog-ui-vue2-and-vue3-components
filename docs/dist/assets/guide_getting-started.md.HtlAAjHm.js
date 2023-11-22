import{_ as s,o,c as n,R as a}from"./chunks/framework.pwPEqsEt.js";const g=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md","lastUpdated":1700570292000}'),l={name:"guide/getting-started.md"},p=a(`<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h1><h2 id="安装组件库" tabindex="-1">安装组件库 <a class="header-anchor" href="#安装组件库" aria-label="Permalink to &quot;安装组件库&quot;">​</a></h2><blockquote><p>yarn add @frog-components</p></blockquote><h2 id="使用组件库" tabindex="-1">使用组件库 <a class="header-anchor" href="#使用组件库" aria-label="Permalink to &quot;使用组件库&quot;">​</a></h2><ul><li>自动导入</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> FrogUI, { DemoComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@frog-components&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@frog-components/lib/v2/style.css&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 二选一即可</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@frog-components/lib/v3/style.css&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 二选一即可</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> FrogUI, { DemoComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@frog-components&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@frog-components/lib/v2/style.css&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 二选一即可</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@frog-components/lib/v3/style.css&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 二选一即可</span></span></code></pre></div><ul><li>手动导入 Vue2 版本</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> FrogUI, { DemoComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@frog-components/lib/v2/index.umd.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@frog-components/lib/v2/style.css&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> FrogUI, { DemoComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@frog-components/lib/v2/index.umd.js&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@frog-components/lib/v2/style.css&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div><ul><li>手动导入 Vue3 版本</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> FrogUI, { DemoComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@frog-components/lib/v3/index.umd.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@frog-components/lib/v3/style.css&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> FrogUI, { DemoComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@frog-components/lib/v3/index.umd.js&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@frog-components/lib/v3/style.css&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div>`,10),e=[p];function t(c,r,i,y,d,E){return o(),n("div",null,e)}const u=s(l,[["render",t]]);export{g as __pageData,u as default};