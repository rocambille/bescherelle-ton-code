import{r as e,P as t,R as n,L as r,H as o,a as l,b as a}from"./vendor.d613ddf9.js";const s=[],c=e.exports.createContext(s);function i({children:t}){const[r,o]=e.exports.useState(s);return e.exports.useEffect((()=>{fetch("https://my-json-server.typicode.com/rocambille/my-dictations/dications").then((e=>e.json())).then((e=>o(e)))}),[]),n.createElement(c.Provider,{value:r},t)}function m({children:e}){return n.createElement(i,null,e)}let d;i.propTypes={children:t.element.isRequired},m.propTypes={children:t.element.isRequired};const u={},p=function(e,t){if(!t)return e();if(void 0===d){const e=document.createElement("link").relList;d=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in u)return;u[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":d,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))},h="Bescherelle ton code";function f({children:e,className:t,tag:r}){return n.createElement(r,{className:`${t} text-3xl font-bold`},e)}function E(t){e.exports.useEffect((()=>{document.title=h,t&&(document.title+=` – ${t}`)}))}f.propTypes={children:t.oneOfType([t.element,t.string]).isRequired,className:t.string,tag:t.string},f.defaultProps={className:"",tag:"h1"};const y=[{path:"/",Component:function(){return E(),n.createElement(n.Fragment,null,n.createElement(f,null,h),n.createElement("ul",null,n.createElement("li",null,n.createElement(r,{to:"/dictations"},"La dictée de Robby"))))}},{path:"/dictations/:id",Component:e.exports.lazy((()=>p((()=>import("./Dictation.c3630ad5.js")),["/bescherelle-ton-code/assets/Dictation.c3630ad5.js","/bescherelle-ton-code/assets/Dictation.bd159138.css","/bescherelle-ton-code/assets/vendor.d613ddf9.js"])))},{path:"/dictations",Component:e.exports.lazy((()=>p((()=>import("./DictationList.96837a47.js")),["/bescherelle-ton-code/assets/DictationList.96837a47.js","/bescherelle-ton-code/assets/vendor.d613ddf9.js"])))}];function x(){return n.createElement("main",{className:"container mx-auto p-4 space-y-4 min-h-screen flex flex-col relative"},n.createElement(m,null,n.createElement(o,null,n.createElement(e.exports.Suspense,{fallback:n.createElement("p",null,"Chargement...")},y.map((({path:e,Component:t},r)=>n.createElement(l,{key:r,exact:!0,path:e,component:t})))))))}a.render(n.createElement(x,null),document.querySelector("#root"));export{c as D,f as T,p as _,E as u};
