"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[694],{6647:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>x,toc:()=>c});var l=i(4848),n=i(8453),d=i(5643);const t={id:"flex-vs-grow-vs-shrink-vs-basis",title:"Flex vs Grow vs Shrink vs Basis",description:"Control how elements expand to fill available space.",slug:"/flex-vs-grow-vs-shrink-vs-basis",sidebar_position:2},o=void 0,x={id:"core-concepts/flex-vs-grow-vs-shrink-vs-basis",title:"Flex vs Grow vs Shrink vs Basis",description:"Control how elements expand to fill available space.",source:"@site/docs/core-concepts/flex-vs-grow-vs-shrink-vs-basis.mdx",sourceDirName:"core-concepts",slug:"/flex-vs-grow-vs-shrink-vs-basis",permalink:"/docs/flex-vs-grow-vs-shrink-vs-basis",draft:!1,unlisted:!1,editUrl:"https://github.com/nativeflowteam/documentation/blob/main/docs/core-concepts/flex-vs-grow-vs-shrink-vs-basis.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"flex-vs-grow-vs-shrink-vs-basis",title:"Flex vs Grow vs Shrink vs Basis",description:"Control how elements expand to fill available space.",slug:"/flex-vs-grow-vs-shrink-vs-basis",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Utility-First Fundamentals",permalink:"/docs/fundamentals"},next:{title:"Destructured Approach",permalink:"/docs/destructured-approach"}},r={},c=[{value:"Example code",id:"example-code",level:2},{value:"Extended Preview",id:"extended-preview",level:2},{value:"<code>flex: 0</code> (default)",id:"flex-0-default",level:2},{value:"<code>flex: 0</code>",id:"flex-0",level:3},{value:"<code>flex: 0, flexBasis: {{px}}</code>",id:"flex-0-flexbasis-px",level:3},{value:"<code>flex: 0, flexGrow: 1</code>",id:"flex-0-flexgrow-1",level:3},{value:"<code>flex: 0, flexShrink: 1</code>",id:"flex-0-flexshrink-1",level:3},{value:"<code>flex: 0, flexGrow: 1, flexBasis: {{px}}</code>",id:"flex-0-flexgrow-1-flexbasis-px",level:3},{value:"<code>flex: 0, flexShrink: 1, flexBasis: {{px}}</code>",id:"flex-0-flexshrink-1-flexbasis-px",level:3},{value:"<code>flex: 0, height: {{px}}</code>",id:"flex-0-height-px",level:3},{value:"<code>flex: 1</code>",id:"flex-1",level:2},{value:"<code>flex: 1</code>",id:"flex-1-1",level:3},{value:"<code>flex: 1, flexBasis: {{px}}</code>",id:"flex-1-flexbasis-px",level:3},{value:"<code>flex: 1, flexGrow: 1</code>",id:"flex-1-flexgrow-1",level:3},{value:"flex: 1, flexShrink: 1",id:"flex-1-flexshrink-1",level:3},{value:"<code>flex: 1, flexGrow: 1, flexBasis: {{px}}</code>",id:"flex-1-flexgrow-1-flexbasis-px",level:3},{value:"<code>flex: 1, flexShrink: 1, flexBasis: {{px}}</code>",id:"flex-1-flexshrink-1-flexbasis-px",level:3},{value:"<code>flex: 1, height: {{px}}</code>",id:"flex-1-height-px",level:3},{value:"Here are my observations:",id:"here-are-my-observations",level:2}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.p,{children:"A comprehensive guide how elements expand to fill available space with various flex properties in React Native."}),"\n",(0,l.jsx)(s.h2,{id:"example-code",children:"Example code"}),"\n",(0,l.jsx)(d.A,{id:"@mathdebate09/flex-vs-grow-vs-shrink-vs-basis"}),"\n",(0,l.jsx)(s.h2,{id:"extended-preview",children:"Extended Preview"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{alt:"flex comparison",src:i(9693).A+"",width:"1348",height:"704"})}),"\n",(0,l.jsxs)(s.h2,{id:"flex-0-default",children:[(0,l.jsx)(s.code,{children:"flex: 0"})," (default)"]}),"\n",(0,l.jsx)(s.h3,{id:"flex-0",children:(0,l.jsx)(s.code,{children:"flex: 0"})}),"\n",(0,l.jsxs)(s.p,{children:["Element takes the size of contents. According to the ",(0,l.jsx)(s.a,{href:"https://facebook.github.io/react-native/docs/layout-props.html#flexgrow",children:"documentation"})," it should be sized by setting ",(0,l.jsx)(s.code,{children:"width"})," and ",(0,l.jsx)(s.code,{children:"height"})," props but it seems to fit to contents if those aren't set."]}),"\n",(0,l.jsx)(s.h3,{id:"flex-0-flexbasis-px",children:(0,l.jsx)(s.code,{children:"flex: 0, flexBasis: {{px}}"})}),"\n",(0,l.jsxs)(s.p,{children:["Element takes the size given by ",(0,l.jsx)(s.code,{children:"flexBasis"})]}),"\n",(0,l.jsx)(s.h3,{id:"flex-0-flexgrow-1",children:(0,l.jsx)(s.code,{children:"flex: 0, flexGrow: 1"})}),"\n",(0,l.jsxs)(s.p,{children:["With ",(0,l.jsx)(s.code,{children:"flex: 0"})," and ",(0,l.jsx)(s.code,{children:"flexGrow: 1;"})," it's the same as adding the size of the contents (in the example above it's a ) to the size of an element that's set to ",(0,l.jsx)(s.code,{children:"flex: 1"}),". It's similar to ",(0,l.jsx)(s.code,{children:"flex: 1, flexBasis: 10"})," except instead of adding a number of pixels you're adding the size of the content."]}),"\n",(0,l.jsx)(s.h3,{id:"flex-0-flexshrink-1",children:(0,l.jsx)(s.code,{children:"flex: 0, flexShrink: 1"})}),"\n",(0,l.jsxs)(s.p,{children:["With ",(0,l.jsx)(s.code,{children:"flex: 0"})," and ",(0,l.jsx)(s.code,{children:"flexShrink: 1"}),", the element seems to take the size of the content, in other words it's the same as just ",(0,l.jsx)(s.code,{children:"flex: 0"}),". I'll bet there are situations where it would be bigger than the content but I haven't see that yet."]}),"\n",(0,l.jsx)(s.h3,{id:"flex-0-flexgrow-1-flexbasis-px",children:(0,l.jsx)(s.code,{children:"flex: 0, flexGrow: 1, flexBasis: {{px}}"})}),"\n",(0,l.jsxs)(s.p,{children:["This is the same as ",(0,l.jsx)(s.code,{children:"flex: 0, flexGrow: 1"})," except instead of adding the content size to a ",(0,l.jsx)(s.code,{children:"flex: 1"})," element it adds the given number of pixels."]}),"\n",(0,l.jsx)(s.h3,{id:"flex-0-flexshrink-1-flexbasis-px",children:(0,l.jsx)(s.code,{children:"flex: 0, flexShrink: 1, flexBasis: {{px}}"})}),"\n",(0,l.jsxs)(s.p,{children:["This is the same as ",(0,l.jsx)(s.code,{children:"flex: 0, flexBasis: {{px}}"}),"."]}),"\n",(0,l.jsx)(s.h3,{id:"flex-0-height-px",children:(0,l.jsx)(s.code,{children:"flex: 0, height: {{px}}"})}),"\n",(0,l.jsxs)(s.p,{children:["With ",(0,l.jsx)(s.code,{children:"flex: 0"}),", ",(0,l.jsx)(s.code,{children:"height"})," is treated just like ",(0,l.jsx)(s.code,{children:"flexBasis"}),". If there is both a ",(0,l.jsx)(s.code,{children:"height"})," and ",(0,l.jsx)(s.code,{children:"flexBasis"})," are set, ",(0,l.jsx)(s.code,{children:"height"})," is ignored."]}),"\n",(0,l.jsx)(s.h2,{id:"flex-1",children:(0,l.jsx)(s.code,{children:"flex: 1"})}),"\n",(0,l.jsx)(s.h3,{id:"flex-1-1",children:(0,l.jsx)(s.code,{children:"flex: 1"})}),"\n",(0,l.jsx)(s.p,{children:"Element takes available space. See Layout Props documentation for more details"}),"\n",(0,l.jsx)(s.h3,{id:"flex-1-flexbasis-px",children:(0,l.jsx)(s.code,{children:"flex: 1, flexBasis: {{px}}"})}),"\n",(0,l.jsxs)(s.p,{children:["With ",(0,l.jsx)(s.code,{children:"flex: 1 and flexBasis: {{px}};"})," the value of ",(0,l.jsx)(s.code,{children:"flexBasis"})," is added to the element's size. In other words, it's like taking a ",(0,l.jsx)(s.code,{children:"flex: 1"})," element and adding on the number of pixels set by ",(0,l.jsx)(s.code,{children:"flexBasis"}),". So if a flex: 1 element is ",(0,l.jsx)(s.code,{children:"50px"}),", and you add ",(0,l.jsx)(s.code,{children:"flexBasis: 20"})," the element will now be ",(0,l.jsx)(s.code,{children:"70px"}),"."]}),"\n",(0,l.jsx)(s.h3,{id:"flex-1-flexgrow-1",children:(0,l.jsx)(s.code,{children:"flex: 1, flexGrow: 1"})}),"\n",(0,l.jsx)(s.p,{children:"ignored"}),"\n",(0,l.jsx)(s.h3,{id:"flex-1-flexshrink-1",children:"flex: 1, flexShrink: 1"}),"\n",(0,l.jsx)(s.p,{children:"ignored"}),"\n",(0,l.jsx)(s.h3,{id:"flex-1-flexgrow-1-flexbasis-px",children:(0,l.jsx)(s.code,{children:"flex: 1, flexGrow: 1, flexBasis: {{px}}"})}),"\n",(0,l.jsxs)(s.p,{children:["This is the same as ",(0,l.jsx)(s.code,{children:"flex: 1, flexBasis: {{px}}"})," since ",(0,l.jsx)(s.code,{children:"flexGrow"})," is ignored."]}),"\n",(0,l.jsx)(s.h3,{id:"flex-1-flexshrink-1-flexbasis-px",children:(0,l.jsx)(s.code,{children:"flex: 1, flexShrink: 1, flexBasis: {{px}}"})}),"\n",(0,l.jsxs)(s.p,{children:["This is the same as ",(0,l.jsx)(s.code,{children:"flex: 1, flexBasis: {{px}}"})," since ",(0,l.jsx)(s.code,{children:"flexShrink"})," is ignored."]}),"\n",(0,l.jsx)(s.h3,{id:"flex-1-height-px",children:(0,l.jsx)(s.code,{children:"flex: 1, height: {{px}}"})}),"\n",(0,l.jsxs)(s.p,{children:["With ",(0,l.jsx)(s.code,{children:"flex: 1"}),", ",(0,l.jsx)(s.code,{children:"height"})," is ignored. Use ",(0,l.jsx)(s.code,{children:"flexBasis"})," instead."]}),"\n",(0,l.jsx)(s.h2,{id:"here-are-my-observations",children:"Here are my observations:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Trouble Shooting Tip"}),": Make sure the parent view(s) are giving the children room to grow/shrink. Notice the ",(0,l.jsx)(s.code,{children:"flex: 1"})," on the parent view, without it, all the children don't display as you'd expect."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Trouble Shooting Tip"}),": Don't use Hot Reloading when testing these values, it can display elements incorrectly after it's reloaded a few times. I recommend enabling Live Reload or using ",(0,l.jsx)("kbd",{children:"command"}),"/",(0,l.jsx)("kbd",{children:"ctrl"})," + ",(0,l.jsx)("kbd",{children:"r"})," (a lot)."]}),"\n",(0,l.jsxs)(s.li,{children:["The default flex value is ",(0,l.jsx)(s.code,{children:"flex: 0"}),". If you don't add a flex style value it defaults to ",(0,l.jsx)(s.code,{children:"0"}),"."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Trouble Shooting Tip"}),": if you're trying to figure out why something isn't displaying like you think it should, start with the (most) parent element and make sure it's giving enough space to it's children to do what they need to do. In other words, try setting it to ",(0,l.jsx)(s.code,{children:"flex:1"})," and see if that helps, then go to the next child and repeat."]}),"\n",(0,l.jsxs)(s.li,{children:["It seems like width is always considered with ",(0,l.jsx)(s.code,{children:'flexDirection: "column"'})," no matter the other flex props. The same applies for height with ",(0,l.jsx)(s.code,{children:'flexDirection: "row"'}),".\r\nAfter running these test, in general I would use ",(0,l.jsx)(s.code,{children:"flexBasis"})," over ",(0,l.jsx)(s.code,{children:"height"})," since ",(0,l.jsx)(s.code,{children:"flexBasis"})," trumps ",(0,l.jsx)(s.code,{children:"height"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsxs)(s.p,{children:["Reference: ",(0,l.jsx)(s.a,{href:"https://stackoverflow.com/questions/43143258/flex-vs-flexgrow-vs-flexshrink-vs-flexbasis-in-react-native",children:"StackOverflow Post"})]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},5643:(e,s,i)=>{i.d(s,{A:()=>d});var l=i(6540),n=i(4848);const d=e=>{let{id:s,platform:i="web",preview:d="true",theme:t="dark"}=e;return(0,l.useEffect)((()=>{const e="snack-embed-script";if(document.getElementById(e))window.ExpoSnack&&window.ExpoSnack.initialize();else{const s=document.createElement("script");s.id=e,s.src="https://snack.expo.dev/embed.js",s.async=!0,document.body.appendChild(s)}}),[]),(0,n.jsx)("div",{"data-snack-id":s,"data-snack-platform":i,"data-snack-preview":d,"data-snack-theme":t,"data-snack-loading":"lazy",style:{overflow:"hidden",background:"#0C0D0E",border:"2px solid #323234",borderRadius:"4px",height:"505px",width:"100%"}})}},9693:(e,s,i)=>{i.d(s,{A:()=>l});const l=i.p+"assets/images/flex-comparison-68ed0895c23fb4dd6e64cdf6e40621fa.png"},8453:(e,s,i)=>{i.d(s,{R:()=>t,x:()=>o});var l=i(6540);const n={},d=l.createContext(n);function t(e){const s=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),l.createElement(d.Provider,{value:s},e.children)}}}]);