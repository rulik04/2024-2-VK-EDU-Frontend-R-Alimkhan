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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./components/Chat/chat.css":
/*!*************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/Chat/chat.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".chat {\\n    display: flex;\\n    align-items: center;\\n    background-color: azure;\\n    justify-content: space-between;\\n    padding: 10px 20px;\\n    border-bottom: 1px solid #ccc;\\n}\\n\\n.chat-image {\\n    width: 60px;\\n    height: 60px;\\n    border-radius: 50%;\\n    margin-right: 25px;\\n    object-fit: cover;\\n}\\n\\n.chat-main {\\n    flex-grow: 1;\\n}\\n.chat-main h2 {\\n    margin: 0;\\n}\\n\\n.chat-main p {\\n    margin: 10px 0 0;\\n}\\n\\n.chat-info p {\\n    margin: 0 0 5px 0;\\n}\\n\\n.unread-counter {\\n    background-color: red;\\n    color: white;\\n    border-radius: 50%;\\n    padding: 4px 8px;\\n    font-size: 10px;\\n    margin-left: 8px;\\n}\\n.unread {\\n    background-color: #008069;\\n    color: white;\\n    border: 1px solid #008069;\\n    border-radius: 25%;\\n    padding: 4px 8px;\\n    font-size: 10px;\\n    margin-left: 8px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./components/Chat/chat.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./components/FloatingButton/floatingButton.css":
/*!*********************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/FloatingButton/floatingButton.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".floating-button-container {\\n    position: fixed;\\n    bottom: 20px;\\n    right: 20px;\\n    z-index: 1000;\\n\\n    border-radius: 50%;\\n    background-color: #008069;\\n    padding: 15px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./components/FloatingButton/floatingButton.css?../node_modules/css-loader/dist/cjs.js");

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

/***/ "./components/Chat/chat.css":
/*!**********************************!*\
  !*** ./components/Chat/chat.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./chat.css */ \"../node_modules/css-loader/dist/cjs.js!./components/Chat/chat.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./components/Chat/chat.css?");

/***/ }),

/***/ "./components/Chat/chat.js":
/*!*********************************!*\
  !*** ./components/Chat/chat.js ***!
  \*********************************/
/*! exports provided: createChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChat\", function() { return createChat; });\n/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.css */ \"./components/Chat/chat.css\");\n/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chat_css__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction createChat(chatId, chatName, lastMessage, time, isRead, avatar, unread) {\n  var chat = document.createElement(\"div\");\n  chat.className = \"chat\";\n  var chatImage = document.createElement(\"img\");\n  chatImage.src = avatar;\n  chatImage.className = \"chat-image\";\n  var chatMain = document.createElement(\"div\");\n  chatMain.className = \"chat-main\";\n  var chatTitle = document.createElement(\"h2\");\n  chatTitle.innerText = chatName;\n  chatMain.appendChild(chatTitle);\n  var chatLastMessage = document.createElement(\"p\");\n  if (lastMessage.length > 20) {\n    lastMessage = lastMessage.slice(0, 20) + \"...\";\n  }\n  chatLastMessage.innerText = lastMessage;\n  console.log(lastMessage);\n  chatMain.appendChild(chatLastMessage);\n  chat.appendChild(chatImage);\n  chat.appendChild(chatMain);\n  var chatInfo = document.createElement(\"div\");\n  chatInfo.className = \"chat-info\";\n  var lastMessageTime = document.createElement(\"p\");\n  lastMessageTime.className = \"time\";\n  lastMessageTime.innerText = time;\n  chatInfo.appendChild(lastMessageTime);\n  var checked = document.createElement(\"span\");\n  checked.className = \"material-symbols-outlined\";\n  if (isRead == \"read\") {\n    checked.innerText = \"done_all\";\n    chatInfo.appendChild(checked);\n  } else if (isRead == \"unread\") {\n    checked.innerText = \"check\";\n    chatInfo.appendChild(checked);\n  }\n  if (unread > 0) {\n    var unreadMessages = document.createElement(\"span\");\n    unreadMessages.className = \"unread\";\n    unreadMessages.innerText = unread;\n    chatInfo.appendChild(unreadMessages);\n  }\n  chat.appendChild(chatInfo);\n  chat.addEventListener(\"click\", function () {\n    window.location.href = \"/2024-2-VK-EDU-Frontend-R-Alimkhan/chat.html?chatId=\".concat(chatId);\n  });\n  return chat;\n}\n\n//# sourceURL=webpack:///./components/Chat/chat.js?");

/***/ }),

/***/ "./components/FloatingButton/floatingButton.css":
/*!******************************************************!*\
  !*** ./components/FloatingButton/floatingButton.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./floatingButton.css */ \"../node_modules/css-loader/dist/cjs.js!./components/FloatingButton/floatingButton.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./components/FloatingButton/floatingButton.css?");

/***/ }),

/***/ "./components/FloatingButton/floatingButton.js":
/*!*****************************************************!*\
  !*** ./components/FloatingButton/floatingButton.js ***!
  \*****************************************************/
