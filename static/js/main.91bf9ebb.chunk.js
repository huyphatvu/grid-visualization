(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e){e.exports={BoxContentArr:[{html:'<div className="grid-block-outer">\r\n    <div className="grid-block-inner">\r\n      <p>Some Text\r\n        <div className="grid-container">\r\n          <div class="grid-item">1</div>\r\n          <div class="grid-item">2</div>\r\n          <div class="grid-item">3</div>\r\n          <div class="grid-item">4</div>\r\n          <div class="grid-item">5</div>\r\n          <div class="grid-item">6</div>\r\n          <div class="grid-item">7</div>\r\n          <div class="grid-item">8</div>\r\n          <div class="grid-item">9</div>\r\n        </div>\r\n      </p>\r\n    </div>\r\n</div>',css:"\nBox1 CSS version\n.grid-container {\n\tdisplay: grid-inline;\n}"},{html:"\nBox2 HTML version\n.grid-container { \n\tdisplay: grid-inline;\n}",css:"\nBox2 CSS version\n.grid-container {\n\tdisplay: grid-inline;\n}"}]}},19:function(e,t,a){e.exports=a(29)},29:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),c=a(5),i=a(4),l=a(6),s=a(0),o=a.n(s),d=a(14),m=a.n(d),u=a(15),v=a.n(u),b=a(7),h=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),console.log(e.currentTarget),e.currentTarget.classList.toggle("change"),document.getElementsByClassName("topnav-content").item(0).classList.toggle("nav-appear")}},{key:"render",value:function(){return o.a.createElement("li",{className:"top-button unclick"},o.a.createElement("div",{className:"menu-button unclick",onClick:this.handleClick},o.a.createElement("div",{className:"bar1"}),o.a.createElement("div",{className:"bar2"}),o.a.createElement("div",{className:"bar3"})))}}]),t}(s.Component),E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).getArrow=a.getArrow.bind(Object(b.a)(Object(b.a)(a))),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"getArrow",value:function(){return this.props.isToggleOn?o.a.createElement("i",{className:"arrow point-right arrow-turn-down"}):o.a.createElement("i",{className:"arrow point-right"})}},{key:"render",value:function(){return this.getArrow()}}]),t}(s.Component),p=a(30),O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={isToggleOn:!1,showList:!1},a.handleHoverEvent=a.handleHoverEvent.bind(Object(b.a)(Object(b.a)(a))),a.showList=a.showList.bind(Object(b.a)(Object(b.a)(a))),a.handleClick=a.handleClick.bind(Object(b.a)(Object(b.a)(a))),a.handleMouseLeave=a.handleMouseLeave.bind(Object(b.a)(Object(b.a)(a))),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handleHoverEvent",value:function(){this.setState({isToggleOn:!0,showList:!0})}},{key:"handleClick",value:function(){this.state.showList?this.setState({isToggleOn:!1,showList:!1}):this.setState({isToggleOn:!0,showList:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isToggleOn:!1,showList:!1})}},{key:"showList",value:function(){if(this.state.showList)return o.a.createElement("div",{className:"dropdown-content dropdown-block-appear-transition",onMouseLeave:this.handleMouseLeave},o.a.createElement(p.a,{className:"nav-link",to:"/"}," flex-direction  "),o.a.createElement(p.a,{className:"nav-link",to:"/two"}," flex-wrap  "),o.a.createElement(p.a,{className:"nav-link",to:"/three"}," flex-flow  "),o.a.createElement(p.a,{className:"nav-link",to:"/two"}," order  "))}},{key:"render",value:function(){return o.a.createElement("ul",{className:"topnav"},o.a.createElement(h,null),o.a.createElement("div",{className:"topnav-content"},o.a.createElement("li",null,o.a.createElement(p.a,{to:"/",onMouseOver:this.handleMouseLeave}," Home  ")),o.a.createElement("li",null,o.a.createElement("div",{className:"dropdown"},o.a.createElement("button",{className:"dropbtn",onMouseEnter:this.handleHoverEvent,onClick:this.handleClick},"Models",o.a.createElement(E,{isToggleOn:this.state.isToggleOn})),this.showList())),o.a.createElement("li",null,o.a.createElement(p.a,{to:"/two",onMouseOver:this.handleMouseLeave}," Alignment  ")),o.a.createElement("li",null,o.a.createElement(p.a,{to:"/three",onMouseOver:this.handleMouseLeave}," Flexibility  "))))}}]),t}(s.Component),g=function(e){return o.a.createElement("div",null,o.a.createElement(O,null),e.children)},j=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"grid-block-outer"},o.a.createElement("div",{className:"grid-block-inner"},o.a.createElement("p",null,"Some Text",o.a.createElement("div",{className:"grid-container"},o.a.createElement("div",{class:"grid-item"},"1"),o.a.createElement("div",{class:"grid-item"},"2"),o.a.createElement("div",{class:"grid-item"},"3"),o.a.createElement("div",{class:"grid-item"},"4"),o.a.createElement("div",{class:"grid-item"},"5"),o.a.createElement("div",{class:"grid-item"},"6"),o.a.createElement("div",{class:"grid-item"},"7"),o.a.createElement("div",{class:"grid-item"},"8"),o.a.createElement("div",{class:"grid-item"},"9")))))}}]),t}(s.Component),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleSelect=a.handleSelect.bind(Object(b.a)(Object(b.a)(a))),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handleSelect",value:function(e){this.props.callbackFromParent(e)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"tabbar"},o.a.createElement("button",{onClick:function(){return e.handleSelect("HTML")}}," HTML "),o.a.createElement("button",{onClick:function(){return e.handleSelect("CSS")}}," CSS "))}}]),t}(s.Component),k=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={selectedCodeContent:"CSS"},a.buttonSelectCallBack=a.buttonSelectCallBack.bind(Object(b.a)(Object(b.a)(a))),a.renderCodeContent=a.renderCodeContent.bind(Object(b.a)(Object(b.a)(a))),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"buttonSelectCallBack",value:function(e){this.setState({selectedCodeContent:e})}},{key:"renderCodeContent",value:function(){return"HTML"===this.state.selectedCodeContent?o.a.createElement("pre",null,this.props.boxContent.BoxContentArr[0].html):o.a.createElement("pre",null,this.props.boxContent.BoxContentArr[0].css)}},{key:"render",value:function(){return o.a.createElement("div",{className:"script-block"},o.a.createElement(f,{callbackFromParent:this.buttonSelectCallBack}),this.renderCodeContent())}}]),t}(s.Component),C=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return console.log(this.props.boxContent),o.a.createElement("div",{className:"demo-container-wrapper"},o.a.createElement("h1",null," Grid Display "),o.a.createElement("div",{className:"demo-container"},o.a.createElement(k,{boxContent:this.props.boxContent}),o.a.createElement(j,null)))}}]),t}(s.Component),y=a(16),N=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(C,{boxContent:y}))}}]),t}(s.Component),w=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"grid-block-outer"},o.a.createElement("div",{className:"grid-block-inner"},o.a.createElement("p",null,"Some Text",o.a.createElement("div",{className:"grid-container"},o.a.createElement("div",{class:"grid-item"},"1"),o.a.createElement("div",{class:"grid-item"},"2"),o.a.createElement("div",{class:"grid-item"},"3"),o.a.createElement("div",{class:"grid-item"},"4"),o.a.createElement("div",{class:"grid-item"},"5"),o.a.createElement("div",{class:"grid-item"},"6"),o.a.createElement("div",{class:"grid-item"},"7"),o.a.createElement("div",{class:"grid-item"},"8"),o.a.createElement("div",{class:"grid-item"},"9")))))}}]),t}(s.Component),S=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"script-block"},o.a.createElement("pre",null,"\n.grid-container {\n  display: grid-inline;\n}"))}}]),t}(s.Component),L=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"demo-container-wrapper"},o.a.createElement("h1",null," Grid Display "),o.a.createElement("div",{className:"demo-container"},o.a.createElement(S,null),o.a.createElement(w,null)),o.a.createElement("h1",null," Grid Display "),o.a.createElement("div",{className:"demo-container"},o.a.createElement(S,null),o.a.createElement(w,null)))}}]),t}(s.Component),x=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"grid-block-outer"},o.a.createElement("div",{className:"grid-block-inner"},o.a.createElement("p",null,"Some Text",o.a.createElement("div",{className:"grid-container"},o.a.createElement("div",{class:"grid-item"},"1"),o.a.createElement("div",{class:"grid-item"},"2"),o.a.createElement("div",{class:"grid-item"},"3"),o.a.createElement("div",{class:"grid-item"},"4"),o.a.createElement("div",{class:"grid-item"},"5"),o.a.createElement("div",{class:"grid-item"},"6"),o.a.createElement("div",{class:"grid-item"},"7"),o.a.createElement("div",{class:"grid-item"},"8"),o.a.createElement("div",{class:"grid-item"},"9")))))}}]),t}(s.Component),T=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"script-block"},o.a.createElement("pre",null,"\n.grid-container {\n  display: grid-inline;\n}"))}}]),t}(s.Component),M=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"demo-container-wrapper"},o.a.createElement("h1",null," Grid Display "),o.a.createElement("div",{className:"demo-container"},o.a.createElement(T,null),o.a.createElement(x,null)),o.a.createElement("h1",null," Grid Display "),o.a.createElement("div",{className:"demo-container"},o.a.createElement(T,null),o.a.createElement(x,null)),o.a.createElement("h1",null," Grid Display "),o.a.createElement("div",{className:"demo-container"},o.a.createElement(T,null),o.a.createElement(x,null)))}}]),t}(s.Component),B=a(31),H=a(33),A=a(32),D=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/grid-visualization"})),o.a.createElement(B.a,null,o.a.createElement("div",{style:v.a},o.a.createElement(g,null,o.a.createElement(H.a,null,o.a.createElement(A.a,{exact:!0,path:"/",component:N}),o.a.createElement(A.a,{exact:!0,path:"/two",component:L}),o.a.createElement(A.a,{exact:!0,path:"/three",component:M})))))}}]),t}(s.Component);m.a.render(o.a.createElement(D,null),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.91bf9ebb.chunk.js.map