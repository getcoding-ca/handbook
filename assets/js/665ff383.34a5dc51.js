"use strict";(self.webpackChunkdocs_raw=self.webpackChunkdocs_raw||[]).push([[566],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3198:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={},s="5. Automated Testing and CI/CD Pipelines",p={unversionedId:"Modules/testing",id:"Modules/testing",title:"5. Automated Testing and CI/CD Pipelines",description:"Recommended Stack:",source:"@site/docs/Modules/5-testing.md",sourceDirName:"Modules",slug:"/Modules/testing",permalink:"/handbook/Modules/testing",editUrl:"https://github.com/getcoding-ca/handbook/edit/master/docs/Modules/5-testing.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"4. Back-end & Database",permalink:"/handbook/Modules/backend"},next:{title:"Welcome to Get Coding!",permalink:"/handbook/Students/welcome"}},u=[{value:"Expected Outcomes:",id:"expected-outcomes",children:[],level:2},{value:"Topics",id:"topics",children:[],level:2},{value:"Recommended Pipeline Steps",id:"recommended-pipeline-steps",children:[],level:2},{value:"Tips / Common Hiccups",id:"tips--common-hiccups",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"5-automated-testing-and-cicd-pipelines"},"5. Automated Testing and CI/CD Pipelines"),(0,o.kt)("p",null,"Recommended Stack:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Jest"),(0,o.kt)("li",{parentName:"ul"},"Github Actions")),(0,o.kt)("h2",{id:"expected-outcomes"},"Expected Outcomes:"),(0,o.kt)("p",null,"At the end of the module, the student:"),(0,o.kt)("p",null,"\u2705 Understands different types of testing: unit, integration, end-point, end-to-end"),(0,o.kt)("p",null,"\u2705 Has written a few types of tests for their project (we recommend unit and integration for their ease)"),(0,o.kt)("p",null,"\u2705 Can implement tests without help"),(0,o.kt)("p",null,"\u2705 Can create simple pull-request and build pipelines"),(0,o.kt)("h2",{id:"topics"},"Topics"),(0,o.kt)("p",null,"Below are the high-level topics that we expect students to know by the end of this module:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Jest"),(0,o.kt)("li",{parentName:"ul"},"Understanding the different types of tests and where/why use each one: unit, integration, endpoint, end-to-end"),(0,o.kt)("li",{parentName:"ul"},"Testing good practices",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/"},"AAA")),(0,o.kt)("li",{parentName:"ul"},"Clear statements (description, expectation)"),(0,o.kt)("li",{parentName:"ul"},"Atomic"),(0,o.kt)("li",{parentName:"ul"},"Independent"))),(0,o.kt)("li",{parentName:"ul"},'What the heck is CI/CD? What is "DevOps"?'),(0,o.kt)("li",{parentName:"ul"},"Pipelines")),(0,o.kt)("h2",{id:"recommended-pipeline-steps"},"Recommended Pipeline Steps"),(0,o.kt)("p",null,"On Pull Request:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prettier and/or ESLint checks"),(0,o.kt)("li",{parentName:"ul"},"Unit Tests and Integration Tests")),(0,o.kt)("p",null,"On Merge to Main:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/marketplace/actions/beanstalk-deploy"},"Github Action for Elastic Beanstalk")),(0,o.kt)("li",{parentName:"ul"},"Endpoint and End-to-End tests")),(0,o.kt)("h2",{id:"tips--common-hiccups"},"Tips / Common Hiccups"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We recommend only trying unit and integration tests. We have found end-point testing (jest) and end-to-end testing (cypress) difficult due to the amount of set up"),(0,o.kt)("li",{parentName:"ul"},"However, you can create a simple ",(0,o.kt)("a",{parentName:"li",href:"https://testfully.io/blog/api-health-check-monitoring/"},"/health endpoint")," and expect it to return 200 as the simplest form of end-point testing - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/marketplace/actions/url-health-check"},"Github Action for URL Health Check")),(0,o.kt)("li",{parentName:"ul"},'There are also "half-automated" endpoint test tools with nice GUIs, e.g. Postman'),(0,o.kt)("li",{parentName:"ul"},"Remember NOT to commit/push secrets on the pipeline files")))}d.isMDXComponent=!0}}]);