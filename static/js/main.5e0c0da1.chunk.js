(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){e.exports=a(23)},23:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(12),r=a.n(c),i=a(2),s=a(3),o=a(5),u=a(4),m=a(6),d=a(13),h=a.n(d),v=a(7),b=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),console.log(e.currentTarget),e.currentTarget.classList.toggle("change"),document.getElementsByClassName("topnav-content").item(0).classList.toggle("nav-appear")}},{key:"render",value:function(){return l.a.createElement("li",{className:"top-button unclick"},l.a.createElement("div",{className:"menu-button unclick",onClick:this.handleClick},l.a.createElement("div",{className:"bar1 unclick"}),l.a.createElement("div",{className:"bar2 unclick"}),l.a.createElement("div",{className:"bar3 unclick"})))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getArrow=a.getArrow.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getArrow",value:function(){return this.props.isToggleOn?l.a.createElement("i",{className:"arrow point-right arrow-turn-down"}):l.a.createElement("i",{className:"arrow point-right"})}},{key:"render",value:function(){return this.getArrow()}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={isToggleOn:!1,showList:!1},a.handleHoverEvent=a.handleHoverEvent.bind(Object(v.a)(Object(v.a)(a))),a.showList=a.showList.bind(Object(v.a)(Object(v.a)(a))),a.handleClick=a.handleClick.bind(Object(v.a)(Object(v.a)(a))),a.handleMouseLeave=a.handleMouseLeave.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleHoverEvent",value:function(){this.setState({isToggleOn:!0,showList:!0})}},{key:"handleClick",value:function(){this.state.showList?this.setState({isToggleOn:!1,showList:!1}):this.setState({isToggleOn:!0,showList:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isToggleOn:!1,showList:!1})}},{key:"showList",value:function(){if(this.state.showList){var e=l.a.createElement("div",{className:"dropdown-content dropdown-block-appear-transition",onMouseLeave:this.handleMouseLeave},l.a.createElement("a",{className:"nav-link",href:"/"},"   flex-direction  "),l.a.createElement("a",{className:"nav-link",href:"/"},"   flex-wrap  "),l.a.createElement("a",{className:"nav-link",href:"/"},"   flex-flow  "),l.a.createElement("a",{className:"nav-link",href:"/"},"   order  "));return console.log(e.props.children),e}}},{key:"render",value:function(){return l.a.createElement("ul",{className:"topnav"},l.a.createElement(b,null),l.a.createElement("div",{className:"topnav-content"},l.a.createElement("li",null,l.a.createElement("button",{href:"/"},"   Home  ")),l.a.createElement("li",null,l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"dropbtn ",onMouseEnter:this.handleHoverEvent,onClick:this.handleClick},"Models",l.a.createElement(E,{isToggleOn:this.state.isToggleOn})),this.showList())),l.a.createElement("li",null,l.a.createElement("button",{href:"/"},"   Alignment  ")),l.a.createElement("li",null,l.a.createElement("button",{href:"/"},"   Flexibility  "))))}}]),t}(n.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"grid-block-outer"},l.a.createElement("div",{className:"grid-block-inner"},l.a.createElement("p",null,"Some Text",l.a.createElement("div",{className:"grid-container"},l.a.createElement("div",{class:"grid-item"},"1"),l.a.createElement("div",{class:"grid-item"},"2"),l.a.createElement("div",{class:"grid-item"},"3"),l.a.createElement("div",{class:"grid-item"},"4"),l.a.createElement("div",{class:"grid-item"},"5"),l.a.createElement("div",{class:"grid-item"},"6"),l.a.createElement("div",{class:"grid-item"},"7"),l.a.createElement("div",{class:"grid-item"},"8"),l.a.createElement("div",{class:"grid-item"},"9")))))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"script-block"},l.a.createElement("pre",null,"\n.grid-container {\n  display: grid-inline;\n}"))}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"demo-container-wrapper"},l.a.createElement("h1",null," Grid Display "),l.a.createElement("div",{className:"demo-container"},l.a.createElement(O,null),l.a.createElement(p,null)))}}]),t}(n.Component);var j=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"\xa9 2018 \xb7 Huy Phat Vu \xb7 All Rights Reserved."))},k=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App",class:"flex",style:h.a},l.a.createElement(g,null),l.a.createElement("div",{className:"block"},l.a.createElement(f,null),l.a.createElement(f,null),l.a.createElement(f,null)),l.a.createElement(j,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(25);r.a.render(l.a.createElement(w.a,{basename:"/grid-visualization-website"},l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.5e0c0da1.chunk.js.map