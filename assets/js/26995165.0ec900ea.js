"use strict";(self.webpackChunkdocs_raw=self.webpackChunkdocs_raw||[]).push([[920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?o.createElement(k,r(r({ref:t},d),{},{components:n})):o.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const l={},r="4. Back-end & Database",i={unversionedId:"Modules/backend",id:"Modules/backend",title:"4. Back-end & Database",description:"Recommended Stack:",source:"@site/docs/Modules/4-backend.md",sourceDirName:"Modules",slug:"/Modules/backend",permalink:"/handbook/Modules/backend",draft:!1,editUrl:"https://github.com/getcoding-ca/handbook/edit/master/docs/Modules/4-backend.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3. React.js",permalink:"/handbook/Modules/frontend"},next:{title:"5. Automated Testing and CI/CD Pipelines",permalink:"/handbook/Modules/testing"}},s={},p=[{value:"Expected Outcomes:",id:"expected-outcomes",level:2},{value:"Topics",id:"topics",level:2},{value:"Tips / Common Hiccups",id:"tips--common-hiccups",level:2},{value:"Nice to have:",id:"nice-to-have",level:2},{value:"Things to Avoid",id:"things-to-avoid",level:2},{value:"Deploying",id:"deploying",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"4-back-end--database"},"4. Back-end & Database"),(0,a.kt)("p",null,"Recommended Stack:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Express (deployed to Elastic Beanstalk)"),(0,a.kt)("li",{parentName:"ul"},"MySQL (deployed to Amazon RDS)")),(0,a.kt)("h2",{id:"expected-outcomes"},"Expected Outcomes:"),(0,a.kt)("p",null,"At the end of the module, the student:"),(0,a.kt)("p",null,"\u2705 Is considered hireable as a junior back-end developer"),(0,a.kt)("p",null,"\u2705 Can create fairly complex back-ends using Node.js/Express without help"),(0,a.kt)("p",null,"\u2705 Can design relational databases for common use-cases"),(0,a.kt)("p",null,"\u2705 Has their project deployed in the cloud and understands the role of EB/EC2, RDS and Github Pages"),(0,a.kt)("h2",{id:"topics"},"Topics"),(0,a.kt)("p",null,"Below are the high-level topics that we expect students to know by the end of this module:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"REST API Design"),(0,a.kt)("li",{parentName:"ul"},"Postman"),(0,a.kt)("li",{parentName:"ul"},"Debugging using VSCode"),(0,a.kt)("li",{parentName:"ul"},"SQL/MySQL: insert, select, update, delete, join"),(0,a.kt)("li",{parentName:"ul"},"MySQL Workbench"),(0,a.kt)("li",{parentName:"ul"},"Auth: Hashed Passwords in DB + Sessions"),(0,a.kt)("li",{parentName:"ul"},"Using .env or environment variables for secrets (never publish secrets to github)"),(0,a.kt)("li",{parentName:"ul"},"Basic understanding of the AWS services used in deployment: EB, EC2, RDS, Route53")),(0,a.kt)("h2",{id:"tips--common-hiccups"},"Tips / Common Hiccups"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To save time, you can use the live database instance (AWS RDS) for local development too"),(0,a.kt)("li",{parentName:"ul"},"Avoid ORMs unless you know a good one for Node and SQL. They generally suck and are difficult to set up.")),(0,a.kt)("h2",{id:"nice-to-have"},"Nice to have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Understand how a request goes from a client computer to a server and back: HTTP, TCP, DNS"),(0,a.kt)("li",{parentName:"ul"},"TypeScript: highly recommended if you have a strong student")),(0,a.kt)("h2",{id:"things-to-avoid"},"Things to Avoid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Testing: we have a separate module for that")),(0,a.kt)("h2",{id:"deploying"},"Deploying"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Under the hood, Elastic Beanstalk (EB) is essentially configuring EC2/load balancers/VPC/Route53/... to run the code with minimum input from you. (load balancers may not be configured in free-tier mode)")),(0,a.kt)("p",null,"In the code:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'The main express file should be named "app.js" or "server.js"'),(0,a.kt)("li",{parentName:"ol"},"The code should listen to port 8080"),(0,a.kt)("li",{parentName:"ol"},"Zip all the files in your project, except: ",(0,a.kt)("inlineCode",{parentName:"li"},"node_module"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".env"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".git")," (EB automatically runs npm install and npm start commands for you.)")),(0,a.kt)("p",null,"In AWS:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create AWS Account (needs credit card and will take hours to verify)"),(0,a.kt)("li",{parentName:"ol"},"Go to Billing -> Budget and create a budget/alert"),(0,a.kt)("li",{parentName:"ol"},"Go to Elastic Beanstalk (use the Old Dashboard)"),(0,a.kt)("li",{parentName:"ol"},'Press the "Create Application"'),(0,a.kt)("li",{parentName:"ol"},'When asked between "Sample application" and your own code, choose to upload your own code (the .zip file).'),(0,a.kt)("li",{parentName:"ol"},"The rest of the defaults work fine"),(0,a.kt)("li",{parentName:"ol"},"Wait for the Application and Environment to be created"),(0,a.kt)("li",{parentName:"ol"},"You will see a URL to your back-end")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Elastic Beanstalk Terminology:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},'Application, e.g. "project1", "project2"'),(0,a.kt)("li",{parentName:"ul"},'Environment, e.g. "production", "staging" belonging to an application (If you follow the process above, you will have 1 default environment for your application)'),(0,a.kt)("li",{parentName:"ul"},"Application Versions, the zipped and uploaded code"))),(0,a.kt)("p",null,"Other things you can do:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set Environment Variabes on the server: ",(0,a.kt)("inlineCode",{parentName:"li"},"configuration/software/environment variables")),(0,a.kt)("li",{parentName:"ul"},"Upload new code: Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Application versions"),', upload a new .zip, select the new .zip and choose "Deploy" from Actions menu')))}c.isMDXComponent=!0}}]);