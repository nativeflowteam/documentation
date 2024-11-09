"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2780],{8510:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>f});var o=r(4848),l=r(8453),a=r(5742),d=r(6540);const s={id:"shadow-color",title:"Shadow Color",description:"Set the color of the shadow.",slug:"/shadow-color",sidebar_position:1},i=void 0,c={id:"shadow/shadow-color",title:"Shadow Color",description:"Set the color of the shadow.",source:"@site/docs/shadow/shadow-color.mdx",sourceDirName:"shadow",slug:"/shadow-color",permalink:"/docs/shadow-color",draft:!1,unlisted:!1,editUrl:"https://github.com/nativeflowteam/documentation/blob/main/docs/shadow/shadow-color.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"shadow-color",title:"Shadow Color",description:"Set the color of the shadow.",slug:"/shadow-color",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Shadow",permalink:"/docs/shadow"},next:{title:"Shadow Radius \u2605",permalink:"/docs/shadow-radius"}},t={},f=[{value:"Import",id:"import",level:2},{value:"Properties",id:"properties",level:2},{value:"Custom Shadow Colors",id:"custom-shadow-colors",level:2},{value:"Colors",id:"colors",level:2},{value:"Red Green Blue (RGB)",id:"red-green-blue-rgb",level:3},{value:"Hue Saturation Lightness (HSL)",id:"hue-saturation-lightness-hsl",level:3},{value:"Hue Whiteness Blackness (HWB)",id:"hue-whiteness-blackness-hwb",level:3},{value:"Color ints",id:"color-ints",level:3},{value:"Named Colors",id:"named-colors",level:3}];function _(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",div:"div",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Set the color of the shadow."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["This property will only work on Android API 28 and above. For similar functionality on lower Android APIs, use the ",(0,o.jsx)(n.a,{href:"/docs/elevation",children:"elevation property"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="src/screens/Component.js"',children:'import { shadow } from "nativeflowcss";\n'})}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)("div",{class:"scrollable-box",children:(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Object"}),(0,o.jsx)("th",{children:"Native Properties"}),(0,o.jsx)("th",{children:"Shadow Sphere"})]})}),(0,o.jsx)("tbody",{children:Object.entries(a.A).map((([e,r])=>(0,o.jsx)(d.Fragment,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:`shadow.color_${e}`}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:`{ shadowColor: '${r}' }`})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.div,{style:{width:"15px",height:"15px",margin:"auto",backgroundColor:`${r}`,borderRadius:"50%",boxShadow:`0 0 8px 4px ${r}80`}})})]})},e)))})]})}),"\n",(0,o.jsx)(n.h2,{id:"custom-shadow-colors",children:"Custom Shadow Colors"}),"\n",(0,o.jsxs)(n.p,{children:["Custom properties are usually rendered using ",(0,o.jsx)(n.code,{children:"_(customValue)"})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Object"}),(0,o.jsx)(n.th,{children:"Native Properties"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"shadow.color_(customColor)"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"{ shadowColor: customColor }"})})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"colors",children:"Colors"}),"\n",(0,o.jsx)(n.h3,{id:"red-green-blue-rgb",children:"Red Green Blue (RGB)"}),"\n",(0,o.jsx)(n.p,{children:"React Native supports rgb() and rgba() in both hexadecimal and functional notation:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"'#f0f'"})," (#rgb)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"'#ff00ff'"})," (#rrggbb)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"'#f0ff'"})," (#rgba)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"'#ff00ff00'"})," (#rrggbbaa)"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"'rgb(255, 0, 255)'"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"'rgb(255 0 255)'"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"'rgba(255, 0, 255, 1.0)'"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"'rgba(255 0 255 / 1.0)'"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"hue-saturation-lightness-hsl",children:"Hue Saturation Lightness (HSL)"}),"\n",(0,o.jsx)(n.p,{children:"React Native supports hsl() and hsla() in functional notation:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"'hsl(360, 100%, 100%)'"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"'hsl(360 100% 100%)'"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"'hsla(360, 100%, 100%, 1.0)'"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"'hsla(360 100% 100% / 1.0)'"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"hue-whiteness-blackness-hwb",children:"Hue Whiteness Blackness (HWB)"}),"\n",(0,o.jsx)(n.p,{children:"React Native supports hwb() in functional notation:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"'hwb(0, 0%, 100%)'"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"'hwb(360, 100%, 100%)'"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"'hwb(0 0% 0%)'"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"'hwb(70 50% 0%)'"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"color-ints",children:"Color ints"}),"\n",(0,o.jsx)(n.p,{children:"React Native supports also colors as an int values (in RGB color mode):"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"0xff00ff00"})," (0xrrggbbaa)"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"CAUTION",type:"caution",children:(0,o.jsxs)(n.p,{children:["This action is dangerous\r\nThis might appear similar to the Android Color ints representation but on Android values are stored in SRGB color mode ",(0,o.jsx)(n.code,{children:"(0xaarrggbb)"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"named-colors",children:"Named Colors"}),"\n",(0,o.jsxs)(n.p,{children:["All colors from the ",(0,o.jsx)(n.a,{href:"https://www.w3.org/TR/css-color-3/#svg-color",children:"CSS3/SVG Specs"})," are supported."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"They only support lowercase named colors"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(_,{...e})}):_(e)}},5742:(e,n,r)=>{r.d(n,{A:()=>o});const o={slate_50:"#f8fafc",slate_100:"#f1f5f9",slate_200:"#e2e8f0",slate_300:"#cbd5e1",slate_400:"#94a3b8",slate_500:"#64748b",slate_600:"#475569",slate_700:"#334155",slate_800:"#1e293b",slate_900:"#0f172a",slate_950:"#020617",gray_50:"#f9fafb",gray_100:"#f3f4f6",gray_200:"#e5e7eb",gray_300:"#d1d5db",gray_400:"#9ca3af",gray_500:"#6b7280",gray_600:"#4b5563",gray_700:"#374151",gray_800:"#1f2937",gray_900:"#111827",gray_950:"#030712",zinc_50:"#fafafa",zinc_100:"#f4f4f5",zinc_200:"#e4e4e7",zinc_300:"#d4d4d8",zinc_400:"#a1a1aa",zinc_500:"#71717a",zinc_600:"#52525b",zinc_700:"#3f3f46",zinc_800:"#27272a",zinc_900:"#18181b",zinc_950:"#09090b",neutral_50:"#fafafa",neutral_100:"#f5f5f5",neutral_200:"#e5e5e5",neutral_300:"#d4d4d4",neutral_400:"#a3a3a3",neutral_500:"#737373",neutral_600:"#525252",neutral_700:"#404040",neutral_800:"#262626",neutral_900:"#171717",neutral_950:"#0a0a0a",stone_50:"#fafaf9",stone_100:"#f5f5f4",stone_200:"#e7e5e4",stone_300:"#d6d3d1",stone_400:"#a8a29e",stone_500:"#78716c",stone_600:"#57534e",stone_700:"#44403c",stone_800:"#292524",stone_900:"#1c1917",stone_950:"#0c0a09",red_50:"#fef2f2",red_100:"#fee2e2",red_200:"#fecaca",red_300:"#fca5a5",red_400:"#f87171",red_500:"#ef4444",red_600:"#dc2626",red_700:"#b91c1c",red_800:"#991b1b",red_900:"#7f1d1d",red_950:"#450a0a",orange_50:"#fff7ed",orange_100:"#ffedd5",orange_200:"#fed7aa",orange_300:"#fdba74",orange_400:"#fb923c",orange_500:"#f97316",orange_600:"#ea580c",orange_700:"#c2410c",orange_800:"#9a3412",orange_900:"#7c2d12",orange_950:"#431407",amber_50:"#fffbeb",amber_100:"#fef3c7",amber_200:"#fde68a",amber_300:"#fcd34d",amber_400:"#fbbf24",amber_500:"#f59e0b",amber_600:"#d97706",amber_700:"#b45309",amber_800:"#92400e",amber_900:"#78350f",amber_950:"#451a03",yellow_50:"#fefce8",yellow_100:"#fef9c3",yellow_200:"#fef08a",yellow_300:"#fde047",yellow_400:"#facc15",yellow_500:"#eab308",yellow_600:"#ca8a04",yellow_700:"#a16207",yellow_800:"#854d0e",yellow_900:"#713f12",yellow_950:"#422006",lime_50:"#f7fee7",lime_100:"#ecfccb",lime_200:"#d9f99d",lime_300:"#bef264",lime_400:"#a3e635",lime_500:"#84cc16",lime_600:"#65a30d",lime_700:"#4d7c0f",lime_800:"#3f6212",lime_900:"#365314",lime_950:"#1a2e05",green_50:"#f0fdf4",green_100:"#dcfce7",green_200:"#bbf7d0",green_300:"#86efac",green_400:"#4ade80",green_500:"#22c55e",green_600:"#16a34a",green_700:"#15803d",green_800:"#166534",green_900:"#14532d",green_950:"#052e16",emerald_50:"#ecfdf5",emerald_100:"#d1fae5",emerald_200:"#a7f3d0",emerald_300:"#6ee7b7",emerald_400:"#34d399",emerald_500:"#10b981",emerald_600:"#059669",emerald_700:"#047857",emerald_800:"#065f46",emerald_900:"#064e3b",emerald_950:"#022c22",teal_50:"#f0fdfa",teal_100:"#ccfbf1",teal_200:"#99f6e4",teal_300:"#5eead4",teal_400:"#2dd4bf",teal_500:"#14b8a6",teal_600:"#0d9488",teal_700:"#0f766e",teal_800:"#115e59",teal_900:"#134e4a",teal_950:"#042f2e",cyan_50:"#ecfeff",cyan_100:"#cffafe",cyan_200:"#a5f3fc",cyan_300:"#67e8f9",cyan_400:"#22d3ee",cyan_500:"#06b6d4",cyan_600:"#0891b2",cyan_700:"#0e7490",cyan_800:"#155e75",cyan_900:"#164e63",cyan_950:"#083344",sky_50:"#f0f9ff",sky_100:"#e0f2fe",sky_200:"#bae6fd",sky_300:"#7dd3fc",sky_400:"#38bdf8",sky_500:"#0ea5e9",sky_600:"#0284c7",sky_700:"#0369a1",sky_800:"#075985",sky_900:"#0c4a6e",sky_950:"#082f49",blue_50:"#eff6ff",blue_100:"#dbeafe",blue_200:"#bfdbfe",blue_300:"#93c5fd",blue_400:"#60a5fa",blue_500:"#3b82f6",blue_600:"#2563eb",blue_700:"#1d4ed8",blue_800:"#1e40af",blue_900:"#1e3a8a",blue_950:"#172554",indigo_50:"#eef2ff",indigo_100:"#e0e7ff",indigo_200:"#c7d2fe",indigo_300:"#a5b4fc",indigo_400:"#818cf8",indigo_500:"#6366f1",indigo_600:"#4f46e5",indigo_700:"#4338ca",indigo_800:"#3730a3",indigo_900:"#312e81",indigo_950:"#1e1b4b",violet_50:"#f5f3ff",violet_100:"#ede9fe",violet_200:"#ddd6fe",violet_300:"#c4b5fd",violet_400:"#a78bfa",violet_500:"#8b5cf6",violet_600:"#7c3aed",violet_700:"#6d28d9",violet_800:"#5b21b6",violet_900:"#4c1d95",violet_950:"#2e1065",purple_50:"#faf5ff",purple_100:"#f3e8ff",purple_200:"#e9d5ff",purple_300:"#d8b4fe",purple_400:"#c084fc",purple_500:"#a855f7",purple_600:"#9333ea",purple_700:"#7e22ce",purple_800:"#6b21a8",purple_900:"#581c87",purple_950:"#3b0764",fuchsia_50:"#fdf4ff",fuchsia_100:"#fae8ff",fuchsia_200:"#f5d0fe",fuchsia_300:"#f0abfc",fuchsia_400:"#e879f9",fuchsia_500:"#d946ef",fuchsia_600:"#c026d3",fuchsia_700:"#a21caf",fuchsia_800:"#86198f",fuchsia_900:"#701a75",fuchsia_950:"#4a044e",pink_50:"#fdf2f8",pink_100:"#fce7f3",pink_200:"#fbcfe8",pink_300:"#f9a8d4",pink_400:"#f472b6",pink_500:"#ec4899",pink_600:"#db2777",pink_700:"#be185d",pink_800:"#9d174d",pink_900:"#831843",pink_950:"#500724",rose_50:"#fff1f2",rose_100:"#ffe4e6",rose_200:"#fecdd3",rose_300:"#fda4af",rose_400:"#fb7185",rose_500:"#f43f5e",rose_600:"#e11d48",rose_700:"#be123c",rose_800:"#9f1239",rose_900:"#881337",rose_950:"#4c0519"}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>s});var o=r(6540);const l={},a=o.createContext(l);function d(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);