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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/style.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/style.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/img/b_sheet_80_20.png":
/*!***********************************!*\
  !*** ./src/img/b_sheet_80_20.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b191b2ea45458f1e5dd8d4c6fce430b2.png";

/***/ }),

/***/ "./src/img/e_exp_sheet.png":
/*!*********************************!*\
  !*** ./src/img/e_exp_sheet.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4e1b749a62853959b4f5cc07b7c33e71.png";

/***/ }),

/***/ "./src/img/g_sheet_80_20.png":
/*!***********************************!*\
  !*** ./src/img/g_sheet_80_20.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a31e895f596b1f60acc57b140504b8dc.png";

/***/ }),

/***/ "./src/img/live.png":
/*!**************************!*\
  !*** ./src/img/live.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "209999fac82225d7536c11aa7127a6c1.png";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "24ec227ba687ec0b31cf4b8a2a9e2030.png";

/***/ }),

/***/ "./src/img/p_sheet_80_20.png":
/*!***********************************!*\
  !*** ./src/img/p_sheet_80_20.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "05c6c7b5137241676fc858f595370aef.png";

/***/ }),

/***/ "./src/img/player.png":
/*!****************************!*\
  !*** ./src/img/player.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f8cca5748d6c8e80143e9a8851cf81d3.png";

/***/ }),

/***/ "./src/img/player_explode_big.png":
/*!****************************************!*\
  !*** ./src/img/player_explode_big.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7e720a8b9528787708e7dd7fc2d909dd.png";

/***/ }),

/***/ "./src/img/r_sheet_80_20.png":
/*!***********************************!*\
  !*** ./src/img/r_sheet_80_20.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7ba60adf520a229d41b23031fb430130.png";

/***/ }),

/***/ "./src/img/wave_sprite.png":
/*!*********************************!*\
  !*** ./src/img/wave_sprite.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "08c7d195d7c67b80e39f04953b6f4843.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/game */ "./src/js/game.js");


 // Game state

var onGame = false; // Logo

var gLogo = new Image(250, 70);
gLogo.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a;
var logoBlock = document.getElementById('logo');
logoBlock.appendChild(gLogo); // Menu

var menu = document.getElementById('menu'); // User input

var input = document.getElementById('userInput');
input.value = 'USER111';

input.onclick = function () {
  input.value = '';
};

input.onblur = function () {
  input.value = input.value ? input.value : 'USER111';
}; // get canvas


var canvas = document.getElementById('gameCanvas');

function StartGame() {
  menu.style.display = 'none';
  canvas.style.display = 'block'; // Init game object

  var game = new _js_game__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, input.value); // Start game loop

  game.start();
} // Start game from keyboeard


function startEnter(e) {
  var code = e.which || e.keyCode;

  if (code == '13' && !onGame) {
    StartGame();
    onGame = true;
  }
} // Start game click


var startBtn = document.getElementById('startBtn');

startBtn.onclick = function () {
  StartGame();
  onGame = true;
};

window.addEventListener('keydown', startEnter);

/***/ }),

/***/ "./src/js/entities.js":
/*!****************************!*\
  !*** ./src/js/entities.js ***!
  \****************************/
/*! exports provided: Player, BlueEnemy, PurpleEnemy, RedEnemy, GeneralEnemy, Bullet, Unit, Rocket, EnemyExplode, PlayerExplode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueEnemy", function() { return BlueEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurpleEnemy", function() { return PurpleEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedEnemy", function() { return RedEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralEnemy", function() { return GeneralEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bullet", function() { return Bullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unit", function() { return Unit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rocket", function() { return Rocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyExplode", function() { return EnemyExplode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerExplode", function() { return PlayerExplode; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./src/js/settings.js");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector */ "./src/js/vector.js");
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Game enteties


var PLAYER_SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].player;
var BULLET_SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].bullet;
var ROCKET_SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].rocket;
var BLUE_ENEMY_SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].blueEnemy;
var PURPLE_ENEMY_SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].purpleEnemy;
var RED_ENEMY_SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].redEnemy;
var GENERAL_ENEMY_SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].generalEnemy;
var ENEMY_EXPLODE = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].enemyExplode;
var PLAYER_EXPLODE = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].playerExplode; // Base class for spaceships
// class Ship {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.speed;
//         this.width;
//         this.height;
//         this.leftLimitX;
//         this.rightLimitX;
//         this.sprite;
//     }
//     updatePosition() {
//         this.x = this.x + this.speed;
//         if (this.x <= this.leftLimitX || this.x + this.width >= this.rightLimitX) {
//             // Reverse movement on X axis
//             this.speed *= -1;
//         }
//     }
//     setPosition(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     _getRect() {
//         return {
//             top: this.y,
//             right: this.x + this.width,
//             bottom: this.y + this.height,
//             left: this.x
//         }
//     }
//     // Detect collision with another object (using his rect prop)
//     detectCollision(object) {
//         let r = this._getRect();
//         let obj = object._getRect();
//         return r.right >= obj.left && r.left <= obj.right &&
//             r.top <= obj.bottom && r.bottom >= obj.top;
//     }
// }
// Class for plauyer's spaceship. No y axis movement
// class Player extends Ship {
//     constructor(x, y) {
//         super(x, y);
//         super.speed = PLAYER_SETTINGS.speed;
//         super.width = PLAYER_SETTINGS.width;
//         super.height = PLAYER_SETTINGS.height;
//         super.leftLimitX = PLAYER_SETTINGS.limitsX.left;
//         super.rightLimitX = PLAYER_SETTINGS.limitsX.right;
//         super.sprite = PLAYER_SETTINGS.sprite;
//         this.lives = PLAYER_SETTINGS.lives;
//     }
//     // _reload() {
//     //     this.fireReady = true;
//     // }
//     updatePosition(direction, deltaTime) {
//         if (direction == 'left') {
//             if (this.x >= this.leftLimitX) {
//                 this.x = this.x - this.speed * deltaTime;
//             }
//         } else if (direction == 'right') {
//             if (this.x <= this.rightLimitX) {
//                 this.x = this.x + this.speed * deltaTime;
//             }
//         }
//     }
//     moveLeft(delta) {
//         this.updatePosition('left', delta);
//     }
//     moveRight(delta) {
//         this.updatePosition('right', delta);
//     }
// }
// Class for blue colored enemies. No y axis movement
// class BlueEnemy extends Ship {
//     constructor(x, y) {
//         super(x, y);
//         super.speed = BLUE_ENEMY_SETTINGS.speed;
//         super.width = BLUE_ENEMY_SETTINGS.width;
//         super.height = BLUE_ENEMY_SETTINGS.height;
//         super.leftLimitX = this.x - BLUE_ENEMY_SETTINGS.limitsX.left;
//         super.rightLimitX = this.x + BLUE_ENEMY_SETTINGS.limitsX.right;
//         super.sprite = BLUE_ENEMY_SETTINGS.sprite;
//     }
// }
// Class for purple colored enemies. No y axis movement
// class PurpleEnemy extends Ship {
//     constructor(x, y) {
//         super(x, y);
//         super.speed = PURPLE_ENEMY_SETTINGS.speed;
//         super.width = PURPLE_ENEMY_SETTINGS.width;
//         super.height = PURPLE_ENEMY_SETTINGS.height;
//         super.leftLimitX = this.x - PURPLE_ENEMY_SETTINGS.limitsX.left;
//         super.rightLimitX = this.x + PURPLE_ENEMY_SETTINGS.limitsX.right;
//         super.sprite = PURPLE_ENEMY_SETTINGS.sprite;
//     }
// }
// class RedEnemy extends Ship {
//     constructor(x, y) {
//         super(x, y);
//         super.speed = RED_ENEMY_SETTINGS.speed;
//         super.width = RED_ENEMY_SETTINGS.width;
//         super.height = RED_ENEMY_SETTINGS.height;
//         super.leftLimitX = this.x - RED_ENEMY_SETTINGS.limitsX.left;
//         super.rightLimitX = this.x + RED_ENEMY_SETTINGS.limitsX.right;
//         super.sprite = RED_ENEMY_SETTINGS.sprite;
//     }
// }
// class GeneralEnemy extends Ship {
//     constructor(x, y) {
//         super(x, y);
//         super.speed = GENERAL_ENEMY_SETTINGS.speed;
//         super.width = GENERAL_ENEMY_SETTINGS.width;
//         super.height = GENERAL_ENEMY_SETTINGS.height;
//         super.leftLimitX = this.x - GENERAL_ENEMY_SETTINGS.limitsX.left;
//         super.rightLimitX = this.x + GENERAL_ENEMY_SETTINGS.limitsX.right;
//         super.sprite = GENERAL_ENEMY_SETTINGS.sprite;
//     }
// }

var Bullet =
/*#__PURE__*/
function () {
  // Class for bullet object
  function Bullet(context, position) {
    _classCallCheck(this, Bullet);

    this.position = position;
    this.context = context;
    this.speed = BULLET_SETTINGS.speed;
    this.size = {
      width: BULLET_SETTINGS.width,
      height: BULLET_SETTINGS.height // this.width = BULLET_SETTINGS.width;
      // this.height = BULLET_SETTINGS.height;

    };
    this.topLimit = BULLET_SETTINGS.limitsY.top;
    this.bottomLimit = BULLET_SETTINGS.limitsY.bottom;
    this.sprite = BULLET_SETTINGS.sprite;
    this.stop = false; // Detect stop bullet moving

    this.ready = true; // Detect ready bullet stste if she moving - not ready
  }

  _createClass(Bullet, [{
    key: "update",
    value: function update() {
      // If bullet is hide not update this
      if (!this.stop) {
        this.ready = false;
        this.position.y = this.position.y - this.speed;

        if (this.position.y >= this.bottomLimit || this.position.y + this.size.width <= this.topLimit) {
          // Stop bullet if arrived limit
          this.stop = true; // Set ready status

          this.ready = true;
        } // Add detect collisions below

      }

      this._draw(this.context);
    }
  }, {
    key: "_draw",
    value: function _draw(context) {
      context.fillStyle = this.sprite;
      context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      // this.x = x;
      // this.y = y;
      this.position = position;
      this.stop = false;
      this.ready = true;
    }
  }, {
    key: "collision",
    value: function collision(opponent) {
      // Detect collision with another object (using his rect prop)
      var r = this._getRect();

      var opp = opponent._getRect();

      return r.right >= opp.left && r.left <= opp.right && r.top <= opp.bottom && r.bottom >= opp.top;
    }
  }, {
    key: "_getRect",
    value: function _getRect() {
      return {
        top: this.position.y,
        right: this.position.x + this.size.width,
        bottom: this.position.y + this.size.height,
        left: this.position.x
      };
    }
  }]);

  return Bullet;
}();

var Rocket =
/*#__PURE__*/
function (_Bullet) {
  _inherits(Rocket, _Bullet);

  // Class for enemy rockets
  function Rocket(context, position) {
    var _this;

    _classCallCheck(this, Rocket);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rocket).call(this, context, position));

    _set(_getPrototypeOf(Rocket.prototype), "position", position, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(Rocket.prototype), "context", context, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(Rocket.prototype), "speed", ROCKET_SETTINGS.speed, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(Rocket.prototype), "size", {
      width: ROCKET_SETTINGS.width,
      height: ROCKET_SETTINGS.height
    }, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(Rocket.prototype), "topLimit", ROCKET_SETTINGS.limitsY.top, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(Rocket.prototype), "bottomLimit", ROCKET_SETTINGS.limitsY.bottom, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(Rocket.prototype), "sprite", ROCKET_SETTINGS.sprite, _assertThisInitialized(_this), true);

    return _this;
  }

  _createClass(Rocket, [{
    key: "update",
    value: function update() {
      // If bullet is hide not update this
      if (!this.stop) {
        this.ready = false;
        this.position.y = this.position.y + this.speed;

        if (this.position.y >= this.bottomLimit || this.position.y + this.size.width <= this.topLimit) {
          // Stop bullet if arrived limit
          this.stop = true; // Set ready status

          this.ready = true;
        }
      }

      this._draw(this.context);
    }
  }]);

  return Rocket;
}(Bullet);

var Unit =
/*#__PURE__*/
function () {
  // Base units class    
  function Unit(context, position) {
    _classCallCheck(this, Unit);

    this.context = context;
    this.sprite;
    this.limit = {
      x: 0.5,
      y: 0.5
    };
    this.size = {
      width: 0,
      height: 0
    };
    this.position = position;
    this.waypoints = [];
    this.objective = 0;
    this.speed;
    this.speedAttack;
    this.shots;
    this.rockets = [];

    for (var i = 0; i < 5; i++) {
      this.rockets.push(new Rocket(this.context, new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](-100, -100)));
    }

    this.attack = false;
    this.hide = false;
    this.frameRate = 0;
    this.frameLimit = 60;
    this.direction = 'none';
    this.cost = 0;
  }

  _createClass(Unit, [{
    key: "update",
    value: function update() {
      if (!this.waypoints.length) {
        return false;
      } // Change direction 


      if (this.attack && this.position.x < this.waypoints[this.objective].x) {
        this.direction = 'right';
      } else if (this.attack && this.position.x > this.waypoints[this.objective].x) {
        this.direction = 'left';
      }

      var speed = this.speed;
      var distance = this.position.substract(this.waypoints[this.objective]);
      var distanceNorm = distance.normalize();

      if (this.attack) {
        speed = this.speed * this.speedAttack;
      } else {
        speed = this.speed;
      }

      this.position = this.position.add(distanceNorm.multiply(speed));

      if (distance.getMagnitude() - speed <= 0) {
        this.position = this.waypoints[this.objective];

        if (this.objective < this.waypoints.length - 1) {
          this.objective++;
        } else if (this.attack && this.objective == this.waypoints.length - 1) {
          // Last waypoint in attack
          this.attack = false;

          this._setPosition(new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](-100, -100));

          this.waypoints = [];
        } else {
          this.objective = 0;
        } // Change unit speed if he unvisible on game canvas


        if (this.attack && this.objective > this.waypoints.length - 4) {
          speed += this.speed + this.speedAttack * 1000;
        } else if (this.attack && this.objective == this.waypoints.length - 1) {
          speed += this.speed + this.speedAttack;
        }
      }

      this._draw();
    }
  }, {
    key: "collision",
    value: function collision(opponent) {
      // Detect collision with another object (using his rect prop)
      var r = this._getRect();

      var opp = opponent._getRect();

      return r.right >= opp.left && r.left <= opp.right && r.top <= opp.bottom && r.bottom >= opp.top;
    }
  }, {
    key: "setWaypoints",
    value: function setWaypoints(waypoints) {
      if (Array.isArray(waypoints)) {
        this.waypoints = waypoints;
      } else {
        this.waypoints = [];
        var ways = [];

        if (waypoints instanceof _vector__WEBPACK_IMPORTED_MODULE_1__["default"]) {
          [].forEach.call(arguments, function (arg) {
            ways.push(arg);
          });
        }

        this.waypoints = ways;
      }
    }
  }, {
    key: "kill",
    value: function kill() {
      this.hide = true;

      this._setPosition(new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](1000, 1000));

      this.waypoints = [];
      this.attack = false;
    }
  }, {
    key: "_draw",
    value: function _draw() {
      if (this.hide) {
        this.context.fillStyle = 'rgba(0, 0, 0, 0)';
        this.context.save();
        this.context.translate(-1 * (this.limit.x * this.size.width), -1 * (this.limit.y * this.size.height));
        this.context.fillRect(this.position.x, this.position.y, 20, 20);
        this.context.restore();
      } else {
        // this.context.fillStyle = this.sprite;
        this.context.save();
        this.context.translate(-1 * (this.limit.x * this.size.width), -1 * (this.limit.y * this.size.height)); // this.context.fillRect(this.position.x, this.position.y, 20, 20);

        if (this.direction == 'none') {
          // Sprite animation from sprite sheet (for idle use only 2 first frames)
          if (this.frameRate < this.frameLimit) {
            this.context.drawImage(this.sprite, 0, 0, this.size.width, this.size.height, this.position.x, this.position.y, 20, 20);
            this.frameRate++;
          } else if (this.frameRate >= this.frameLimit && this.frameRate <= this.frameLimit * 2) {
            this.context.drawImage(this.sprite, 20, 0, this.size.width, this.size.height, this.position.x, this.position.y, 20, 20);
            this.frameRate++;
          } else {
            this.context.drawImage(this.sprite, 20, 0, this.size.width, this.size.height, this.position.x, this.position.y, 20, 20);
            this.frameRate = 0;
          }
        } else if (this.direction == 'right') {
          this.context.drawImage(this.sprite, 40, 0, this.size.width, this.size.height, this.position.x, this.position.y, 20, 20);
        } else if (this.direction == 'left') {
          this.context.drawImage(this.sprite, 60, 0, this.size.width, this.size.height, this.position.x, this.position.y, 20, 20);
        }

        this.context.restore();
      }
    }
  }, {
    key: "_setPosition",
    value: function _setPosition(position) {
      this.position = position;
    }
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this._setPosition(position);
    }
  }, {
    key: "_getRect",
    value: function _getRect() {
      return {
        top: this.position.y,
        right: this.position.x + this.size.width,
        bottom: this.position.y + this.size.height,
        left: this.position.x
      };
    }
  }]);

  return Unit;
}();

var BlueEnemy =
/*#__PURE__*/
function (_Unit) {
  _inherits(BlueEnemy, _Unit);

  // Blue enemy class
  function BlueEnemy(context, position) {
    var _this2;

    _classCallCheck(this, BlueEnemy);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(BlueEnemy).call(this, context, position));

    _set(_getPrototypeOf(BlueEnemy.prototype), "sprite", BLUE_ENEMY_SETTINGS.sprite, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(BlueEnemy.prototype), "position", position, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(BlueEnemy.prototype), "context", context, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(BlueEnemy.prototype), "size", {
      width: BLUE_ENEMY_SETTINGS.width,
      height: BLUE_ENEMY_SETTINGS.height
    }, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(BlueEnemy.prototype), "speed", BLUE_ENEMY_SETTINGS.speed, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(BlueEnemy.prototype), "speedAttack", BLUE_ENEMY_SETTINGS.speedAttack, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(BlueEnemy.prototype), "shots", BLUE_ENEMY_SETTINGS.shots, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(BlueEnemy.prototype), "cost", BLUE_ENEMY_SETTINGS.cost, _assertThisInitialized(_this2), true);

    return _this2;
  }

  return BlueEnemy;
}(Unit);

var PurpleEnemy =
/*#__PURE__*/
function (_Unit2) {
  _inherits(PurpleEnemy, _Unit2);

  // Purple enemy class
  function PurpleEnemy(context, position) {
    var _this3;

    _classCallCheck(this, PurpleEnemy);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(PurpleEnemy).call(this, context, position));

    _set(_getPrototypeOf(PurpleEnemy.prototype), "sprite", PURPLE_ENEMY_SETTINGS.sprite, _assertThisInitialized(_this3), true);

    _set(_getPrototypeOf(PurpleEnemy.prototype), "position", position, _assertThisInitialized(_this3), true);

    _set(_getPrototypeOf(PurpleEnemy.prototype), "context", context, _assertThisInitialized(_this3), true);

    _set(_getPrototypeOf(PurpleEnemy.prototype), "size", {
      width: PURPLE_ENEMY_SETTINGS.width,
      height: PURPLE_ENEMY_SETTINGS.height
    }, _assertThisInitialized(_this3), true);

    _set(_getPrototypeOf(PurpleEnemy.prototype), "speed", PURPLE_ENEMY_SETTINGS.speed, _assertThisInitialized(_this3), true);

    _set(_getPrototypeOf(PurpleEnemy.prototype), "speedAttack", PURPLE_ENEMY_SETTINGS.speedAttack, _assertThisInitialized(_this3), true);

    _set(_getPrototypeOf(PurpleEnemy.prototype), "shots", PURPLE_ENEMY_SETTINGS.shots, _assertThisInitialized(_this3), true);

    _set(_getPrototypeOf(PurpleEnemy.prototype), "cost", PURPLE_ENEMY_SETTINGS.cost, _assertThisInitialized(_this3), true);

    return _this3;
  }

  return PurpleEnemy;
}(Unit);

var RedEnemy =
/*#__PURE__*/
function (_Unit3) {
  _inherits(RedEnemy, _Unit3);

  // Red enemy class
  function RedEnemy(context, position) {
    var _this4;

    _classCallCheck(this, RedEnemy);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(RedEnemy).call(this, context, position));

    _set(_getPrototypeOf(RedEnemy.prototype), "sprite", RED_ENEMY_SETTINGS.sprite, _assertThisInitialized(_this4), true);

    _set(_getPrototypeOf(RedEnemy.prototype), "position", position, _assertThisInitialized(_this4), true);

    _set(_getPrototypeOf(RedEnemy.prototype), "context", context, _assertThisInitialized(_this4), true);

    _set(_getPrototypeOf(RedEnemy.prototype), "size", {
      width: RED_ENEMY_SETTINGS.width,
      height: RED_ENEMY_SETTINGS.height
    }, _assertThisInitialized(_this4), true);

    _set(_getPrototypeOf(RedEnemy.prototype), "speed", RED_ENEMY_SETTINGS.speed, _assertThisInitialized(_this4), true);

    _set(_getPrototypeOf(RedEnemy.prototype), "speedAttack", RED_ENEMY_SETTINGS.speedAttack, _assertThisInitialized(_this4), true);

    _set(_getPrototypeOf(RedEnemy.prototype), "shots", RED_ENEMY_SETTINGS.shots, _assertThisInitialized(_this4), true);

    _this4.general;

    _set(_getPrototypeOf(RedEnemy.prototype), "cost", RED_ENEMY_SETTINGS.cost, _assertThisInitialized(_this4), true);

    return _this4;
  }

  return RedEnemy;
}(Unit);

var GeneralEnemy =
/*#__PURE__*/
function (_Unit4) {
  _inherits(GeneralEnemy, _Unit4);

  // General enemy class
  function GeneralEnemy(context, position) {
    var _this5;

    _classCallCheck(this, GeneralEnemy);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(GeneralEnemy).call(this, context, position));

    _set(_getPrototypeOf(GeneralEnemy.prototype), "sprite", GENERAL_ENEMY_SETTINGS.sprite, _assertThisInitialized(_this5), true);

    _set(_getPrototypeOf(GeneralEnemy.prototype), "position", position, _assertThisInitialized(_this5), true);

    _set(_getPrototypeOf(GeneralEnemy.prototype), "context", context, _assertThisInitialized(_this5), true);

    _set(_getPrototypeOf(GeneralEnemy.prototype), "size", {
      width: GENERAL_ENEMY_SETTINGS.width,
      height: GENERAL_ENEMY_SETTINGS.height
    }, _assertThisInitialized(_this5), true);

    _set(_getPrototypeOf(GeneralEnemy.prototype), "speed", GENERAL_ENEMY_SETTINGS.speed, _assertThisInitialized(_this5), true);

    _set(_getPrototypeOf(GeneralEnemy.prototype), "speedAttack", GENERAL_ENEMY_SETTINGS.speedAttack, _assertThisInitialized(_this5), true);

    _set(_getPrototypeOf(GeneralEnemy.prototype), "shots", GENERAL_ENEMY_SETTINGS.shots, _assertThisInitialized(_this5), true);

    _set(_getPrototypeOf(GeneralEnemy.prototype), "cost", GENERAL_ENEMY_SETTINGS.cost, _assertThisInitialized(_this5), true);

    return _this5;
  }

  return GeneralEnemy;
}(Unit);

var Player =
/*#__PURE__*/
function (_Unit5) {
  _inherits(Player, _Unit5);

  // Player unit class
  function Player(context, position) {
    var _this6;

    _classCallCheck(this, Player);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, context, position));

    _set(_getPrototypeOf(Player.prototype), "sprite", PLAYER_SETTINGS.sprite, _assertThisInitialized(_this6), true);

    _set(_getPrototypeOf(Player.prototype), "limit", PLAYER_SETTINGS.limit, _assertThisInitialized(_this6), true);

    _set(_getPrototypeOf(Player.prototype), "size", {
      width: PLAYER_SETTINGS.width,
      height: PLAYER_SETTINGS.height
    }, _assertThisInitialized(_this6), true);

    _set(_getPrototypeOf(Player.prototype), "position", position, _assertThisInitialized(_this6), true);

    _set(_getPrototypeOf(Player.prototype), "speed", PLAYER_SETTINGS.speed, _assertThisInitialized(_this6), true);

    return _this6;
  }

  _createClass(Player, [{
    key: "update",
    value: function update(direction) {
      if (direction == 'left') {
        if (this.position.x >= this.limit.left) {
          this.position.x = this.position.x - this.speed;
        }
      } else if (direction == 'right') {
        if (this.position.x <= this.limit.right) {
          this.position.x = this.position.x + this.speed;
        }
      }

      this._draw(this.context);
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      this.update('left');
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.update('right');
    }
  }, {
    key: "_draw",
    value: function _draw(context) {
      if (this.hide) {
        this.context.fillStyle = 'rgba(0, 0, 0, 0)';
      } else {
        // this.context.fillStyle = this.sprite;
        context.drawImage(this.sprite, this.position.x, this.position.y, this.size.width, this.size.height);
      } // context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);

    }
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      _get(_getPrototypeOf(Player.prototype), "_setPosition", this).call(this, position);
    }
  }]);

  return Player;
}(Unit);

var Explode =
/*#__PURE__*/
function () {
  // Base class for explode
  function Explode(context, position, limit) {
    _classCallCheck(this, Explode);

    this.position = position;
    this.context = context;
    this.size = {
      width: 0,
      height: 0
    };
    this.sprite;
    this.frameRate = 0;
    this.originLimit = limit;
    this.frameLimit = this.originLimit;
    this.frame = 0; // First frame

    this.frames = 4; // Animation steps

    this.hide = true;
    this.maxFrameRate = this.frameLimit * this.frames;
  }

  _createClass(Explode, [{
    key: "update",
    value: function update() {
      this._draw();
    }
  }, {
    key: "_draw",
    value: function _draw() {
      if (this.hide) {
        this.context.fillStyle = 'rgba(0, 0, 0, 0)';
        this.context.save();
        this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
        this.context.restore();
        this.frame = 0;
        this.frameLimit = this.originLimit;
      } else {
        this.context.save(); // Sprite animation from sprite sheet (for idle use only 2 first frames)

        if (this.frameRate < this.frameLimit) {
          this.context.drawImage(this.sprite, this.size.width * this.frame, 0, this.size.width, this.size.height, this.position.x, this.position.y, this.size.width, this.size.height);
          this.frameRate++;
        } else if (this.frameRate >= this.frameLimit && this.frameRate <= this.frameLimit * 2 && this.frameRate <= this.maxFrameRate) {
          this.frame++;
          this.frameLimit *= 2;
          this.context.drawImage(this.sprite, this.size.width * this.frame, 0, this.size.width, this.size.height, this.position.x, this.position.y, this.size.width, this.size.height);
          this.frameRate++;
        } else {
          this.frameRate = 0;
          this.frame = 0;
          this.hide = true;
        }

        this.context.restore();
      }
    }
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this.position = position;
    }
  }]);

  return Explode;
}();

var EnemyExplode =
/*#__PURE__*/
function (_Explode) {
  _inherits(EnemyExplode, _Explode);

  function EnemyExplode(context, position, limit) {
    var _this7;

    _classCallCheck(this, EnemyExplode);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(EnemyExplode).call(this, context, position, limit));
    _set(_getPrototypeOf(EnemyExplode.prototype), "size", {
      width: ENEMY_EXPLODE.size.width,
      height: ENEMY_EXPLODE.size.height
    }, _assertThisInitialized(_this7), true), _set(_getPrototypeOf(EnemyExplode.prototype), "sprite", ENEMY_EXPLODE.sprite, _assertThisInitialized(_this7), true);

    _set(_getPrototypeOf(EnemyExplode.prototype), "frames", ENEMY_EXPLODE.frames, _assertThisInitialized(_this7), true);

    return _this7;
  }

  return EnemyExplode;
}(Explode);

var PlayerExplode =
/*#__PURE__*/
function (_Explode2) {
  _inherits(PlayerExplode, _Explode2);

  function PlayerExplode(context, position, limit) {
    var _this8;

    _classCallCheck(this, PlayerExplode);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(PlayerExplode).call(this, context, position, limit));
    _set(_getPrototypeOf(PlayerExplode.prototype), "size", {
      width: PLAYER_EXPLODE.size.width,
      height: PLAYER_EXPLODE.size.height
    }, _assertThisInitialized(_this8), true), _set(_getPrototypeOf(PlayerExplode.prototype), "sprite", PLAYER_EXPLODE.sprite, _assertThisInitialized(_this8), true);

    _set(_getPrototypeOf(PlayerExplode.prototype), "frames", PLAYER_EXPLODE.frames, _assertThisInitialized(_this8), true);

    return _this8;
  }

  return PlayerExplode;
}(Explode); // Exporting enteties




/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ "./src/js/entities.js");
/* harmony import */ var _gui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gui */ "./src/js/gui.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./src/js/input.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./src/js/settings.js");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vector */ "./src/js/vector.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sound */ "./src/js/sound.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Main game object






var SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_3__["default"].scene;

