"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9629],{5067:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>m,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>h,toc:()=>o});var s=n(4848),d=n(8453),i=n(6540),t=n(4460);const c={id:"margin",title:"Margin",description:"Spacing outside element's border.",slug:"/margin",sidebar_position:2},l=void 0,h={id:"spacing/margin",title:"Margin",description:"Spacing outside element's border.",source:"@site/docs/spacing/margin.mdx",sourceDirName:"spacing",slug:"/margin",permalink:"/docs/margin",draft:!1,unlisted:!1,editUrl:"https://github.com/nativeflowteam/documentation/blob/main/docs/spacing/margin.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"margin",title:"Margin",description:"Spacing outside element's border.",slug:"/margin",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Padding",permalink:"/docs/padding"},next:{title:"Typography",permalink:"/docs/typography"}},m={},o=[{value:"Import",id:"import",level:2},{value:"Properties",id:"properties",level:2},{value:"Custom Margins",id:"custom-margins",level:2}];function x(e){const r={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Spacing outside element's border."}),"\n",(0,s.jsx)(r.h2,{id:"import",children:"Import"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",metastring:'title="src/screens/Component.js"',children:'import { w } from "nativeflowcss";\n'})}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)("div",{className:"scrollable-box",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Object"}),(0,s.jsx)("th",{children:"Native Properties"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"m.m_px"}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"{ margin: 1 }"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"m.mx_px"}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"{ marginLeft: 1, marginRight: 1 }"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"m.my_px"}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"{ marginTop: 1, marginBottom: 1 }"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"m.mt_px"}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"{ marginTop: 1 }"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"m.mb_px"}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"{ marginBottom: 1 }"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"m.mr_px"}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"{ marginRight: 1 }"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"m.ml_px"}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"{ marginLeft: 1 }"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"m.ms_px"}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"{ marginStart: 1 }"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"m.me_px"}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"{ marginEnd: 1 }"})})]}),Object.entries(t.A).map((([e,n])=>(0,s.jsxs)(i.Fragment,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.m_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ margin: ${n} }`})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.neg_m_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ margin: -${n} }`})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.mx_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ marginLeft: ${n}, marginRight: ${n} }`})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.neg_mx_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ marginLeft: -${n}, marginRight: -${n} }`})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.my_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ marginTop: ${n}, marginBottom: ${n} }`})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.neg_my_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ marginTop: -${n}, marginBottom: -${n} }`})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.mt_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ marginTop: ${n} }`})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.neg_mt_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ marginTop: -${n} }`})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.mb_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ marginBottom: ${n} }`})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.neg_mb_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ marginBottom: -${n} }`})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.mr_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ marginRight: ${n} }`})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.neg_mr_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ marginRight: -${n} }`})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.ml_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ marginLeft: ${n} }`})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.neg_ml_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ marginLeft: -${n} }`})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.ms_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ marginStart: ${n} }`})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.neg_ms_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ marginStart: -${n} }`})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.me_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ marginEnd: ${n} }`})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:`m.neg_me_${e}`}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:`{ marginEnd: -${n} }`})})]})]},e)))]})]})}),"\n",(0,s.jsx)(r.h2,{id:"custom-margins",children:"Custom Margins"}),"\n",(0,s.jsxs)(r.p,{children:["Custom properties are usually rendered using ",(0,s.jsx)(r.code,{children:"_(customValue)"})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["Margin in React native only supports the default ",(0,s.jsx)(r.code,{children:"unitless"})," values (",(0,s.jsx)("s",{children:"auto"}),", ",(0,s.jsx)("s",{children:"fit-content"}),", ",(0,s.jsx)("s",{children:"max-content"}),", ",(0,s.jsx)("s",{children:"full"}),")\r\nTo use custom negative margins, pass the mas numbers, no specific keys required"]}),"\n"]}),"\n",(0,s.jsx)("div",{className:"scrollable-box",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Object"}),(0,s.jsx)(r.th,{children:"Native Properties"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"m.m_(customValue)"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"{ margin: customValue }"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"m.m_(customValue)"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"{ margin: customValue }"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"m.mx_(customValue)"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"{ marginLeft: customValue, marginRight: customValue }"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"m.my_(customValue)"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"{ marginTop: customValue, marginBottom: customValue }"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"m.mt_(customValue)"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"{ marginTop: customValue }"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"m.mb_(customValue)"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"{ marginBottom: customValue }"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"m.mr_(customValue)"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"{ marginRight: customValue }"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"m.ml_(customValue)"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"{ marginLeft: customValue }"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"m.ms_(customValue)"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"{ marginStart: customValue }"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"m.me_(customValue)"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"{ marginEnd: customValue }"})})]})]})]})})]})}function j(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},4460:(e,r,n)=>{n.d(r,{A:()=>s});const s={0:0,1:4,2:8,3:12,4:16,5:20,6:24,7:28,8:32,9:36,10:40,11:44,12:48,14:56,16:64,20:80,24:96,28:112,32:128,36:144,40:160,44:176,48:192,52:208,56:224,60:240,64:256,72:288,80:320,96:384}},8453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>c});var s=n(6540);const d={},i=s.createContext(d);function t(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);