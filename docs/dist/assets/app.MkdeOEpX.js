import{d as c,_ as i,o as p,c as u,r as l,k as m,v as r,a1 as _,a2 as h,a3 as g,a4 as $,a5 as A,a6 as C,a7 as P,a8 as v,a9 as y,aa as b,ab as w,u as E,j as R,z as x,ac as j,ad as D,ae as O,af as S}from"./chunks/framework.pwPEqsEt.js";import{t as T}from"./chunks/theme.0j4bRIRL.js";const k=/-(\w)/g;function f(e){return e.replace(k,(n,t)=>t.toUpperCase())}const z="frog";function N(e){return e=`${z}-${e}`,[e,f(`-${e}`)]}function B(e){return e.install=n=>{const t=e.name,[a,s]=N(t);n.component(a,e),n.component(s,e),n.component(t,e),n.component(f(`-${t}`),e)},e}const L=c({name:"demo-component",props:{},setup:function(e){return{}}}),V=m("h1",null,"demo-component",-1);function F(e,n,t,a,s,ne){return p(),u("div",null,[V,l(e.$slots,"default")])}const M=i(L,[["render",F]]),I=B(M),U=Object.freeze(Object.defineProperty({__proto__:null,DemoComponent:I},Symbol.toStringTag,{value:"Module"})),G=function(e){Object.values(U).forEach(n=>{!n||!n.name||n.install(e)})},H={install:G},q={},J={style:{color:"red"}};function K(e,n){return p(),u("code",J,[l(e.$slots,"default")])}const Q=i(q,[["render",K]]),W={...T,enhanceApp({app:e}){e.use(H),e.component("co-red",Q)}};function d(e){if(e.extends){const n=d(e.extends);return{...n,...e,async enhanceApp(t){n.enhanceApp&&await n.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=d(W),X=c({name:"VitePressApp",setup(){const{site:e}=E();return R(()=>{x(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&j(),D(),O(),o.setup&&o.setup(),()=>S(o.Layout)}});async function Y(){const e=ee(),n=Z();n.provide(h,e);const t=g(e.route);return n.provide($,t),n.component("Content",A),n.component("ClientOnly",C),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:n,router:e,siteData:P}),{app:n,router:e,data:t}}function Z(){return v(X)}function ee(){let e=r,n;return y(t=>{let a=b(t),s=null;return a&&(e&&(n=a),(e||n===a)&&(a=a.replace(/\.js$/,".lean.js")),s=w(()=>import(a),__vite__mapDeps([]))),r&&(e=!1),s},o.NotFound)}r&&Y().then(({app:e,router:n,data:t})=>{n.go().then(()=>{_(n.route,t.site),e.mount("#app")})});export{Y as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}