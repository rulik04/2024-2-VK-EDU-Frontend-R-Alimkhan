/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./chat.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./chat.css":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./chat.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".chat-container {\\n    display: flex;\\n    flex-direction: column;\\n    height: 100%;\\n}\\n\\n.chat-main {\\n    display: flex;\\n    flex-direction: column-reverse;\\n    padding: 20px;\\n    overflow-y: auto;\\n    flex-grow: 1;\\n    background-color: var(--secondary-color);\\n}\\n\\n.message {\\n    padding: 10px;\\n    background-color: var(--received-message-color);\\n    border-radius: 5px;\\n    margin-bottom: 10px;\\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\\n    width: fit-content;\\n    max-width: 50%;\\n    word-wrap: break-word;\\n}\\n\\n.message-time span {\\n    color: var(--icon-color);\\n    font-size: 0.8em;\\n    margin-top: 3px;\\n}\\n\\n.message.sent {\\n    background-color: var(--sent-message-color);\\n    margin-left: auto;\\n    text-align: right;\\n}\\n\\n.message.received {\\n    background-color: var(--received-message-color);\\n    margin-right: auto;\\n}\\n\\n.material-symbols-outlined {\\n    cursor: pointer;\\n    font-size: 24px;\\n    margin-left: 10px;\\n}\\n\\n.message-time {\\n    display: flex;\\n    align-items: center;\\n    justify-content: end;\\n}\\n\\n.material-symbols-outlined.done_all {\\n    color: green;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./chat.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./components/Footer/footer.css":
/*!*****************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/Footer/footer.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".chat-footer {\\n    display: flex;\\n    align-items: center;\\n    padding: 10px;\\n    border-top: 1px solid var(--border-color);\\n    flex-shrink: 0;\\n}\\n\\n.form-input {\\n    flex-grow: 1;\\n    padding: 10px;\\n    border: 1px solid var(--input-border-color);\\n    border-radius: 20px;\\n    outline: none;\\n    resize: none;\\n    word-wrap: break-word;\\n}\\n\\n.material-symbols-outlined {\\n    cursor: pointer;\\n    font-size: 24px;\\n    margin-left: 10px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./components/Footer/footer.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./components/Header/header.css":
/*!*****************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/Header/header.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".header {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    padding: 20px 20px;\\n    height: 40px;\\n}\\n\\n.header-container {\\n    display: flex;\\n    align-items: center;\\n    gap: 20px;\\n}\\n.avatar {\\n    width: 50px;\\n    height: 50px;\\n    border-radius: 50%;\\n    object-fit: cover;\\n}\\n\\n.title {\\n    margin: 0;\\n}\\n\\n.status {\\n    padding: 0;\\n    margin: 0;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./components/Header/header.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./index.css":
/*!**********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./index.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;1,6..12,900&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n    --background-color: #f5f5f5;\\n    --primary-color: #333;\\n    --secondary-color: #e9ebee;\\n    --header-background-color: #008069;\\n    --border-color: rgba(25, 25, 25, 0.32);\\n    --sent-message-color: #e7fed8;\\n    --received-message-color: #fff;\\n    --input-border-color: #ccc;\\n    --icon-color: #999;\\n}\\n\\nbody {\\n    margin: 0;\\n    padding: 0;\\n    background-color: var(--background-color);\\n    color: var(--primary-color);\\n    font-family: \\\"Montserrat\\\", sans-serif;\\n    font-weight: 400;\\n    line-height: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    height: 100vh;\\n}\\n\\n.header {\\n    background-color: #008069;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./index.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./chat.css":
/*!******************!*\
  !*** ./chat.css ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./chat.css */ \"../node_modules/css-loader/dist/cjs.js!./chat.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./chat.css?");

/***/ }),

/***/ "./chat.js":
/*!*****************!*\
  !*** ./chat.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.css */ \"./chat.css\");\n/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chat_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header/header.js */ \"./components/Header/header.js\");\n/* harmony import */ var _components_Footer_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer/footer.js */ \"./components/Footer/footer.js\");\n\n\n\n\nvar urlParams = new URLSearchParams(window.location.search);\nvar chatId = parseInt(urlParams.get(\"chatId\"), 10);\nvar chats = JSON.parse(localStorage.getItem(\"chats\")) || [];\nvar currentChat = chats.find(function (chat) {\n  return chat.chatId === chatId;\n});\nif (!currentChat) {\n  alert(\"Chat not found!\");\n  window.location.href = \"/\";\n}\ncurrentChat.messages.forEach(function (message) {\n  if (message.type === \"received\" && message.status === \"unread\") {\n    message.status = \"read\";\n  }\n});\nlocalStorage.setItem(\"chats\", JSON.stringify(chats));\nvar app = document.querySelector(\".chat-container\");\napp.prepend(Object(_components_Header_header_js__WEBPACK_IMPORTED_MODULE_2__[\"createHeader\"])(currentChat.chatName, \"personalChat\", currentChat.avatar, currentChat.status));\napp.appendChild(Object(_components_Footer_footer_js__WEBPACK_IMPORTED_MODULE_3__[\"createFooter\"])());\nvar chatMain = document.querySelector(\".chat-main\");\ncurrentChat.messages.forEach(addMessageToChat);\ndocument.querySelector(\".form-input\").addEventListener(\"keypress\", function (event) {\n  if (event.key === \"Enter\" && !event.shiftKey) {\n    event.preventDefault();\n    sendMessage();\n  }\n});\ndocument.querySelector(\".send\").addEventListener(\"click\", sendMessage);\nfunction sendMessage() {\n  var messageInput = document.querySelector(\".form-input\");\n  var messageText = messageInput.value.trim();\n  if (!messageText) return;\n  var message = {\n    text: messageText,\n    time: new Date().toLocaleTimeString(\"ru-RU\", {\n      hour: \"numeric\",\n      minute: \"numeric\"\n    }),\n    type: \"sent\",\n    status: \"unread\"\n  };\n  currentChat.messages.push(message);\n  localStorage.setItem(\"chats\", JSON.stringify(chats));\n  addMessageToChat(message);\n  messageInput.value = \"\";\n  messageInput.style.height = \"auto\";\n}\nfunction addMessageToChat(message) {\n  var messageElement = document.createElement(\"div\");\n  messageElement.classList.add(\"message\", message.type);\n  var messageContent = document.createElement(\"span\");\n  messageContent.innerText = message.text;\n  var messageInfo = document.createElement(\"div\");\n  messageInfo.classList.add(\"message-time\");\n  var messageTime = document.createElement(\"span\");\n  messageTime.innerText = message.time;\n  messageInfo.appendChild(messageTime);\n  if (message.type === \"sent\") {\n    var messageStatus = document.createElement(\"span\");\n    messageStatus.classList.add(\"material-symbols-outlined\");\n    messageStatus.innerText = message.status === \"unread\" ? \"check\" : \"done_all\";\n    messageInfo.appendChild(messageStatus);\n  }\n  messageElement.appendChild(messageContent);\n  messageElement.appendChild(messageInfo);\n  chatMain.prepend(messageElement);\n}\ndocument.querySelector(\".form-input\").addEventListener(\"input\", adjustTextareaHeight);\nfunction adjustTextareaHeight() {\n  var textarea = document.querySelector(\".form-input\");\n  textarea.style.height = \"auto\";\n  textarea.style.height = \"\".concat(textarea.scrollHeight, \"px\");\n}\n\n//# sourceURL=webpack:///./chat.js?");