var Game =
/*#__PURE__*/
function () {
  function Game(canvas, user) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.username = user.toUpperCase();
    this.updateRequest;
    this.inputController;
    this.onPause = false;
    this.background;
    this.player;
    this.rebornReady = false;
    this.enemies = [];
    this.attackingEnemies = [];
    this.killed = 0;
    this.maxEnemies;
    this.bullet;
    this.rockets = [];
    this.shots = 2;
    this.maxRockets = 20;
    this.playerBullets = 0;
    this.maxPlayerBullets = 1;
    this.generalEnemyTimer = 0;
    this.generalReady = false;
    this.enemyExplode;
    this.playerExplode;
    this.score = 0;
    this.scoreText;
    this.userScoreText;
    this.highScore = 5000;
    this.highScoreText;
    this.highScoreLabel;
    this.lives = [];
    this.livesCount = SETTINGS.player.lives;
    this.maxLivesCount = SETTINGS.player.maxLives;
    this.addLiveCount = SETTINGS.nextLive;
    this.wavesCount = 1;
    this.waveLabel;
    this.wavesTextLabel;
    this.readyLabel;
    this.pauseLabel;
    this.gameOverLabel;
    this.restartLabel;
    this.gameOver = false;
    this.leaderBoard = [];
    this.clearSceneTimer;
    this.playerRebornTimer;
    this.gameOverTimer;
    this.resetTimer;
    this.disablePause = false;
    this.soundContoller = new _sound__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.allSounds = this.soundContoller.sounds;
  }

  _createClass(Game, [{
    key: "_drawObject",
    // Draw objects
    value: function _drawObject(context, object) {
      context.fillStyle = object.sprite;
      context.fillRect(object.x, object.y, object.width, object.height);
    }
  }, {
    key: "_getRandom",
    value: function _getRandom(min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      rand = Math.floor(rand);
      return rand;
    }
  }, {
    key: "_cloneGeneralGroup",
    value: function _cloneGeneralGroup(generalClone, minionClones) {
      var _this = this;

      // Cloning general only or general with minioins
      // Clone general, set waypoints and add to attacking enemies arr
      var g = new _entities__WEBPACK_IMPORTED_MODULE_0__["GeneralEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](generalClone.position.x, generalClone.position.y));
      g.attack = true;
      g.proto = generalClone;

      var gWays = this._generateWaypoints(g, 'hard');

      g.setWaypoints(gWays);
      this.attackingEnemies.push(g); // Clone minions, set waypoints and add to attacking enemies arr

      var m = [];
      minionClones.forEach(function (minion) {
        var clone = minion;
        var red = new _entities__WEBPACK_IMPORTED_MODULE_0__["RedEnemy"](_this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](clone.position.x, clone.position.y));
        red.attack = true;
        red.proto = clone;
        var offsetX = red.position.x - g.position.x;
        var offsetY = red.position.y - g.position.y;
        g.waypoints.forEach(function (wp) {
          // Set minion waypoints from general ways
          red.waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](wp.x + offsetX, wp.y + offsetY));
        });

        _this.attackingEnemies.push(red);

        m.push(red);
      });
      return {
        general: g,
        minions: m
      };
    }
  }, {
    key: "_genAttack",
    value: function _genAttack(enemies, attackType) {
      if (attackType == 'general') {
        // Generals attack
        var generals = enemies.filter(function (g) {
          if (g instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["GeneralEnemy"] && !g.hide) return true;
        }); // Check alive generals

        if (generals.length) {
          // Attack alive generals
          var active; // ACtive general
          // Get general

          if (generals.length == 2) {
            active = generals[this._getRandom(0, 1)];
          } else {
            active = generals[0];
          } // Get general's minions


          var minions = enemies.filter(function (r) {
            if (r instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["RedEnemy"] && !r.hide && r.general == active) return true;
          });

          if (minions.length >= 2) {
            // Attack with 2 minioins
            var red1 = 0;
            var red2 = 0;

            do {
              red1 = minions[this._getRandom(0, minions.length - 1)];
              red2 = minions[this._getRandom(0, minions.length - 1)];
            } while (red1 == red2);

            var group = this._cloneGeneralGroup(active, [red1, red2]);

            active.hide = true;
            this.enemies.push(group.general);
            red1.hide = true;
            this.enemies.push(group.minions[0]);
            red2.hide = true;
            this.enemies.push(group.minions[1]);
          } else if (minions.length == 1) {
            // Attack with 1 minion
            var red = minions[0];

            var _group = this._cloneGeneralGroup(active, [red]);

            active.hide = true;
            this.enemies.push(_group.general);
            red.hide = true;
            this.enemies.push(_group.minions[0]);
          } else {
            // Attack only general
            var general = this._cloneUnit(active, 'hard');

            active.hide = true;
            this.enemies.push(general);
          }
        } else {
          // Only minions attack
          var _group2 = this._createAttackGroup(enemies, 'red');

          var unit = _group2[this._getRandom(0, _group2.length - 1)];

          if (unit != undefined && _group2.length) {
            unit.hide = true;
            this.enemies.push(this._cloneUnit(unit, 'hard'));
          }
        }
      } else if (attackType == 'single-blue') {
        // Easy attack only one blue enemy                
        var _group3 = this._createAttackGroup(enemies, 'blue');

        var _unit = _group3[this._getRandom(0, _group3.length - 1)]; // if (unit == undefined || !group.length) {
        //     this.attackTimer = undefined;
        //     console.log('Nulleble attacking single blue group');
        //     return false;
        // }


        if (_unit != undefined && _group3.length) {
          _unit.hide = true;
          this.enemies.push(this._cloneUnit(_unit));
        }
      } else if (attackType == 'double-blue') {
        // Easy attack couple enemies
        var _group4 = this._createAttackGroup(enemies, 'blue');

        var id1 = 0;
        var id2 = 0; // Prevent infinite loop

        if (_group4.length >= 2) {
          do {
            id1 = this._getRandom(0, _group4.length - 1);
            id2 = this._getRandom(0, _group4.length - 1);
          } while (id1 == id2);
        } else {
          return false;
        }

        var unit1 = _group4[id1];
        var unit2 = _group4[id2]; // if (unit1 == undefined || unit2 == undefined || !group.length) {
        //     this.attackTimer = undefined;
        //     console.log('Nulleble attack group in double attack');
        //     return false;
        // }

        if (unit1 != undefined && unit2 != undefined) {
          unit1.hide = true;
          this.enemies.push(this._cloneUnit(unit1));
          unit2.hide = true;
          this.enemies.push(this._cloneUnit(unit2));
        }
      } else if (attackType == 'double-blue-single-purple') {
        // Hard attack with couple blue enemies and single purple enemy
        // Blue enemies
        var blueGroup = this._createAttackGroup(enemies, 'blue'); // this array never be is empty


        var _id = 0;
        var _id2 = 0; // Prevent infinite loop

        if (blueGroup.length >= 2) {
          do {
            _id = this._getRandom(0, blueGroup.length - 1);
            _id2 = this._getRandom(0, blueGroup.length - 1);
          } while (_id == _id2);
        } else {
          return false;
        }

        var _unit2 = blueGroup[_id];
        var _unit3 = blueGroup[_id2]; // if (unit1 == undefined || unit2 == undefined || !blueGroup.length) {
        //     this.attackTimer = undefined;
        //     console.log('Nulleble attack group in double blue (2 blue + 1 purple) attack');
        //     return false;
        // }

        if (_unit2 != undefined && _unit3 != undefined && blueGroup.length) {
          _unit2.hide = true;
          this.enemies.push(this._cloneUnit(_unit2));
          _unit3.hide = true;
          this.enemies.push(this._cloneUnit(_unit3));
        } // Purple enemy


        var purpleGroup = this._createAttackGroup(enemies, 'purple');

        var purpleUnit = purpleGroup[this._getRandom(0, purpleGroup.length - 1)]; // if (purpleGroup == undefined || !purpleGroup.length) {
        //     this.attackTimer = undefined;
        //     console.log('Nulleble attack group in purple (2 blue + 1 purple) attack');
        //     return false;
        // }


        if (purpleGroup != undefined && purpleGroup.length) {
          purpleUnit.hide = true;
          this.enemies.push(this._cloneUnit(purpleUnit, 'hard'));
        }
      } else if (attackType == 'single-blue-single-purple') {
        // Hard attack with single blue enemie and single purple enemy
        // Blue enemy          
        var _blueGroup = this._createAttackGroup(enemies, 'blue');

        var _unit4 = _blueGroup[this._getRandom(0, _blueGroup.length - 1)]; // if (unit == undefined || !blueGroup.length) {
        //     this.attackTimer = undefined;
        //     console.log('Nulleble attack group in double blue (2 blue + 1 purple) attack');
        //     return false;
        // }


        if (_unit4 != undefined && _blueGroup.length) {
          _unit4.hide = true;
          this.enemies.push(this._cloneUnit(_unit4));
        } // Purple enemy


        var _purpleGroup = this._createAttackGroup(enemies, 'purple');

        var _purpleUnit = _purpleGroup[this._getRandom(0, _purpleGroup.length - 1)]; // if (purpleUnit == undefined || !purpleGroup.length) {
        //     this.attackTimer = undefined;
        //     console.log('Nulleble attack group in double blue (2 blue + 1 purple) attack');
        //     return false;
        // }


        if (_purpleUnit != undefined && _purpleGroup.length) {
          _purpleUnit.hide = true;
          this.enemies.push(this._cloneUnit(_purpleUnit, 'hard'));
        }
      } else if (attackType == 'single-purple') {
        // Hard attack with single purple enemy
        var _purpleGroup2 = this._createAttackGroup(enemies, 'purple');

        var _purpleUnit2 = _purpleGroup2[this._getRandom(0, _purpleGroup2.length - 1)]; // if (purpleUnit == undefined || !purpleGroup.length) {
        //     this.attackTimer = undefined;
        //     console.log('Nulleble attack group in double blue (2 blue + 1 purple) attack');
        //     return false;
        // }


        if (_purpleUnit2 != undefined && _purpleGroup2.length) {
          _purpleUnit2.hide = true;
          this.enemies.push(this._cloneUnit(_purpleUnit2, 'hard'));
        }
      }

      this.attackTimer = undefined;
    }
  }, {
    key: "_createAttackGroup",
    value: function _createAttackGroup(enemies, type) {
      // Create group units waiting attack
      var group;

      if (type == 'blue') {
        group = enemies.filter(function (en) {
          if (en instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["BlueEnemy"] && !en.hide) return true;
        });
      } else if (type == 'purple') {
        group = enemies.filter(function (en) {
          if (en instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["PurpleEnemy"] && !en.hide) return true;
        });
      } else if (type == 'red') {
        group = enemies.filter(function (en) {
          if (en instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["RedEnemy"] && !en.hide) return true;
        });
      } // Very very bad code for find left or right bordered units


      var minPosition = 1000;
      var maxPosition = 0;
      group.forEach(function (en) {
        if (en.position.x < minPosition) minPosition = en.position.x;
        if (en.position.x > maxPosition) maxPosition = en.position.x;
      });
      group = group.filter(function (en) {
        if (en.position.x == minPosition || en.position.x == maxPosition) return true;
      });
      return group;
    }
  }, {
    key: "_cloneUnit",
    value: function _cloneUnit(clone, mode) {
      // Cloning attack enemy unit, generate waypoints and retern it
      var u;

      if (clone instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["BlueEnemy"]) {
        u = new _entities__WEBPACK_IMPORTED_MODULE_0__["BlueEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](clone.position.x, clone.position.y));
      } else if (clone instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["PurpleEnemy"]) {
        u = new _entities__WEBPACK_IMPORTED_MODULE_0__["PurpleEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](clone.position.x, clone.position.y));
      } else if (clone instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["GeneralEnemy"]) {
        u = new _entities__WEBPACK_IMPORTED_MODULE_0__["GeneralEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](clone.position.x, clone.position.y));
      } else if (clone instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["RedEnemy"]) {
        u = new _entities__WEBPACK_IMPORTED_MODULE_0__["RedEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](clone.position.x, clone.position.y));
      }

      u.attack = true;
      u.proto = clone;
      var ways;

      if (!mode) {
        ways = this._generateWaypoints(u, 'easy');
      } else {
        ways = this._generateWaypoints(u, 'hard');
      }

      u.setWaypoints(ways);
      this.attackingEnemies.push(u);
      return u;
    }
  }, {
    key: "_generateWaypoints",
    value: function _generateWaypoints(unit, mode) {
      // Generate and return enemy waypoints
      var waypoints = [];
      var ways = mode == 'easy' ? ways = this._getRandom(4, 6) : ways = this._getRandom(5, 8); // Generate first waypoint

      var first = new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](0, 0); // First x position

      if (unit.position.x <= 100) {
        // Move left easy      
        first.x = this._getRandom(0, unit.position.x - unit.size.width);
      } else if (unit.position.x > 101 && unit.position.x <= 175) {
        // Move left hard
        first.x = this._getRandom(unit.size.width * 2, unit.position.x - unit.size.width);
      } else if (unit.position.x > 175 && unit.position.x <= 275) {
        //Move roght hard
        first.x = this._getRandom(unit.size.width * 2, unit.position.x + unit.size.width);
      } else if (unit.position.x > 275) {
        // Move right easy
        first.x = this._getRandom(unit.size.width, unit.position.x + unit.size.width);
      } // First y position


      if (unit.position.y == 220) {
        // Bottom blue enemy position in y
        first.y = this._getRandom(unit.position.y, 300);
      } else if (unit.position.y == 190) {
        // Blue middle row enemy position in y
        first.y = this._getRandom(unit.position.y + unit.size.height * 3, 300);
      } else if (unit.position.y == 160) {
        // Blue top row enemy position in y
        first.y = this._getRandom(unit.position.y + unit.size.height * 5, 300);
      } else if (unit.position.y == 130) {
        // Purple enemy position in y
        first.y = this._getRandom(unit.position.y + unit.size.height * 7, 300);
      } else if (unit.position.y == 100) {
        // Red enemy position in y
        first.y = this._getRandom(unit.position.y + unit.size.height * 9, 300);
      } else if (unit.position.y == 75) {
        first.y = this._getRandom(unit.position.y + unit.size.height * 11, 300);
      }

      waypoints.push(first); // Aimed fire waypoint

      var offsetX = 50; // Target offset in x axis

      var offsetY = 120; // Target offset in y axis
      // Target position

      var target = this.player.position;
      waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](target.x + this._getRandom(offsetX * -1, offsetX), unit.position.y + this._getRandom(120, 180)));
      offsetY = 180; // Add another waypoints (0 and 1 element we already using, start with 2 index)

      for (var i = 2; i < ways; i++) {
        waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](target.x + this._getRandom(offsetX * -1, offsetX), unit.position.y + this._getRandom(offsetY, offsetY)));
        offsetX += 50;
        offsetY += 50;
      } // Add tail waypoints for overscreen hide unit


      waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](this.player.position.x, 650));

      if (unit.position.x <= 150) {
        waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](-40, 650));
        waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](-40, 100));
        waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](unit.proto.position.x, unit.proto.position.y));
      } else {
        waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](440, 650));
        waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](440, 100));
        waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](unit.proto.position.x, unit.proto.position.y));
      } // console.log(waypoints);


      return waypoints;
    }
  }, {
    key: "_genNewWave",
    value: function _genNewWave() {
      var _this2 = this;

      // Generate new enemy wave (just set hide prop in false on an each enemy object) and updatee wave counter
      if (this.killed == this.maxEnemies) {
        this.enemies.forEach(function (enemy) {
          enemy.hide = false;
        }); // Change waves counter

        this.wavesCount++;
        this.wavesTextLabel.setText(": ".concat(this.wavesCount)); // Get enemy attack timer

        this.generalEnemyTimer = 0; // Clear killed counter

        this.killed = 0; // Start enemies attacking timer

        this.attackTimer = setTimeout(function () {
          _this2._genAttack(_this2.enemies, 'single-blue');
        }, 1000);
        this.disablePause = false;
      }
    }
  }, {
    key: "_gameOver",
    value: function _gameOver() {
      if (!this.gameOver && !this.onPause) {
        clearTimeout(this.gameOverTimer);
        this.gameOverTimer = undefined; // Check score

        this._checkRecord(); // Generate leaderboard


        this._createLeaderboard();

        this.gameOver = true;
      }
    }
  }, {
    key: "_checkRecord",
    value: function _checkRecord() {
      // Compare final score with leaderboard object and add score and user into if need
      this.userScoreText = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](80, 490), "".concat(this.username, ", YOUR SCORE - ").concat(this.score, ", WAVES - ").concat(this.wavesCount), 'red', 250, 17);
      var leaders = SETTINGS.leaderboard;
      var add = true;
      var duplicate = 0;

      for (var i = 0; i < leaders.length; i++) {
        var e = leaders[i];

        if (e.user == this.username && this.score < e.score) {
          add = false;
        } else if (e.user == this.username) {
          duplicate = i;
        }
      } // Add or detec duplicate username and rewrite his score if need


      if (add && !duplicate) {
        leaders.push({
          user: this.username,
          score: this.score
        });
      } else if (add && duplicate) {
        leaders[duplicate].score = this.score;
      } // Sort by score


      leaders.sort(function (a, b) {
        if (a.score > b.score) return -1;
        if (a.score < b.score) return 1;
      }); // Rewrite leaderboard obj

      SETTINGS.leaderboard = leaders.slice(0, 10);
    }
  }, {
    key: "_playerCollision",
    value: function _playerCollision(opponent) {
      // Detect player collision with opponent, changing lives and game over init
      if (this.player.collision(opponent) && !this.player.hide) {
        // Explode animation
        if (opponent instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["BlueEnemy"] || opponent instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["PurpleEnemy"] || opponent instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["RedEnemy"] || opponent instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["GeneralEnemy"]) {
          // Collision with attacking enemy
          opponent.kill();
          this.killed++; // Delete this unit from attacking array

          this.attackingEnemies.splice(this.attackingEnemies.indexOf(opponent), 1); // Delete this unit from enemies array

          this.enemies.splice(this.enemies.indexOf(opponent), 1);
        } // Hide player


        this.player.hide = true; // Ready to reborning state

        this.rebornReady = true; // Player explode animation                    

        this.playerExplode.setPosition(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](this.player.position.x, this.player.position.y));
        this.playerExplode.hide = false; // Remove live

        this.livesCount--;
        var lives = this.lives.filter(function (l) {
          if (!l.hide) return true;
        });
        lives.pop().hide = true; // Play destroy sound

        this.soundContoller.play(this.allSounds.playerExplode, 0.5);
      }
    }
  }, {
    key: "_enemyCollision",
    value: function _enemyCollision(enemy) {
      // Detect enemy collision with player's bullet
      // Check attacking enemy
      if (enemy.collision(this.bullet) && !enemy.hide) {
        // Collision with player bullet
        this.bullet.setPosition(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](1000, 1000)); // Relocate bullet
        // Explode animation

        this.enemyExplode.setPosition(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](enemy.position.x, enemy.position.y));
        this.enemyExplode.hide = false;

        if (enemy.attack) {
          // Check attacking enemy
          enemy.kill();
          this.killed++; // Delete this unit from attacking array

          this.attackingEnemies.splice(this.attackingEnemies.indexOf(enemy), 1); // Delete this unit from enemies array

          this.enemies.splice(this.enemies.indexOf(enemy), 1); // Change score

          this.score += enemy.cost * 2;
          this.scoreText.setText("SCORE: ".concat(this.score));
        } else {
          enemy.hide = true;
          this.killed++; // Change score

          this.score += enemy.cost;
          this.scoreText.setText("SCORE: ".concat(this.score));
        }

        if (this.score > this.highScore) this.highScoreText.setText(this.score); // Add player's live

        if (this.score > this.addLiveCount) {
          this.addLiveCount *= 2;

          if (this.livesCount < this.maxLivesCount) {
            this.lives[this.livesCount].hide = false;
            this.livesCount++;
          }
        } // PLay sound


        this.soundContoller.play(this.allSounds.enemyExplode, 0.1);
      }
    }
  }, {
    key: "_createLeaderboard",
    value: function _createLeaderboard() {
      // Leaderboard
      var leadersPosition = new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](130, 240);
      this.leaderBoard.push(new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, leadersPosition, 'L E A D E R B O A R D', 'orange', 150, 17));
      leadersPosition = leadersPosition.add(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](0, 10));

      for (var i in SETTINGS.leaderboard) {
        leadersPosition = leadersPosition.add(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](0, 20));
        var userPos = leadersPosition.add(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](-20, 0));
        var user = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, userPos, "".concat(SETTINGS.leaderboard[i].user), 'purple', 100, 17);
        this.leaderBoard.push(user);
        var scorePos = leadersPosition.add(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](60, 0));
        var score = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, scorePos, "SCORE - ".concat(SETTINGS.leaderboard[i].score), 'purple', 200, 17);
        this.leaderBoard.push(score);
      }
    } // Build initial state game scene and collect game objects

  }, {
    key: "_build",
    value: function _build() {
      var _this3 = this;

      // Get enemy attack timer
      this.generalEnemyTimer = 0; // Create background

      this.background = new _gui__WEBPACK_IMPORTED_MODULE_1__["Background"](this.canvas); // Build input controller

      this.inputController = new _input__WEBPACK_IMPORTED_MODULE_2__["default"](window); // Listen input events

      this.inputController.listen(); // Draw background

      this.context.fillStyle = SETTINGS.background.sprite;
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height); // Create GUI
      // Player score

      this.scoreText = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](13, 25), "SCORE: ".concat(this.score), SETTINGS.text.score.color, SETTINGS.text.score.width, 15); // High score

      this.highScoreLabel = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](143, 25), "HIGH: ", 'red', 50);
      this.highScoreText = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](186, 25), "".concat(this.highScore), SETTINGS.text.highScore.color, SETTINGS.text.highScore.width, 15); // Player lives

      var livesPosition = new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](245, 12);

      for (var i = 0; i < this.maxLivesCount; i++) {
        livesPosition = livesPosition.add(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](15, 0));
        var l = new _gui__WEBPACK_IMPORTED_MODULE_1__["PlayerLive"](this.context, livesPosition);
        this.lives.push(l);
        if (i >= this.livesCount) l.hide = true;
      } // Create wave sprite label


      this.waveLabel = new _gui__WEBPACK_IMPORTED_MODULE_1__["WaveLabel"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](350, 14)); // Create waves count

      this.wavesTextLabel = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](365, 25), ": ".concat(this.wavesCount), SETTINGS.text.wave.color, SETTINGS.text.wave.width, 15); // Ready label

      this.readyLabel = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](170, 350), 'R E A D Y', 'red', 100, 17); // Pause label

      this.pauseLabel = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](170, 350), 'P A U S E', 'red', 100, 17); // Game over label

      this.gameOverLabel = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](135, 160), 'G A M E   O V E R', 'red', 150, 17); // Restart label

      this.restartLabel = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](130, 200), 'PRESS SPACE FOR RESTART', 'white', 150, 15); // Create player object       

      this.player = new _entities__WEBPACK_IMPORTED_MODULE_0__["Player"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](185, 560)); // Using overlimits coordinates to prevent bullet update method

      this.bullet = new _entities__WEBPACK_IMPORTED_MODULE_0__["Bullet"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](1000, 1000)); // Create enemy rockets pool

      for (var _i = 0; _i < this.maxRockets; _i++) {
        this.rockets.push(new _entities__WEBPACK_IMPORTED_MODULE_0__["Rocket"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](1300, 1300)));
      } // Create enemy xplode object


      this.enemyExplode = new _entities__WEBPACK_IMPORTED_MODULE_0__["EnemyExplode"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](220, 220), 2);
      this.enemyExplode.hide = true; // Hide explode for optimize
      // Create player's explode object

      this.playerExplode = new _entities__WEBPACK_IMPORTED_MODULE_0__["PlayerExplode"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](250, 250), 5);
      this.playerExplode.hide = true; // Hide xplode
      // Create eneies object and collect them in array

      var nextPositionX = SETTINGS.blueEnemies.position.x;
      var nextPositionY = SETTINGS.blueEnemies.position.y;
      var countEnemies = SETTINGS.blueEnemies.count;
      var divisions = SETTINGS.blueEnemies.divisions; // Build blue enemies

      for (var _i2 = 0; _i2 < countEnemies; _i2++) {
        var x = nextPositionX;
        nextPositionX += SETTINGS.blueEnemies.position.width;

        for (var j = 0; j < divisions; j++) {
          var y = nextPositionY + j * 30;
          var enemy = new _entities__WEBPACK_IMPORTED_MODULE_0__["BlueEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](x, y));
          this.enemies.push(enemy);
        }
      } // Build purple enemies


      nextPositionX = SETTINGS.purpleEnemies.position.x;
      nextPositionY = SETTINGS.purpleEnemies.position.y;
      countEnemies = SETTINGS.purpleEnemies.count;

      for (var _i3 = 0; _i3 < countEnemies; _i3++) {
        var _enemy = new _entities__WEBPACK_IMPORTED_MODULE_0__["PurpleEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](nextPositionX, nextPositionY));

        nextPositionX += SETTINGS.purpleEnemies.position.width;
        this.enemies.push(_enemy);
      } // Build general enemies


      nextPositionX = SETTINGS.generalEnemies.position.x;
      nextPositionY = SETTINGS.generalEnemies.position.y;
      countEnemies = SETTINGS.generalEnemies.count;
      var generals = [];

      for (var _i4 = 0; _i4 < countEnemies; _i4++) {
        var _enemy2 = new _entities__WEBPACK_IMPORTED_MODULE_0__["GeneralEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](nextPositionX, nextPositionY));

        nextPositionX += SETTINGS.generalEnemies.position.width + SETTINGS.generalEnemies.position.spacing;
        this.enemies.push(_enemy2);
        generals.push(_enemy2);
      } // Build red enemies


      nextPositionX = SETTINGS.redEnemies.position.x;
      nextPositionY = SETTINGS.redEnemies.position.y;
      countEnemies = SETTINGS.redEnemies.count;
      var div = countEnemies / SETTINGS.generalEnemies.count;

      for (var _i5 = 0; _i5 < countEnemies; _i5++) {
        var _enemy3 = new _entities__WEBPACK_IMPORTED_MODULE_0__["RedEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](nextPositionX, nextPositionY));

        nextPositionX += SETTINGS.redEnemies.position.width;
        this.enemies.push(_enemy3); // Add general

        if (_i5 < div) {
          _enemy3.general = generals[0];
        } else {
          _enemy3.general = generals[1];
        }
      } // Create regular waypoints for all enemies


      this.enemies.forEach(function (enemy) {
        var x = enemy.position.x;
        var y = enemy.position.y; // Add regular waypoints

        enemy.setWaypoints(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](x - 20, y), new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](x + 30, y));
      }); // Start enemies attacking timer

      this.attackTimer = setTimeout(function () {
        _this3._genAttack(_this3.enemies, 'single-blue');
      }, 1000);
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.background = null;
      this.player = null;
      this.rebornReady = false;
      this.enemies = [];
      this.attackingEnemies = [];
      this.killed = 0;
      this.bullet = null;
      this.rockets = [];
      this.generalEnemyTimer = 0;
      this.generalReady = false;
      this.enemyExplode = null;
      this.playerExplode = null;
      this.score = 0;
      this.scoreText = null;
      this.userScoreText = null;
      this.highScoreText = null;
      this.highScoreLabel = null;
      this.lives = [];
      this.livesCount = SETTINGS.player.lives;
      this.maxLivesCount = SETTINGS.player.maxLives;
      this.addLiveCount = SETTINGS.nextLive;
      this.wavesCount = 1;
      this.waveLabel = null;
      this.wavesTextLabel = null;
      this.readyLabel = null;
      this.pauseLabel = null;
      this.gameOverLabel = null;
      this.restartLabel = null;
      this.gameOver = false;
      this.leaderBoard = [];
      clearTimeout(this.attackTimer);
      this.attackTimer = undefined;
      clearTimeout(this.clearSceneTimer);
      this.clearSceneTimer = undefined;
      clearTimeout(this.playerRebornTimer);
      this.playerRebornTimer = undefined;
      clearTimeout(this.gameOverTimer);
      this.gameOverTimer = undefined;
      clearTimeout(this.resetTimer);
      this.resetTimer = undefined;
    } // Update all game objects

  }, {
    key: "_update",
    value: function _update() {
      var _this4 = this;

      if (!this.onPause && !this.gameOver || this.disablePause) {
        // Set pause status
        this.onPause = this.inputController.pause; // Update timer for general enemy attack

        this.generalEnemyTimer++; // Rendering background

        this.background.update(); // Rendering GUI

        this.scoreText.update();
        this.highScoreLabel.update();
        this.highScoreText.update(); // PLayer lives

        this.lives.forEach(function (l) {
          l.update();
        }); // Rendering wave label

        this.waveLabel.update();
        this.wavesTextLabel.update(); // Set show status for pause label

        if (!this.pauseLabel.show) this.pauseLabel.show = true; // Set show status for game overs

        if (!this.gameOverLabel.show) this.gameOverLabel.show = true;
        if (!this.restartLabel.show) this.restartLabel.show = true; // Draw, update state player object and check coliisions

        if (!this.player.hide) {
          if (this.inputController.action == 'left') {
            // Move left
            this.player.moveLeft();
          } else if (this.inputController.action == 'right') {
            // Move right
            this.player.moveRight();
          } else {
            // Idle state
            this.player.update();
          }
        } else {
          if (this.rebornReady) {
            if (this.livesCount) {
              this.playerRebornTimer = setTimeout(function () {
                _this4.player.hide = false;
              }, 5000);
              this.player.setPosition(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](185, 560));
              this.rebornReady = false;
            } else {
              // Activate game over state
              this.gameOverTimer = setTimeout(function () {
                _this4._gameOver();
              }, 2000);
            }
          }
        } // Clear reborn player timer


        if (!this.player.hide && this.playerRebornTimer != undefined) {
          clearTimeout(this.playerRebornTimer);
          this.playerRebornTimer = undefined;
        } // Fire player bullet


        if (this.inputController.fire) {
          if (this.bullet.ready && !this.player.hide) {
            // Set bullet position near player
            this.bullet.setPosition(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](this.player.position.x + 14, this.player.position.y - 5)); // Play sound

            this.soundContoller.play(this.allSounds.fire, 0.9);
          }
        } // Rendering move bullet


        this.bullet.update(); // Rendering enemy rockets

        this.rockets.forEach(function (rocket) {
          rocket.update();
        }); // Rendering enemy explode

        this.enemyExplode.update(); // Rendering player explode

        this.playerExplode.update(); // Calc hidden (a.k. killed) purple enemies (for generate attack)

        var killedPurpleEnemies = this.enemies.filter(function (en) {
          if (en instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["PurpleEnemy"] && en.hide) return true;
        });
        var maxPurpleEnemies = SETTINGS.purpleEnemies.count * SETTINGS.purpleEnemies.divisions; // Calc killed blue enemies

        var killedBlueEnemies = this.enemies.filter(function (en) {
          if (en instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["BlueEnemy"] && en.hide) return true;
        });
        var maxBlueEnemies = SETTINGS.blueEnemies.count * SETTINGS.blueEnemies.divisions; // Calc killed red enemies count
        // let killedRedEnemies = this.enemies.filter((en) => {
        //     if (en instanceof RedEnemy && en.hide) return true;
        // });
        // let maxRedEnemies = SETTINGS.redEnemies.count * SETTINGS.redEnemies.divisions;
        // Calc killd generals count
        // let killedGenerals = this.enemies.filter((en) => {
        //     if (en instanceof GeneralEnemy && en.hide) return true;
        // });
        // let maxGeneralEnemy = SETTINGS.generalEnemies.count * SETTINGS.generalEnemies.divisions;
        // Attacking if player is active and visible

        if (!this.player.hide) {
          // Prepare attack for general enemy            
          if (this.generalEnemyTimer % 1000 == 0) this.generalReady = true; // Geerate type attack and run attack enemies

          if (this.generalReady && !this.attackingEnemies.length && this.attackTimer == undefined) {
            // Start general attack
            this.generalEnemyTimer = 0;
            this.generalReady = false;
            clearTimeout(this.attackTimer);
            this.attackTimer = setTimeout(function () {
              _this4._genAttack(_this4.enemies, 'general');
            }, 1000);
          } else if (!this.attackingEnemies.length && this.attackTimer == undefined && killedPurpleEnemies.length && killedPurpleEnemies.length != maxPurpleEnemies) {
            // Start attack a purple enemy
            if (killedBlueEnemies.length == maxBlueEnemies) {
              // All blue enemies was killed, attack single purple
              clearTimeout(this.attackTimer);
              this.attackTimer = setTimeout(function () {
                _this4._genAttack(_this4.enemies, 'single-purple');
              }, 1000);
            } else if (killedBlueEnemies.length == maxBlueEnemies - 1) {
              // Attack purple enemy with single blue
              clearTimeout(this.attackTimer);
              this.attackTimer = setTimeout(function () {
                _this4._genAttack(_this4.enemies, 'single-blue-single-purple');
              }, 1000);
            } else {
              // Attack single purple enemy with couple blue enemies
              clearTimeout(this.attackTimer);
              this.attackTimer = setTimeout(function () {
                _this4._genAttack(_this4.enemies, 'double-blue-single-purple');
              }, 1000);
            }
          } else if (!this.attackingEnemies.length && this.attackTimer == undefined && killedBlueEnemies.length != maxBlueEnemies) {
            if (killedBlueEnemies.length <= 5 || killedBlueEnemies.length == maxBlueEnemies - 1) {
              // Если атакующих нет и таймер пуст - заного запускаем атаку
              clearTimeout(this.attackTimer);
              this.attackTimer = setTimeout(function () {
                _this4._genAttack(_this4.enemies, 'single-blue');
              }, 1000);
            } else if (killedBlueEnemies.length > 5) {
              // Start attack with couple blue enemies
              clearTimeout(this.attackTimer);
              this.attackTimer = setTimeout(function () {
                _this4._genAttack(_this4.enemies, 'double-blue');
              }, 1000);
            }
          }
        } // Если останется один синий враг нужно атаковать только им одним
        // Draw and update state enemies  and check collisions


        this.enemies.forEach(function (enemy) {
          // if (!this.livesCount) {
          //     this.clearSceneTimer = setTimeout(() => {
          //         if (!this.gameOver) {
          //             enemy.hide = true;
          //         }
          //     }, 1500);
          // }
          enemy.update(); // Rendering enemy all rockets

          enemy.rockets.forEach(function (r) {
            r.update(); // Detect rocket collision with player

            _this4._playerCollision(r);
          }); // Detect enemy collisions    

          _this4._enemyCollision(enemy);
        }); // Attacking enemies behavior 

        this.attackingEnemies.forEach(function (enemy) {
          if (!enemy.attack) {
            // Remove from attack array
            _this4.attackingEnemies.splice(_this4.attackingEnemies.indexOf(enemy), 1);

            if (_this4.enemies.indexOf(enemy) != -1) {
              // Remove attack enemy from enemies
              _this4.enemies.splice(_this4.enemies.indexOf(enemy), 1);
            } // If enemy arrived in last waypoint and still visible (not shooted) will show his prototype clone


            if (!enemy.hide) {
              var clone = enemy.proto;
              clone.hide = false;
            }
          } // Detect attack enemy collisions                


          _this4._enemyCollision(enemy); // Detect collisions with attacking enemy


          _this4._playerCollision(enemy); // Enemy fire control (use shots counter)


          if (enemy.objective > 0 && enemy.objective <= enemy.shots) {
            // if (this.rockets[enemy.objective].ready) {
            //     this.rockets[enemy.objective].setPosition(new Vector2d(
            //         enemy.position.x + 10, enemy.position.y + 25
            //     ));
            // }
            if (enemy.proto.rockets[enemy.objective].ready) {
              // Start rockets on proto attacking enemy
              enemy.proto.rockets[enemy.objective].setPosition(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](enemy.position.x + 10, enemy.position.y + 25)); // play enemy rocket sound

              _this4.soundContoller.play(_this4.allSounds.enemyFire, 0.1);
            }
          } // if (enemy.objective == 1 && this.rockets[0].ready) {
          //     console.log('enemy fire');
          //     this.rockets[0].setPosition(new Vector2d(
          //         enemy.position.x + 10, enemy.position.y + 25
          //     ))
          // }

        }); // Generate new wave if you great shooter )

        if (this.killed == this.maxEnemies && this.livesCount) {
          this.disablePause = true;
          setTimeout(function () {
            _this4._genNewWave();
          }, 3000); // See ready label bottom

          this.readyLabel.update();
        }
      } else if (this.gameOver) {
        // Gameover state
        // Clear canvas
        this.context.clearRect(0, 0, this.canvas.wave, this.canvas.height); // Render background

        this.background.update(); // Render game over objects

        this.gameOverLabel.update();
        this.restartLabel.update(); // Render leaderboard

        this.leaderBoard.forEach(function (l) {
          l.update();
        }); // Render your result (score + waves)

        this.userScoreText.update(); // // Restart input detect

        if (this.inputController.restartReady) {
          // Dextroy scene
          this._destroy(); // Build new scene


          this._build();
        }
      } else if (this.onPause && !this.disablePause) {
        // Pause state
        // Set pause status
        this.onPause = this.inputController.pause; // Rendering pause label

        if (this.pauseLabel.show) {
          this.pauseLabel.update();
          this.pauseLabel.show = false;
        } // Continue calc time if game on pause
        // let curTime = new Date().getTime();
        // this.prevFrameTime = curTime;


        clearTimeout(this.attackTimer);
        this.attackTimer = undefined;
      }

      this.updateRequest = window.requestAnimationFrame(this._update.bind(this));
    } // Start game loop

  }, {
    key: "start",
    value: function start() {
      // Build game
      this._build(); // setInterval(() => { console.log('int') }, 10000);
      // Start game loop


      this._update();
    } // Stop game update and destroy game scene

  }, {
    key: "_stop",
    value: function _stop() {// window.cancelAnimationFrame(this.updateRequest);
    }
  }, {
    key: "maxEnemies",
    get: function get() {
      return SETTINGS.blueEnemies.count * SETTINGS.blueEnemies.divisions + SETTINGS.purpleEnemies.count * SETTINGS.purpleEnemies.divisions + SETTINGS.redEnemies.count * SETTINGS.redEnemies.divisions + SETTINGS.generalEnemies.count * SETTINGS.generalEnemies.divisions;
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/js/gui.js":
/*!***********************!*\
  !*** ./src/js/gui.js ***!
  \***********************/
/*! exports provided: Background, Text, PlayerLive, WaveLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerLive", function() { return PlayerLive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaveLabel", function() { return WaveLabel; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./src/js/settings.js");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector */ "./src/js/vector.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].gui;
var SCENE = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].scene;

var Text =
/*#__PURE__*/
function () {
  // Class for a text labels
  function Text(context, position, text, color, width, height) {
    _classCallCheck(this, Text);

    this.position = position;
    this.context = context;
    this.text = text;
    this.width = width;
    this.color = color;
    this.height = height;
    this.show = true;
  }

  _createClass(Text, [{
    key: "update",
    value: function update() {
      this._draw();
    }
  }, {
    key: "setText",
    value: function setText(text) {
      this.text = text;
    }
  }, {
    key: "_draw",
    value: function _draw() {
      this.context.textAlign = 'start';
      this.context.fillStyle = this.color;
      this.context.font = "".concat(this.height, "px ").concat(SCENE.font);
      this.context.fillText(this.text, this.position.x, this.position.y, this.width);
    }
  }]);

  return Text;
}();

var SpriteLabel =
/*#__PURE__*/
function () {
  // Base class for a sprite based labels
  function SpriteLabel(context, position) {
    _classCallCheck(this, SpriteLabel);

    this.context = context;
    this.position = position;
    this.sprite;
    this.size = {
      width: 10,
      height: 10
    };
    this.hide = false;
  }

  _createClass(SpriteLabel, [{
    key: "update",
    value: function update() {
      if (!this.hide) this._draw();
    }
  }, {
    key: "_draw",
    value: function _draw() {
      this.context.save();
      this.context.drawImage(this.sprite, 0, 0, this.size.width, this.size.height, this.position.x, this.position.y, this.size.width, this.size.height);
      this.context.restore();
    }
  }]);

  return SpriteLabel;
}();

var PlayerLive =
/*#__PURE__*/
function (_SpriteLabel) {
  _inherits(PlayerLive, _SpriteLabel);

  // Plaeyer lives represent object
  function PlayerLive(context, position) {
    var _this;

    _classCallCheck(this, PlayerLive);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlayerLive).call(this, context, position));

    _set(_getPrototypeOf(PlayerLive.prototype), "context", context, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(PlayerLive.prototype), "position", position, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(PlayerLive.prototype), "sprite", SETTINGS.live.sprite, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(PlayerLive.prototype), "size", {
      width: SETTINGS.live.width,
      height: SETTINGS.live.height
    }, _assertThisInitialized(_this), true);

    return _this;
  }

  return PlayerLive;
}(SpriteLabel);

