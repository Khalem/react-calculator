(window["webpackJsonpreact-calculator"]=window["webpackJsonpreact-calculator"]||[]).push([[0],[,,,function(e,_,t){},,,,,function(e,_,t){"use strict";var a=t(0),l=t.n(a);t(3);_.a=function(e){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.clearAll},"C")),l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.clearValue},"CE")),l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.calculation,value:"/"},"/")),l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.calculation,value:"*"},"X"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.digitOnClick,value:"7"},"7")),l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.digitOnClick,value:"8"},"8")),l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.digitOnClick,value:"9"},"9")),l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.calculation,value:"-"},"-"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.digitOnClick,value:"4"},"4")),l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.digitOnClick,value:"5"},"5")),l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.digitOnClick,value:"6"},"6")),l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.calculation,value:"+"},"+"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.digitOnClick,value:"1"},"1")),l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.digitOnClick,value:"2"},"2")),l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.digitOnClick,value:"3"},"3")),l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.posNeg},"+-"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.digitOnClick,value:"."},".")),l.a.createElement("div",{className:"col-3"},l.a.createElement("button",{onClick:e.digitOnClick,value:"0"},"0")),l.a.createElement("div",{className:"col-6"},l.a.createElement("button",{onClick:e.execute},"="))))}},,,function(e,_,t){e.exports=t(12)},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var C_Users_khale_Documents_react_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),C_Users_khale_Documents_react_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),C_Users_khale_Documents_react_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),C_Users_khale_Documents_react_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),C_Users_khale_Documents_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),C_Users_khale_Documents_react_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),react_dom__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7),react_dom__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__),_Buttons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(8),_index_css__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(3),_index_css__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_9__),App=function(_React$Component){function App(){var e;return Object(C_Users_khale_Documents_react_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(e=Object(C_Users_khale_Documents_react_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_Users_khale_Documents_react_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this))).state={value:"",needDigit:!0,path:[],symbolClicked:!1,executed:!1},e.digitOnClick=e.digitOnClick.bind(Object(C_Users_khale_Documents_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.calculation=e.calculation.bind(Object(C_Users_khale_Documents_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.execute=e.execute.bind(Object(C_Users_khale_Documents_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.clearAll=e.clearAll.bind(Object(C_Users_khale_Documents_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.clearValue=e.clearValue.bind(Object(C_Users_khale_Documents_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.posNeg=e.posNeg.bind(Object(C_Users_khale_Documents_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e}return Object(C_Users_khale_Documents_react_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(App,_React$Component),Object(C_Users_khale_Documents_react_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"digitOnClick",value:function(e){if(!0===this.state.symbolClicked){this.setState({value:""});var _=e.target.value;this.setState({value:_,needDigit:!1,symbolClicked:!1})}else{var t=this.state.value;t+=e.target.value,this.setState({value:t,needDigit:!1})}}},{key:"calculation",value:function(e){if(!1!==this.state.needDigit&&!this.state.executed)return!1;if(this.state.executed)var _=[];else _=this.state.path;_.push(this.state.value),_.push(e.target.value),this.setState({path:_,needDigit:!0,symbolClicked:!0,executed:!1}),this.state.path.length>2&&this.state.path.length%2===0&&this.automaticExecute()}},{key:"execute",value:function execute(){if(!(this.state.path.length>=2&&!1===this.state.executed))return!1;var newPath=this.state.path;newPath.push(this.state.value),this.setState({path:newPath});var newStr=this.state.path.join(""),result=eval(newStr);this.setState({value:result,needDigit:!0,symbolClicked:!0,executed:!0})}},{key:"automaticExecute",value:function automaticExecute(){var newPath=this.state.path.slice(0,this.state.path.length-1),newStr=newPath.join(""),result=eval(newStr);this.setState({value:result,needDigit:!0,symbolClicked:!0})}},{key:"posNeg",value:function(){var e=this.state.value;"-"!==e[0]?(e="-"+e,this.setState({value:e})):(e=e.slice(1,e.length),this.setState({value:e}))}},{key:"clearAll",value:function(){this.setState({value:"",needDigit:!0,path:[],symbolClicked:!1,executed:!1})}},{key:"clearValue",value:function(){this.setState({value:""})}},{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1",{className:"center"},"React ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",null,"Calculator")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"center center-block calculator"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4",null,this.state.path),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2",null,this.state.value?this.state.value:"0"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_8__.a,{digitOnClick:function(_){return e.digitOnClick(_)},calculation:function(_){return e.calculation(_)},execute:this.execute,clearAll:this.clearAll,clearValue:this.clearValue,posNeg:this.posNeg})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(App,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.ea4ab825.chunk.js.map