"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5073],{4890:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=s(4848),n=s(8453);const o={id:"destructured-approach",title:"Destructured Approach",description:"Reusing a stylesheet made using NativeFlow utility objects",slug:"/destructured-approach",sidebar_position:3},i=void 0,c={id:"core-concepts/destructured-approach",title:"Destructured Approach",description:"Reusing a stylesheet made using NativeFlow utility objects",source:"@site/docs/core-concepts/destructured-approach.mdx",sourceDirName:"core-concepts",slug:"/destructured-approach",permalink:"/docs/destructured-approach",draft:!1,unlisted:!1,editUrl:"https://github.com/nativeflowteam/documentation/blob/main/docs/core-concepts/destructured-approach.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"destructured-approach",title:"Destructured Approach",description:"Reusing a stylesheet made using NativeFlow utility objects",slug:"/destructured-approach",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Flex vs Grow vs Shrink vs Basis",permalink:"/docs/flex-vs-grow-vs-shrink-vs-basis"},next:{title:"Custom Styles",permalink:"/docs/custom-styles"}},a={},u=[{value:"Why Destructure",id:"why-destructure",level:2},{value:"How-to Destructure",id:"how-to-destructure",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Reusing a stylesheet made using NativeFlow utility objects"}),"\n",(0,r.jsx)("div",{className:"thought-box",children:(0,r.jsxs)(t.p,{children:["Jay I don't wanna make my style property cluttered and use the good'ol ",(0,r.jsx)(t.code,{children:"StyleSheet.create()"}),", is there any way to implement utility-objects in the stylesheet?"]})}),"\n",(0,r.jsx)(t.h2,{id:"why-destructure",children:"Why Destructure"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"More consistency in design systems"}),"\n",(0,r.jsx)(t.li,{children:"Extended reusability (like a lot, really lot)"}),"\n",(0,r.jsx)(t.li,{children:"Aren't these two points good enough make it smoother to use NativeFlow in big codebases?"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-destructure",children:"How-to Destructure"}),"\n",(0,r.jsxs)(t.p,{children:["Javascript provides object destructring through the spread operator (",(0,r.jsx)(t.code,{children:"...someObject"}),"), we can utilize it to implement utility objects in the ",(0,r.jsx)(t.code,{children:"StyleSheet.create()"})," Native function"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="src/screens/LoginPage.js"',children:'import { StyleSheet } from "react-native";\r\nimport { p, m, align, justify } from "nativeflowcss";\r\n\r\n// Creating a custom container\r\nconst container = StyleSheet.create({\r\n  ...p.x_12,\r\n  ...m.y_6,\r\n  ...align.items_center,\r\n  ...justify.center,\r\n});\n'})})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var r=s(6540);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);