/*! exports provided: createFloatingButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createFloatingButton\", function() { return createFloatingButton; });\n/* harmony import */ var _floatingButton_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./floatingButton.css */ \"./components/FloatingButton/floatingButton.css\");\n/* harmony import */ var _floatingButton_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_floatingButton_css__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction createFloatingButton() {\n  var buttonContainer = document.createElement(\"div\");\n  buttonContainer.className = \"floating-button-container\";\n  var floatingButton = document.createElement(\"span\");\n  floatingButton.className = \"floating-button material-symbols-outlined\";\n  floatingButton.innerText = \"edit\";\n  buttonContainer.appendChild(floatingButton);\n  return buttonContainer;\n}\n\n//# sourceURL=webpack:///./components/FloatingButton/floatingButton.js?");

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

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loadChats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadChats.js */ \"./loadChats.js\");\n/* harmony import */ var _loadChats_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loadChats_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header/header.js */ \"./components/Header/header.js\");\n/* harmony import */ var _components_Chat_chat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Chat/chat.js */ \"./components/Chat/chat.js\");\n/* harmony import */ var _components_FloatingButton_floatingButton_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FloatingButton/floatingButton.js */ \"./components/FloatingButton/floatingButton.js\");\n\n\n\n\n\nvar DEFAULT_AVATAR_URL = \"https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png\";\nvar app = document.querySelector(\".chat-container\");\napp.appendChild(Object(_components_Header_header_js__WEBPACK_IMPORTED_MODULE_2__[\"createHeader\"])(\"Messenger\", \"chats\"));\nvar chats = JSON.parse(localStorage.getItem(\"chats\")) || [];\nchats = chats.filter(function (chat) {\n  return chat.messages.length > 0;\n});\nlocalStorage.setItem(\"chats\", JSON.stringify(chats));\nvar displayChats = function displayChats() {\n  if (chats.length === 0) {\n    app.appendChild(document.createElement(\"p\").innerText = \"No chats available\");\n    return;\n  }\n  chats.forEach(function (chat) {\n    var lastMessage = chat.messages[chat.messages.length - 1];\n    var unreadCount = chat.messages.filter(function (msg) {\n      return msg.type === \"received\" && msg.status === \"unread\";\n    }).length;\n    var lastMessageStatus = lastMessage.type === \"sent\" ? lastMessage.status : \"\";\n    app.appendChild(Object(_components_Chat_chat_js__WEBPACK_IMPORTED_MODULE_3__[\"createChat\"])(chat.chatId, chat.chatName, lastMessage.text, lastMessage.time, lastMessageStatus, chat.avatar || DEFAULT_AVATAR_URL, unreadCount));\n  });\n};\ndisplayChats();\nvar newChatBtn = Object(_components_FloatingButton_floatingButton_js__WEBPACK_IMPORTED_MODULE_4__[\"createFloatingButton\"])();\nnewChatBtn.addEventListener(\"click\", function () {\n  var chatName = prompt(\"Enter the name of the new contact:\");\n  if (!chatName) return;\n  var newChat = {\n    chatId: chats.length + 1,\n    chatName: chatName,\n    avatar: DEFAULT_AVATAR_URL,\n    messages: []\n  };\n  chats.push(newChat);\n  localStorage.setItem(\"chats\", JSON.stringify(chats));\n  window.location.href = \"/2024-2-VK-EDU-Frontend-R-Alimkhan/chat.html?chatId=\".concat(newChat.chatId);\n});\napp.appendChild(newChatBtn);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./loadChats.js":
/*!**********************!*\
  !*** ./loadChats.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var chatData = [{\n  chatId: 1,\n  chatName: \"Max Verstappen\",\n  status: \"online\",\n  avatar: \"https://i3.wp.com/sneg.top/uploads/posts/2023-04/1680839184_sneg-top-p-gonshchik-kartinka-instagram-33.jpg?ssl=1\",\n  messages: [{\n    text: \"Hey! I'm good, thanks. How about you?\",\n    time: \"10:00\",\n    type: \"received\",\n    status: \"read\"\n  }, {\n    text: \"Just got back from the race!\",\n    time: \"10:05\",\n    type: \"sent\",\n    status: \"unread\"\n  }]\n}, {\n  chatId: 2,\n  chatName: \"Lewis Hamilton\",\n  status: \"Был(а) 5 минут назад\",\n  avatar: \"https://i.ytimg.com/vi/DAz2UrNQb6s/maxresdefault.jpg\",\n  messages: [{\n    text: \"Looking forward to it!\",\n    time: \"9:00\",\n    type: \"sent\",\n    status: \"read\"\n  }, {\n    text: \"Have a safe trip!\",\n    time: \"9:30\",\n    type: \"received\",\n    status: \"read\"\n  }]\n}, {\n  chatId: 3,\n  chatName: \"Lando Norris\",\n  status: \"Был(а) в сети 3 часа назад\",\n  avatar: \"https://avatars.mds.yandex.net/i?id=92891419564e20cacc1b6e33802a2215_l-7553521-images-thumbs&n=13\",\n  messages: [{\n    text: \"Sounds good! Where should we meet?\",\n    time: \"8:00\",\n    type: \"sent\",\n    status: \"read\"\n  }, {\n    text: \"At the usual spot?\",\n    time: \"8:05\",\n    type: \"received\",\n    status: \"unread\"\n  }, {\n    text: \"Don't forget to bring the tickets!\",\n    time: \"8:10\",\n    type: \"received\",\n    status: \"unread\"\n  }]\n}];\nif (!localStorage.getItem(\"chats\")) {\n  localStorage.setItem(\"chats\", JSON.stringify(chatData));\n  console.log(\"Chat data loaded into localStorage\");\n}\n\n//# sourceURL=webpack:///./loadChats.js?");

/***/ })

/******/ });