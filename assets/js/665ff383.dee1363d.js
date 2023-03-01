"use strict";(self.webpackChunkdocs_raw=self.webpackChunkdocs_raw||[]).push([[566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={},o="5. Automated Testing and CI/CD Pipelines",l={unversionedId:"Modules/testing",id:"Modules/testing",title:"5. Automated Testing and CI/CD Pipelines",description:"Recommended Stack:",source:"@site/docs/Modules/5-testing.md",sourceDirName:"Modules",slug:"/Modules/testing",permalink:"/handbook/Modules/testing",draft:!1,editUrl:"https://github.com/getcoding-ca/handbook/edit/master/docs/Modules/5-testing.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"4. Back-end & Database",permalink:"/handbook/Modules/backend"},next:{title:"Check-Ins",permalink:"/handbook/Modules/checkins"}},s={},p=[{value:"Expected Outcomes:",id:"expected-outcomes",level:2},{value:"Topics",id:"topics",level:2},{value:"Recommended Pipeline Steps",id:"recommended-pipeline-steps",level:2},{value:"Tips / Common Hiccups",id:"tips--common-hiccups",level:2},{value:"Nice to Have",id:"nice-to-have",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"5-automated-testing-and-cicd-pipelines"},"5. Automated Testing and CI/CD Pipelines"),(0,r.kt)("p",null,"Recommended Stack:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jest"),(0,r.kt)("li",{parentName:"ul"},"Github Actions")),(0,r.kt)("h2",{id:"expected-outcomes"},"Expected Outcomes:"),(0,r.kt)("p",null,"At the end of the module, the student:"),(0,r.kt)("p",null,"\u2705 Understands different types of testing: unit, integration, end-point, end-to-end"),(0,r.kt)("p",null,"\u2705 Has written a few types of tests for their project (we recommend unit and integration for their ease)"),(0,r.kt)("p",null,"\u2705 Can implement tests without help"),(0,r.kt)("p",null,"\u2705 Can create simple pull-request and build pipelines"),(0,r.kt)("h2",{id:"topics"},"Topics"),(0,r.kt)("p",null,"Below are the high-level topics that we expect students to know by the end of this module:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jest"),(0,r.kt)("li",{parentName:"ul"},"Understanding the different types of tests and where/why use each one: unit, integration, endpoint, end-to-end"),(0,r.kt)("li",{parentName:"ul"},"Testing good practices",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/"},"AAA")),(0,r.kt)("li",{parentName:"ul"},"Clear statements (description, expectation)"),(0,r.kt)("li",{parentName:"ul"},"Atomic"),(0,r.kt)("li",{parentName:"ul"},"Independent"))),(0,r.kt)("li",{parentName:"ul"},'What the heck is CI/CD? What is "DevOps"?'),(0,r.kt)("li",{parentName:"ul"},"Pipelines")),(0,r.kt)("h2",{id:"recommended-pipeline-steps"},"Recommended Pipeline Steps"),(0,r.kt)("p",null,"On Pull Request:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prettier and/or ESLint checks"),(0,r.kt)("li",{parentName:"ul"},"Unit Tests and Integration Tests")),(0,r.kt)("p",null,"On Merge to Main:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploy - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/marketplace/actions/beanstalk-deploy"},"Github Action for Elastic Beanstalk")),(0,r.kt)("li",{parentName:"ul"},"Endpoint and End-to-End tests")),(0,r.kt)("h2",{id:"tips--common-hiccups"},"Tips / Common Hiccups"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We recommend only trying unit and integration tests. We have found end-point testing (jest) and end-to-end testing (cypress) difficult due to the amount of set up"),(0,r.kt)("li",{parentName:"ul"},"However, you can create a simple ",(0,r.kt)("a",{parentName:"li",href:"https://testfully.io/blog/api-health-check-monitoring/"},"/health endpoint")," and expect it to return 200 as the simplest form of end-point testing - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/marketplace/actions/url-health-check"},"Github Action for URL Health Check")),(0,r.kt)("li",{parentName:"ul"},'There are also "half-automated" endpoint test tools with nice GUIs, e.g. Postman'),(0,r.kt)("li",{parentName:"ul"},"Remember NOT to commit/push secrets on the pipeline files")),(0,r.kt)("h2",{id:"nice-to-have"},"Nice to Have"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TDD, BDD")))}d.isMDXComponent=!0}}]);