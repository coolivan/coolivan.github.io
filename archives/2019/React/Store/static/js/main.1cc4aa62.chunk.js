(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(38)},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),i=a(2),o=a(3),s=a(5),u=a(4),m=a(6),p=a(9),d=a(11),h=a(23),v=a.n(h),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).goto=function(e){var t=e.target.value,n=a.props.history.push;13===e.keyCode&&""!==t&&(n("/"+t),e.target.value="")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pages,a=e.page;return r.a.createElement("div",{className:"pagination"},new Array(t).fill("").map(function(e,t){return r.a.createElement(p.b,{key:++t,className:t===a?"active":"",to:"/"+t},t)}),r.a.createElement("span",null,"\u524d\u5f80",r.a.createElement("input",{type:"text",className:"goto",onKeyDown:this.goto}),"\u9875"))}}]),t}(r.a.Component);E.defaultProps={pages:1,page:1};var f=Object(d.f)(E),b=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).changeSort=function(e){var t=e.target.value,n=a.props;(0,n.history.push)(n.location.pathname+"?sort="+t),a.setState({sort:t})};var n=e.location.search,r=v.a.parse(n,{ignoreQueryPrefix:!0}).sort||"desc";return a.state={sort:r},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.match.params.page,n=this.state.sort;t=t.sort(function(e,t){return"asc"===n?e.price-t.price:t.price-e.price});var c=Math.ceil(t.length/5);return a=parseInt(a)||1,t=t.slice(5*(a-1),5*a),r.a.createElement("div",null,r.a.createElement("h1",null,"Home"),r.a.createElement("hr",null),r.a.createElement("ul",{className:"item-list"},r.a.createElement("li",{className:"head"},r.a.createElement("span",null,"\u540d\u79f0"),r.a.createElement("span",null,"\u4ef7\u683c",r.a.createElement("select",{defaultValue:n,onChange:this.changeSort},r.a.createElement("option",{value:"desc"},"\u4ece\u9ad8\u5230\u4f4e"),r.a.createElement("option",{value:"asc"},"\u4ece\u4f4e\u5230\u9ad8")))),t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",null,r.a.createElement(p.b,{to:"/item/"+e.id},e.name)),r.a.createElement("span",null,"\uffe5 ",(e.price/100).toFixed(2)))})),r.a.createElement(f,{pages:c,page:a}))}}]),t}(r.a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"About"))}}]),t}(r.a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Cart"))}}]),t}(r.a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.items;console.log(this.props);var t=Number(this.props.match.params.id)||0,a=e.find(function(e){return e.id===t});return a?r.a.createElement("div",null,r.a.createElement("h2",null,"\u5546\u54c1\u8be6\u60c5 - ",a.name),r.a.createElement("p",null,"ID:",a.id),r.a.createElement("p",null,"\u540d\u79f0:",a.name),r.a.createElement("p",null,"\u4ef7\u683c:\uffe5 ",(a.price/100).toFixed(2))):r.a.createElement("div",null,"\u4e0d\u5b58\u5728\u8be5\u5546\u54c1\uff01")}}]),t}(r.a.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).usernameRef=r.a.createRef(),a.passwordRef=r.a.createRef(),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"login",value:function(){var e=this.props,t=e.onLogin,a=e.history.push;console.log(this.props),"function"===typeof t&&t({username:this.usernameRef.current.value,password:this.passwordRef.current.value}).then(function(e){alert(e),a("/")}).catch(function(e){return alert(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"login"},r.a.createElement("p",null,r.a.createElement("label",null,"\u7528\u6237\u540d"),": ",r.a.createElement("input",{type:"text",ref:this.usernameRef})),r.a.createElement("p",null,r.a.createElement("label",null,"\u5bc6\u7801"),": ",r.a.createElement("input",{type:"password",ref:this.passwordRef})),r.a.createElement("p",null,r.a.createElement("button",{onClick:this.login.bind(this)},"\u767b\u5f55")))}}]),t}(r.a.Component);function w(){return r.a.createElement("div",null,"NotFound")}a(37);var C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={user:{id:0,username:""},users:[{id:1,username:"ivan",password:"123456"},{id:2,username:"cool",password:"123456"}],items:[{id:1,name:"iPhone XR",price:542500},{id:2,name:"Apple iPad Air 3",price:377700},{id:3,name:"Macbook Pro 15.4",price:1949900},{id:4,name:"Apple iMac",price:1629900},{id:5,name:"Apple Magic Mouse",price:72900},{id:6,name:"Apple Watch Series 4",price:599900}]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"login",value:function(e){var t=this,a=e.username,n=e.password;return new Promise(function(e,r){a&&n||r("\u8bf7\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801");var c=t.state.users.find(function(e){return e.username===a&&e.password===n});console.log(c),c?e("\u767b\u5f55\u6210\u529f"):r("\u7528\u6237\u4e0d\u5b58\u5728\u6216\u5bc6\u7801\u9519\u8bef"),t.setState({user:{id:c.id,username:c.username}})})}},{key:"render",value:function(){var e=this,t=window.location.pathname;return r.a.createElement("div",null,r.a.createElement(p.a,{basename:t},r.a.createElement("nav",null,r.a.createElement(p.c,{to:"/",activeClassName:"active",activeStyle:{color:"red"},isActive:function(e,t){return/^\/[(item\/\d*)(\d*)]*$/.test(t.pathname)}},"Home"),r.a.createElement("span",null," | "),r.a.createElement(p.c,{to:"/about",activeClassName:"active",activeStyle:{color:"red"}},"About"),r.a.createElement("span",null," | "),r.a.createElement(p.c,{to:"/cart",activeClassName:"active",activeStyle:{color:"red"}},"Cart"),r.a.createElement("span",null," | "),r.a.createElement(p.c,{to:"/login",activeClassName:"active",activeStyle:{color:"red"}},"Login")),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/:page(\\d*)",render:function(t){return r.a.createElement(b,Object.assign({},t,{items:e.state.items}))}}),r.a.createElement(d.a,{path:"/item/:id(\\d+)",render:function(t){return r.a.createElement(O,Object.assign({},t,{items:e.state.items}))}}),r.a.createElement(d.a,{path:"/cart",render:function(t){return e.state.user.id>0?r.a.createElement(j,null):r.a.createElement(p.b,{to:"/login"},"\u6ca1\u6709\u6743\u9650,\u8bf7\u5148\u767b\u5f55")}}),r.a.createElement(d.a,{path:"/about",component:g}),r.a.createElement(d.a,{path:"/login",activeClassName:"active",activeStyle:{color:"red"},render:function(t){return r.a.createElement(y,Object.assign({},t,{onLogin:e.login.bind(e)}))}}),r.a.createElement(d.a,{component:w}))))}}]),t}(r.a.Component);var k=function(){return r.a.createElement(C,null)};l.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.1cc4aa62.chunk.js.map