import{P as e,R as t,r as n,L as r,S as l,a as s,H as o,b as a}from"./vendor.335415bc.js";let c;const i={},u=function(e,t){if(!t)return e();if(void 0===c){const e=document.createElement("link").relList;c=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in i)return;i[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":c,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))},m="Bescherelle ton code";function d({children:e,className:n,tag:r}){return t.createElement(r,{className:`${n} text-3xl font-bold`},e)}function p(e){n.exports.useEffect((()=>{document.title=m,e&&(document.title+=` – ${e}`)}))}function f(){return p(),t.createElement(t.Fragment,null,t.createElement(d,null,m),t.createElement("ul",null,t.createElement("li",null,t.createElement(r,{to:"/dictations"},"Les dictées de Robby"))))}d.propTypes={children:e.oneOfType([e.element,e.string]).isRequired,className:e.string,tag:e.string},d.defaultProps={className:"",tag:"h1"};const E=[],h=n.exports.createContext(E);function x({children:e}){const[r,l]=n.exports.useState(E);return n.exports.useEffect((()=>{fetch("https://my-json-server.typicode.com/rocambille/my-dictations/dications").then((e=>e.json())).then((e=>l(e)))}),[]),t.createElement(h.Provider,{value:r},e)}x.propTypes={children:e.element.isRequired};const y=()=>n.exports.useContext(h),_=n.exports.lazy((()=>u((()=>import("./Dictation.f60ef1e2.js")),["/bescherelle-ton-code/assets/Dictation.f60ef1e2.js","/bescherelle-ton-code/assets/Dictation.bd159138.css","/bescherelle-ton-code/assets/vendor.335415bc.js"]))),g=n.exports.lazy((()=>u((()=>import("./DictationList.608be338.js")),["/bescherelle-ton-code/assets/DictationList.608be338.js","/bescherelle-ton-code/assets/vendor.335415bc.js"]))),v=(e,n)=>t.createElement(s,{exact:!0,path:e,component:n});function b(){return t.createElement(l,null,v("/",f),t.createElement(n.exports.Suspense,{fallback:t.createElement("p",null,"Chargement...")},t.createElement(x,null,v("/dictations/:id",_),v("/dictations",g))))}function L(){return t.createElement("main",{className:"container mx-auto p-4 space-y-4 min-h-screen flex flex-col relative"},t.createElement(o,null,t.createElement(b,null)))}a.render(t.createElement(L,null),document.querySelector("#root"));export{d as T,p as a,y as u};