var WaveLabel =
/*#__PURE__*/
function (_SpriteLabel2) {
  _inherits(WaveLabel, _SpriteLabel2);

  function WaveLabel(context, position) {
    var _this2;

    _classCallCheck(this, WaveLabel);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(WaveLabel).call(this, context, position));

    _set(_getPrototypeOf(WaveLabel.prototype), "context", context, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(WaveLabel.prototype), "position", position, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(WaveLabel.prototype), "sprite", SETTINGS.wave.sprite, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(WaveLabel.prototype), "size", {
      width: SETTINGS.wave.width,
      height: SETTINGS.wave.height
    }, _assertThisInitialized(_this2), true);

    return _this2;
  }

  return WaveLabel;
}(SpriteLabel);

var Star =
/*#__PURE__*/
function () {
  // Class for backgorund star
  function Star(context, position) {
    _classCallCheck(this, Star);

    this.position = position;
    this.context = context;
    this.size = {
      width: 2,
      height: 2
    };
    this.sprite;
    this.hide = false;
    this.speed = 0.8;
    this.limitBottom = SCENE.background.size.height + 10;
  }

  _createClass(Star, [{
    key: "update",
    value: function update() {
      if (this.position.y <= this.limitBottom) {
        this.position.y = this.position.y + this.speed;
      } else {
        this.setPosition(new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](-50, -50));
      }

      this._draw();
    }
  }, {
    key: "_draw",
    value: function _draw() {
      if (this.hide) {
        this.context.fillStyle = 'rgba(0, 0, 0, 0)';
      } else {
        this.context.fillStyle = this.sprite;
      }

      this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this.position = position;
    }
  }]);

  return Star;
}();

var Background =
/*#__PURE__*/
function () {
  // Background gui class
  function Background(canvas) {
    _classCallCheck(this, Background);

    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.fill = SETTINGS.background.sprite;
    this.stars = this._genStars();
  }

  _createClass(Background, [{
    key: "update",
    value: function update() {
      var _this3 = this;

      this._draw(this.context); // Draw stars and moving emulation )


      this.stars.forEach(function (star) {
        if (star.position.x == -50) {
          var x = _this3._getRandom(5, _this3.canvas.width - 5);

          star.setPosition(new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](x, -10));
        }

        star.update();
      });
    }
  }, {
    key: "_draw",
    value: function _draw(context) {
      context.fillStyle = this.fill;
      context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "_genStars",
    value: function _genStars() {
      // Generate stars
      var stars = [];
      var sprites = ['green', 'red', 'purple', 'white', 'blue'];

      var count = this._getRandom(20, 35);

      for (var i = 0; i < count; i++) {
        var x = this._getRandom(5, this.canvas.width - 5);

        var y = this._getRandom(5, this.canvas.height - 5);

        var s = new Star(this.context, new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](x, y));
        s.sprite = sprites[this._getRandom(0, sprites.length - 1)];
        stars.push(s);
      }

      return stars;
    }
  }, {
    key: "_getRandom",
    value: function _getRandom(min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      rand = Math.floor(rand);
      return rand;
    }
  }]);

  return Background;
}();



/***/ }),

/***/ "./src/js/input.js":
/*!*************************!*\
  !*** ./src/js/input.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./src/js/settings.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// User input object
 // User input provider class

var InputController =
/*#__PURE__*/
function () {
  function InputController(view) {
    _classCallCheck(this, InputController);

    this.view = view;
    this.action = 'idle';
    this.fire = false; // Player fire control state BAD

    this.pause = false; // Game pause state BAD

    this.restartReady = false;
  }

  _createClass(InputController, [{
    key: "keyDown",
    value: function keyDown(e) {
      var keys = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].input.keyboard.actions;
      var k = e.which || e.keyCode;

      if (keys[k] !== undefined) {
        e.preventDefault();

        if (keys[k] == 'fire') {
          this.fire = true;
        } else if (keys[k] == 'pause') {
          this.pause === true ? this.pause = false : this.pause = true;
        } else if (keys[k] == 'restart') {
          this.restartReady === true ? this.restartReady = false : this.restartReady = true;
        } else {
          this.action = keys[k];
        }
      }
    }
  }, {
    key: "keyUp",
    value: function keyUp(e) {
      var keys = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].input.keyboard.actions;
      var k = e.which || e.keyCode;

      if (keys[k] !== undefined) {
        e.preventDefault();

        if (keys[k] == 'fire') {
          this.fire = false;
        } else {
          this.action = 'idle';
        }
      }
    }
  }, {
    key: "listen",
    value: function listen() {
      this.view.addEventListener('keydown', function (e) {
        this.keyDown(e);
      }.bind(this), false);
      this.view.addEventListener('keyup', function (e) {
        this.keyUp(e);
      }.bind(this), false);
    }
  }]);

  return InputController;
}(); // Export controller


/* harmony default export */ __webpack_exports__["default"] = (InputController);

/***/ }),

/***/ "./src/js/settings.js":
/*!****************************!*\
  !*** ./src/js/settings.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_player_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/player.png */ "./src/img/player.png");
/* harmony import */ var _img_player_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_player_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_b_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/b_sheet_80_20.png */ "./src/img/b_sheet_80_20.png");
/* harmony import */ var _img_b_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_b_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_p_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/p_sheet_80_20.png */ "./src/img/p_sheet_80_20.png");
/* harmony import */ var _img_p_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_p_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_r_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/r_sheet_80_20.png */ "./src/img/r_sheet_80_20.png");
/* harmony import */ var _img_r_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_r_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_g_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/g_sheet_80_20.png */ "./src/img/g_sheet_80_20.png");
/* harmony import */ var _img_g_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_g_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_e_exp_sheet_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/e_exp_sheet.png */ "./src/img/e_exp_sheet.png");
/* harmony import */ var _img_e_exp_sheet_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_e_exp_sheet_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_player_explode_big_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/player_explode_big.png */ "./src/img/player_explode_big.png");
/* harmony import */ var _img_player_explode_big_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_player_explode_big_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_live_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/live.png */ "./src/img/live.png");
/* harmony import */ var _img_live_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_live_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_wave_sprite_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/wave_sprite.png */ "./src/img/wave_sprite.png");
/* harmony import */ var _img_wave_sprite_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_wave_sprite_png__WEBPACK_IMPORTED_MODULE_8__);
// Settings for game objects and enteties








 // Sprites

var player = new Image(30, 30);
player.src = _img_player_png__WEBPACK_IMPORTED_MODULE_0___default.a;
var b_sheet = new Image();
b_sheet.src = _img_b_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_1___default.a;
var p_sheet = new Image();
p_sheet.src = _img_p_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_2___default.a;
var r_sheet = new Image();
r_sheet.src = _img_r_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_3___default.a;
var g_sheet = new Image();
g_sheet.src = _img_g_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_4___default.a;
var en_exp = new Image();
en_exp.src = _img_e_exp_sheet_png__WEBPACK_IMPORTED_MODULE_5___default.a;
var pl_exp = new Image();
pl_exp.src = _img_player_explode_big_png__WEBPACK_IMPORTED_MODULE_6___default.a;
var pl_live = new Image(15, 15);
pl_live.src = _img_live_png__WEBPACK_IMPORTED_MODULE_7___default.a;
var en_wave = new Image(20, 20);
en_wave.src = _img_wave_sprite_png__WEBPACK_IMPORTED_MODULE_8___default.a;
var SETTINGS = {
  // Input settings
  input: {
    keyboard: {
      actions: {
        // Keycodes on actions
        '37': 'left',
        '39': 'right',
        '38': 'fire',
        '27': 'pause',
        '32': 'restart'
      }
    }
  },
  // GUI settings
  gui: {
    background: {
      sprite: 'black'
    },
    live: {
      sprite: pl_live,
      width: 15,
      height: 15
    },
    wave: {
      sprite: en_wave,
      width: 15,
      height: 15
    }
  },
  // Sound settings
  audio: {
    sounds: {
      fire: './audio/rocket_fire.mp3',
      enemyExplode: './audio/en_explode_1.wav',
      enemyFire: './audio/en_fire.mp3',
      playerExplode: './audio/player_explode.wav'
    }
  },
  // Setting for game scene
  scene: {
    font: 'Pixellari',
    nextLive: 5000,
    text: {
      score: {
        width: '150',
        color: 'red'
      },
      highScore: {
        width: '150',
        color: 'purple'
      },
      wave: {
        width: '50',
        color: 'red'
      },
      pause: {
        width: '50',
        color: 'red'
      }
    },
    leaderboard: [{
      user: 'LEHA',
      score: 5000
    }, {
      user: 'USER1',
      score: 4000
    }, {
      user: 'USER2',
      score: 3000
    }, {
      user: 'USER3',
      score: 2000
    }, {
      user: 'USER4',
      score: 1000
    }, {
      user: 'USER5',
      score: 750
    }, {
      user: 'USER6',
      score: 500
    }, {
      user: 'USER7',
      score: 250
    }, {
      user: 'USER8',
      score: 100
    }, {
      user: 'USER9',
      score: 0
    }],
    background: {
      sprite: 'black',
      size: {
        width: 400,
        height: 600
      }
    },
    player: {
      position: {
        x: 185,
        y: 520
      },
      lives: 3,
      maxLives: 5
    },
    enemySpacing: 10,
    blueEnemies: {
      count: 10,
      divisions: 3,
      position: {
        x: 55,
        y: 160,
        spacing: 10,
        width: 30
      },
      speed: 1
    },
    purpleEnemies: {
      count: 8,
      divisions: 1,
      position: {
        x: 85,
        y: 130,
        spacing: 10,
        width: 30
      }
    },
    redEnemies: {
      count: 6,
      divisions: 1,
      position: {
        x: 115,
        y: 100,
        spacing: 10,
        width: 30
      }
    },
    generalEnemies: {
      count: 2,
      divisions: 1,
      position: {
        x: 145,
        y: 75,
        spacing: 60,
        width: 30
      }
    }
  },
  // Player object settings
  player: {
    width: 30,
    height: 30,
    speed: 2,
    reloadTime: 1000,
    limit: {
      left: 0,
      right: 370
    },
    limitsX: {
      left: 0,
      right: 370
    },
    sprite: player
  },
  // Blue enemy object settings
  blueEnemy: {
    width: 20,
    height: 20,
    speed: 1,
    speedAttack: 3,
    shots: 2,
    limitsX: {
      left: 30,
      right: 50
    },
    sprite: b_sheet,
    cost: 30
  },
  // Purple enemy object settings
  purpleEnemy: {
    width: 20,
    height: 20,
    speed: 1,
    speedAttack: 3.5,
    shots: 3,
    limitsX: {
      left: 30,
      right: 50
    },
    sprite: p_sheet,
    cost: 40
  },
  // Red enemy object settings
  redEnemy: {
    width: 20,
    height: 20,
    speed: 1,
    speedAttack: 3,
    shots: 2,
    limitsX: {
      left: 30,
      right: 50
    },
    sprite: r_sheet,
    cost: 50
  },
  // General enemy object settings
  generalEnemy: {
    width: 20,
    height: 30,
    speed: 1,
    speedAttack: 3,
    shots: 4,
    limitsX: {
      left: 30,
      right: 50
    },
    sprite: g_sheet,
    cost: 60
  },
  // Bullet object
  bullet: {
    width: 2,
    height: 10,
    speed: 5,
    limitsY: {
      top: -20,
      bottom: 600
    },
    sprite: 'orange'
  },
  // Enemy rocek pbject
  rocket: {
    width: 2,
    height: 7,
    speed: 4,
    limitsY: {
      top: 0,
      bottom: 700
    },
    sprite: 'white'
  },
  // Enemy explode object
  enemyExplode: {
    size: {
      width: 20,
      height: 20
    },
    sprite: en_exp,
    frames: 4
  },
  // Player explode
  playerExplode: {
    size: {
      width: 50,
      height: 50
    },
    sprite: pl_exp,
    frames: 4
  } // Export settings

};
/* harmony default export */ __webpack_exports__["default"] = (SETTINGS);

/***/ }),

/***/ "./src/js/sound.js":
/*!*************************!*\
  !*** ./src/js/sound.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./src/js/settings.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].audio;

var AudioController =
/*#__PURE__*/
function () {
  // Audio manager
  function AudioController() {
    _classCallCheck(this, AudioController);

    this.sounds = SETTINGS.sounds;
  }

  _createClass(AudioController, [{
    key: "play",
    value: function play(sound, volume) {
      var p = new Audio(sound);
      p.play();
      p.volume = volume;
    }
  }]);

  return AudioController;
}();

/* harmony default export */ __webpack_exports__["default"] = (AudioController);

/***/ }),

/***/ "./src/js/vector.js":
/*!**************************!*\
  !*** ./src/js/vector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Maths, vectors obj
var Vector2d =
/*#__PURE__*/
function () {
  function Vector2d(x, y) {
    _classCallCheck(this, Vector2d);

    this.x = x || 0;
    this.y = y || 0;
  }

  _createClass(Vector2d, [{
    key: "add",
    value: function add(vector) {
      return new Vector2d(vector.x + this.x, vector.y + this.y);
    }
  }, {
    key: "substract",
    value: function substract(vector) {
      return new Vector2d(vector.x - this.x, vector.y - this.y);
    }
  }, {
    key: "multiply",
    value: function multiply(scalar) {
      return new Vector2d(this.x * scalar, this.y * scalar);
    }
  }, {
    key: "divide",
    value: function divide(scalar) {
      return new Vector2d(this.x / scalar, this.y / scalar);
    }
  }, {
    key: "getMagnitude",
    value: function getMagnitude() {
      return Math.hypot(this.x, this.y);
    }
  }, {
    key: "normalize",
    value: function normalize() {
      return this.divide(this.getMagnitude());
    }
  }]);

  return Vector2d;
}();

