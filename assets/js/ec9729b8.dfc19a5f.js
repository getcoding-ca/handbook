"use strict";(self.webpackChunkdocs_raw=self.webpackChunkdocs_raw||[]).push([[849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},l="2. Front-End",i={unversionedId:"Modules/frontend",id:"Modules/frontend",title:"2. Front-End",description:"Recommended stack:",source:"@site/docs/Modules/2-frontend.md",sourceDirName:"Modules",slug:"/Modules/frontend",permalink:"/handbook/Modules/frontend",draft:!1,editUrl:"https://github.com/getcoding-ca/handbook/edit/master/docs/Modules/2-frontend.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1. Intro to Web Dev",permalink:"/handbook/Modules/intro"},next:{title:"3. Back-End",permalink:"/handbook/Modules/backend"}},s={},u=[{value:"Duration",id:"duration",level:2},{value:"Expected Outcomes:",id:"expected-outcomes",level:2},{value:"Topics",id:"topics",level:2},{value:"Avoid:",id:"avoid",level:2},{value:"Projects:",id:"projects",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2-front-end"},"2. Front-End"),(0,a.kt)("p",null,"Recommended stack:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React using Vite"),(0,a.kt)("li",{parentName:"ul"},"TypeScript? Optional based on the student"),(0,a.kt)("li",{parentName:"ul"},"Definitely a UI library like Material-UI, TailwindCSS, or AntDesign"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NO REDUX")," (explained below)")),(0,a.kt)("h2",{id:"duration"},"Duration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Average for past successful students: 16 sessions"),(0,a.kt)("li",{parentName:"ul"},"90th percentile: 23")),(0,a.kt)("h2",{id:"expected-outcomes"},"Expected Outcomes:"),(0,a.kt)("p",null,"At the end of the module, the student:"),(0,a.kt)("p",null,"\u2705 Understands the 3-tier architecture (client/server/db); responsibilities and limitations of each tier\n\u2705 Can create fairly complex front-ends using React.js without help\n\u2705 Is hireable as a junior front-end developer\n\u2705 Has the project deployed and live (Github Pages)"),(0,a.kt)("h2",{id:"topics"},"Topics"),(0,a.kt)("p",null,"Below are the topics that we expect students to know by the end of this module:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Basics: React components, State vs Props, JSX, rendering"),(0,a.kt)("li",{parentName:"ul"},"Class vs Functional"),(0,a.kt)("li",{parentName:"ul"},"Styling:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Inline"),(0,a.kt)("li",{parentName:"ul"},"CSS files"),(0,a.kt)("li",{parentName:"ul"},"styled-components"))),(0,a.kt)("li",{parentName:"ul"},"React lifecycle"),(0,a.kt)("li",{parentName:"ul"},"Hooks: useState, useEffect, useContext"),(0,a.kt)("li",{parentName:"ul"},"Interactions between:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Parent to child"),(0,a.kt)("li",{parentName:"ul"},"Child to parent"),(0,a.kt)("li",{parentName:"ul"},"Independent components"))),(0,a.kt)("li",{parentName:"ul"},"Debugging React:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Chrome devtools"),(0,a.kt)("li",{parentName:"ul"},"Breakpoints"),(0,a.kt)("li",{parentName:"ul"},"Console.log"))),(0,a.kt)("li",{parentName:"ul"},"Organization",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When to separating components"),(0,a.kt)("li",{parentName:"ul"},"How to organize components, files and folders"),(0,a.kt)("li",{parentName:"ul"},"React component hierarchy: Best practices"))),(0,a.kt)("li",{parentName:"ul"},"Stateless components"),(0,a.kt)("li",{parentName:"ul"},"react-router")),(0,a.kt)("h2",{id:"avoid"},"Avoid:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Performance optimization"),(0,a.kt)("li",{parentName:"ul"},"Redux: We have tried redux with 2 students and they both suffered. Both coaches regretted the decision.")),(0,a.kt)("h2",{id:"projects"},"Projects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.chore-bucks.com/"},"Chorebucks, incentiving kids to do chores by Mike Miller")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://djkean.github.io/pricewatcher"},"Pricewatcher, a Runescape exchange price monitoring tool by Dennis Kean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hiba-mohamed.github.io/Reactjs-Nurses-Assignment-Sheet/"},"Nurse Assignment Management by Hiba Mohamed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://soheilnk.github.io/Backgammon/"},"SoSep, 2-player Backgammon game by Soheil Najmabadikia")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ao-demo.vercel.app/"},"OA, a music album production management software by Evan Watton"))))}d.isMDXComponent=!0}}]);