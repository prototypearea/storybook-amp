(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{313:function(module,__webpack_exports__,__webpack_require__){"use strict";var public_api=__webpack_require__(36),public_api_default=__webpack_require__.n(public_api),constants=("".concat("prototypearea/storybook-amp","/panel"),{AMP_HTML_RESULT:"".concat("prototypearea/storybook-amp","/amp-html-result")}),react=(__webpack_require__(572),__webpack_require__(573),__webpack_require__(50),__webpack_require__(116),__webpack_require__(574),__webpack_require__(95),__webpack_require__(0)),react_default=__webpack_require__.n(react),server_browser=__webpack_require__(303),server_browser_default=__webpack_require__.n(server_browser),defaultAMPHtmlTemplate=(__webpack_require__(32),function(_ref){var styles=_ref.styles,_ref$title=_ref.title,title=void 0===_ref$title?"AMP Demo":_ref$title,_ref$canonical=_ref.canonical,canonical=void 0===_ref$canonical?"#":_ref$canonical;return'<!doctype html>\n<html amp lang="en">\n  <head>\n    <meta charSet="utf-8" />\n    <title>'.concat(title,'</title>\n    <link rel="canonical" href="').concat(canonical,'" />\n    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />\n\n    <script async src="https://cdn.ampproject.org/v0.js"><\/script>\n\n    <style amp-custom>').concat(styles,'</style>\n    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>\n\n    <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"><\/script>\n    <script async custom-element="amp-user-notification" src="https://cdn.ampproject.org/v0/amp-user-notification-0.1.js"><\/script>\n    <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"><\/script>\n    <script async custom-element="amp-list" src="https://cdn.ampproject.org/v0/amp-list-0.1.js"><\/script>\n    <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"><\/script>\n    <script async custom-element="amp-autocomplete" src="https://cdn.ampproject.org/v0/amp-autocomplete-0.1.js"><\/script>\n    <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"><\/script>\n    <script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"><\/script>\n    <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"><\/script>\n    <script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"><\/script>\n    <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"><\/script>\n    <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"><\/script>\n  </head>\n  <body>\n    \x3c!-- STORY CODE --\x3e\n  </body>\n</html>')}),getBlodURL=(__webpack_require__(21),__webpack_require__(22),__webpack_require__(23),__webpack_require__(26),__webpack_require__(576),function(code,type){var blob=new Blob([code],{type:type});return URL.createObjectURL(blob)}),getAmpHTML=function(story){var data=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},templateFunc=2<arguments.length&&void 0!==arguments[2]?arguments[2]:defaultAMPHtmlTemplate,innerProps={story:story,title:data&&data.title,styles:data&&data.styles&&"string"==typeof data.styles?data.styles:""},storyContent=server_browser_default.a.renderToStaticMarkup(story());return storyContent.includes('<div class="storybook-readme-story">')&&(storyContent=storyContent.replace('<div class="storybook-readme-story">',"").replace(/<\/div>$/,"")),templateFunc(innerProps).replace("\x3c!-- STORY CODE --\x3e",storyContent)},withAmpReactSsrDecorator=function(storyFn){1<arguments.length&&void 0!==arguments[1]&&arguments[1];var _ref=2<arguments.length?arguments[2]:void 0,parameters=_ref.parameters,_parameters$styles=parameters.styles,styles=void 0===_parameters$styles?"":_parameters$styles,_parameters$isEnabled=parameters.isEnabled;parameters.template,parameters.scripts;if(void 0===_parameters$isEnabled||!_parameters$isEnabled)return storyFn();var ampHtml=getAmpHTML(storyFn,{title:"AMP Demo",styles:styles}),blodURL=getBlodURL(ampHtml,"text/html"),channel=public_api_default.a.getChannel();if(channel.emit(constants.AMP_HTML_RESULT,{ampHtml:ampHtml}),window.self===window.top){location.href=blodURL;var EmptyElement=function(){return null};return react_default.a.createElement(EmptyElement,null)}return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("style",{dangerouslySetInnerHTML:{__html:"body { position: absolute; top: 0; left: 0; width: 100%; height: 100%; padding: 0; margin: 0; }"}}),react_default.a.createElement("iframe",{src:blodURL,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none",backgroundColor:"#fff"}}))},decorator=withAmpReactSsrDecorator;withAmpReactSsrDecorator.__docgenInfo={description:"",methods:[],displayName:"withAmpReactSsrDecorator"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["dist/decorator/index.js"]={name:"withAmpReactSsrDecorator",docgenInfo:withAmpReactSsrDecorator.__docgenInfo,path:"dist/decorator/index.js"});__webpack_require__(6),__webpack_require__(28),__webpack_require__(29),__webpack_require__(130),__webpack_require__(1),__webpack_require__(131),__webpack_require__(132),__webpack_require__(304),__webpack_require__(69);__webpack_require__.d(__webpack_exports__,"a",function(){return dist_withAmpReactSsrDecorator});var dist_withAmpReactSsrDecorator=Object(public_api.makeDecorator)({name:"withAmpReactSsrDecorator",parameterName:"amp",wrapper:function(storyFn,context,_ref){var parameters=_ref.parameters;return decorator(storyFn,context,{parameters:parameters})}})},314:function(module,exports,__webpack_require__){__webpack_require__(315),__webpack_require__(419),module.exports=__webpack_require__(420)},420:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(21),__webpack_require__(56),__webpack_require__(22),__webpack_require__(26);var _storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(47),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(302),_dist__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(313);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.addDecorator)(_dist__WEBPACK_IMPORTED_MODULE_6__.a),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.addParameters)({amp:{isEnabled:!0,styles:""}}),Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_5__.withOptions)({brandTitle:"STORYBOOK AMP",brandUrl:"https://github.com/prototypearea/storybook-amp"}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.configure)(function loadStories(){!function requireAll(requireContext){return requireContext.keys().map(requireContext)}(__webpack_require__(687))},module)}.call(this,__webpack_require__(90)(module))},687:function(module,exports,__webpack_require__){var map={"./amp-accordion.stories.js":688,"./amp-autocomplete.stories.js":689,"./amp-carousel.stories.js":690};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=687},688:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(47),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("amp-accordion",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{expanded:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",null,"Section 1"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Bunch of awesome content.")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",null,"Section 2"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Bunch of even more awesome content. This time in a"," ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"<div>"),".")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",null,"Section 3"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Bunch of awesome content.")));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Components/amp-accordion",module).add("default",function(){return _ref})}.call(this,__webpack_require__(90)(module))},689:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(47),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Components/amp-autocomplete",module).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form",{className:"sample-form",method:"post","action-xhr":"https://amp.dev/documentation/examples/api/echo",target:"_top"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("amp-autocomplete",{filter:"substring"},_ref,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify({items:["apple","orange","banana"]})}})))})}.call(this,__webpack_require__(90)(module))},690:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(47);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Components/amp-carousel",module).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("amp-carousel",{height:"300",layout:"fixed-height",type:"slides"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{backgroundColor:"blue",height:300}},"This is a blue box.")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{backgroundColor:"red",height:300}},"This is a red box.")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{backgroundColor:"green",height:300}},"This is a green box.")))})}.call(this,__webpack_require__(90)(module))}},[[314,1,2]]]);
//# sourceMappingURL=main.9edeb337366ce4d61b2b.bundle.js.map