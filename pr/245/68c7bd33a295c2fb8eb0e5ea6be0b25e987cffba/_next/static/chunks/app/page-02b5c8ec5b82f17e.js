(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6095:function(e,r,n){Promise.resolve().then(n.bind(n,9719))},9719:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return e$}});var t=n(133),o=n(6240),a=n(6314),i=n(2009);let l="東京電力",s="関西電力",d="その他",c={1:[l,d],5:[s,d]},u="従量電灯 A",m="従量電灯 B",p="従量電灯 C",g=[m,p],C=[u,m],b=["10A","15A","20A","30A","40A","50A","60A"],h={area:"",postCode:"",postCodeErrorMessage:"",electricCompanySelections:[],selectedElectricCompany:"",electricCompanyErrorMessage:"",planSelections:[],selectedPlan:"",planErrorMessage:"",contractCapacitySelections:[],selectedContractCapacity:"",contractCapacityErrorMessage:"",contractCapacity:void 0,electricBill:void 0,electricBillErrorMessage:"",mailAddress:"",mailAddressErrorMessage:"",postCodeCompleted:!1,electricCompanyCompleted:!1,planCompleted:!1,contractCapacityCompleted:!1,electricBillCompleted:!1,mailAddressCompleted:!1},f=(e,r)=>((e.selectedElectricCompany=h.selectedElectricCompany,r)?(e.area=r,e.electricCompanySelections=c[r]):(e.area=h.area,e.electricCompanySelections=h.electricCompanySelections),e),E=e=>{let r=e[0];return"1"===r?f({...h,postCode:e,postCodeErrorMessage:"",postCodeCompleted:!0},"1"):"5"===r?f({...h,postCode:e,postCodeErrorMessage:"",postCodeCompleted:!0},"5"):f({...h,postCode:e,postCodeErrorMessage:"サービスエリア対象外です"},void 0)},x=(e,r)=>{let n=E(e.postCode);return r===l?(n.planSelections=g,n.electricCompanyCompleted=!0):r===s?(n.planSelections=C,n.electricCompanyCompleted=!0):r===d&&(n.electricCompanyErrorMessage="シミュレーション対象外です"),n},y=(e,r)=>{let n=x(e,e.selectedElectricCompany);return r===u?(n.selectedElectricCompany===s&&(n.contractCapacityCompleted=!0),n.planCompleted=!0):r===m?(n.selectedElectricCompany===l&&(n.contractCapacitySelections=b),n.planCompleted=!0):r===p&&(n.planCompleted=!0),n},_=(e,r)=>{let n=y(e,e.selectedPlan);return n.selectedContractCapacity=r,n},M=(e,r)=>{let n=y(e,e.selectedPlan);return n.contractCapacity=r,n},v=(e,r)=>{let n=y(e,e.selectedPlan);return n.electricBill=r,n},S=(e,r)=>{let n=y(e,e.selectedPlan);return n.mailAddress=r,n},j=(e,r)=>{switch(r.type){case"SET_AREA":return f(e,r.payload);case"SET_POST_CODE":return E(r.payload);case"SET_SELECTED_ELECTRIC_COMPANY":return x(e,r.payload);case"SET_SELECTED_PLAN":return y(e,r.payload);case"SET_SELECTED_CONTRACT_CAPACITY":return _(e,r.payload);case"SET_CONTRACT_CAPACITY":return M(e,r.payload);case"SET_ELECTRIC_BILL":return v(e,r.payload);case"SET_MAIL_ADDRESS":return S(e,r.payload);default:return e}};function A(){let e=(0,t._)(["\n  text-align: center;\n  margin: 1.5rem;\n"]);return A=function(){return e},e}function k(){let e=(0,t._)(["\n  font-size: 1.5rem;\n"]);return k=function(){return e},e}let T=a.Z.header(A()),w=a.Z.h1(k()),P=e=>{let{text:r}=e;return r.split("\\n").map((e,r)=>(0,o.jsxs)("span",{children:[e,(0,o.jsx)("br",{})]},r))};var V=e=>{let{title:r,subTitle:n}=e;return(0,o.jsxs)(T,{children:[(0,o.jsx)(w,{children:(0,o.jsx)(P,{text:r})}),(0,o.jsx)("div",{children:(0,o.jsx)(P,{text:n})})]})};let Z={accent:"#ed9b38",border:"#ddd"},L={accent:"#935d1d",border:"#555"};function q(){let e=(0,t._)(["\n  padding-top: 1rem;\n  padding-bottom: 0;\n  margin-bottom: 1rem;\n  background-color: ",";\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n  }\n"]);return q=function(){return e},e}function I(){let e=(0,t._)(["\n  background-color: ",";\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n  }\n"]);return I=function(){return e},e}function B(){let e=(0,t._)(["\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-left: 0.25rem;\n  padding: 0.5rem;\n  background-color: ",";\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n  }\n"]);return B=function(){return e},e}function z(){let e=(0,t._)(["\n  padding: 0.75rem;\n"]);return z=function(){return e},e}let O="white",D="#1a202c",N=a.Z.div(q(),O,D),R=a.Z.div(I(),Z.accent,L.accent),Y=a.Z.div(B(),O,D),F=a.Z.div(z());var $=e=>{let{label:r,isVisible:n,children:t}=e;return(0,o.jsxs)(N,{hidden:!(null==n||n),children:[(0,o.jsx)(R,{children:(0,o.jsx)(Y,{children:r})}),(0,o.jsx)(F,{children:t})]})};let K="\n  &:focus {\n    outline: none;\n    box-shadow: inset 0 0 0.25rem ".concat(Z.accent,";\n  }\n  @media (prefers-color-scheme: dark) {\n    &:focus {\n      box-shadow: inset 0 0 0.5rem ").concat(L.accent,";\n    }\n  }\n");function G(){let e=(0,t._)(["\n  width: 100%;\n  border: 0.25rem solid ",";\n  border-radius: 0.25rem;\n  padding: 0.75rem;\n  @media (prefers-color-scheme: dark) {\n    border: 0.25rem solid ",";\n    background-color: #222;\n    color: #ddd;\n  }\n  ","\n"]);return G=function(){return e},e}let H=a.Z.input(G(),Z.border,L.border,K);function J(){let e=(0,t._)(["\n  margin-bottom: 2rem;\n"]);return J=function(){return e},e}function Q(){let e=(0,t._)(["\n  font-size: 0.75rem;\n  margin-right: 0.5rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  letter-spacing: 0.5rem;\n  color: white;\n  background-color: #e66059;\n  @media (prefers-color-scheme: dark) {\n    color: #ddd;\n    background-color: #982d27;\n  }\n"]);return Q=function(){return e},e}function U(){let e=(0,t._)(["\n  font-weight: bold;\n  display: flex;\n  flex-direction: column;\n\n  & > span {\n    margin-bottom: 0.5rem;\n  }\n"]);return U=function(){return e},e}function W(){let e=(0,t._)(["\n  font-size: 0.75rem;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  padding: 0.75rem;\n  color: white;\n  background-color: #e66059;\n  border-radius: 0.25rem;\n  display: flex;\n  align-items: center;\n  @media (prefers-color-scheme: dark) {\n    color: #ddd;\n    background-color: #982d27;\n  }\n"]);return W=function(){return e},e}function X(){let e=(0,t._)(["\n  font-size: 1rem;\n  margin-right: 0.5rem;\n  font-family: var(--font-material-symbols);\n  font-variation-settings: 'FILL' 1;\n"]);return X=function(){return e},e}let ee=a.Z.div(J()),er=a.Z.span(Q()),en=a.Z.label(U()),et=a.Z.div(W()),eo=a.Z.span(X());var ea=e=>{let{required:r,label:n,isVisible:t,errorMessage:a,children:i}=e;return(0,o.jsxs)(ee,{hidden:!(null==t||t),children:[(0,o.jsxs)(en,{children:[(0,o.jsxs)("span",{children:[r&&(0,o.jsx)("span",{children:(0,o.jsx)(er,{children:"必須"})}),n]}),i]}),0!==a.length&&(0,o.jsxs)(et,{children:[(0,o.jsx)(eo,{children:"warning"}),a]})]})},ei=e=>{let{required:r,label:n,isVisible:t,inputValue:a,errorMessage:i,onInputValueChange:l}=e;return(0,o.jsx)(ea,{required:r,label:n,isVisible:t,errorMessage:i,children:(0,o.jsx)(H,{type:"text",pattern:"\\d{3} \\d{4}",required:r,placeholder:"130 0012",value:a,onChange:e=>{l(e.target.value)}})})};let el=e=>e.length<=3?e:e.slice(0,3)+" "+e.slice(3),es=e=>/^\d{7}$/.test(e);var ed=e=>{let{required:r,label:n,isVisible:t,postCode:a,onPostCodeChange:l,postCodeErrorMessage:s,setPostCodeErrorMessage:d}=e,[c,u]=(0,i.useState)(el((null==a?void 0:a.toString())||""));return(0,o.jsx)(ei,{required:r,label:n,isVisible:t,inputValue:c,errorMessage:s,onInputValueChange:e=>{let r=e.replace(/[^0-9]/g,"");7<r.length&&(r=r.slice(0,7)),u(el(r)),es(r)?(d(""),l(r)):(d("郵便番号を正しく入力してください"),l(""))}})};function ec(){let e=(0,t._)(["\n  position: relative;\n  &::before {\n    content: 'expand_more';\n    font-family: var(--font-material-symbols);\n    font-size: 1.75rem;\n    color: ",";\n    position: absolute;\n    left: 0.5rem;\n    top: 50%;\n    transform: translateY(-50%);\n    pointer-events: none;\n    @media (prefers-color-scheme: dark) {\n      color: ",";\n    }\n  }\n"]);return ec=function(){return e},e}function eu(){let e=(0,t._)(["\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 2.25rem;\n  padding-right: 0.75rem;\n  width: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  @media (prefers-color-scheme: dark) {\n    background-color: #222;\n    color: #ddd;\n  }\n  ","\n"]);return eu=function(){return e},e}function em(){let e=(0,t._)(["\n  border-top: 0.25rem solid ",";\n  border-left: 0.25rem solid ",";\n  border-right: 0.25rem solid ",";\n  border-bottom: 0;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  @media (prefers-color-scheme: dark) {\n    border-top: 0.25rem solid ",";\n    border-left: 0.25rem solid ",";\n    border-right: 0.25rem solid ",";\n    border-bottom: 0;\n  }\n"]);return em=function(){return e},e}function ep(){let e=(0,t._)(["\n  border: 0.25rem solid ",";\n  border-radius: 0.25rem;\n  @media (prefers-color-scheme: dark) {\n    border: 0.25rem solid ",";\n  }\n"]);return ep=function(){return e},e}function eg(){let e=(0,t._)(["\n  border-top: "," dotted 0.1rem;\n  @media (prefers-color-scheme: dark) {\n    border-top: "," dotted 0.1rem;\n  }\n"]);return eg=function(){return e},e}function eC(){let e=(0,t._)(["\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: normal;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  background-color: ",";\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n    color: #ddd;\n  }\n"]);return eC=function(){return e},e}let eb=a.Z.div(ec(),Z.accent,L.accent),eh=a.Z.select(eu(),K),ef=(0,a.Z)(eh)(em(),Z.border,Z.border,Z.border,L.border,L.border,L.border),eE=(0,a.Z)(eh)(ep(),Z.border,L.border),ex=a.Z.div(eg(),Z.border,L.border),ey=a.Z.div(eC(),Z.border,L.border),e_=e=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("option",{value:"",disabled:!0,children:"選択してください"}),e.map(e=>(0,o.jsx)("option",{value:e,children:e},e))]});var eM=e=>{let{label:r,required:n,isVisible:t,selections:a,selected:i,descriptions:l,errorMessage:s,onSelectionChange:d}=e,c=e=>{d(e.target.value)};return(0,o.jsx)(ea,{label:r,required:n,isVisible:t,errorMessage:s,children:(0,o.jsx)(eb,{children:l?(0,o.jsxs)("div",{children:[(0,o.jsx)(ef,{required:n,value:i,onChange:c,children:e_(a)}),(0,o.jsx)(ex,{}),(0,o.jsx)(ey,{children:l[a.indexOf(i)]})]}):(0,o.jsx)(eE,{required:n,value:i,onChange:c,children:e_(a)})})})},ev=e=>{let{required:r,label:n,isVisible:t,selections:a,selected:i,descriptions:l,onSelectionChange:s,errorMessage:d,setErrorMessage:c}=e;return(0,o.jsx)(eM,{required:r,label:n,isVisible:t,selections:a,selected:i,descriptions:l,errorMessage:d,onSelectionChange:e=>{""===e?c("選択してください"):(c(""),s(e))}})};function eS(){let e=(0,t._)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return eS=function(){return e},e}function ej(){let e=(0,t._)(["\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"]);return ej=function(){return e},e}function eA(){let e=(0,t._)(["\n  font-weight: normal;\n  margin-left: 0.5rem;\n"]);return eA=function(){return e},e}let ek=a.Z.div(eS()),eT=(0,a.Z)(H)(ej()),ew=a.Z.span(eA());var eP=e=>{let{required:r,label:n,isVisible:t,placeholder:a,inputValue:i,unit:l,min:s,max:d,errorMessage:c,onInputValueChange:u}=e;return(0,o.jsx)(ea,{required:r,label:n,isVisible:t,errorMessage:c,children:(0,o.jsxs)(ek,{children:[(0,o.jsx)(eT,{type:"number",required:r,placeholder:a,value:i,min:s,max:d,onChange:e=>{u(e.target.value)}}),(0,o.jsx)(ew,{children:l})]})})},eV=e=>{let{required:r,label:n,isVisible:t,placeholder:a,value:l,unit:s,min:d,max:c,onValueChange:u,errorMessage:m,setErrorMessage:p}=e,[g,C]=(0,i.useState)((null==l?void 0:l.toString())||"");return(0,o.jsx)(eP,{required:r,label:n,isVisible:t,placeholder:a,inputValue:g,unit:s,min:d,max:c,errorMessage:m,onInputValueChange:e=>{if(C(e),""===e){p("入力してください"),u(void 0);return}let r=Number(e);d&&r<d?(p("".concat(d," ").concat(s,"以上を入力してください")),u(void 0)):c&&c<r?(p("".concat(c," ").concat(s,"以下を入力してください")),u(void 0)):(p(""),u(r))}})};function eZ(){let e=(0,t._)(["\n  border: 0.25rem solid #ddd;\n  border-radius: 0.25rem;\n  padding: 0.75rem;\n  &:focus {\n    outline: none;\n    box-shadow: inset 0 0 0.25rem ",";\n  }\n  @media (prefers-color-scheme: dark) {\n    border: 0.25rem solid #555;\n    background-color: #222;\n    color: #ddd;\n    &:focus {\n      box-shadow: inset 0 0 0.5rem ",";\n    }\n  }\n"]);return eZ=function(){return e},e}let eL=a.Z.input(eZ(),Z.accent,L.accent);var eq=e=>{let{required:r,label:n,isVisible:t,inputValue:a,errorMessage:i,onInputValueChange:l}=e;return(0,o.jsx)(ea,{required:r,label:n,isVisible:t,errorMessage:i,children:(0,o.jsx)(eL,{type:"email",required:r,placeholder:"mail@example.com",value:a,onChange:e=>{l(e.target.value)}})})};let eI=e=>/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e);var eB=e=>{let{required:r,label:n,isVisible:t,mailAddress:a,onMailAddressChange:l,mailAddressErrorMessage:s,setMailAddressErrorMessage:d}=e,[c,u]=(0,i.useState)(a);return(0,o.jsx)(eq,{required:r,label:n,isVisible:t,inputValue:c,onInputValueChange:e=>{u(e),eI(e)?(d(""),l(e)):(d("メールアドレスを正しく入力してください"),l(""))},errorMessage:s})};function ez(){let e=(0,t._)(["\n  position: relative;\n  font-size: 1rem;\n  font-style: bold;\n  margin: 0.75rem;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  width: calc(100% - 1.5rem);\n  background-color: #007bff;\n  color: white;\n  &:hover {\n    background-color: #0056b3;\n  }\n  &:active {\n    background-color: #004085;\n  }\n  @media (prefers-color-scheme: dark) {\n    color: var(--color);\n    background-color: #0f4a8a;\n    &:hover {\n      background-color: #0056b3;\n    }\n    &:active {\n      background-color: #082748;\n    }\n  }\n  &::after {\n    position: absolute;\n    right: 1.25rem;\n    font-size: 1.25rem;\n    font-family: var(--font-material-symbols);\n    content: 'expand_circle_right';\n    font-variation-settings: 'FILL' 1;\n  }\n"]);return ez=function(){return e},e}let eO=a.Z.button(ez());var eD=e=>{let{content:r}=e;return(0,o.jsx)(eO,{type:"submit",children:r})},eN=e=>{let{postCode:r,onPostCodeChange:n,postCodeErrorMessage:t,setPostCodeErrorMessage:a,electricCompanySelections:i,selectedElectricCompany:l,onElectricCompanyChange:s,electricCompanyErrorMessage:d,setElectricCompanyErrorMessage:c,planSelections:u,selectedPlan:m,onPlanChange:p,planErrorMessage:g,setPlanErrorMessage:C,contractCapacitySelections:b,selectedContractCapacity:h,onContractCapacitySelectionChange:f,contractCapacityErrorMessage:E,setContractCapacityErrorMessage:x,contractCapacity:y,onContractCapacityValueChange:_,electricBill:M,onElectricBillChange:v,electricBillErrorMessage:S,setElectricBillErrorMessage:j,mailAddress:A,onMailAddressChange:k,mailAddressErrorMessage:T,setMailAddressErrorMessage:w,postCodeCompleted:P,electricCompanyCompleted:Z,planCompleted:L,contractCapacityCompleted:q,electricBillCompleted:I,mailAddressCompleted:B,handleSubmit:z}=e;return(0,o.jsxs)("div",{children:[(0,o.jsx)(V,{title:"電気代から\\nかんたんシミュレーション",subTitle:"検針票を用意しなくても OK\\nいくらおトクになるのか今すぐわかります！"}),(0,o.jsxs)("form",{onSubmit:z,children:[(0,o.jsx)($,{label:"郵便番号をご入力ください",children:(0,o.jsx)(ed,{required:!0,label:"電気を使用する場所の郵便番号",postCode:r,onPostCodeChange:n,postCodeErrorMessage:t,setPostCodeErrorMessage:a})}),(0,o.jsxs)($,{label:"電気のご使用状況について教えてください",isVisible:P,children:[(0,o.jsx)(ev,{label:"電力会社",required:!0,selections:i,selected:l,onSelectionChange:s,errorMessage:d,setErrorMessage:c}),(0,o.jsx)(ev,{label:"プラン",required:!0,isVisible:Z,selections:u,selected:m,onSelectionChange:p,errorMessage:g,setErrorMessage:C}),(0,o.jsx)(ev,{label:"契約容量",required:0!==b.length,isVisible:L&&0!==b.length,selections:b,selected:h,onSelectionChange:f,errorMessage:E,setErrorMessage:x}),(0,o.jsx)(eV,{label:"契約容量",required:L&&0===b.length,isVisible:L&&0===b.length,placeholder:"24",value:y,unit:"kVA",min:6,max:49,onValueChange:_,errorMessage:E,setErrorMessage:x})]}),(0,o.jsx)($,{label:"現在の電気の使用状況について教えてください",isVisible:q,children:(0,o.jsx)(eV,{required:!0,label:"先月の電気代は？",placeholder:"5000",value:M,unit:"円",min:1e3,onValueChange:v,errorMessage:S,setErrorMessage:j})}),(0,o.jsx)($,{label:"メールアドレスをご入力ください",isVisible:I,children:(0,o.jsx)(eB,{required:!0,label:"メールアドレス",mailAddress:A,onMailAddressChange:k,mailAddressErrorMessage:T,setMailAddressErrorMessage:w})}),B&&(0,o.jsx)(eD,{content:"結果を見る"})]})]})},eR=()=>{let[e,r]=(0,i.useReducer)(j,h),[n,t]=(0,i.useState)(""),[a,l]=(0,i.useState)(""),[s,d]=(0,i.useState)(""),[c,u]=(0,i.useState)(""),[m,p]=(0,i.useState)(""),[g,C]=(0,i.useState)("");return(0,i.useEffect)(()=>{t(e.postCodeErrorMessage)},[e.postCodeErrorMessage]),(0,i.useEffect)(()=>{l(e.electricCompanyErrorMessage)},[e.electricCompanyErrorMessage]),(0,i.useEffect)(()=>{d(e.planErrorMessage)},[e.planErrorMessage]),(0,i.useEffect)(()=>{u(e.contractCapacityErrorMessage)},[e.contractCapacityErrorMessage]),(0,i.useEffect)(()=>{p(e.electricBillErrorMessage)},[e.electricBillErrorMessage]),(0,i.useEffect)(()=>{C(e.mailAddressErrorMessage)},[e.mailAddressErrorMessage]),(0,o.jsx)(eN,{postCode:e.postCode,postCodeErrorMessage:n,electricCompanySelections:e.electricCompanySelections,selectedElectricCompany:e.selectedElectricCompany,electricCompanyErrorMessage:a,planSelections:e.planSelections,selectedPlan:e.selectedPlan,planErrorMessage:s,contractCapacitySelections:e.contractCapacitySelections,selectedContractCapacity:e.selectedContractCapacity,contractCapacityErrorMessage:c,contractCapacity:e.contractCapacity,electricBill:e.electricBill,electricBillErrorMessage:m,mailAddress:e.mailAddress,mailAddressErrorMessage:g,postCodeCompleted:e.postCodeCompleted,electricCompanyCompleted:e.electricCompanyCompleted,planCompleted:e.planCompleted,contractCapacityCompleted:e.contractCapacityCompleted,electricBillCompleted:e.electricBillCompleted,mailAddressCompleted:e.mailAddressCompleted,handleSubmit:e=>{e.preventDefault()},onPostCodeChange:e=>{r({type:"SET_POST_CODE",payload:e})},onElectricCompanyChange:e=>{r({type:"SET_SELECTED_ELECTRIC_COMPANY",payload:e})},onPlanChange:e=>{r({type:"SET_SELECTED_PLAN",payload:e})},onContractCapacitySelectionChange:e=>{r({type:"SET_SELECTED_CONTRACT_CAPACITY",payload:e})},onContractCapacityValueChange:e=>{r({type:"SET_CONTRACT_CAPACITY",payload:e})},onElectricBillChange:e=>{r({type:"SET_ELECTRIC_BILL",payload:e})},onMailAddressChange:e=>{r({type:"SET_MAIL_ADDRESS",payload:e})},setPostCodeErrorMessage:t,setElectricCompanyErrorMessage:l,setPlanErrorMessage:d,setContractCapacityErrorMessage:u,setElectricBillErrorMessage:p,setMailAddressErrorMessage:C})};function eY(){let e=(0,t._)(["\n  margin-left: auto;\n  margin-right: auto;\n\n  // The following media queries are inspired by the Container class in Tailwind CSS.\n  // They set the maximum width of the container at different viewport sizes.\n  @media (min-width: 640px) {\n    /* sm */\n    max-width: 640px;\n  }\n\n  @media (min-width: 768px) {\n    /* md */\n    max-width: 768px;\n  }\n\n  @media (min-width: 1024px) {\n    /* lg */\n    max-width: 1024px;\n  }\n\n  @media (min-width: 1280px) {\n    /* xl */\n    max-width: 1280px;\n  }\n\n  @media (min-width: 1536px) {\n    /* 2xl */\n    max-width: 1536px;\n  }\n\n  align-items: center;\n  justify-content: center;\n\n  @media (min-width: 640px) {\n    padding-top: 0;\n    padding-bottom: 1.5rem;\n    padding-right: 1.5rem;\n    padding-left: 1.5rem;\n  }\n  @media (min-width: 1024px) {\n    padding-top: 0;\n    padding-bottom: 2rem;\n    padding-right: 2rem;\n    padding-left: 2rem;\n  }\n"]);return eY=function(){return e},e}let eF=a.Z.div(eY());var e$=()=>(0,o.jsx)(eF,{children:(0,o.jsx)(eR,{})})}},function(e){e.O(0,[251,182,432,744],function(){return e(e.s=6095)}),_N_E=e.O()}]);