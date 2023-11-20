(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9912:function(n,e,r){Promise.resolve().then(r.bind(r,570))},570:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Q}});var t=r(5489),o=r(75),i=r(637),d=r(418);function a(){let n=(0,t._)(["\n  text-align: center;\n  margin: 1.5rem;\n"]);return a=function(){return n},n}function l(){let n=(0,t._)(["\n  font-size: 1.5rem;\n"]);return l=function(){return n},n}let c=d.Z.header(a()),s=d.Z.h1(l()),u=n=>{let{text:e}=n;return e.split("\\n").map((n,e)=>(0,o.jsxs)("span",{children:[n,(0,o.jsx)("br",{})]},e))};var m=n=>{let{title:e,subTitle:r}=n;return(0,o.jsxs)(c,{children:[(0,o.jsx)(s,{children:(0,o.jsx)(u,{text:e})}),(0,o.jsx)("div",{children:(0,o.jsx)(u,{text:r})})]})};let f={accent:"#ed9b38"},g={accent:"#935d1d"};function h(){let n=(0,t._)(["\n  padding-top: 1rem;\n  padding-bottom: 0rem;\n  margin-bottom: 1rem;\n  background-color: ",";\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n  }\n"]);return h=function(){return n},n}function p(){let n=(0,t._)(["\n  background-color: ",";\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n  }\n"]);return p=function(){return n},n}function b(){let n=(0,t._)(["\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-left: 0.25rem;\n  padding: 0.5rem;\n  background-color: ",";\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n  }\n"]);return b=function(){return n},n}function x(){let n=(0,t._)(["\n  padding: 0.75rem;\n"]);return x=function(){return n},n}let v="white",j="#1a202c",k=d.Z.div(h(),v,j),w=d.Z.div(p(),f.accent,g.accent),_=d.Z.div(b(),v,j),Z=d.Z.div(x());var y=n=>{let{label:e,isVisible:r,children:t}=n;return(0,o.jsxs)(k,{hidden:!(null==r||r),children:[(0,o.jsx)(w,{children:(0,o.jsx)(_,{children:e})}),(0,o.jsx)(Z,{children:t})]})};function C(){let n=(0,t._)(["\n  margin-bottom: 2rem;\n"]);return C=function(){return n},n}function S(){let n=(0,t._)(["\n  font-size: 0.75rem;\n  margin-right: 0.5rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  letter-spacing: 0.5rem;\n  color: white;\n  background-color: #e66059;\n  @media (prefers-color-scheme: dark) {\n    color: #ddd;\n    background-color: #982d27;\n  }\n"]);return S=function(){return n},n}function z(){let n=(0,t._)(["\n  font-weight: bold;\n  display: flex;\n  flex-direction: column;\n\n  & > span {\n    margin-bottom: 0.5rem;\n  }\n"]);return z=function(){return n},n}function E(){let n=(0,t._)(["\n  font-size: 0.75rem;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  padding: 0.75rem;\n  color: white;\n  background-color: #e66059;\n  border-radius: 0.25rem;\n  display: flex;\n  align-items: center;\n  @media (prefers-color-scheme: dark) {\n    color: #ddd;\n    background-color: #982d27;\n  }\n"]);return E=function(){return n},n}function q(){let n=(0,t._)(["\n  font-size: 1rem;\n  margin-right: 0.5rem;\n  font-family: var(--font-material-symbols);\n  font-variation-settings: 'FILL' 1;\n"]);return q=function(){return n},n}let L=d.Z.div(C()),M=d.Z.span(S()),V=d.Z.label(z()),Error=d.Z.div(E()),I=d.Z.span(q());var N=n=>{let{required:e,label:r,isVisible:t,errorMessage:i,children:d}=n;return(0,o.jsxs)(L,{hidden:!(null==t||t),children:[(0,o.jsxs)(V,{children:[(0,o.jsxs)("span",{children:[e&&(0,o.jsx)("span",{children:(0,o.jsx)(M,{children:"必須"})}),r]}),d]}),0!==i.length&&(0,o.jsxs)(Error,{children:[(0,o.jsx)(I,{children:"warning"}),i]})]})};function O(){let n=(0,t._)(["\n  border: 0.25rem solid #ddd;\n  border-radius: 0.25rem;\n  padding: 0.75rem;\n  &:focus {\n    outline: none;\n    box-shadow: inset 0 0 0.25rem ",";\n  }\n  @media (prefers-color-scheme: dark) {\n    border: 0.25rem solid #555;\n    background-color: #222;\n    color: #ddd;\n    &:focus {\n      box-shadow: inset 0 0 0.5rem ",";\n    }\n  }\n"]);return O=function(){return n},n}let P=d.Z.input(O(),f.accent,g.accent);var F=n=>{let{required:e,label:r,isVisible:t,inputValue:i,errorMessage:d,onInputValueChange:a}=n;return(0,o.jsx)(N,{required:e,label:r,isVisible:t,errorMessage:d,children:(0,o.jsx)(P,{type:"text",pattern:"\\d{3} \\d{4}",required:e,placeholder:"130 0012",value:i,onChange:n=>{a(n.target.value)}})})};let D=n=>n.length<=3?n:n.slice(0,3)+" "+n.slice(3),K=n=>/^\d{7}$/.test(n);var T=n=>{let{required:e,label:r,isVisible:t,postCode:d,onPostCodeChange:a,postCodeErrorMessage:l,setPostCodeErrorMessage:c}=n,[s,u]=(0,i.useState)(D((null==d?void 0:d.toString())||""));return(0,o.jsx)(F,{required:e,label:r,isVisible:t,inputValue:s,errorMessage:l,onInputValueChange:n=>{let e=n.replace(/[^0-9]/g,"");7<e.length&&(e=e.slice(0,7)),u(D(e)),K(e)?(c(""),a(e)):(c("郵便番号を正しく入力してください"),a(""))}})};function $(){let n=(0,t._)(["\n  position: relative;\n  font-size: 1rem;\n  font-style: bold;\n  margin: 0.75rem;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  width: calc(100% - 1.5rem);\n  background-color: #007bff;\n  color: white;\n  &:hover {\n    background-color: #0056b3;\n  }\n  &:active {\n    background-color: #004085;\n  }\n  @media (prefers-color-scheme: dark) {\n    color: var(--color);\n    background-color: #0f4a8a;\n    &:hover {\n      background-color: #0056b3;\n    }\n    &:active {\n      background-color: #082748;\n    }\n  }\n  &::after {\n    position: absolute;\n    right: 1.25rem;\n    font-size: 1.25rem;\n    font-family: var(--font-material-symbols);\n    content: 'expand_circle_right';\n    font-variation-settings: 'FILL' 1;\n  }\n"]);return $=function(){return n},n}let A=d.Z.button($());var B=n=>{let{content:e}=n;return(0,o.jsx)(A,{type:"submit",children:e})};function G(){let n=(0,t._)(["\n  margin-left: auto;\n  margin-right: auto;\n\n  @media (min-width: 640px) {\n    /* sm */\n    max-width: 640px;\n  }\n\n  @media (min-width: 768px) {\n    /* md */\n    max-width: 768px;\n  }\n\n  @media (min-width: 1024px) {\n    /* lg */\n    max-width: 1024px;\n  }\n\n  @media (min-width: 1280px) {\n    /* xl */\n    max-width: 1280px;\n  }\n\n  @media (min-width: 1536px) {\n    /* 2xl */\n    max-width: 1536px;\n  }\n\n  align-items: center;\n  justify-content: center;\n\n  @media (min-width: 640px) {\n    padding-top: 0;\n    padding-bottom: 0;\n    padding-right: 1.5rem;\n    padding-left: 1.5rem;\n  }\n  @media (min-width: 1024px) {\n    padding-top: 0;\n    padding-bottom: 0;\n    padding-right: 2rem;\n    padding-left: 2rem;\n  }\n"]);return G=function(){return n},n}function H(){let n=(0,t._)(["\n  width: 100%;\n  padding: 15px;\n  background-color: #007bff;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  &:hover {\n    background-color: #0056b3;\n  }\n"]);return H=function(){return n},n}let J=d.Z.div(G());d.Z.button(H());var Q=()=>{let[n,e]=(0,i.useState)(""),[r,t]=(0,i.useState)(""),[d,a]=(0,i.useState)(!0),[l,c]=(0,i.useState)(!0),[s,u]=(0,i.useState)(""),[f,g]=(0,i.useState)("");return(0,o.jsxs)(J,{children:[(0,o.jsx)(m,{title:"電気代から\\nかんたんシミュレーション",subTitle:"検針票を用意しなくても OK\\nいくらおトクになるのか今すぐわかります！"}),(0,o.jsxs)("form",{onSubmit:e=>{e.preventDefault(),console.log({postalCode:n,isTokyoEnergyPartner:d,isTodenETC:l,contractCapacity:s,currentUsage:f})},children:[(0,o.jsx)(y,{label:"郵便番号をご入力ください",children:(0,o.jsx)(T,{required:!0,label:"電気を使用する場所の郵便番号",postCode:n,onPostCodeChange:n=>{if(0!==n.length)switch(n[0]){case"1":case"5":t(""),e(n);break;default:t("サービスエリア対象外です"),e("")}},postCodeErrorMessage:r,setPostCodeErrorMessage:t})}),(0,o.jsx)(y,{label:"電気のご使用状況について教えてください"}),(0,o.jsx)(y,{label:"現在の電気の使用状況について教えてください"}),(0,o.jsx)(B,{content:"結果を見る"})]})]})}}},function(n){n.O(0,[250,761,331,744],function(){return n(n.s=9912)}),_N_E=n.O()}]);