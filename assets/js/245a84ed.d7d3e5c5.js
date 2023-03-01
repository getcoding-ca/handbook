"use strict";(self.webpackChunkdocs_raw=self.webpackChunkdocs_raw||[]).push([[798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},l="3. React.js",i={unversionedId:"Modules/frontend",id:"Modules/frontend",title:"3. React.js",description:"Expected Outcomes:",source:"@site/docs/Modules/3-frontend.md",sourceDirName:"Modules",slug:"/Modules/frontend",permalink:"/handbook/Modules/frontend",draft:!1,editUrl:"https://github.com/getcoding-ca/handbook/edit/master/docs/Modules/3-frontend.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2. Career Transition Preparations",permalink:"/handbook/Modules/career"},next:{title:"4. Back-end & Database",permalink:"/handbook/Modules/backend"}},c={},u=[{value:"Expected Outcomes:",id:"expected-outcomes",level:2},{value:"Topics",id:"topics",level:2},{value:"Nice to have:",id:"nice-to-have",level:2}],p={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"3-reactjs"},"3. React.js"),(0,a.kt)("h2",{id:"expected-outcomes"},"Expected Outcomes:"),(0,a.kt)("p",null,"At the end of the module, the student:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Understands the ",(0,a.kt)("a",{parentName:"li",href:"https://www.codeauthority.com/Blog/Entry/three-tier-architecture"},"3-tier architecture"),", limitations and responsibilities of each tier"),(0,a.kt)("li",{parentName:"ul"},"Can create fairly complex front-ends using React.js without help"),(0,a.kt)("li",{parentName:"ul"},"Is hireable as a junior front-end developer")),(0,a.kt)("h2",{id:"topics"},"Topics"),(0,a.kt)("p",null,"Below are the topics that we expect students to know by the end of this module:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Basics: React components, State vs Props, JSX, rendering"),(0,a.kt)("li",{parentName:"ul"},"Class vs Functional"),(0,a.kt)("li",{parentName:"ul"},"Styling:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Inline"),(0,a.kt)("li",{parentName:"ul"},"CSS files"),(0,a.kt)("li",{parentName:"ul"},"styled-components"))),(0,a.kt)("li",{parentName:"ul"},"React lifecycle"),(0,a.kt)("li",{parentName:"ul"},"Hooks: useState, useEffect, useContext"),(0,a.kt)("li",{parentName:"ul"},"Interactions between:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Parent to child"),(0,a.kt)("li",{parentName:"ul"},"Child to parent"),(0,a.kt)("li",{parentName:"ul"},"Independent components"))),(0,a.kt)("li",{parentName:"ul"},"Debugging React: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Chrome devtools"),(0,a.kt)("li",{parentName:"ul"},"Breakpoints"),(0,a.kt)("li",{parentName:"ul"},"Console.log "))),(0,a.kt)("li",{parentName:"ul"},"Organization",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When to separating components"),(0,a.kt)("li",{parentName:"ul"},"How to organize components, files and folders"),(0,a.kt)("li",{parentName:"ul"},"React component hierarchy: Best practices"))),(0,a.kt)("li",{parentName:"ul"},"Stateless components"),(0,a.kt)("li",{parentName:"ul"},"react-router")),(0,a.kt)("h2",{id:"nice-to-have"},"Nice to have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Performance optimization"),(0,a.kt)("li",{parentName:"ul"},"Redux")))}d.isMDXComponent=!0}}]);