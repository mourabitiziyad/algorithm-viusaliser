(this["webpackJsonpalgorithm-visualiser"]=this["webpackJsonpalgorithm-visualiser"]||[]).push([[0],{25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),c=n(16),o=n.n(c),s=n(18),l=(n(25),n(19)),u=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("header",{children:[Object(r.jsx)("a",{style:{fontSize:"20px"},href:"#",children:"Algo Visualiser"}),Object(r.jsxs)("a",{style:{fontSize:"30px"},href:"https://github.com/mourabitiziyad",children:[" ",Object(r.jsx)(l.a,{})]})]})})},i=n(7),b=n.n(i),d=n(8),g=n(10),h=n(34),j=n(35),x=n(36),y=function(){var e=Object(d.a)(b.a.mark((function e(t,n){var r,a,c,o,s,l,u,i,d,g;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(JSON.stringify(t.slice().sort((function(e,t){return e-t})))!==JSON.stringify(t)){e.next=12;break}for(r=0;r<t.length;r++)document.getElementById(r).style.backgroundColor="white";return e.next=4,f(150);case 4:for(a=0;a<t.length;a++)document.getElementById(a).style.backgroundColor="rgba(0,136,169, 1)";return e.next=7,f(150);case 7:for(c=0;c<t.length;c++)document.getElementById(c).style.backgroundColor="white";return e.next=10,f(150);case 10:for(o=0;o<t.length;o++)document.getElementById(o).style.backgroundColor="rgba(0,136,169, 1)";return e.abrupt("return");case 12:s=0;case 13:if(!(s<t.length-1)){e.next=41;break}l=0;case 15:if(!(l<t.length-s-1)){e.next=38;break}return u=document.getElementById(l),i=document.getElementById(l+1),u.style.backgroundColor=i.style.backgroundColor="white",e.next=21,f(n);case 21:if(!(t[l]>t[l+1])){e.next=33;break}return d=t[l],t[l]=t[l+1],t[l+1]=d,u.style.backgroundColor=i.style.backgroundColor="red",e.next=28,f(n);case 28:return g=u.style.height,u.style.height=i.style.height,i.style.height=g,e.next=33,f(n);case 33:u.style.backgroundColor="rgba(0,136,169, 1)",i.style.backgroundColor="rgba(0,136,169, 1)";case 35:l++,e.next=15;break;case 38:s++,e.next=13;break;case 41:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function f(e){return new Promise((function(t){return setTimeout(t,e)}))}var m=function(){var e=Object(d.a)(b.a.mark((function e(t,n){var r,a,c,o,s,l,u,i,d,g,h,j,x;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(JSON.stringify(t.slice().sort((function(e,t){return e-t})))!==JSON.stringify(t)){e.next=12;break}for(r=0;r<t.length;r++)document.getElementById(r).style.backgroundColor="white";return e.next=4,p(150);case 4:for(a=0;a<t.length;a++)document.getElementById(a).style.backgroundColor="rgba(0,136,169, 1)";return e.next=7,p(150);case 7:for(c=0;c<t.length;c++)document.getElementById(c).style.backgroundColor="white";return e.next=10,p(150);case 10:for(o=0;o<t.length;o++)document.getElementById(o).style.backgroundColor="rgba(0,136,169, 1)";return e.abrupt("return");case 12:s=0,l=0;case 14:if(!(l<t.length-1)){e.next=60;break}return s=l,u=document.getElementById(l),i=document.getElementById(s),u.style.backgroundColor="white",i.style.backgroundColor="blue",e.next=22,p(n);case 22:d=l+1;case 23:if(!(d<t.length)){e.next=44;break}return(g=document.getElementById(d)).style.backgroundColor="white",e.next=28,p(n);case 28:if(!(t[d]<t[s])){e.next=38;break}return i.style.backgroundColor=g.style.backgroundColor="red",e.next=32,p(1.5*n);case 32:return s=d,i.style.backgroundColor="rgba(0,136,169, 1)",(i=document.getElementById(s)).style.backgroundColor="blue",e.next=38,p(1.5*n);case 38:return"white"===g.style.backgroundColor&&(g.style.backgroundColor="rgba(0,136,169, 1)"),e.next=41,p(n);case 41:d++,e.next=23;break;case 44:return h=t[s],t[s]=t[l],t[l]=h,j=i.style.height,i.style.height=u.style.height,u.style.height=j,i.style.backgroundColor=u.style.backgroundColor="blue",e.next=53,p(n);case 53:return i.style.backgroundColor="rgba(0,136,169, 1)",u.style.backgroundColor="gray",e.next=57,p(n);case 57:l++,e.next=14;break;case 60:x=0;case 61:if(!(x<t.length)){e.next=68;break}return document.getElementById(x).style.backgroundColor="rgba(0,136,169, 1)",e.next=65,p(20);case 65:x++,e.next=61;break;case 68:console.log("Selection Sort:",t);case 69:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function p(e){return new Promise((function(t){return setTimeout(t,e)}))}var O=function(){var e=Object(a.useState)(50),t=Object(g.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(50),s=Object(g.a)(o,2),l=s[0],u=s[1],i=Object(a.useState)([]),f=Object(g.a)(i,2),p=f[0],O=f[1],k=Object(a.useState)([]),C=Object(g.a)(k,2),w=C[0],v=C[1],S=Object(a.useState)(!1),B=Object(g.a)(S,2),I=B[0],E=B[1],N=Object(a.useState)("Selection Sort"),J=Object(g.a)(N,2),M=(J[0],J[1],{textAlign:"center",marginTop:"10px"}),z=p.map((function(e,t){return Object(r.jsx)("p",{classname:"whole-array",id:t,style:{display:"inline-block",backgroundColor:"rgba(0,136,169, 1)",margin:"1px",padding:"20px 1px",boxSizing:"border-box",height:"".concat(1.3*e,"vh"),width:"".concat(Math.floor(document.getElementById("test").offsetWidth)/(3*n),"px")},children:"\xa0"},t)}));Object(a.useEffect)((function(){v([]);for(var e=0;e<n;e++)w.push((t=1,r=n,Math.floor(Math.random()*(r-t+1)+t)));var t,r;O(w)}),[n]);var F=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,y(p,4*parseInt(l)+1);case 3:E(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,m(p,4*parseInt(l)+1);case 3:E(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{style:M,children:[Object(r.jsx)("p",{children:"Note: Bubble Sort and Selection Sort now both working"}),Object(r.jsx)("br",{}),Object(r.jsxs)(h.a,{children:[Object(r.jsx)("p",{style:{margin:"10px"},children:Object(r.jsxs)(j.a,{for:"range",children:["Select Array Length: ",Math.ceil(n)]})}),Object(r.jsx)(x.a,{disabled:I,style:{width:"40%"},type:"range",name:"range",id:"range",onChange:function(e){e.preventDefault(),c(e.target.value)}})]}),Object(r.jsxs)(h.a,{children:[Object(r.jsx)("p",{style:{margin:"10px"},children:Object(r.jsxs)(j.a,{for:"range",children:["Select Delay (Less is Faster): ",Math.ceil(l),"ms"]})}),Object(r.jsx)(x.a,{disabled:I,style:{width:"40%"},type:"range",name:"speed",id:"speed",onChange:function(e){e.preventDefault(),u(e.target.value)}})]}),I?Object(r.jsx)("a",{className:"cta",onClick:function(){window.location.reload(I),E(!I)},children:Object(r.jsx)("button",{children:"Stop"})}):Object(r.jsx)("a",{className:"cta",onClick:F,children:Object(r.jsx)("button",{children:"Bubble Sort"})}),I?null:Object(r.jsx)("a",{className:"cta",onClick:A,children:Object(r.jsx)("button",{children:"Selection Sort"})})]}),Object(r.jsx)("div",{id:"test",style:M,children:z}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]})},k=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u,{}),Object(r.jsx)("body",{style:{width:"80%",margin:"auto"},children:Object(r.jsx)(O,{})})]})};o.a.render(Object(r.jsx)(s.a,{basename:"/",children:Object(r.jsx)(k,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.5389142d.chunk.js.map