/* harmony default export */ __webpack_exports__["default"] = (Vector2d);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz9kZjVhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcvYl9zaGVldF84MF8yMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9lX2V4cF9zaGVldC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9nX3NoZWV0XzgwXzIwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2xpdmUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9wX3NoZWV0XzgwXzIwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3BsYXllci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9wbGF5ZXJfZXhwbG9kZV9iaWcucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvcl9zaGVldF84MF8yMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy93YXZlX3Nwcml0ZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ3VpLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz8yZjRkIl0sIm5hbWVzIjpbIm9uR2FtZSIsImdMb2dvIiwiSW1hZ2UiLCJzcmMiLCJsb2dvIiwibG9nb0Jsb2NrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwibWVudSIsImlucHV0IiwidmFsdWUiLCJvbmNsaWNrIiwib25ibHVyIiwiY2FudmFzIiwiU3RhcnRHYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwiZ2FtZSIsIkdhbWUiLCJzdGFydCIsInN0YXJ0RW50ZXIiLCJlIiwiY29kZSIsIndoaWNoIiwia2V5Q29kZSIsInN0YXJ0QnRuIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIlBMQVlFUl9TRVRUSU5HUyIsIlNldHRpbmdzIiwicGxheWVyIiwiQlVMTEVUX1NFVFRJTkdTIiwiYnVsbGV0IiwiUk9DS0VUX1NFVFRJTkdTIiwicm9ja2V0IiwiQkxVRV9FTkVNWV9TRVRUSU5HUyIsImJsdWVFbmVteSIsIlBVUlBMRV9FTkVNWV9TRVRUSU5HUyIsInB1cnBsZUVuZW15IiwiUkVEX0VORU1ZX1NFVFRJTkdTIiwicmVkRW5lbXkiLCJHRU5FUkFMX0VORU1ZX1NFVFRJTkdTIiwiZ2VuZXJhbEVuZW15IiwiRU5FTVlfRVhQTE9ERSIsImVuZW15RXhwbG9kZSIsIlBMQVlFUl9FWFBMT0RFIiwicGxheWVyRXhwbG9kZSIsIkJ1bGxldCIsImNvbnRleHQiLCJwb3NpdGlvbiIsInNwZWVkIiwic2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidG9wTGltaXQiLCJsaW1pdHNZIiwidG9wIiwiYm90dG9tTGltaXQiLCJib3R0b20iLCJzcHJpdGUiLCJzdG9wIiwicmVhZHkiLCJ5IiwiX2RyYXciLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIngiLCJvcHBvbmVudCIsInIiLCJfZ2V0UmVjdCIsIm9wcCIsInJpZ2h0IiwibGVmdCIsIlJvY2tldCIsIlVuaXQiLCJsaW1pdCIsIndheXBvaW50cyIsIm9iamVjdGl2ZSIsInNwZWVkQXR0YWNrIiwic2hvdHMiLCJyb2NrZXRzIiwiaSIsInB1c2giLCJWZWN0b3IyZCIsImF0dGFjayIsImhpZGUiLCJmcmFtZVJhdGUiLCJmcmFtZUxpbWl0IiwiZGlyZWN0aW9uIiwiY29zdCIsImxlbmd0aCIsImRpc3RhbmNlIiwic3Vic3RyYWN0IiwiZGlzdGFuY2VOb3JtIiwibm9ybWFsaXplIiwiYWRkIiwibXVsdGlwbHkiLCJnZXRNYWduaXR1ZGUiLCJfc2V0UG9zaXRpb24iLCJBcnJheSIsImlzQXJyYXkiLCJ3YXlzIiwiZm9yRWFjaCIsImNhbGwiLCJhcmd1bWVudHMiLCJhcmciLCJzYXZlIiwidHJhbnNsYXRlIiwicmVzdG9yZSIsImRyYXdJbWFnZSIsIkJsdWVFbmVteSIsIlB1cnBsZUVuZW15IiwiUmVkRW5lbXkiLCJnZW5lcmFsIiwiR2VuZXJhbEVuZW15IiwiUGxheWVyIiwidXBkYXRlIiwiRXhwbG9kZSIsIm9yaWdpbkxpbWl0IiwiZnJhbWUiLCJmcmFtZXMiLCJtYXhGcmFtZVJhdGUiLCJFbmVteUV4cGxvZGUiLCJQbGF5ZXJFeHBsb2RlIiwiU0VUVElOR1MiLCJzY2VuZSIsInVzZXIiLCJnZXRDb250ZXh0IiwidXNlcm5hbWUiLCJ0b1VwcGVyQ2FzZSIsInVwZGF0ZVJlcXVlc3QiLCJpbnB1dENvbnRyb2xsZXIiLCJvblBhdXNlIiwiYmFja2dyb3VuZCIsInJlYm9yblJlYWR5IiwiZW5lbWllcyIsImF0dGFja2luZ0VuZW1pZXMiLCJraWxsZWQiLCJtYXhFbmVtaWVzIiwibWF4Um9ja2V0cyIsInBsYXllckJ1bGxldHMiLCJtYXhQbGF5ZXJCdWxsZXRzIiwiZ2VuZXJhbEVuZW15VGltZXIiLCJnZW5lcmFsUmVhZHkiLCJzY29yZSIsInNjb3JlVGV4dCIsInVzZXJTY29yZVRleHQiLCJoaWdoU2NvcmUiLCJoaWdoU2NvcmVUZXh0IiwiaGlnaFNjb3JlTGFiZWwiLCJsaXZlcyIsImxpdmVzQ291bnQiLCJtYXhMaXZlc0NvdW50IiwibWF4TGl2ZXMiLCJhZGRMaXZlQ291bnQiLCJuZXh0TGl2ZSIsIndhdmVzQ291bnQiLCJ3YXZlTGFiZWwiLCJ3YXZlc1RleHRMYWJlbCIsInJlYWR5TGFiZWwiLCJwYXVzZUxhYmVsIiwiZ2FtZU92ZXJMYWJlbCIsInJlc3RhcnRMYWJlbCIsImdhbWVPdmVyIiwibGVhZGVyQm9hcmQiLCJjbGVhclNjZW5lVGltZXIiLCJwbGF5ZXJSZWJvcm5UaW1lciIsImdhbWVPdmVyVGltZXIiLCJyZXNldFRpbWVyIiwiZGlzYWJsZVBhdXNlIiwic291bmRDb250b2xsZXIiLCJBdWRpb0NvbnRyb2xsZXIiLCJhbGxTb3VuZHMiLCJzb3VuZHMiLCJvYmplY3QiLCJtaW4iLCJtYXgiLCJyYW5kIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwiZ2VuZXJhbENsb25lIiwibWluaW9uQ2xvbmVzIiwiZyIsInByb3RvIiwiZ1dheXMiLCJfZ2VuZXJhdGVXYXlwb2ludHMiLCJzZXRXYXlwb2ludHMiLCJtIiwibWluaW9uIiwiY2xvbmUiLCJyZWQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsIndwIiwibWluaW9ucyIsImF0dGFja1R5cGUiLCJnZW5lcmFscyIsImZpbHRlciIsImFjdGl2ZSIsIl9nZXRSYW5kb20iLCJyZWQxIiwicmVkMiIsImdyb3VwIiwiX2Nsb25lR2VuZXJhbEdyb3VwIiwiX2Nsb25lVW5pdCIsIl9jcmVhdGVBdHRhY2tHcm91cCIsInVuaXQiLCJ1bmRlZmluZWQiLCJpZDEiLCJpZDIiLCJ1bml0MSIsInVuaXQyIiwiYmx1ZUdyb3VwIiwicHVycGxlR3JvdXAiLCJwdXJwbGVVbml0IiwiYXR0YWNrVGltZXIiLCJ0eXBlIiwiZW4iLCJtaW5Qb3NpdGlvbiIsIm1heFBvc2l0aW9uIiwibW9kZSIsInUiLCJmaXJzdCIsInRhcmdldCIsImVuZW15Iiwic2V0VGV4dCIsInNldFRpbWVvdXQiLCJfZ2VuQXR0YWNrIiwiY2xlYXJUaW1lb3V0IiwiX2NoZWNrUmVjb3JkIiwiX2NyZWF0ZUxlYWRlcmJvYXJkIiwiVGV4dCIsImxlYWRlcnMiLCJsZWFkZXJib2FyZCIsImR1cGxpY2F0ZSIsInNvcnQiLCJhIiwiYiIsInNsaWNlIiwiY29sbGlzaW9uIiwia2lsbCIsInNwbGljZSIsImluZGV4T2YiLCJzZXRQb3NpdGlvbiIsImwiLCJwb3AiLCJwbGF5IiwibGVhZGVyc1Bvc2l0aW9uIiwidXNlclBvcyIsInNjb3JlUG9zIiwiQmFja2dyb3VuZCIsIklucHV0Q29udHJvbGxlciIsImxpc3RlbiIsInRleHQiLCJjb2xvciIsImxpdmVzUG9zaXRpb24iLCJQbGF5ZXJMaXZlIiwiV2F2ZUxhYmVsIiwid2F2ZSIsIm5leHRQb3NpdGlvblgiLCJibHVlRW5lbWllcyIsIm5leHRQb3NpdGlvblkiLCJjb3VudEVuZW1pZXMiLCJjb3VudCIsImRpdmlzaW9ucyIsImoiLCJwdXJwbGVFbmVtaWVzIiwiZ2VuZXJhbEVuZW1pZXMiLCJzcGFjaW5nIiwicmVkRW5lbWllcyIsImRpdiIsInBhdXNlIiwic2hvdyIsImFjdGlvbiIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwiX2dhbWVPdmVyIiwiZmlyZSIsImtpbGxlZFB1cnBsZUVuZW1pZXMiLCJtYXhQdXJwbGVFbmVtaWVzIiwia2lsbGVkQmx1ZUVuZW1pZXMiLCJtYXhCbHVlRW5lbWllcyIsIl9wbGF5ZXJDb2xsaXNpb24iLCJfZW5lbXlDb2xsaXNpb24iLCJlbmVteUZpcmUiLCJfZ2VuTmV3V2F2ZSIsImNsZWFyUmVjdCIsInJlc3RhcnRSZWFkeSIsIl9kZXN0cm95IiwiX2J1aWxkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3VwZGF0ZSIsImJpbmQiLCJndWkiLCJTQ0VORSIsInRleHRBbGlnbiIsImZvbnQiLCJmaWxsVGV4dCIsIlNwcml0ZUxhYmVsIiwibGl2ZSIsIlN0YXIiLCJsaW1pdEJvdHRvbSIsImZpbGwiLCJzdGFycyIsIl9nZW5TdGFycyIsInN0YXIiLCJzcHJpdGVzIiwicyIsInZpZXciLCJrZXlzIiwia2V5Ym9hcmQiLCJhY3Rpb25zIiwiayIsInByZXZlbnREZWZhdWx0Iiwia2V5RG93biIsImtleVVwIiwicF9zcHJpdGUiLCJiX3NoZWV0IiwiYmx1ZV9zaGVldCIsInBfc2hlZXQiLCJwdXJwbGVfc2hlZXQiLCJyX3NoZWV0IiwicmVkX3NoZWV0IiwiZ19zaGVldCIsImdlbmVyYWxfc2hlZXQiLCJlbl9leHAiLCJlbmVteV9leHAiLCJwbF9leHAiLCJwbGF5ZXJfZXhwIiwicGxfbGl2ZSIsInBsYXllcl9saXZlIiwiZW5fd2F2ZSIsIndfc3ByaXRlIiwiYXVkaW8iLCJlbmVteVNwYWNpbmciLCJyZWxvYWRUaW1lIiwibGltaXRzWCIsInNvdW5kIiwidm9sdW1lIiwicCIsIkF1ZGlvIiwidmVjdG9yIiwic2NhbGFyIiwiaHlwb3QiLCJkaXZpZGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyx1REFBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2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QVN5UixNQUF2QyxDQUFQO0FBQ0g7OzsyQkFDTUEsTSxFQUFRO0FBQ1gsYUFBTyxJQUFJcFEsUUFBSixDQUFhLEtBQUtqQixDQUFMLEdBQVNxUixNQUF0QixFQUE4QixLQUFLelIsQ0FBTCxHQUFTeVIsTUFBdkMsQ0FBUDtBQUNIOzs7bUNBQ2M7QUFDWCxhQUFPckssSUFBSSxDQUFDc0ssS0FBTCxDQUFXLEtBQUt0UixDQUFoQixFQUFtQixLQUFLSixDQUF4QixDQUFQO0FBQ0g7OztnQ0FDVztBQUNSLGFBQU8sS0FBSzJSLE1BQUwsQ0FBWSxLQUFLeFAsWUFBTCxFQUFaLENBQVA7QUFDSDs7Ozs7O0FBR1VkLHVFQUFmLEU7Ozs7Ozs7Ozs7OztBQzFCQSxjQUFjLG1CQUFPLENBQUMsa1VBQWlLOztBQUV2TCw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6InFzZXJ2aWNlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjE5MWIyZWE0NTQ1OGYxZTVkZDhkNGM2ZmNlNDMwYjIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGUxYjc0OWE2Mjg1Mzk1OWI0ZjVjYzA3YjdjMzNlNzEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTMxZTg5NWY1OTZiMWY2MGFjYzU3YjE0MDUwNGI4ZGMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjA5OTk5ZmFjODIyMjVkNzUzNmMxMWFhNzEyN2E2YzEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjRlYzIyN2JhNjg3ZWMwYjMxY2Y0YjhhMmE5ZTIwMzAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDVjNmM3YjUxMzcyNDE2NzZmYzg1OGY1OTUzNzBhZWYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjhjY2E1NzQ4ZDZjOGU4MDE0M2U5YTg4NTFjZjgxZDMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2U3MjBhOGI5NTI4Nzg3NzA4ZTdkZDdmYzJkOTA5ZGQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2JhNjBhZGY1MjBhMjI5ZDQxYjIzMDMxZmI0MzAxMzAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDhjN2QxOTVkN2M2N2I4MGUzOWYwNDk1M2I2ZjQ4NDMucG5nXCI7IiwiaW1wb3J0ICcuL3Njc3Mvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4vaW1nL2xvZ28ucG5nJztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9nYW1lJztcclxuXHJcbi8vIEdhbWUgc3RhdGVcclxubGV0IG9uR2FtZSA9IGZhbHNlO1xyXG4vLyBMb2dvXHJcbmxldCBnTG9nbyA9IG5ldyBJbWFnZSgyNTAsIDcwKTtcclxuZ0xvZ28uc3JjID0gbG9nbztcclxubGV0IGxvZ29CbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvJyk7XHJcbmxvZ29CbG9jay5hcHBlbmRDaGlsZChnTG9nbyk7XHJcbi8vIE1lbnVcclxubGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xyXG4vLyBVc2VyIGlucHV0XHJcbmxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VySW5wdXQnKTtcclxuaW5wdXQudmFsdWUgPSAnVVNFUjExMSc7XHJcbmlucHV0Lm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG59O1xyXG5pbnB1dC5vbmJsdXIgPSAoKSA9PiB7XHJcbiAgICBpbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlID8gaW5wdXQudmFsdWUgOiAnVVNFUjExMSc7XHJcbn07XHJcbi8vIGdldCBjYW52YXNcclxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lQ2FudmFzJyk7XHJcblxyXG5mdW5jdGlvbiBTdGFydEdhbWUoKSB7XHJcbiAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAvLyBJbml0IGdhbWUgb2JqZWN0XHJcbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgaW5wdXQudmFsdWUpO1xyXG4gICAgLy8gU3RhcnQgZ2FtZSBsb29wXHJcbiAgICBnYW1lLnN0YXJ0KCk7XHJcbn1cclxuXHJcbi8vIFN0YXJ0IGdhbWUgZnJvbSBrZXlib2VhcmRcclxuZnVuY3Rpb24gc3RhcnRFbnRlcihlKSB7XHJcbiAgICBsZXQgY29kZSA9IGUud2hpY2ggfHwgZS5rZXlDb2RlO1xyXG4gICAgaWYgKGNvZGUgPT0gJzEzJyAmJiAhb25HYW1lKSB7XHJcbiAgICAgICAgU3RhcnRHYW1lKCk7XHJcbiAgICAgICAgb25HYW1lID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RhcnQgZ2FtZSBjbGlja1xyXG5sZXQgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRCdG4nKTtcclxuc3RhcnRCdG4ub25jbGljayA9ICgpID0+IHtcclxuICAgIFN0YXJ0R2FtZSgpO1xyXG4gICAgb25HYW1lID0gdHJ1ZTtcclxufTtcclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHN0YXJ0RW50ZXIpOyIsIi8vIEdhbWUgZW50ZXRpZXNcclxuXHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3NldHRpbmdzJztcclxuaW1wb3J0IFZlY3RvcjJkIGZyb20gJy4vdmVjdG9yJztcclxuXHJcbmNvbnN0IFBMQVlFUl9TRVRUSU5HUyA9IFNldHRpbmdzLnBsYXllcjtcclxuY29uc3QgQlVMTEVUX1NFVFRJTkdTID0gU2V0dGluZ3MuYnVsbGV0O1xyXG5jb25zdCBST0NLRVRfU0VUVElOR1MgPSBTZXR0aW5ncy5yb2NrZXQ7XHJcbmNvbnN0IEJMVUVfRU5FTVlfU0VUVElOR1MgPSBTZXR0aW5ncy5ibHVlRW5lbXk7XHJcbmNvbnN0IFBVUlBMRV9FTkVNWV9TRVRUSU5HUyA9IFNldHRpbmdzLnB1cnBsZUVuZW15O1xyXG5jb25zdCBSRURfRU5FTVlfU0VUVElOR1MgPSBTZXR0aW5ncy5yZWRFbmVteTtcclxuY29uc3QgR0VORVJBTF9FTkVNWV9TRVRUSU5HUyA9IFNldHRpbmdzLmdlbmVyYWxFbmVteTtcclxuY29uc3QgRU5FTVlfRVhQTE9ERSA9IFNldHRpbmdzLmVuZW15RXhwbG9kZTtcclxuY29uc3QgUExBWUVSX0VYUExPREUgPSBTZXR0aW5ncy5wbGF5ZXJFeHBsb2RlO1xyXG5cclxuLy8gQmFzZSBjbGFzcyBmb3Igc3BhY2VzaGlwc1xyXG4vLyBjbGFzcyBTaGlwIHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuLy8gICAgICAgICB0aGlzLnggPSB4O1xyXG4vLyAgICAgICAgIHRoaXMueSA9IHk7XHJcbi8vICAgICAgICAgdGhpcy5zcGVlZDtcclxuLy8gICAgICAgICB0aGlzLndpZHRoO1xyXG4vLyAgICAgICAgIHRoaXMuaGVpZ2h0O1xyXG4vLyAgICAgICAgIHRoaXMubGVmdExpbWl0WDtcclxuLy8gICAgICAgICB0aGlzLnJpZ2h0TGltaXRYO1xyXG4vLyAgICAgICAgIHRoaXMuc3ByaXRlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbi8vICAgICAgICAgdGhpcy54ID0gdGhpcy54ICsgdGhpcy5zcGVlZDtcclxuLy8gICAgICAgICBpZiAodGhpcy54IDw9IHRoaXMubGVmdExpbWl0WCB8fCB0aGlzLnggKyB0aGlzLndpZHRoID49IHRoaXMucmlnaHRMaW1pdFgpIHtcclxuLy8gICAgICAgICAgICAgLy8gUmV2ZXJzZSBtb3ZlbWVudCBvbiBYIGF4aXNcclxuLy8gICAgICAgICAgICAgdGhpcy5zcGVlZCAqPSAtMTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBzZXRQb3NpdGlvbih4LCB5KSB7XHJcbi8vICAgICAgICAgdGhpcy54ID0geDtcclxuLy8gICAgICAgICB0aGlzLnkgPSB5O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgX2dldFJlY3QoKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgdG9wOiB0aGlzLnksXHJcbi8vICAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnggKyB0aGlzLndpZHRoLFxyXG4vLyAgICAgICAgICAgICBib3R0b206IHRoaXMueSArIHRoaXMuaGVpZ2h0LFxyXG4vLyAgICAgICAgICAgICBsZWZ0OiB0aGlzLnhcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICAvLyBEZXRlY3QgY29sbGlzaW9uIHdpdGggYW5vdGhlciBvYmplY3QgKHVzaW5nIGhpcyByZWN0IHByb3ApXHJcbi8vICAgICBkZXRlY3RDb2xsaXNpb24ob2JqZWN0KSB7XHJcbi8vICAgICAgICAgbGV0IHIgPSB0aGlzLl9nZXRSZWN0KCk7XHJcbi8vICAgICAgICAgbGV0IG9iaiA9IG9iamVjdC5fZ2V0UmVjdCgpO1xyXG5cclxuLy8gICAgICAgICByZXR1cm4gci5yaWdodCA+PSBvYmoubGVmdCAmJiByLmxlZnQgPD0gb2JqLnJpZ2h0ICYmXHJcbi8vICAgICAgICAgICAgIHIudG9wIDw9IG9iai5ib3R0b20gJiYgci5ib3R0b20gPj0gb2JqLnRvcDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gQ2xhc3MgZm9yIHBsYXV5ZXIncyBzcGFjZXNoaXAuIE5vIHkgYXhpcyBtb3ZlbWVudFxyXG4vLyBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBTaGlwIHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuLy8gICAgICAgICBzdXBlcih4LCB5KTtcclxuLy8gICAgICAgICBzdXBlci5zcGVlZCA9IFBMQVlFUl9TRVRUSU5HUy5zcGVlZDtcclxuLy8gICAgICAgICBzdXBlci53aWR0aCA9IFBMQVlFUl9TRVRUSU5HUy53aWR0aDtcclxuLy8gICAgICAgICBzdXBlci5oZWlnaHQgPSBQTEFZRVJfU0VUVElOR1MuaGVpZ2h0O1xyXG4vLyAgICAgICAgIHN1cGVyLmxlZnRMaW1pdFggPSBQTEFZRVJfU0VUVElOR1MubGltaXRzWC5sZWZ0O1xyXG4vLyAgICAgICAgIHN1cGVyLnJpZ2h0TGltaXRYID0gUExBWUVSX1NFVFRJTkdTLmxpbWl0c1gucmlnaHQ7XHJcbi8vICAgICAgICAgc3VwZXIuc3ByaXRlID0gUExBWUVSX1NFVFRJTkdTLnNwcml0ZTtcclxuLy8gICAgICAgICB0aGlzLmxpdmVzID0gUExBWUVSX1NFVFRJTkdTLmxpdmVzO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLy8gX3JlbG9hZCgpIHtcclxuLy8gICAgIC8vICAgICB0aGlzLmZpcmVSZWFkeSA9IHRydWU7XHJcbi8vICAgICAvLyB9XHJcbi8vICAgICB1cGRhdGVQb3NpdGlvbihkaXJlY3Rpb24sIGRlbHRhVGltZSkge1xyXG4vLyAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XHJcbi8vICAgICAgICAgICAgIGlmICh0aGlzLnggPj0gdGhpcy5sZWZ0TGltaXRYKSB7XHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLnggLSB0aGlzLnNwZWVkICogZGVsdGFUaW1lO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gJ3JpZ2h0Jykge1xyXG4vLyAgICAgICAgICAgICBpZiAodGhpcy54IDw9IHRoaXMucmlnaHRMaW1pdFgpIHtcclxuLy8gICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMuc3BlZWQgKiBkZWx0YVRpbWU7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBtb3ZlTGVmdChkZWx0YSkge1xyXG4vLyAgICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oJ2xlZnQnLCBkZWx0YSk7XHJcbi8vICAgICB9XHJcbi8vICAgICBtb3ZlUmlnaHQoZGVsdGEpIHtcclxuLy8gICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCdyaWdodCcsIGRlbHRhKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gQ2xhc3MgZm9yIGJsdWUgY29sb3JlZCBlbmVtaWVzLiBObyB5IGF4aXMgbW92ZW1lbnRcclxuLy8gY2xhc3MgQmx1ZUVuZW15IGV4dGVuZHMgU2hpcCB7XHJcbi8vICAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcbi8vICAgICAgICAgc3VwZXIoeCwgeSk7XHJcbi8vICAgICAgICAgc3VwZXIuc3BlZWQgPSBCTFVFX0VORU1ZX1NFVFRJTkdTLnNwZWVkO1xyXG4vLyAgICAgICAgIHN1cGVyLndpZHRoID0gQkxVRV9FTkVNWV9TRVRUSU5HUy53aWR0aDtcclxuLy8gICAgICAgICBzdXBlci5oZWlnaHQgPSBCTFVFX0VORU1ZX1NFVFRJTkdTLmhlaWdodDtcclxuLy8gICAgICAgICBzdXBlci5sZWZ0TGltaXRYID0gdGhpcy54IC0gQkxVRV9FTkVNWV9TRVRUSU5HUy5saW1pdHNYLmxlZnQ7XHJcbi8vICAgICAgICAgc3VwZXIucmlnaHRMaW1pdFggPSB0aGlzLnggKyBCTFVFX0VORU1ZX1NFVFRJTkdTLmxpbWl0c1gucmlnaHQ7XHJcbi8vICAgICAgICAgc3VwZXIuc3ByaXRlID0gQkxVRV9FTkVNWV9TRVRUSU5HUy5zcHJpdGU7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIENsYXNzIGZvciBwdXJwbGUgY29sb3JlZCBlbmVtaWVzLiBObyB5IGF4aXMgbW92ZW1lbnRcclxuLy8gY2xhc3MgUHVycGxlRW5lbXkgZXh0ZW5kcyBTaGlwIHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuLy8gICAgICAgICBzdXBlcih4LCB5KTtcclxuLy8gICAgICAgICBzdXBlci5zcGVlZCA9IFBVUlBMRV9FTkVNWV9TRVRUSU5HUy5zcGVlZDtcclxuLy8gICAgICAgICBzdXBlci53aWR0aCA9IFBVUlBMRV9FTkVNWV9TRVRUSU5HUy53aWR0aDtcclxuLy8gICAgICAgICBzdXBlci5oZWlnaHQgPSBQVVJQTEVfRU5FTVlfU0VUVElOR1MuaGVpZ2h0O1xyXG4vLyAgICAgICAgIHN1cGVyLmxlZnRMaW1pdFggPSB0aGlzLnggLSBQVVJQTEVfRU5FTVlfU0VUVElOR1MubGltaXRzWC5sZWZ0O1xyXG4vLyAgICAgICAgIHN1cGVyLnJpZ2h0TGltaXRYID0gdGhpcy54ICsgUFVSUExFX0VORU1ZX1NFVFRJTkdTLmxpbWl0c1gucmlnaHQ7XHJcbi8vICAgICAgICAgc3VwZXIuc3ByaXRlID0gUFVSUExFX0VORU1ZX1NFVFRJTkdTLnNwcml0ZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY2xhc3MgUmVkRW5lbXkgZXh0ZW5kcyBTaGlwIHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuLy8gICAgICAgICBzdXBlcih4LCB5KTtcclxuLy8gICAgICAgICBzdXBlci5zcGVlZCA9IFJFRF9FTkVNWV9TRVRUSU5HUy5zcGVlZDtcclxuLy8gICAgICAgICBzdXBlci53aWR0aCA9IFJFRF9FTkVNWV9TRVRUSU5HUy53aWR0aDtcclxuLy8gICAgICAgICBzdXBlci5oZWlnaHQgPSBSRURfRU5FTVlfU0VUVElOR1MuaGVpZ2h0O1xyXG4vLyAgICAgICAgIHN1cGVyLmxlZnRMaW1pdFggPSB0aGlzLnggLSBSRURfRU5FTVlfU0VUVElOR1MubGltaXRzWC5sZWZ0O1xyXG4vLyAgICAgICAgIHN1cGVyLnJpZ2h0TGltaXRYID0gdGhpcy54ICsgUkVEX0VORU1ZX1NFVFRJTkdTLmxpbWl0c1gucmlnaHQ7XHJcbi8vICAgICAgICAgc3VwZXIuc3ByaXRlID0gUkVEX0VORU1ZX1NFVFRJTkdTLnNwcml0ZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY2xhc3MgR2VuZXJhbEVuZW15IGV4dGVuZHMgU2hpcCB7XHJcbi8vICAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcbi8vICAgICAgICAgc3VwZXIoeCwgeSk7XHJcbi8vICAgICAgICAgc3VwZXIuc3BlZWQgPSBHRU5FUkFMX0VORU1ZX1NFVFRJTkdTLnNwZWVkO1xyXG4vLyAgICAgICAgIHN1cGVyLndpZHRoID0gR0VORVJBTF9FTkVNWV9TRVRUSU5HUy53aWR0aDtcclxuLy8gICAgICAgICBzdXBlci5oZWlnaHQgPSBHRU5FUkFMX0VORU1ZX1NFVFRJTkdTLmhlaWdodDtcclxuLy8gICAgICAgICBzdXBlci5sZWZ0TGltaXRYID0gdGhpcy54IC0gR0VORVJBTF9FTkVNWV9TRVRUSU5HUy5saW1pdHNYLmxlZnQ7XHJcbi8vICAgICAgICAgc3VwZXIucmlnaHRMaW1pdFggPSB0aGlzLnggKyBHRU5FUkFMX0VORU1ZX1NFVFRJTkdTLmxpbWl0c1gucmlnaHQ7XHJcbi8vICAgICAgICAgc3VwZXIuc3ByaXRlID0gR0VORVJBTF9FTkVNWV9TRVRUSU5HUy5zcHJpdGU7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIEJ1bGxldCB7XHJcbiAgICAvLyBDbGFzcyBmb3IgYnVsbGV0IG9iamVjdFxyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgcG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gQlVMTEVUX1NFVFRJTkdTLnNwZWVkO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IEJVTExFVF9TRVRUSU5HUy53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBCVUxMRVRfU0VUVElOR1MuaGVpZ2h0XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLndpZHRoID0gQlVMTEVUX1NFVFRJTkdTLndpZHRoO1xyXG4gICAgICAgIC8vIHRoaXMuaGVpZ2h0ID0gQlVMTEVUX1NFVFRJTkdTLmhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy50b3BMaW1pdCA9IEJVTExFVF9TRVRUSU5HUy5saW1pdHNZLnRvcDtcclxuICAgICAgICB0aGlzLmJvdHRvbUxpbWl0ID0gQlVMTEVUX1NFVFRJTkdTLmxpbWl0c1kuYm90dG9tO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gQlVMTEVUX1NFVFRJTkdTLnNwcml0ZTtcclxuICAgICAgICB0aGlzLnN0b3AgPSBmYWxzZTsgLy8gRGV0ZWN0IHN0b3AgYnVsbGV0IG1vdmluZ1xyXG4gICAgICAgIHRoaXMucmVhZHkgPSB0cnVlOyAvLyBEZXRlY3QgcmVhZHkgYnVsbGV0IHN0c3RlIGlmIHNoZSBtb3ZpbmcgLSBub3QgcmVhZHlcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBJZiBidWxsZXQgaXMgaGlkZSBub3QgdXBkYXRlIHRoaXNcclxuICAgICAgICBpZiAoIXRoaXMuc3RvcCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMucG9zaXRpb24ueSAtIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gdGhpcy5ib3R0b21MaW1pdCB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUud2lkdGggPD0gdGhpcy50b3BMaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3RvcCBidWxsZXQgaWYgYXJyaXZlZCBsaW1pdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIFNldCByZWFkeSBzdGF0dXNcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEFkZCBkZXRlY3QgY29sbGlzaW9ucyBiZWxvd1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kcmF3KHRoaXMuY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2RyYXcoY29udGV4dCkge1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5zcHJpdGU7XHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zaXplLndpZHRoLCB0aGlzLnNpemUuaGVpZ2h0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24ocG9zaXRpb24pIHtcclxuICAgICAgICAvLyB0aGlzLnggPSB4O1xyXG4gICAgICAgIC8vIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuc3RvcCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpc2lvbihvcHBvbmVudCkge1xyXG4gICAgICAgIC8vIERldGVjdCBjb2xsaXNpb24gd2l0aCBhbm90aGVyIG9iamVjdCAodXNpbmcgaGlzIHJlY3QgcHJvcClcclxuICAgICAgICBsZXQgciA9IHRoaXMuX2dldFJlY3QoKTtcclxuICAgICAgICBsZXQgb3BwID0gb3Bwb25lbnQuX2dldFJlY3QoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHIucmlnaHQgPj0gb3BwLmxlZnQgJiYgci5sZWZ0IDw9IG9wcC5yaWdodCAmJlxyXG4gICAgICAgICAgICByLnRvcCA8PSBvcHAuYm90dG9tICYmIHIuYm90dG9tID49IG9wcC50b3A7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFJlY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUud2lkdGgsXHJcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLmhlaWdodCxcclxuICAgICAgICAgICAgbGVmdDogdGhpcy5wb3NpdGlvbi54XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBSb2NrZXQgZXh0ZW5kcyBCdWxsZXQge1xyXG4gICAgLy8gQ2xhc3MgZm9yIGVuZW15IHJvY2tldHNcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgcG9zaXRpb24pO1xyXG4gICAgICAgIHN1cGVyLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgc3VwZXIuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgc3VwZXIuc3BlZWQgPSBST0NLRVRfU0VUVElOR1Muc3BlZWQ7XHJcbiAgICAgICAgc3VwZXIuc2l6ZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IFJPQ0tFVF9TRVRUSU5HUy53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBST0NLRVRfU0VUVElOR1MuaGVpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLnRvcExpbWl0ID0gUk9DS0VUX1NFVFRJTkdTLmxpbWl0c1kudG9wO1xyXG4gICAgICAgIHN1cGVyLmJvdHRvbUxpbWl0ID0gUk9DS0VUX1NFVFRJTkdTLmxpbWl0c1kuYm90dG9tO1xyXG4gICAgICAgIHN1cGVyLnNwcml0ZSA9IFJPQ0tFVF9TRVRUSU5HUy5zcHJpdGU7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgLy8gSWYgYnVsbGV0IGlzIGhpZGUgbm90IHVwZGF0ZSB0aGlzXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0b3ApIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ID49IHRoaXMuYm90dG9tTGltaXQgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLndpZHRoIDw9IHRoaXMudG9wTGltaXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN0b3AgYnVsbGV0IGlmIGFycml2ZWQgbGltaXRcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgcmVhZHkgc3RhdHVzXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kcmF3KHRoaXMuY29udGV4dCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBVbml0IHtcclxuICAgIC8vIEJhc2UgdW5pdHMgY2xhc3MgICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBwb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5zcHJpdGU7XHJcbiAgICAgICAgdGhpcy5saW1pdCA9IHsgeDogMC41LCB5OiAwLjUgfTtcclxuICAgICAgICB0aGlzLnNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLndheXBvaW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMub2JqZWN0aXZlID0gMDtcclxuICAgICAgICB0aGlzLnNwZWVkO1xyXG5cclxuICAgICAgICB0aGlzLnNwZWVkQXR0YWNrO1xyXG4gICAgICAgIHRoaXMuc2hvdHM7XHJcbiAgICAgICAgdGhpcy5yb2NrZXRzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5yb2NrZXRzLnB1c2gobmV3IFJvY2tldCh0aGlzLmNvbnRleHQsIG5ldyBWZWN0b3IyZCgtMTAwLCAtMTAwKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF0dGFjayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGlkZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmZyYW1lUmF0ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5mcmFtZUxpbWl0ID0gNjA7XHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMuY29zdCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy53YXlwb2ludHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hhbmdlIGRpcmVjdGlvbiBcclxuICAgICAgICBpZiAodGhpcy5hdHRhY2sgJiYgdGhpcy5wb3NpdGlvbi54IDwgdGhpcy53YXlwb2ludHNbdGhpcy5vYmplY3RpdmVdLngpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXR0YWNrICYmIHRoaXMucG9zaXRpb24ueCA+IHRoaXMud2F5cG9pbnRzW3RoaXMub2JqZWN0aXZlXS54KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2xlZnQnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNwZWVkID0gdGhpcy5zcGVlZDtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLnBvc2l0aW9uLnN1YnN0cmFjdCh0aGlzLndheXBvaW50c1t0aGlzLm9iamVjdGl2ZV0pO1xyXG4gICAgICAgIGxldCBkaXN0YW5jZU5vcm0gPSBkaXN0YW5jZS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXR0YWNrKSB7XHJcbiAgICAgICAgICAgIHNwZWVkID0gdGhpcy5zcGVlZCAqIHRoaXMuc3BlZWRBdHRhY2s7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3BlZWQgPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKGRpc3RhbmNlTm9ybS5tdWx0aXBseShzcGVlZCkpO1xyXG5cclxuICAgICAgICBpZiAoZGlzdGFuY2UuZ2V0TWFnbml0dWRlKCkgLSBzcGVlZCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLndheXBvaW50c1t0aGlzLm9iamVjdGl2ZV07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9iamVjdGl2ZSA8IHRoaXMud2F5cG9pbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0aXZlKytcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmF0dGFjayAmJiB0aGlzLm9iamVjdGl2ZSA9PSB0aGlzLndheXBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBMYXN0IHdheXBvaW50IGluIGF0dGFja1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFBvc2l0aW9uKG5ldyBWZWN0b3IyZCgtMTAwLCAtMTAwKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndheXBvaW50cyA9IFtdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RpdmUgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQ2hhbmdlIHVuaXQgc3BlZWQgaWYgaGUgdW52aXNpYmxlIG9uIGdhbWUgY2FudmFzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmF0dGFjayAmJiB0aGlzLm9iamVjdGl2ZSA+IHRoaXMud2F5cG9pbnRzLmxlbmd0aCAtIDQpIHtcclxuICAgICAgICAgICAgICAgIHNwZWVkICs9IHRoaXMuc3BlZWQgKyB0aGlzLnNwZWVkQXR0YWNrICogMTAwMDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmF0dGFjayAmJiB0aGlzLm9iamVjdGl2ZSA9PSB0aGlzLndheXBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBzcGVlZCArPSB0aGlzLnNwZWVkICsgdGhpcy5zcGVlZEF0dGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlzaW9uKG9wcG9uZW50KSB7XHJcbiAgICAgICAgLy8gRGV0ZWN0IGNvbGxpc2lvbiB3aXRoIGFub3RoZXIgb2JqZWN0ICh1c2luZyBoaXMgcmVjdCBwcm9wKVxyXG4gICAgICAgIGxldCByID0gdGhpcy5fZ2V0UmVjdCgpO1xyXG4gICAgICAgIGxldCBvcHAgPSBvcHBvbmVudC5fZ2V0UmVjdCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gci5yaWdodCA+PSBvcHAubGVmdCAmJiByLmxlZnQgPD0gb3BwLnJpZ2h0ICYmXHJcbiAgICAgICAgICAgIHIudG9wIDw9IG9wcC5ib3R0b20gJiYgci5ib3R0b20gPj0gb3BwLnRvcDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRXYXlwb2ludHMod2F5cG9pbnRzKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkod2F5cG9pbnRzKSkge1xyXG4gICAgICAgICAgICB0aGlzLndheXBvaW50cyA9IHdheXBvaW50cztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLndheXBvaW50cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgd2F5cyA9IFtdO1xyXG4gICAgICAgICAgICBpZiAod2F5cG9pbnRzIGluc3RhbmNlb2YgVmVjdG9yMmQpIHtcclxuICAgICAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uIChhcmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXlzLnB1c2goYXJnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMud2F5cG9pbnRzID0gd2F5cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAga2lsbCgpIHtcclxuICAgICAgICB0aGlzLmhpZGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3NldFBvc2l0aW9uKG5ldyBWZWN0b3IyZCgxMDAwLCAxMDAwKSk7XHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMgPSBbXTtcclxuICAgICAgICB0aGlzLmF0dGFjayA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9kcmF3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhpZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDApJztcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSgtMSAqICh0aGlzLmxpbWl0LnggKiB0aGlzLnNpemUud2lkdGgpLCAtMSAqICh0aGlzLmxpbWl0LnkgKiB0aGlzLnNpemUuaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMjAsIDIwKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5zcHJpdGU7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoLTEgKiAodGhpcy5saW1pdC54ICogdGhpcy5zaXplLndpZHRoKSwgLTEgKiAodGhpcy5saW1pdC55ICogdGhpcy5zaXplLmhlaWdodCkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNvbnRleHQuZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDIwLCAyMCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTcHJpdGUgYW5pbWF0aW9uIGZyb20gc3ByaXRlIHNoZWV0IChmb3IgaWRsZSB1c2Ugb25seSAyIGZpcnN0IGZyYW1lcylcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lUmF0ZSA8IHRoaXMuZnJhbWVMaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUsIDAsIDAsIHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDIwLCAyMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJhdGUrKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5mcmFtZVJhdGUgPj0gdGhpcy5mcmFtZUxpbWl0ICYmIHRoaXMuZnJhbWVSYXRlIDw9IHRoaXMuZnJhbWVMaW1pdCAqIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCAyMCwgMCwgdGhpcy5zaXplLndpZHRoLCB0aGlzLnNpemUuaGVpZ2h0LCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMjAsIDIwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmF0ZSsrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCAyMCwgMCwgdGhpcy5zaXplLndpZHRoLCB0aGlzLnNpemUuaGVpZ2h0LCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMjAsIDIwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmF0ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSwgNDAsIDAsIHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDIwLCAyMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCA2MCwgMCwgdGhpcy5zaXplLndpZHRoLCB0aGlzLnNpemUuaGVpZ2h0LCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMjAsIDIwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgX3NldFBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0UG9zaXRpb24ocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRSZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICByaWdodDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLndpZHRoLFxyXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS5oZWlnaHQsXHJcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMucG9zaXRpb24ueFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQmx1ZUVuZW15IGV4dGVuZHMgVW5pdCB7XHJcbiAgICAvLyBCbHVlIGVuZW15IGNsYXNzXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBwb3NpdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIHBvc2l0aW9uKTtcclxuICAgICAgICBzdXBlci5zcHJpdGUgPSBCTFVFX0VORU1ZX1NFVFRJTkdTLnNwcml0ZTtcclxuICAgICAgICBzdXBlci5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHN1cGVyLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHN1cGVyLnNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBCTFVFX0VORU1ZX1NFVFRJTkdTLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IEJMVUVfRU5FTVlfU0VUVElOR1MuaGVpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLnNwZWVkID0gQkxVRV9FTkVNWV9TRVRUSU5HUy5zcGVlZDtcclxuICAgICAgICBzdXBlci5zcGVlZEF0dGFjayA9IEJMVUVfRU5FTVlfU0VUVElOR1Muc3BlZWRBdHRhY2s7XHJcbiAgICAgICAgc3VwZXIuc2hvdHMgPSBCTFVFX0VORU1ZX1NFVFRJTkdTLnNob3RzO1xyXG4gICAgICAgIHN1cGVyLmNvc3QgPSBCTFVFX0VORU1ZX1NFVFRJTkdTLmNvc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFB1cnBsZUVuZW15IGV4dGVuZHMgVW5pdCB7XHJcbiAgICAvLyBQdXJwbGUgZW5lbXkgY2xhc3NcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgcG9zaXRpb24pO1xyXG4gICAgICAgIHN1cGVyLnNwcml0ZSA9IFBVUlBMRV9FTkVNWV9TRVRUSU5HUy5zcHJpdGU7XHJcbiAgICAgICAgc3VwZXIucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICBzdXBlci5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICBzdXBlci5zaXplID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogUFVSUExFX0VORU1ZX1NFVFRJTkdTLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFBVUlBMRV9FTkVNWV9TRVRUSU5HUy5oZWlnaHRcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIuc3BlZWQgPSBQVVJQTEVfRU5FTVlfU0VUVElOR1Muc3BlZWQ7XHJcbiAgICAgICAgc3VwZXIuc3BlZWRBdHRhY2sgPSBQVVJQTEVfRU5FTVlfU0VUVElOR1Muc3BlZWRBdHRhY2s7XHJcbiAgICAgICAgc3VwZXIuc2hvdHMgPSBQVVJQTEVfRU5FTVlfU0VUVElOR1Muc2hvdHM7XHJcbiAgICAgICAgc3VwZXIuY29zdCA9IFBVUlBMRV9FTkVNWV9TRVRUSU5HUy5jb3N0O1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBSZWRFbmVteSBleHRlbmRzIFVuaXQge1xyXG4gICAgLy8gUmVkIGVuZW15IGNsYXNzXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBwb3NpdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIHBvc2l0aW9uKTtcclxuICAgICAgICBzdXBlci5zcHJpdGUgPSBSRURfRU5FTVlfU0VUVElOR1Muc3ByaXRlO1xyXG4gICAgICAgIHN1cGVyLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgc3VwZXIuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgc3VwZXIuc2l6ZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IFJFRF9FTkVNWV9TRVRUSU5HUy53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBSRURfRU5FTVlfU0VUVElOR1MuaGVpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLnNwZWVkID0gUkVEX0VORU1ZX1NFVFRJTkdTLnNwZWVkO1xyXG4gICAgICAgIHN1cGVyLnNwZWVkQXR0YWNrID0gUkVEX0VORU1ZX1NFVFRJTkdTLnNwZWVkQXR0YWNrO1xyXG4gICAgICAgIHN1cGVyLnNob3RzID0gUkVEX0VORU1ZX1NFVFRJTkdTLnNob3RzO1xyXG5cclxuICAgICAgICB0aGlzLmdlbmVyYWw7XHJcbiAgICAgICAgc3VwZXIuY29zdCA9IFJFRF9FTkVNWV9TRVRUSU5HUy5jb3N0O1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBHZW5lcmFsRW5lbXkgZXh0ZW5kcyBVbml0IHtcclxuICAgIC8vIEdlbmVyYWwgZW5lbXkgY2xhc3NcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgcG9zaXRpb24pO1xyXG4gICAgICAgIHN1cGVyLnNwcml0ZSA9IEdFTkVSQUxfRU5FTVlfU0VUVElOR1Muc3ByaXRlO1xyXG4gICAgICAgIHN1cGVyLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgc3VwZXIuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgc3VwZXIuc2l6ZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IEdFTkVSQUxfRU5FTVlfU0VUVElOR1Mud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogR0VORVJBTF9FTkVNWV9TRVRUSU5HUy5oZWlnaHRcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIuc3BlZWQgPSBHRU5FUkFMX0VORU1ZX1NFVFRJTkdTLnNwZWVkO1xyXG4gICAgICAgIHN1cGVyLnNwZWVkQXR0YWNrID0gR0VORVJBTF9FTkVNWV9TRVRUSU5HUy5zcGVlZEF0dGFjaztcclxuICAgICAgICBzdXBlci5zaG90cyA9IEdFTkVSQUxfRU5FTVlfU0VUVElOR1Muc2hvdHM7XHJcbiAgICAgICAgc3VwZXIuY29zdCA9IEdFTkVSQUxfRU5FTVlfU0VUVElOR1MuY29zdDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUGxheWVyIGV4dGVuZHMgVW5pdCB7XHJcbiAgICAvLyBQbGF5ZXIgdW5pdCBjbGFzc1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgcG9zaXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBwb3NpdGlvbik7XHJcbiAgICAgICAgc3VwZXIuc3ByaXRlID0gUExBWUVSX1NFVFRJTkdTLnNwcml0ZTtcclxuICAgICAgICBzdXBlci5saW1pdCA9IFBMQVlFUl9TRVRUSU5HUy5saW1pdDtcclxuICAgICAgICBzdXBlci5zaXplID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogUExBWUVSX1NFVFRJTkdTLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFBMQVlFUl9TRVRUSU5HUy5oZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN1cGVyLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgc3VwZXIuc3BlZWQgPSBQTEFZRVJfU0VUVElOR1Muc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRpcmVjdGlvbikge1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPj0gdGhpcy5saW1pdC5sZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDw9IHRoaXMubGltaXQucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZHJhdyh0aGlzLmNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVMZWZ0KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCdsZWZ0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVJpZ2h0KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCdyaWdodCcpO1xyXG4gICAgfVxyXG5cclxuICAgIF9kcmF3KGNvbnRleHQpIHtcclxuICAgICAgICBpZiAodGhpcy5oaWRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwKSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuc3ByaXRlO1xyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb250ZXh0LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNpemUud2lkdGgsIHRoaXMuc2l6ZS5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIuX3NldFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRXhwbG9kZSB7XHJcbiAgICAvLyBCYXNlIGNsYXNzIGZvciBleHBsb2RlXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBwb3NpdGlvbiwgbGltaXQpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLnNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3ByaXRlO1xyXG4gICAgICAgIHRoaXMuZnJhbWVSYXRlID0gMDtcclxuICAgICAgICB0aGlzLm9yaWdpbkxpbWl0ID0gbGltaXRcclxuICAgICAgICB0aGlzLmZyYW1lTGltaXQgPSB0aGlzLm9yaWdpbkxpbWl0O1xyXG4gICAgICAgIHRoaXMuZnJhbWUgPSAwOyAvLyBGaXJzdCBmcmFtZVxyXG4gICAgICAgIHRoaXMuZnJhbWVzID0gNDsgLy8gQW5pbWF0aW9uIHN0ZXBzXHJcbiAgICAgICAgdGhpcy5oaWRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1heEZyYW1lUmF0ZSA9IHRoaXMuZnJhbWVMaW1pdCAqIHRoaXMuZnJhbWVzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5fZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9kcmF3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhpZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDApJztcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNpemUud2lkdGgsIHRoaXMuc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZUxpbWl0ID0gdGhpcy5vcmlnaW5MaW1pdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xyXG4gICAgICAgICAgICAvLyBTcHJpdGUgYW5pbWF0aW9uIGZyb20gc3ByaXRlIHNoZWV0IChmb3IgaWRsZSB1c2Ugb25seSAyIGZpcnN0IGZyYW1lcylcclxuICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVSYXRlIDwgdGhpcy5mcmFtZUxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCB0aGlzLnNpemUud2lkdGggKiB0aGlzLmZyYW1lLCAwLCB0aGlzLnNpemUud2lkdGgsIHRoaXMuc2l6ZS5oZWlnaHQsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNpemUud2lkdGgsIHRoaXMuc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJhdGUrKztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZyYW1lUmF0ZSA+PSB0aGlzLmZyYW1lTGltaXQgJiYgdGhpcy5mcmFtZVJhdGUgPD0gdGhpcy5mcmFtZUxpbWl0ICogMiAmJiB0aGlzLmZyYW1lUmF0ZSA8PSB0aGlzLm1heEZyYW1lUmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZSsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZUxpbWl0ICo9IDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCB0aGlzLnNpemUud2lkdGggKiB0aGlzLmZyYW1lLCAwLCB0aGlzLnNpemUud2lkdGgsIHRoaXMuc2l6ZS5oZWlnaHQsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNpemUud2lkdGgsIHRoaXMuc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJhdGUrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSYXRlID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBzZXRQb3NpdGlvbihwb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRW5lbXlFeHBsb2RlIGV4dGVuZHMgRXhwbG9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBwb3NpdGlvbiwgbGltaXQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBwb3NpdGlvbiwgbGltaXQpO1xyXG4gICAgICAgIHN1cGVyLnNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBFTkVNWV9FWFBMT0RFLnNpemUud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogRU5FTVlfRVhQTE9ERS5zaXplLmhlaWdodFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1cGVyLnNwcml0ZSA9IEVORU1ZX0VYUExPREUuc3ByaXRlO1xyXG4gICAgICAgIHN1cGVyLmZyYW1lcyA9IEVORU1ZX0VYUExPREUuZnJhbWVzO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQbGF5ZXJFeHBsb2RlIGV4dGVuZHMgRXhwbG9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBwb3NpdGlvbiwgbGltaXQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBwb3NpdGlvbiwgbGltaXQpO1xyXG4gICAgICAgIHN1cGVyLnNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBQTEFZRVJfRVhQTE9ERS5zaXplLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFBMQVlFUl9FWFBMT0RFLnNpemUuaGVpZ2h0XHJcbiAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VwZXIuc3ByaXRlID0gUExBWUVSX0VYUExPREUuc3ByaXRlO1xyXG4gICAgICAgIHN1cGVyLmZyYW1lcyA9IFBMQVlFUl9FWFBMT0RFLmZyYW1lcztcclxuICAgIH1cclxufVxyXG5cclxuLy8gRXhwb3J0aW5nIGVudGV0aWVzXHJcbmV4cG9ydCB7XHJcbiAgICBQbGF5ZXIsIEJsdWVFbmVteSwgUHVycGxlRW5lbXksIFJlZEVuZW15LCBHZW5lcmFsRW5lbXksIEJ1bGxldCwgVW5pdCwgUm9ja2V0LCBFbmVteUV4cGxvZGUsIFBsYXllckV4cGxvZGVcclxufTsiLCIvLyBNYWluIGdhbWUgb2JqZWN0XHJcblxyXG5pbXBvcnQgeyBQbGF5ZXIsIEJsdWVFbmVteSwgUHVycGxlRW5lbXksIFJlZEVuZW15LCBHZW5lcmFsRW5lbXksIEJ1bGxldCwgUm9ja2V0LCBFbmVteUV4cGxvZGUsIFBsYXllckV4cGxvZGUgfSBmcm9tICcuL2VudGl0aWVzJztcclxuaW1wb3J0IHsgQmFja2dyb3VuZCwgVGV4dCwgUGxheWVyTGl2ZSwgV2F2ZUxhYmVsIH0gZnJvbSAnLi9ndWknO1xyXG5pbXBvcnQgSW5wdXRDb250cm9sbGVyIGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncyc7XHJcbmltcG9ydCBWZWN0b3IyZCBmcm9tICcuL3ZlY3Rvcic7XHJcbmltcG9ydCBBdWRpb0NvbnRyb2xsZXIgZnJvbSAnLi9zb3VuZCc7XHJcblxyXG5jb25zdCBTRVRUSU5HUyA9IFNldHRpbmdzLnNjZW5lO1xyXG5cclxuY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHVzZXIpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVxdWVzdDtcclxuICAgICAgICB0aGlzLmlucHV0Q29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLm9uUGF1c2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQ7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5yZWJvcm5SZWFkeSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXR0YWNraW5nRW5lbWllcyA9IFtdO1xyXG4gICAgICAgIHRoaXMua2lsbGVkID0gMDtcclxuICAgICAgICB0aGlzLm1heEVuZW1pZXM7XHJcbiAgICAgICAgdGhpcy5idWxsZXQ7XHJcbiAgICAgICAgdGhpcy5yb2NrZXRzID0gW107XHJcbiAgICAgICAgdGhpcy5zaG90cyA9IDI7XHJcbiAgICAgICAgdGhpcy5tYXhSb2NrZXRzID0gMjA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJCdWxsZXRzID0gMDtcclxuICAgICAgICB0aGlzLm1heFBsYXllckJ1bGxldHMgPSAxO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhbEVuZW15VGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhbFJlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbmVteUV4cGxvZGU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJFeHBsb2RlO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVUZXh0O1xyXG4gICAgICAgIHRoaXMudXNlclNjb3JlVGV4dDtcclxuICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IDUwMDA7XHJcbiAgICAgICAgdGhpcy5oaWdoU2NvcmVUZXh0O1xyXG4gICAgICAgIHRoaXMuaGlnaFNjb3JlTGFiZWw7XHJcbiAgICAgICAgdGhpcy5saXZlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubGl2ZXNDb3VudCA9IFNFVFRJTkdTLnBsYXllci5saXZlcztcclxuICAgICAgICB0aGlzLm1heExpdmVzQ291bnQgPSBTRVRUSU5HUy5wbGF5ZXIubWF4TGl2ZXM7XHJcbiAgICAgICAgdGhpcy5hZGRMaXZlQ291bnQgPSBTRVRUSU5HUy5uZXh0TGl2ZTtcclxuICAgICAgICB0aGlzLndhdmVzQ291bnQgPSAxO1xyXG4gICAgICAgIHRoaXMud2F2ZUxhYmVsO1xyXG4gICAgICAgIHRoaXMud2F2ZXNUZXh0TGFiZWw7XHJcbiAgICAgICAgdGhpcy5yZWFkeUxhYmVsO1xyXG4gICAgICAgIHRoaXMucGF1c2VMYWJlbDtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyTGFiZWw7XHJcbiAgICAgICAgdGhpcy5yZXN0YXJ0TGFiZWw7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGVhZGVyQm9hcmQgPSBbXTtcclxuICAgICAgICB0aGlzLmNsZWFyU2NlbmVUaW1lcjtcclxuICAgICAgICB0aGlzLnBsYXllclJlYm9yblRpbWVyO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUaW1lcjtcclxuICAgICAgICB0aGlzLnJlc2V0VGltZXI7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlUGF1c2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNvdW5kQ29udG9sbGVyID0gbmV3IEF1ZGlvQ29udHJvbGxlcigpO1xyXG4gICAgICAgIHRoaXMuYWxsU291bmRzID0gdGhpcy5zb3VuZENvbnRvbGxlci5zb3VuZHM7XHJcbiAgICB9XHJcbiAgICBnZXQgbWF4RW5lbWllcygpIHtcclxuICAgICAgICByZXR1cm4gU0VUVElOR1MuYmx1ZUVuZW1pZXMuY291bnQgKiBTRVRUSU5HUy5ibHVlRW5lbWllcy5kaXZpc2lvbnMgK1xyXG4gICAgICAgICAgICBTRVRUSU5HUy5wdXJwbGVFbmVtaWVzLmNvdW50ICogU0VUVElOR1MucHVycGxlRW5lbWllcy5kaXZpc2lvbnMgK1xyXG4gICAgICAgICAgICBTRVRUSU5HUy5yZWRFbmVtaWVzLmNvdW50ICogU0VUVElOR1MucmVkRW5lbWllcy5kaXZpc2lvbnMgK1xyXG4gICAgICAgICAgICBTRVRUSU5HUy5nZW5lcmFsRW5lbWllcy5jb3VudCAqIFNFVFRJTkdTLmdlbmVyYWxFbmVtaWVzLmRpdmlzaW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IG9iamVjdHNcclxuICAgIF9kcmF3T2JqZWN0KGNvbnRleHQsIG9iamVjdCkge1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gb2JqZWN0LnNwcml0ZTtcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KG9iamVjdC54LCBvYmplY3QueSwgb2JqZWN0LndpZHRoLCBvYmplY3QuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0UmFuZG9tKG1pbiwgbWF4KSB7XHJcbiAgICAgICAgdmFyIHJhbmQgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pO1xyXG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKHJhbmQpO1xyXG4gICAgICAgIHJldHVybiByYW5kO1xyXG4gICAgfVxyXG5cclxuICAgIF9jbG9uZUdlbmVyYWxHcm91cChnZW5lcmFsQ2xvbmUsIG1pbmlvbkNsb25lcykge1xyXG4gICAgICAgIC8vIENsb25pbmcgZ2VuZXJhbCBvbmx5IG9yIGdlbmVyYWwgd2l0aCBtaW5pb2luc1xyXG5cclxuICAgICAgICAvLyBDbG9uZSBnZW5lcmFsLCBzZXQgd2F5cG9pbnRzIGFuZCBhZGQgdG8gYXR0YWNraW5nIGVuZW1pZXMgYXJyXHJcbiAgICAgICAgbGV0IGcgPSBuZXcgR2VuZXJhbEVuZW15KHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKGdlbmVyYWxDbG9uZS5wb3NpdGlvbi54LCBnZW5lcmFsQ2xvbmUucG9zaXRpb24ueSkpO1xyXG4gICAgICAgIGcuYXR0YWNrID0gdHJ1ZTtcclxuICAgICAgICBnLnByb3RvID0gZ2VuZXJhbENsb25lO1xyXG4gICAgICAgIGxldCBnV2F5cyA9IHRoaXMuX2dlbmVyYXRlV2F5cG9pbnRzKGcsICdoYXJkJyk7XHJcbiAgICAgICAgZy5zZXRXYXlwb2ludHMoZ1dheXMpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNraW5nRW5lbWllcy5wdXNoKGcpO1xyXG5cclxuICAgICAgICAvLyBDbG9uZSBtaW5pb25zLCBzZXQgd2F5cG9pbnRzIGFuZCBhZGQgdG8gYXR0YWNraW5nIGVuZW1pZXMgYXJyXHJcbiAgICAgICAgbGV0IG0gPSBbXTtcclxuXHJcbiAgICAgICAgbWluaW9uQ2xvbmVzLmZvckVhY2gobWluaW9uID0+IHtcclxuICAgICAgICAgICAgbGV0IGNsb25lID0gbWluaW9uO1xyXG4gICAgICAgICAgICBsZXQgcmVkID0gbmV3IFJlZEVuZW15KHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKGNsb25lLnBvc2l0aW9uLngsIGNsb25lLnBvc2l0aW9uLnkpKTtcclxuICAgICAgICAgICAgcmVkLmF0dGFjayA9IHRydWU7XHJcbiAgICAgICAgICAgIHJlZC5wcm90byA9IGNsb25lO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0WCA9IHJlZC5wb3NpdGlvbi54IC0gZy5wb3NpdGlvbi54O1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0WSA9IHJlZC5wb3NpdGlvbi55IC0gZy5wb3NpdGlvbi55O1xyXG5cclxuICAgICAgICAgICAgZy53YXlwb2ludHMuZm9yRWFjaCh3cCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgbWluaW9uIHdheXBvaW50cyBmcm9tIGdlbmVyYWwgd2F5c1xyXG4gICAgICAgICAgICAgICAgcmVkLndheXBvaW50cy5wdXNoKG5ldyBWZWN0b3IyZCh3cC54ICsgb2Zmc2V0WCwgd3AueSArIG9mZnNldFkpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNraW5nRW5lbWllcy5wdXNoKHJlZCk7XHJcbiAgICAgICAgICAgIG0ucHVzaChyZWQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBnZW5lcmFsOiBnLCBtaW5pb25zOiBtIH07XHJcbiAgICB9XHJcblxyXG4gICAgX2dlbkF0dGFjayhlbmVtaWVzLCBhdHRhY2tUeXBlKSB7XHJcbiAgICAgICAgaWYgKGF0dGFja1R5cGUgPT0gJ2dlbmVyYWwnKSB7XHJcbiAgICAgICAgICAgIC8vIEdlbmVyYWxzIGF0dGFja1xyXG4gICAgICAgICAgICBsZXQgZ2VuZXJhbHMgPSBlbmVtaWVzLmZpbHRlcihnID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChnIGluc3RhbmNlb2YgR2VuZXJhbEVuZW15ICYmICFnLmhpZGUpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgYWxpdmUgZ2VuZXJhbHNcclxuICAgICAgICAgICAgaWYgKGdlbmVyYWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQXR0YWNrIGFsaXZlIGdlbmVyYWxzXHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aXZlOyAvLyBBQ3RpdmUgZ2VuZXJhbFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEdldCBnZW5lcmFsXHJcbiAgICAgICAgICAgICAgICBpZiAoZ2VuZXJhbHMubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPSBnZW5lcmFsc1t0aGlzLl9nZXRSYW5kb20oMCwgMSldO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPSBnZW5lcmFsc1swXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEdldCBnZW5lcmFsJ3MgbWluaW9uc1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pbmlvbnMgPSBlbmVtaWVzLmZpbHRlcihyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAociBpbnN0YW5jZW9mIFJlZEVuZW15ICYmICFyLmhpZGUgJiYgci5nZW5lcmFsID09IGFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWluaW9ucy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEF0dGFjayB3aXRoIDIgbWluaW9pbnNcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVkMSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZDIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkMSA9IG1pbmlvbnNbdGhpcy5fZ2V0UmFuZG9tKDAsIG1pbmlvbnMubGVuZ3RoIC0gMSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWQyID0gbWluaW9uc1t0aGlzLl9nZXRSYW5kb20oMCwgbWluaW9ucy5sZW5ndGggLSAxKV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChyZWQxID09IHJlZDIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBncm91cCA9IHRoaXMuX2Nsb25lR2VuZXJhbEdyb3VwKGFjdGl2ZSwgW3JlZDEsIHJlZDJdKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmUuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2goZ3JvdXAuZ2VuZXJhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlZDEuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2goZ3JvdXAubWluaW9uc1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkMi5oaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChncm91cC5taW5pb25zWzFdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWluaW9ucy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEF0dGFjayB3aXRoIDEgbWluaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZCA9IG1pbmlvbnNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdyb3VwID0gdGhpcy5fY2xvbmVHZW5lcmFsR3JvdXAoYWN0aXZlLCBbcmVkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlLmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKGdyb3VwLmdlbmVyYWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZWQuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2goZ3JvdXAubWluaW9uc1swXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEF0dGFjayBvbmx5IGdlbmVyYWxcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZ2VuZXJhbCA9IHRoaXMuX2Nsb25lVW5pdChhY3RpdmUsICdoYXJkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlLmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKGdlbmVyYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gT25seSBtaW5pb25zIGF0dGFja1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwID0gdGhpcy5fY3JlYXRlQXR0YWNrR3JvdXAoZW5lbWllcywgJ3JlZCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVuaXQgPSBncm91cFt0aGlzLl9nZXRSYW5kb20oMCwgZ3JvdXAubGVuZ3RoIC0gMSldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh1bml0ICE9IHVuZGVmaW5lZCAmJiBncm91cC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bml0LmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKHRoaXMuX2Nsb25lVW5pdCh1bml0LCAnaGFyZCcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGF0dGFja1R5cGUgPT0gJ3NpbmdsZS1ibHVlJykge1xyXG4gICAgICAgICAgICAvLyBFYXN5IGF0dGFjayBvbmx5IG9uZSBibHVlIGVuZW15ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgZ3JvdXAgPSB0aGlzLl9jcmVhdGVBdHRhY2tHcm91cChlbmVtaWVzLCAnYmx1ZScpO1xyXG4gICAgICAgICAgICBsZXQgdW5pdCA9IGdyb3VwW3RoaXMuX2dldFJhbmRvbSgwLCBncm91cC5sZW5ndGggLSAxKV07XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAodW5pdCA9PSB1bmRlZmluZWQgfHwgIWdyb3VwLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5hdHRhY2tUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdOdWxsZWJsZSBhdHRhY2tpbmcgc2luZ2xlIGJsdWUgZ3JvdXAnKTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBpZiAodW5pdCAhPSB1bmRlZmluZWQgJiYgZ3JvdXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB1bml0LmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2godGhpcy5fY2xvbmVVbml0KHVuaXQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrVHlwZSA9PSAnZG91YmxlLWJsdWUnKSB7XHJcbiAgICAgICAgICAgIC8vIEVhc3kgYXR0YWNrIGNvdXBsZSBlbmVtaWVzXHJcbiAgICAgICAgICAgIGxldCBncm91cCA9IHRoaXMuX2NyZWF0ZUF0dGFja0dyb3VwKGVuZW1pZXMsICdibHVlJyk7XHJcbiAgICAgICAgICAgIGxldCBpZDEgPSAwO1xyXG4gICAgICAgICAgICBsZXQgaWQyID0gMDtcclxuICAgICAgICAgICAgLy8gUHJldmVudCBpbmZpbml0ZSBsb29wXHJcbiAgICAgICAgICAgIGlmIChncm91cC5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkMSA9IHRoaXMuX2dldFJhbmRvbSgwLCBncm91cC5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZDIgPSB0aGlzLl9nZXRSYW5kb20oMCwgZ3JvdXAubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoaWQxID09IGlkMilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHVuaXQxID0gZ3JvdXBbaWQxXTtcclxuICAgICAgICAgICAgbGV0IHVuaXQyID0gZ3JvdXBbaWQyXTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmICh1bml0MSA9PSB1bmRlZmluZWQgfHwgdW5pdDIgPT0gdW5kZWZpbmVkIHx8ICFncm91cC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuYXR0YWNrVGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnTnVsbGVibGUgYXR0YWNrIGdyb3VwIGluIGRvdWJsZSBhdHRhY2snKTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgaWYgKHVuaXQxICE9IHVuZGVmaW5lZCAmJiB1bml0MiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHVuaXQxLmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2godGhpcy5fY2xvbmVVbml0KHVuaXQxKSk7XHJcbiAgICAgICAgICAgICAgICB1bml0Mi5oaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKHRoaXMuX2Nsb25lVW5pdCh1bml0MikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tUeXBlID09ICdkb3VibGUtYmx1ZS1zaW5nbGUtcHVycGxlJykge1xyXG4gICAgICAgICAgICAvLyBIYXJkIGF0dGFjayB3aXRoIGNvdXBsZSBibHVlIGVuZW1pZXMgYW5kIHNpbmdsZSBwdXJwbGUgZW5lbXlcclxuXHJcbiAgICAgICAgICAgIC8vIEJsdWUgZW5lbWllc1xyXG4gICAgICAgICAgICBsZXQgYmx1ZUdyb3VwID0gdGhpcy5fY3JlYXRlQXR0YWNrR3JvdXAoZW5lbWllcywgJ2JsdWUnKTsgLy8gdGhpcyBhcnJheSBuZXZlciBiZSBpcyBlbXB0eVxyXG4gICAgICAgICAgICBsZXQgaWQxID0gMDtcclxuICAgICAgICAgICAgbGV0IGlkMiA9IDA7XHJcbiAgICAgICAgICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcFxyXG4gICAgICAgICAgICBpZiAoYmx1ZUdyb3VwLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQxID0gdGhpcy5fZ2V0UmFuZG9tKDAsIGJsdWVHcm91cC5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZDIgPSB0aGlzLl9nZXRSYW5kb20oMCwgYmx1ZUdyb3VwLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGlkMSA9PSBpZDIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB1bml0MSA9IGJsdWVHcm91cFtpZDFdO1xyXG4gICAgICAgICAgICBsZXQgdW5pdDIgPSBibHVlR3JvdXBbaWQyXTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmICh1bml0MSA9PSB1bmRlZmluZWQgfHwgdW5pdDIgPT0gdW5kZWZpbmVkIHx8ICFibHVlR3JvdXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmF0dGFja1RpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ051bGxlYmxlIGF0dGFjayBncm91cCBpbiBkb3VibGUgYmx1ZSAoMiBibHVlICsgMSBwdXJwbGUpIGF0dGFjaycpO1xyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBpZiAodW5pdDEgIT0gdW5kZWZpbmVkICYmIHVuaXQyICE9IHVuZGVmaW5lZCAmJiBibHVlR3JvdXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB1bml0MS5oaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKHRoaXMuX2Nsb25lVW5pdCh1bml0MSkpO1xyXG4gICAgICAgICAgICAgICAgdW5pdDIuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaCh0aGlzLl9jbG9uZVVuaXQodW5pdDIpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUHVycGxlIGVuZW15XHJcbiAgICAgICAgICAgIGxldCBwdXJwbGVHcm91cCA9IHRoaXMuX2NyZWF0ZUF0dGFja0dyb3VwKGVuZW1pZXMsICdwdXJwbGUnKTtcclxuICAgICAgICAgICAgbGV0IHB1cnBsZVVuaXQgPSBwdXJwbGVHcm91cFt0aGlzLl9nZXRSYW5kb20oMCwgcHVycGxlR3JvdXAubGVuZ3RoIC0gMSldO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHB1cnBsZUdyb3VwID09IHVuZGVmaW5lZCB8fCAhcHVycGxlR3JvdXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmF0dGFja1RpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ051bGxlYmxlIGF0dGFjayBncm91cCBpbiBwdXJwbGUgKDIgYmx1ZSArIDEgcHVycGxlKSBhdHRhY2snKTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgaWYgKHB1cnBsZUdyb3VwICE9IHVuZGVmaW5lZCAmJiBwdXJwbGVHcm91cC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHB1cnBsZVVuaXQuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaCh0aGlzLl9jbG9uZVVuaXQocHVycGxlVW5pdCwgJ2hhcmQnKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrVHlwZSA9PSAnc2luZ2xlLWJsdWUtc2luZ2xlLXB1cnBsZScpIHtcclxuICAgICAgICAgICAgLy8gSGFyZCBhdHRhY2sgd2l0aCBzaW5nbGUgYmx1ZSBlbmVtaWUgYW5kIHNpbmdsZSBwdXJwbGUgZW5lbXlcclxuXHJcbiAgICAgICAgICAgIC8vIEJsdWUgZW5lbXkgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBibHVlR3JvdXAgPSB0aGlzLl9jcmVhdGVBdHRhY2tHcm91cChlbmVtaWVzLCAnYmx1ZScpO1xyXG4gICAgICAgICAgICBsZXQgdW5pdCA9IGJsdWVHcm91cFt0aGlzLl9nZXRSYW5kb20oMCwgYmx1ZUdyb3VwLmxlbmd0aCAtIDEpXTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmICh1bml0ID09IHVuZGVmaW5lZCB8fCAhYmx1ZUdyb3VwLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5hdHRhY2tUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdOdWxsZWJsZSBhdHRhY2sgZ3JvdXAgaW4gZG91YmxlIGJsdWUgKDIgYmx1ZSArIDEgcHVycGxlKSBhdHRhY2snKTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgaWYgKHVuaXQgIT0gdW5kZWZpbmVkICYmIGJsdWVHcm91cC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHVuaXQuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaCh0aGlzLl9jbG9uZVVuaXQodW5pdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFB1cnBsZSBlbmVteVxyXG4gICAgICAgICAgICBsZXQgcHVycGxlR3JvdXAgPSB0aGlzLl9jcmVhdGVBdHRhY2tHcm91cChlbmVtaWVzLCAncHVycGxlJyk7XHJcbiAgICAgICAgICAgIGxldCBwdXJwbGVVbml0ID0gcHVycGxlR3JvdXBbdGhpcy5fZ2V0UmFuZG9tKDAsIHB1cnBsZUdyb3VwLmxlbmd0aCAtIDEpXTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIChwdXJwbGVVbml0ID09IHVuZGVmaW5lZCB8fCAhcHVycGxlR3JvdXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmF0dGFja1RpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ051bGxlYmxlIGF0dGFjayBncm91cCBpbiBkb3VibGUgYmx1ZSAoMiBibHVlICsgMSBwdXJwbGUpIGF0dGFjaycpO1xyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBpZiAocHVycGxlVW5pdCAhPSB1bmRlZmluZWQgJiYgcHVycGxlR3JvdXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBwdXJwbGVVbml0LmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2godGhpcy5fY2xvbmVVbml0KHB1cnBsZVVuaXQsICdoYXJkJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tUeXBlID09ICdzaW5nbGUtcHVycGxlJykge1xyXG4gICAgICAgICAgICAvLyBIYXJkIGF0dGFjayB3aXRoIHNpbmdsZSBwdXJwbGUgZW5lbXlcclxuICAgICAgICAgICAgbGV0IHB1cnBsZUdyb3VwID0gdGhpcy5fY3JlYXRlQXR0YWNrR3JvdXAoZW5lbWllcywgJ3B1cnBsZScpO1xyXG4gICAgICAgICAgICBsZXQgcHVycGxlVW5pdCA9IHB1cnBsZUdyb3VwW3RoaXMuX2dldFJhbmRvbSgwLCBwdXJwbGVHcm91cC5sZW5ndGggLSAxKV07XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAocHVycGxlVW5pdCA9PSB1bmRlZmluZWQgfHwgIXB1cnBsZUdyb3VwLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5hdHRhY2tUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdOdWxsZWJsZSBhdHRhY2sgZ3JvdXAgaW4gZG91YmxlIGJsdWUgKDIgYmx1ZSArIDEgcHVycGxlKSBhdHRhY2snKTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgaWYgKHB1cnBsZVVuaXQgIT0gdW5kZWZpbmVkICYmIHB1cnBsZUdyb3VwLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcHVycGxlVW5pdC5oaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKHRoaXMuX2Nsb25lVW5pdChwdXJwbGVVbml0LCAnaGFyZCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF0dGFja1RpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVBdHRhY2tHcm91cChlbmVtaWVzLCB0eXBlKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGdyb3VwIHVuaXRzIHdhaXRpbmcgYXR0YWNrXHJcbiAgICAgICAgbGV0IGdyb3VwO1xyXG4gICAgICAgIGlmICh0eXBlID09ICdibHVlJykge1xyXG4gICAgICAgICAgICBncm91cCA9IGVuZW1pZXMuZmlsdGVyKGVuID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbiBpbnN0YW5jZW9mIEJsdWVFbmVteSAmJiAhZW4uaGlkZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAncHVycGxlJykge1xyXG4gICAgICAgICAgICBncm91cCA9IGVuZW1pZXMuZmlsdGVyKGVuID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbiBpbnN0YW5jZW9mIFB1cnBsZUVuZW15ICYmICFlbi5oaWRlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09ICdyZWQnKSB7XHJcbiAgICAgICAgICAgIGdyb3VwID0gZW5lbWllcy5maWx0ZXIoZW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuIGluc3RhbmNlb2YgUmVkRW5lbXkgJiYgIWVuLmhpZGUpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVmVyeSB2ZXJ5IGJhZCBjb2RlIGZvciBmaW5kIGxlZnQgb3IgcmlnaHQgYm9yZGVyZWQgdW5pdHNcclxuICAgICAgICBsZXQgbWluUG9zaXRpb24gPSAxMDAwO1xyXG4gICAgICAgIGxldCBtYXhQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgZ3JvdXAuZm9yRWFjaChlbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbi5wb3NpdGlvbi54IDwgbWluUG9zaXRpb24pIG1pblBvc2l0aW9uID0gZW4ucG9zaXRpb24ueDtcclxuICAgICAgICAgICAgaWYgKGVuLnBvc2l0aW9uLnggPiBtYXhQb3NpdGlvbikgbWF4UG9zaXRpb24gPSBlbi5wb3NpdGlvbi54O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdyb3VwID0gZ3JvdXAuZmlsdGVyKChlbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW4ucG9zaXRpb24ueCA9PSBtaW5Qb3NpdGlvbiB8fCBlbi5wb3NpdGlvbi54ID09IG1heFBvc2l0aW9uKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xyXG4gICAgfVxyXG5cclxuICAgIF9jbG9uZVVuaXQoY2xvbmUsIG1vZGUpIHtcclxuICAgICAgICAvLyBDbG9uaW5nIGF0dGFjayBlbmVteSB1bml0LCBnZW5lcmF0ZSB3YXlwb2ludHMgYW5kIHJldGVybiBpdFxyXG4gICAgICAgIGxldCB1O1xyXG4gICAgICAgIGlmIChjbG9uZSBpbnN0YW5jZW9mIEJsdWVFbmVteSkge1xyXG4gICAgICAgICAgICB1ID0gbmV3IEJsdWVFbmVteSh0aGlzLmNvbnRleHQsIG5ldyBWZWN0b3IyZChjbG9uZS5wb3NpdGlvbi54LCBjbG9uZS5wb3NpdGlvbi55KSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjbG9uZSBpbnN0YW5jZW9mIFB1cnBsZUVuZW15KSB7XHJcbiAgICAgICAgICAgIHUgPSBuZXcgUHVycGxlRW5lbXkodGhpcy5jb250ZXh0LCBuZXcgVmVjdG9yMmQoY2xvbmUucG9zaXRpb24ueCwgY2xvbmUucG9zaXRpb24ueSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2xvbmUgaW5zdGFuY2VvZiBHZW5lcmFsRW5lbXkpIHtcclxuICAgICAgICAgICAgdSA9IG5ldyBHZW5lcmFsRW5lbXkodGhpcy5jb250ZXh0LCBuZXcgVmVjdG9yMmQoY2xvbmUucG9zaXRpb24ueCwgY2xvbmUucG9zaXRpb24ueSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2xvbmUgaW5zdGFuY2VvZiBSZWRFbmVteSkge1xyXG4gICAgICAgICAgICB1ID0gbmV3IFJlZEVuZW15KHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKGNsb25lLnBvc2l0aW9uLngsIGNsb25lLnBvc2l0aW9uLnkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHUuYXR0YWNrID0gdHJ1ZTtcclxuICAgICAgICB1LnByb3RvID0gY2xvbmU7XHJcbiAgICAgICAgbGV0IHdheXM7XHJcbiAgICAgICAgaWYgKCFtb2RlKSB7XHJcbiAgICAgICAgICAgIHdheXMgPSB0aGlzLl9nZW5lcmF0ZVdheXBvaW50cyh1LCAnZWFzeScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdheXMgPSB0aGlzLl9nZW5lcmF0ZVdheXBvaW50cyh1LCAnaGFyZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdS5zZXRXYXlwb2ludHMod2F5cyk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tpbmdFbmVtaWVzLnB1c2godSk7XHJcblxyXG4gICAgICAgIHJldHVybiB1O1xyXG4gICAgfVxyXG5cclxuICAgIF9nZW5lcmF0ZVdheXBvaW50cyh1bml0LCBtb2RlKSB7XHJcbiAgICAgICAgLy8gR2VuZXJhdGUgYW5kIHJldHVybiBlbmVteSB3YXlwb2ludHNcclxuICAgICAgICBsZXQgd2F5cG9pbnRzID0gW107XHJcbiAgICAgICAgbGV0IHdheXMgPSAobW9kZSA9PSAnZWFzeScpID8gd2F5cyA9IHRoaXMuX2dldFJhbmRvbSg0LCA2KSA6IHdheXMgPSB0aGlzLl9nZXRSYW5kb20oNSwgOCk7XHJcbiAgICAgICAgLy8gR2VuZXJhdGUgZmlyc3Qgd2F5cG9pbnRcclxuICAgICAgICBsZXQgZmlyc3QgPSBuZXcgVmVjdG9yMmQoMCwgMCk7XHJcbiAgICAgICAgLy8gRmlyc3QgeCBwb3NpdGlvblxyXG4gICAgICAgIGlmICh1bml0LnBvc2l0aW9uLnggPD0gMTAwKSB7XHJcbiAgICAgICAgICAgIC8vIE1vdmUgbGVmdCBlYXN5ICAgICAgXHJcbiAgICAgICAgICAgIGZpcnN0LnggPSB0aGlzLl9nZXRSYW5kb20oMCwgdW5pdC5wb3NpdGlvbi54IC0gdW5pdC5zaXplLndpZHRoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHVuaXQucG9zaXRpb24ueCA+IDEwMSAmJiB1bml0LnBvc2l0aW9uLnggPD0gMTc1KSB7XHJcbiAgICAgICAgICAgIC8vIE1vdmUgbGVmdCBoYXJkXHJcbiAgICAgICAgICAgIGZpcnN0LnggPSB0aGlzLl9nZXRSYW5kb20odW5pdC5zaXplLndpZHRoICogMiwgdW5pdC5wb3NpdGlvbi54IC0gdW5pdC5zaXplLndpZHRoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHVuaXQucG9zaXRpb24ueCA+IDE3NSAmJiB1bml0LnBvc2l0aW9uLnggPD0gMjc1KSB7XHJcbiAgICAgICAgICAgIC8vTW92ZSByb2dodCBoYXJkXHJcbiAgICAgICAgICAgIGZpcnN0LnggPSB0aGlzLl9nZXRSYW5kb20odW5pdC5zaXplLndpZHRoICogMiwgdW5pdC5wb3NpdGlvbi54ICsgdW5pdC5zaXplLndpZHRoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHVuaXQucG9zaXRpb24ueCA+IDI3NSkge1xyXG4gICAgICAgICAgICAvLyBNb3ZlIHJpZ2h0IGVhc3lcclxuICAgICAgICAgICAgZmlyc3QueCA9IHRoaXMuX2dldFJhbmRvbSh1bml0LnNpemUud2lkdGgsIHVuaXQucG9zaXRpb24ueCArIHVuaXQuc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEZpcnN0IHkgcG9zaXRpb25cclxuICAgICAgICBpZiAodW5pdC5wb3NpdGlvbi55ID09IDIyMCkge1xyXG4gICAgICAgICAgICAvLyBCb3R0b20gYmx1ZSBlbmVteSBwb3NpdGlvbiBpbiB5XHJcbiAgICAgICAgICAgIGZpcnN0LnkgPSB0aGlzLl9nZXRSYW5kb20odW5pdC5wb3NpdGlvbi55LCAzMDApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodW5pdC5wb3NpdGlvbi55ID09IDE5MCkge1xyXG4gICAgICAgICAgICAvLyBCbHVlIG1pZGRsZSByb3cgZW5lbXkgcG9zaXRpb24gaW4geVxyXG4gICAgICAgICAgICBmaXJzdC55ID0gdGhpcy5fZ2V0UmFuZG9tKHVuaXQucG9zaXRpb24ueSArIHVuaXQuc2l6ZS5oZWlnaHQgKiAzLCAzMDApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodW5pdC5wb3NpdGlvbi55ID09IDE2MCkge1xyXG4gICAgICAgICAgICAvLyBCbHVlIHRvcCByb3cgZW5lbXkgcG9zaXRpb24gaW4geVxyXG4gICAgICAgICAgICBmaXJzdC55ID0gdGhpcy5fZ2V0UmFuZG9tKHVuaXQucG9zaXRpb24ueSArIHVuaXQuc2l6ZS5oZWlnaHQgKiA1LCAzMDApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodW5pdC5wb3NpdGlvbi55ID09IDEzMCkge1xyXG4gICAgICAgICAgICAvLyBQdXJwbGUgZW5lbXkgcG9zaXRpb24gaW4geVxyXG4gICAgICAgICAgICBmaXJzdC55ID0gdGhpcy5fZ2V0UmFuZG9tKHVuaXQucG9zaXRpb24ueSArIHVuaXQuc2l6ZS5oZWlnaHQgKiA3LCAzMDApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodW5pdC5wb3NpdGlvbi55ID09IDEwMCkge1xyXG4gICAgICAgICAgICAvLyBSZWQgZW5lbXkgcG9zaXRpb24gaW4geVxyXG4gICAgICAgICAgICBmaXJzdC55ID0gdGhpcy5fZ2V0UmFuZG9tKHVuaXQucG9zaXRpb24ueSArIHVuaXQuc2l6ZS5oZWlnaHQgKiA5LCAzMDApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodW5pdC5wb3NpdGlvbi55ID09IDc1KSB7XHJcbiAgICAgICAgICAgIGZpcnN0LnkgPSB0aGlzLl9nZXRSYW5kb20odW5pdC5wb3NpdGlvbi55ICsgdW5pdC5zaXplLmhlaWdodCAqIDExLCAzMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3YXlwb2ludHMucHVzaChmaXJzdCk7XHJcblxyXG4gICAgICAgIC8vIEFpbWVkIGZpcmUgd2F5cG9pbnRcclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IDUwOyAvLyBUYXJnZXQgb2Zmc2V0IGluIHggYXhpc1xyXG4gICAgICAgIGxldCBvZmZzZXRZID0gMTIwOyAvLyBUYXJnZXQgb2Zmc2V0IGluIHkgYXhpc1xyXG5cclxuICAgICAgICAvLyBUYXJnZXQgcG9zaXRpb25cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5wbGF5ZXIucG9zaXRpb247XHJcbiAgICAgICAgd2F5cG9pbnRzLnB1c2gobmV3IFZlY3RvcjJkKFxyXG4gICAgICAgICAgICB0YXJnZXQueCArICh0aGlzLl9nZXRSYW5kb20ob2Zmc2V0WCAqIC0xLCBvZmZzZXRYKSksXHJcbiAgICAgICAgICAgIHVuaXQucG9zaXRpb24ueSArICh0aGlzLl9nZXRSYW5kb20oMTIwLCAxODApKVxyXG4gICAgICAgICkpO1xyXG4gICAgICAgIG9mZnNldFkgPSAxODA7XHJcblxyXG4gICAgICAgIC8vIEFkZCBhbm90aGVyIHdheXBvaW50cyAoMCBhbmQgMSBlbGVtZW50IHdlIGFscmVhZHkgdXNpbmcsIHN0YXJ0IHdpdGggMiBpbmRleClcclxuICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8IHdheXM7IGkrKykge1xyXG4gICAgICAgICAgICB3YXlwb2ludHMucHVzaChuZXcgVmVjdG9yMmQoXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQueCArICh0aGlzLl9nZXRSYW5kb20ob2Zmc2V0WCAqIC0xLCBvZmZzZXRYKSksXHJcbiAgICAgICAgICAgICAgICB1bml0LnBvc2l0aW9uLnkgKyB0aGlzLl9nZXRSYW5kb20ob2Zmc2V0WSwgb2Zmc2V0WSlcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgIG9mZnNldFggKz0gNTA7XHJcbiAgICAgICAgICAgIG9mZnNldFkgKz0gNTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZGQgdGFpbCB3YXlwb2ludHMgZm9yIG92ZXJzY3JlZW4gaGlkZSB1bml0XHJcbiAgICAgICAgd2F5cG9pbnRzLnB1c2gobmV3IFZlY3RvcjJkKHRoaXMucGxheWVyLnBvc2l0aW9uLngsIDY1MCkpO1xyXG4gICAgICAgIGlmICh1bml0LnBvc2l0aW9uLnggPD0gMTUwKSB7XHJcbiAgICAgICAgICAgIHdheXBvaW50cy5wdXNoKG5ldyBWZWN0b3IyZCgtNDAsIDY1MCkpO1xyXG4gICAgICAgICAgICB3YXlwb2ludHMucHVzaChuZXcgVmVjdG9yMmQoLTQwLCAxMDApKTtcclxuICAgICAgICAgICAgd2F5cG9pbnRzLnB1c2gobmV3IFZlY3RvcjJkKHVuaXQucHJvdG8ucG9zaXRpb24ueCwgdW5pdC5wcm90by5wb3NpdGlvbi55KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2F5cG9pbnRzLnB1c2gobmV3IFZlY3RvcjJkKDQ0MCwgNjUwKSk7XHJcbiAgICAgICAgICAgIHdheXBvaW50cy5wdXNoKG5ldyBWZWN0b3IyZCg0NDAsIDEwMCkpO1xyXG4gICAgICAgICAgICB3YXlwb2ludHMucHVzaChuZXcgVmVjdG9yMmQodW5pdC5wcm90by5wb3NpdGlvbi54LCB1bml0LnByb3RvLnBvc2l0aW9uLnkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdheXBvaW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHdheXBvaW50cztcclxuICAgIH1cclxuXHJcbiAgICBfZ2VuTmV3V2F2ZSgpIHtcclxuICAgICAgICAvLyBHZW5lcmF0ZSBuZXcgZW5lbXkgd2F2ZSAoanVzdCBzZXQgaGlkZSBwcm9wIGluIGZhbHNlIG9uIGFuIGVhY2ggZW5lbXkgb2JqZWN0KSBhbmQgdXBkYXRlZSB3YXZlIGNvdW50ZXJcclxuICAgICAgICBpZiAodGhpcy5raWxsZWQgPT0gdGhpcy5tYXhFbmVtaWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IHtcclxuICAgICAgICAgICAgICAgIGVuZW15LmhpZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIENoYW5nZSB3YXZlcyBjb3VudGVyXHJcbiAgICAgICAgICAgIHRoaXMud2F2ZXNDb3VudCsrO1xyXG4gICAgICAgICAgICB0aGlzLndhdmVzVGV4dExhYmVsLnNldFRleHQoYDogJHt0aGlzLndhdmVzQ291bnR9YCk7XHJcbiAgICAgICAgICAgIC8vIEdldCBlbmVteSBhdHRhY2sgdGltZXJcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmFsRW5lbXlUaW1lciA9IDA7XHJcbiAgICAgICAgICAgIC8vIENsZWFyIGtpbGxlZCBjb3VudGVyXHJcbiAgICAgICAgICAgIHRoaXMua2lsbGVkID0gMDtcclxuICAgICAgICAgICAgLy8gU3RhcnQgZW5lbWllcyBhdHRhY2tpbmcgdGltZXJcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2tUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl9nZW5BdHRhY2sodGhpcy5lbmVtaWVzLCAnc2luZ2xlLWJsdWUnKSB9LCAxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlUGF1c2UgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dhbWVPdmVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5nYW1lT3ZlciAmJiAhdGhpcy5vblBhdXNlKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmdhbWVPdmVyVGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyVGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIHNjb3JlXHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrUmVjb3JkKCk7XHJcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGxlYWRlcmJvYXJkXHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUxlYWRlcmJvYXJkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tSZWNvcmQoKSB7XHJcbiAgICAgICAgLy8gQ29tcGFyZSBmaW5hbCBzY29yZSB3aXRoIGxlYWRlcmJvYXJkIG9iamVjdCBhbmQgYWRkIHNjb3JlIGFuZCB1c2VyIGludG8gaWYgbmVlZFxyXG4gICAgICAgIHRoaXMudXNlclNjb3JlVGV4dCA9IG5ldyBUZXh0KHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKDgwLCA0OTApLCBgJHt0aGlzLnVzZXJuYW1lfSwgWU9VUiBTQ09SRSAtICR7dGhpcy5zY29yZX0sIFdBVkVTIC0gJHt0aGlzLndhdmVzQ291bnR9YCwgJ3JlZCcsIDI1MCwgMTcpO1xyXG4gICAgICAgIGxldCBsZWFkZXJzID0gU0VUVElOR1MubGVhZGVyYm9hcmQ7XHJcblxyXG4gICAgICAgIGxldCBhZGQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBkdXBsaWNhdGUgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVhZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlID0gbGVhZGVyc1tpXTtcclxuICAgICAgICAgICAgaWYgKGUudXNlciA9PSB0aGlzLnVzZXJuYW1lICYmIHRoaXMuc2NvcmUgPCBlLnNjb3JlKSB7XHJcbiAgICAgICAgICAgICAgICBhZGQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnVzZXIgPT0gdGhpcy51c2VybmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgb3IgZGV0ZWMgZHVwbGljYXRlIHVzZXJuYW1lIGFuZCByZXdyaXRlIGhpcyBzY29yZSBpZiBuZWVkXHJcbiAgICAgICAgaWYgKGFkZCAmJiAhZHVwbGljYXRlKSB7XHJcbiAgICAgICAgICAgIGxlYWRlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgc2NvcmU6IHRoaXMuc2NvcmVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhZGQgJiYgZHVwbGljYXRlKSB7XHJcbiAgICAgICAgICAgIGxlYWRlcnNbZHVwbGljYXRlXS5zY29yZSA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNvcnQgYnkgc2NvcmVcclxuICAgICAgICBsZWFkZXJzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGEuc2NvcmUgPiBiLnNjb3JlKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIGlmIChhLnNjb3JlIDwgYi5zY29yZSkgcmV0dXJuIDE7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gUmV3cml0ZSBsZWFkZXJib2FyZCBvYmpcclxuICAgICAgICBTRVRUSU5HUy5sZWFkZXJib2FyZCA9IGxlYWRlcnMuc2xpY2UoMCwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIF9wbGF5ZXJDb2xsaXNpb24ob3Bwb25lbnQpIHtcclxuICAgICAgICAvLyBEZXRlY3QgcGxheWVyIGNvbGxpc2lvbiB3aXRoIG9wcG9uZW50LCBjaGFuZ2luZyBsaXZlcyBhbmQgZ2FtZSBvdmVyIGluaXRcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuY29sbGlzaW9uKG9wcG9uZW50KSAmJiAhdGhpcy5wbGF5ZXIuaGlkZSkge1xyXG4gICAgICAgICAgICAvLyBFeHBsb2RlIGFuaW1hdGlvblxyXG4gICAgICAgICAgICBpZiAob3Bwb25lbnQgaW5zdGFuY2VvZiBCbHVlRW5lbXkgfHwgb3Bwb25lbnQgaW5zdGFuY2VvZiBQdXJwbGVFbmVteSB8fCBvcHBvbmVudCBpbnN0YW5jZW9mIFJlZEVuZW15IHx8IG9wcG9uZW50IGluc3RhbmNlb2YgR2VuZXJhbEVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDb2xsaXNpb24gd2l0aCBhdHRhY2tpbmcgZW5lbXlcclxuICAgICAgICAgICAgICAgIG9wcG9uZW50LmtpbGwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMua2lsbGVkKys7XHJcbiAgICAgICAgICAgICAgICAvLyBEZWxldGUgdGhpcyB1bml0IGZyb20gYXR0YWNraW5nIGFycmF5XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja2luZ0VuZW1pZXMuc3BsaWNlKHRoaXMuYXR0YWNraW5nRW5lbWllcy5pbmRleE9mKG9wcG9uZW50KSwgMSk7XHJcbiAgICAgICAgICAgICAgICAvLyBEZWxldGUgdGhpcyB1bml0IGZyb20gZW5lbWllcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZSh0aGlzLmVuZW1pZXMuaW5kZXhPZihvcHBvbmVudCksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEhpZGUgcGxheWVyXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBSZWFkeSB0byByZWJvcm5pbmcgc3RhdGVcclxuICAgICAgICAgICAgdGhpcy5yZWJvcm5SZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFBsYXllciBleHBsb2RlIGFuaW1hdGlvbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyRXhwbG9kZS5zZXRQb3NpdGlvbihuZXcgVmVjdG9yMmQodGhpcy5wbGF5ZXIucG9zaXRpb24ueCwgdGhpcy5wbGF5ZXIucG9zaXRpb24ueSkpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckV4cGxvZGUuaGlkZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGxpdmVcclxuICAgICAgICAgICAgdGhpcy5saXZlc0NvdW50LS07XHJcbiAgICAgICAgICAgIGxldCBsaXZlcyA9IHRoaXMubGl2ZXMuZmlsdGVyKGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsLmhpZGUpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGl2ZXMucG9wKCkuaGlkZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyBQbGF5IGRlc3Ryb3kgc291bmRcclxuICAgICAgICAgICAgdGhpcy5zb3VuZENvbnRvbGxlci5wbGF5KHRoaXMuYWxsU291bmRzLnBsYXllckV4cGxvZGUsIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9lbmVteUNvbGxpc2lvbihlbmVteSkge1xyXG4gICAgICAgIC8vIERldGVjdCBlbmVteSBjb2xsaXNpb24gd2l0aCBwbGF5ZXIncyBidWxsZXRcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgYXR0YWNraW5nIGVuZW15XHJcbiAgICAgICAgaWYgKGVuZW15LmNvbGxpc2lvbih0aGlzLmJ1bGxldCkgJiYgIWVuZW15LmhpZGUpIHtcclxuICAgICAgICAgICAgLy8gQ29sbGlzaW9uIHdpdGggcGxheWVyIGJ1bGxldFxyXG4gICAgICAgICAgICB0aGlzLmJ1bGxldC5zZXRQb3NpdGlvbihuZXcgVmVjdG9yMmQoMTAwMCwgMTAwMCkpOyAvLyBSZWxvY2F0ZSBidWxsZXRcclxuICAgICAgICAgICAgLy8gRXhwbG9kZSBhbmltYXRpb25cclxuICAgICAgICAgICAgdGhpcy5lbmVteUV4cGxvZGUuc2V0UG9zaXRpb24obmV3IFZlY3RvcjJkKGVuZW15LnBvc2l0aW9uLngsIGVuZW15LnBvc2l0aW9uLnkpKTtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUV4cGxvZGUuaGlkZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoZW5lbXkuYXR0YWNrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBhdHRhY2tpbmcgZW5lbXlcclxuICAgICAgICAgICAgICAgIGVuZW15LmtpbGwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMua2lsbGVkKys7XHJcbiAgICAgICAgICAgICAgICAvLyBEZWxldGUgdGhpcyB1bml0IGZyb20gYXR0YWNraW5nIGFycmF5XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja2luZ0VuZW1pZXMuc3BsaWNlKHRoaXMuYXR0YWNraW5nRW5lbWllcy5pbmRleE9mKGVuZW15KSwgMSk7XHJcbiAgICAgICAgICAgICAgICAvLyBEZWxldGUgdGhpcyB1bml0IGZyb20gZW5lbWllcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZSh0aGlzLmVuZW1pZXMuaW5kZXhPZihlbmVteSksIDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hhbmdlIHNjb3JlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IGVuZW15LmNvc3QgKiAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZVRleHQuc2V0VGV4dChgU0NPUkU6ICR7dGhpcy5zY29yZX1gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVuZW15LmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5raWxsZWQrKztcclxuICAgICAgICAgICAgICAgIC8vIENoYW5nZSBzY29yZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSBlbmVteS5jb3N0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZVRleHQuc2V0VGV4dChgU0NPUkU6ICR7dGhpcy5zY29yZX1gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPiB0aGlzLmhpZ2hTY29yZSkgdGhpcy5oaWdoU2NvcmVUZXh0LnNldFRleHQodGhpcy5zY29yZSk7XHJcbiAgICAgICAgICAgIC8vIEFkZCBwbGF5ZXIncyBsaXZlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjb3JlID4gdGhpcy5hZGRMaXZlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTGl2ZUNvdW50ICo9IDI7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXZlc0NvdW50IDwgdGhpcy5tYXhMaXZlc0NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlc1t0aGlzLmxpdmVzQ291bnRdLmhpZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVzQ291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUExheSBzb3VuZFxyXG4gICAgICAgICAgICB0aGlzLnNvdW5kQ29udG9sbGVyLnBsYXkodGhpcy5hbGxTb3VuZHMuZW5lbXlFeHBsb2RlLCAwLjEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlTGVhZGVyYm9hcmQoKSB7XHJcbiAgICAgICAgLy8gTGVhZGVyYm9hcmRcclxuICAgICAgICBsZXQgbGVhZGVyc1Bvc2l0aW9uID0gbmV3IFZlY3RvcjJkKDEzMCwgMjQwKTtcclxuICAgICAgICB0aGlzLmxlYWRlckJvYXJkLnB1c2gobmV3IFRleHQodGhpcy5jb250ZXh0LCBsZWFkZXJzUG9zaXRpb24sICdMIEUgQSBEIEUgUiBCIE8gQSBSIEQnLCAnb3JhbmdlJywgMTUwLCAxNykpO1xyXG4gICAgICAgIGxlYWRlcnNQb3NpdGlvbiA9IGxlYWRlcnNQb3NpdGlvbi5hZGQobmV3IFZlY3RvcjJkKDAsIDEwKSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpIGluIFNFVFRJTkdTLmxlYWRlcmJvYXJkKSB7XHJcbiAgICAgICAgICAgIGxlYWRlcnNQb3NpdGlvbiA9IGxlYWRlcnNQb3NpdGlvbi5hZGQobmV3IFZlY3RvcjJkKDAsIDIwKSk7XHJcbiAgICAgICAgICAgIGxldCB1c2VyUG9zID0gbGVhZGVyc1Bvc2l0aW9uLmFkZChuZXcgVmVjdG9yMmQoLTIwLCAwKSk7XHJcbiAgICAgICAgICAgIGxldCB1c2VyID0gbmV3IFRleHQodGhpcy5jb250ZXh0LCB1c2VyUG9zLCBgJHtTRVRUSU5HUy5sZWFkZXJib2FyZFtpXS51c2VyfWAsICdwdXJwbGUnLCAxMDAsIDE3KTtcclxuICAgICAgICAgICAgdGhpcy5sZWFkZXJCb2FyZC5wdXNoKHVzZXIpO1xyXG4gICAgICAgICAgICBsZXQgc2NvcmVQb3MgPSBsZWFkZXJzUG9zaXRpb24uYWRkKG5ldyBWZWN0b3IyZCg2MCwgMCkpO1xyXG4gICAgICAgICAgICBsZXQgc2NvcmUgPSBuZXcgVGV4dCh0aGlzLmNvbnRleHQsIHNjb3JlUG9zLCBgU0NPUkUgLSAke1NFVFRJTkdTLmxlYWRlcmJvYXJkW2ldLnNjb3JlfWAsICdwdXJwbGUnLCAyMDAsIDE3KTtcclxuICAgICAgICAgICAgdGhpcy5sZWFkZXJCb2FyZC5wdXNoKHNjb3JlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgaW5pdGlhbCBzdGF0ZSBnYW1lIHNjZW5lIGFuZCBjb2xsZWN0IGdhbWUgb2JqZWN0c1xyXG4gICAgX2J1aWxkKCkge1xyXG4gICAgICAgIC8vIEdldCBlbmVteSBhdHRhY2sgdGltZXJcclxuICAgICAgICB0aGlzLmdlbmVyYWxFbmVteVRpbWVyID0gMDtcclxuICAgICAgICAvLyBDcmVhdGUgYmFja2dyb3VuZFxyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKHRoaXMuY2FudmFzKTtcclxuICAgICAgICAvLyBCdWlsZCBpbnB1dCBjb250cm9sbGVyXHJcbiAgICAgICAgdGhpcy5pbnB1dENvbnRyb2xsZXIgPSBuZXcgSW5wdXRDb250cm9sbGVyKHdpbmRvdyk7XHJcbiAgICAgICAgLy8gTGlzdGVuIGlucHV0IGV2ZW50c1xyXG4gICAgICAgIHRoaXMuaW5wdXRDb250cm9sbGVyLmxpc3RlbigpO1xyXG5cclxuICAgICAgICAvLyBEcmF3IGJhY2tncm91bmRcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gU0VUVElOR1MuYmFja2dyb3VuZC5zcHJpdGU7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgR1VJXHJcblxyXG4gICAgICAgIC8vIFBsYXllciBzY29yZVxyXG4gICAgICAgIHRoaXMuc2NvcmVUZXh0ID0gbmV3IFRleHQodGhpcy5jb250ZXh0LCBuZXcgVmVjdG9yMmQoMTMsIDI1KSwgYFNDT1JFOiAke3RoaXMuc2NvcmV9YCwgU0VUVElOR1MudGV4dC5zY29yZS5jb2xvciwgU0VUVElOR1MudGV4dC5zY29yZS53aWR0aCwgMTUpO1xyXG4gICAgICAgIC8vIEhpZ2ggc2NvcmVcclxuICAgICAgICB0aGlzLmhpZ2hTY29yZUxhYmVsID0gbmV3IFRleHQodGhpcy5jb250ZXh0LCBuZXcgVmVjdG9yMmQoMTQzLCAyNSksIGBISUdIOiBgLCAncmVkJywgNTApO1xyXG4gICAgICAgIHRoaXMuaGlnaFNjb3JlVGV4dCA9IG5ldyBUZXh0KHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKDE4NiwgMjUpLCBgJHt0aGlzLmhpZ2hTY29yZX1gLCBTRVRUSU5HUy50ZXh0LmhpZ2hTY29yZS5jb2xvciwgU0VUVElOR1MudGV4dC5oaWdoU2NvcmUud2lkdGgsIDE1KTtcclxuICAgICAgICAvLyBQbGF5ZXIgbGl2ZXNcclxuICAgICAgICBsZXQgbGl2ZXNQb3NpdGlvbiA9IG5ldyBWZWN0b3IyZCgyNDUsIDEyKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4TGl2ZXNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxpdmVzUG9zaXRpb24gPSBsaXZlc1Bvc2l0aW9uLmFkZChuZXcgVmVjdG9yMmQoMTUsIDApKTtcclxuICAgICAgICAgICAgbGV0IGwgPSBuZXcgUGxheWVyTGl2ZSh0aGlzLmNvbnRleHQsIGxpdmVzUG9zaXRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmxpdmVzLnB1c2gobCk7XHJcbiAgICAgICAgICAgIGlmIChpID49IHRoaXMubGl2ZXNDb3VudCkgbC5oaWRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ3JlYXRlIHdhdmUgc3ByaXRlIGxhYmVsXHJcbiAgICAgICAgdGhpcy53YXZlTGFiZWwgPSBuZXcgV2F2ZUxhYmVsKHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKDM1MCwgMTQpKTtcclxuICAgICAgICAvLyBDcmVhdGUgd2F2ZXMgY291bnRcclxuICAgICAgICB0aGlzLndhdmVzVGV4dExhYmVsID0gbmV3IFRleHQodGhpcy5jb250ZXh0LCBuZXcgVmVjdG9yMmQoMzY1LCAyNSksIGA6ICR7dGhpcy53YXZlc0NvdW50fWAsIFNFVFRJTkdTLnRleHQud2F2ZS5jb2xvciwgU0VUVElOR1MudGV4dC53YXZlLndpZHRoLCAxNSk7XHJcbiAgICAgICAgLy8gUmVhZHkgbGFiZWxcclxuICAgICAgICB0aGlzLnJlYWR5TGFiZWwgPSBuZXcgVGV4dCh0aGlzLmNvbnRleHQsIG5ldyBWZWN0b3IyZCgxNzAsIDM1MCksICdSIEUgQSBEIFknLCAncmVkJywgMTAwLCAxNyk7XHJcbiAgICAgICAgLy8gUGF1c2UgbGFiZWxcclxuICAgICAgICB0aGlzLnBhdXNlTGFiZWwgPSBuZXcgVGV4dCh0aGlzLmNvbnRleHQsIG5ldyBWZWN0b3IyZCgxNzAsIDM1MCksICdQIEEgVSBTIEUnLCAncmVkJywgMTAwLCAxNyk7XHJcbiAgICAgICAgLy8gR2FtZSBvdmVyIGxhYmVsXHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlckxhYmVsID0gbmV3IFRleHQodGhpcy5jb250ZXh0LCBuZXcgVmVjdG9yMmQoMTM1LCAxNjApLCAnRyBBIE0gRSAgIE8gViBFIFInLCAncmVkJywgMTUwLCAxNyk7XHJcbiAgICAgICAgLy8gUmVzdGFydCBsYWJlbFxyXG4gICAgICAgIHRoaXMucmVzdGFydExhYmVsID0gbmV3IFRleHQodGhpcy5jb250ZXh0LCBuZXcgVmVjdG9yMmQoMTMwLCAyMDApLCAnUFJFU1MgU1BBQ0UgRk9SIFJFU1RBUlQnLCAnd2hpdGUnLCAxNTAsIDE1KTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHBsYXllciBvYmplY3QgICAgICAgXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKDE4NSwgNTYwKSk7XHJcbiAgICAgICAgLy8gVXNpbmcgb3ZlcmxpbWl0cyBjb29yZGluYXRlcyB0byBwcmV2ZW50IGJ1bGxldCB1cGRhdGUgbWV0aG9kXHJcbiAgICAgICAgdGhpcy5idWxsZXQgPSBuZXcgQnVsbGV0KHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKDEwMDAsIDEwMDApKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGVuZW15IHJvY2tldHMgcG9vbFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXhSb2NrZXRzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5yb2NrZXRzLnB1c2gobmV3IFJvY2tldCh0aGlzLmNvbnRleHQsIG5ldyBWZWN0b3IyZCgxMzAwLCAxMzAwKSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGVuZW15IHhwbG9kZSBvYmplY3RcclxuICAgICAgICB0aGlzLmVuZW15RXhwbG9kZSA9IG5ldyBFbmVteUV4cGxvZGUodGhpcy5jb250ZXh0LCBuZXcgVmVjdG9yMmQoMjIwLCAyMjApLCAyKTtcclxuICAgICAgICB0aGlzLmVuZW15RXhwbG9kZS5oaWRlID0gdHJ1ZTsgLy8gSGlkZSBleHBsb2RlIGZvciBvcHRpbWl6ZVxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgcGxheWVyJ3MgZXhwbG9kZSBvYmplY3RcclxuICAgICAgICB0aGlzLnBsYXllckV4cGxvZGUgPSBuZXcgUGxheWVyRXhwbG9kZSh0aGlzLmNvbnRleHQsIG5ldyBWZWN0b3IyZCgyNTAsIDI1MCksIDUpO1xyXG4gICAgICAgIHRoaXMucGxheWVyRXhwbG9kZS5oaWRlID0gdHJ1ZTsgLy8gSGlkZSB4cGxvZGVcclxuXHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBlbmVpZXMgb2JqZWN0IGFuZCBjb2xsZWN0IHRoZW0gaW4gYXJyYXlcclxuXHJcbiAgICAgICAgbGV0IG5leHRQb3NpdGlvblggPSBTRVRUSU5HUy5ibHVlRW5lbWllcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIGxldCBuZXh0UG9zaXRpb25ZID0gU0VUVElOR1MuYmx1ZUVuZW1pZXMucG9zaXRpb24ueTtcclxuICAgICAgICBsZXQgY291bnRFbmVtaWVzID0gU0VUVElOR1MuYmx1ZUVuZW1pZXMuY291bnQ7XHJcbiAgICAgICAgbGV0IGRpdmlzaW9ucyA9IFNFVFRJTkdTLmJsdWVFbmVtaWVzLmRpdmlzaW9ucztcclxuICAgICAgICAvLyBCdWlsZCBibHVlIGVuZW1pZXNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50RW5lbWllczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gbmV4dFBvc2l0aW9uWDtcclxuICAgICAgICAgICAgbmV4dFBvc2l0aW9uWCArPSBTRVRUSU5HUy5ibHVlRW5lbWllcy5wb3NpdGlvbi53aWR0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkaXZpc2lvbnM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSBuZXh0UG9zaXRpb25ZICsgKGogKiAzMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5lbXkgPSBuZXcgQmx1ZUVuZW15KHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKHgsIHkpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKGVuZW15KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBCdWlsZCBwdXJwbGUgZW5lbWllc1xyXG4gICAgICAgIG5leHRQb3NpdGlvblggPSBTRVRUSU5HUy5wdXJwbGVFbmVtaWVzLnBvc2l0aW9uLng7XHJcbiAgICAgICAgbmV4dFBvc2l0aW9uWSA9IFNFVFRJTkdTLnB1cnBsZUVuZW1pZXMucG9zaXRpb24ueTtcclxuICAgICAgICBjb3VudEVuZW1pZXMgPSBTRVRUSU5HUy5wdXJwbGVFbmVtaWVzLmNvdW50O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRFbmVtaWVzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVuZW15ID0gbmV3IFB1cnBsZUVuZW15KHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKG5leHRQb3NpdGlvblgsIG5leHRQb3NpdGlvblkpKTtcclxuICAgICAgICAgICAgbmV4dFBvc2l0aW9uWCArPSBTRVRUSU5HUy5wdXJwbGVFbmVtaWVzLnBvc2l0aW9uLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChlbmVteSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCdWlsZCBnZW5lcmFsIGVuZW1pZXNcclxuICAgICAgICBuZXh0UG9zaXRpb25YID0gU0VUVElOR1MuZ2VuZXJhbEVuZW1pZXMucG9zaXRpb24ueDtcclxuICAgICAgICBuZXh0UG9zaXRpb25ZID0gU0VUVElOR1MuZ2VuZXJhbEVuZW1pZXMucG9zaXRpb24ueTtcclxuICAgICAgICBjb3VudEVuZW1pZXMgPSBTRVRUSU5HUy5nZW5lcmFsRW5lbWllcy5jb3VudDtcclxuICAgICAgICBsZXQgZ2VuZXJhbHMgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRFbmVtaWVzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVuZW15ID0gbmV3IEdlbmVyYWxFbmVteSh0aGlzLmNvbnRleHQsIG5ldyBWZWN0b3IyZChuZXh0UG9zaXRpb25YLCBuZXh0UG9zaXRpb25ZKSk7XHJcbiAgICAgICAgICAgIG5leHRQb3NpdGlvblggKz0gU0VUVElOR1MuZ2VuZXJhbEVuZW1pZXMucG9zaXRpb24ud2lkdGggKyBTRVRUSU5HUy5nZW5lcmFsRW5lbWllcy5wb3NpdGlvbi5zcGFjaW5nO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChlbmVteSk7XHJcbiAgICAgICAgICAgIGdlbmVyYWxzLnB1c2goZW5lbXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQnVpbGQgcmVkIGVuZW1pZXNcclxuICAgICAgICBuZXh0UG9zaXRpb25YID0gU0VUVElOR1MucmVkRW5lbWllcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIG5leHRQb3NpdGlvblkgPSBTRVRUSU5HUy5yZWRFbmVtaWVzLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgY291bnRFbmVtaWVzID0gU0VUVElOR1MucmVkRW5lbWllcy5jb3VudDtcclxuICAgICAgICBsZXQgZGl2ID0gY291bnRFbmVtaWVzIC8gU0VUVElOR1MuZ2VuZXJhbEVuZW1pZXMuY291bnQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudEVuZW1pZXM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZW5lbXkgPSBuZXcgUmVkRW5lbXkodGhpcy5jb250ZXh0LCBuZXcgVmVjdG9yMmQobmV4dFBvc2l0aW9uWCwgbmV4dFBvc2l0aW9uWSkpO1xyXG4gICAgICAgICAgICBuZXh0UG9zaXRpb25YICs9IFNFVFRJTkdTLnJlZEVuZW1pZXMucG9zaXRpb24ud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKGVuZW15KTtcclxuICAgICAgICAgICAgLy8gQWRkIGdlbmVyYWxcclxuICAgICAgICAgICAgaWYgKGkgPCBkaXYpIHtcclxuICAgICAgICAgICAgICAgIGVuZW15LmdlbmVyYWwgPSBnZW5lcmFsc1swXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVuZW15LmdlbmVyYWwgPSBnZW5lcmFsc1sxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHJlZ3VsYXIgd2F5cG9pbnRzIGZvciBhbGwgZW5lbWllc1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IHtcclxuICAgICAgICAgICAgbGV0IHggPSBlbmVteS5wb3NpdGlvbi54O1xyXG4gICAgICAgICAgICBsZXQgeSA9IGVuZW15LnBvc2l0aW9uLnk7XHJcbiAgICAgICAgICAgIC8vIEFkZCByZWd1bGFyIHdheXBvaW50c1xyXG4gICAgICAgICAgICBlbmVteS5zZXRXYXlwb2ludHMoXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMmQoeCAtIDIwLCB5KSxcclxuICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IyZCh4ICsgMzAsIHkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFN0YXJ0IGVuZW1pZXMgYXR0YWNraW5nIHRpbWVyXHJcbiAgICAgICAgdGhpcy5hdHRhY2tUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl9nZW5BdHRhY2sodGhpcy5lbmVtaWVzLCAnc2luZ2xlLWJsdWUnKSB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBfZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlYm9yblJlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gW107XHJcbiAgICAgICAgdGhpcy5hdHRhY2tpbmdFbmVtaWVzID0gW107XHJcbiAgICAgICAgdGhpcy5raWxsZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJvY2tldHMgPSBbXTtcclxuICAgICAgICB0aGlzLmdlbmVyYWxFbmVteVRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmdlbmVyYWxSZWFkeSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZW5lbXlFeHBsb2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBsYXllckV4cGxvZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVUZXh0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVzZXJTY29yZVRleHQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaGlnaFNjb3JlVGV4dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5oaWdoU2NvcmVMYWJlbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5saXZlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubGl2ZXNDb3VudCA9IFNFVFRJTkdTLnBsYXllci5saXZlcztcclxuICAgICAgICB0aGlzLm1heExpdmVzQ291bnQgPSBTRVRUSU5HUy5wbGF5ZXIubWF4TGl2ZXM7XHJcbiAgICAgICAgdGhpcy5hZGRMaXZlQ291bnQgPSBTRVRUSU5HUy5uZXh0TGl2ZTtcclxuICAgICAgICB0aGlzLndhdmVzQ291bnQgPSAxO1xyXG4gICAgICAgIHRoaXMud2F2ZUxhYmVsID0gbnVsbDtcclxuICAgICAgICB0aGlzLndhdmVzVGV4dExhYmVsID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlYWR5TGFiZWwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucGF1c2VMYWJlbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlckxhYmVsID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlc3RhcnRMYWJlbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGVhZGVyQm9hcmQgPSBbXTtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hdHRhY2tUaW1lcik7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbGVhclNjZW5lVGltZXIpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJTY2VuZVRpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBsYXllclJlYm9yblRpbWVyKTtcclxuICAgICAgICB0aGlzLnBsYXllclJlYm9yblRpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmdhbWVPdmVyVGltZXIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNldFRpbWVyKTtcclxuICAgICAgICB0aGlzLnJlc2V0VGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIGFsbCBnYW1lIG9iamVjdHNcclxuICAgIF91cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9uUGF1c2UgJiYgIXRoaXMuZ2FtZU92ZXIgfHwgdGhpcy5kaXNhYmxlUGF1c2UpIHtcclxuICAgICAgICAgICAgLy8gU2V0IHBhdXNlIHN0YXR1c1xyXG4gICAgICAgICAgICB0aGlzLm9uUGF1c2UgPSB0aGlzLmlucHV0Q29udHJvbGxlci5wYXVzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aW1lciBmb3IgZ2VuZXJhbCBlbmVteSBhdHRhY2tcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmFsRW5lbXlUaW1lcisrO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVuZGVyaW5nIGJhY2tncm91bmRcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVuZGVyaW5nIEdVSVxyXG4gICAgICAgICAgICB0aGlzLnNjb3JlVGV4dC51cGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5oaWdoU2NvcmVMYWJlbC51cGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5oaWdoU2NvcmVUZXh0LnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAvLyBQTGF5ZXIgbGl2ZXNcclxuICAgICAgICAgICAgdGhpcy5saXZlcy5mb3JFYWNoKGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgbC51cGRhdGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIFJlbmRlcmluZyB3YXZlIGxhYmVsXHJcbiAgICAgICAgICAgIHRoaXMud2F2ZUxhYmVsLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLndhdmVzVGV4dExhYmVsLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAvLyBTZXQgc2hvdyBzdGF0dXMgZm9yIHBhdXNlIGxhYmVsXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXVzZUxhYmVsLnNob3cpIHRoaXMucGF1c2VMYWJlbC5zaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gU2V0IHNob3cgc3RhdHVzIGZvciBnYW1lIG92ZXJzXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5nYW1lT3ZlckxhYmVsLnNob3cpIHRoaXMuZ2FtZU92ZXJMYWJlbC5zaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlc3RhcnRMYWJlbC5zaG93KSB0aGlzLnJlc3RhcnRMYWJlbC5zaG93ID0gdHJ1ZTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gRHJhdywgdXBkYXRlIHN0YXRlIHBsYXllciBvYmplY3QgYW5kIGNoZWNrIGNvbGlpc2lvbnNcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5oaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnB1dENvbnRyb2xsZXIuYWN0aW9uID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgbGVmdFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5wdXRDb250cm9sbGVyLmFjdGlvbiA9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSByaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZGxlIHN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWJvcm5SZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpdmVzQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJSZWJvcm5UaW1lciA9IHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnBsYXllci5oaWRlID0gZmFsc2UgfSwgNTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBvc2l0aW9uKG5ldyBWZWN0b3IyZCgxODUsIDU2MCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYm9yblJlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWN0aXZhdGUgZ2FtZSBvdmVyIHN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl9nYW1lT3ZlcigpIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2xlYXIgcmVib3JuIHBsYXllciB0aW1lclxyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGxheWVyLmhpZGUgJiYgdGhpcy5wbGF5ZXJSZWJvcm5UaW1lciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBsYXllclJlYm9yblRpbWVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUmVib3JuVGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEZpcmUgcGxheWVyIGJ1bGxldFxyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dENvbnRyb2xsZXIuZmlyZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYnVsbGV0LnJlYWR5ICYmICF0aGlzLnBsYXllci5oaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGJ1bGxldCBwb3NpdGlvbiBuZWFyIHBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVsbGV0LnNldFBvc2l0aW9uKG5ldyBWZWN0b3IyZCh0aGlzLnBsYXllci5wb3NpdGlvbi54ICsgMTQsIHRoaXMucGxheWVyLnBvc2l0aW9uLnkgLSA1KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUGxheSBzb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc291bmRDb250b2xsZXIucGxheSh0aGlzLmFsbFNvdW5kcy5maXJlLCAwLjkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZW5kZXJpbmcgbW92ZSBidWxsZXRcclxuICAgICAgICAgICAgdGhpcy5idWxsZXQudXBkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW5kZXJpbmcgZW5lbXkgcm9ja2V0c1xyXG4gICAgICAgICAgICB0aGlzLnJvY2tldHMuZm9yRWFjaChyb2NrZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcm9ja2V0LnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbmRlcmluZyBlbmVteSBleHBsb2RlXHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlFeHBsb2RlLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVuZGVyaW5nIHBsYXllciBleHBsb2RlXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyRXhwbG9kZS51cGRhdGUoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gQ2FsYyBoaWRkZW4gKGEuay4ga2lsbGVkKSBwdXJwbGUgZW5lbWllcyAoZm9yIGdlbmVyYXRlIGF0dGFjaylcclxuICAgICAgICAgICAgbGV0IGtpbGxlZFB1cnBsZUVuZW1pZXMgPSB0aGlzLmVuZW1pZXMuZmlsdGVyKChlbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuIGluc3RhbmNlb2YgUHVycGxlRW5lbXkgJiYgZW4uaGlkZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgbWF4UHVycGxlRW5lbWllcyA9IFNFVFRJTkdTLnB1cnBsZUVuZW1pZXMuY291bnQgKiBTRVRUSU5HUy5wdXJwbGVFbmVtaWVzLmRpdmlzaW9ucztcclxuICAgICAgICAgICAgLy8gQ2FsYyBraWxsZWQgYmx1ZSBlbmVtaWVzXHJcbiAgICAgICAgICAgIGxldCBraWxsZWRCbHVlRW5lbWllcyA9IHRoaXMuZW5lbWllcy5maWx0ZXIoKGVuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW4gaW5zdGFuY2VvZiBCbHVlRW5lbXkgJiYgZW4uaGlkZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgbWF4Qmx1ZUVuZW1pZXMgPSBTRVRUSU5HUy5ibHVlRW5lbWllcy5jb3VudCAqIFNFVFRJTkdTLmJsdWVFbmVtaWVzLmRpdmlzaW9ucztcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGMga2lsbGVkIHJlZCBlbmVtaWVzIGNvdW50XHJcbiAgICAgICAgICAgIC8vIGxldCBraWxsZWRSZWRFbmVtaWVzID0gdGhpcy5lbmVtaWVzLmZpbHRlcigoZW4pID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChlbiBpbnN0YW5jZW9mIFJlZEVuZW15ICYmIGVuLmhpZGUpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgLy8gbGV0IG1heFJlZEVuZW1pZXMgPSBTRVRUSU5HUy5yZWRFbmVtaWVzLmNvdW50ICogU0VUVElOR1MucmVkRW5lbWllcy5kaXZpc2lvbnM7XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjIGtpbGxkIGdlbmVyYWxzIGNvdW50XHJcbiAgICAgICAgICAgIC8vIGxldCBraWxsZWRHZW5lcmFscyA9IHRoaXMuZW5lbWllcy5maWx0ZXIoKGVuKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoZW4gaW5zdGFuY2VvZiBHZW5lcmFsRW5lbXkgJiYgZW4uaGlkZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAvLyBsZXQgbWF4R2VuZXJhbEVuZW15ID0gU0VUVElOR1MuZ2VuZXJhbEVuZW1pZXMuY291bnQgKiBTRVRUSU5HUy5nZW5lcmFsRW5lbWllcy5kaXZpc2lvbnM7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gQXR0YWNraW5nIGlmIHBsYXllciBpcyBhY3RpdmUgYW5kIHZpc2libGVcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5oaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBQcmVwYXJlIGF0dGFjayBmb3IgZ2VuZXJhbCBlbmVteSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2VuZXJhbEVuZW15VGltZXIgJSAxMDAwID09IDApIHRoaXMuZ2VuZXJhbFJlYWR5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBHZWVyYXRlIHR5cGUgYXR0YWNrIGFuZCBydW4gYXR0YWNrIGVuZW1pZXNcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdlbmVyYWxSZWFkeSAmJiAhdGhpcy5hdHRhY2tpbmdFbmVtaWVzLmxlbmd0aCAmJiB0aGlzLmF0dGFja1RpbWVyID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IGdlbmVyYWwgYXR0YWNrXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmFsRW5lbXlUaW1lciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmFsUmVhZHkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXR0YWNrVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5fZ2VuQXR0YWNrKHRoaXMuZW5lbWllcywgJ2dlbmVyYWwnKSB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuYXR0YWNraW5nRW5lbWllcy5sZW5ndGggJiYgdGhpcy5hdHRhY2tUaW1lciA9PSB1bmRlZmluZWQgJiYga2lsbGVkUHVycGxlRW5lbWllcy5sZW5ndGggJiYga2lsbGVkUHVycGxlRW5lbWllcy5sZW5ndGggIT0gbWF4UHVycGxlRW5lbWllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IGF0dGFjayBhIHB1cnBsZSBlbmVteVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChraWxsZWRCbHVlRW5lbWllcy5sZW5ndGggPT0gbWF4Qmx1ZUVuZW1pZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxsIGJsdWUgZW5lbWllcyB3YXMga2lsbGVkLCBhdHRhY2sgc2luZ2xlIHB1cnBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hdHRhY2tUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5fZ2VuQXR0YWNrKHRoaXMuZW5lbWllcywgJ3NpbmdsZS1wdXJwbGUnKSB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtpbGxlZEJsdWVFbmVtaWVzLmxlbmd0aCA9PSAobWF4Qmx1ZUVuZW1pZXMgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBdHRhY2sgcHVycGxlIGVuZW15IHdpdGggc2luZ2xlIGJsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXR0YWNrVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGFja1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuX2dlbkF0dGFjayh0aGlzLmVuZW1pZXMsICdzaW5nbGUtYmx1ZS1zaW5nbGUtcHVycGxlJykgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXR0YWNrIHNpbmdsZSBwdXJwbGUgZW5lbXkgd2l0aCBjb3VwbGUgYmx1ZSBlbmVtaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmF0dGFja1RpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl9nZW5BdHRhY2sodGhpcy5lbmVtaWVzLCAnZG91YmxlLWJsdWUtc2luZ2xlLXB1cnBsZScpIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuYXR0YWNraW5nRW5lbWllcy5sZW5ndGggJiYgdGhpcy5hdHRhY2tUaW1lciA9PSB1bmRlZmluZWQgJiYga2lsbGVkQmx1ZUVuZW1pZXMubGVuZ3RoICE9IG1heEJsdWVFbmVtaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtpbGxlZEJsdWVFbmVtaWVzLmxlbmd0aCA8PSA1IHx8IGtpbGxlZEJsdWVFbmVtaWVzLmxlbmd0aCA9PSAobWF4Qmx1ZUVuZW1pZXMgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQldGB0LvQuCDQsNGC0LDQutGD0Y7RidC40YUg0L3QtdGCINC4INGC0LDQudC80LXRgCDQv9GD0YHRgiAtINC30LDQvdC+0LPQviDQt9Cw0L/Rg9GB0LrQsNC10Lwg0LDRgtCw0LrRg1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hdHRhY2tUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5fZ2VuQXR0YWNrKHRoaXMuZW5lbWllcywgJ3NpbmdsZS1ibHVlJykgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChraWxsZWRCbHVlRW5lbWllcy5sZW5ndGggPiA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IGF0dGFjayB3aXRoIGNvdXBsZSBibHVlIGVuZW1pZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXR0YWNrVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGFja1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuX2dlbkF0dGFjayh0aGlzLmVuZW1pZXMsICdkb3VibGUtYmx1ZScpIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g0JXRgdC70Lgg0L7RgdGC0LDQvdC10YLRgdGPINC+0LTQuNC9INGB0LjQvdC40Lkg0LLRgNCw0LMg0L3Rg9C20L3QviDQsNGC0LDQutC+0LLQsNGC0Ywg0YLQvtC70YzQutC+INC40Lwg0L7QtNC90LjQvFxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIERyYXcgYW5kIHVwZGF0ZSBzdGF0ZSBlbmVtaWVzICBhbmQgY2hlY2sgY29sbGlzaW9uc1xyXG4gICAgICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoIXRoaXMubGl2ZXNDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuY2xlYXJTY2VuZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZW5lbXkuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICB9LCAxNTAwKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZW5lbXkudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW5kZXJpbmcgZW5lbXkgYWxsIHJvY2tldHNcclxuICAgICAgICAgICAgICAgIGVuZW15LnJvY2tldHMuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERldGVjdCByb2NrZXQgY29sbGlzaW9uIHdpdGggcGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyQ29sbGlzaW9uKHIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIERldGVjdCBlbmVteSBjb2xsaXNpb25zICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5lbXlDb2xsaXNpb24oZW5lbXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEF0dGFja2luZyBlbmVtaWVzIGJlaGF2aW9yIFxyXG4gICAgICAgICAgICB0aGlzLmF0dGFja2luZ0VuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVuZW15LmF0dGFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBmcm9tIGF0dGFjayBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNraW5nRW5lbWllcy5zcGxpY2UodGhpcy5hdHRhY2tpbmdFbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmVtaWVzLmluZGV4T2YoZW5lbXkpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhdHRhY2sgZW5lbXkgZnJvbSBlbmVtaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UodGhpcy5lbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgZW5lbXkgYXJyaXZlZCBpbiBsYXN0IHdheXBvaW50IGFuZCBzdGlsbCB2aXNpYmxlIChub3Qgc2hvb3RlZCkgd2lsbCBzaG93IGhpcyBwcm90b3R5cGUgY2xvbmVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVuZW15LmhpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsb25lID0gZW5lbXkucHJvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lLmhpZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IGF0dGFjayBlbmVteSBjb2xsaXNpb25zICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5lbXlDb2xsaXNpb24oZW5lbXkpO1xyXG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IGNvbGxpc2lvbnMgd2l0aCBhdHRhY2tpbmcgZW5lbXlcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllckNvbGxpc2lvbihlbmVteSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRW5lbXkgZmlyZSBjb250cm9sICh1c2Ugc2hvdHMgY291bnRlcilcclxuICAgICAgICAgICAgICAgIGlmIChlbmVteS5vYmplY3RpdmUgPiAwICYmIGVuZW15Lm9iamVjdGl2ZSA8PSBlbmVteS5zaG90cykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLnJvY2tldHNbZW5lbXkub2JqZWN0aXZlXS5yZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnJvY2tldHNbZW5lbXkub2JqZWN0aXZlXS5zZXRQb3NpdGlvbihuZXcgVmVjdG9yMmQoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBlbmVteS5wb3NpdGlvbi54ICsgMTAsIGVuZW15LnBvc2l0aW9uLnkgKyAyNVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICApKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbmVteS5wcm90by5yb2NrZXRzW2VuZW15Lm9iamVjdGl2ZV0ucmVhZHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnQgcm9ja2V0cyBvbiBwcm90byBhdHRhY2tpbmcgZW5lbXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkucHJvdG8ucm9ja2V0c1tlbmVteS5vYmplY3RpdmVdLnNldFBvc2l0aW9uKG5ldyBWZWN0b3IyZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LnBvc2l0aW9uLnggKyAxMCwgZW5lbXkucG9zaXRpb24ueSArIDI1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwbGF5IGVuZW15IHJvY2tldCBzb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdW5kQ29udG9sbGVyLnBsYXkodGhpcy5hbGxTb3VuZHMuZW5lbXlGaXJlLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoZW5lbXkub2JqZWN0aXZlID09IDEgJiYgdGhpcy5yb2NrZXRzWzBdLnJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2VuZW15IGZpcmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5yb2NrZXRzWzBdLnNldFBvc2l0aW9uKG5ldyBWZWN0b3IyZChcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgZW5lbXkucG9zaXRpb24ueCArIDEwLCBlbmVteS5wb3NpdGlvbi55ICsgMjVcclxuICAgICAgICAgICAgICAgIC8vICAgICApKVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgbmV3IHdhdmUgaWYgeW91IGdyZWF0IHNob290ZXIgKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5raWxsZWQgPT0gdGhpcy5tYXhFbmVtaWVzICYmIHRoaXMubGl2ZXNDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlUGF1c2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuX2dlbk5ld1dhdmUoKSB9LCAzMDAwKTtcclxuICAgICAgICAgICAgICAgIC8vIFNlZSByZWFkeSBsYWJlbCBib3R0b21cclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZHlMYWJlbC51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICAvLyBHYW1lb3ZlciBzdGF0ZVxyXG5cclxuICAgICAgICAgICAgLy8gQ2xlYXIgY2FudmFzXHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2F2ZSwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbmRlciBiYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZC51cGRhdGUoKTtcclxuICAgICAgICAgICAgLy8gUmVuZGVyIGdhbWUgb3ZlciBvYmplY3RzXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJMYWJlbC51cGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0TGFiZWwudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIC8vIFJlbmRlciBsZWFkZXJib2FyZFxyXG4gICAgICAgICAgICB0aGlzLmxlYWRlckJvYXJkLmZvckVhY2gobCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBSZW5kZXIgeW91ciByZXN1bHQgKHNjb3JlICsgd2F2ZXMpXHJcbiAgICAgICAgICAgIHRoaXMudXNlclNjb3JlVGV4dC51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIC8vIFJlc3RhcnQgaW5wdXQgZGV0ZWN0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0Q29udHJvbGxlci5yZXN0YXJ0UmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIC8vIERleHRyb3kgc2NlbmVcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIC8vIEJ1aWxkIG5ldyBzY2VuZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVpbGQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vblBhdXNlICYmICF0aGlzLmRpc2FibGVQYXVzZSkge1xyXG4gICAgICAgICAgICAvLyBQYXVzZSBzdGF0ZVxyXG5cclxuICAgICAgICAgICAgLy8gU2V0IHBhdXNlIHN0YXR1c1xyXG4gICAgICAgICAgICB0aGlzLm9uUGF1c2UgPSB0aGlzLmlucHV0Q29udHJvbGxlci5wYXVzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBSZW5kZXJpbmcgcGF1c2UgbGFiZWxcclxuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VMYWJlbC5zaG93KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlTGFiZWwudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlTGFiZWwuc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDb250aW51ZSBjYWxjIHRpbWUgaWYgZ2FtZSBvbiBwYXVzZVxyXG4gICAgICAgICAgICAvLyBsZXQgY3VyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnByZXZGcmFtZVRpbWUgPSBjdXJUaW1lO1xyXG5cclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXR0YWNrVGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFja1RpbWVyID0gdW5kZWZpbmVkO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVJlcXVlc3QgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGFydCBnYW1lIGxvb3BcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIEJ1aWxkIGdhbWVcclxuICAgICAgICB0aGlzLl9idWlsZCgpO1xyXG5cclxuICAgICAgICAvLyBzZXRJbnRlcnZhbCgoKSA9PiB7IGNvbnNvbGUubG9nKCdpbnQnKSB9LCAxMDAwMCk7XHJcblxyXG5cclxuICAgICAgICAvLyBTdGFydCBnYW1lIGxvb3BcclxuICAgICAgICB0aGlzLl91cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdG9wIGdhbWUgdXBkYXRlIGFuZCBkZXN0cm95IGdhbWUgc2NlbmVcclxuICAgIF9zdG9wKCkge1xyXG4gICAgICAgIC8vIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZVJlcXVlc3QpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3NldHRpbmdzJztcclxuaW1wb3J0IFZlY3RvcjJkIGZyb20gJy4vdmVjdG9yJztcclxuXHJcbmNvbnN0IFNFVFRJTkdTID0gU2V0dGluZ3MuZ3VpO1xyXG5jb25zdCBTQ0VORSA9IFNldHRpbmdzLnNjZW5lO1xyXG5cclxuY2xhc3MgVGV4dCB7XHJcbiAgICAvLyBDbGFzcyBmb3IgYSB0ZXh0IGxhYmVsc1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgcG9zaXRpb24sIHRleHQsIGNvbG9yLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuX2RyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUZXh0KHRleHQpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIF9kcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSAnc3RhcnQnO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gYCR7dGhpcy5oZWlnaHR9cHggJHtTQ0VORS5mb250fWA7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBTcHJpdGVMYWJlbCB7XHJcbiAgICAvLyBCYXNlIGNsYXNzIGZvciBhIHNwcml0ZSBiYXNlZCBsYWJlbHNcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5zcHJpdGU7XHJcbiAgICAgICAgdGhpcy5zaXplID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMTBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGlkZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGlkZSkgdGhpcy5fZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9kcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSwgMCwgMCwgdGhpcy5zaXplLndpZHRoLCB0aGlzLnNpemUuaGVpZ2h0LCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zaXplLndpZHRoLCB0aGlzLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQbGF5ZXJMaXZlIGV4dGVuZHMgU3ByaXRlTGFiZWwge1xyXG4gICAgLy8gUGxhZXllciBsaXZlcyByZXByZXNlbnQgb2JqZWN0XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBwb3NpdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIHBvc2l0aW9uKTtcclxuICAgICAgICBzdXBlci5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICBzdXBlci5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHN1cGVyLnNwcml0ZSA9IFNFVFRJTkdTLmxpdmUuc3ByaXRlO1xyXG4gICAgICAgIHN1cGVyLnNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBTRVRUSU5HUy5saXZlLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFNFVFRJTkdTLmxpdmUuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgV2F2ZUxhYmVsIGV4dGVuZHMgU3ByaXRlTGFiZWwge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgcG9zaXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBwb3NpdGlvbik7XHJcbiAgICAgICAgc3VwZXIuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgc3VwZXIucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICBzdXBlci5zcHJpdGUgPSBTRVRUSU5HUy53YXZlLnNwcml0ZTtcclxuICAgICAgICBzdXBlci5zaXplID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogU0VUVElOR1Mud2F2ZS53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBTRVRUSU5HUy53YXZlLmhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFN0YXIge1xyXG4gICAgLy8gQ2xhc3MgZm9yIGJhY2tnb3J1bmQgc3RhclxyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgcG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLnNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3ByaXRlO1xyXG4gICAgICAgIHRoaXMuaGlkZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAwLjg7XHJcbiAgICAgICAgdGhpcy5saW1pdEJvdHRvbSA9IFNDRU5FLmJhY2tncm91bmQuc2l6ZS5oZWlnaHQgKyAxMDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA8PSB0aGlzLmxpbWl0Qm90dG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihuZXcgVmVjdG9yMmQoLTUwLCAtNTApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9kcmF3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhpZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDApJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5zcHJpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zaXplLndpZHRoLCB0aGlzLnNpemUuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQb3NpdGlvbihwb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQmFja2dyb3VuZCB7XHJcbiAgICAvLyBCYWNrZ3JvdW5kIGd1aSBjbGFzc1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmZpbGwgPSBTRVRUSU5HUy5iYWNrZ3JvdW5kLnNwcml0ZTtcclxuICAgICAgICB0aGlzLnN0YXJzID0gdGhpcy5fZ2VuU3RhcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5fZHJhdyh0aGlzLmNvbnRleHQpO1xyXG5cclxuICAgICAgICAvLyBEcmF3IHN0YXJzIGFuZCBtb3ZpbmcgZW11bGF0aW9uIClcclxuICAgICAgICB0aGlzLnN0YXJzLmZvckVhY2goc3RhciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGFyLnBvc2l0aW9uLnggPT0gLTUwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IHRoaXMuX2dldFJhbmRvbSg1LCB0aGlzLmNhbnZhcy53aWR0aCAtIDUpO1xyXG4gICAgICAgICAgICAgICAgc3Rhci5zZXRQb3NpdGlvbihuZXcgVmVjdG9yMmQoeCwgLTEwKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3Rhci51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfZHJhdyhjb250ZXh0KSB7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmZpbGw7XHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2VuU3RhcnMoKSB7XHJcbiAgICAgICAgLy8gR2VuZXJhdGUgc3RhcnNcclxuICAgICAgICBsZXQgc3RhcnMgPSBbXTtcclxuICAgICAgICBsZXQgc3ByaXRlcyA9IFsnZ3JlZW4nLCAncmVkJywgJ3B1cnBsZScsICd3aGl0ZScsICdibHVlJ107XHJcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5fZ2V0UmFuZG9tKDIwLCAzNSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgeCA9IHRoaXMuX2dldFJhbmRvbSg1LCB0aGlzLmNhbnZhcy53aWR0aCAtIDUpO1xyXG4gICAgICAgICAgICBsZXQgeSA9IHRoaXMuX2dldFJhbmRvbSg1LCB0aGlzLmNhbnZhcy5oZWlnaHQgLSA1KTtcclxuICAgICAgICAgICAgbGV0IHMgPSBuZXcgU3Rhcih0aGlzLmNvbnRleHQsIG5ldyBWZWN0b3IyZCh4LCB5KSk7XHJcbiAgICAgICAgICAgIHMuc3ByaXRlID0gc3ByaXRlc1t0aGlzLl9nZXRSYW5kb20oMCwgc3ByaXRlcy5sZW5ndGggLSAxKV07XHJcbiAgICAgICAgICAgIHN0YXJzLnB1c2gocyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGFycztcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0UmFuZG9tKG1pbiwgbWF4KSB7XHJcbiAgICAgICAgdmFyIHJhbmQgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pO1xyXG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKHJhbmQpO1xyXG4gICAgICAgIHJldHVybiByYW5kO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCYWNrZ3JvdW5kLCBUZXh0LCBQbGF5ZXJMaXZlLCBXYXZlTGFiZWwgfTsiLCIvLyBVc2VyIGlucHV0IG9iamVjdFxyXG5cclxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vc2V0dGluZ3MnO1xyXG5cclxuLy8gVXNlciBpbnB1dCBwcm92aWRlciBjbGFzc1xyXG5jbGFzcyBJbnB1dENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3Iodmlldykge1xyXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAnaWRsZSc7XHJcbiAgICAgICAgdGhpcy5maXJlID0gZmFsc2U7IC8vIFBsYXllciBmaXJlIGNvbnRyb2wgc3RhdGUgQkFEXHJcbiAgICAgICAgdGhpcy5wYXVzZSA9IGZhbHNlOyAvLyBHYW1lIHBhdXNlIHN0YXRlIEJBRFxyXG4gICAgICAgIHRoaXMucmVzdGFydFJlYWR5ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBrZXlEb3duKGUpIHtcclxuICAgICAgICBsZXQga2V5cyA9IFNldHRpbmdzLmlucHV0LmtleWJvYXJkLmFjdGlvbnM7XHJcbiAgICAgICAgbGV0IGsgPSBlLndoaWNoIHx8IGUua2V5Q29kZTtcclxuXHJcbiAgICAgICAgaWYgKGtleXNba10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChrZXlzW2tdID09ICdmaXJlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlzW2tdID09ICdwYXVzZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF1c2UgPT09IHRydWUgPyB0aGlzLnBhdXNlID0gZmFsc2UgOiB0aGlzLnBhdXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlzW2tdID09ICdyZXN0YXJ0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0UmVhZHkgPT09IHRydWUgPyB0aGlzLnJlc3RhcnRSZWFkeSA9IGZhbHNlIDogdGhpcy5yZXN0YXJ0UmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBrZXlzW2tdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAga2V5VXAoZSkge1xyXG4gICAgICAgIGxldCBrZXlzID0gU2V0dGluZ3MuaW5wdXQua2V5Ym9hcmQuYWN0aW9ucztcclxuICAgICAgICB2YXIgayA9IGUud2hpY2ggfHwgZS5rZXlDb2RlO1xyXG5cclxuICAgICAgICBpZiAoa2V5c1trXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGtleXNba10gPT0gJ2ZpcmUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gJ2lkbGUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdGVuKCkge1xyXG4gICAgICAgIHRoaXMudmlldy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlEb3duKGUpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMudmlldy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5VXAoZSk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBFeHBvcnQgY29udHJvbGxlclxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dENvbnRyb2xsZXI7IiwiLy8gU2V0dGluZ3MgZm9yIGdhbWUgb2JqZWN0cyBhbmQgZW50ZXRpZXNcclxuaW1wb3J0IHBfc3ByaXRlIGZyb20gJy4uL2ltZy9wbGF5ZXIucG5nJztcclxuaW1wb3J0IGJsdWVfc2hlZXQgZnJvbSAnLi4vaW1nL2Jfc2hlZXRfODBfMjAucG5nJztcclxuaW1wb3J0IHB1cnBsZV9zaGVldCBmcm9tICcuLi9pbWcvcF9zaGVldF84MF8yMC5wbmcnO1xyXG5pbXBvcnQgcmVkX3NoZWV0IGZyb20gJy4uL2ltZy9yX3NoZWV0XzgwXzIwLnBuZyc7XHJcbmltcG9ydCBnZW5lcmFsX3NoZWV0IGZyb20gJy4uL2ltZy9nX3NoZWV0XzgwXzIwLnBuZyc7XHJcbmltcG9ydCBlbmVteV9leHAgZnJvbSAnLi4vaW1nL2VfZXhwX3NoZWV0LnBuZyc7XHJcbmltcG9ydCBwbGF5ZXJfZXhwIGZyb20gJy4uL2ltZy9wbGF5ZXJfZXhwbG9kZV9iaWcucG5nJztcclxuaW1wb3J0IHBsYXllcl9saXZlIGZyb20gJy4uL2ltZy9saXZlLnBuZyc7XHJcbmltcG9ydCB3X3Nwcml0ZSBmcm9tICcuLi9pbWcvd2F2ZV9zcHJpdGUucG5nJztcclxuXHJcbi8vIFNwcml0ZXNcclxubGV0IHBsYXllciA9IG5ldyBJbWFnZSgzMCwgMzApO1xyXG5wbGF5ZXIuc3JjID0gcF9zcHJpdGU7XHJcbmxldCBiX3NoZWV0ID0gbmV3IEltYWdlKCk7XHJcbmJfc2hlZXQuc3JjID0gYmx1ZV9zaGVldDtcclxubGV0IHBfc2hlZXQgPSBuZXcgSW1hZ2UoKTtcclxucF9zaGVldC5zcmMgPSBwdXJwbGVfc2hlZXQ7XHJcbmxldCByX3NoZWV0ID0gbmV3IEltYWdlKCk7XHJcbnJfc2hlZXQuc3JjID0gcmVkX3NoZWV0O1xyXG5sZXQgZ19zaGVldCA9IG5ldyBJbWFnZSgpO1xyXG5nX3NoZWV0LnNyYyA9IGdlbmVyYWxfc2hlZXQ7XHJcbmxldCBlbl9leHAgPSBuZXcgSW1hZ2UoKTtcclxuZW5fZXhwLnNyYyA9IGVuZW15X2V4cDtcclxubGV0IHBsX2V4cCA9IG5ldyBJbWFnZSgpO1xyXG5wbF9leHAuc3JjID0gcGxheWVyX2V4cFxyXG5sZXQgcGxfbGl2ZSA9IG5ldyBJbWFnZSgxNSwgMTUpO1xyXG5wbF9saXZlLnNyYyA9IHBsYXllcl9saXZlO1xyXG5sZXQgZW5fd2F2ZSA9IG5ldyBJbWFnZSgyMCwgMjApO1xyXG5lbl93YXZlLnNyYyA9IHdfc3ByaXRlO1xyXG5cclxuXHJcbmNvbnN0IFNFVFRJTkdTID0ge1xyXG4gICAgLy8gSW5wdXQgc2V0dGluZ3NcclxuICAgIGlucHV0OiB7XHJcbiAgICAgICAga2V5Ym9hcmQ6IHtcclxuICAgICAgICAgICAgYWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgLy8gS2V5Y29kZXMgb24gYWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgJzM3JzogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgJzM5JzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICczOCc6ICdmaXJlJyxcclxuICAgICAgICAgICAgICAgICcyNyc6ICdwYXVzZScsXHJcbiAgICAgICAgICAgICAgICAnMzInOiAncmVzdGFydCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBHVUkgc2V0dGluZ3NcclxuICAgIGd1aToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICAgICAgc3ByaXRlOiAnYmxhY2snXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaXZlOiB7XHJcbiAgICAgICAgICAgIHNwcml0ZTogcGxfbGl2ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDE1LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXZlOiB7XHJcbiAgICAgICAgICAgIHNwcml0ZTogZW5fd2F2ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDE1LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIFNvdW5kIHNldHRpbmdzXHJcbiAgICBhdWRpbzoge1xyXG4gICAgICAgIHNvdW5kczoge1xyXG4gICAgICAgICAgICBmaXJlOiAnLi9hdWRpby9yb2NrZXRfZmlyZS5tcDMnLFxyXG4gICAgICAgICAgICBlbmVteUV4cGxvZGU6ICcuL2F1ZGlvL2VuX2V4cGxvZGVfMS53YXYnLFxyXG4gICAgICAgICAgICBlbmVteUZpcmU6ICcuL2F1ZGlvL2VuX2ZpcmUubXAzJyxcclxuICAgICAgICAgICAgcGxheWVyRXhwbG9kZTogJy4vYXVkaW8vcGxheWVyX2V4cGxvZGUud2F2J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBTZXR0aW5nIGZvciBnYW1lIHNjZW5lXHJcbiAgICBzY2VuZToge1xyXG4gICAgICAgIGZvbnQ6ICdQaXhlbGxhcmknLFxyXG4gICAgICAgIG5leHRMaXZlOiA1MDAwLFxyXG4gICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgc2NvcmU6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTUwJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoaWdoU2NvcmU6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTUwJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAncHVycGxlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3YXZlOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzUwJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXVzZToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc1MCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3JlZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGVhZGVyYm9hcmQ6IFtcclxuICAgICAgICAgICAgeyB1c2VyOiAnTEVIQScsIHNjb3JlOiA1MDAwIH0sXHJcbiAgICAgICAgICAgIHsgdXNlcjogJ1VTRVIxJywgc2NvcmU6IDQwMDAgfSxcclxuICAgICAgICAgICAgeyB1c2VyOiAnVVNFUjInLCBzY29yZTogMzAwMCB9LFxyXG4gICAgICAgICAgICB7IHVzZXI6ICdVU0VSMycsIHNjb3JlOiAyMDAwIH0sXHJcbiAgICAgICAgICAgIHsgdXNlcjogJ1VTRVI0Jywgc2NvcmU6IDEwMDAgfSxcclxuICAgICAgICAgICAgeyB1c2VyOiAnVVNFUjUnLCBzY29yZTogNzUwIH0sXHJcbiAgICAgICAgICAgIHsgdXNlcjogJ1VTRVI2Jywgc2NvcmU6IDUwMCB9LFxyXG4gICAgICAgICAgICB7IHVzZXI6ICdVU0VSNycsIHNjb3JlOiAyNTAgfSxcclxuICAgICAgICAgICAgeyB1c2VyOiAnVVNFUjgnLCBzY29yZTogMTAwIH0sXHJcbiAgICAgICAgICAgIHsgdXNlcjogJ1VTRVI5Jywgc2NvcmU6IDAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgICBzcHJpdGU6ICdibGFjaycsXHJcbiAgICAgICAgICAgIHNpemU6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHg6IDE4NSxcclxuICAgICAgICAgICAgICAgIHk6IDUyMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaXZlczogMyxcclxuICAgICAgICAgICAgbWF4TGl2ZXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuZW15U3BhY2luZzogMTAsXHJcbiAgICAgICAgYmx1ZUVuZW1pZXM6IHtcclxuICAgICAgICAgICAgY291bnQ6IDEwLFxyXG4gICAgICAgICAgICBkaXZpc2lvbnM6IDMsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4OiA1NSxcclxuICAgICAgICAgICAgICAgIHk6IDE2MCxcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNwZWVkOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwdXJwbGVFbmVtaWVzOiB7XHJcbiAgICAgICAgICAgIGNvdW50OiA4LFxyXG4gICAgICAgICAgICBkaXZpc2lvbnM6IDEsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4OiA4NSxcclxuICAgICAgICAgICAgICAgIHk6IDEzMCxcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZEVuZW1pZXM6IHtcclxuICAgICAgICAgICAgY291bnQ6IDYsXHJcbiAgICAgICAgICAgIGRpdmlzaW9uczogMSxcclxuICAgICAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHg6IDExNSxcclxuICAgICAgICAgICAgICAgIHk6IDEwMCxcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdlbmVyYWxFbmVtaWVzOiB7XHJcbiAgICAgICAgICAgIGNvdW50OiAyLFxyXG4gICAgICAgICAgICBkaXZpc2lvbnM6IDEsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4OiAxNDUsXHJcbiAgICAgICAgICAgICAgICB5OiA3NSxcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc6IDYwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gUGxheWVyIG9iamVjdCBzZXR0aW5nc1xyXG4gICAgcGxheWVyOiB7XHJcbiAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgc3BlZWQ6IDIsXHJcbiAgICAgICAgcmVsb2FkVGltZTogMTAwMCxcclxuICAgICAgICBsaW1pdDoge1xyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICByaWdodDogMzcwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW1pdHNYOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAzNzBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTogcGxheWVyXHJcbiAgICB9LFxyXG4gICAgLy8gQmx1ZSBlbmVteSBvYmplY3Qgc2V0dGluZ3NcclxuICAgIGJsdWVFbmVteToge1xyXG4gICAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICAgIHNwZWVkOiAxLFxyXG4gICAgICAgIHNwZWVkQXR0YWNrOiAzLFxyXG4gICAgICAgIHNob3RzOiAyLFxyXG4gICAgICAgIGxpbWl0c1g6IHtcclxuICAgICAgICAgICAgbGVmdDogMzAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlOiBiX3NoZWV0LFxyXG4gICAgICAgIGNvc3Q6IDMwXHJcbiAgICB9LFxyXG4gICAgLy8gUHVycGxlIGVuZW15IG9iamVjdCBzZXR0aW5nc1xyXG4gICAgcHVycGxlRW5lbXk6IHtcclxuICAgICAgICB3aWR0aDogMjAsXHJcbiAgICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICBzcGVlZEF0dGFjazogMy41LFxyXG4gICAgICAgIHNob3RzOiAzLFxyXG4gICAgICAgIGxpbWl0c1g6IHtcclxuICAgICAgICAgICAgbGVmdDogMzAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlOiBwX3NoZWV0LFxyXG4gICAgICAgIGNvc3Q6IDQwXHJcbiAgICB9LFxyXG4gICAgLy8gUmVkIGVuZW15IG9iamVjdCBzZXR0aW5nc1xyXG4gICAgcmVkRW5lbXk6IHtcclxuICAgICAgICB3aWR0aDogMjAsXHJcbiAgICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICBzcGVlZEF0dGFjazogMyxcclxuICAgICAgICBzaG90czogMixcclxuICAgICAgICBsaW1pdHNYOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDMwLFxyXG4gICAgICAgICAgICByaWdodDogNTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTogcl9zaGVldCxcclxuICAgICAgICBjb3N0OiA1MFxyXG4gICAgfSxcclxuICAgIC8vIEdlbmVyYWwgZW5lbXkgb2JqZWN0IHNldHRpbmdzXHJcbiAgICBnZW5lcmFsRW5lbXk6IHtcclxuICAgICAgICB3aWR0aDogMjAsXHJcbiAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICBzcGVlZEF0dGFjazogMyxcclxuICAgICAgICBzaG90czogNCxcclxuICAgICAgICBsaW1pdHNYOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDMwLFxyXG4gICAgICAgICAgICByaWdodDogNTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTogZ19zaGVldCxcclxuICAgICAgICBjb3N0OiA2MFxyXG4gICAgfSxcclxuICAgIC8vIEJ1bGxldCBvYmplY3RcclxuICAgIGJ1bGxldDoge1xyXG4gICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgIGhlaWdodDogMTAsXHJcbiAgICAgICAgc3BlZWQ6IDUsXHJcbiAgICAgICAgbGltaXRzWToge1xyXG4gICAgICAgICAgICB0b3A6IC0yMCxcclxuICAgICAgICAgICAgYm90dG9tOiA2MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTogJ29yYW5nZSdcclxuICAgIH0sXHJcbiAgICAvLyBFbmVteSByb2NlayBwYmplY3RcclxuICAgIHJvY2tldDoge1xyXG4gICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgIGhlaWdodDogNyxcclxuICAgICAgICBzcGVlZDogNCxcclxuICAgICAgICBsaW1pdHNZOiB7XHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgYm90dG9tOiA3MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTogJ3doaXRlJ1xyXG4gICAgfSxcclxuICAgIC8vIEVuZW15IGV4cGxvZGUgb2JqZWN0XHJcbiAgICBlbmVteUV4cGxvZGU6IHtcclxuICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlOiBlbl9leHAsXHJcbiAgICAgICAgZnJhbWVzOiA0XHJcbiAgICB9LFxyXG4gICAgLy8gUGxheWVyIGV4cGxvZGVcclxuICAgIHBsYXllckV4cGxvZGU6IHtcclxuICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlOiBwbF9leHAsXHJcbiAgICAgICAgZnJhbWVzOiA0XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBzZXR0aW5nc1xyXG5leHBvcnQgZGVmYXVsdCBTRVRUSU5HUzsiLCJpbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncyc7XHJcblxyXG5jb25zdCBTRVRUSU5HUyA9IFNldHRpbmdzLmF1ZGlvO1xyXG5cclxuY2xhc3MgQXVkaW9Db250cm9sbGVyIHtcclxuICAgIC8vIEF1ZGlvIG1hbmFnZXJcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc291bmRzID0gU0VUVElOR1Muc291bmRzO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXkoc291bmQsIHZvbHVtZSkge1xyXG4gICAgICAgIGxldCBwID0gbmV3IEF1ZGlvKHNvdW5kKTtcclxuICAgICAgICBwLnBsYXkoKTtcclxuICAgICAgICBwLnZvbHVtZSA9IHZvbHVtZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXVkaW9Db250cm9sbGVyOyIsIi8vIE1hdGhzLCB2ZWN0b3JzIG9ialxyXG5cclxuY2xhc3MgVmVjdG9yMmQge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHggfHwgMDtcclxuICAgICAgICB0aGlzLnkgPSB5IHx8IDA7XHJcbiAgICB9XHJcbiAgICBhZGQodmVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyZCh2ZWN0b3IueCArIHRoaXMueCwgdmVjdG9yLnkgKyB0aGlzLnkpO1xyXG4gICAgfVxyXG4gICAgc3Vic3RyYWN0KHZlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMmQodmVjdG9yLnggLSB0aGlzLngsIHZlY3Rvci55IC0gdGhpcy55KTtcclxuICAgIH1cclxuICAgIG11bHRpcGx5KHNjYWxhcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMmQodGhpcy54ICogc2NhbGFyLCB0aGlzLnkgKiBzY2FsYXIpO1xyXG4gICAgfVxyXG4gICAgZGl2aWRlKHNjYWxhcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMmQodGhpcy54IC8gc2NhbGFyLCB0aGlzLnkgLyBzY2FsYXIpO1xyXG4gICAgfVxyXG4gICAgZ2V0TWFnbml0dWRlKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmh5cG90KHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxuICAgIG5vcm1hbGl6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGUodGhpcy5nZXRNYWduaXR1ZGUoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjJkOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=