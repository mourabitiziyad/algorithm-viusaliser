(this["webpackJsonpalgorithm-visualiser"]=this["webpackJsonpalgorithm-visualiser"]||[]).push([[0],{25:function(e,t,n){},27:function(e,t){},33:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n(16),s=n.n(a),i=n(18),o=(n(25),n(19)),l=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("header",{children:[Object(r.jsx)("a",{style:{fontSize:"20px"},href:"#",children:"Algo Visualiser"}),Object(r.jsxs)("a",{style:{fontSize:"30px"},href:"https://github.com/mourabitiziyad",children:[" ",Object(r.jsx)(o.a,{})]})]})})},b=n(9),u=n.n(b),j=n(10),d=n(8),h=n(35),x=n(36),g=n(37),O=function(){var e=Object(j.a)(u.a.mark((function e(t,n){var r,c,a,s,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(JSON.stringify(t.slice().sort((function(e,t){return e-t})))!==JSON.stringify(t)){e.next=2;break}return e.abrupt("return");case 2:r=0;case 3:if(!(r<t.length-1)){e.next=31;break}c=0;case 5:if(!(c<t.length-r-1)){e.next=28;break}return a=document.getElementById(c),s=document.getElementById(c+1),a.style.backgroundColor=s.style.backgroundColor="white",e.next=11,f(n);case 11:if(!(t[c]>t[c+1])){e.next=23;break}return i=t[c],t[c]=t[c+1],t[c+1]=i,a.style.backgroundColor=s.style.backgroundColor="red",e.next=18,f(n);case 18:return o=a.style.height,a.style.height=s.style.height,s.style.height=o,e.next=23,f(n);case 23:a.style.backgroundColor="rgba(0,136,169, 1)",s.style.backgroundColor="rgba(0,136,169, 1)";case 25:c++,e.next=5;break;case 28:r++,e.next=3;break;case 31:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function f(e){return new Promise((function(t){return setTimeout(t,e)}))}n(27);var p=function(){var e=Object(c.useState)(50),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(50),i=Object(d.a)(s,2),o=i[0],l=i[1],b=Object(c.useState)([]),f=Object(d.a)(b,2),p=f[0],y=f[1],m=Object(c.useState)([]),k=Object(d.a)(m,2),v=k[0],S=k[1],w=Object(c.useState)(!1),C=Object(d.a)(w,2),z=C[0],B=C[1],E=Object(c.useState)("Selection Sort"),I=Object(d.a)(E,2),M=I[0],N=I[1],F={textAlign:"center",marginTop:"10px"},J=p.map((function(e,t){return Object(r.jsx)("p",{id:t,style:{display:"inline-block",backgroundColor:"rgba(0,136,169, 1)",margin:"1px",padding:"20px 1px",boxSizing:"border-box",height:"".concat(1.3*e,"vh"),width:"".concat(Math.floor(document.getElementById("test").offsetWidth)/(3*n),"px")},children:"\xa0"},t)}));Object(c.useEffect)((function(){S([]);for(var e=0;e<n;e++)v.push((t=1,r=n,Math.floor(Math.random()*(r-t+1)+t)));var t,r;y(v)}),[n]);var A=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),e.next=3,O(p,4*parseInt(o)+1);case 3:B(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{style:F,children:[Object(r.jsxs)(h.a,{children:[Object(r.jsx)("p",{style:{margin:"10px"},children:Object(r.jsxs)(x.a,{for:"range",children:["Select Array Length: ",Math.ceil(n)]})}),Object(r.jsx)(g.a,{disabled:z,style:{width:"40%"},type:"range",name:"range",id:"range",onChange:function(e){e.preventDefault(),a(e.target.value)}})]}),Object(r.jsxs)(h.a,{children:[Object(r.jsx)("p",{style:{margin:"10px"},children:Object(r.jsxs)(x.a,{for:"range",children:["Select Delay (Less is Faster): ",Math.ceil(o),"ms"]})}),Object(r.jsx)(g.a,{disabled:z,style:{width:"40%"},type:"range",name:"speed",id:"speed",onChange:function(e){e.preventDefault(),l(e.target.value)}})]}),z?Object(r.jsx)("a",{className:"cta",onClick:function(){window.location.reload(z),B(!z)},children:Object(r.jsx)("button",{children:"Stop"})}):Object(r.jsx)("a",{className:"cta",onClick:A,children:Object(r.jsx)("button",{children:"Bubble Sort"})}),z?null:Object(r.jsx)("a",{className:"cta",onClick:function(){return N("malk zrban")},children:Object(r.jsx)("button",{disabled:z,children:M})})]}),Object(r.jsx)("div",{id:"test",style:F,children:J}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]})},y=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)("body",{style:{width:"80%",margin:"auto"},children:Object(r.jsx)(p,{})})]})};s.a.render(Object(r.jsx)(i.a,{basename:"/",children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.71ed471e.chunk.js.map