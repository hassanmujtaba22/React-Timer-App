(this["webpackJsonptimer-app-tdd"]=this["webpackJsonptimer-app-tdd"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),s=n.n(c),i=n(4),r=n.n(i),o=(n(10),n(2));var u=function(t){var e=Math.floor(t/3600),n=Math.floor((t-3600*e)/60),a=t-3600*e-60*n;return[e<10?"0".concat(e):e,n<10?"0".concat(n):n,a<10?"0".concat(a):a]};var l=function(t){var e=t.setTimeInSeconds,n=Object(c.useState)(0),s=Object(o.a)(n,2),i=s[0],r=s[1];return Object(a.jsxs)("div",{className:"buttonContainer",children:[Object(a.jsx)("button",{className:"buttons","data-test":"btn",onClick:function(){var t=setInterval((function(){e((function(t){return t+1}))}),1e3);r(t)},children:"Play"}),Object(a.jsx)("button",{className:"buttons","data-test":"btn",onClick:function(){clearInterval(i)},children:"Stop"}),Object(a.jsx)("button",{className:"buttons","data-test":"btn",onClick:function(){clearInterval(i),e(0)},children:"Reset"})]})};n(11);var b=function(){var t=Object(c.useState)(0),e=Object(o.a)(t,2),n=e[0],s=e[1],i=Object(c.useState)([]),r=Object(o.a)(i,2),b=r[0],j=r[1];return Object(c.useEffect)((function(){var t=u(n);j(t)}),[n]),Object(a.jsxs)("main",{className:"mainContainer","data-test":"mainContainer",children:[Object(a.jsxs)("section",{className:"timerContainer","data-test":"timerContainer",children:[Object(a.jsx)("span",{className:"timer","data-test":"timer",children:b[0]}),":",Object(a.jsx)("span",{className:"timer","data-test":"timer",children:b[1]}),":",Object(a.jsx)("span",{className:"timer","data-test":"timer",children:b[2]})]}),Object(a.jsx)(l,{setTimeInSeconds:s})]})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),s(t),i(t)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),j()}},[[12,1,2]]]);
//# sourceMappingURL=main.2c3e713a.chunk.js.map