/***/ }),

/***/ "./components/Footer/footer.css":
/*!**************************************!*\
  !*** ./components/Footer/footer.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./footer.css */ \"../node_modules/css-loader/dist/cjs.js!./components/Footer/footer.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./components/Footer/footer.css?");

/***/ }),

/***/ "./components/Footer/footer.js":
/*!*************************************!*\
  !*** ./components/Footer/footer.js ***!
  \*************************************/
/*! exports provided: createFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createFooter\", function() { return createFooter; });\n/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.css */ \"./components/Footer/footer.css\");\n/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_footer_css__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction createFooter() {\n  var footer = document.createElement(\"footer\");\n  footer.className = \"chat-footer\";\n  var input = document.createElement(\"textarea\");\n  input.className = \"form-input\";\n  input.placeholder = \"Написать сообщение...\";\n  input.rows = 1;\n  input.name = \"message-text\";\n  var attachBtn = document.createElement(\"span\");\n  attachBtn.className = \"material-symbols-outlined\";\n  attachBtn.innerText = \"attachment\";\n  var sendBtn = document.createElement(\"span\");\n  sendBtn.className = \"material-symbols-outlined send\";\n  sendBtn.innerText = \"send\";\n  footer.appendChild(input);\n  footer.appendChild(attachBtn);\n  footer.appendChild(sendBtn);\n  return footer;\n}\n\n//# sourceURL=webpack:///./components/Footer/footer.js?");

/***/ }),

/***/ "./components/Header/header.css":
/*!**************************************!*\
  !*** ./components/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./header.css */ \"../node_modules/css-loader/dist/cjs.js!./components/Header/header.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./components/Header/header.css?");

/***/ }),

/***/ "./components/Header/header.js":
/*!*************************************!*\
  !*** ./components/Header/header.js ***!
  \*************************************/
/*! exports provided: createHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHeader\", function() { return createHeader; });\n/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.css */ \"./components/Header/header.css\");\n/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_css__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction createHeader(titleText, pageType) {\n  var userAvatar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  var status = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n  var header = document.createElement(\"header\");\n  header.className = \"header\";\n  var container = document.createElement(\"div\");\n  container.className = \"header-container\";\n  var btn = createIcon(pageType === \"personalChat\" ? \"arrow_back\" : \"menu\", function () {\n    if (pageType === \"personalChat\") {\n      window.location.href = \"index.html\";\n    }\n  });\n  var userInfo = document.createElement(\"div\");\n  userInfo.className = \"user-info\";\n  var title = document.createElement(\"h3\");\n  title.className = \"title\";\n  title.innerText = titleText;\n  userInfo.appendChild(title);\n  if (pageType === \"personalChat\") {\n    var statusText = document.createElement(\"p\");\n    statusText.className = \"status\";\n    statusText.innerText = status;\n    userInfo.appendChild(statusText);\n  }\n  container.appendChild(btn);\n  if (userAvatar) {\n    var avatar = document.createElement(\"img\");\n    avatar.src = userAvatar;\n    avatar.className = \"avatar\";\n    container.appendChild(avatar);\n  }\n  container.appendChild(userInfo);\n  var headerInfo = document.createElement(\"div\");\n  headerInfo.className = \"header-info\";\n  headerInfo.appendChild(createIcon(\"search\"));\n  if (pageType === \"personalChat\") {\n    headerInfo.appendChild(createIcon(\"more_vert\"));\n  }\n  header.appendChild(container);\n  header.appendChild(headerInfo);\n  return header;\n}\nfunction createIcon(iconName) {\n  var onClick = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var icon = document.createElement(\"span\");\n  icon.className = \"material-symbols-outlined\";\n  icon.innerText = iconName;\n  if (onClick) icon.addEventListener(\"click\", onClick);\n  return icon;\n}\n\n//# sourceURL=webpack:///./components/Header/header.js?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"../node_modules/css-loader/dist/cjs.js!./index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./index.css?");

/***/ })

/******/ });