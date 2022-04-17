"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[217],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(n),h=a,d=g["".concat(p,".").concat(h)]||g[h]||u[h]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7826:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),i=["components"],l={sidebar_position:2},p="Installation",s={unversionedId:"installation",id:"installation",title:"Installation",description:"Install the via npm:",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/graphql-codegen-factories/installation",editUrl:"https://github.com/zhouzi/graphql-codegen-factories/blob/main/docs/docs/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"default",previous:{title:"Introduction",permalink:"/graphql-codegen-factories/"},next:{title:"Configuration",permalink:"/graphql-codegen-factories/configuration"}},c={},u=[],g={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install the via npm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev graphql-codegen-factories\n")),(0,o.kt)("p",null,"Or yarn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add --dev graphql-codegen-factories\n")),(0,o.kt)("p",null,"Then add it to your ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen.yml"),", in the list of plugins:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"overwrite: true\nschema: ./schema.graphql\ngenerates:\n  ./types.ts:\n    plugins:\n      - typescript\n      # highlight-start\n      - graphql-codegen-factories/schema\n      # highlight-end\n")),(0,o.kt)("p",null,"The plugin relies on the types generated by ",(0,o.kt)("a",{parentName:"p",href:"https://www.graphql-code-generator.com/plugins/typescript"},(0,o.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript")),", that's why it's also listed in the example above."),(0,o.kt)("p",null,"If you want to generate factories for operations, you will need to add it as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"overwrite: true\nschema: ./schema.graphql\n# highlight-start\ndocuments: ./**/*.graphql\n# highlight-end\ngenerates:\n  ./types.ts:\n    plugins:\n      - typescript\n      - graphql-codegen-factories/schema\n  # highlight-start\n  ./operations.ts:\n    plugins:\n      - typescript-operations\n      - graphql-codegen-factories/operations\n  # highlight-end\n")),(0,o.kt)("p",null,"In this case you will need to use a plugin that generates the types for operations such as ",(0,o.kt)("a",{parentName:"p",href:"https://www.graphql-code-generator.com/plugins/typescript-operations"},"@graphql-codegen/typescript-operations"),", used in the example above. The plugin is also compatible with ",(0,o.kt)("a",{parentName:"p",href:"https://www.graphql-code-generator.com/plugins/near-operation-file-preset"},"@graphql-codegen/near-operation-file-preset"),"."))}h.isMDXComponent=!0}}]);