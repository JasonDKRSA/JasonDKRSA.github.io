(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,n,t){e.exports=t(44)},43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(10),c=t.n(a),i=t(7),l=t(2),u=t(19),d=t(20),m=t(26),s=t(21),p=t(28),f=t(3);function h(){var e=Object(l.a)(["\n  margin-bottom: 10px;\n  padding: 10px;\n  transition: border 0.5s;\n  z-index: 2;\n  color: #fff;\n  text-decoration: none;\n"]);return h=function(){return e},e}function b(){var e=Object(l.a)(["\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    border: 3px solid transparent;\n    transition: width 0.2s, top 0.2s;\n"]);return b=function(){return e},e}var v=f.a.div(b()),x=function(e){function n(){var e,t;Object(u.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=Object(m.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(o)))).repositionBorder=function(e,n,t){document.querySelector("#border").style.top="".concat(e-2,"px"),document.querySelector("#border").style.height="".concat(n,"px"),document.querySelector("#border").style.width="".concat(t,"px"),document.querySelector("#border").style.border="3px solid mediumspringgreen"},t.handleBorderReposition=function(e){var n=e.target.getBoundingClientRect();t.repositionBorder(n.top,n.height,n.width)},t}return Object(p.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e={};return e.onMouseOver=this.handleBorderReposition,o.a.createElement(i.b,Object.assign({},this.props,e))}}]),n}(i.b),E=Object(f.a)(x)(h()),g=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{to:"story-mode"},"Story mode"),o.a.createElement(E,{to:"chapter-select"},"Chapter Select"),o.a.createElement(E,{to:"credits"},"Credits"),o.a.createElement(v,{id:"border"}))};t(43);function y(){var e=Object(l.a)(["\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]);return y=function(){return e},e}function j(){var e=Object(l.a)(["\n  text-align: center;\n"]);return j=function(){return e},e}var O=f.a.div(j()),w=f.a.div(y()),k=function(){return o.a.createElement(O,null,o.a.createElement(w,null,o.a.createElement(g,null)))},B=function(){return"Nothing yet..."},S=function(){return"Nothing yet..."},q=function(){return"Nothing yet..."},z=function(){return"404 Motherfucker"};function C(){var e=Object(l.a)(["\n    color: #fff;\n    text-decoration: none;\n"]);return C=function(){return e},e}function N(){var e=Object(l.a)(["\n    position: absolute;\n    list-style: none;\n    display: flex;\n"]);return N=function(){return e},e}var R=f.a.ul(N()),J=Object(f.a)(i.b)(C()),M=function(){return o.a.createElement(R,null,o.a.createElement("li",null,o.a.createElement(J,{to:"/home"},"Home")))},A=t(8);function F(){var e=Object(l.a)(["\n    background-color: #282c34;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: white;\n"]);return F=function(){return e},e}var H=f.a.div(F());c.a.render(o.a.createElement(i.a,null,o.a.createElement(function(){return o.a.createElement("div",null,o.a.createElement(M,null),o.a.createElement(H,null,o.a.createElement(A.d,null,o.a.createElement(A.b,{exact:!0,path:"/home",component:k}),o.a.createElement(A.b,{exact:!0,path:"/"},o.a.createElement(A.a,{to:"/home"})),o.a.createElement(A.b,{exact:!0,path:"/story-mode",component:B}),o.a.createElement(A.b,{exact:!0,path:"/chapter-select",component:S}),o.a.createElement(A.b,{exact:!0,path:"/credits",component:q}),o.a.createElement(A.b,{component:z}))))},null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.0204e2c7.chunk.js.map