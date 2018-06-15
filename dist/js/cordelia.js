/*!
 *   Cordelia color picker
 *   version: 1.0.0
 *    author: Cevad Tokatli <cevadtokatli@hotmail.com>
 *   website: http://cevadtokatli.com
 *    github: https://github.com/cevadtokatli/cordelia-react
 *   license: MIT
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Cordelia = factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */

	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	var objectAssign$1 = /*#__PURE__*/Object.freeze({
		default: objectAssign,
		__moduleExports: objectAssign
	});

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	var invariant_1 = invariant;

	var invariant$1 = /*#__PURE__*/Object.freeze({
		default: invariant_1,
		__moduleExports: invariant_1
	});

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	var emptyObject = {};

	var emptyObject_1 = emptyObject;

	var emptyObject$1 = /*#__PURE__*/Object.freeze({
		default: emptyObject_1,
		__moduleExports: emptyObject_1
	});

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	var emptyFunction_1 = emptyFunction;

	var emptyFunction$1 = /*#__PURE__*/Object.freeze({
		default: emptyFunction_1,
		__moduleExports: emptyFunction_1
	});

	var m = ( objectAssign$1 && objectAssign ) || objectAssign$1;

	var n = ( invariant$1 && invariant_1 ) || invariant$1;

	var p = ( emptyObject$1 && emptyObject_1 ) || emptyObject$1;

	var q = ( emptyFunction$1 && emptyFunction_1 ) || emptyFunction$1;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};

	var r = "function" === typeof Symbol && Symbol["for"],
	    t = r ? Symbol["for"]("react.element") : 60103,
	    u = r ? Symbol["for"]("react.portal") : 60106,
	    v = r ? Symbol["for"]("react.fragment") : 60107,
	    w = r ? Symbol["for"]("react.strict_mode") : 60108,
	    x = r ? Symbol["for"]("react.provider") : 60109,
	    y = r ? Symbol["for"]("react.context") : 60110,
	    z = r ? Symbol["for"]("react.async_mode") : 60111,
	    A = r ? Symbol["for"]("react.forward_ref") : 60112,
	    B = "function" === typeof Symbol && Symbol.iterator;function C(a) {
	  for (var b = arguments.length - 1, e = "http://reactjs.org/docs/error-decoder.html?invariant\x3d" + a, c = 0; c < b; c++) {
	    e += "\x26args[]\x3d" + encodeURIComponent(arguments[c + 1]);
	  }n(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e);
	}var D = { isMounted: function isMounted() {
	    return !1;
	  }, enqueueForceUpdate: function enqueueForceUpdate() {}, enqueueReplaceState: function enqueueReplaceState() {}, enqueueSetState: function enqueueSetState() {} };
	function E(a, b, e) {
	  this.props = a;this.context = b;this.refs = p;this.updater = e || D;
	}E.prototype.isReactComponent = {};E.prototype.setState = function (a, b) {
	  "object" !== (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && "function" !== typeof a && null != a ? C("85") : void 0;this.updater.enqueueSetState(this, a, b, "setState");
	};E.prototype.forceUpdate = function (a) {
	  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};function F() {}F.prototype = E.prototype;function G(a, b, e) {
	  this.props = a;this.context = b;this.refs = p;this.updater = e || D;
	}var H = G.prototype = new F();
	H.constructor = G;m(H, E.prototype);H.isPureReactComponent = !0;var I = { current: null },
	    J = Object.prototype.hasOwnProperty,
	    K = { key: !0, ref: !0, __self: !0, __source: !0 };
	function L(a, b, e) {
	  var c = void 0,
	      d = {},
	      g = null,
	      h = null;if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
	    J.call(b, c) && !K.hasOwnProperty(c) && (d[c] = b[c]);
	  }var f = arguments.length - 2;if (1 === f) d.children = e;else if (1 < f) {
	    for (var k = Array(f), l = 0; l < f; l++) {
	      k[l] = arguments[l + 2];
	    }d.children = k;
	  }if (a && a.defaultProps) for (c in f = a.defaultProps, f) {
	    void 0 === d[c] && (d[c] = f[c]);
	  }return { $$typeof: t, type: a, key: g, ref: h, props: d, _owner: I.current };
	}
	function M(a) {
	  return "object" === (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && null !== a && a.$$typeof === t;
	}function escape(a) {
	  var b = { "\x3d": "\x3d0", ":": "\x3d2" };return "$" + ("" + a).replace(/[=:]/g, function (a) {
	    return b[a];
	  });
	}var N = /\/+/g,
	    O = [];function P(a, b, e, c) {
	  if (O.length) {
	    var d = O.pop();d.result = a;d.keyPrefix = b;d.func = e;d.context = c;d.count = 0;return d;
	  }return { result: a, keyPrefix: b, func: e, context: c, count: 0 };
	}function Q(a) {
	  a.result = null;a.keyPrefix = null;a.func = null;a.context = null;a.count = 0;10 > O.length && O.push(a);
	}
	function R(a, b, e, c) {
	  var d = typeof a === 'undefined' ? 'undefined' : _typeof(a);if ("undefined" === d || "boolean" === d) a = null;var g = !1;if (null === a) g = !0;else switch (d) {case "string":case "number":
	      g = !0;break;case "object":
	      switch (a.$$typeof) {case t:case u:
	          g = !0;}}if (g) return e(c, a, "" === b ? "." + S(a, 0) : b), 1;g = 0;b = "" === b ? "." : b + ":";if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
	    d = a[h];var f = b + S(d, h);g += R(d, f, e, c);
	  } else if (null === a || "undefined" === typeof a ? f = null : (f = B && a[B] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(d = a.next()).done;) {
	    d = d.value, f = b + S(d, h++), g += R(d, f, e, c);
	  } else "object" === d && (e = "" + a, C("31", "[object Object]" === e ? "object with keys {" + Object.keys(a).join(", ") + "}" : e, ""));return g;
	}function S(a, b) {
	  return "object" === (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && null !== a && null != a.key ? escape(a.key) : b.toString(36);
	}function T(a, b) {
	  a.func.call(a.context, b, a.count++);
	}
	function U(a, b, e) {
	  var c = a.result,
	      d = a.keyPrefix;a = a.func.call(a.context, b, a.count++);Array.isArray(a) ? V(a, c, e, q.thatReturnsArgument) : null != a && (M(a) && (b = d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(N, "$\x26/") + "/") + e, a = { $$typeof: t, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner }), c.push(a));
	}function V(a, b, e, c, d) {
	  var g = "";null != e && (g = ("" + e).replace(N, "$\x26/") + "/");b = P(b, g, c, d);null == a || R(a, "", U, b);Q(b);
	}
	var W = { Children: { map: function map(a, b, e) {
	      if (null == a) return a;var c = [];V(a, c, null, b, e);return c;
	    }, forEach: function forEach(a, b, e) {
	      if (null == a) return a;b = P(null, null, b, e);null == a || R(a, "", T, b);Q(b);
	    }, count: function count(a) {
	      return null == a ? 0 : R(a, "", q.thatReturnsNull, null);
	    }, toArray: function toArray$$1(a) {
	      var b = [];V(a, b, null, q.thatReturnsArgument);return b;
	    }, only: function only(a) {
	      M(a) ? void 0 : C("143");return a;
	    } }, createRef: function createRef() {
	    return { current: null };
	  }, Component: E, PureComponent: G, createContext: function createContext(a, b) {
	    void 0 === b && (b = null);a = { $$typeof: y,
	      _calculateChangedBits: b, _defaultValue: a, _currentValue: a, _changedBits: 0, Provider: null, Consumer: null };a.Provider = { $$typeof: x, _context: a };return a.Consumer = a;
	  }, forwardRef: function forwardRef(a) {
	    return { $$typeof: A, render: a };
	  }, Fragment: v, StrictMode: w, unstable_AsyncMode: z, createElement: L, cloneElement: function cloneElement(a, b, e) {
	    null === a || void 0 === a ? C("267", a) : void 0;var c = void 0,
	        d = m({}, a.props),
	        g = a.key,
	        h = a.ref,
	        f = a._owner;if (null != b) {
	      void 0 !== b.ref && (h = b.ref, f = I.current);void 0 !== b.key && (g = "" + b.key);var k = void 0;a.type && a.type.defaultProps && (k = a.type.defaultProps);for (c in b) {
	        J.call(b, c) && !K.hasOwnProperty(c) && (d[c] = void 0 === b[c] && void 0 !== k ? k[c] : b[c]);
	      }
	    }c = arguments.length - 2;if (1 === c) d.children = e;else if (1 < c) {
	      k = Array(c);for (var l = 0; l < c; l++) {
	        k[l] = arguments[l + 2];
	      }d.children = k;
	    }return { $$typeof: t, type: a.type, key: g, ref: h, props: d, _owner: f };
	  }, createFactory: function createFactory(a) {
	    var b = L.bind(null, a);b.type = a;return b;
	  }, isValidElement: M, version: "16.3.2", __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: I, assign: m } },
	    X = Object.freeze({ default: W }),
	    Y = X && W || X;var react_production_min = Y["default"] ? Y["default"] : Y;

	var react_production_min$1 = /*#__PURE__*/Object.freeze({
		default: react_production_min,
		__moduleExports: react_production_min
	});

	var require$$0 = ( react_production_min$1 && react_production_min ) || react_production_min$1;

	var react = createCommonjsModule(function (module) {

	  {
	    module.exports = require$$0;
	  }
	});

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction$1(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction$2 = function emptyFunction() {};

	emptyFunction$2.thatReturns = makeEmptyFunction$1;
	emptyFunction$2.thatReturnsFalse = makeEmptyFunction$1(false);
	emptyFunction$2.thatReturnsTrue = makeEmptyFunction$1(true);
	emptyFunction$2.thatReturnsNull = makeEmptyFunction$1(null);
	emptyFunction$2.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction$2.thatReturnsArgument = function (arg) {
	  return arg;
	};

	var emptyFunction_1$1 = emptyFunction$2;

	var emptyFunction$3 = /*#__PURE__*/Object.freeze({
		default: emptyFunction_1$1,
		__moduleExports: emptyFunction_1$1
	});

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat$1 = function validateFormat(format) {};

	function invariant$2(condition, format, a, b, c, d, e, f) {
	  validateFormat$1(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	var invariant_1$1 = invariant$2;

	var invariant$3 = /*#__PURE__*/Object.freeze({
		default: invariant_1$1,
		__moduleExports: invariant_1$1
	});

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var ReactPropTypesSecret$1 = /*#__PURE__*/Object.freeze({
		default: ReactPropTypesSecret_1,
		__moduleExports: ReactPropTypesSecret_1
	});

	var emptyFunction$4 = ( emptyFunction$3 && emptyFunction_1$1 ) || emptyFunction$3;

	var invariant$4 = ( invariant$3 && invariant_1$1 ) || invariant$3;

	var ReactPropTypesSecret$2 = ( ReactPropTypesSecret$1 && ReactPropTypesSecret_1 ) || ReactPropTypesSecret$1;

	var factoryWithThrowingShims = function factoryWithThrowingShims() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret$2) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant$4(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction$4;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var factoryWithThrowingShims$1 = /*#__PURE__*/Object.freeze({
		default: factoryWithThrowingShims,
		__moduleExports: factoryWithThrowingShims
	});

	var require$$0$1 = ( factoryWithThrowingShims$1 && factoryWithThrowingShims ) || factoryWithThrowingShims$1;

	var propTypes = createCommonjsModule(function (module) {
	  /**
	   * Copyright (c) 2013-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   */

	  {
	    // By explicitly using `prop-types` you are opting into new production behavior.
	    // http://fb.me/prop-types-in-prod
	    module.exports = require$$0$1();
	  }
	});

	var es6Promise = createCommonjsModule(function (module, exports) {
	  /*!
	   * @overview es6-promise - a tiny implementation of Promises/A+.
	   * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	   * @license   Licensed under MIT license
	   *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	   * @version   v4.2.4+314e4831
	   */

	  (function (global, factory) {
	    module.exports = factory();
	  })(commonjsGlobal, function () {

	    function objectOrFunction(x) {
	      var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
	      return x !== null && (type === 'object' || type === 'function');
	    }

	    function isFunction(x) {
	      return typeof x === 'function';
	    }

	    var _isArray = void 0;
	    if (Array.isArray) {
	      _isArray = Array.isArray;
	    } else {
	      _isArray = function _isArray(x) {
	        return Object.prototype.toString.call(x) === '[object Array]';
	      };
	    }

	    var isArray = _isArray;

	    var len = 0;
	    var vertxNext = void 0;
	    var customSchedulerFn = void 0;

	    var asap = function asap(callback, arg) {
	      queue[len] = callback;
	      queue[len + 1] = arg;
	      len += 2;
	      if (len === 2) {
	        // If len is 2, that means that we need to schedule an async flush.
	        // If additional callbacks are queued before the queue is flushed, they
	        // will be processed by this flush that we are scheduling.
	        if (customSchedulerFn) {
	          customSchedulerFn(flush);
	        } else {
	          scheduleFlush();
	        }
	      }
	    };

	    function setScheduler(scheduleFn) {
	      customSchedulerFn = scheduleFn;
	    }

	    function setAsap(asapFn) {
	      asap = asapFn;
	    }

	    var browserWindow = typeof window !== 'undefined' ? window : undefined;
	    var browserGlobal = browserWindow || {};
	    var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	    var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

	    // test for web worker but not in IE10
	    var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

	    // node
	    function useNextTick() {
	      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	      // see https://github.com/cujojs/when/issues/410 for details
	      return function () {
	        return process.nextTick(flush);
	      };
	    }

	    // vertx
	    function useVertxTimer() {
	      if (typeof vertxNext !== 'undefined') {
	        return function () {
	          vertxNext(flush);
	        };
	      }

	      return useSetTimeout();
	    }

	    function useMutationObserver() {
	      var iterations = 0;
	      var observer = new BrowserMutationObserver(flush);
	      var node = document.createTextNode('');
	      observer.observe(node, { characterData: true });

	      return function () {
	        node.data = iterations = ++iterations % 2;
	      };
	    }

	    // web worker
	    function useMessageChannel() {
	      var channel = new MessageChannel();
	      channel.port1.onmessage = flush;
	      return function () {
	        return channel.port2.postMessage(0);
	      };
	    }

	    function useSetTimeout() {
	      // Store setTimeout reference so es6-promise will be unaffected by
	      // other code modifying setTimeout (like sinon.useFakeTimers())
	      var globalSetTimeout = setTimeout;
	      return function () {
	        return globalSetTimeout(flush, 1);
	      };
	    }

	    var queue = new Array(1000);
	    function flush() {
	      for (var i = 0; i < len; i += 2) {
	        var callback = queue[i];
	        var arg = queue[i + 1];

	        callback(arg);

	        queue[i] = undefined;
	        queue[i + 1] = undefined;
	      }

	      len = 0;
	    }

	    function attemptVertx() {
	      try {
	        var vertx = Function('return this')().require('vertx');
	        vertxNext = vertx.runOnLoop || vertx.runOnContext;
	        return useVertxTimer();
	      } catch (e) {
	        return useSetTimeout();
	      }
	    }

	    var scheduleFlush = void 0;
	    // Decide what async method to use to triggering processing of queued callbacks:
	    if (isNode) {
	      scheduleFlush = useNextTick();
	    } else if (BrowserMutationObserver) {
	      scheduleFlush = useMutationObserver();
	    } else if (isWorker) {
	      scheduleFlush = useMessageChannel();
	    } else if (browserWindow === undefined && typeof commonjsRequire === 'function') {
	      scheduleFlush = attemptVertx();
	    } else {
	      scheduleFlush = useSetTimeout();
	    }

	    function then(onFulfillment, onRejection) {
	      var parent = this;

	      var child = new this.constructor(noop);

	      if (child[PROMISE_ID] === undefined) {
	        makePromise(child);
	      }

	      var _state = parent._state;

	      if (_state) {
	        var callback = arguments[_state - 1];
	        asap(function () {
	          return invokeCallback(_state, child, callback, parent._result);
	        });
	      } else {
	        subscribe(parent, child, onFulfillment, onRejection);
	      }

	      return child;
	    }

	    /**
	      `Promise.resolve` returns a promise that will become resolved with the
	      passed `value`. It is shorthand for the following:
	    
	      ```javascript
	      let promise = new Promise(function(resolve, reject){
	        resolve(1);
	      });
	    
	      promise.then(function(value){
	        // value === 1
	      });
	      ```
	    
	      Instead of writing the above, your code now simply becomes the following:
	    
	      ```javascript
	      let promise = Promise.resolve(1);
	    
	      promise.then(function(value){
	        // value === 1
	      });
	      ```
	    
	      @method resolve
	      @static
	      @param {Any} value value that the returned promise will be resolved with
	      Useful for tooling.
	      @return {Promise} a promise that will become fulfilled with the given
	      `value`
	    */
	    function resolve$1(object) {
	      /*jshint validthis:true */
	      var Constructor = this;

	      if (object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.constructor === Constructor) {
	        return object;
	      }

	      var promise = new Constructor(noop);
	      resolve(promise, object);
	      return promise;
	    }

	    var PROMISE_ID = Math.random().toString(36).substring(2);

	    function noop() {}

	    var PENDING = void 0;
	    var FULFILLED = 1;
	    var REJECTED = 2;

	    var TRY_CATCH_ERROR = { error: null };

	    function selfFulfillment() {
	      return new TypeError("You cannot resolve a promise with itself");
	    }

	    function cannotReturnOwn() {
	      return new TypeError('A promises callback cannot return that same promise.');
	    }

	    function getThen(promise) {
	      try {
	        return promise.then;
	      } catch (error) {
	        TRY_CATCH_ERROR.error = error;
	        return TRY_CATCH_ERROR;
	      }
	    }

	    function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
	      try {
	        then$$1.call(value, fulfillmentHandler, rejectionHandler);
	      } catch (e) {
	        return e;
	      }
	    }

	    function handleForeignThenable(promise, thenable, then$$1) {
	      asap(function (promise) {
	        var sealed = false;
	        var error = tryThen(then$$1, thenable, function (value) {
	          if (sealed) {
	            return;
	          }
	          sealed = true;
	          if (thenable !== value) {
	            resolve(promise, value);
	          } else {
	            fulfill(promise, value);
	          }
	        }, function (reason) {
	          if (sealed) {
	            return;
	          }
	          sealed = true;

	          reject(promise, reason);
	        }, 'Settle: ' + (promise._label || ' unknown promise'));

	        if (!sealed && error) {
	          sealed = true;
	          reject(promise, error);
	        }
	      }, promise);
	    }

	    function handleOwnThenable(promise, thenable) {
	      if (thenable._state === FULFILLED) {
	        fulfill(promise, thenable._result);
	      } else if (thenable._state === REJECTED) {
	        reject(promise, thenable._result);
	      } else {
	        subscribe(thenable, undefined, function (value) {
	          return resolve(promise, value);
	        }, function (reason) {
	          return reject(promise, reason);
	        });
	      }
	    }

	    function handleMaybeThenable(promise, maybeThenable, then$$1) {
	      if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
	        handleOwnThenable(promise, maybeThenable);
	      } else {
	        if (then$$1 === TRY_CATCH_ERROR) {
	          reject(promise, TRY_CATCH_ERROR.error);
	          TRY_CATCH_ERROR.error = null;
	        } else if (then$$1 === undefined) {
	          fulfill(promise, maybeThenable);
	        } else if (isFunction(then$$1)) {
	          handleForeignThenable(promise, maybeThenable, then$$1);
	        } else {
	          fulfill(promise, maybeThenable);
	        }
	      }
	    }

	    function resolve(promise, value) {
	      if (promise === value) {
	        reject(promise, selfFulfillment());
	      } else if (objectOrFunction(value)) {
	        handleMaybeThenable(promise, value, getThen(value));
	      } else {
	        fulfill(promise, value);
	      }
	    }

	    function publishRejection(promise) {
	      if (promise._onerror) {
	        promise._onerror(promise._result);
	      }

	      publish(promise);
	    }

	    function fulfill(promise, value) {
	      if (promise._state !== PENDING) {
	        return;
	      }

	      promise._result = value;
	      promise._state = FULFILLED;

	      if (promise._subscribers.length !== 0) {
	        asap(publish, promise);
	      }
	    }

	    function reject(promise, reason) {
	      if (promise._state !== PENDING) {
	        return;
	      }
	      promise._state = REJECTED;
	      promise._result = reason;

	      asap(publishRejection, promise);
	    }

	    function subscribe(parent, child, onFulfillment, onRejection) {
	      var _subscribers = parent._subscribers;
	      var length = _subscribers.length;

	      parent._onerror = null;

	      _subscribers[length] = child;
	      _subscribers[length + FULFILLED] = onFulfillment;
	      _subscribers[length + REJECTED] = onRejection;

	      if (length === 0 && parent._state) {
	        asap(publish, parent);
	      }
	    }

	    function publish(promise) {
	      var subscribers = promise._subscribers;
	      var settled = promise._state;

	      if (subscribers.length === 0) {
	        return;
	      }

	      var child = void 0,
	          callback = void 0,
	          detail = promise._result;

	      for (var i = 0; i < subscribers.length; i += 3) {
	        child = subscribers[i];
	        callback = subscribers[i + settled];

	        if (child) {
	          invokeCallback(settled, child, callback, detail);
	        } else {
	          callback(detail);
	        }
	      }

	      promise._subscribers.length = 0;
	    }

	    function tryCatch(callback, detail) {
	      try {
	        return callback(detail);
	      } catch (e) {
	        TRY_CATCH_ERROR.error = e;
	        return TRY_CATCH_ERROR;
	      }
	    }

	    function invokeCallback(settled, promise, callback, detail) {
	      var hasCallback = isFunction(callback),
	          value = void 0,
	          error = void 0,
	          succeeded = void 0,
	          failed = void 0;

	      if (hasCallback) {
	        value = tryCatch(callback, detail);

	        if (value === TRY_CATCH_ERROR) {
	          failed = true;
	          error = value.error;
	          value.error = null;
	        } else {
	          succeeded = true;
	        }

	        if (promise === value) {
	          reject(promise, cannotReturnOwn());
	          return;
	        }
	      } else {
	        value = detail;
	        succeeded = true;
	      }

	      if (promise._state !== PENDING) {
	        // noop
	      } else if (hasCallback && succeeded) {
	        resolve(promise, value);
	      } else if (failed) {
	        reject(promise, error);
	      } else if (settled === FULFILLED) {
	        fulfill(promise, value);
	      } else if (settled === REJECTED) {
	        reject(promise, value);
	      }
	    }

	    function initializePromise(promise, resolver) {
	      try {
	        resolver(function resolvePromise(value) {
	          resolve(promise, value);
	        }, function rejectPromise(reason) {
	          reject(promise, reason);
	        });
	      } catch (e) {
	        reject(promise, e);
	      }
	    }

	    var id = 0;
	    function nextId() {
	      return id++;
	    }

	    function makePromise(promise) {
	      promise[PROMISE_ID] = id++;
	      promise._state = undefined;
	      promise._result = undefined;
	      promise._subscribers = [];
	    }

	    function validationError() {
	      return new Error('Array Methods must be provided an Array');
	    }

	    var Enumerator = function () {
	      function Enumerator(Constructor, input) {
	        this._instanceConstructor = Constructor;
	        this.promise = new Constructor(noop);

	        if (!this.promise[PROMISE_ID]) {
	          makePromise(this.promise);
	        }

	        if (isArray(input)) {
	          this.length = input.length;
	          this._remaining = input.length;

	          this._result = new Array(this.length);

	          if (this.length === 0) {
	            fulfill(this.promise, this._result);
	          } else {
	            this.length = this.length || 0;
	            this._enumerate(input);
	            if (this._remaining === 0) {
	              fulfill(this.promise, this._result);
	            }
	          }
	        } else {
	          reject(this.promise, validationError());
	        }
	      }

	      Enumerator.prototype._enumerate = function _enumerate(input) {
	        for (var i = 0; this._state === PENDING && i < input.length; i++) {
	          this._eachEntry(input[i], i);
	        }
	      };

	      Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
	        var c = this._instanceConstructor;
	        var resolve$$1 = c.resolve;

	        if (resolve$$1 === resolve$1) {
	          var _then = getThen(entry);

	          if (_then === then && entry._state !== PENDING) {
	            this._settledAt(entry._state, i, entry._result);
	          } else if (typeof _then !== 'function') {
	            this._remaining--;
	            this._result[i] = entry;
	          } else if (c === Promise$1) {
	            var promise = new c(noop);
	            handleMaybeThenable(promise, entry, _then);
	            this._willSettleAt(promise, i);
	          } else {
	            this._willSettleAt(new c(function (resolve$$1) {
	              return resolve$$1(entry);
	            }), i);
	          }
	        } else {
	          this._willSettleAt(resolve$$1(entry), i);
	        }
	      };

	      Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
	        var promise = this.promise;

	        if (promise._state === PENDING) {
	          this._remaining--;

	          if (state === REJECTED) {
	            reject(promise, value);
	          } else {
	            this._result[i] = value;
	          }
	        }

	        if (this._remaining === 0) {
	          fulfill(promise, this._result);
	        }
	      };

	      Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
	        var enumerator = this;

	        subscribe(promise, undefined, function (value) {
	          return enumerator._settledAt(FULFILLED, i, value);
	        }, function (reason) {
	          return enumerator._settledAt(REJECTED, i, reason);
	        });
	      };

	      return Enumerator;
	    }();

	    /**
	      `Promise.all` accepts an array of promises, and returns a new promise which
	      is fulfilled with an array of fulfillment values for the passed promises, or
	      rejected with the reason of the first passed promise to be rejected. It casts all
	      elements of the passed iterable to promises as it runs this algorithm.
	    
	      Example:
	    
	      ```javascript
	      let promise1 = resolve(1);
	      let promise2 = resolve(2);
	      let promise3 = resolve(3);
	      let promises = [ promise1, promise2, promise3 ];
	    
	      Promise.all(promises).then(function(array){
	        // The array here would be [ 1, 2, 3 ];
	      });
	      ```
	    
	      If any of the `promises` given to `all` are rejected, the first promise
	      that is rejected will be given as an argument to the returned promises's
	      rejection handler. For example:
	    
	      Example:
	    
	      ```javascript
	      let promise1 = resolve(1);
	      let promise2 = reject(new Error("2"));
	      let promise3 = reject(new Error("3"));
	      let promises = [ promise1, promise2, promise3 ];
	    
	      Promise.all(promises).then(function(array){
	        // Code here never runs because there are rejected promises!
	      }, function(error) {
	        // error.message === "2"
	      });
	      ```
	    
	      @method all
	      @static
	      @param {Array} entries array of promises
	      @param {String} label optional string for labeling the promise.
	      Useful for tooling.
	      @return {Promise} promise that is fulfilled when all `promises` have been
	      fulfilled, or rejected if any of them become rejected.
	      @static
	    */
	    function all(entries) {
	      return new Enumerator(this, entries).promise;
	    }

	    /**
	      `Promise.race` returns a new promise which is settled in the same way as the
	      first passed promise to settle.
	    
	      Example:
	    
	      ```javascript
	      let promise1 = new Promise(function(resolve, reject){
	        setTimeout(function(){
	          resolve('promise 1');
	        }, 200);
	      });
	    
	      let promise2 = new Promise(function(resolve, reject){
	        setTimeout(function(){
	          resolve('promise 2');
	        }, 100);
	      });
	    
	      Promise.race([promise1, promise2]).then(function(result){
	        // result === 'promise 2' because it was resolved before promise1
	        // was resolved.
	      });
	      ```
	    
	      `Promise.race` is deterministic in that only the state of the first
	      settled promise matters. For example, even if other promises given to the
	      `promises` array argument are resolved, but the first settled promise has
	      become rejected before the other promises became fulfilled, the returned
	      promise will become rejected:
	    
	      ```javascript
	      let promise1 = new Promise(function(resolve, reject){
	        setTimeout(function(){
	          resolve('promise 1');
	        }, 200);
	      });
	    
	      let promise2 = new Promise(function(resolve, reject){
	        setTimeout(function(){
	          reject(new Error('promise 2'));
	        }, 100);
	      });
	    
	      Promise.race([promise1, promise2]).then(function(result){
	        // Code here never runs
	      }, function(reason){
	        // reason.message === 'promise 2' because promise 2 became rejected before
	        // promise 1 became fulfilled
	      });
	      ```
	    
	      An example real-world use case is implementing timeouts:
	    
	      ```javascript
	      Promise.race([ajax('foo.json'), timeout(5000)])
	      ```
	    
	      @method race
	      @static
	      @param {Array} promises array of promises to observe
	      Useful for tooling.
	      @return {Promise} a promise which settles in the same way as the first passed
	      promise to settle.
	    */
	    function race(entries) {
	      /*jshint validthis:true */
	      var Constructor = this;

	      if (!isArray(entries)) {
	        return new Constructor(function (_, reject) {
	          return reject(new TypeError('You must pass an array to race.'));
	        });
	      } else {
	        return new Constructor(function (resolve, reject) {
	          var length = entries.length;
	          for (var i = 0; i < length; i++) {
	            Constructor.resolve(entries[i]).then(resolve, reject);
	          }
	        });
	      }
	    }

	    /**
	      `Promise.reject` returns a promise rejected with the passed `reason`.
	      It is shorthand for the following:
	    
	      ```javascript
	      let promise = new Promise(function(resolve, reject){
	        reject(new Error('WHOOPS'));
	      });
	    
	      promise.then(function(value){
	        // Code here doesn't run because the promise is rejected!
	      }, function(reason){
	        // reason.message === 'WHOOPS'
	      });
	      ```
	    
	      Instead of writing the above, your code now simply becomes the following:
	    
	      ```javascript
	      let promise = Promise.reject(new Error('WHOOPS'));
	    
	      promise.then(function(value){
	        // Code here doesn't run because the promise is rejected!
	      }, function(reason){
	        // reason.message === 'WHOOPS'
	      });
	      ```
	    
	      @method reject
	      @static
	      @param {Any} reason value that the returned promise will be rejected with.
	      Useful for tooling.
	      @return {Promise} a promise rejected with the given `reason`.
	    */
	    function reject$1(reason) {
	      /*jshint validthis:true */
	      var Constructor = this;
	      var promise = new Constructor(noop);
	      reject(promise, reason);
	      return promise;
	    }

	    function needsResolver() {
	      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	    }

	    function needsNew() {
	      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	    }

	    /**
	      Promise objects represent the eventual result of an asynchronous operation. The
	      primary way of interacting with a promise is through its `then` method, which
	      registers callbacks to receive either a promise's eventual value or the reason
	      why the promise cannot be fulfilled.
	    
	      Terminology
	      -----------
	    
	      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	      - `thenable` is an object or function that defines a `then` method.
	      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	      - `exception` is a value that is thrown using the throw statement.
	      - `reason` is a value that indicates why a promise was rejected.
	      - `settled` the final resting state of a promise, fulfilled or rejected.
	    
	      A promise can be in one of three states: pending, fulfilled, or rejected.
	    
	      Promises that are fulfilled have a fulfillment value and are in the fulfilled
	      state.  Promises that are rejected have a rejection reason and are in the
	      rejected state.  A fulfillment value is never a thenable.
	    
	      Promises can also be said to *resolve* a value.  If this value is also a
	      promise, then the original promise's settled state will match the value's
	      settled state.  So a promise that *resolves* a promise that rejects will
	      itself reject, and a promise that *resolves* a promise that fulfills will
	      itself fulfill.
	    
	    
	      Basic Usage:
	      ------------
	    
	      ```js
	      let promise = new Promise(function(resolve, reject) {
	        // on success
	        resolve(value);
	    
	        // on failure
	        reject(reason);
	      });
	    
	      promise.then(function(value) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	    
	      Advanced Usage:
	      ---------------
	    
	      Promises shine when abstracting away asynchronous interactions such as
	      `XMLHttpRequest`s.
	    
	      ```js
	      function getJSON(url) {
	        return new Promise(function(resolve, reject){
	          let xhr = new XMLHttpRequest();
	    
	          xhr.open('GET', url);
	          xhr.onreadystatechange = handler;
	          xhr.responseType = 'json';
	          xhr.setRequestHeader('Accept', 'application/json');
	          xhr.send();
	    
	          function handler() {
	            if (this.readyState === this.DONE) {
	              if (this.status === 200) {
	                resolve(this.response);
	              } else {
	                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	              }
	            }
	          };
	        });
	      }
	    
	      getJSON('/posts.json').then(function(json) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	    
	      Unlike callbacks, promises are great composable primitives.
	    
	      ```js
	      Promise.all([
	        getJSON('/posts'),
	        getJSON('/comments')
	      ]).then(function(values){
	        values[0] // => postsJSON
	        values[1] // => commentsJSON
	    
	        return values;
	      });
	      ```
	    
	      @class Promise
	      @param {Function} resolver
	      Useful for tooling.
	      @constructor
	    */

	    var Promise$1 = function () {
	      function Promise(resolver) {
	        this[PROMISE_ID] = nextId();
	        this._result = this._state = undefined;
	        this._subscribers = [];

	        if (noop !== resolver) {
	          typeof resolver !== 'function' && needsResolver();
	          this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	        }
	      }

	      /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.
	       ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```
	       Chaining
	      --------
	       The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.
	       ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });
	       findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	       ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```
	       Assimilation
	      ------------
	       Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.
	       ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```
	       If the assimliated promise rejects, then the downstream promise will also reject.
	       ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```
	       Simple Example
	      --------------
	       Synchronous Example
	       ```javascript
	      let result;
	       try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	       Errback Example
	       ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```
	       Promise Example;
	       ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```
	       Advanced Example
	      --------------
	       Synchronous Example
	       ```javascript
	      let author, books;
	       try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	       Errback Example
	       ```js
	       function foundBooks(books) {
	       }
	       function failure(reason) {
	       }
	       findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```
	       Promise Example;
	       ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```
	       @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	      */

	      /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.
	      ```js
	      function findAuthor(){
	      throw new Error('couldn't find that author');
	      }
	      // synchronous
	      try {
	      findAuthor();
	      } catch(reason) {
	      // something went wrong
	      }
	      // async with promises
	      findAuthor().catch(function(reason){
	      // something went wrong
	      });
	      ```
	      @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	      */

	      Promise.prototype.catch = function _catch(onRejection) {
	        return this.then(null, onRejection);
	      };

	      /**
	        `finally` will be invoked regardless of the promise's fate just as native
	        try/catch/finally behaves
	      
	        Synchronous example:
	      
	        ```js
	        findAuthor() {
	          if (Math.random() > 0.5) {
	            throw new Error();
	          }
	          return new Author();
	        }
	      
	        try {
	          return findAuthor(); // succeed or fail
	        } catch(error) {
	          return findOtherAuther();
	        } finally {
	          // always runs
	          // doesn't affect the return value
	        }
	        ```
	      
	        Asynchronous example:
	      
	        ```js
	        findAuthor().catch(function(reason){
	          return findOtherAuther();
	        }).finally(function(){
	          // author was either found, or not
	        });
	        ```
	      
	        @method finally
	        @param {Function} callback
	        @return {Promise}
	      */

	      Promise.prototype.finally = function _finally(callback) {
	        var promise = this;
	        var constructor = promise.constructor;

	        return promise.then(function (value) {
	          return constructor.resolve(callback()).then(function () {
	            return value;
	          });
	        }, function (reason) {
	          return constructor.resolve(callback()).then(function () {
	            throw reason;
	          });
	        });
	      };

	      return Promise;
	    }();

	    Promise$1.prototype.then = then;
	    Promise$1.all = all;
	    Promise$1.race = race;
	    Promise$1.resolve = resolve$1;
	    Promise$1.reject = reject$1;
	    Promise$1._setScheduler = setScheduler;
	    Promise$1._setAsap = setAsap;
	    Promise$1._asap = asap;

	    /*global self*/
	    function polyfill() {
	      var local = void 0;

	      if (typeof commonjsGlobal !== 'undefined') {
	        local = commonjsGlobal;
	      } else if (typeof self !== 'undefined') {
	        local = self;
	      } else {
	        try {
	          local = Function('return this')();
	        } catch (e) {
	          throw new Error('polyfill failed because global object is unavailable in this environment');
	        }
	      }

	      var P = local.Promise;

	      if (P) {
	        var promiseToString = null;
	        try {
	          promiseToString = Object.prototype.toString.call(P.resolve());
	        } catch (e) {
	          // silently ignored
	        }

	        if (promiseToString === '[object Promise]' && !P.cast) {
	          return;
	        }
	      }

	      local.Promise = Promise$1;
	    }

	    // Strange compat..
	    Promise$1.polyfill = polyfill;
	    Promise$1.Promise = Promise$1;

	    return Promise$1;
	  });

	  
	});

	var es6Promise$1 = /*#__PURE__*/Object.freeze({
		default: es6Promise,
		__moduleExports: es6Promise
	});

	var require$$0$2 = ( es6Promise$1 && es6Promise ) || es6Promise$1;

	var auto = require$$0$2.polyfill();

	var MajorPicker = function (_React$Component) {
	    inherits(MajorPicker, _React$Component);

	    function MajorPicker() {
	        var _ref;

	        var _temp, _this, _ret;

	        classCallCheck(this, MajorPicker);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MajorPicker.__proto__ || Object.getPrototypeOf(MajorPicker)).call.apply(_ref, [this].concat(args))), _this), _this.setPosition = function () {
	            if (_this.props.color) {
	                if (_this.props.pickerStyle == 0) {
	                    var _this$props$rgbaColor = _this.props.rgbaColor,
	                        r = _this$props$rgbaColor.r,
	                        g = _this$props$rgbaColor.g,
	                        b = _this$props$rgbaColor.b,
	                        x = _this.props.picker.height,
	                        maxColor = Math.max(r, g, b),
	                        topCV = Math.abs(Math.round(x / 255 * maxColor - x)),
	                        minColor = Math.min(r, g, b),
	                        leftV = Math.abs(Math.round(x / 255 * minColor - x)),
	                        leftCV = leftV - Math.abs(Math.round(topCV / maxColor * minColor)),
	                        left = leftCV - _this.props.picker.subtractedValue,
	                        top = topCV - _this.props.picker.subtractedValue;
	                } else {
	                    var _this$props$hslColor = _this.props.hslColor,
	                        h = _this$props$hslColor.h,
	                        s = _this$props$hslColor.s,
	                        l = _this$props$hslColor.l,
	                        x = _this.props.picker.height,
	                        leftCV = Math.round(x / 360 * h),
	                        topCV = Math.abs(Math.round(x / 100 * s - x)),
	                        left = leftCV - _this.props.picker.subtractedValue,
	                        top = topCV - _this.props.picker.subtractedValue;
	                }
	            } else {
	                var value = _this.props.picker.subtractedValue * -1,
	                    left = value,
	                    top = value;
	            }

	            _this.dragger.style.left = left + 'px';
	            _this.dragger.style.top = top + 'px';
	        }, _temp), possibleConstructorReturn(_this, _ret);
	    }

	    createClass(MajorPicker, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.setPosition();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            if (this.props.pickerUpdate) {
	                this.setPosition();
	            }
	        }

	        /**
	         * Sets the position of the picker according to the color.
	         */

	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return react.createElement(
	                'div',
	                { ref: function ref(elm) {
	                        return _this2.container = elm;
	                    }, className: 'cdp-major-picker', onMouseDown: function onMouseDown(e) {
	                        return _this2.props.pickerClicked(e, 'major');
	                    }, onTouchStart: function onTouchStart(e) {
	                        return _this2.props.pickerClicked(e, 'major');
	                    } },
	                this.props.pickerStyle == 0 && react.createElement(
	                    'div',
	                    { ref: function ref(elm) {
	                            return _this2.backgroundElm = elm;
	                        }, className: 'cdp-major-picker-gradient cdp-background-type-current-color', style: { background: 'hsl(' + this.props.hslColor.h + ', 100%, 50%)' } },
	                    react.createElement(
	                        'div',
	                        { className: 'cdp-major-picker-gradient cdp-gradient-type-lr-white' },
	                        react.createElement(
	                            'div',
	                            { className: 'cdp-major-picker-gradient cdp-gradient-type-bt-black cdp-last-gradient-child' },
	                            react.createElement('div', { ref: function ref(elm) {
	                                    return _this2.dragger = elm;
	                                }, className: "cdp-major-dragger " + (this.props.isDark ? 'cdp-dark' : '') })
	                        )
	                    )
	                ),
	                ' ',
	                this.props.pickerStyle == 1 && react.createElement(
	                    'div',
	                    { className: 'cdp-major-picker-gradient cdp-gradient-type-lr-colorful' },
	                    react.createElement(
	                        'div',
	                        { className: 'cdp-major-picker-gradient cdp-gradient-type-bt-gray cdp-last-gradient-child' },
	                        react.createElement('div', { ref: function ref(elm) {
	                                return _this2.dragger = elm;
	                            }, className: 'cdp-major-dragger' })
	                    )
	                )
	            );
	        }
	    }]);
	    return MajorPicker;
	}(react.Component);

	var MinorPicker = function (_React$Component) {
	    inherits(MinorPicker, _React$Component);

	    function MinorPicker() {
	        var _ref;

	        var _temp, _this, _ret;

	        classCallCheck(this, MinorPicker);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MinorPicker.__proto__ || Object.getPrototypeOf(MinorPicker)).call.apply(_ref, [this].concat(args))), _this), _this.setPosition = function () {
	            var left = (_this.props.picker.width - _this.props.picker.subtractedValue * 2) / 2;

	            if (_this.props.color) {
	                if (_this.props.pickerStyle == 0) {
	                    var top = Math.round(_this.props.picker.height / 360 * _this.props.hslColor.h) - _this.props.picker.subtractedValue;
	                } else {
	                    var y = _this.props.picker.height,
	                        top = Math.abs(Math.round(y / 100 * _this.props.hslColor.l - y)) - _this.props.picker.subtractedValue;
	                }
	            } else {
	                var top = _this.props.picker.subtractedValue * -1;
	            }

	            _this.dragger.style.left = left + 'px';
	            _this.dragger.style.top = top + 'px';
	        }, _temp), possibleConstructorReturn(_this, _ret);
	    }

	    createClass(MinorPicker, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.setPosition();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            if (this.props.pickerUpdate) {
	                this.setPosition();
	            }
	        }

	        /**
	         * Sets the position of the picker according to the color.
	         */

	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props$hslColor = this.props.hslColor,
	                h = _props$hslColor.h,
	                s = _props$hslColor.s;

	            if (!this.props.color) {
	                h = 0;
	                s = 100;
	            }

	            return react.createElement(
	                'div',
	                { ref: function ref(elm) {
	                        return _this2.container = elm;
	                    }, className: 'cdp-minor-picker', onMouseDown: function onMouseDown(e) {
	                        return _this2.props.pickerClicked(e, 'minor');
	                    }, onTouchStart: function onTouchStart(e) {
	                        return _this2.props.pickerClicked(e, 'minor');
	                    } },
	                this.props.pickerStyle == 0 && react.createElement(
	                    'div',
	                    { className: 'cdp-minor-picker-gradient cdp-gradient-type-tb-colorful cdp-last-gradient-child' },
	                    react.createElement('div', { ref: function ref(elm) {
	                            return _this2.dragger = elm;
	                        }, className: 'cdp-minor-dragger' })
	                ),
	                ' ',
	                this.props.pickerStyle == 1 && react.createElement(
	                    'div',
	                    { ref: function ref(elm) {
	                            return _this2.backgroundElm = elm;
	                        }, className: 'cdp-minor-picker-gradient cdp-gradient-type-bt-white-current-color-black cdp-last-gradient-child', style: { background: 'linear-gradient(to bottom, hsl(0, 100%, 100%), hsl(' + h + ', ' + s + '%, 50%), hsl(0,0%,0%))' } },
	                    react.createElement('div', { ref: function ref(elm) {
	                            return _this2.dragger = elm;
	                        }, className: "cdp-minor-dragger " + (this.props.isDark ? 'cdp-dark' : '') })
	                )
	            );
	        }
	    }]);
	    return MinorPicker;
	}(react.Component);

	var OpacityPicker = function (_React$Component) {
	    inherits(OpacityPicker, _React$Component);

	    function OpacityPicker() {
	        var _ref;

	        var _temp, _this, _ret;

	        classCallCheck(this, OpacityPicker);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = OpacityPicker.__proto__ || Object.getPrototypeOf(OpacityPicker)).call.apply(_ref, [this].concat(args))), _this), _this.setPosition = function () {
	            var left = (_this.props.picker.width - _this.props.picker.subtractedValue * 2) / 2;

	            if (_this.props.color) {
	                var top = Math.round(_this.props.picker.height / 100 * (_this.props.rgbaColor.a * 100)) - _this.props.picker.subtractedValue;
	            } else {
	                var top = _this.props.picker.height - _this.props.picker.subtractedValue;
	            }

	            _this.dragger.style.left = left + 'px';
	            _this.dragger.style.top = top + 'px';
	        }, _temp), possibleConstructorReturn(_this, _ret);
	    }

	    createClass(OpacityPicker, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.setPosition();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            if (this.props.pickerUpdate) {
	                this.setPosition();
	            }
	        }

	        /**
	         * Sets the position of the picker according to the color.
	         */

	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var isDark = this.props.isDark;
	            if (this.props.rgbaColor.a < 0.25) {
	                isDark = true;
	            }

	            var _props$rgbaColor = this.props.rgbaColor,
	                r = _props$rgbaColor.r,
	                g = _props$rgbaColor.g,
	                b = _props$rgbaColor.b,
	                a = _props$rgbaColor.a;

	            if (!this.props.color) {
	                r = 255;
	                g = 255;
	                b = 255;
	            }

	            return react.createElement(
	                'div',
	                { ref: function ref(elm) {
	                        return _this2.container = elm;
	                    }, className: 'cdp-opacity-picker', onMouseDown: function onMouseDown(e) {
	                        return _this2.props.pickerClicked(e, 'opacity');
	                    }, onTouchStart: function onTouchStart(e) {
	                        return _this2.props.pickerClicked(e, 'opacity');
	                    } },
	                react.createElement(
	                    'div',
	                    { className: 'cdp-opacity-picker-gradient cdp-background-type-opacity' },
	                    react.createElement(
	                        'div',
	                        { ref: function ref(elm) {
	                                return _this2.backgroundElm = elm;
	                            }, className: 'cdp-opacity-picker-gradient cdp-gradient-type-bt-current-color cdp-last-gradient-child', style: { background: 'linear-gradient(to top, rgba(' + r + ', ' + g + ', ' + b + ', 1), rgba(' + r + ', ' + g + ', ' + b + ', 0))' } },
	                        react.createElement('div', { ref: function ref(elm) {
	                                return _this2.dragger = elm;
	                            }, className: "cdp-opacity-dragger " + (isDark ? 'cdp-dark' : '') })
	                    )
	                )
	            );
	        }
	    }]);
	    return OpacityPicker;
	}(react.Component);

	var ColorConverter = function () {
	    function ColorConverter() {
	        classCallCheck(this, ColorConverter);
	    }

	    createClass(ColorConverter, null, [{
	        key: 'rgbTohex',

	        /**
	         * Converts RGB value to HEX.
	         *
	         * @param {Object} rgb
	         * @returns {String}
	         */
	        value: function rgbTohex(rgb) {
	            var hex = '#' + ('0' + parseInt(rgb.r, 10).toString(16)).slice(-2) + ('0' + parseInt(rgb.g, 10).toString(16)).slice(-2) + ('0' + parseInt(rgb.b, 10).toString(16)).slice(-2);

	            return hex.toUpperCase();
	        }

	        /**
	         * Converts RGB value to HSL.
	         *
	         * @param {Object} rgb
	         * @returns {Object}
	         */

	    }, {
	        key: 'rgbTohsl',
	        value: function rgbTohsl(rgb) {
	            var r = rgb.r / 255,
	                g = rgb.g / 255,
	                b = rgb.b / 255;
	            var maxColor = Math.max(r, g, b);
	            var minColor = Math.min(r, g, b);
	            // calculate L:
	            var l = (maxColor + minColor) / 2;
	            var s = 0;
	            var h = 0;
	            if (maxColor != minColor) {
	                // calculate S:
	                if (l < 0.5) {
	                    s = (maxColor - minColor) / (maxColor + minColor);
	                } else {
	                    s = (maxColor - minColor) / (2.0 - maxColor - minColor);
	                }
	                // calculate h:
	                if (r == maxColor) {
	                    h = (g - b) / (maxColor - minColor);
	                } else if (g == maxColor) {
	                    h = 2.0 + (b - r) / (maxColor - minColor);
	                } else {
	                    h = 4.0 + (r - g) / (maxColor - minColor);
	                }
	            }

	            l = Math.round(l * 100);
	            s = Math.round(s * 100);
	            h = Math.round(h * 60);
	            if (h < 0) {
	                h += 360;
	            }

	            return { h: h, s: s, l: l };
	        }
	    }]);
	    return ColorConverter;
	}();

	var PickerContainer = function (_React$Component) {
	    inherits(PickerContainer, _React$Component);

	    function PickerContainer(props) {
	        classCallCheck(this, PickerContainer);

	        var _this = possibleConstructorReturn(this, (PickerContainer.__proto__ || Object.getPrototypeOf(PickerContainer)).call(this, props));

	        _this.pickerClicked = function (event, dragStatus) {
	            _this.dragStatus = dragStatus;
	            document.body.classList.add('cdp-dragging-active');

	            if (_this.props.pickerStyle == 0 && dragStatus != 'minor' && !_this.props.color) {
	                _this.setColorWithPosition({ x: _this.minorPicker.dragger.offsetLeft + _this.props.minorPicker.subtractedValue, y: _this.minorPicker.dragger.offsetTop + _this.props.minorPicker.subtractedValue }, 'minor');
	            } else if (_this.props.pickerStyle == 1 && dragStatus != 'major' && !_this.props.color) {
	                _this.setColorWithPosition({ x: _this.majorPicker.dragger.offsetLeft + _this.props.majorPicker.subtractedValue, y: _this.majorPicker.dragger.offsetTop + _this.props.majorPicker.subtractedValue }, 'major');
	            }

	            _this.toggleDraggerListeners(true);
	            _this.pickerMoved(event.nativeEvent);
	        };

	        _this.pickerMoved = function (event) {
	            var n;

	            if (_this.dragStatus == 'major') {
	                n = _this.newPosition(event, _this.majorPicker);
	            } else if (_this.dragStatus == 'minor') {
	                n = _this.newPosition(event, _this.minorPicker);
	            } else {
	                n = _this.newPosition(event, _this.opacityPicker);
	            }
	            _this.setColorWithPosition(n, _this.dragStatus, true);

	            event.preventDefault();
	        };

	        _this.newPosition = function (event, picker) {
	            var p = picker.props.picker,
	                rect = picker.container.getBoundingClientRect(),
	                eX = event.clientX ? event.clientX : event.pageX - window.pageXOffset,
	                eY = event.clientY ? event.clientY : event.pageY - window.pageYOffset,
	                x = eX - (rect.left + p.subtractedValue),
	                y = eY - (rect.top + p.subtractedValue);

	            if (x < -p.subtractedValue) {
	                x = -p.subtractedValue;
	            } else if (x > p.width - p.subtractedValue) {
	                x = p.width - p.subtractedValue;
	            }
	            if (y < -p.subtractedValue) {
	                y = -p.subtractedValue;
	            } else if (y > p.height - p.subtractedValue) {
	                y = p.height - p.subtractedValue;
	            }

	            picker.dragger.style.left = x + 'px';
	            picker.dragger.style.top = y + 'px';

	            return { x: x + p.subtractedValue, y: y + p.subtractedValue };
	        };

	        _this.setColorWithPosition = function (n, type) {
	            var eventCall = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	            var rgb = _this.rgbColor;

	            if (type == 'major') {
	                if (_this.props.pickerStyle == 0) {
	                    rgb = [rgb.r, rgb.g, rgb.b];
	                    var x = _this.props.majorPicker.height,
	                        topCV,
	                        leftV,
	                        leftCV,
	                        netV;

	                    for (var i = 0; i < rgb.length; i++) {
	                        var v = rgb[i];
	                        if (v == 255) {
	                            netV = Math.abs(Math.round(255 / x * n.y - 255));
	                        } else {
	                            topCV = Math.round((x - n.y) * (v / x));
	                            leftV = Math.round((x - n.x) * ((255 - v) / x));
	                            leftCV = Math.abs(Math.round((x - n.y) * (leftV / x)));
	                            netV = topCV + leftCV;
	                        }
	                        rgb[i] = netV;
	                    }

	                    _this.rgbaColor = {
	                        r: rgb[0],
	                        g: rgb[1],
	                        b: rgb[2],
	                        a: _this.rgbaColor.a
	                    };

	                    var _this$rgbaColor = _this.rgbaColor,
	                        r = _this$rgbaColor.r,
	                        g = _this$rgbaColor.g,
	                        b = _this$rgbaColor.b,
	                        _ColorConverter$rgbTo = ColorConverter.rgbTohsl(_this.rgbColor),
	                        h = _ColorConverter$rgbTo.h;

	                    _this.majorPicker.backgroundElm.style.background = 'hsl(' + h + ', 100%, 50%)';
	                    if (_this.props.allowOpacity) {
	                        _this.opacityPicker.backgroundElm.style.background = 'linear-gradient(to top, rgba(' + r + ', ' + g + ', ' + b + ', 1), rgba(' + r + ', ' + g + ', ' + b + ', 0))';
	                    }
	                    _this.props.setDraggingColor(_this.rgbaColor, eventCall);
	                } else {
	                    var x = _this.props.majorPicker.height,
	                        h = Math.round(n.x * (360 / x)),
	                        s = Math.abs(Math.round(n.y * (100 / x)) - 100);

	                    _this.hslColor.h = h;
	                    _this.hslColor.s = s;

	                    var minorX = _this.minorPicker.dragger.offsetLeft + _this.props.minorPicker.subtractedValue,
	                        minorY = _this.minorPicker.dragger.offsetTop + _this.props.minorPicker.subtractedValue;

	                    _this.setColorWithPosition({ x: minorX, y: minorY }, 'minor', eventCall);
	                }
	            } else if (type == 'minor') {
	                if (_this.props.pickerStyle == 0) {
	                    var x = _this.props.minorPicker.height,
	                        h = Math.round(n.y * (360 / x));

	                    rgb = _this.props.getRgbaValue('hsl(' + h + ', 100%, 50%)');
	                    _this.rgbColor = rgb;
	                    _this.hslColor.h = h;

	                    var majorX = _this.majorPicker.dragger.offsetLeft + _this.props.majorPicker.subtractedValue,
	                        majorY = _this.majorPicker.dragger.offsetTop + _this.props.majorPicker.subtractedValue;

	                    _this.setColorWithPosition({ x: majorX, y: majorY }, 'major', eventCall);
	                } else {
	                    var x = _this.props.minorPicker.height,
	                        l = Math.abs(Math.round(n.y * (100 / x)) - 100),
	                        _this$props$getRgbaVa = _this.props.getRgbaValue('hsl(' + _this.hslColor.h + ', ' + _this.hslColor.s + '%, ' + l + '%)'),
	                        r = _this$props$getRgbaVa.r,
	                        g = _this$props$getRgbaVa.g,
	                        b = _this$props$getRgbaVa.b;


	                    _this.hslColor.l = l;
	                    _this.rgbaColor = {
	                        r: r,
	                        g: g,
	                        b: b,
	                        a: _this.rgbaColor.a
	                    };

	                    var _this$hslColor = _this.hslColor,
	                        h = _this$hslColor.h,
	                        s = _this$hslColor.s;


	                    _this.minorPicker.backgroundElm.style.background = 'linear-gradient(to bottom, hsl(0, 100%, 100%), hsl(' + h + ', ' + s + '%, 50%), hsl(0, 0%, 0%))';
	                    if (_this.props.allowOpacity) {
	                        _this.opacityPicker.backgroundElm.style.background = 'linear-gradient(to top, rgba(' + r + ', ' + g + ', ' + b + ', 1), rgba(' + r + ', ' + g + ', ' + b + ', 0))';
	                    }
	                    _this.props.setDraggingColor(_this.rgbaColor, eventCall);
	                }
	            } else if (type == 'opacity') {
	                var _this$rgbaColor2 = _this.rgbaColor,
	                    r = _this$rgbaColor2.r,
	                    g = _this$rgbaColor2.g,
	                    b = _this$rgbaColor2.b,
	                    x = _this.props.opacityPicker.height,
	                    a = Math.round(100 / x * n.y) / 100;


	                _this.rgbaColor = { r: r, g: g, b: b, a: a };
	                var _this$hslColor2 = _this.hslColor,
	                    h = _this$hslColor2.h,
	                    s = _this$hslColor2.s;


	                if (_this.props.pickerStyle == 0) {
	                    _this.majorPicker.backgroundElm.style.background = 'hsl(' + h + ', 100%, 50%)';
	                } else {
	                    _this.minorPicker.backgroundElm.style.background = 'linear-gradient(to bottom, hsl(0, 100%, 100%), hsl(' + h + ', ' + s + '%, 50%), hsl(0, 0%, 0%))';
	                }
	                _this.opacityPicker.backgroundElm.style.background = 'linear-gradient(to top, rgba(' + r + ', ' + g + ', ' + b + ', 1), rgba(' + r + ', ' + g + ', ' + b + ', 0))';
	                _this.props.setDraggingColor(_this.rgbaColor, eventCall);
	            }
	        };

	        _this.pickerReleased = function () {
	            document.body.classList.remove('cdp-dragging-active');
	            _this.props.setColor(_this.rgbaColor, false);
	            _this.toggleDraggerListeners(false);
	        };

	        _this.toggleDraggerListeners = function (status) {
	            if (status) {
	                document.addEventListener('mousemove', _this.pickerMoved);
	                document.addEventListener('touchmove', _this.pickerMoved);
	                document.addEventListener('mouseup', _this.pickerReleased);
	                document.addEventListener('touchend', _this.pickerReleased);
	            } else {
	                document.removeEventListener('mousemove', _this.pickerMoved);
	                document.removeEventListener('touchmove', _this.pickerMoved);
	                document.removeEventListener('mouseup', _this.pickerReleased);
	                document.removeEventListener('touchend', _this.pickerReleased);
	            }
	        };

	        _this.rgbaColor = _extends({}, _this.props.rgbaColor);
	        _this.rgbColor = _extends({}, _this.props.rgbColor);
	        _this.hslColor = _extends({}, _this.props.hslColor);
	        _this.dragStatus = null;
	        return _this;
	    }

	    createClass(PickerContainer, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {

	            if (nextProps.pickerUpdate) {
	                this.rgbaColor = _extends({}, nextProps.rgbaColor);
	                if (nextProps.color) {
	                    this.hslColor = ColorConverter.rgbTohsl(nextProps.rgbaColor);
	                    this.rgbColor = this.props.getRgbaValue('hsl(' + this.hslColor.h + ', 100%, 50%)');
	                } else {
	                    this.rgbColor = {
	                        r: 255,
	                        g: 0,
	                        b: 0
	                    };
	                    this.hslColor = {
	                        h: 0,
	                        s: 0,
	                        l: 0
	                    };
	                }

	                this.props.pickerUpdated();
	            }
	        }

	        /**
	         * This function is called when a color is chosen using the picker.
	         * Sets the color.
	         *
	         * @param {Object} event
	         * @param {String} dragStatus
	         */


	        /**
	         * This function is called when the picker is moved on the palette. Takes the event object as an argument. Calls the setColorWithPosition() to set the new color.
	         *
	         * @param {Object} event
	         */


	        /**
	         * Sets and returns the new position of the picker.
	         *
	         * @param {Object} event
	         * @param {Object} picker
	         * @returns {Object} {x: Number, y: Number}
	         */


	        /**
	         * Sets the color according to the new position.
	         *
	         * @param {Object} n
	         * @param {String} type
	         */


	        /**
	         * Ends the dragging.
	         */


	        /**
	         * Toggles dragger listeners according to status.
	         *
	         * @param {Boolean} status
	         */

	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return react.createElement(
	                'div',
	                { className: 'cdp-picker-container' },
	                react.createElement(MajorPicker, { ref: function ref(elm) {
	                        return _this2.majorPicker = elm;
	                    }, color: this.props.color, rgbaColor: this.rgbaColor, rgbColor: this.rgbColor, hslColor: this.hslColor, isDark: this.props.isDark, picker: this.props.majorPicker, pickerStyle: this.props.pickerStyle, pickerClicked: this.pickerClicked, pickerUpdate: this.props.pickerUpdate }),
	                react.createElement(MinorPicker, { ref: function ref(elm) {
	                        return _this2.minorPicker = elm;
	                    }, color: this.props.color, rgbaColor: this.rgbaColor, hslColor: this.hslColor, isDark: this.props.isDark, picker: this.props.minorPicker, pickerStyle: this.props.pickerStyle, pickerClicked: this.pickerClicked, pickerUpdate: this.props.pickerUpdate }),
	                this.props.allowOpacity && react.createElement(OpacityPicker, { ref: function ref(elm) {
	                        return _this2.opacityPicker = elm;
	                    }, color: this.props.color, rgbaColor: this.rgbaColor, isDark: this.props.isDark, picker: this.props.opacityPicker, pickerClicked: this.pickerClicked, pickerUpdate: this.props.pickerUpdate })
	            );
	        }
	    }]);
	    return PickerContainer;
	}(react.Component);

	var InitialColor = function (_React$Component) {
	    inherits(InitialColor, _React$Component);

	    function InitialColor() {
	        classCallCheck(this, InitialColor);
	        return possibleConstructorReturn(this, (InitialColor.__proto__ || Object.getPrototypeOf(InitialColor)).apply(this, arguments));
	    }

	    createClass(InitialColor, [{
	        key: 'render',
	        value: function render() {
	            return react.createElement(
	                'div',
	                { className: "cdp-initial-color " + (this.props.isDark ? 'cdp-dark' : ''), style: { background: this.props.initialColor }, onClick: this.props.setInitialColorAsColor },
	                react.createElement('i', { className: 'cdp-icons' })
	            );
	        }
	    }]);
	    return InitialColor;
	}(react.Component);

	var ColorInput = function (_React$Component) {
	    inherits(ColorInput, _React$Component);

	    function ColorInput(props) {
	        classCallCheck(this, ColorInput);

	        var _this = possibleConstructorReturn(this, (ColorInput.__proto__ || Object.getPrototypeOf(ColorInput)).call(this, props));

	        _this.keyDown = function (e) {
	            if (e.keyCode == 13) {
	                _this.changedValue(e);
	            }
	        };

	        _this.changedValue = function (e) {
	            if (_this.state.color.trim() != '' && _this.state.color != _this.props.color) {
	                var rgba = _this.props.getRgbaValue(_this.state.color);
	                _this.props.setColor(rgba);
	            }
	        };

	        _this.onChange = function (e) {
	            _this.setState({
	                color: e.target.value
	            });
	        };

	        _this.state = {
	            color: _this.props.color
	        };
	        return _this;
	    }

	    createClass(ColorInput, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.color != nextProps.color) {
	                this.setState({
	                    color: nextProps.color ? nextProps.color : ''
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return react.createElement('input', { type: 'text', spellCheck: false, className: "cdp-current-color " + (this.props.isDark ? 'cdp-dark' : ''), value: this.state.color ? this.state.color : '', onChange: this.onChange, onKeyDown: this.keyDown, onBlur: this.changedValue });
	        }
	    }]);
	    return ColorInput;
	}(react.Component);

	var ClearColor = function (_React$Component) {
	    inherits(ClearColor, _React$Component);

	    function ClearColor() {
	        classCallCheck(this, ClearColor);
	        return possibleConstructorReturn(this, (ClearColor.__proto__ || Object.getPrototypeOf(ClearColor)).apply(this, arguments));
	    }

	    createClass(ClearColor, [{
	        key: 'render',
	        value: function render() {
	            return react.createElement(
	                'div',
	                { className: "cdp-clear-color " + (this.props.isDark ? 'cdp-dark' : ''), onClick: this.props.clearColor },
	                react.createElement('i', { className: 'cdp-icons' })
	            );
	        }
	    }]);
	    return ClearColor;
	}(react.Component);

	var CurrentColorConsole = function (_React$Component) {
	    inherits(CurrentColorConsole, _React$Component);

	    function CurrentColorConsole() {
	        classCallCheck(this, CurrentColorConsole);
	        return possibleConstructorReturn(this, (CurrentColorConsole.__proto__ || Object.getPrototypeOf(CurrentColorConsole)).apply(this, arguments));
	    }

	    createClass(CurrentColorConsole, [{
	        key: 'render',
	        value: function render() {
	            var isDark = this.props.isDark;
	            if (this.props.rgbaColor.a < 0.4) {
	                isDark = true;
	            }

	            return react.createElement(
	                'div',
	                { className: 'cdp-current-color-console', style: { background: this.props.color ? this.props.color : 'transparent' } },
	                this.props.showColorValue && react.createElement(ColorInput, { color: this.props.color, isDark: isDark, setColor: this.props.setColor, getRgbaValue: this.props.getRgbaValue }),
	                this.props.allowClearColor && react.createElement(ClearColor, { isDark: isDark, clearColor: this.props.clearColor })
	            );
	        }
	    }]);
	    return CurrentColorConsole;
	}(react.Component);

	var ColorConsole = function (_React$Component) {
	    inherits(ColorConsole, _React$Component);

	    function ColorConsole() {
	        classCallCheck(this, ColorConsole);
	        return possibleConstructorReturn(this, (ColorConsole.__proto__ || Object.getPrototypeOf(ColorConsole)).apply(this, arguments));
	    }

	    createClass(ColorConsole, [{
	        key: 'render',
	        value: function render() {
	            return react.createElement(
	                'div',
	                { className: 'cdp-color-console-container cdp-background-type-opacity' },
	                this.props.showColorValue && react.createElement(InitialColor, { initialColor: this.props.initialColor, isDark: this.props.isDarkInitial, setInitialColorAsColor: this.props.setInitialColorAsColor }),
	                react.createElement(CurrentColorConsole, { color: this.props.color, isDark: this.props.isDarkCurrent, rgbaColor: this.props.rgbaColor, showColorValue: this.props.showColorValue, allowClearColor: this.props.allowClearColor, setColor: this.props.setColor, clearColor: this.props.clearColor, getRgbaValue: this.props.getRgbaValue })
	            );
	        }
	    }]);
	    return ColorConsole;
	}(react.Component);

	var Buttons = function (_React$Component) {
	    inherits(Buttons, _React$Component);

	    function Buttons() {
	        classCallCheck(this, Buttons);
	        return possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));
	    }

	    createClass(Buttons, [{
	        key: "render",
	        value: function render() {
	            return react.createElement(
	                "div",
	                { className: "cdp-button-container" },
	                react.createElement(
	                    "div",
	                    { className: "cdp-button", "cdp-function": "save", onClick: this.props.save },
	                    react.createElement("i", { className: "cdp-icons" }),
	                    "SAVE"
	                ),
	                react.createElement(
	                    "div",
	                    { className: "cdp-button", "cdp-function": "cancel", onClick: this.props.cancel },
	                    react.createElement("i", { className: "cdp-icons" }),
	                    "CANCEL"
	                )
	            );
	        }
	    }]);
	    return Buttons;
	}(react.Component);

	var Console = function (_React$Component) {
	    inherits(Console, _React$Component);

	    function Console() {
	        classCallCheck(this, Console);
	        return possibleConstructorReturn(this, (Console.__proto__ || Object.getPrototypeOf(Console)).apply(this, arguments));
	    }

	    createClass(Console, [{
	        key: 'render',
	        value: function render() {
	            var colorConsole = this.props.showColorValue || this.props.allowClearColor ? true : false;

	            return react.createElement(
	                'div',
	                { className: "cdp-console-container " + (!colorConsole ? 'cdp-color-console-non-showing' : !this.props.showColorValue ? 'cdp-current-color-non-showing' : !this.props.allowClearColor ? 'cdp-clear-color-non-showing' : '') },
	                colorConsole && react.createElement(ColorConsole, { color: this.props.color, initialColor: this.props.initialColor, isDarkCurrent: this.props.isDarkCurrent, isDarkInitial: this.props.isDarkInitial, rgbaColor: this.props.rgbaColor, showColorValue: this.props.showColorValue, allowClearColor: this.props.allowClearColor, setColor: this.props.setColor, setInitialColorAsColor: this.props.setInitialColorAsColor, clearColor: this.props.clearColor, getRgbaValue: this.props.getRgbaValue }),
	                this.props.showButtons && react.createElement(Buttons, { save: this.props.save, cancel: this.props.cancel })
	            );
	        }
	    }]);
	    return Console;
	}(react.Component);

	var Arrow = function (_React$Component) {
	    inherits(Arrow, _React$Component);

	    function Arrow() {
	        classCallCheck(this, Arrow);
	        return possibleConstructorReturn(this, (Arrow.__proto__ || Object.getPrototypeOf(Arrow)).apply(this, arguments));
	    }

	    createClass(Arrow, [{
	        key: "render",
	        value: function render() {
	            return react.createElement(
	                "div",
	                { className: "cdp-arrow-div" },
	                react.createElement("i", { className: "cdp-icons", onClick: this.props.togglePalette })
	            );
	        }
	    }]);
	    return Arrow;
	}(react.Component);

	var PaletteAddElement = function (_React$Component) {
	    inherits(PaletteAddElement, _React$Component);

	    function PaletteAddElement() {
	        classCallCheck(this, PaletteAddElement);
	        return possibleConstructorReturn(this, (PaletteAddElement.__proto__ || Object.getPrototypeOf(PaletteAddElement)).apply(this, arguments));
	    }

	    createClass(PaletteAddElement, [{
	        key: "render",
	        value: function render() {
	            return react.createElement(
	                "div",
	                { className: "cdp-palette-add-element", onClick: this.props.addColor },
	                react.createElement("i", { className: "cdp-icons" })
	            );
	        }
	    }]);
	    return PaletteAddElement;
	}(react.Component);

	var PaletteColor = function (_React$Component) {
	    inherits(PaletteColor, _React$Component);

	    function PaletteColor() {
	        var _ref;

	        var _temp, _this, _ret;

	        classCallCheck(this, PaletteColor);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = PaletteColor.__proto__ || Object.getPrototypeOf(PaletteColor)).call.apply(_ref, [this].concat(args))), _this), _this.setColor = function () {
	            var _this$props$color = _this.props.color,
	                r = _this$props$color.r,
	                g = _this$props$color.g,
	                b = _this$props$color.b,
	                a = _this$props$color.a;

	            _this.props.setColor({ r: r, g: g, b: b, a: a });
	        }, _temp), possibleConstructorReturn(_this, _ret);
	    }

	    createClass(PaletteColor, [{
	        key: "render",
	        value: function render() {
	            return react.createElement(
	                "div",
	                { className: "cdp-palette-element cdp-background-type-opacity" },
	                react.createElement("div", { style: { background: this.props.color.value }, onClick: this.setColor })
	            );
	        }
	    }]);
	    return PaletteColor;
	}(react.Component);

	var PaletteColors = function (_React$Component) {
	    inherits(PaletteColors, _React$Component);

	    function PaletteColors(props) {
	        classCallCheck(this, PaletteColors);

	        var _this = possibleConstructorReturn(this, (PaletteColors.__proto__ || Object.getPrototypeOf(PaletteColors)).call(this, props));

	        _this.addColor = function () {
	            // if color is not null
	            if (_this.props.color) {
	                var _this$props$rgbaColor = _this.props.rgbaColor,
	                    r = _this$props$rgbaColor.r,
	                    g = _this$props$rgbaColor.g,
	                    b = _this$props$rgbaColor.b,
	                    a = _this$props$rgbaColor.a,
	                    value = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')',
	                    p = _this.state.colors.find(function (i) {
	                    return i.value == value;
	                });

	                if (!p) {
	                    // Color doesn't exit in the palette.
	                    _this.setState({
	                        colors: [].concat(toConsumableArray(_this.state.colors), [{
	                            value: value,
	                            r: r,
	                            g: g,
	                            b: b,
	                            a: a
	                        }])
	                    });
	                }
	            }
	        };

	        _this.state = {
	            colors: []
	        };
	        return _this;
	    }

	    createClass(PaletteColors, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            var colors = [];

	            this.props.paletteColors.forEach(function (i) {
	                var _props$getRgbaValue = _this2.props.getRgbaValue(i),
	                    r = _props$getRgbaValue.r,
	                    g = _props$getRgbaValue.g,
	                    b = _props$getRgbaValue.b,
	                    a = _props$getRgbaValue.a,
	                    value = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';

	                colors.push({
	                    value: value,
	                    r: r,
	                    g: g,
	                    b: b,
	                    a: a
	                });
	            });

	            this.setState({
	                colors: colors
	            });
	        }

	        /**
	         * Adds a color to the palette.
	         */

	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            return react.createElement(
	                'div',
	                { className: 'cdp-palette' },
	                this.props.allowPaletteAddColor && react.createElement(PaletteAddElement, { addColor: this.addColor }),
	                this.state.colors.map(function (i) {
	                    return react.createElement(PaletteColor, { key: i.value, color: i, setColor: _this3.props.setColor });
	                })
	            );
	        }
	    }]);
	    return PaletteColors;
	}(react.Component);

	var Helper = function () {
	    function Helper() {
	        classCallCheck(this, Helper);
	    }

	    createClass(Helper, null, [{
	        key: 'isDark',

	        /**
	         * Checks if a color is dark or not.
	         *
	         * @param {Object} rgb
	         * @returns {Boolean}
	         */
	        value: function isDark(rgb) {
	            var r = rgb.r,
	                g = rgb.g,
	                b = rgb.b,
	                dark = Math.round((r * 299 + g * 587 + b * 114) / 1000);


	            return dark > 125 ? true : false;
	        }

	        /**
	         * Shows or hides the given element with opacity animation.
	         *
	         * @param {HTML Element} elm
	         * @param {Boolean} status
	         * @returns {Promise}
	         */

	    }, {
	        key: 'opacityAnimation',
	        value: function opacityAnimation(elm, status) {
	            return new Promise(function (resolve) {
	                var style = elm.getAttribute('style') ? elm.getAttribute('style').replace(/opacity[^;]+;?/g, '') : null,
	                    start = null,
	                    duration = 100;

	                if (status) {
	                    elm.classList.remove('cdp-hidden');
	                    elm.style.opacity = 0;
	                } else {
	                    elm.style.opacity = 1;
	                }

	                function opacityAnimation(timestamp) {
	                    if (!start) {
	                        start = timestamp || new Date.getTime();
	                    }

	                    var runtime = timestamp - start,
	                        progress = runtime / duration;
	                    progress = Math.min(progress, 1);

	                    if (runtime < duration) {
	                        var value = progress;
	                        if (!status) {
	                            value = Math.abs(progress - 1);
	                        }
	                        elm.style.opacity = value;
	                        window.requestAnimationFrame(opacityAnimation);
	                    } else {
	                        if (!status) {
	                            elm.classList.add('cdp-hidden');
	                        }
	                        elm.setAttribute('style', style);

	                        resolve();
	                    }
	                }
	                window.requestAnimationFrame(opacityAnimation);
	            });
	        }
	    }]);
	    return Helper;
	}();

	var Palette = function (_React$Component) {
	    inherits(Palette, _React$Component);

	    function Palette(props) {
	        classCallCheck(this, Palette);

	        var _this = possibleConstructorReturn(this, (Palette.__proto__ || Object.getPrototypeOf(Palette)).call(this, props));

	        _this.state = {
	            open: _this.props.paletteOpen
	        };
	        return _this;
	    }

	    createClass(Palette, [{
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            var _this2 = this;

	            if (this.props.paletteOpen != this.state.open) {
	                var open = this.props.paletteOpen;
	                Helper.opacityAnimation(this.elm, open).then(function () {
	                    _this2.setState({
	                        open: open
	                    });
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            return react.createElement(
	                'div',
	                { ref: function ref(elm) {
	                        return _this3.elm = elm;
	                    }, className: "cdp-palette-container " + (!this.state.open ? 'cdp-hidden' : '') },
	                react.createElement('hr', { className: 'cdp-palette-line' }),
	                react.createElement(PaletteColors, { color: this.props.color, rgbaColor: this.props.rgbaColor, paletteColors: this.props.paletteColors, allowPaletteAddColor: this.props.allowPaletteAddColor, getRgbaValue: this.props.getRgbaValue, setColor: this.props.setColor })
	            );
	        }
	    }]);
	    return Palette;
	}(react.Component);

	var Cordelia = function (_React$Component) {
	    inherits(Cordelia, _React$Component);

	    function Cordelia(props) {
	        classCallCheck(this, Cordelia);

	        // Stores elements.
	        var _this = possibleConstructorReturn(this, (Cordelia.__proto__ || Object.getPrototypeOf(Cordelia)).call(this, props));

	        _this.getRgbaValue = function (color) {
	            _this.ref.rgbaColor.style.background = color;

	            var backgroundValue = window.getComputedStyle(_this.ref.rgbaColor, false, null).getPropertyValue('background-color'),
	                rgba = backgroundValue.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');

	            return {
	                r: parseInt(rgba[0]),
	                g: parseInt(rgba[1]),
	                b: parseInt(rgba[2]),
	                a: rgba[3] ? parseFloat(rgba[3]) : 1
	            };
	        };

	        _this.convertColor = function (rgba) {
	            var r = rgba.r,
	                g = rgba.g,
	                b = rgba.b,
	                a = rgba.a;


	            if (a == 1 || !_this.props.allowOpacity) {
	                if (_this.props.colorFormat == 'hex') {
	                    return {
	                        value: ColorConverter.rgbTohex({ r: r, g: g, b: b })
	                    };
	                } else if (_this.props.colorFormat == 'rgb') {
	                    return {
	                        value: 'rgb(' + r + ', ' + g + ', ' + b + ')', r: r, g: g, b: b
	                    };
	                } else if (_this.props.colorFormat == 'rgba') {
	                    return {
	                        value: 'rgba(' + r + ', ' + g + ', ' + b + ', 1)', r: r, g: g, b: b, a: 1
	                    };
	                } else {
	                    var _ColorConverter$rgbTo = ColorConverter.rgbTohsl({ r: r, g: g, b: b }),
	                        h = _ColorConverter$rgbTo.h,
	                        s = _ColorConverter$rgbTo.s,
	                        l = _ColorConverter$rgbTo.l;

	                    if (_this.props.colorFormat == 'hsl') {
	                        return {
	                            value: 'hsl(' + h + ', ' + s + '%, ' + l + '%)', h: h, s: s, l: l
	                        };
	                    } else {
	                        return {
	                            value: 'hsla(' + h + ', ' + s + '%, ' + l + '%, 1)', h: h, s: s, l: l, a: 1
	                        };
	                    }
	                }
	            } else {
	                if (_this.props.colorFormat != 'hsl' && _this.props.colorFormat != 'hsla') {
	                    return {
	                        value: 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')', r: r, g: g, b: b, a: a
	                    };
	                } else {
	                    var _ColorConverter$rgbTo2 = ColorConverter.rgbTohsl({ r: r, g: g, b: b }),
	                        h = _ColorConverter$rgbTo2.h,
	                        s = _ColorConverter$rgbTo2.s,
	                        l = _ColorConverter$rgbTo2.l;

	                    return {
	                        value: 'hsla(' + h + ', ' + s + '%, ' + l + '%, ' + a + ')', h: h, s: s, l: l, a: a
	                    };
	                }
	            }
	        };

	        _this.setColor = function (rgba) {
	            var pickerUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	            var color = _this.convertColor(rgba),
	                isDark = Helper.isDark(rgba);

	            if (_this.state.color != color.value) {
	                _this.color = color.value;
	                _this.rgbaColor = rgba;
	                _this.setState({
	                    color: color.value,
	                    rgbaColor: rgba,
	                    isDarkCurrent: isDark,
	                    pickerUpdate: pickerUpdate
	                });

	                if (pickerUpdate) {
	                    _this.props.onChanged();
	                }
	            }
	        };

	        _this.setDraggingColor = function (rgba, eventCall) {
	            var a = rgba.a,
	                color = _this.convertColor(rgba),
	                isDark = Helper.isDark(rgba);


	            if (_this.color != color.value) {
	                _this.color = color.value;
	                _this.rgbaColor = rgba;

	                if (!_this.props.embed) {
	                    _this.ref.wrapper.style.background = color.value;
	                }

	                if (_this.props.pickerStyle == 0) {
	                    if (isDark) {
	                        _this.ref.picker.majorPicker.dragger.classList.add('cdp-dark');
	                    } else {
	                        _this.ref.picker.majorPicker.dragger.classList.remove('cdp-dark');
	                    }
	                } else {
	                    if (isDark) {
	                        _this.ref.picker.minorPicker.dragger.classList.add('cdp-dark');
	                    } else {
	                        _this.ref.picker.minorPicker.dragger.classList.remove('cdp-dark');
	                    }
	                }

	                if (_this.props.allowOpacity) {
	                    if (isDark || a < 0.25) {
	                        _this.ref.picker.opacityPicker.dragger.classList.add('cdp-dark');
	                    } else {
	                        _this.ref.picker.opacityPicker.dragger.classList.remove('cdp-dark');
	                    }
	                }

	                if (_this.ref.currentColorConsole) {
	                    _this.ref.currentColorConsole.style.background = color.value;

	                    if (_this.ref.colorInput) {
	                        _this.ref.colorInput.value = color.value;

	                        if (isDark || a < 0.4) {
	                            _this.ref.colorInput.classList.add('cdp-dark');
	                        } else {
	                            _this.ref.colorInput.classList.remove('cdp-dark');
	                        }
	                    }

	                    if (_this.ref.clearColor) {
	                        if (isDark || a < 0.4) {
	                            _this.ref.clearColor.classList.add('cdp-dark');
	                        } else {
	                            _this.ref.clearColor.classList.remove('cdp-dark');
	                        }
	                    }
	                }

	                if (eventCall) {
	                    _this.props.onChanged();
	                }
	            }
	        };

	        _this.clearColor = function () {
	            if (_this.state.color) {
	                var rgbaColor = {
	                    r: 255,
	                    g: 255,
	                    b: 255,
	                    a: 1
	                };

	                _this.color = null;
	                _this.rgbaColor = rgbaColor;
	                _this.setState({
	                    color: null,
	                    rgbaColor: rgbaColor,
	                    isDarkCurrent: true,
	                    pickerUpdate: true
	                });
	                _this.props.onChanged();
	            }
	        };

	        _this.setInitialColorAsColor = function () {
	            if (_this.state.color != _this.state.initialColor) {
	                if (_this.state.initialColor) {
	                    var rgba = _this.getRgbaValue(_this.state.initialColor);
	                    _this.setColor(rgba);
	                } else {
	                    _this.clearColor();
	                }
	            }
	        };

	        _this.pickerUpdated = function () {
	            _this.setState({
	                pickerUpdate: false
	            });
	        };

	        _this.openPicker = function () {
	            if (!_this.state.pickerOpen && !_this.animationProcessing) {
	                _this.animationProcessing = true;

	                if (!_this.props.embed) {
	                    _this.ref.container.classList.add('cdp-visibility-hidden');

	                    var _this$setPosition = _this.setPosition(),
	                        pickerRight = _this$setPosition.pickerRight,
	                        pickerBottom = _this$setPosition.pickerBottom;

	                    _this.ref.container.classList.remove('cdp-visibility-hidden');

	                    if (!_this.props.embed) {
	                        window.addEventListener('resize', _this.setPosition, true);

	                        if (!_this.props.showButtons) {
	                            document.addEventListener('mousedown', _this.closePicker, true);
	                            document.addEventListener('touchstart', _this.closePicker, true);
	                        }
	                    }
	                }

	                _this.props.onOpen();

	                Helper.opacityAnimation(_this.ref.container, true).then(function () {
	                    _this.animationProcessing = false;
	                    _this.setState({
	                        pickerOpen: true,
	                        pickerRight: pickerRight,
	                        pickerBottom: pickerBottom
	                    });
	                });
	            }
	        };

	        _this.togglePalette = function () {
	            _this.setState({
	                paletteOpen: !_this.state.paletteOpen
	            });
	        };

	        _this.get = function () {
	            return _this.color == null ? { value: null } : _this.convertColor(_this.rgbaColor);
	        };

	        _this.set = function (newColor) {
	            if (!newColor && _this.props.allowClearColor) {
	                _this.clearColor();
	            } else if (!newColor) {
	                newColor = _this.state.color;
	            } else {
	                var rgba = _this.getRgbaValue(newColor);
	                _this.setColor(rgba);
	            }
	        };

	        _this.show = function () {
	            _this.openPicker();
	        };

	        _this.hide = function () {
	            if (_this.state.pickerOpen) {
	                _this.closePicker(null, true);
	            }
	        };

	        _this.save = function () {
	            _this.setState({
	                initialColor: _this.state.color,
	                isDarkInitial: _this.state.rgbaColor.a < 0.4 ? true : _this.state.isDarkCurrent
	            });

	            if (!_this.props.embed) {
	                _this.hide();
	            }

	            _this.props.onSave();
	        };

	        _this.cancel = function () {
	            _this.setInitialColorAsColor();

	            if (!_this.props.embed) {
	                _this.hide();
	            }

	            _this.props.onCancel();
	        };

	        _this.ref = {};

	        // size
	        _this.size = _this.props.size;
	        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && !_this.props.embed) {
	            _this.size = 'small';
	        }

	        // picker sizes
	        _this.majorPicker = {};
	        _this.minorPicker = {};
	        _this.opacityPicker = {};

	        if (_this.size == 'small') {
	            _this.majorPicker.width = 125;
	            _this.majorPicker.height = 125;
	            _this.minorPicker.width = 20;
	            _this.minorPicker.height = 125;
	        } else if (_this.size == 'medium') {
	            _this.majorPicker.width = 175;
	            _this.majorPicker.height = 175;
	            _this.minorPicker.width = 30;
	            _this.minorPicker.height = 175;
	        } else {
	            _this.majorPicker.width = 250;
	            _this.majorPicker.height = 250;
	            _this.minorPicker.width = 30;
	            _this.minorPicker.height = 250;
	        }
	        _this.majorPicker.subtractedValue = 9;
	        _this.minorPicker.subtractedValue = 7;

	        if (_this.props.allowOpacity) {
	            _this.opacityPicker.width = _this.minorPicker.width;
	            _this.opacityPicker.height = _this.minorPicker.height;
	            _this.opacityPicker.subtractedValue = _this.minorPicker.subtractedValue;
	        }

	        _this.state = {
	            initialized: false,
	            pickerUpdate: false,
	            pickerOpen: _this.props.embed,
	            paletteOpen: false
	        };

	        _this.closePicker = _this.closePicker.bind(_this);
	        _this.setPosition = _this.setPosition.bind(_this);
	        return _this;
	    }

	    createClass(Cordelia, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var color = this.props.color,
	                initialColor,
	                isDark,
	                rgbaColor = {}; //Holds RGBA values of the current color
	            rgbaColor.a = 1;

	            this.rgbColor = {}; //Holds the latest RGB value to calculate the new value when the picker position is changed on the palette
	            this.hslColor = {}; //Holds the latest HSL value to calculate the new value when the picker position is changed on the palette

	            if (!color && !this.props.allowClearColor) {
	                if (this.props.colorFormat == 'hex') {
	                    color = '#FF000';
	                } else if (this.props.colorFormat == 'rgb') {
	                    color = 'rgb(255,0,0)';
	                } else if (this.props.colorFormat == 'rgba') {
	                    color = 'rgba(255,0,0,1)';
	                } else if (this.props.colorFormat == 'hsl') {
	                    color = 'hsl(0,100%,50%)';
	                } else if (this.props.colorFormat == 'hsla') {
	                    color = 'hsla(0,100%,50%,1)';
	                }
	            }

	            if (color) {
	                rgbaColor = this.getRgbaValue(color);
	                color = this.convertColor(rgbaColor).value;
	                var hsl = ColorConverter.rgbTohsl(rgbaColor),
	                    rgb = this.getRgbaValue('hsl(' + hsl.h + ', 100%, 50%)');
	                isDark = Helper.isDark(rgbaColor);
	                this.rgbColor = rgb;
	                this.hslColor = hsl;
	            } else {
	                isDark = true;
	                this.rgbColor = {
	                    r: 255,
	                    g: 0,
	                    b: 0
	                };
	                this.hslColor = {
	                    h: 0,
	                    s: 0,
	                    l: 0
	                };
	            }
	            initialColor = color;

	            this.color = color;
	            this.rgbaColor = rgbaColor;
	            this.setState({
	                initialized: true,
	                color: color,
	                initialColor: initialColor,
	                rgbaColor: rgbaColor,
	                isDarkCurrent: isDark,
	                isDarkInitial: rgbaColor.a < 0.4 ? true : isDark
	            });
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            if (this.state.initialized && !prevState.initialized) {
	                this.ref.currentColorConsole = this.ref.container.querySelector('.cdp-current-color-console');
	                this.ref.colorInput = this.ref.container.querySelector('.cdp-current-color');
	                this.ref.clearColor = this.ref.container.querySelector('.cdp-clear-color');
	            }
	        }

	        /**
	         * Converts any color type to RGBA with getComputedStyle.
	         *
	         * @param {String} color
	         * @retuns {Object}
	         */


	        /**
	         * Converts and returns the current color according to the selected format that user chose.
	         *
	         * @param {Object} rgba
	         * @returns {Object}
	         */


	        /**
	         * Sets new color.
	         *
	         * @param {Object} rgba
	         * @param {Boolean} pickerUpdate
	         */


	        /**
	         * Changes the color without setting the current color during the dragging process.
	         *
	         * Notes :
	         * Dragging the picker on the palette changes the state constantly. React renders its components every time the state changes. This constant rendering causes freezing on MS Edge and IE.
	         * Therefore, I had to change the CSS manually without changing the state during dragging to prevent React to render components. The state is changed only once when the dragging is completed.
	         * So React renders the components when the dragging is completed.
	         *
	         * @param {Object} rgba
	         */


	        /**
	         * Clears the color.
	         */


	        /**
	         * Sets the initial color as current color.
	         */


	        /**
	         * It is called when picker is updated.
	         */


	        /**
	         * Shows the color picker.
	         */

	    }, {
	        key: 'closePicker',


	        /**
	         * Hides the picker if the click target is not the picker itself.
	         *
	         * @param {Object} event
	         * @param {Boolean} pass
	         */
	        value: function closePicker(event) {
	            var _this2 = this;

	            var pass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	            if ((event && !this.ref.container.contains(event.target) || pass) && !this.animationProcessing) {
	                this.animationProcessing = true;

	                if (!this.props.embed) {
	                    window.removeEventListener('resize', this.setPosition, true);

	                    if (!this.props.showButtons) {
	                        document.removeEventListener('mousedown', this.closePicker, true);
	                        document.removeEventListener('touchstart', this.closePicker, true);
	                    }
	                }

	                this.props.onClose();

	                Helper.opacityAnimation(this.ref.container, false).then(function () {
	                    _this2.animationProcessing = false;
	                    _this2.setState({
	                        pickerOpen: false
	                    });
	                });
	            }
	        }

	        /**
	         * Set the picker's position
	         */

	    }, {
	        key: 'setPosition',
	        value: function setPosition() {
	            var rect = this.ref.main.getBoundingClientRect(),
	                left = rect.left + window.pageXOffset,
	                top = rect.top + window.pageYOffset,
	                x = left + this.ref.container.offsetWidth + 10,
	                _x = left - this.ref.container.offsetWidth,
	                y = top + this.ref.container.offsetHeight + 40,
	                _y = top - (this.ref.container.offsetHeight + 10),
	                w = window.innerWidth + window.pageXOffset,
	                h = window.innerHeight + window.pageYOffset,
	                pickerRight = false,
	                pickerBottom = false;

	            if (x >= w && _x > 0) {
	                this.ref.container.classList.add('cdp-right');
	                pickerRight = true;
	            } else {
	                this.ref.container.classList.remove('cdp-right');
	            }

	            if (y >= h && _y > 0) {
	                this.ref.container.classList.add('cdp-bottom');
	                pickerBottom = true;
	            } else {
	                this.ref.container.classList.remove('cdp-bottom');
	            }

	            return {
	                pickerRight: pickerRight,
	                pickerBottom: pickerBottom
	            };
	        }

	        /**
	         * Toggles palette.
	         */


	        /**
	         * Returns the current color.
	         *
	         * @returns {String}
	         */


	        /**
	         * Sets a new color.
	         *
	         * @param {String} newColor
	         */


	        /**
	         * Shows the picker.
	         */


	        /**
	         * Hides the picker.
	         */


	        /**
	         * Sets current color as initial color and fires the save callback.
	         */


	        /**
	         * Sets initial color as current color and fires the cancel callback.
	         */

	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            if (!this.state.initialized) {
	                return react.createElement('div', { ref: function ref(elm) {
	                        return _this3.ref.rgbaColor = elm;
	                    }, key: false, className: 'cdp-hidden' });
	            }

	            var rgbaValue = react.createElement('div', { ref: function ref(elm) {
	                    return _this3.ref.rgbaColor = elm;
	                }, className: 'cdp-hidden' }),
	                pickerContainer = react.createElement(PickerContainer, { ref: function ref(elm) {
	                    return _this3.ref.picker = elm;
	                }, color: this.state.color, rgbaColor: this.state.rgbaColor, rgbColor: this.rgbColor, hslColor: this.hslColor, isDark: this.state.isDarkCurrent, pickerStyle: this.props.pickerStyle, showColorValue: this.props.showColorValue, allowOpacity: this.props.allowOpacity, majorPicker: this.majorPicker, minorPicker: this.minorPicker, opacityPicker: this.opacityPicker, setColor: this.setColor, setDraggingColor: this.setDraggingColor, getRgbaValue: this.getRgbaValue, pickerUpdate: this.state.pickerUpdate, pickerUpdated: this.pickerUpdated }),
	                consoleC = this.props.showColorValue || this.props.allowClearColor || this.props.showButtons ? react.createElement(Console, { color: this.state.color, initialColor: this.state.initialColor, isDarkCurrent: this.state.isDarkCurrent, isDarkInitial: this.state.isDarkInitial, rgbaColor: this.state.rgbaColor, showColorValue: this.props.showColorValue, allowClearColor: this.props.allowClearColor, showButtons: this.props.showButtons, setColor: this.setColor, clearColor: this.clearColor, setInitialColorAsColor: this.setInitialColorAsColor, getRgbaValue: this.getRgbaValue, save: this.save, cancel: this.cancel }) : '',
	                arrow = this.props.showPalette ? react.createElement(Arrow, { togglePalette: this.togglePalette }) : '',
	                palette = this.props.showPalette ? react.createElement(Palette, { color: this.state.color, rgbaColor: this.state.rgbaColor, paletteColors: this.props.paletteColors, allowPaletteAddColor: this.props.allowPaletteAddColor, getRgbaValue: this.getRgbaValue, setColor: this.setColor, paletteOpen: this.state.paletteOpen }) : '';

	            if (this.props.embed) {
	                return react.createElement(
	                    'div',
	                    { ref: function ref(elm) {
	                            return _this3.ref.container = elm;
	                        }, className: 'cdp-container', 'cdp-size': this.size },
	                    rgbaValue,
	                    pickerContainer,
	                    consoleC,
	                    arrow,
	                    palette
	                );
	            } else {
	                return react.createElement(
	                    'div',
	                    { ref: function ref(elm) {
	                            return _this3.ref.main = elm;
	                        }, className: 'cdp-wrapper cdp-background-type-opacity', onClick: this.openPicker },
	                    react.createElement(
	                        'div',
	                        { ref: function ref(elm) {
	                                return _this3.ref.wrapper = elm;
	                            }, className: 'cdp-wrapper-overlay', style: { background: this.state.color } },
	                        react.createElement(
	                            'div',
	                            { ref: function ref(elm) {
	                                    return _this3.ref.container = elm;
	                                }, className: "cdp-container " + (!this.state.pickerOpen ? 'cdp-hidden' : '') + ' ' + (this.state.pickerRight ? 'cdp-right' : '') + ' ' + (this.state.pickerBottom ? 'cdp-bottom' : ''), 'cdp-size': this.size },
	                            rgbaValue,
	                            pickerContainer,
	                            consoleC,
	                            arrow,
	                            palette
	                        )
	                    )
	                );
	            }
	        }
	    }]);
	    return Cordelia;
	}(react.Component);

	Cordelia.propTypes = {
	    size: propTypes.oneOf(['small', 'medium', 'large']),
	    embed: propTypes.bool,
	    pickerStyle: propTypes.oneOf([0, 1]),
	    allowOpacity: propTypes.bool,
	    allowClearColor: propTypes.bool,
	    showColorValue: propTypes.bool,
	    colorFormat: propTypes.oneOf(['hex', 'rgb', 'rgba', 'hsl', 'hsla']),
	    color: propTypes.string,
	    showButtons: propTypes.bool,
	    showPalette: propTypes.bool,
	    paletteColors: propTypes.array,
	    allowPaletteAddColor: propTypes.bool,
	    onOpen: propTypes.func,
	    onClose: propTypes.func,
	    onSave: propTypes.func,
	    onCancel: propTypes.func,
	    onChanged: propTypes.func
	};

	Cordelia.defaultProps = {
	    size: 'medium',
	    embed: true,
	    pickerStyle: 0,
	    allowOpacity: true,
	    allowClearColor: false,
	    showColorValue: true,
	    colorFormat: 'hex',
	    color: '#FF0000',
	    showButtons: true,
	    showPalette: true,
	    paletteColors: ['#FFFFB5', '#FBBD87', '#F45151', '#7AEA89', '#91C8E7', '#8EB4E6', '#B0A7F1'],
	    allowPaletteAddColor: true,
	    onOpen: function onOpen() {},
	    onClose: function onClose() {},
	    onSave: function onSave() {},
	    onCancel: function onCancel() {},
	    onChanged: function onChanged() {}
	};

	return Cordelia;

})));
