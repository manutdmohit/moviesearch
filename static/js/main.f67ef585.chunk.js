(this.webpackJsonpmoviedb=this.webpackJsonpmoviedb||[]).push([[0],{21:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),r=c.n(s),a=c(14),i=c.n(a),o=(c(21),c(3)),l=c(15),j=c(5),u=c.n(j);var b=function(e){var t=e.handleInput,c=e.search;return Object(n.jsx)("section",{className:"searchbox-wrap",children:Object(n.jsx)("input",{type:"text",placeholder:"Search for a movie...",className:"searchbox",onChange:t,onKeyPress:c})})};var d=function(e){var t=e.result,c=e.openPopup;return Object(n.jsxs)("div",{className:"result",onClick:function(){return c(t.imdbID)},children:[Object(n.jsx)("img",{src:t.Poster,alt:""}),Object(n.jsx)("h3",{children:t.Title})]})};var p=function(e){var t=e.results,c=e.openPopup;return Object(n.jsx)("section",{className:"results",children:t.map((function(e){return Object(n.jsx)(d,{result:e,openPopup:c},e.imdbID)}))})};var h=function(e){var t=e.selected,c=e.closePopup;return Object(n.jsx)("section",{className:"popup",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("h2",{children:[t.Title," ",Object(n.jsxs)("span",{children:["(",t.Year,")"]})]}),Object(n.jsxs)("p",{className:"rating",children:["Rating: ",t.imdbRating]}),Object(n.jsxs)("div",{className:"plot",children:[Object(n.jsx)("img",{src:t.Poster,alt:""}),Object(n.jsx)("p",{children:t.Plot})]}),Object(n.jsx)("button",{className:"close",onClick:c,children:"Close"})]})})};var O=function(){var e=Object(s.useState)({s:"",results:[],selected:{}}),t=Object(l.a)(e,2),c=t[0],r=t[1],a="http://www.omdbapi.com/?apikey=48ff982e";return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{children:Object(n.jsx)("h1",{children:"Movie Database"})}),Object(n.jsxs)("main",{children:[Object(n.jsx)(b,{handleInput:function(e){var t=e.target.value;r((function(e){return Object(o.a)(Object(o.a)({},e),{},{s:t})}))},search:function(e){"Enter"===e.key&&u()(a+"&s="+c.s).then((function(e){var t=e.data.Search;r((function(e){return Object(o.a)(Object(o.a)({},e),{},{results:t})}))}))}}),Object(n.jsx)(p,{results:c.results,openPopup:function(e){u()(a+"&i="+e).then((function(e){var t=e.data;console.log(t),r((function(e){return Object(o.a)(Object(o.a)({},e),{},{selected:t})}))}))}}),"undefined"!=typeof c.selected.Title&&Object(n.jsx)(h,{selected:c.selected,closePopup:function(){r((function(e){return Object(o.a)(Object(o.a)({},e),{},{selected:{}})}))}})]})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),x()}},[[39,1,2]]]);
//# sourceMappingURL=main.f67ef585.chunk.js.map