(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8b04":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return b}));var a=n("q1tI"),r=n.n(a),l=n("L6Je"),i=n("hYuR"),m=n("wcCm"),c=(n("f3/d"),n("vOnD")),o=n("Hsm8"),u=(n("91GP"),n("E4Ak")),d=(n("0mN4"),n("ciIH")),s=n.n(d),g=c.a.a.withConfig({displayName:"Item__StyledItem",componentId:"sc-8y1isr-0"})(["cursor:pointer;text-align:center;img{border:1px solid lightgrey;margin:0;}"]),f=function(e){var t=e.image,n=e.title,a=e.onClick;return r.a.createElement(g,{role:"button",onClick:a},r.a.createElement(s.a,{fixed:t.thumb.fixed,alt:n}),r.a.createElement("p",{style:{margin:0}},n))},p=c.a.div.withConfig({displayName:"Grid__StyledGrid",componentId:"toulcx-0"})(["margin:2rem 0;display:grid;grid-gap:1rem;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));align-items:center;justify-content:center;"]),h=function(e){var t=e.items,n=Object(a.useState)(-1),l=n[0],i=n[1];return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null,t.map((function(e,t){return r.a.createElement(f,Object.assign({key:t,onClick:function(){i(t)}},e))}))),r.a.createElement(u.b,null,l>=0&&r.a.createElement(u.a,{onClose:function(){i(-1)}},r.a.createElement(u.c,{currentIndex:l,views:t.map((function(e){return{src:e.image.sharp.fluid.src}}))}))))},E=c.a.div.withConfig({displayName:"Article__StyledArticle",componentId:"d09zxf-0"})(["padding:1rem 0;&:first-child{padding:0 0 1rem;}border-bottom:1px solid rgba(0,0,0,0.1);&:last-child{border-bottom:0px;}a{color:rgba(0,0,0,0.8);}h2{margin-bottom:0;}p{margin-top:2rem;}"]),y=function(e){var t=e.frontmatter,n=e.html;return r.a.createElement(E,null,t.url?r.a.createElement(o.a,{href:t.url},r.a.createElement("h2",null,t.title)):r.a.createElement("h2",null,t.title),t.gallery&&r.a.createElement(r.a.Fragment,null,"Galería:"," ",t.gallery.website?r.a.createElement(o.a,{href:t.gallery.website},t.gallery.name):r.a.createElement(r.a.Fragment,null,t.gallery.name)),n&&r.a.createElement("p",{dangerouslySetInnerHTML:{__html:n}}),r.a.createElement(h,{items:t.images}))},b=(t.default=function(e){var t=e.data.allFile.edges;return r.a.createElement(l.a,null,r.a.createElement(i.a,{title:"Prensa y exposiciones"}),r.a.createElement(m.a,null,t.map((function(e,t){return r.a.createElement(y,{key:t,frontmatter:e.node.childMarkdownRemark.frontmatter,html:e.node.childMarkdownRemark.html})}))))},"3389512909")},Hsm8:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){var t=e.href,n=e.children,a=e.onClick;return r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",onClick:a},n)}}}]);
//# sourceMappingURL=component---src-pages-press-js-0babdd8c11443e487c21.js.map