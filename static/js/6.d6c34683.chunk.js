(this["webpackJsonpvideo-game-foro"]=this["webpackJsonpvideo-game-foro"]||[]).push([[6],{197:function(e,t,a){"use strict";a.r(t);var n=a(10),o=a(0),i=a.n(o),r=a(9),c=a(14),l=a(153),s=Object(l.a)({root:{background:"linear-gradient(to right, #c9d6ff, #e2e2e2)",padding:"1.5rem"},title:{textTransform:"capitalize","@media (max-width:600px)":{fontSize:"2.5rem"}},post:{fontSize:"1.5rem",margin:"1rem 0"},lastUpdate:{background:"rgba(0,0,0,.5)",color:"white",padding:".2rem",paddingRight:".5rem"}}),d=a(169),p=a(170),u=a(171),m=a(175);t.default=function(){var e=Object(r.f)(),t=Object(o.useContext)(c.a).posts,a=Object(o.useState)(void 0),l=Object(n.a)(a,2),b=l[0],f=l[1],g=Object(o.useState)(""),v=Object(n.a)(g,2),h=v[0],j=v[1],O=Object(o.useState)(""),E=Object(n.a)(O,2),S=E[0],y=E[1],k=Object(o.useState)(""),w=Object(n.a)(k,2),x=w[0],N=w[1];Object(o.useEffect)((function(){f(t.find((function(t){return t._id===e.post})))}),[e.post,b,t]),Object(o.useEffect)((function(){j(null===b||void 0===b?void 0:b.title),y(null===b||void 0===b?void 0:b.content),N(null===b||void 0===b?void 0:b.updatedAt)}),[b]);var z=s();return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{"aria-label":"post",className:z.root,variant:"outlined"},i.a.createElement(p.a,{"aria-label":"content of the post"},i.a.createElement(u.a,{"aria-label":"title of the post",align:"center",className:z.title,variant:"h1"},h),i.a.createElement(m.Spring,{from:{opacity:0},to:{opacity:1}},(function(e){return i.a.createElement("div",{style:e},i.a.createElement(u.a,{"aria-label":"content of the post",className:z.post,variant:"body1",component:"p"},S))})),i.a.createElement(u.a,{"aria-label":"last update of the post",align:"right",className:z.lastUpdate,variant:"body2",component:"p"},"lasted update: ",x))))}}}]);
//# sourceMappingURL=6.d6c34683.chunk.js.map