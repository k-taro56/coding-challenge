(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4798:function(e,n,r){Promise.resolve().then(r.bind(r,1615))},1615:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return eG}});var t=r(1827),o=r(1030),a=r(3030),i=r(8121);let l="東京電力",s="関西電力",d="その他",c={1:[l,d],5:[s,d]},u="従量電灯 A",m="従量電灯 B",p="従量電灯 C",g=[m,p],C=[u,m],h=["10A","15A","20A","30A","40A","50A","60A"],f={area:"",postCode:"",postCodeErrorMessage:"",electricCompanySelections:[],selectedElectricCompany:"",electricCompanyErrorMessage:"",planSelections:[],selectedPlan:"",planErrorMessage:"",contractCapacitySelections:[],selectedContractCapacity:"",contractCapacityErrorMessage:"",contractCapacity:void 0,electricBill:void 0,electricBillErrorMessage:"",mailAddress:"",mailAddressErrorMessage:"",postCodeCompleted:!1,electricCompanyCompleted:!1,planCompleted:!1,contractCapacityCompleted:!1,electricBillCompleted:!1,mailAddressCompleted:!1},b=(e,n)=>((e.selectedElectricCompany=f.selectedElectricCompany,n)?(e.area=n,e.electricCompanySelections=c[n]):(e.area=f.area,e.electricCompanySelections=f.electricCompanySelections),e),E=e=>{let n=e[0];return"1"===n?b({...f,postCode:e,postCodeErrorMessage:"",postCodeCompleted:!0},"1"):"5"===n?b({...f,postCode:e,postCodeErrorMessage:"",postCodeCompleted:!0},"5"):b({...f,postCode:e,postCodeErrorMessage:"サービスエリア対象外です"},void 0)},x=(e,n)=>{let r=E(e.postCode);return n===l?(r.planSelections=g,r.electricCompanyCompleted=!0):n===s?(r.planSelections=C,r.electricCompanyCompleted=!0):n===d&&(r.electricCompanyErrorMessage="シミュレーション対象外です"),r},y=(e,n)=>{let r=x(e,e.selectedElectricCompany);return n===u?(r.selectedElectricCompany===s&&(r.contractCapacityCompleted=!0),r.planCompleted=!0):n===m?(r.selectedElectricCompany===l&&(r.contractCapacitySelections=h),r.planCompleted=!0):n===p&&(r.planCompleted=!0),r},_=(e,n)=>{let r=y(e,e.selectedPlan);return r.selectedContractCapacity=n,r},M=(e,n)=>{let r=y(e,e.selectedPlan);return r.contractCapacity=n,r},v=(e,n)=>{let r=y(e,e.selectedPlan);return r.electricBill=n,r},S=(e,n)=>{let r=y(e,e.selectedPlan);return r.mailAddress=n,r},j=(e,n)=>{switch(n.type){case"SET_AREA":return b(e,n.payload);case"SET_POST_CODE":return E(n.payload);case"SET_SELECTED_ELECTRIC_COMPANY":return x(e,n.payload);case"SET_SELECTED_PLAN":return y(e,n.payload);case"SET_SELECTED_CONTRACT_CAPACITY":return _(e,n.payload);case"SET_CONTRACT_CAPACITY":return M(e,n.payload);case"SET_ELECTRIC_BILL":return v(e,n.payload);case"SET_MAIL_ADDRESS":return S(e,n.payload);default:return e}};function A(){let e=(0,t._)(["\n  text-align: center;\n  margin: 1.5rem;\n"]);return A=function(){return e},e}function k(){let e=(0,t._)(["\n  font-size: 1.5rem;\n"]);return k=function(){return e},e}let T=a.Z.header(A()),w=a.Z.h1(k()),P=e=>{let{text:n}=e;return n.split("\\n").map((e,n)=>(0,o.jsxs)("span",{children:[e,(0,o.jsx)("br",{})]},n))};var V=e=>{let{title:n,subTitle:r}=e;return(0,o.jsxs)(T,{children:[(0,o.jsx)(w,{children:(0,o.jsx)(P,{text:n})}),(0,o.jsx)("div",{children:(0,o.jsx)(P,{text:r})})]})};let Z="#ed9b38",L="#ddd",q="#935d1d",I="#555";function B(){let e=(0,t._)(["\n  padding-top: 1rem;\n  padding-bottom: 0;\n  margin-bottom: 1rem;\n  background-color: ",";\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n  }\n"]);return B=function(){return e},e}function z(){let e=(0,t._)(["\n  background-color: ",";\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n  }\n"]);return z=function(){return e},e}function O(){let e=(0,t._)(["\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-left: 0.25rem;\n  padding: 0.5rem;\n  background-color: ",";\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n  }\n"]);return O=function(){return e},e}function D(){let e=(0,t._)(["\n  padding: 0.75rem;\n"]);return D=function(){return e},e}let N="white",R="#1a202c",Y=a.Z.div(B(),N,R),F=a.Z.div(z(),Z,q),$=a.Z.div(O(),N,R),K=a.Z.div(D());var G=e=>{let{label:n,isVisible:r,children:t}=e;return(0,o.jsxs)(Y,{hidden:!(null==r||r),children:[(0,o.jsx)(F,{children:(0,o.jsx)($,{children:n})}),(0,o.jsx)(K,{children:t})]})};let H="\n  &:focus {\n    outline: none;\n    box-shadow: inset 0 0 0.25rem ".concat(Z,";\n  }\n  @media (prefers-color-scheme: dark) {\n    &:focus {\n      box-shadow: inset 0 0 0.5rem ").concat(q,";\n    }\n  }\n");function J(){let e=(0,t._)(["\n  width: 100%;\n  border: 0.25rem solid ",";\n  border-radius: 0.25rem;\n  padding: 0.75rem;\n  @media (prefers-color-scheme: dark) {\n    border: 0.25rem solid ",";\n    background-color: #222;\n    color: #ddd;\n  }\n  ","\n"]);return J=function(){return e},e}let Q=a.Z.input(J(),L,I,H);function U(){let e=(0,t._)(["\n  margin-bottom: 2rem;\n"]);return U=function(){return e},e}function W(){let e=(0,t._)(["\n  font-size: 0.75rem;\n  margin-right: 0.5rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  letter-spacing: 0.5rem;\n  color: white;\n  background-color: #e66059;\n  @media (prefers-color-scheme: dark) {\n    color: #ddd;\n    background-color: #982d27;\n  }\n"]);return W=function(){return e},e}function X(){let e=(0,t._)(["\n  font-weight: bold;\n  display: flex;\n  flex-direction: column;\n\n  & > span {\n    margin-bottom: 0.5rem;\n  }\n"]);return X=function(){return e},e}function ee(){let e=(0,t._)(["\n  font-size: 0.75rem;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  padding: 0.75rem;\n  color: white;\n  background-color: #e66059;\n  border-radius: 0.25rem;\n  display: flex;\n  align-items: center;\n  @media (prefers-color-scheme: dark) {\n    color: #ddd;\n    background-color: #982d27;\n  }\n"]);return ee=function(){return e},e}function en(){let e=(0,t._)(["\n  font-size: 1rem;\n  margin-right: 0.5rem;\n  font-family: var(--font-material-symbols);\n  font-variation-settings: 'FILL' 1;\n"]);return en=function(){return e},e}let er=a.Z.div(U()),et=a.Z.span(W()),eo=a.Z.label(X()),ea=a.Z.div(ee()),ei=a.Z.span(en());var el=e=>{let{required:n,label:r,isVisible:t,errorMessage:a,children:i}=e;return(0,o.jsxs)(er,{hidden:!(null==t||t),children:[(0,o.jsxs)(eo,{children:[(0,o.jsxs)("span",{children:[n&&(0,o.jsx)("span",{children:(0,o.jsx)(et,{children:"必須"})}),r]}),i]}),0!==a.length&&(0,o.jsxs)(ea,{children:[(0,o.jsx)(ei,{children:"warning"}),a]})]})},es=e=>{let{required:n,label:r,isVisible:t,inputValue:a,errorMessage:i,onInputValueChange:l}=e;return(0,o.jsx)(el,{required:n,label:r,isVisible:t,errorMessage:i,children:(0,o.jsx)(Q,{type:"text",pattern:"\\d{3} \\d{4}",required:n,placeholder:"130 0012",value:a,onChange:e=>{l(e.target.value)}})})};let ed=e=>e.length<=3?e:e.slice(0,3)+" "+e.slice(3),ec=e=>/^\d{7}$/.test(e);var eu=e=>{let{required:n,label:r,isVisible:t,postCode:a,onPostCodeChange:l,postCodeErrorMessage:s,setPostCodeErrorMessage:d}=e,[c,u]=(0,i.useState)(ed((null==a?void 0:a.toString())||""));return(0,o.jsx)(es,{required:n,label:r,isVisible:t,inputValue:c,errorMessage:s,onInputValueChange:e=>{let n=e.replace(/[^0-9]/g,"");7<n.length&&(n=n.slice(0,7)),u(ed(n)),ec(n)?(d(""),l(n)):(d("郵便番号を正しく入力してください"),l(""))}})};function em(){let e=(0,t._)(["\n  position: relative;\n  &::before {\n    content: 'expand_more';\n    font-family: var(--font-material-symbols);\n    font-size: 1.75rem;\n    color: ",";\n    position: absolute;\n    left: 0.5rem;\n    top: 50%;\n    transform: translateY(-50%);\n    pointer-events: none;\n    @media (prefers-color-scheme: dark) {\n      color: ",";\n    }\n  }\n"]);return em=function(){return e},e}function ep(){let e=(0,t._)(["\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 2.25rem;\n  padding-right: 0.75rem;\n  width: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  @media (prefers-color-scheme: dark) {\n    background-color: #222;\n    color: #ddd;\n  }\n  ","\n"]);return ep=function(){return e},e}function eg(){let e=(0,t._)(["\n  border-top: 0.25rem solid ",";\n  border-left: 0.25rem solid ",";\n  border-right: 0.25rem solid ",";\n  border-bottom: 0;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  @media (prefers-color-scheme: dark) {\n    border-top: 0.25rem solid ",";\n    border-left: 0.25rem solid ",";\n    border-right: 0.25rem solid ",";\n    border-bottom: 0;\n  }\n"]);return eg=function(){return e},e}function eC(){let e=(0,t._)(["\n  border: 0.25rem solid ",";\n  border-radius: 0.25rem;\n  @media (prefers-color-scheme: dark) {\n    border: 0.25rem solid ",";\n  }\n"]);return eC=function(){return e},e}function eh(){let e=(0,t._)(["\n  border-top: "," dotted 0.1rem;\n  @media (prefers-color-scheme: dark) {\n    border-top: "," dotted 0.1rem;\n  }\n"]);return eh=function(){return e},e}function ef(){let e=(0,t._)(["\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: normal;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  background-color: ",";\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n    color: #ddd;\n  }\n"]);return ef=function(){return e},e}let eb=a.Z.div(em(),Z,q),eE=a.Z.select(ep(),H),ex=(0,a.Z)(eE)(eg(),L,L,L,I,I,I),ey=(0,a.Z)(eE)(eC(),L,I),e_=a.Z.div(eh(),L,I),eM=a.Z.div(ef(),L,I),ev=e=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("option",{value:"",disabled:!0,children:"選択してください"}),e.map(e=>(0,o.jsx)("option",{value:e,children:e},e))]});var eS=e=>{let{label:n,required:r,isVisible:t,selections:a,selected:i,descriptions:l,errorMessage:s,onSelectionChange:d}=e,c=e=>{d(e.target.value)};return(0,o.jsx)(el,{label:n,required:r,isVisible:t,errorMessage:s,children:(0,o.jsx)(eb,{children:l?(0,o.jsxs)("div",{children:[(0,o.jsx)(ex,{required:r,value:i,onChange:c,children:ev(a)}),(0,o.jsx)(e_,{}),(0,o.jsx)(eM,{children:l[a.indexOf(i)]})]}):(0,o.jsx)(ey,{required:r,value:i,onChange:c,children:ev(a)})})})},ej=e=>{let{required:n,label:r,isVisible:t,selections:a,selected:i,descriptions:l,onSelectionChange:s,errorMessage:d,setErrorMessage:c}=e;return(0,o.jsx)(eS,{required:n,label:r,isVisible:t,selections:a,selected:i,descriptions:l,errorMessage:d,onSelectionChange:e=>{""===e?c("選択してください"):(c(""),s(e))}})};function eA(){let e=(0,t._)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return eA=function(){return e},e}function ek(){let e=(0,t._)(["\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"]);return ek=function(){return e},e}function eT(){let e=(0,t._)(["\n  font-weight: normal;\n  margin-left: 0.5rem;\n"]);return eT=function(){return e},e}let ew=a.Z.div(eA()),eP=(0,a.Z)(Q)(ek()),eV=a.Z.span(eT());var eZ=e=>{let{required:n,label:r,isVisible:t,placeholder:a,inputValue:i,unit:l,min:s,max:d,errorMessage:c,onInputValueChange:u}=e;return(0,o.jsx)(el,{required:n,label:r,isVisible:t,errorMessage:c,children:(0,o.jsxs)(ew,{children:[(0,o.jsx)(eP,{type:"number",required:n,placeholder:a,value:i,min:s,max:d,onChange:e=>{u(e.target.value)}}),(0,o.jsx)(eV,{children:l})]})})},eL=e=>{let{required:n,label:r,isVisible:t,placeholder:a,value:l,unit:s,min:d,max:c,onValueChange:u,errorMessage:m,setErrorMessage:p}=e,[g,C]=(0,i.useState)((null==l?void 0:l.toString())||"");return(0,o.jsx)(eZ,{required:n,label:r,isVisible:t,placeholder:a,inputValue:g,unit:s,min:d,max:c,errorMessage:m,onInputValueChange:e=>{if(C(e),""===e){p("入力してください"),u(void 0);return}let n=Number(e);d&&n<d?(p("".concat(d," ").concat(s,"以上を入力してください")),u(void 0)):c&&c<n?(p("".concat(c," ").concat(s,"以下を入力してください")),u(void 0)):(p(""),u(n))}})};function eq(){let e=(0,t._)(["\n  border: 0.25rem solid #ddd;\n  border-radius: 0.25rem;\n  padding: 0.75rem;\n  &:focus {\n    outline: none;\n    box-shadow: inset 0 0 0.25rem ",";\n  }\n  @media (prefers-color-scheme: dark) {\n    border: 0.25rem solid #555;\n    background-color: #222;\n    color: #ddd;\n    &:focus {\n      box-shadow: inset 0 0 0.5rem ",";\n    }\n  }\n"]);return eq=function(){return e},e}let eI=a.Z.input(eq(),Z,q);var eB=e=>{let{required:n,label:r,isVisible:t,inputValue:a,errorMessage:i,onInputValueChange:l}=e;return(0,o.jsx)(el,{required:n,label:r,isVisible:t,errorMessage:i,children:(0,o.jsx)(eI,{type:"email",required:n,placeholder:"mail@example.com",value:a,onChange:e=>{l(e.target.value)}})})};let ez=e=>/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e);var eO=e=>{let{required:n,label:r,isVisible:t,mailAddress:a,onMailAddressChange:l,mailAddressErrorMessage:s,setMailAddressErrorMessage:d}=e,[c,u]=(0,i.useState)(a);return(0,o.jsx)(eB,{required:n,label:r,isVisible:t,inputValue:c,onInputValueChange:e=>{u(e),ez(e)?(d(""),l(e)):(d("メールアドレスを正しく入力してください"),l(""))},errorMessage:s})};function eD(){let e=(0,t._)(["\n  position: relative;\n  font-size: 1rem;\n  font-style: bold;\n  margin: 0.75rem;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  width: calc(100% - 1.5rem);\n  background-color: #007bff;\n  color: white;\n  &:hover {\n    background-color: #0056b3;\n  }\n  &:active {\n    background-color: #004085;\n  }\n  @media (prefers-color-scheme: dark) {\n    color: var(--color);\n    background-color: #0f4a8a;\n    &:hover {\n      background-color: #0056b3;\n    }\n    &:active {\n      background-color: #082748;\n    }\n  }\n  &::after {\n    position: absolute;\n    right: 1.25rem;\n    font-size: 1.25rem;\n    font-family: var(--font-material-symbols);\n    content: 'expand_circle_right';\n    font-variation-settings: 'FILL' 1;\n  }\n"]);return eD=function(){return e},e}let eN=a.Z.button(eD());var eR=e=>{let{content:n}=e;return(0,o.jsx)(eN,{type:"submit",children:n})},eY=e=>{let{postCode:n,onPostCodeChange:r,postCodeErrorMessage:t,setPostCodeErrorMessage:a,electricCompanySelections:i,selectedElectricCompany:l,onElectricCompanyChange:s,electricCompanyErrorMessage:d,setElectricCompanyErrorMessage:c,planSelections:u,selectedPlan:m,onPlanChange:p,planErrorMessage:g,setPlanErrorMessage:C,contractCapacitySelections:h,selectedContractCapacity:f,onContractCapacitySelectionChange:b,contractCapacityErrorMessage:E,setContractCapacityErrorMessage:x,contractCapacity:y,onContractCapacityValueChange:_,electricBill:M,onElectricBillChange:v,electricBillErrorMessage:S,setElectricBillErrorMessage:j,mailAddress:A,onMailAddressChange:k,mailAddressErrorMessage:T,setMailAddressErrorMessage:w,postCodeCompleted:P,electricCompanyCompleted:Z,planCompleted:L,contractCapacityCompleted:q,electricBillCompleted:I,mailAddressCompleted:B,handleSubmit:z}=e;return(0,o.jsxs)("div",{children:[(0,o.jsx)(V,{title:"電気代から\\nかんたんシミュレーション",subTitle:"検針票を用意しなくても OK\\nいくらおトクになるのか今すぐわかります！"}),(0,o.jsxs)("form",{onSubmit:z,children:[(0,o.jsx)(G,{label:"郵便番号をご入力ください",children:(0,o.jsx)(eu,{required:!0,label:"電気を使用する場所の郵便番号",postCode:n,onPostCodeChange:r,postCodeErrorMessage:t,setPostCodeErrorMessage:a})}),(0,o.jsxs)(G,{label:"電気のご使用状況について教えてください",isVisible:P,children:[(0,o.jsx)(ej,{label:"電力会社",required:!0,selections:i,selected:l,onSelectionChange:s,errorMessage:d,setErrorMessage:c}),(0,o.jsx)(ej,{label:"プラン",required:!0,isVisible:Z,selections:u,selected:m,onSelectionChange:p,errorMessage:g,setErrorMessage:C}),(0,o.jsx)(ej,{label:"契約容量",required:0!==h.length,isVisible:L&&0!==h.length,selections:h,selected:f,onSelectionChange:b,errorMessage:E,setErrorMessage:x}),(0,o.jsx)(eL,{label:"契約容量",required:L&&0===h.length,isVisible:L&&0===h.length,placeholder:"24",value:y,unit:"kVA",min:6,max:49,onValueChange:_,errorMessage:E,setErrorMessage:x})]}),(0,o.jsx)(G,{label:"現在の電気の使用状況について教えてください",isVisible:q,children:(0,o.jsx)(eL,{required:!0,label:"先月の電気代は？",placeholder:"5000",value:M,unit:"円",min:1e3,onValueChange:v,errorMessage:S,setErrorMessage:j})}),(0,o.jsx)(G,{label:"メールアドレスをご入力ください",isVisible:I,children:(0,o.jsx)(eO,{required:!0,label:"メールアドレス",mailAddress:A,onMailAddressChange:k,mailAddressErrorMessage:T,setMailAddressErrorMessage:w})}),B&&(0,o.jsx)(eR,{content:"結果を見る"})]})]})},eF=()=>{let[e,n]=(0,i.useReducer)(j,f),[r,t]=(0,i.useState)(""),[a,l]=(0,i.useState)(""),[s,d]=(0,i.useState)(""),[c,u]=(0,i.useState)(""),[m,p]=(0,i.useState)(""),[g,C]=(0,i.useState)("");return(0,i.useEffect)(()=>{t(e.postCodeErrorMessage)},[e.postCodeErrorMessage]),(0,i.useEffect)(()=>{l(e.electricCompanyErrorMessage)},[e.electricCompanyErrorMessage]),(0,i.useEffect)(()=>{d(e.planErrorMessage)},[e.planErrorMessage]),(0,i.useEffect)(()=>{u(e.contractCapacityErrorMessage)},[e.contractCapacityErrorMessage]),(0,i.useEffect)(()=>{p(e.electricBillErrorMessage)},[e.electricBillErrorMessage]),(0,i.useEffect)(()=>{C(e.mailAddressErrorMessage)},[e.mailAddressErrorMessage]),(0,o.jsx)(eY,{postCode:e.postCode,postCodeErrorMessage:r,electricCompanySelections:e.electricCompanySelections,selectedElectricCompany:e.selectedElectricCompany,electricCompanyErrorMessage:a,planSelections:e.planSelections,selectedPlan:e.selectedPlan,planErrorMessage:s,contractCapacitySelections:e.contractCapacitySelections,selectedContractCapacity:e.selectedContractCapacity,contractCapacityErrorMessage:c,contractCapacity:e.contractCapacity,electricBill:e.electricBill,electricBillErrorMessage:m,mailAddress:e.mailAddress,mailAddressErrorMessage:g,postCodeCompleted:e.postCodeCompleted,electricCompanyCompleted:e.electricCompanyCompleted,planCompleted:e.planCompleted,contractCapacityCompleted:e.contractCapacityCompleted,electricBillCompleted:e.electricBillCompleted,mailAddressCompleted:e.mailAddressCompleted,handleSubmit:e=>{e.preventDefault()},onPostCodeChange:e=>{n({type:"SET_POST_CODE",payload:e})},onElectricCompanyChange:e=>{n({type:"SET_SELECTED_ELECTRIC_COMPANY",payload:e})},onPlanChange:e=>{n({type:"SET_SELECTED_PLAN",payload:e})},onContractCapacitySelectionChange:e=>{n({type:"SET_SELECTED_CONTRACT_CAPACITY",payload:e})},onContractCapacityValueChange:e=>{n({type:"SET_CONTRACT_CAPACITY",payload:e})},onElectricBillChange:e=>{n({type:"SET_ELECTRIC_BILL",payload:e})},onMailAddressChange:e=>{n({type:"SET_MAIL_ADDRESS",payload:e})},setPostCodeErrorMessage:t,setElectricCompanyErrorMessage:l,setPlanErrorMessage:d,setContractCapacityErrorMessage:u,setElectricBillErrorMessage:p,setMailAddressErrorMessage:C})};function e$(){let e=(0,t._)(["\n  margin-left: auto;\n  margin-right: auto;\n\n  // The following media queries are inspired by the Container class in Tailwind CSS.\n  // They set the maximum width of the container at different viewport sizes.\n  @media (min-width: 640px) {\n    /* sm */\n    max-width: 640px;\n  }\n\n  @media (min-width: 768px) {\n    /* md */\n    max-width: 768px;\n  }\n\n  @media (min-width: 1024px) {\n    /* lg */\n    max-width: 1024px;\n  }\n\n  @media (min-width: 1280px) {\n    /* xl */\n    max-width: 1280px;\n  }\n\n  @media (min-width: 1536px) {\n    /* 2xl */\n    max-width: 1536px;\n  }\n\n  align-items: center;\n  justify-content: center;\n\n  @media (min-width: 640px) {\n    padding-top: 0;\n    padding-bottom: 1.5rem;\n    padding-right: 1.5rem;\n    padding-left: 1.5rem;\n  }\n  @media (min-width: 1024px) {\n    padding-top: 0;\n    padding-bottom: 2rem;\n    padding-right: 2rem;\n    padding-left: 2rem;\n  }\n"]);return e$=function(){return e},e}let eK=a.Z.div(e$());var eG=()=>(0,o.jsx)(eK,{children:(0,o.jsx)(eF,{})})}},function(e){e.O(0,[111,246,875,744],function(){return e(e.s=4798)}),_N_E=e.O()}]);