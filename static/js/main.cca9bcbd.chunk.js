(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},24:function(e){e.exports=[{id:1,clicked:!1,image:"./assets/images/images01.jpg"},{id:2,clicked:!1,image:"./assets/images/images02.jpg"},{id:3,clicked:!1,image:"./assets/images/images03.jpg"},{id:4,clicked:!1,image:"./assets/images/images004.jpg"},{id:5,clicked:!1,image:"./assets/images/images005.jpeg"},{id:6,clicked:!1,image:"./assets/images/images006.jpeg"},{id:7,clicked:!1,image:"./assets/images/images007.jpeg"},{id:8,clicked:!1,image:"./assets/images/images008.jpg"},{id:9,clicked:!1,image:"./assets/images/images009.jpeg"},{id:10,clicked:!1,image:"./assets/images/images010.jpeg"},{id:11,clicked:!1,image:"./assets/images/images011.jpeg"},{id:12,clicked:!1,image:"./assets/images/images012.jpg"}]},30:function(e,a,t){e.exports=t(48)},35:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),i=t.n(c),l=t(27),s=t(6),o=t(19),m=t(8),u=t(9),d=t(11),g=t(10),f=t(12),h=t(24);t(14);var p=function(e){return r.a.createElement("div",{className:"card",onClick:function(){return e.handleClick(e.id)}},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:[],src:e.image})))};t(7);var E=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},v=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"bottom"},r.a.createElement("a",{href:"https://github.com/arianamelis",target:"_blank",rel:"noopener noreferrer"},"Ariana Melis || "),r.a.createElement("a",{href:"https://github.com/arianamelis",target:"_blank",rel:"noopener noreferrer"},"Portfolio")))}}]),a}(n.Component);var k=function(e){return r.a.createElement("title",null,"Click Game")};var b=function(e){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",{className:"brand"},r.a.createElement("a",{href:"/"},"Daily Memory Game")),r.a.createElement("li",null,"   | Top Score: ",e.topScore),r.a.createElement("li",null,"Score: ",e.score)))},j=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={friends:h,score:0,topScore:0},t.shuffleData=function(e){for(var a=e.length-1;a>0;){var t=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[t],e[t]=n,a--}return e},t.resetData=function(e){var a=e.map(function(e){return Object(o.a)({},e,{clicked:!1})});return t.shuffleData(a)},t.handleCorrectGuess=function(e){var a=t.state,n=a.topScore,r=a.score+1,c=Math.max(r,n);t.setState({friends:t.shuffleData(e),score:r,topScore:c})},t.handleIncorrectGuess=function(e){t.setState({data:t.resetData(e),score:0})},t.handleItemClick=function(e){var a=!1;console.log("hi");var n=t.state.friends.map(function(t){var n=Object(o.a)({},t);return n.id===e&&(n.clicked||(n.clicked=!0,a=!0)),n});a?t.handleCorrectGuess(n):t.handleIncorrectGuess(n)},t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({friends:this.shuffleData(this.state.friends)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b,{score:this.state.score,topScore:this.state.topScore}),r.a.createElement(k,null,"Click Game"),r.a.createElement(E,null,this.state.friends.map(function(a,t){return r.a.createElement(p,{key:t,id:a.id,image:a.image,handleClick:e.handleItemClick})})),r.a.createElement(v,null))}}]),a}(n.Component),y=(t(35),t(50)),C=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"landing-btn"},r.a.createElement("a",{href:"/game"},r.a.createElement(y.a,{outline:!0,color:"primary"},"Click Here to start")))}}]),a}(n.Component);var O=function(e){return r.a.createElement("header",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"headerContainer"},r.a.createElement("h1",null,"Daily Memory Game!"),r.a.createElement("h2",null,"Challenge yourself."),r.a.createElement("strong",null,"Can you remember the most influential people of the 21 century?"),r.a.createElement("p",null,"Work your brain out. Click each human face once. To loose click the same face twice, the game will reset"),r.a.createElement(C,null))))};var w=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(O,null),r.a.createElement(v,null))};var S=function(){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:w}),r.a.createElement(s.a,{exact:!0,path:"/game",component:j}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,a,t){}},[[30,1,2]]]);
//# sourceMappingURL=main.cca9bcbd.chunk.js.map