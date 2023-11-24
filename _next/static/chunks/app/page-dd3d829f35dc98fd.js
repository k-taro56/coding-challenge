(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9912:function(e,n,r){Promise.resolve().then(r.bind(r,8414))},8414:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return eV}});var t=r(5489),o=r(75),i=r(9961),a=r(637);function s(){let e=(0,t._)(["\n  text-align: center;\n  margin: 1.5rem;\n"]);return s=function(){return e},e}function d(){let e=(0,t._)(["\n  font-size: 1.5rem;\n"]);return d=function(){return e},e}let l=i.Z.header(s()),c=i.Z.h1(d()),u=e=>{let{text:n}=e;return n.split("\\n").map((e,n)=>(0,o.jsxs)("span",{children:[e,(0,o.jsx)("br",{})]},n))};var m=e=>{let{title:n,subTitle:r}=e;return(0,o.jsxs)(l,{children:[(0,o.jsx)(c,{children:(0,o.jsx)(u,{text:n})}),(0,o.jsx)("div",{children:(0,o.jsx)(u,{text:r})})]})};let g={accent:"#ed9b38",border:"#ddd"},b={accent:"#935d1d",border:"#555"};function p(){let e=(0,t._)(["\n  padding-top: 1rem;\n  padding-bottom: 0rem;\n  margin-bottom: 1rem;\n  background-color: ",";\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n  }\n"]);return p=function(){return e},e}function h(){let e=(0,t._)(["\n  background-color: ",";\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n  }\n"]);return h=function(){return e},e}function f(){let e=(0,t._)(["\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-left: 0.25rem;\n  padding: 0.5rem;\n  background-color: ",";\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n  }\n"]);return f=function(){return e},e}function x(){let e=(0,t._)(["\n  padding: 0.75rem;\n"]);return x=function(){return e},e}let v="white",j="#1a202c",C=i.Z.div(p(),v,j),k=i.Z.div(h(),g.accent,b.accent),w=i.Z.div(f(),v,j),S=i.Z.div(x());var M=e=>{let{label:n,isVisible:r,children:t}=e;return(0,o.jsxs)(C,{hidden:!(null==r||r),children:[(0,o.jsx)(k,{children:(0,o.jsx)(w,{children:n})}),(0,o.jsx)(S,{children:t})]})};function _(){let e=(0,t._)(["\n  margin-bottom: 2rem;\n"]);return _=function(){return e},e}function y(){let e=(0,t._)(["\n  font-size: 0.75rem;\n  margin-right: 0.5rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  letter-spacing: 0.5rem;\n  color: white;\n  background-color: #e66059;\n  @media (prefers-color-scheme: dark) {\n    color: #ddd;\n    background-color: #982d27;\n  }\n"]);return y=function(){return e},e}function E(){let e=(0,t._)(["\n  font-weight: bold;\n  display: flex;\n  flex-direction: column;\n\n  & > span {\n    margin-bottom: 0.5rem;\n  }\n"]);return E=function(){return e},e}function V(){let e=(0,t._)(["\n  font-size: 0.75rem;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  padding: 0.75rem;\n  color: white;\n  background-color: #e66059;\n  border-radius: 0.25rem;\n  display: flex;\n  align-items: center;\n  @media (prefers-color-scheme: dark) {\n    color: #ddd;\n    background-color: #982d27;\n  }\n"]);return V=function(){return e},e}function Z(){let e=(0,t._)(["\n  font-size: 1rem;\n  margin-right: 0.5rem;\n  font-family: var(--font-material-symbols);\n  font-variation-settings: 'FILL' 1;\n"]);return Z=function(){return e},e}let q=i.Z.div(_()),A=i.Z.span(y()),z=i.Z.label(E()),Error=i.Z.div(V()),P=i.Z.span(Z());var B=e=>{let{required:n,label:r,isVisible:t,errorMessage:i,children:a}=e;return(0,o.jsxs)(q,{hidden:!(null==t||t),children:[(0,o.jsxs)(z,{children:[(0,o.jsxs)("span",{children:[n&&(0,o.jsx)("span",{children:(0,o.jsx)(A,{children:"必須"})}),r]}),a]}),0!==i.length&&(0,o.jsxs)(Error,{children:[(0,o.jsx)(P,{children:"warning"}),i]})]})};function I(){let e=(0,t._)(["\n  border: 0.25rem solid ",";\n  border-radius: 0.25rem;\n  padding: 0.75rem;\n  &:focus {\n    outline: none;\n    box-shadow: inset 0 0 0.25rem ",";\n  }\n  @media (prefers-color-scheme: dark) {\n    border: 0.25rem solid ",";\n    background-color: #222;\n    color: #ddd;\n    &:focus {\n      box-shadow: inset 0 0 0.5rem ",";\n    }\n  }\n"]);return I=function(){return e},e}let L=i.Z.input(I(),g.border,g.accent,b.border,b.accent);var N=e=>{let{required:n,label:r,isVisible:t,inputValue:i,errorMessage:a,onInputValueChange:s}=e;return(0,o.jsx)(B,{required:n,label:r,isVisible:t,errorMessage:a,children:(0,o.jsx)(L,{type:"text",pattern:"\\d{3} \\d{4}",required:n,placeholder:"130 0012",value:i,onChange:e=>{s(e.target.value)}})})};let O=e=>e.length<=3?e:e.slice(0,3)+" "+e.slice(3),T=e=>/^\d{7}$/.test(e);var F=e=>{let{required:n,label:r,isVisible:t,postCode:i,onPostCodeChange:s,postCodeErrorMessage:d,setPostCodeErrorMessage:l}=e,[c,u]=(0,a.useState)(O((null==i?void 0:i.toString())||""));return(0,o.jsx)(N,{required:n,label:r,isVisible:t,inputValue:c,errorMessage:d,onInputValueChange:e=>{let n=e.replace(/[^0-9]/g,"");7<n.length&&(n=n.slice(0,7)),u(O(n)),T(n)?(l(""),s(n)):(l("郵便番号を正しく入力してください"),s(""))}})};function $(){let e=(0,t._)(["\n  position: relative;\n  &::before {\n    content: 'expand_more';\n    font-family: var(--font-material-symbols);\n    font-size: 1.75rem;\n    color: ",";\n    position: absolute;\n    left: 0.5rem;\n    top: 50%;\n    transform: translateY(-50%);\n    pointer-events: none;\n    @media (prefers-color-scheme: dark) {\n      color: ",";\n    }\n  }\n"]);return $=function(){return e},e}function D(){let e=(0,t._)(["\n  border-top: 0.25rem solid ",";\n  border-left: 0.25rem solid ",";\n  border-right: 0.25rem solid ",";\n  border-bottom: 0;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 2.25rem;\n  padding-right: 0.75rem;\n  width: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  &:focus {\n    outline: none;\n    box-shadow: inset 0 0 0.25rem ",";\n  }\n  @media (prefers-color-scheme: dark) {\n    border-top: 0.25rem solid ",";\n    border-left: 0.25rem solid ",";\n    border-right: 0.25rem solid ",";\n    border-bottom: 0;\n    background-color: #222;\n    color: #ddd;\n    &:focus {\n      box-shadow: inset 0 0 0.5rem ",";\n    }\n  }\n"]);return D=function(){return e},e}function K(){let e=(0,t._)(["\n  border-top: "," dotted 0.1rem;\n  @media (prefers-color-scheme: dark) {\n    border-top: "," dotted 0.1rem;\n  }\n"]);return K=function(){return e},e}function Y(){let e=(0,t._)(["\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: normal;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  background-color: ",";\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n    color: #ddd;\n  }\n"]);return Y=function(){return e},e}function G(){let e=(0,t._)(["\n  border-bottom: 0.25rem solid ",";\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  @media (prefers-color-scheme: dark) {\n    border-bottom: 0.25rem solid ",";\n  }\n"]);return G=function(){return e},e}let H=i.Z.div($(),g.accent,b.accent),J=i.Z.select(D(),g.border,g.border,g.border,g.accent,b.border,b.border,b.border,b.accent),Q=i.Z.div(K(),g.border,b.border),R=i.Z.div(Y(),g.border,b.border),U=i.Z.div(G(),g.border,b.border);var W=e=>{let{label:n,required:r,isVisible:t,selections:i,selected:a,descriptions:s,errorMessage:d,onSelectionChange:l}=e;return(0,o.jsx)(B,{label:n,required:r,isVisible:t,errorMessage:d,children:(0,o.jsxs)("div",{children:[(0,o.jsx)(H,{children:(0,o.jsxs)(J,{required:r,value:a,onChange:e=>{l(e.target.value)},children:[(0,o.jsx)("option",{value:"",disabled:!0,children:"選択してください"}),i.map(e=>(0,o.jsx)("option",{value:e,children:e},e))]})}),s?(0,o.jsxs)("div",{children:[(0,o.jsx)(Q,{}),(0,o.jsx)(R,{children:s[i.indexOf(a)]})]}):(0,o.jsx)(U,{})]})})},X=e=>{let{required:n,label:r,isVisible:t,selections:i,selected:a,descriptions:s,onSelectionChange:d,errorMessage:l,setErrorMessage:c}=e;return(0,o.jsx)(W,{required:n,label:r,isVisible:t,selections:i,selected:a,descriptions:s,errorMessage:l,onSelectionChange:e=>{""===e?c("選択してください"):(c(""),d(e))}})};function ee(){let e=(0,t._)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return ee=function(){return e},e}function en(){let e=(0,t._)(["\n  width: 100%;\n  border: 0.25rem solid ",";\n  border-radius: 0.25rem;\n  padding: 0.75rem;\n  &:focus {\n    outline: none;\n    box-shadow: inset 0 0 0.25rem ",";\n  }\n  @media (prefers-color-scheme: dark) {\n    border: 0.25rem solid ",";\n    background-color: #222;\n    color: #ddd;\n    &:focus {\n      box-shadow: inset 0 0 0.5rem ",";\n    }\n  }\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"]);return en=function(){return e},e}function er(){let e=(0,t._)(["\n  font-weight: normal;\n  margin-left: 0.5rem;\n"]);return er=function(){return e},e}let et=i.Z.div(ee()),eo=i.Z.input(en(),g.border,g.accent,b.border,b.accent),ei=i.Z.span(er());var ea=e=>{let{required:n,label:r,isVisible:t,placeholder:i,inputValue:a,unit:s,min:d,max:l,errorMessage:c,onInputValueChange:u}=e;return(0,o.jsx)(B,{required:n,label:r,isVisible:t,errorMessage:c,children:(0,o.jsxs)(et,{children:[(0,o.jsx)(eo,{type:"number",required:n,placeholder:i,value:a,min:d,max:l,onChange:e=>{u(e.target.value)}}),(0,o.jsx)(ei,{children:s})]})})},es=e=>{let{required:n,label:r,isVisible:t,placeholder:i,value:s,unit:d,min:l,max:c,onValueChange:u,errorMessage:m,setErrorMessage:g}=e,[b,p]=(0,a.useState)((null==s?void 0:s.toString())||"");return(0,o.jsx)(ea,{required:n,label:r,isVisible:t,placeholder:i,inputValue:b,unit:d,min:l,max:c,errorMessage:m,onInputValueChange:e=>{if(p(e),""===e){g("入力してください"),u(void 0);return}let n=Number(e);l&&n<l?(g("".concat(l," ").concat(d,"以上を入力してください")),u(void 0)):c&&c<n?(g("".concat(c," ").concat(d,"以下を入力してください")),u(void 0)):(g(""),u(n))}})};function ed(){let e=(0,t._)(["\n  border: 0.25rem solid #ddd;\n  border-radius: 0.25rem;\n  padding: 0.75rem;\n  &:focus {\n    outline: none;\n    box-shadow: inset 0 0 0.25rem ",";\n  }\n  @media (prefers-color-scheme: dark) {\n    border: 0.25rem solid #555;\n    background-color: #222;\n    color: #ddd;\n    &:focus {\n      box-shadow: inset 0 0 0.5rem ",";\n    }\n  }\n"]);return ed=function(){return e},e}let el=i.Z.input(ed(),g.accent,b.accent);var ec=e=>{let{required:n,label:r,isVisible:t,inputValue:i,errorMessage:a,onInputValueChange:s}=e;return(0,o.jsx)(B,{required:n,label:r,isVisible:t,errorMessage:a,children:(0,o.jsx)(el,{type:"email",required:n,placeholder:"mail@example.com",value:i,onChange:e=>{s(e.target.value)}})})};let eu=e=>/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e);var em=e=>{let{required:n,label:r,isVisible:t,mailAddress:i,onMailAddressChange:s,mailAddressErrorMessage:d,setMailAddressErrorMessage:l}=e,[c,u]=(0,a.useState)(i);return(0,o.jsx)(ec,{required:n,label:r,isVisible:t,inputValue:c,onInputValueChange:e=>{u(e),eu(e)?(l(""),s(e)):(l("メールアドレスを正しく入力してください"),s(""))},errorMessage:d})};function eg(){let e=(0,t._)(["\n  position: relative;\n  font-size: 1rem;\n  font-style: bold;\n  margin: 0.75rem;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  width: calc(100% - 1.5rem);\n  background-color: #007bff;\n  color: white;\n  &:hover {\n    background-color: #0056b3;\n  }\n  &:active {\n    background-color: #004085;\n  }\n  @media (prefers-color-scheme: dark) {\n    color: var(--color);\n    background-color: #0f4a8a;\n    &:hover {\n      background-color: #0056b3;\n    }\n    &:active {\n      background-color: #082748;\n    }\n  }\n  &::after {\n    position: absolute;\n    right: 1.25rem;\n    font-size: 1.25rem;\n    font-family: var(--font-material-symbols);\n    content: 'expand_circle_right';\n    font-variation-settings: 'FILL' 1;\n  }\n"]);return eg=function(){return e},e}let eb=i.Z.button(eg());var ep=e=>{let{content:n}=e;return(0,o.jsx)(eb,{type:"submit",children:n})},eh=e=>{let{postCode:n,onPostCodeChange:r,postCodeErrorMessage:t,setPostCodeErrorMessage:i,electricCompanySelections:a,selectedElectricCompany:s,onElectricCompanyChange:d,electricCompanyErrorMessage:l,setElectricCompanyErrorMessage:c,planSelections:u,selectedPlan:g,onPlanChange:b,planErrorMessage:p,setPlanErrorMessage:h,contractCapacitySelections:f,selectedContractCapacity:x,onContractCapacitySelectionChange:v,contractCapacityErrorMessage:j,setContractCapacityErrorMessage:C,contractCapacity:k,onContractCapacityValueChange:w,electricBill:S,onElectricBillChange:_,electricBillErrorMessage:y,setElectricBillErrorMessage:E,mailAddress:V,onMailAddressChange:Z,mailAddressErrorMessage:q,setMailAddressErrorMessage:A,postCodeCompleted:z,electricCompanyCompleted:P,planCompleted:B,contractCapacityCompleted:I,electricBillCompleted:L,mailAddressCompleted:N,handleSubmit:O}=e;return(0,o.jsxs)("div",{children:[(0,o.jsx)(m,{title:"電気代から\\nかんたんシミュレーション",subTitle:"検針票を用意しなくても OK\\nいくらおトクになるのか今すぐわかります！"}),(0,o.jsxs)("form",{onSubmit:O,children:[(0,o.jsx)(M,{label:"郵便番号をご入力ください",children:(0,o.jsx)(F,{required:!0,label:"電気を使用する場所の郵便番号",postCode:n,onPostCodeChange:r,postCodeErrorMessage:t,setPostCodeErrorMessage:i})}),(0,o.jsxs)(M,{label:"電気のご使用状況について教えてください",isVisible:z,children:[(0,o.jsx)(X,{label:"電力会社",required:!0,selections:a,selected:s,onSelectionChange:d,errorMessage:l,setErrorMessage:c}),(0,o.jsx)(X,{label:"プラン",required:!0,isVisible:P,selections:u,selected:g,onSelectionChange:b,errorMessage:p,setErrorMessage:h}),(0,o.jsx)(X,{label:"契約容量",required:0!==f.length,isVisible:B&&0!==f.length,selections:f,selected:x,onSelectionChange:v,errorMessage:j,setErrorMessage:C}),(0,o.jsx)(es,{label:"契約容量",required:B&&0===f.length,isVisible:B&&0===f.length,placeholder:"24",value:k,unit:"kVA",min:6,max:49,onValueChange:w,errorMessage:j,setErrorMessage:C})]}),(0,o.jsx)(M,{label:"現在の電気の使用状況について教えてください",isVisible:I,children:(0,o.jsx)(es,{required:!0,label:"先月の電気代は？",placeholder:"5000",value:S,unit:"円",min:1e3,onValueChange:_,errorMessage:y,setErrorMessage:E})}),(0,o.jsx)(M,{label:"メールアドレスをご入力ください",isVisible:L,children:(0,o.jsx)(em,{required:!0,label:"メールアドレス",mailAddress:V,onMailAddressChange:Z,mailAddressErrorMessage:q,setMailAddressErrorMessage:A})}),N&&(0,o.jsx)(ep,{content:"結果を見る"})]})]})};let ef="東京電力",ex="関西電力",ev={1:ef,5:ex},ej="従量電灯 A",eC="従量電灯 B",ek="従量電灯 C",ew=[eC,ek],eS=[ej,eC],eM=["10A","15A","20A","30A","40A","50A","60A"];var e_=()=>{let[e,n]=(0,a.useState)(""),[r,t]=(0,a.useState)(""),[i,s]=(0,a.useState)(""),[d,l]=(0,a.useState)([]),[c,u]=(0,a.useState)(""),[m,g]=(0,a.useState)(""),[b,p]=(0,a.useState)([]),[h,f]=(0,a.useState)(""),[x,v]=(0,a.useState)(""),[j,C]=(0,a.useState)([]),[k,w]=(0,a.useState)(""),[S,M]=(0,a.useState)(""),[_,y]=(0,a.useState)(),[E,V]=(0,a.useState)(),[Z,q]=(0,a.useState)(""),[A,z]=(0,a.useState)(""),[P,B]=(0,a.useState)(""),[I,L]=(0,a.useState)(!1),[N,O]=(0,a.useState)(!1),[T,F]=(0,a.useState)(!1),[$,D]=(0,a.useState)(!1),[K,Y]=(0,a.useState)(!1),[G,H]=(0,a.useState)(!1);return(0,o.jsx)(eh,{postCode:r,postCodeErrorMessage:i,electricCompanySelections:d,selectedElectricCompany:c,electricCompanyErrorMessage:m,planSelections:b,selectedPlan:h,planErrorMessage:x,contractCapacitySelections:j,selectedContractCapacity:k,contractCapacityErrorMessage:S,contractCapacity:_,electricBill:E,electricBillErrorMessage:Z,mailAddress:A,mailAddressErrorMessage:P,postCodeCompleted:I,electricCompanyCompleted:N,planCompleted:T,contractCapacityCompleted:$,electricBillCompleted:K,mailAddressCompleted:G,handleSubmit:e=>{e.preventDefault()},onPostCodeChange:e=>{if(O(!1),F(!1),D(!1),Y(!1),H(!1),0===e.length){L(!1);return}let r=ev[e[0]];u(""),r?(n(e[0]),t(e),s(""),l([r,"その他"]),L(!0)):(n(""),l([]),s("サービスエリア対象外です"),t(""))},onElectricCompanyChange:n=>{F(!1),D(!1),Y(!1),H(!1),0!==n.length&&(u(n),f(""),"1"===e&&n===ef?(g(""),p(ew),O(!0)):"5"===e&&n===ex?(g(""),p(eS),O(!0)):"その他"===n&&(g("シミュレーション対象外です"),p([]),O(!1)))},onPlanChange:e=>{if(D(!1),Y(!1),H(!1),0===e.length){F(!1);return}f(e),F(!0),w(""),e===eC&&c===ef?C(eM):(e===ek&&c===ef||e===eC&&c===ex||e===ej&&c===ex&&(F(!1),D(!0)),C([]))},onContractCapacitySelectionChange:e=>{Y(!1),H(!1),w(e),e.length>0?D(!0):D(!1)},onContractCapacityValueChange:e=>{Y(!1),H(!1),y(e),void 0===e?D(!1):D(!0)},onElectricBillChange:e=>{H(!1),V(e),void 0===e?Y(!1):Y(!0)},onMailAddressChange:e=>{if(0===e.length){H(!1);return}z(e),H(!0)},setPostCodeErrorMessage:s,setElectricCompanyErrorMessage:g,setPlanErrorMessage:v,setContractCapacityErrorMessage:M,setElectricBillErrorMessage:q,setMailAddressErrorMessage:B})};function ey(){let e=(0,t._)(["\n  margin-left: auto;\n  margin-right: auto;\n\n  // The following media queries are inspired by the Container class in Tailwind CSS.\n  // They set the maximum width of the container at different viewport sizes.\n  @media (min-width: 640px) {\n    /* sm */\n    max-width: 640px;\n  }\n\n  @media (min-width: 768px) {\n    /* md */\n    max-width: 768px;\n  }\n\n  @media (min-width: 1024px) {\n    /* lg */\n    max-width: 1024px;\n  }\n\n  @media (min-width: 1280px) {\n    /* xl */\n    max-width: 1280px;\n  }\n\n  @media (min-width: 1536px) {\n    /* 2xl */\n    max-width: 1536px;\n  }\n\n  align-items: center;\n  justify-content: center;\n\n  @media (min-width: 640px) {\n    padding-top: 0;\n    padding-bottom: 1.5rem;\n    padding-right: 1.5rem;\n    padding-left: 1.5rem;\n  }\n  @media (min-width: 1024px) {\n    padding-top: 0;\n    padding-bottom: 2rem;\n    padding-right: 2rem;\n    padding-left: 2rem;\n  }\n"]);return ey=function(){return e},e}let eE=i.Z.div(ey());var eV=()=>(0,o.jsx)(eE,{children:(0,o.jsx)(e_,{})})}},function(e){e.O(0,[626,761,331,744],function(){return e(e.s=9912)}),_N_E=e.O()}]);