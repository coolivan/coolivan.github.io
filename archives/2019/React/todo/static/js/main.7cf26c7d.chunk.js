(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(4),o=n.n(l),r=n(2),i=n(1);n(11);var u=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),l=n[0],o=n[1],u=e.list,d=e.setList;return c.a.createElement("div",{className:"todo-header"},c.a.createElement("div",{className:"todo-title"},"todo list"),c.a.createElement("div",null,c.a.createElement("input",{type:"text",value:l,placeholder:"What needs to be done?",onChange:function(e){o(e.target.value)},onKeyDown:function(e){13===e.keyCode&&l&&(d([].concat(Object(r.a)(u),[{id:Date.now(),val:l,completed:!1}])),o(""))}})))};var d=function(e){var t=e.list,n=e.clear,a=t.filter(function(e){return e.completed}).length,l=t.filter(function(e){return!e.completed}).length;return c.a.createElement("div",{className:"todo-footer"},c.a.createElement("div",{style:{display:t.length?"block":"none"}},c.a.createElement("span",null,l," left"),c.a.createElement("span",{className:"clear",onClick:function(){n()}},"clear ",a," completed")))};function s(e){var t=e.item,n=e.changeCompleted,l=e.remove,o=e.checkEvery,r=e.edit,u=Object(a.useState)(!1),d=Object(i.a)(u,2),s=d[0],m=d[1],f=Object(a.useRef)(null);return Object(a.useEffect)(function(){s?f.current.focus():""===t.val.trim()&&m(!0)},[s,t]),c.a.createElement("li",{className:t.completed?"done":""},c.a.createElement("div",{className:"view",style:{display:s?"none":"block"}},c.a.createElement("input",{type:"checkbox",checked:t.completed,onChange:function(e){n(t.id,e.target.checked),o()}}),c.a.createElement("label",{onDoubleClick:function(e){m(!0)}},t.val),c.a.createElement("span",{onClick:function(){l(t.id)}},"x")),c.a.createElement("div",{style:{display:s?"block":"none"}},c.a.createElement("input",{type:"text",value:t.val,ref:f,onChange:function(e){r(t.id,e.target.value)},onBlur:function(){m(!1)},onKeyDown:function(e){13===e.keyCode&&e.target.blur()}})))}var m=function(e){var t=e.list,n=e.changeCompleted;function a(){return t.every(function(e){return!0===e.completed})}return c.a.createElement("div",{className:"todo-inner",style:{display:t.length?"block":"none"}},c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",onChange:function(e){t.map(function(t){return n(t.id,e.target.checked)})},checked:a()}),c.a.createElement("small",null,"Mark all as complete")),c.a.createElement("ul",null,t.map(function(t){return c.a.createElement(s,Object.assign({key:t.id,item:t},e,{checkEvery:a}))})))};var f=function(){var e=Object(a.useState)([{id:1,val:"test",completed:!0}]),t=Object(i.a)(e,2),n=t[0],l=t[1];return console.log(n),c.a.createElement("div",{className:"todo-wrap"},c.a.createElement(u,{list:n,setList:l}),c.a.createElement(m,{list:n,changeCompleted:function(e,t){n.forEach(function(n){n.id===e&&(n.completed=t)}),l(Object(r.a)(n))},remove:function(e){l(n.filter(function(t){return t.id!==e}))},edit:function(e,t){n.forEach(function(n){n.id===e&&(n.val=t)}),l(Object(r.a)(n))}}),c.a.createElement(d,{list:n,clear:function(){l(n.filter(function(e){return!e.completed}))}}))};var v=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,t,n){e.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.7cf26c7d.chunk.js.map