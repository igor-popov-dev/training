(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReact_production_min;
function requireReact_production_min() {
  if (hasRequiredReact_production_min) return react_production_min;
  hasRequiredReact_production_min = 1;
  var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
  function A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = z && a[z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var B = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, D = {};
  function E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  }
  E.prototype.isReactComponent = {};
  E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function F() {
  }
  F.prototype = E.prototype;
  function G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  }
  var H = G.prototype = new F();
  H.constructor = G;
  C(H, E.prototype);
  H.isPureReactComponent = true;
  var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = { current: null }, L = { key: true, ref: true, __self: true, __source: true };
  function M(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
      c.children = f;
    }
    if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
    return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
  }
  function N(a, b) {
    return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === l;
  }
  function escape(a) {
    var b = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(a2) {
      return b[a2];
    });
  }
  var P = /\/+/g;
  function Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
  }
  function R(a, b, e, d, c) {
    var k = typeof a;
    if ("undefined" === k || "boolean" === k) a = null;
    var h = false;
    if (null === a) h = true;
    else switch (k) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l:
          case n:
            h = true;
        }
    }
    if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
      return a2;
    })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if (I(a)) for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f = d + Q(k, g);
      h += R(k, b, e, f, c);
    }
    else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
    else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
  }
  function S(a, b, e) {
    if (null == a) return a;
    var d = [], c = 0;
    R(a, d, "", "", function(a2) {
      return b.call(e, a2, c++);
    });
    return d;
  }
  function T(a) {
    if (-1 === a._status) {
      var b = a._result;
      b = b();
      b.then(function(b2) {
        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
      }, function(b2) {
        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
      });
      -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
  }
  var U = { current: null }, V = { transition: null }, W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  react_production_min.Children = { map: S, forEach: function(a, b, e) {
    S(a, function() {
      b.apply(this, arguments);
    }, e);
  }, count: function(a) {
    var b = 0;
    S(a, function() {
      b++;
    });
    return b;
  }, toArray: function(a) {
    return S(a, function(a2) {
      return a2;
    }) || [];
  }, only: function(a) {
    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } };
  react_production_min.Component = E;
  react_production_min.Fragment = p;
  react_production_min.Profiler = r;
  react_production_min.PureComponent = G;
  react_production_min.StrictMode = q;
  react_production_min.Suspense = w;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
  react_production_min.act = X;
  react_production_min.cloneElement = function(a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (null != b) {
      void 0 !== b.ref && (k = b.ref, h = K.current);
      void 0 !== b.key && (c = "" + b.key);
      if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
      for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
      g = Array(f);
      for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
      d.children = g;
    }
    return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
  };
  react_production_min.createContext = function(a) {
    a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a.Provider = { $$typeof: t, _context: a };
    return a.Consumer = a;
  };
  react_production_min.createElement = M;
  react_production_min.createFactory = function(a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  };
  react_production_min.createRef = function() {
    return { current: null };
  };
  react_production_min.forwardRef = function(a) {
    return { $$typeof: v, render: a };
  };
  react_production_min.isValidElement = O;
  react_production_min.lazy = function(a) {
    return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
  };
  react_production_min.memo = function(a, b) {
    return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
  };
  react_production_min.startTransition = function(a) {
    var b = V.transition;
    V.transition = {};
    try {
      a();
    } finally {
      V.transition = b;
    }
  };
  react_production_min.unstable_act = X;
  react_production_min.useCallback = function(a, b) {
    return U.current.useCallback(a, b);
  };
  react_production_min.useContext = function(a) {
    return U.current.useContext(a);
  };
  react_production_min.useDebugValue = function() {
  };
  react_production_min.useDeferredValue = function(a) {
    return U.current.useDeferredValue(a);
  };
  react_production_min.useEffect = function(a, b) {
    return U.current.useEffect(a, b);
  };
  react_production_min.useId = function() {
    return U.current.useId();
  };
  react_production_min.useImperativeHandle = function(a, b, e) {
    return U.current.useImperativeHandle(a, b, e);
  };
  react_production_min.useInsertionEffect = function(a, b) {
    return U.current.useInsertionEffect(a, b);
  };
  react_production_min.useLayoutEffect = function(a, b) {
    return U.current.useLayoutEffect(a, b);
  };
  react_production_min.useMemo = function(a, b) {
    return U.current.useMemo(a, b);
  };
  react_production_min.useReducer = function(a, b, e) {
    return U.current.useReducer(a, b, e);
  };
  react_production_min.useRef = function(a) {
    return U.current.useRef(a);
  };
  react_production_min.useState = function(a) {
    return U.current.useState(a);
  };
  react_production_min.useSyncExternalStore = function(a, b, e) {
    return U.current.useSyncExternalStore(a, b, e);
  };
  react_production_min.useTransition = function() {
    return U.current.useTransition();
  };
  react_production_min.version = "18.3.1";
  return react_production_min;
}
var hasRequiredReact;
function requireReact() {
  if (hasRequiredReact) return react.exports;
  hasRequiredReact = 1;
  {
    react.exports = requireReact_production_min();
  }
  return react.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var f = requireReact(), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  return reactJsxRuntime_production_min;
}
var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;
  {
    jsxRuntime.exports = requireReactJsxRuntime_production_min();
  }
  return jsxRuntime.exports;
}
var jsxRuntimeExports = requireJsxRuntime();
var dist$1 = {};
var sdk = {};
var telegramWebApps = {};
var hasRequiredTelegramWebApps;
function requireTelegramWebApps() {
  if (hasRequiredTelegramWebApps) return telegramWebApps;
  hasRequiredTelegramWebApps = 1;
  (function() {
    var eventHandlers = {};
    var locationHash = "";
    try {
      locationHash = location.hash.toString();
    } catch (e) {
    }
    var initParams = urlParseHashParams(locationHash);
    var storedParams = sessionStorageGet("initParams");
    if (storedParams) {
      for (var key in storedParams) {
        if (typeof initParams[key] === "undefined") {
          initParams[key] = storedParams[key];
        }
      }
    }
    sessionStorageSet("initParams", initParams);
    var isIframe = false, iFrameStyle;
    try {
      isIframe = window.parent != null && window != window.parent;
      if (isIframe) {
        window.addEventListener("message", function(event) {
          if (event.source !== window.parent)
            return;
          try {
            var dataParsed = JSON.parse(event.data);
          } catch (e) {
            return;
          }
          if (!dataParsed || !dataParsed.eventType) {
            return;
          }
          if (dataParsed.eventType == "set_custom_style") {
            if (event.origin === "https://web.telegram.org") {
              iFrameStyle.innerHTML = dataParsed.eventData;
            }
          } else if (dataParsed.eventType == "reload_iframe") {
            try {
              window.parent.postMessage(JSON.stringify({ eventType: "iframe_will_reload" }), "*");
            } catch (e) {
            }
            location.reload();
          } else {
            receiveEvent(dataParsed.eventType, dataParsed.eventData);
          }
        });
        iFrameStyle = document.createElement("style");
        document.head.appendChild(iFrameStyle);
        try {
          window.parent.postMessage(JSON.stringify({ eventType: "iframe_ready", eventData: { reload_supported: true } }), "*");
        } catch (e) {
        }
      }
    } catch (e) {
    }
    function urlSafeDecode(urlencoded) {
      try {
        urlencoded = urlencoded.replace(/\+/g, "%20");
        return decodeURIComponent(urlencoded);
      } catch (e) {
        return urlencoded;
      }
    }
    function urlParseHashParams(locationHash2) {
      locationHash2 = locationHash2.replace(/^#/, "");
      var params = {};
      if (!locationHash2.length) {
        return params;
      }
      if (locationHash2.indexOf("=") < 0 && locationHash2.indexOf("?") < 0) {
        params._path = urlSafeDecode(locationHash2);
        return params;
      }
      var qIndex = locationHash2.indexOf("?");
      if (qIndex >= 0) {
        var pathParam = locationHash2.substr(0, qIndex);
        params._path = urlSafeDecode(pathParam);
        locationHash2 = locationHash2.substr(qIndex + 1);
      }
      var query_params = urlParseQueryString(locationHash2);
      for (var k in query_params) {
        params[k] = query_params[k];
      }
      return params;
    }
    function urlParseQueryString(queryString) {
      var params = {};
      if (!queryString.length) {
        return params;
      }
      var queryStringParams = queryString.split("&");
      var i, param, paramName, paramValue;
      for (i = 0; i < queryStringParams.length; i++) {
        param = queryStringParams[i].split("=");
        paramName = urlSafeDecode(param[0]);
        paramValue = param[1] == null ? null : urlSafeDecode(param[1]);
        params[paramName] = paramValue;
      }
      return params;
    }
    function urlAppendHashParams(url2, addHash) {
      var ind = url2.indexOf("#");
      if (ind < 0) {
        return url2 + "#" + addHash;
      }
      var curHash = url2.substr(ind + 1);
      if (curHash.indexOf("=") >= 0 || curHash.indexOf("?") >= 0) {
        return url2 + "&" + addHash;
      }
      if (curHash.length > 0) {
        return url2 + "?" + addHash;
      }
      return url2 + addHash;
    }
    function postEvent(eventType, callback, eventData) {
      if (!callback) {
        callback = function() {
        };
      }
      if (eventData === void 0) {
        eventData = "";
      }
      console.log("[Telegram.WebView] > postEvent", eventType, eventData);
      if (window.TelegramWebviewProxy !== void 0) {
        TelegramWebviewProxy.postEvent(eventType, JSON.stringify(eventData));
        callback();
      } else if (window.external && "notify" in window.external) {
        window.external.notify(JSON.stringify({ eventType, eventData }));
        callback();
      } else if (isIframe) {
        try {
          var trustedTarget = "https://web.telegram.org";
          trustedTarget = "*";
          window.parent.postMessage(JSON.stringify({ eventType, eventData }), trustedTarget);
          callback();
        } catch (e) {
          callback(e);
        }
      } else {
        callback({ notAvailable: true });
      }
    }
    function receiveEvent(eventType, eventData) {
      console.log("[Telegram.WebView] < receiveEvent", eventType, eventData);
      callEventCallbacks(eventType, function(callback) {
        callback(eventType, eventData);
      });
    }
    function callEventCallbacks(eventType, func) {
      var curEventHandlers = eventHandlers[eventType];
      if (curEventHandlers === void 0 || !curEventHandlers.length) {
        return;
      }
      for (var i = 0; i < curEventHandlers.length; i++) {
        try {
          func(curEventHandlers[i]);
        } catch (e) {
        }
      }
    }
    function onEvent(eventType, callback) {
      if (eventHandlers[eventType] === void 0) {
        eventHandlers[eventType] = [];
      }
      var index = eventHandlers[eventType].indexOf(callback);
      if (index === -1) {
        eventHandlers[eventType].push(callback);
      }
    }
    function offEvent(eventType, callback) {
      if (eventHandlers[eventType] === void 0) {
        return;
      }
      var index = eventHandlers[eventType].indexOf(callback);
      if (index === -1) {
        return;
      }
      eventHandlers[eventType].splice(index, 1);
    }
    function sessionStorageSet(key2, value) {
      try {
        window.sessionStorage.setItem("__telegram__" + key2, JSON.stringify(value));
        return true;
      } catch (e) {
      }
      return false;
    }
    function sessionStorageGet(key2) {
      try {
        return JSON.parse(window.sessionStorage.getItem("__telegram__" + key2));
      } catch (e) {
      }
      return null;
    }
    if (!window.Telegram) {
      window.Telegram = {};
    }
    window.Telegram.WebView = {
      initParams,
      isIframe,
      onEvent,
      offEvent,
      postEvent,
      receiveEvent,
      callEventCallbacks
    };
    window.Telegram.Utils = {
      urlSafeDecode,
      urlParseQueryString,
      urlParseHashParams,
      urlAppendHashParams,
      sessionStorageSet,
      sessionStorageGet
    };
    window.TelegramGameProxy_receiveEvent = receiveEvent;
    window.TelegramGameProxy = {
      receiveEvent
    };
  })();
  (function() {
    var Utils = window.Telegram.Utils;
    var WebView = window.Telegram.WebView;
    var initParams = WebView.initParams;
    var isIframe = WebView.isIframe;
    var WebApp2 = {};
    var webAppInitData = "", webAppInitDataUnsafe = {};
    var themeParams = {}, colorScheme = "light";
    var webAppVersion = "6.0";
    var webAppPlatform = "unknown";
    var webAppIsActive = true;
    var webAppIsFullscreen = false;
    var webAppIsOrientationLocked = false;
    var webAppBackgroundColor = "bg_color";
    var webAppHeaderColorKey = "bg_color";
    var webAppHeaderColor = null;
    if (initParams.tgWebAppData && initParams.tgWebAppData.length) {
      webAppInitData = initParams.tgWebAppData;
      webAppInitDataUnsafe = Utils.urlParseQueryString(webAppInitData);
      for (var key in webAppInitDataUnsafe) {
        var val = webAppInitDataUnsafe[key];
        try {
          if (val.substr(0, 1) == "{" && val.substr(-1) == "}" || val.substr(0, 1) == "[" && val.substr(-1) == "]") {
            webAppInitDataUnsafe[key] = JSON.parse(val);
          }
        } catch (e) {
        }
      }
    }
    var stored_theme_params = Utils.sessionStorageGet("themeParams");
    if (initParams.tgWebAppThemeParams && initParams.tgWebAppThemeParams.length) {
      var themeParamsRaw = initParams.tgWebAppThemeParams;
      try {
        var theme_params = JSON.parse(themeParamsRaw);
        if (theme_params) {
          setThemeParams(theme_params);
        }
      } catch (e) {
      }
    }
    if (stored_theme_params) {
      setThemeParams(stored_theme_params);
    }
    var stored_def_colors = Utils.sessionStorageGet("defaultColors");
    if (initParams.tgWebAppDefaultColors && initParams.tgWebAppDefaultColors.length) {
      var defColorsRaw = initParams.tgWebAppDefaultColors;
      try {
        var def_colors = JSON.parse(defColorsRaw);
        if (def_colors) {
          setDefaultColors(def_colors);
        }
      } catch (e) {
      }
    }
    if (stored_def_colors) {
      setDefaultColors(stored_def_colors);
    }
    if (initParams.tgWebAppVersion) {
      webAppVersion = initParams.tgWebAppVersion;
    }
    if (initParams.tgWebAppPlatform) {
      webAppPlatform = initParams.tgWebAppPlatform;
    }
    var stored_fullscreen = Utils.sessionStorageGet("isFullscreen");
    if (initParams.tgWebAppFullscreen) {
      setFullscreen(true);
    }
    if (stored_fullscreen) {
      setFullscreen(stored_fullscreen == "yes");
    }
    var stored_orientation_lock = Utils.sessionStorageGet("isOrientationLocked");
    if (stored_orientation_lock) {
      setOrientationLock(stored_orientation_lock == "yes");
    }
    function onThemeChanged(eventType, eventData) {
      if (eventData.theme_params) {
        setThemeParams(eventData.theme_params);
        window.Telegram.WebApp.MainButton.setParams({});
        window.Telegram.WebApp.SecondaryButton.setParams({});
        updateHeaderColor();
        updateBackgroundColor();
        updateBottomBarColor();
        receiveWebViewEvent("themeChanged");
      }
    }
    var lastWindowHeight = window.innerHeight;
    function onViewportChanged(eventType, eventData) {
      if (eventData.height) {
        window.removeEventListener("resize", onWindowResize);
        setViewportHeight(eventData);
      }
    }
    function onWindowResize(e) {
      if (lastWindowHeight != window.innerHeight) {
        lastWindowHeight = window.innerHeight;
        receiveWebViewEvent("viewportChanged", {
          isStateStable: true
        });
      }
    }
    function onSafeAreaChanged(eventType, eventData) {
      if (eventData) {
        setSafeAreaInset(eventData);
      }
    }
    function onContentSafeAreaChanged(eventType, eventData) {
      if (eventData) {
        setContentSafeAreaInset(eventData);
      }
    }
    function onVisibilityChanged(eventType, eventData) {
      if (eventData.is_visible) {
        webAppIsActive = true;
        receiveWebViewEvent("activated");
      } else {
        webAppIsActive = false;
        receiveWebViewEvent("deactivated");
      }
    }
    function linkHandler(e) {
      if (e.metaKey || e.ctrlKey)
        return;
      var el = e.target;
      while (el.tagName != "A" && el.parentNode) {
        el = el.parentNode;
      }
      if (el.tagName == "A" && el.target != "_blank" && (el.protocol == "http:" || el.protocol == "https:") && el.hostname == "t.me") {
        WebApp2.openTgLink(el.href);
        e.preventDefault();
      }
    }
    function strTrim(str) {
      return str.toString().replace(/^\s+|\s+$/g, "");
    }
    function receiveWebViewEvent(eventType) {
      var args = Array.prototype.slice.call(arguments);
      eventType = args.shift();
      WebView.callEventCallbacks("webview:" + eventType, function(callback) {
        callback.apply(WebApp2, args);
      });
    }
    function onWebViewEvent(eventType, callback) {
      WebView.onEvent("webview:" + eventType, callback);
    }
    function offWebViewEvent(eventType, callback) {
      WebView.offEvent("webview:" + eventType, callback);
    }
    function setCssProperty(name, value) {
      var root = document.documentElement;
      if (root && root.style && root.style.setProperty) {
        root.style.setProperty("--tg-" + name, value);
      }
    }
    function setFullscreen(is_fullscreen) {
      webAppIsFullscreen = !!is_fullscreen;
      Utils.sessionStorageSet("isFullscreen", webAppIsFullscreen ? "yes" : "no");
    }
    function setOrientationLock(is_locked) {
      webAppIsOrientationLocked = !!is_locked;
      Utils.sessionStorageSet("isOrientationLocked", webAppIsOrientationLocked ? "yes" : "no");
    }
    function setThemeParams(theme_params2) {
      if (theme_params2.bg_color == "#1c1c1d" && theme_params2.bg_color == theme_params2.secondary_bg_color) {
        theme_params2.secondary_bg_color = "#2c2c2e";
      }
      var color;
      for (var key2 in theme_params2) {
        if (color = parseColorToHex(theme_params2[key2])) {
          themeParams[key2] = color;
          if (key2 == "bg_color") {
            colorScheme = isColorDark(color) ? "dark" : "light";
            setCssProperty("color-scheme", colorScheme);
          }
          key2 = "theme-" + key2.split("_").join("-");
          setCssProperty(key2, color);
        }
      }
      Utils.sessionStorageSet("themeParams", themeParams);
    }
    function setDefaultColors(def_colors2) {
      if (colorScheme == "dark") {
        if (def_colors2.bg_dark_color) {
          webAppBackgroundColor = def_colors2.bg_dark_color;
        }
        if (def_colors2.header_dark_color) {
          webAppHeaderColorKey = null;
          webAppHeaderColor = def_colors2.header_dark_color;
        }
      } else {
        if (def_colors2.bg_color) {
          webAppBackgroundColor = def_colors2.bg_color;
        }
        if (def_colors2.header_color) {
          webAppHeaderColorKey = null;
          webAppHeaderColor = def_colors2.header_color;
        }
      }
      Utils.sessionStorageSet("defaultColors", def_colors2);
    }
    var webAppCallbacks = {};
    function generateCallbackId(len) {
      var tries = 100;
      while (--tries) {
        var id = "", chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", chars_len = chars.length;
        for (var i = 0; i < len; i++) {
          id += chars[Math.floor(Math.random() * chars_len)];
        }
        if (!webAppCallbacks[id]) {
          webAppCallbacks[id] = {};
          return id;
        }
      }
      throw Error("WebAppCallbackIdGenerateFailed");
    }
    var viewportHeight = false, viewportStableHeight = false, isExpanded = true;
    function setViewportHeight(data) {
      if (typeof data !== "undefined") {
        isExpanded = !!data.is_expanded;
        viewportHeight = data.height;
        if (data.is_state_stable) {
          viewportStableHeight = data.height;
        }
        receiveWebViewEvent("viewportChanged", {
          isStateStable: !!data.is_state_stable
        });
      }
      var height, stable_height;
      if (viewportHeight !== false) {
        height = viewportHeight - bottomBarHeight + "px";
      } else {
        height = bottomBarHeight ? "calc(100vh - " + bottomBarHeight + "px)" : "100vh";
      }
      if (viewportStableHeight !== false) {
        stable_height = viewportStableHeight - bottomBarHeight + "px";
      } else {
        stable_height = bottomBarHeight ? "calc(100vh - " + bottomBarHeight + "px)" : "100vh";
      }
      setCssProperty("viewport-height", height);
      setCssProperty("viewport-stable-height", stable_height);
    }
    var safeAreaInset = { top: 0, bottom: 0, left: 0, right: 0 };
    function setSafeAreaInset(data) {
      if (typeof data !== "undefined") {
        if (typeof data.top !== "undefined") {
          safeAreaInset.top = data.top;
        }
        if (typeof data.bottom !== "undefined") {
          safeAreaInset.bottom = data.bottom;
        }
        if (typeof data.left !== "undefined") {
          safeAreaInset.left = data.left;
        }
        if (typeof data.right !== "undefined") {
          safeAreaInset.right = data.right;
        }
        receiveWebViewEvent("safeAreaChanged");
      }
      setCssProperty("safe-area-inset-top", safeAreaInset.top + "px");
      setCssProperty("safe-area-inset-bottom", safeAreaInset.bottom + "px");
      setCssProperty("safe-area-inset-left", safeAreaInset.left + "px");
      setCssProperty("safe-area-inset-right", safeAreaInset.right + "px");
    }
    var contentSafeAreaInset = { top: 0, bottom: 0, left: 0, right: 0 };
    function setContentSafeAreaInset(data) {
      if (typeof data !== "undefined") {
        if (typeof data.top !== "undefined") {
          contentSafeAreaInset.top = data.top;
        }
        if (typeof data.bottom !== "undefined") {
          contentSafeAreaInset.bottom = data.bottom;
        }
        if (typeof data.left !== "undefined") {
          contentSafeAreaInset.left = data.left;
        }
        if (typeof data.right !== "undefined") {
          contentSafeAreaInset.right = data.right;
        }
        receiveWebViewEvent("contentSafeAreaChanged");
      }
      setCssProperty("content-safe-area-inset-top", contentSafeAreaInset.top + "px");
      setCssProperty("content-safe-area-inset-bottom", contentSafeAreaInset.bottom + "px");
      setCssProperty("content-safe-area-inset-left", contentSafeAreaInset.left + "px");
      setCssProperty("content-safe-area-inset-right", contentSafeAreaInset.right + "px");
    }
    var isClosingConfirmationEnabled = false;
    function setClosingConfirmation(need_confirmation) {
      if (!versionAtLeast("6.2")) {
        console.warn("[Telegram.WebApp] Closing confirmation is not supported in version " + webAppVersion);
        return;
      }
      isClosingConfirmationEnabled = !!need_confirmation;
      WebView.postEvent("web_app_setup_closing_behavior", false, { need_confirmation: isClosingConfirmationEnabled });
    }
    var isVerticalSwipesEnabled = true;
    function toggleVerticalSwipes(enable_swipes) {
      if (!versionAtLeast("7.7")) {
        console.warn("[Telegram.WebApp] Changing swipes behavior is not supported in version " + webAppVersion);
        return;
      }
      isVerticalSwipesEnabled = !!enable_swipes;
      WebView.postEvent("web_app_setup_swipe_behavior", false, { allow_vertical_swipe: isVerticalSwipesEnabled });
    }
    function onFullscreenChanged(eventType, eventData) {
      setFullscreen(eventData.is_fullscreen);
      receiveWebViewEvent("fullscreenChanged");
    }
    function onFullscreenFailed(eventType, eventData) {
      if (eventData.error == "ALREADY_FULLSCREEN" && !webAppIsFullscreen) {
        setFullscreen(true);
      }
      receiveWebViewEvent("fullscreenFailed", {
        error: eventData.error
      });
    }
    function toggleOrientationLock(locked) {
      if (!versionAtLeast("8.0")) {
        console.warn("[Telegram.WebApp] Orientation locking is not supported in version " + webAppVersion);
        return;
      }
      setOrientationLock(locked);
      WebView.postEvent("web_app_toggle_orientation_lock", false, { locked: webAppIsOrientationLocked });
    }
    var homeScreenCallbacks = [];
    function onHomeScreenAdded(eventType, eventData) {
      receiveWebViewEvent("homeScreenAdded");
    }
    function onHomeScreenChecked(eventType, eventData) {
      var status = eventData.status || "unknown";
      if (homeScreenCallbacks.length > 0) {
        for (var i = 0; i < homeScreenCallbacks.length; i++) {
          var callback = homeScreenCallbacks[i];
          callback(status);
        }
        homeScreenCallbacks = [];
      }
      receiveWebViewEvent("homeScreenChecked", {
        status
      });
    }
    var WebAppShareMessageOpened = false;
    function onPreparedMessageSent(eventType, eventData) {
      if (WebAppShareMessageOpened) {
        var requestData = WebAppShareMessageOpened;
        WebAppShareMessageOpened = false;
        if (requestData.callback) {
          requestData.callback(true);
        }
        receiveWebViewEvent("shareMessageSent");
      }
    }
    function onPreparedMessageFailed(eventType, eventData) {
      if (WebAppShareMessageOpened) {
        var requestData = WebAppShareMessageOpened;
        WebAppShareMessageOpened = false;
        if (requestData.callback) {
          requestData.callback(false);
        }
        receiveWebViewEvent("shareMessageFailed", {
          error: eventData.error
        });
      }
    }
    var WebAppEmojiStatusRequested = false;
    function onEmojiStatusSet(eventType, eventData) {
      if (WebAppEmojiStatusRequested) {
        var requestData = WebAppEmojiStatusRequested;
        WebAppEmojiStatusRequested = false;
        if (requestData.callback) {
          requestData.callback(true);
        }
        receiveWebViewEvent("emojiStatusSet");
      }
    }
    function onEmojiStatusFailed(eventType, eventData) {
      if (WebAppEmojiStatusRequested) {
        var requestData = WebAppEmojiStatusRequested;
        WebAppEmojiStatusRequested = false;
        if (requestData.callback) {
          requestData.callback(false);
        }
        receiveWebViewEvent("emojiStatusFailed", {
          error: eventData.error
        });
      }
    }
    var WebAppEmojiStatusAccessRequested = false;
    function onEmojiStatusAccessRequested(eventType, eventData) {
      if (WebAppEmojiStatusAccessRequested) {
        var requestData = WebAppEmojiStatusAccessRequested;
        WebAppEmojiStatusAccessRequested = false;
        if (requestData.callback) {
          requestData.callback(eventData.status == "allowed");
        }
        receiveWebViewEvent("emojiStatusAccessRequested", {
          status: eventData.status
        });
      }
    }
    var webAppPopupOpened = false;
    function onPopupClosed(eventType, eventData) {
      if (webAppPopupOpened) {
        var popupData = webAppPopupOpened;
        webAppPopupOpened = false;
        var button_id = null;
        if (typeof eventData.button_id !== "undefined") {
          button_id = eventData.button_id;
        }
        if (popupData.callback) {
          popupData.callback(button_id);
        }
        receiveWebViewEvent("popupClosed", {
          button_id
        });
      }
    }
    function getHeaderColor() {
      if (webAppHeaderColorKey == "secondary_bg_color") {
        return themeParams.secondary_bg_color;
      } else if (webAppHeaderColorKey == "bg_color") {
        return themeParams.bg_color;
      }
      return webAppHeaderColor;
    }
    function setHeaderColor(color) {
      if (!versionAtLeast("6.1")) {
        console.warn("[Telegram.WebApp] Header color is not supported in version " + webAppVersion);
        return;
      }
      if (!versionAtLeast("6.9")) {
        if (themeParams.bg_color && themeParams.bg_color == color) {
          color = "bg_color";
        } else if (themeParams.secondary_bg_color && themeParams.secondary_bg_color == color) {
          color = "secondary_bg_color";
        }
      }
      var head_color = null, color_key = null;
      if (color == "bg_color" || color == "secondary_bg_color") {
        color_key = color;
      } else if (versionAtLeast("6.9")) {
        head_color = parseColorToHex(color);
        if (!head_color) {
          console.error("[Telegram.WebApp] Header color format is invalid", color);
          throw Error("WebAppHeaderColorInvalid");
        }
      }
      if (!versionAtLeast("6.9") && color_key != "bg_color" && color_key != "secondary_bg_color") {
        console.error("[Telegram.WebApp] Header color key should be one of Telegram.WebApp.themeParams.bg_color, Telegram.WebApp.themeParams.secondary_bg_color, 'bg_color', 'secondary_bg_color'", color);
        throw Error("WebAppHeaderColorKeyInvalid");
      }
      webAppHeaderColorKey = color_key;
      webAppHeaderColor = head_color;
      updateHeaderColor();
    }
    var appHeaderColorKey = null, appHeaderColor = null;
    function updateHeaderColor() {
      if (appHeaderColorKey != webAppHeaderColorKey || appHeaderColor != webAppHeaderColor) {
        appHeaderColorKey = webAppHeaderColorKey;
        appHeaderColor = webAppHeaderColor;
        if (appHeaderColor) {
          WebView.postEvent("web_app_set_header_color", false, { color: webAppHeaderColor });
        } else {
          WebView.postEvent("web_app_set_header_color", false, { color_key: webAppHeaderColorKey });
        }
      }
    }
    function getBackgroundColor() {
      if (webAppBackgroundColor == "secondary_bg_color") {
        return themeParams.secondary_bg_color;
      } else if (webAppBackgroundColor == "bg_color") {
        return themeParams.bg_color;
      }
      return webAppBackgroundColor;
    }
    function setBackgroundColor(color) {
      if (!versionAtLeast("6.1")) {
        console.warn("[Telegram.WebApp] Background color is not supported in version " + webAppVersion);
        return;
      }
      var bg_color;
      if (color == "bg_color" || color == "secondary_bg_color") {
        bg_color = color;
      } else {
        bg_color = parseColorToHex(color);
        if (!bg_color) {
          console.error("[Telegram.WebApp] Background color format is invalid", color);
          throw Error("WebAppBackgroundColorInvalid");
        }
      }
      webAppBackgroundColor = bg_color;
      updateBackgroundColor();
    }
    var appBackgroundColor = null;
    function updateBackgroundColor() {
      var color = getBackgroundColor();
      if (appBackgroundColor != color) {
        appBackgroundColor = color;
        WebView.postEvent("web_app_set_background_color", false, { color });
      }
    }
    var bottomBarColor = "bottom_bar_bg_color";
    function getBottomBarColor() {
      if (bottomBarColor == "bottom_bar_bg_color") {
        return themeParams.bottom_bar_bg_color || themeParams.secondary_bg_color || "#ffffff";
      } else if (bottomBarColor == "secondary_bg_color") {
        return themeParams.secondary_bg_color;
      } else if (bottomBarColor == "bg_color") {
        return themeParams.bg_color;
      }
      return bottomBarColor;
    }
    function setBottomBarColor(color) {
      if (!versionAtLeast("7.10")) {
        console.warn("[Telegram.WebApp] Bottom bar color is not supported in version " + webAppVersion);
        return;
      }
      var bg_color;
      if (color == "bg_color" || color == "secondary_bg_color" || color == "bottom_bar_bg_color") {
        bg_color = color;
      } else {
        bg_color = parseColorToHex(color);
        if (!bg_color) {
          console.error("[Telegram.WebApp] Bottom bar color format is invalid", color);
          throw Error("WebAppBottomBarColorInvalid");
        }
      }
      bottomBarColor = bg_color;
      updateBottomBarColor();
      window.Telegram.WebApp.SecondaryButton.setParams({});
    }
    var appBottomBarColor = null;
    function updateBottomBarColor() {
      var color = getBottomBarColor();
      if (appBottomBarColor != color) {
        appBottomBarColor = color;
        WebView.postEvent("web_app_set_bottom_bar_color", false, { color });
      }
      if (initParams.tgWebAppDebug) {
        updateDebugBottomBar();
      }
    }
    function parseColorToHex(color) {
      color += "";
      var match;
      if (match = /^\s*#([0-9a-f]{6})\s*$/i.exec(color)) {
        return "#" + match[1].toLowerCase();
      } else if (match = /^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(color)) {
        return ("#" + match[1] + match[1] + match[2] + match[2] + match[3] + match[3]).toLowerCase();
      } else if (match = /^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(color)) {
        var r = parseInt(match[1]), g = parseInt(match[2]), b = parseInt(match[3]);
        r = (r < 16 ? "0" : "") + r.toString(16);
        g = (g < 16 ? "0" : "") + g.toString(16);
        b = (b < 16 ? "0" : "") + b.toString(16);
        return "#" + r + g + b;
      }
      return false;
    }
    function isColorDark(rgb) {
      rgb = rgb.replace(/[\s#]/g, "");
      if (rgb.length == 3) {
        rgb = rgb[0] + rgb[0] + rgb[1] + rgb[1] + rgb[2] + rgb[2];
      }
      var r = parseInt(rgb.substr(0, 2), 16);
      var g = parseInt(rgb.substr(2, 2), 16);
      var b = parseInt(rgb.substr(4, 2), 16);
      var hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
      return hsp < 120;
    }
    function versionCompare(v1, v2) {
      if (typeof v1 !== "string")
        v1 = "";
      if (typeof v2 !== "string")
        v2 = "";
      v1 = v1.replace(/^\s+|\s+$/g, "").split(".");
      v2 = v2.replace(/^\s+|\s+$/g, "").split(".");
      var a = Math.max(v1.length, v2.length), i, p1, p2;
      for (i = 0; i < a; i++) {
        p1 = parseInt(v1[i]) || 0;
        p2 = parseInt(v2[i]) || 0;
        if (p1 == p2)
          continue;
        if (p1 > p2)
          return 1;
        return -1;
      }
      return 0;
    }
    function versionAtLeast(ver) {
      return versionCompare(webAppVersion, ver) >= 0;
    }
    function byteLength(str) {
      if (window.Blob) {
        try {
          return new Blob([str]).size;
        } catch (e) {
        }
      }
      var s = str.length;
      for (var i = str.length - 1; i >= 0; i--) {
        var code = str.charCodeAt(i);
        if (code > 127 && code <= 2047)
          s++;
        else if (code > 2047 && code <= 65535)
          s += 2;
        if (code >= 56320 && code <= 57343)
          i--;
      }
      return s;
    }
    var BackButton = function() {
      var isVisible = false;
      var backButton = {};
      Object.defineProperty(backButton, "isVisible", {
        set: function(val2) {
          setParams({ is_visible: val2 });
        },
        get: function() {
          return isVisible;
        },
        enumerable: true
      });
      var curButtonState = null;
      WebView.onEvent("back_button_pressed", onBackButtonPressed);
      function onBackButtonPressed() {
        receiveWebViewEvent("backButtonClicked");
      }
      function buttonParams() {
        return { is_visible: isVisible };
      }
      function buttonState(btn_params) {
        if (typeof btn_params === "undefined") {
          btn_params = buttonParams();
        }
        return JSON.stringify(btn_params);
      }
      function buttonCheckVersion() {
        if (!versionAtLeast("6.1")) {
          console.warn("[Telegram.WebApp] BackButton is not supported in version " + webAppVersion);
          return false;
        }
        return true;
      }
      function updateButton() {
        var btn_params = buttonParams();
        var btn_state = buttonState(btn_params);
        if (curButtonState === btn_state) {
          return;
        }
        curButtonState = btn_state;
        WebView.postEvent("web_app_setup_back_button", false, btn_params);
      }
      function setParams(params) {
        if (!buttonCheckVersion()) {
          return backButton;
        }
        if (typeof params.is_visible !== "undefined") {
          isVisible = !!params.is_visible;
        }
        updateButton();
        return backButton;
      }
      backButton.onClick = function(callback) {
        if (buttonCheckVersion()) {
          onWebViewEvent("backButtonClicked", callback);
        }
        return backButton;
      };
      backButton.offClick = function(callback) {
        if (buttonCheckVersion()) {
          offWebViewEvent("backButtonClicked", callback);
        }
        return backButton;
      };
      backButton.show = function() {
        return setParams({ is_visible: true });
      };
      backButton.hide = function() {
        return setParams({ is_visible: false });
      };
      return backButton;
    }();
    var debugBottomBar = null, debugBottomBarBtns = {}, bottomBarHeight = 0;
    if (initParams.tgWebAppDebug) {
      debugBottomBar = document.createElement("tg-bottom-bar");
      var debugBottomBarStyle = {
        display: "flex",
        gap: "7px",
        font: "600 14px/18px sans-serif",
        width: "100%",
        background: getBottomBarColor(),
        position: "fixed",
        left: "0",
        right: "0",
        bottom: "0",
        margin: "0",
        padding: "7px",
        textAlign: "center",
        boxSizing: "border-box",
        zIndex: "10000"
      };
      for (var k in debugBottomBarStyle) {
        debugBottomBar.style[k] = debugBottomBarStyle[k];
      }
      document.addEventListener("DOMContentLoaded", function onDomLoaded(event) {
        document.removeEventListener("DOMContentLoaded", onDomLoaded);
        document.body.appendChild(debugBottomBar);
      });
      var animStyle = document.createElement("style");
      animStyle.innerHTML = 'tg-bottom-button.shine { position: relative; overflow: hidden; } tg-bottom-button.shine:before { content:""; position: absolute; top: 0; width: 100%; height: 100%; background: linear-gradient(120deg, transparent, rgba(255, 255, 255, .2), transparent); animation: tg-bottom-button-shine 5s ease-in-out infinite; } @-webkit-keyframes tg-bottom-button-shine { 0% {left: -100%;} 12%,100% {left: 100%}} @keyframes tg-bottom-button-shine { 0% {left: -100%;} 12%,100% {left: 100%}}';
      debugBottomBar.appendChild(animStyle);
    }
    function updateDebugBottomBar() {
      var mainBtn = debugBottomBarBtns.main._bottomButton;
      var secondaryBtn = debugBottomBarBtns.secondary._bottomButton;
      if (mainBtn.isVisible || secondaryBtn.isVisible) {
        debugBottomBar.style.display = "flex";
        bottomBarHeight = 58;
        if (mainBtn.isVisible && secondaryBtn.isVisible) {
          if (secondaryBtn.position == "top") {
            debugBottomBar.style.flexDirection = "column-reverse";
            bottomBarHeight += 51;
          } else if (secondaryBtn.position == "bottom") {
            debugBottomBar.style.flexDirection = "column";
            bottomBarHeight += 51;
          } else if (secondaryBtn.position == "left") {
            debugBottomBar.style.flexDirection = "row-reverse";
          } else if (secondaryBtn.position == "right") {
            debugBottomBar.style.flexDirection = "row";
          }
        }
      } else {
        debugBottomBar.style.display = "none";
        bottomBarHeight = 0;
      }
      debugBottomBar.style.background = getBottomBarColor();
      if (document.documentElement) {
        document.documentElement.style.boxSizing = "border-box";
        document.documentElement.style.paddingBottom = bottomBarHeight + "px";
      }
      setViewportHeight();
    }
    var BottomButtonConstructor = function(type) {
      var isMainButton = type == "main";
      if (isMainButton) {
        var setupFnName = "web_app_setup_main_button";
        var tgEventName = "main_button_pressed";
        var webViewEventName = "mainButtonClicked";
        var buttonTextDefault = "Continue";
        var buttonColorDefault = function() {
          return themeParams.button_color || "#2481cc";
        };
        var buttonTextColorDefault = function() {
          return themeParams.button_text_color || "#ffffff";
        };
      } else {
        var setupFnName = "web_app_setup_secondary_button";
        var tgEventName = "secondary_button_pressed";
        var webViewEventName = "secondaryButtonClicked";
        var buttonTextDefault = "Cancel";
        var buttonColorDefault = function() {
          return getBottomBarColor();
        };
        var buttonTextColorDefault = function() {
          return themeParams.button_color || "#2481cc";
        };
      }
      var isVisible = false;
      var isActive = true;
      var hasShineEffect = false;
      var isProgressVisible = false;
      var buttonType = type;
      var buttonText = buttonTextDefault;
      var buttonColor = false;
      var buttonTextColor = false;
      var buttonPosition = "left";
      var bottomButton = {};
      Object.defineProperty(bottomButton, "type", {
        get: function() {
          return buttonType;
        },
        enumerable: true
      });
      Object.defineProperty(bottomButton, "text", {
        set: function(val2) {
          bottomButton.setParams({ text: val2 });
        },
        get: function() {
          return buttonText;
        },
        enumerable: true
      });
      Object.defineProperty(bottomButton, "color", {
        set: function(val2) {
          bottomButton.setParams({ color: val2 });
        },
        get: function() {
          return buttonColor || buttonColorDefault();
        },
        enumerable: true
      });
      Object.defineProperty(bottomButton, "textColor", {
        set: function(val2) {
          bottomButton.setParams({ text_color: val2 });
        },
        get: function() {
          return buttonTextColor || buttonTextColorDefault();
        },
        enumerable: true
      });
      Object.defineProperty(bottomButton, "isVisible", {
        set: function(val2) {
          bottomButton.setParams({ is_visible: val2 });
        },
        get: function() {
          return isVisible;
        },
        enumerable: true
      });
      Object.defineProperty(bottomButton, "isProgressVisible", {
        get: function() {
          return isProgressVisible;
        },
        enumerable: true
      });
      Object.defineProperty(bottomButton, "isActive", {
        set: function(val2) {
          bottomButton.setParams({ is_active: val2 });
        },
        get: function() {
          return isActive;
        },
        enumerable: true
      });
      Object.defineProperty(bottomButton, "hasShineEffect", {
        set: function(val2) {
          bottomButton.setParams({ has_shine_effect: val2 });
        },
        get: function() {
          return hasShineEffect;
        },
        enumerable: true
      });
      if (!isMainButton) {
        Object.defineProperty(bottomButton, "position", {
          set: function(val2) {
            bottomButton.setParams({ position: val2 });
          },
          get: function() {
            return buttonPosition;
          },
          enumerable: true
        });
      }
      var curButtonState = null;
      WebView.onEvent(tgEventName, onBottomButtonPressed);
      var debugBtn = null;
      if (initParams.tgWebAppDebug) {
        debugBtn = document.createElement("tg-bottom-button");
        var debugBtnStyle = {
          display: "none",
          width: "100%",
          height: "44px",
          borderRadius: "0",
          background: "no-repeat right center",
          padding: "13px 15px",
          textAlign: "center",
          boxSizing: "border-box"
        };
        for (var k2 in debugBtnStyle) {
          debugBtn.style[k2] = debugBtnStyle[k2];
        }
        debugBottomBar.appendChild(debugBtn);
        debugBtn.addEventListener("click", onBottomButtonPressed, false);
        debugBtn._bottomButton = bottomButton;
        debugBottomBarBtns[type] = debugBtn;
      }
      function onBottomButtonPressed() {
        if (isActive) {
          receiveWebViewEvent(webViewEventName);
        }
      }
      function buttonParams() {
        var color = bottomButton.color;
        var text_color = bottomButton.textColor;
        if (isVisible) {
          var params = {
            is_visible: true,
            is_active: isActive,
            is_progress_visible: isProgressVisible,
            text: buttonText,
            color,
            text_color,
            has_shine_effect: hasShineEffect && isActive && !isProgressVisible
          };
          if (!isMainButton) {
            params.position = buttonPosition;
          }
        } else {
          var params = {
            is_visible: false
          };
        }
        return params;
      }
      function buttonState(btn_params) {
        if (typeof btn_params === "undefined") {
          btn_params = buttonParams();
        }
        return JSON.stringify(btn_params);
      }
      function updateButton() {
        var btn_params = buttonParams();
        var btn_state = buttonState(btn_params);
        if (curButtonState === btn_state) {
          return;
        }
        curButtonState = btn_state;
        WebView.postEvent(setupFnName, false, btn_params);
        if (initParams.tgWebAppDebug) {
          updateDebugButton(btn_params);
        }
      }
      function updateDebugButton(btn_params) {
        if (btn_params.is_visible) {
          debugBtn.style.display = "block";
          debugBtn.style.opacity = btn_params.is_active ? "1" : "0.8";
          debugBtn.style.cursor = btn_params.is_active ? "pointer" : "auto";
          debugBtn.disabled = !btn_params.is_active;
          debugBtn.innerText = btn_params.text;
          debugBtn.className = btn_params.has_shine_effect ? "shine" : "";
          debugBtn.style.backgroundImage = btn_params.is_progress_visible ? "url('data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewport="0 0 48 48" width="48px" height="48px"><circle cx="50%" cy="50%" stroke="' + btn_params.text_color + '" stroke-width="2.25" stroke-linecap="round" fill="none" stroke-dashoffset="106" r="9" stroke-dasharray="56.52" rotate="-90"><animate attributeName="stroke-dashoffset" attributeType="XML" dur="360s" from="0" to="12500" repeatCount="indefinite"></animate><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="-90 24 24" to="630 24 24" repeatCount="indefinite"></animateTransform></circle></svg>') + "')" : "none";
          debugBtn.style.backgroundColor = btn_params.color;
          debugBtn.style.color = btn_params.text_color;
        } else {
          debugBtn.style.display = "none";
        }
        updateDebugBottomBar();
      }
      function setParams(params) {
        if (typeof params.text !== "undefined") {
          var text2 = strTrim(params.text);
          if (!text2.length) {
            console.error("[Telegram.WebApp] Bottom button text is required", params.text);
            throw Error("WebAppBottomButtonParamInvalid");
          }
          if (text2.length > 64) {
            console.error("[Telegram.WebApp] Bottom button text is too long", text2);
            throw Error("WebAppBottomButtonParamInvalid");
          }
          buttonText = text2;
        }
        if (typeof params.color !== "undefined") {
          if (params.color === false || params.color === null) {
            buttonColor = false;
          } else {
            var color = parseColorToHex(params.color);
            if (!color) {
              console.error("[Telegram.WebApp] Bottom button color format is invalid", params.color);
              throw Error("WebAppBottomButtonParamInvalid");
            }
            buttonColor = color;
          }
        }
        if (typeof params.text_color !== "undefined") {
          if (params.text_color === false || params.text_color === null) {
            buttonTextColor = false;
          } else {
            var text_color = parseColorToHex(params.text_color);
            if (!text_color) {
              console.error("[Telegram.WebApp] Bottom button text color format is invalid", params.text_color);
              throw Error("WebAppBottomButtonParamInvalid");
            }
            buttonTextColor = text_color;
          }
        }
        if (typeof params.is_visible !== "undefined") {
          if (params.is_visible && !bottomButton.text.length) {
            console.error("[Telegram.WebApp] Bottom button text is required");
            throw Error("WebAppBottomButtonParamInvalid");
          }
          isVisible = !!params.is_visible;
        }
        if (typeof params.has_shine_effect !== "undefined") {
          hasShineEffect = !!params.has_shine_effect;
        }
        if (!isMainButton && typeof params.position !== "undefined") {
          if (params.position != "left" && params.position != "right" && params.position != "top" && params.position != "bottom") {
            console.error("[Telegram.WebApp] Bottom button posiition is invalid", params.position);
            throw Error("WebAppBottomButtonParamInvalid");
          }
          buttonPosition = params.position;
        }
        if (typeof params.is_active !== "undefined") {
          isActive = !!params.is_active;
        }
        updateButton();
        return bottomButton;
      }
      bottomButton.setText = function(text2) {
        return bottomButton.setParams({ text: text2 });
      };
      bottomButton.onClick = function(callback) {
        onWebViewEvent(webViewEventName, callback);
        return bottomButton;
      };
      bottomButton.offClick = function(callback) {
        offWebViewEvent(webViewEventName, callback);
        return bottomButton;
      };
      bottomButton.show = function() {
        return bottomButton.setParams({ is_visible: true });
      };
      bottomButton.hide = function() {
        return bottomButton.setParams({ is_visible: false });
      };
      bottomButton.enable = function() {
        return bottomButton.setParams({ is_active: true });
      };
      bottomButton.disable = function() {
        return bottomButton.setParams({ is_active: false });
      };
      bottomButton.showProgress = function(leaveActive) {
        isActive = !!leaveActive;
        isProgressVisible = true;
        updateButton();
        return bottomButton;
      };
      bottomButton.hideProgress = function() {
        if (!bottomButton.isActive) {
          isActive = true;
        }
        isProgressVisible = false;
        updateButton();
        return bottomButton;
      };
      bottomButton.setParams = setParams;
      return bottomButton;
    };
    var MainButton = BottomButtonConstructor("main");
    var SecondaryButton = BottomButtonConstructor("secondary");
    var SettingsButton = function() {
      var isVisible = false;
      var settingsButton = {};
      Object.defineProperty(settingsButton, "isVisible", {
        set: function(val2) {
          setParams({ is_visible: val2 });
        },
        get: function() {
          return isVisible;
        },
        enumerable: true
      });
      var curButtonState = null;
      WebView.onEvent("settings_button_pressed", onSettingsButtonPressed);
      function onSettingsButtonPressed() {
        receiveWebViewEvent("settingsButtonClicked");
      }
      function buttonParams() {
        return { is_visible: isVisible };
      }
      function buttonState(btn_params) {
        if (typeof btn_params === "undefined") {
          btn_params = buttonParams();
        }
        return JSON.stringify(btn_params);
      }
      function buttonCheckVersion() {
        if (!versionAtLeast("6.10")) {
          console.warn("[Telegram.WebApp] SettingsButton is not supported in version " + webAppVersion);
          return false;
        }
        return true;
      }
      function updateButton() {
        var btn_params = buttonParams();
        var btn_state = buttonState(btn_params);
        if (curButtonState === btn_state) {
          return;
        }
        curButtonState = btn_state;
        WebView.postEvent("web_app_setup_settings_button", false, btn_params);
      }
      function setParams(params) {
        if (!buttonCheckVersion()) {
          return settingsButton;
        }
        if (typeof params.is_visible !== "undefined") {
          isVisible = !!params.is_visible;
        }
        updateButton();
        return settingsButton;
      }
      settingsButton.onClick = function(callback) {
        if (buttonCheckVersion()) {
          onWebViewEvent("settingsButtonClicked", callback);
        }
        return settingsButton;
      };
      settingsButton.offClick = function(callback) {
        if (buttonCheckVersion()) {
          offWebViewEvent("settingsButtonClicked", callback);
        }
        return settingsButton;
      };
      settingsButton.show = function() {
        return setParams({ is_visible: true });
      };
      settingsButton.hide = function() {
        return setParams({ is_visible: false });
      };
      return settingsButton;
    }();
    var HapticFeedback = function() {
      var hapticFeedback = {};
      function triggerFeedback(params) {
        if (!versionAtLeast("6.1")) {
          console.warn("[Telegram.WebApp] HapticFeedback is not supported in version " + webAppVersion);
          return hapticFeedback;
        }
        if (params.type == "impact") {
          if (params.impact_style != "light" && params.impact_style != "medium" && params.impact_style != "heavy" && params.impact_style != "rigid" && params.impact_style != "soft") {
            console.error("[Telegram.WebApp] Haptic impact style is invalid", params.impact_style);
            throw Error("WebAppHapticImpactStyleInvalid");
          }
        } else if (params.type == "notification") {
          if (params.notification_type != "error" && params.notification_type != "success" && params.notification_type != "warning") {
            console.error("[Telegram.WebApp] Haptic notification type is invalid", params.notification_type);
            throw Error("WebAppHapticNotificationTypeInvalid");
          }
        } else if (params.type == "selection_change") ;
        else {
          console.error("[Telegram.WebApp] Haptic feedback type is invalid", params.type);
          throw Error("WebAppHapticFeedbackTypeInvalid");
        }
        WebView.postEvent("web_app_trigger_haptic_feedback", false, params);
        return hapticFeedback;
      }
      hapticFeedback.impactOccurred = function(style) {
        return triggerFeedback({ type: "impact", impact_style: style });
      };
      hapticFeedback.notificationOccurred = function(type) {
        return triggerFeedback({ type: "notification", notification_type: type });
      };
      hapticFeedback.selectionChanged = function() {
        return triggerFeedback({ type: "selection_change" });
      };
      return hapticFeedback;
    }();
    var CloudStorage = function() {
      var cloudStorage = {};
      function invokeStorageMethod(method, params, callback) {
        if (!versionAtLeast("6.9")) {
          console.error("[Telegram.WebApp] CloudStorage is not supported in version " + webAppVersion);
          throw Error("WebAppMethodUnsupported");
        }
        invokeCustomMethod(method, params, callback);
        return cloudStorage;
      }
      cloudStorage.setItem = function(key2, value, callback) {
        return invokeStorageMethod("saveStorageValue", { key: key2, value }, callback);
      };
      cloudStorage.getItem = function(key2, callback) {
        return cloudStorage.getItems([key2], callback ? function(err, res) {
          if (err)
            callback(err);
          else
            callback(null, res[key2]);
        } : null);
      };
      cloudStorage.getItems = function(keys, callback) {
        return invokeStorageMethod("getStorageValues", { keys }, callback);
      };
      cloudStorage.removeItem = function(key2, callback) {
        return cloudStorage.removeItems([key2], callback);
      };
      cloudStorage.removeItems = function(keys, callback) {
        return invokeStorageMethod("deleteStorageValues", { keys }, callback);
      };
      cloudStorage.getKeys = function(callback) {
        return invokeStorageMethod("getStorageKeys", {}, callback);
      };
      return cloudStorage;
    }();
    var BiometricManager = function() {
      var isInited = false;
      var isBiometricAvailable = false;
      var biometricType = "unknown";
      var isAccessRequested = false;
      var isAccessGranted = false;
      var isBiometricTokenSaved = false;
      var deviceId = "";
      var biometricManager = {};
      Object.defineProperty(biometricManager, "isInited", {
        get: function() {
          return isInited;
        },
        enumerable: true
      });
      Object.defineProperty(biometricManager, "isBiometricAvailable", {
        get: function() {
          return isInited && isBiometricAvailable;
        },
        enumerable: true
      });
      Object.defineProperty(biometricManager, "biometricType", {
        get: function() {
          return biometricType || "unknown";
        },
        enumerable: true
      });
      Object.defineProperty(biometricManager, "isAccessRequested", {
        get: function() {
          return isAccessRequested;
        },
        enumerable: true
      });
      Object.defineProperty(biometricManager, "isAccessGranted", {
        get: function() {
          return isAccessRequested && isAccessGranted;
        },
        enumerable: true
      });
      Object.defineProperty(biometricManager, "isBiometricTokenSaved", {
        get: function() {
          return isBiometricTokenSaved;
        },
        enumerable: true
      });
      Object.defineProperty(biometricManager, "deviceId", {
        get: function() {
          return deviceId || "";
        },
        enumerable: true
      });
      var initRequestState = { callbacks: [] };
      var accessRequestState = false;
      var authRequestState = false;
      var tokenRequestState = false;
      WebView.onEvent("biometry_info_received", onBiometryInfoReceived);
      WebView.onEvent("biometry_auth_requested", onBiometryAuthRequested);
      WebView.onEvent("biometry_token_updated", onBiometryTokenUpdated);
      function onBiometryInfoReceived(eventType, eventData) {
        isInited = true;
        if (eventData.available) {
          isBiometricAvailable = true;
          biometricType = eventData.type || "unknown";
          if (eventData.access_requested) {
            isAccessRequested = true;
            isAccessGranted = !!eventData.access_granted;
            isBiometricTokenSaved = !!eventData.token_saved;
          } else {
            isAccessRequested = false;
            isAccessGranted = false;
            isBiometricTokenSaved = false;
          }
        } else {
          isBiometricAvailable = false;
          biometricType = "unknown";
          isAccessRequested = false;
          isAccessGranted = false;
          isBiometricTokenSaved = false;
        }
        deviceId = eventData.device_id || "";
        if (initRequestState.callbacks.length > 0) {
          for (var i = 0; i < initRequestState.callbacks.length; i++) {
            var callback = initRequestState.callbacks[i];
            callback();
          }
          initRequestState.callbacks = [];
        }
        if (accessRequestState) {
          var state = accessRequestState;
          accessRequestState = false;
          if (state.callback) {
            state.callback(isAccessGranted);
          }
        }
        receiveWebViewEvent("biometricManagerUpdated");
      }
      function onBiometryAuthRequested(eventType, eventData) {
        var isAuthenticated = eventData.status == "authorized", biometricToken = eventData.token || "";
        if (authRequestState) {
          var state = authRequestState;
          authRequestState = false;
          if (state.callback) {
            state.callback(isAuthenticated, isAuthenticated ? biometricToken : null);
          }
        }
        receiveWebViewEvent("biometricAuthRequested", isAuthenticated ? {
          isAuthenticated: true,
          biometricToken
        } : {
          isAuthenticated: false
        });
      }
      function onBiometryTokenUpdated(eventType, eventData) {
        var applied = false;
        if (isBiometricAvailable && isAccessRequested) {
          if (eventData.status == "updated") {
            isBiometricTokenSaved = true;
            applied = true;
          } else if (eventData.status == "removed") {
            isBiometricTokenSaved = false;
            applied = true;
          }
        }
        if (tokenRequestState) {
          var state = tokenRequestState;
          tokenRequestState = false;
          if (state.callback) {
            state.callback(applied);
          }
        }
        receiveWebViewEvent("biometricTokenUpdated", {
          isUpdated: applied
        });
      }
      function checkVersion() {
        if (!versionAtLeast("7.2")) {
          console.warn("[Telegram.WebApp] BiometricManager is not supported in version " + webAppVersion);
          return false;
        }
        return true;
      }
      function checkInit() {
        if (!isInited) {
          console.error("[Telegram.WebApp] BiometricManager should be inited before using.");
          throw Error("WebAppBiometricManagerNotInited");
        }
        return true;
      }
      biometricManager.init = function(callback) {
        if (!checkVersion()) {
          return biometricManager;
        }
        if (isInited) {
          return biometricManager;
        }
        if (callback) {
          initRequestState.callbacks.push(callback);
        }
        WebView.postEvent("web_app_biometry_get_info", false);
        return biometricManager;
      };
      biometricManager.requestAccess = function(params, callback) {
        if (!checkVersion()) {
          return biometricManager;
        }
        checkInit();
        if (!isBiometricAvailable) {
          console.error("[Telegram.WebApp] Biometrics is not available on this device.");
          throw Error("WebAppBiometricManagerBiometricsNotAvailable");
        }
        if (accessRequestState) {
          console.error("[Telegram.WebApp] Access is already requested");
          throw Error("WebAppBiometricManagerAccessRequested");
        }
        var popup_params = {};
        if (typeof params.reason !== "undefined") {
          var reason = strTrim(params.reason);
          if (reason.length > 128) {
            console.error("[Telegram.WebApp] Biometric reason is too long", reason);
            throw Error("WebAppBiometricRequestAccessParamInvalid");
          }
          if (reason.length > 0) {
            popup_params.reason = reason;
          }
        }
        accessRequestState = {
          callback
        };
        WebView.postEvent("web_app_biometry_request_access", false, popup_params);
        return biometricManager;
      };
      biometricManager.authenticate = function(params, callback) {
        if (!checkVersion()) {
          return biometricManager;
        }
        checkInit();
        if (!isBiometricAvailable) {
          console.error("[Telegram.WebApp] Biometrics is not available on this device.");
          throw Error("WebAppBiometricManagerBiometricsNotAvailable");
        }
        if (!isAccessGranted) {
          console.error("[Telegram.WebApp] Biometric access was not granted by the user.");
          throw Error("WebAppBiometricManagerBiometricAccessNotGranted");
        }
        if (authRequestState) {
          console.error("[Telegram.WebApp] Authentication request is already in progress.");
          throw Error("WebAppBiometricManagerAuthenticationRequested");
        }
        var popup_params = {};
        if (typeof params.reason !== "undefined") {
          var reason = strTrim(params.reason);
          if (reason.length > 128) {
            console.error("[Telegram.WebApp] Biometric reason is too long", reason);
            throw Error("WebAppBiometricRequestAccessParamInvalid");
          }
          if (reason.length > 0) {
            popup_params.reason = reason;
          }
        }
        authRequestState = {
          callback
        };
        WebView.postEvent("web_app_biometry_request_auth", false, popup_params);
        return biometricManager;
      };
      biometricManager.updateBiometricToken = function(token, callback) {
        if (!checkVersion()) {
          return biometricManager;
        }
        token = token || "";
        if (token.length > 1024) {
          console.error("[Telegram.WebApp] Token is too long", token);
          throw Error("WebAppBiometricManagerTokenInvalid");
        }
        checkInit();
        if (!isBiometricAvailable) {
          console.error("[Telegram.WebApp] Biometrics is not available on this device.");
          throw Error("WebAppBiometricManagerBiometricsNotAvailable");
        }
        if (!isAccessGranted) {
          console.error("[Telegram.WebApp] Biometric access was not granted by the user.");
          throw Error("WebAppBiometricManagerBiometricAccessNotGranted");
        }
        if (tokenRequestState) {
          console.error("[Telegram.WebApp] Token request is already in progress.");
          throw Error("WebAppBiometricManagerTokenUpdateRequested");
        }
        tokenRequestState = {
          callback
        };
        WebView.postEvent("web_app_biometry_update_token", false, { token });
        return biometricManager;
      };
      biometricManager.openSettings = function() {
        if (!checkVersion()) {
          return biometricManager;
        }
        checkInit();
        if (!isBiometricAvailable) {
          console.error("[Telegram.WebApp] Biometrics is not available on this device.");
          throw Error("WebAppBiometricManagerBiometricsNotAvailable");
        }
        if (!isAccessRequested) {
          console.error("[Telegram.WebApp] Biometric access was not requested yet.");
          throw Error("WebAppBiometricManagerBiometricsAccessNotRequested");
        }
        if (isAccessGranted) {
          console.warn("[Telegram.WebApp] Biometric access was granted by the user, no need to go to settings.");
          return biometricManager;
        }
        WebView.postEvent("web_app_biometry_open_settings", false);
        return biometricManager;
      };
      return biometricManager;
    }();
    var LocationManager = function() {
      var isInited = false;
      var isLocationAvailable = false;
      var isAccessRequested = false;
      var isAccessGranted = false;
      var locationManager = {};
      Object.defineProperty(locationManager, "isInited", {
        get: function() {
          return isInited;
        },
        enumerable: true
      });
      Object.defineProperty(locationManager, "isLocationAvailable", {
        get: function() {
          return isInited && isLocationAvailable;
        },
        enumerable: true
      });
      Object.defineProperty(locationManager, "isAccessRequested", {
        get: function() {
          return isAccessRequested;
        },
        enumerable: true
      });
      Object.defineProperty(locationManager, "isAccessGranted", {
        get: function() {
          return isAccessRequested && isAccessGranted;
        },
        enumerable: true
      });
      var initRequestState = { callbacks: [] };
      var getRequestState = { callbacks: [] };
      WebView.onEvent("location_checked", onLocationChecked);
      WebView.onEvent("location_requested", onLocationRequested);
      function onLocationChecked(eventType, eventData) {
        isInited = true;
        if (eventData.available) {
          isLocationAvailable = true;
          if (eventData.access_requested) {
            isAccessRequested = true;
            isAccessGranted = !!eventData.access_granted;
          } else {
            isAccessRequested = false;
            isAccessGranted = false;
          }
        } else {
          isLocationAvailable = false;
          isAccessRequested = false;
          isAccessGranted = false;
        }
        if (initRequestState.callbacks.length > 0) {
          for (var i = 0; i < initRequestState.callbacks.length; i++) {
            var callback = initRequestState.callbacks[i];
            callback();
          }
          initRequestState.callbacks = [];
        }
        receiveWebViewEvent("locationManagerUpdated");
      }
      function onLocationRequested(eventType, eventData) {
        if (!eventData.available) {
          locationData = null;
        } else {
          var locationData = {
            latitude: eventData.latitude,
            longitude: eventData.longitude,
            altitude: null,
            course: null,
            speed: null,
            horizontal_accuracy: null,
            vertical_accuracy: null,
            course_accuracy: null,
            speed_accuracy: null
          };
          if (typeof eventData.altitude !== "undefined" && eventData.altitude !== null) {
            locationData.altitude = eventData.altitude;
          }
          if (typeof eventData.course !== "undefined" && eventData.course !== null) {
            locationData.course = eventData.course % 360;
          }
          if (typeof eventData.speed !== "undefined" && eventData.speed !== null) {
            locationData.speed = eventData.speed;
          }
          if (typeof eventData.horizontal_accuracy !== "undefined" && eventData.horizontal_accuracy !== null) {
            locationData.horizontal_accuracy = eventData.horizontal_accuracy;
          }
          if (typeof eventData.vertical_accuracy !== "undefined" && eventData.vertical_accuracy !== null) {
            locationData.vertical_accuracy = eventData.vertical_accuracy;
          }
          if (typeof eventData.course_accuracy !== "undefined" && eventData.course_accuracy !== null) {
            locationData.course_accuracy = eventData.course_accuracy;
          }
          if (typeof eventData.speed_accuracy !== "undefined" && eventData.speed_accuracy !== null) {
            locationData.speed_accuracy = eventData.speed_accuracy;
          }
        }
        if (!eventData.available || !isLocationAvailable || !isAccessRequested || !isAccessGranted) {
          initRequestState.callbacks.push(function() {
            locationResponse(locationData);
          });
          WebView.postEvent("web_app_check_location", false);
        } else {
          locationResponse(locationData);
        }
      }
      function locationResponse(response) {
        if (getRequestState.callbacks.length > 0) {
          for (var i = 0; i < getRequestState.callbacks.length; i++) {
            var callback = getRequestState.callbacks[i];
            callback(response);
          }
          getRequestState.callbacks = [];
        }
        if (response !== null) {
          receiveWebViewEvent("locationRequested", {
            locationData: response
          });
        }
      }
      function checkVersion() {
        if (!versionAtLeast("8.0")) {
          console.warn("[Telegram.WebApp] LocationManager is not supported in version " + webAppVersion);
          return false;
        }
        return true;
      }
      function checkInit() {
        if (!isInited) {
          console.error("[Telegram.WebApp] LocationManager should be inited before using.");
          throw Error("WebAppLocationManagerNotInited");
        }
        return true;
      }
      locationManager.init = function(callback) {
        if (!checkVersion()) {
          return locationManager;
        }
        if (isInited) {
          return locationManager;
        }
        if (callback) {
          initRequestState.callbacks.push(callback);
        }
        WebView.postEvent("web_app_check_location", false);
        return locationManager;
      };
      locationManager.getLocation = function(callback) {
        if (!checkVersion()) {
          return locationManager;
        }
        checkInit();
        if (!isLocationAvailable) {
          console.error("[Telegram.WebApp] Location is not available on this device.");
          throw Error("WebAppLocationManagerLocationNotAvailable");
        }
        getRequestState.callbacks.push(callback);
        WebView.postEvent("web_app_request_location");
        return locationManager;
      };
      locationManager.openSettings = function() {
        if (!checkVersion()) {
          return locationManager;
        }
        checkInit();
        if (!isLocationAvailable) {
          console.error("[Telegram.WebApp] Location is not available on this device.");
          throw Error("WebAppLocationManagerLocationNotAvailable");
        }
        if (!isAccessRequested) {
          console.error("[Telegram.WebApp] Location access was not requested yet.");
          throw Error("WebAppLocationManagerLocationAccessNotRequested");
        }
        if (isAccessGranted) {
          console.warn("[Telegram.WebApp] Location access was granted by the user, no need to go to settings.");
          return locationManager;
        }
        WebView.postEvent("web_app_open_location_settings", false);
        return locationManager;
      };
      return locationManager;
    }();
    var Accelerometer = function() {
      var isStarted = false;
      var valueX = null, valueY = null, valueZ = null;
      var startCallbacks = [], stopCallbacks = [];
      var accelerometer = {};
      Object.defineProperty(accelerometer, "isStarted", {
        get: function() {
          return isStarted;
        },
        enumerable: true
      });
      Object.defineProperty(accelerometer, "x", {
        get: function() {
          return valueX;
        },
        enumerable: true
      });
      Object.defineProperty(accelerometer, "y", {
        get: function() {
          return valueY;
        },
        enumerable: true
      });
      Object.defineProperty(accelerometer, "z", {
        get: function() {
          return valueZ;
        },
        enumerable: true
      });
      WebView.onEvent("accelerometer_started", onAccelerometerStarted);
      WebView.onEvent("accelerometer_stopped", onAccelerometerStopped);
      WebView.onEvent("accelerometer_changed", onAccelerometerChanged);
      WebView.onEvent("accelerometer_failed", onAccelerometerFailed);
      function onAccelerometerStarted(eventType, eventData) {
        isStarted = true;
        if (startCallbacks.length > 0) {
          for (var i = 0; i < startCallbacks.length; i++) {
            var callback = startCallbacks[i];
            callback(true);
          }
          startCallbacks = [];
        }
        receiveWebViewEvent("accelerometerStarted");
      }
      function onAccelerometerStopped(eventType, eventData) {
        isStarted = false;
        if (stopCallbacks.length > 0) {
          for (var i = 0; i < stopCallbacks.length; i++) {
            var callback = stopCallbacks[i];
            callback(true);
          }
          stopCallbacks = [];
        }
        receiveWebViewEvent("accelerometerStopped");
      }
      function onAccelerometerChanged(eventType, eventData) {
        valueX = eventData.x;
        valueY = eventData.y;
        valueZ = eventData.z;
        receiveWebViewEvent("accelerometerChanged");
      }
      function onAccelerometerFailed(eventType, eventData) {
        if (startCallbacks.length > 0) {
          for (var i = 0; i < startCallbacks.length; i++) {
            var callback = startCallbacks[i];
            callback(false);
          }
          startCallbacks = [];
        }
        receiveWebViewEvent("accelerometerFailed", {
          error: eventData.error
        });
      }
      function checkVersion() {
        if (!versionAtLeast("8.0")) {
          console.warn("[Telegram.WebApp] Accelerometer is not supported in version " + webAppVersion);
          return false;
        }
        return true;
      }
      accelerometer.start = function(params, callback) {
        params = params || {};
        if (!checkVersion()) {
          return accelerometer;
        }
        var req_params = {};
        var refresh_rate = parseInt(params.refresh_rate || 1e3);
        if (isNaN(refresh_rate) || refresh_rate < 20 || refresh_rate > 1e3) {
          console.warn("[Telegram.WebApp] Accelerometer refresh_rate is invalid", refresh_rate);
        } else {
          req_params.refresh_rate = refresh_rate;
        }
        if (callback) {
          startCallbacks.push(callback);
        }
        WebView.postEvent("web_app_start_accelerometer", false, req_params);
        return accelerometer;
      };
      accelerometer.stop = function(callback) {
        if (!checkVersion()) {
          return accelerometer;
        }
        if (callback) {
          stopCallbacks.push(callback);
        }
        WebView.postEvent("web_app_stop_accelerometer");
        return accelerometer;
      };
      return accelerometer;
    }();
    var DeviceOrientation = function() {
      var isStarted = false;
      var valueAlpha = null, valueBeta = null, valueGamma = null, valueAbsolute = false;
      var startCallbacks = [], stopCallbacks = [];
      var deviceOrientation = {};
      Object.defineProperty(deviceOrientation, "isStarted", {
        get: function() {
          return isStarted;
        },
        enumerable: true
      });
      Object.defineProperty(deviceOrientation, "absolute", {
        get: function() {
          return valueAbsolute;
        },
        enumerable: true
      });
      Object.defineProperty(deviceOrientation, "alpha", {
        get: function() {
          return valueAlpha;
        },
        enumerable: true
      });
      Object.defineProperty(deviceOrientation, "beta", {
        get: function() {
          return valueBeta;
        },
        enumerable: true
      });
      Object.defineProperty(deviceOrientation, "gamma", {
        get: function() {
          return valueGamma;
        },
        enumerable: true
      });
      WebView.onEvent("device_orientation_started", onDeviceOrientationStarted);
      WebView.onEvent("device_orientation_stopped", onDeviceOrientationStopped);
      WebView.onEvent("device_orientation_changed", onDeviceOrientationChanged);
      WebView.onEvent("device_orientation_failed", onDeviceOrientationFailed);
      function onDeviceOrientationStarted(eventType, eventData) {
        isStarted = true;
        if (startCallbacks.length > 0) {
          for (var i = 0; i < startCallbacks.length; i++) {
            var callback = startCallbacks[i];
            callback(true);
          }
          startCallbacks = [];
        }
        receiveWebViewEvent("deviceOrientationStarted");
      }
      function onDeviceOrientationStopped(eventType, eventData) {
        isStarted = false;
        if (stopCallbacks.length > 0) {
          for (var i = 0; i < stopCallbacks.length; i++) {
            var callback = stopCallbacks[i];
            callback(true);
          }
          stopCallbacks = [];
        }
        receiveWebViewEvent("deviceOrientationStopped");
      }
      function onDeviceOrientationChanged(eventType, eventData) {
        valueAbsolute = !!eventData.absolute;
        valueAlpha = eventData.alpha;
        valueBeta = eventData.beta;
        valueGamma = eventData.gamma;
        receiveWebViewEvent("deviceOrientationChanged");
      }
      function onDeviceOrientationFailed(eventType, eventData) {
        if (startCallbacks.length > 0) {
          for (var i = 0; i < startCallbacks.length; i++) {
            var callback = startCallbacks[i];
            callback(false);
          }
          startCallbacks = [];
        }
        receiveWebViewEvent("deviceOrientationFailed", {
          error: eventData.error
        });
      }
      function checkVersion() {
        if (!versionAtLeast("8.0")) {
          console.warn("[Telegram.WebApp] DeviceOrientation is not supported in version " + webAppVersion);
          return false;
        }
        return true;
      }
      deviceOrientation.start = function(params, callback) {
        params = params || {};
        if (!checkVersion()) {
          return deviceOrientation;
        }
        var req_params = {};
        var refresh_rate = parseInt(params.refresh_rate || 1e3);
        if (isNaN(refresh_rate) || refresh_rate < 20 || refresh_rate > 1e3) {
          console.warn("[Telegram.WebApp] DeviceOrientation refresh_rate is invalid", refresh_rate);
        } else {
          req_params.refresh_rate = refresh_rate;
        }
        req_params.need_absolute = !!params.need_absolute;
        if (callback) {
          startCallbacks.push(callback);
        }
        WebView.postEvent("web_app_start_device_orientation", false, req_params);
        return deviceOrientation;
      };
      deviceOrientation.stop = function(callback) {
        if (!checkVersion()) {
          return deviceOrientation;
        }
        if (callback) {
          stopCallbacks.push(callback);
        }
        WebView.postEvent("web_app_stop_device_orientation");
        return deviceOrientation;
      };
      return deviceOrientation;
    }();
    var Gyroscope = function() {
      var isStarted = false;
      var valueX = null, valueY = null, valueZ = null;
      var startCallbacks = [], stopCallbacks = [];
      var gyroscope = {};
      Object.defineProperty(gyroscope, "isStarted", {
        get: function() {
          return isStarted;
        },
        enumerable: true
      });
      Object.defineProperty(gyroscope, "x", {
        get: function() {
          return valueX;
        },
        enumerable: true
      });
      Object.defineProperty(gyroscope, "y", {
        get: function() {
          return valueY;
        },
        enumerable: true
      });
      Object.defineProperty(gyroscope, "z", {
        get: function() {
          return valueZ;
        },
        enumerable: true
      });
      WebView.onEvent("gyroscope_started", onGyroscopeStarted);
      WebView.onEvent("gyroscope_stopped", onGyroscopeStopped);
      WebView.onEvent("gyroscope_changed", onGyroscopeChanged);
      WebView.onEvent("gyroscope_failed", onGyroscopeFailed);
      function onGyroscopeStarted(eventType, eventData) {
        isStarted = true;
        if (startCallbacks.length > 0) {
          for (var i = 0; i < startCallbacks.length; i++) {
            var callback = startCallbacks[i];
            callback(true);
          }
          startCallbacks = [];
        }
        receiveWebViewEvent("gyroscopeStarted");
      }
      function onGyroscopeStopped(eventType, eventData) {
        isStarted = false;
        if (stopCallbacks.length > 0) {
          for (var i = 0; i < stopCallbacks.length; i++) {
            var callback = stopCallbacks[i];
            callback(true);
          }
          stopCallbacks = [];
        }
        receiveWebViewEvent("gyroscopeStopped");
      }
      function onGyroscopeChanged(eventType, eventData) {
        valueX = eventData.x;
        valueY = eventData.y;
        valueZ = eventData.z;
        receiveWebViewEvent("gyroscopeChanged");
      }
      function onGyroscopeFailed(eventType, eventData) {
        if (startCallbacks.length > 0) {
          for (var i = 0; i < startCallbacks.length; i++) {
            var callback = startCallbacks[i];
            callback(false);
          }
          startCallbacks = [];
        }
        receiveWebViewEvent("gyroscopeFailed", {
          error: eventData.error
        });
      }
      function checkVersion() {
        if (!versionAtLeast("8.0")) {
          console.warn("[Telegram.WebApp] Gyroscope is not supported in version " + webAppVersion);
          return false;
        }
        return true;
      }
      gyroscope.start = function(params, callback) {
        params = params || {};
        if (!checkVersion()) {
          return gyroscope;
        }
        var req_params = {};
        var refresh_rate = parseInt(params.refresh_rate || 1e3);
        if (isNaN(refresh_rate) || refresh_rate < 20 || refresh_rate > 1e3) {
          console.warn("[Telegram.WebApp] Gyroscope refresh_rate is invalid", refresh_rate);
        } else {
          req_params.refresh_rate = refresh_rate;
        }
        if (callback) {
          startCallbacks.push(callback);
        }
        WebView.postEvent("web_app_start_gyroscope", false, req_params);
        return gyroscope;
      };
      gyroscope.stop = function(callback) {
        if (!checkVersion()) {
          return gyroscope;
        }
        if (callback) {
          stopCallbacks.push(callback);
        }
        WebView.postEvent("web_app_stop_gyroscope");
        return gyroscope;
      };
      return gyroscope;
    }();
    var webAppInvoices = {};
    function onInvoiceClosed(eventType, eventData) {
      if (eventData.slug && webAppInvoices[eventData.slug]) {
        var invoiceData = webAppInvoices[eventData.slug];
        delete webAppInvoices[eventData.slug];
        if (invoiceData.callback) {
          invoiceData.callback(eventData.status);
        }
        receiveWebViewEvent("invoiceClosed", {
          url: invoiceData.url,
          status: eventData.status
        });
      }
    }
    var webAppPopupOpened = false;
    function onPopupClosed(eventType, eventData) {
      if (webAppPopupOpened) {
        var popupData = webAppPopupOpened;
        webAppPopupOpened = false;
        var button_id = null;
        if (typeof eventData.button_id !== "undefined") {
          button_id = eventData.button_id;
        }
        if (popupData.callback) {
          popupData.callback(button_id);
        }
        receiveWebViewEvent("popupClosed", {
          button_id
        });
      }
    }
    var webAppScanQrPopupOpened = false;
    function onQrTextReceived(eventType, eventData) {
      if (webAppScanQrPopupOpened) {
        var popupData = webAppScanQrPopupOpened;
        var data = null;
        if (typeof eventData.data !== "undefined") {
          data = eventData.data;
        }
        if (popupData.callback) {
          if (popupData.callback(data)) {
            webAppScanQrPopupOpened = false;
            WebView.postEvent("web_app_close_scan_qr_popup", false);
          }
        }
        receiveWebViewEvent("qrTextReceived", {
          data
        });
      }
    }
    function onScanQrPopupClosed(eventType, eventData) {
      webAppScanQrPopupOpened = false;
      receiveWebViewEvent("scanQrPopupClosed");
    }
    function onClipboardTextReceived(eventType, eventData) {
      if (eventData.req_id && webAppCallbacks[eventData.req_id]) {
        var requestData = webAppCallbacks[eventData.req_id];
        delete webAppCallbacks[eventData.req_id];
        var data = null;
        if (typeof eventData.data !== "undefined") {
          data = eventData.data;
        }
        if (requestData.callback) {
          requestData.callback(data);
        }
        receiveWebViewEvent("clipboardTextReceived", {
          data
        });
      }
    }
    var WebAppWriteAccessRequested = false;
    function onWriteAccessRequested(eventType, eventData) {
      if (WebAppWriteAccessRequested) {
        var requestData = WebAppWriteAccessRequested;
        WebAppWriteAccessRequested = false;
        if (requestData.callback) {
          requestData.callback(eventData.status == "allowed");
        }
        receiveWebViewEvent("writeAccessRequested", {
          status: eventData.status
        });
      }
    }
    function getRequestedContact(callback, timeout) {
      var reqTo, fallbackTo, reqDelay = 0;
      var reqInvoke = function() {
        invokeCustomMethod("getRequestedContact", {}, function(err, res) {
          if (res && res.length) {
            clearTimeout(fallbackTo);
            callback(res);
          } else {
            reqDelay += 50;
            reqTo = setTimeout(reqInvoke, reqDelay);
          }
        });
      };
      var fallbackInvoke = function() {
        clearTimeout(reqTo);
        callback("");
      };
      fallbackTo = setTimeout(fallbackInvoke, timeout);
      reqInvoke();
    }
    var WebAppContactRequested = false;
    function onPhoneRequested(eventType, eventData) {
      if (WebAppContactRequested) {
        var requestData = WebAppContactRequested;
        WebAppContactRequested = false;
        var requestSent = eventData.status == "sent";
        var webViewEvent = {
          status: eventData.status
        };
        if (requestSent) {
          getRequestedContact(function(res) {
            if (res && res.length) {
              webViewEvent.response = res;
              webViewEvent.responseUnsafe = Utils.urlParseQueryString(res);
              for (var key2 in webViewEvent.responseUnsafe) {
                var val2 = webViewEvent.responseUnsafe[key2];
                try {
                  if (val2.substr(0, 1) == "{" && val2.substr(-1) == "}" || val2.substr(0, 1) == "[" && val2.substr(-1) == "]") {
                    webViewEvent.responseUnsafe[key2] = JSON.parse(val2);
                  }
                } catch (e) {
                }
              }
            }
            if (requestData.callback) {
              requestData.callback(requestSent, webViewEvent);
            }
            receiveWebViewEvent("contactRequested", webViewEvent);
          }, 3e3);
        } else {
          if (requestData.callback) {
            requestData.callback(requestSent, webViewEvent);
          }
          receiveWebViewEvent("contactRequested", webViewEvent);
        }
      }
    }
    var webAppDownloadFileRequested = false;
    function onFileDownloadRequested(eventType, eventData) {
      if (webAppDownloadFileRequested) {
        var requestData = webAppDownloadFileRequested;
        webAppDownloadFileRequested = false;
        var isDownloading = eventData.status == "downloading";
        if (requestData.callback) {
          requestData.callback(isDownloading);
        }
        receiveWebViewEvent("fileDownloadRequested", {
          status: isDownloading ? "downloading" : "cancelled"
        });
      }
    }
    function onCustomMethodInvoked(eventType, eventData) {
      if (eventData.req_id && webAppCallbacks[eventData.req_id]) {
        var requestData = webAppCallbacks[eventData.req_id];
        delete webAppCallbacks[eventData.req_id];
        var res = null, err = null;
        if (typeof eventData.result !== "undefined") {
          res = eventData.result;
        }
        if (typeof eventData.error !== "undefined") {
          err = eventData.error;
        }
        if (requestData.callback) {
          requestData.callback(err, res);
        }
      }
    }
    function invokeCustomMethod(method, params, callback) {
      if (!versionAtLeast("6.9")) {
        console.error("[Telegram.WebApp] Method invokeCustomMethod is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      var req_id = generateCallbackId(16);
      var req_params = { req_id, method, params: params || {} };
      webAppCallbacks[req_id] = {
        callback
      };
      WebView.postEvent("web_app_invoke_custom_method", false, req_params);
    }
    if (!window.Telegram) {
      window.Telegram = {};
    }
    Object.defineProperty(WebApp2, "initData", {
      get: function() {
        return webAppInitData;
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "initDataUnsafe", {
      get: function() {
        return webAppInitDataUnsafe;
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "version", {
      get: function() {
        return webAppVersion;
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "platform", {
      get: function() {
        return webAppPlatform;
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "colorScheme", {
      get: function() {
        return colorScheme;
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "themeParams", {
      get: function() {
        return themeParams;
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "isExpanded", {
      get: function() {
        return isExpanded;
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "viewportHeight", {
      get: function() {
        return (viewportHeight === false ? window.innerHeight : viewportHeight) - bottomBarHeight;
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "viewportStableHeight", {
      get: function() {
        return (viewportStableHeight === false ? window.innerHeight : viewportStableHeight) - bottomBarHeight;
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "safeAreaInset", {
      get: function() {
        return safeAreaInset;
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "contentSafeAreaInset", {
      get: function() {
        return contentSafeAreaInset;
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "isClosingConfirmationEnabled", {
      set: function(val2) {
        setClosingConfirmation(val2);
      },
      get: function() {
        return isClosingConfirmationEnabled;
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "isVerticalSwipesEnabled", {
      set: function(val2) {
        toggleVerticalSwipes(val2);
      },
      get: function() {
        return isVerticalSwipesEnabled;
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "isFullscreen", {
      get: function() {
        return webAppIsFullscreen;
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "isOrientationLocked", {
      set: function(val2) {
        toggleOrientationLock(val2);
      },
      get: function() {
        return webAppIsOrientationLocked;
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "isActive", {
      get: function() {
        return webAppIsActive;
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "headerColor", {
      set: function(val2) {
        setHeaderColor(val2);
      },
      get: function() {
        return getHeaderColor();
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "backgroundColor", {
      set: function(val2) {
        setBackgroundColor(val2);
      },
      get: function() {
        return getBackgroundColor();
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "bottomBarColor", {
      set: function(val2) {
        setBottomBarColor(val2);
      },
      get: function() {
        return getBottomBarColor();
      },
      enumerable: true
    });
    Object.defineProperty(WebApp2, "BackButton", {
      value: BackButton,
      enumerable: true
    });
    Object.defineProperty(WebApp2, "MainButton", {
      value: MainButton,
      enumerable: true
    });
    Object.defineProperty(WebApp2, "SecondaryButton", {
      value: SecondaryButton,
      enumerable: true
    });
    Object.defineProperty(WebApp2, "SettingsButton", {
      value: SettingsButton,
      enumerable: true
    });
    Object.defineProperty(WebApp2, "HapticFeedback", {
      value: HapticFeedback,
      enumerable: true
    });
    Object.defineProperty(WebApp2, "CloudStorage", {
      value: CloudStorage,
      enumerable: true
    });
    Object.defineProperty(WebApp2, "BiometricManager", {
      value: BiometricManager,
      enumerable: true
    });
    Object.defineProperty(WebApp2, "Accelerometer", {
      value: Accelerometer,
      enumerable: true
    });
    Object.defineProperty(WebApp2, "DeviceOrientation", {
      value: DeviceOrientation,
      enumerable: true
    });
    Object.defineProperty(WebApp2, "Gyroscope", {
      value: Gyroscope,
      enumerable: true
    });
    Object.defineProperty(WebApp2, "LocationManager", {
      value: LocationManager,
      enumerable: true
    });
    WebApp2.isVersionAtLeast = function(ver) {
      return versionAtLeast(ver);
    };
    WebApp2.setHeaderColor = function(color_key) {
      WebApp2.headerColor = color_key;
    };
    WebApp2.setBackgroundColor = function(color) {
      WebApp2.backgroundColor = color;
    };
    WebApp2.setBottomBarColor = function(color) {
      WebApp2.bottomBarColor = color;
    };
    WebApp2.enableClosingConfirmation = function() {
      WebApp2.isClosingConfirmationEnabled = true;
    };
    WebApp2.disableClosingConfirmation = function() {
      WebApp2.isClosingConfirmationEnabled = false;
    };
    WebApp2.enableVerticalSwipes = function() {
      WebApp2.isVerticalSwipesEnabled = true;
    };
    WebApp2.disableVerticalSwipes = function() {
      WebApp2.isVerticalSwipesEnabled = false;
    };
    WebApp2.lockOrientation = function() {
      WebApp2.isOrientationLocked = true;
    };
    WebApp2.unlockOrientation = function() {
      WebApp2.isOrientationLocked = false;
    };
    WebApp2.requestFullscreen = function() {
      if (!versionAtLeast("8.0")) {
        console.error("[Telegram.WebApp] Method requestFullscreen is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      WebView.postEvent("web_app_request_fullscreen");
    };
    WebApp2.exitFullscreen = function() {
      if (!versionAtLeast("8.0")) {
        console.error("[Telegram.WebApp] Method exitFullscreen is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      WebView.postEvent("web_app_exit_fullscreen");
    };
    WebApp2.addToHomeScreen = function() {
      if (!versionAtLeast("8.0")) {
        console.error("[Telegram.WebApp] Method addToHomeScreen is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      WebView.postEvent("web_app_add_to_home_screen");
    };
    WebApp2.checkHomeScreenStatus = function(callback) {
      if (!versionAtLeast("8.0")) {
        console.error("[Telegram.WebApp] Method checkHomeScreenStatus is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      if (callback) {
        homeScreenCallbacks.push(callback);
      }
      WebView.postEvent("web_app_check_home_screen");
    };
    WebApp2.onEvent = function(eventType, callback) {
      onWebViewEvent(eventType, callback);
    };
    WebApp2.offEvent = function(eventType, callback) {
      offWebViewEvent(eventType, callback);
    };
    WebApp2.sendData = function(data) {
      if (!data || !data.length) {
        console.error("[Telegram.WebApp] Data is required", data);
        throw Error("WebAppDataInvalid");
      }
      if (byteLength(data) > 4096) {
        console.error("[Telegram.WebApp] Data is too long", data);
        throw Error("WebAppDataInvalid");
      }
      WebView.postEvent("web_app_data_send", false, { data });
    };
    WebApp2.switchInlineQuery = function(query, choose_chat_types) {
      if (!versionAtLeast("6.6")) {
        console.error("[Telegram.WebApp] Method switchInlineQuery is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      if (!initParams.tgWebAppBotInline) {
        console.error("[Telegram.WebApp] Inline mode is disabled for this bot. Read more about inline mode: https://core.telegram.org/bots/inline");
        throw Error("WebAppInlineModeDisabled");
      }
      query = query || "";
      if (query.length > 256) {
        console.error("[Telegram.WebApp] Inline query is too long", query);
        throw Error("WebAppInlineQueryInvalid");
      }
      var chat_types = [];
      if (choose_chat_types) {
        if (!Array.isArray(choose_chat_types)) {
          console.error("[Telegram.WebApp] Choose chat types should be an array", choose_chat_types);
          throw Error("WebAppInlineChooseChatTypesInvalid");
        }
        var good_types = { users: 1, bots: 1, groups: 1, channels: 1 };
        for (var i = 0; i < choose_chat_types.length; i++) {
          var chat_type = choose_chat_types[i];
          if (!good_types[chat_type]) {
            console.error("[Telegram.WebApp] Choose chat type is invalid", chat_type);
            throw Error("WebAppInlineChooseChatTypeInvalid");
          }
          if (good_types[chat_type] != 2) {
            good_types[chat_type] = 2;
            chat_types.push(chat_type);
          }
        }
      }
      WebView.postEvent("web_app_switch_inline_query", false, { query, chat_types });
    };
    WebApp2.openLink = function(url2, options) {
      var a = document.createElement("A");
      a.href = url2;
      if (a.protocol != "http:" && a.protocol != "https:") {
        console.error("[Telegram.WebApp] Url protocol is not supported", url2);
        throw Error("WebAppTgUrlInvalid");
      }
      var url2 = a.href;
      options = options || {};
      if (versionAtLeast("6.1")) {
        var req_params = { url: url2 };
        if (versionAtLeast("6.4") && options.try_instant_view) {
          req_params.try_instant_view = true;
        }
        if (versionAtLeast("7.6") && options.try_browser) {
          req_params.try_browser = options.try_browser;
        }
        WebView.postEvent("web_app_open_link", false, req_params);
      } else {
        window.open(url2, "_blank");
      }
    };
    WebApp2.openTelegramLink = function(url2, options) {
      var a = document.createElement("A");
      a.href = url2;
      if (a.protocol != "http:" && a.protocol != "https:") {
        console.error("[Telegram.WebApp] Url protocol is not supported", url2);
        throw Error("WebAppTgUrlInvalid");
      }
      if (a.hostname != "t.me") {
        console.error("[Telegram.WebApp] Url host is not supported", url2);
        throw Error("WebAppTgUrlInvalid");
      }
      var path_full = a.pathname + a.search;
      options = options || {};
      if (isIframe || versionAtLeast("6.1")) {
        var req_params = { path_full };
        if (options.force_request) {
          req_params.force_request = true;
        }
        WebView.postEvent("web_app_open_tg_link", false, req_params);
      } else {
        location.href = "https://t.me" + path_full;
      }
    };
    WebApp2.openInvoice = function(url2, callback) {
      var a = document.createElement("A"), match, slug;
      a.href = url2;
      if (a.protocol != "http:" && a.protocol != "https:" || a.hostname != "t.me" || !(match = a.pathname.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/)) || !(slug = match[2])) {
        console.error("[Telegram.WebApp] Invoice url is invalid", url2);
        throw Error("WebAppInvoiceUrlInvalid");
      }
      if (!versionAtLeast("6.1")) {
        console.error("[Telegram.WebApp] Method openInvoice is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      if (webAppInvoices[slug]) {
        console.error("[Telegram.WebApp] Invoice is already opened");
        throw Error("WebAppInvoiceOpened");
      }
      webAppInvoices[slug] = {
        url: url2,
        callback
      };
      WebView.postEvent("web_app_open_invoice", false, { slug });
    };
    WebApp2.showPopup = function(params, callback) {
      if (!versionAtLeast("6.2")) {
        console.error("[Telegram.WebApp] Method showPopup is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      if (webAppPopupOpened) {
        console.error("[Telegram.WebApp] Popup is already opened");
        throw Error("WebAppPopupOpened");
      }
      var title = "";
      var message = "";
      var buttons2 = [];
      var popup_params = {};
      if (typeof params.title !== "undefined") {
        title = strTrim(params.title);
        if (title.length > 64) {
          console.error("[Telegram.WebApp] Popup title is too long", title);
          throw Error("WebAppPopupParamInvalid");
        }
        if (title.length > 0) {
          popup_params.title = title;
        }
      }
      if (typeof params.message !== "undefined") {
        message = strTrim(params.message);
      }
      if (!message.length) {
        console.error("[Telegram.WebApp] Popup message is required", params.message);
        throw Error("WebAppPopupParamInvalid");
      }
      if (message.length > 256) {
        console.error("[Telegram.WebApp] Popup message is too long", message);
        throw Error("WebAppPopupParamInvalid");
      }
      popup_params.message = message;
      if (typeof params.buttons !== "undefined") {
        if (!Array.isArray(params.buttons)) {
          console.error("[Telegram.WebApp] Popup buttons should be an array", params.buttons);
          throw Error("WebAppPopupParamInvalid");
        }
        for (var i = 0; i < params.buttons.length; i++) {
          var button2 = params.buttons[i];
          var btn = {};
          var id = "";
          if (typeof button2.id !== "undefined") {
            id = button2.id.toString();
            if (id.length > 64) {
              console.error("[Telegram.WebApp] Popup button id is too long", id);
              throw Error("WebAppPopupParamInvalid");
            }
          }
          btn.id = id;
          var button_type = button2.type;
          if (typeof button_type === "undefined") {
            button_type = "default";
          }
          btn.type = button_type;
          if (button_type == "ok" || button_type == "close" || button_type == "cancel") ;
          else if (button_type == "default" || button_type == "destructive") {
            var text2 = "";
            if (typeof button2.text !== "undefined") {
              text2 = strTrim(button2.text);
            }
            if (!text2.length) {
              console.error("[Telegram.WebApp] Popup button text is required for type " + button_type, button2.text);
              throw Error("WebAppPopupParamInvalid");
            }
            if (text2.length > 64) {
              console.error("[Telegram.WebApp] Popup button text is too long", text2);
              throw Error("WebAppPopupParamInvalid");
            }
            btn.text = text2;
          } else {
            console.error("[Telegram.WebApp] Popup button type is invalid", button_type);
            throw Error("WebAppPopupParamInvalid");
          }
          buttons2.push(btn);
        }
      } else {
        buttons2.push({ id: "", type: "close" });
      }
      if (buttons2.length < 1) {
        console.error("[Telegram.WebApp] Popup should have at least one button");
        throw Error("WebAppPopupParamInvalid");
      }
      if (buttons2.length > 3) {
        console.error("[Telegram.WebApp] Popup should not have more than 3 buttons");
        throw Error("WebAppPopupParamInvalid");
      }
      popup_params.buttons = buttons2;
      webAppPopupOpened = {
        callback
      };
      WebView.postEvent("web_app_open_popup", false, popup_params);
    };
    WebApp2.showAlert = function(message, callback) {
      WebApp2.showPopup({
        message
      }, callback ? function() {
        callback();
      } : null);
    };
    WebApp2.showConfirm = function(message, callback) {
      WebApp2.showPopup({
        message,
        buttons: [
          { type: "ok", id: "ok" },
          { type: "cancel" }
        ]
      }, callback ? function(button_id) {
        callback(button_id == "ok");
      } : null);
    };
    WebApp2.showScanQrPopup = function(params, callback) {
      if (!versionAtLeast("6.4")) {
        console.error("[Telegram.WebApp] Method showScanQrPopup is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      if (webAppScanQrPopupOpened) {
        console.error("[Telegram.WebApp] Popup is already opened");
        throw Error("WebAppScanQrPopupOpened");
      }
      var text2 = "";
      var popup_params = {};
      if (typeof params.text !== "undefined") {
        text2 = strTrim(params.text);
        if (text2.length > 64) {
          console.error("[Telegram.WebApp] Scan QR popup text is too long", text2);
          throw Error("WebAppScanQrPopupParamInvalid");
        }
        if (text2.length > 0) {
          popup_params.text = text2;
        }
      }
      webAppScanQrPopupOpened = {
        callback
      };
      WebView.postEvent("web_app_open_scan_qr_popup", false, popup_params);
    };
    WebApp2.closeScanQrPopup = function() {
      if (!versionAtLeast("6.4")) {
        console.error("[Telegram.WebApp] Method closeScanQrPopup is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      webAppScanQrPopupOpened = false;
      WebView.postEvent("web_app_close_scan_qr_popup", false);
    };
    WebApp2.readTextFromClipboard = function(callback) {
      if (!versionAtLeast("6.4")) {
        console.error("[Telegram.WebApp] Method readTextFromClipboard is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      var req_id = generateCallbackId(16);
      var req_params = { req_id };
      webAppCallbacks[req_id] = {
        callback
      };
      WebView.postEvent("web_app_read_text_from_clipboard", false, req_params);
    };
    WebApp2.requestWriteAccess = function(callback) {
      if (!versionAtLeast("6.9")) {
        console.error("[Telegram.WebApp] Method requestWriteAccess is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      if (WebAppWriteAccessRequested) {
        console.error("[Telegram.WebApp] Write access is already requested");
        throw Error("WebAppWriteAccessRequested");
      }
      WebAppWriteAccessRequested = {
        callback
      };
      WebView.postEvent("web_app_request_write_access");
    };
    WebApp2.requestContact = function(callback) {
      if (!versionAtLeast("6.9")) {
        console.error("[Telegram.WebApp] Method requestContact is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      if (WebAppContactRequested) {
        console.error("[Telegram.WebApp] Contact is already requested");
        throw Error("WebAppContactRequested");
      }
      WebAppContactRequested = {
        callback
      };
      WebView.postEvent("web_app_request_phone");
    };
    WebApp2.downloadFile = function(params, callback) {
      if (!versionAtLeast("8.0")) {
        console.error("[Telegram.WebApp] Method downloadFile is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      if (webAppDownloadFileRequested) {
        console.error("[Telegram.WebApp] Popup is already opened");
        throw Error("WebAppDownloadFilePopupOpened");
      }
      var a = document.createElement("A");
      var dl_params = {};
      if (!params || !params.url || !params.url.length) {
        console.error("[Telegram.WebApp] Url is required");
        throw Error("WebAppDownloadFileParamInvalid");
      }
      a.href = params.url;
      if (a.protocol != "https:") {
        console.error("[Telegram.WebApp] Url protocol is not supported", url);
        throw Error("WebAppDownloadFileParamInvalid");
      }
      dl_params.url = a.href;
      if (!params || !params.file_name || !params.file_name.length) {
        console.error("[Telegram.WebApp] File name is required");
        throw Error("WebAppDownloadFileParamInvalid");
      }
      dl_params.file_name = params.file_name;
      webAppDownloadFileRequested = {
        callback
      };
      WebView.postEvent("web_app_request_file_download", false, dl_params);
    };
    WebApp2.shareToStory = function(media_url, params) {
      params = params || {};
      if (!versionAtLeast("7.8")) {
        console.error("[Telegram.WebApp] Method shareToStory is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      var a = document.createElement("A");
      a.href = media_url;
      if (a.protocol != "http:" && a.protocol != "https:") {
        console.error("[Telegram.WebApp] Media url protocol is not supported", url);
        throw Error("WebAppMediaUrlInvalid");
      }
      var share_params = {};
      share_params.media_url = a.href;
      if (typeof params.text !== "undefined") {
        var text2 = strTrim(params.text);
        if (text2.length > 2048) {
          console.error("[Telegram.WebApp] Text is too long", text2);
          throw Error("WebAppShareToStoryParamInvalid");
        }
        if (text2.length > 0) {
          share_params.text = text2;
        }
      }
      if (typeof params.widget_link !== "undefined") {
        params.widget_link = params.widget_link || {};
        a.href = params.widget_link.url;
        if (a.protocol != "http:" && a.protocol != "https:") {
          console.error("[Telegram.WebApp] Link protocol is not supported", url);
          throw Error("WebAppShareToStoryParamInvalid");
        }
        var widget_link = {
          url: a.href
        };
        if (typeof params.widget_link.name !== "undefined") {
          var link_name = strTrim(params.widget_link.name);
          if (link_name.length > 48) {
            console.error("[Telegram.WebApp] Link name is too long", link_name);
            throw Error("WebAppShareToStoryParamInvalid");
          }
          if (link_name.length > 0) {
            widget_link.name = link_name;
          }
        }
        share_params.widget_link = widget_link;
      }
      WebView.postEvent("web_app_share_to_story", false, share_params);
    };
    WebApp2.shareMessage = function(msg_id, callback) {
      if (!versionAtLeast("8.0")) {
        console.error("[Telegram.WebApp] Method shareMessage is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      if (WebAppShareMessageOpened) {
        console.error("[Telegram.WebApp] Share message is already opened");
        throw Error("WebAppShareMessageOpened");
      }
      WebAppShareMessageOpened = {
        callback
      };
      WebView.postEvent("web_app_send_prepared_message", false, { id: msg_id });
    };
    WebApp2.setEmojiStatus = function(custom_emoji_id, params, callback) {
      params = params || {};
      if (!versionAtLeast("8.0")) {
        console.error("[Telegram.WebApp] Method setEmojiStatus is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      var status_params = {};
      status_params.custom_emoji_id = custom_emoji_id;
      if (typeof params.duration !== "undefined") {
        status_params.duration = params.duration;
      }
      if (WebAppEmojiStatusRequested) {
        console.error("[Telegram.WebApp] Emoji status is already requested");
        throw Error("WebAppEmojiStatusRequested");
      }
      WebAppEmojiStatusRequested = {
        callback
      };
      WebView.postEvent("web_app_set_emoji_status", false, status_params);
    };
    WebApp2.requestEmojiStatusAccess = function(callback) {
      if (!versionAtLeast("8.0")) {
        console.error("[Telegram.WebApp] Method requestEmojiStatusAccess is not supported in version " + webAppVersion);
        throw Error("WebAppMethodUnsupported");
      }
      if (WebAppEmojiStatusAccessRequested) {
        console.error("[Telegram.WebApp] Emoji status permission is already requested");
        throw Error("WebAppEmojiStatusAccessRequested");
      }
      WebAppEmojiStatusAccessRequested = {
        callback
      };
      WebView.postEvent("web_app_request_emoji_status_access");
    };
    WebApp2.invokeCustomMethod = function(method, params, callback) {
      invokeCustomMethod(method, params, callback);
    };
    WebApp2.ready = function() {
      WebView.postEvent("web_app_ready");
    };
    WebApp2.expand = function() {
      WebView.postEvent("web_app_expand");
    };
    WebApp2.close = function(options) {
      options = options || {};
      var req_params = {};
      if (versionAtLeast("7.6") && options.return_back) {
        req_params.return_back = true;
      }
      WebView.postEvent("web_app_close", false, req_params);
    };
    window.Telegram.WebApp = WebApp2;
    updateHeaderColor();
    updateBackgroundColor();
    updateBottomBarColor();
    setViewportHeight();
    if (initParams.tgWebAppShowSettings) {
      SettingsButton.show();
    }
    window.addEventListener("resize", onWindowResize);
    if (isIframe) {
      document.addEventListener("click", linkHandler);
    }
    WebView.onEvent("theme_changed", onThemeChanged);
    WebView.onEvent("viewport_changed", onViewportChanged);
    WebView.onEvent("safe_area_changed", onSafeAreaChanged);
    WebView.onEvent("content_safe_area_changed", onContentSafeAreaChanged);
    WebView.onEvent("visibility_changed", onVisibilityChanged);
    WebView.onEvent("invoice_closed", onInvoiceClosed);
    WebView.onEvent("popup_closed", onPopupClosed);
    WebView.onEvent("qr_text_received", onQrTextReceived);
    WebView.onEvent("scan_qr_popup_closed", onScanQrPopupClosed);
    WebView.onEvent("clipboard_text_received", onClipboardTextReceived);
    WebView.onEvent("write_access_requested", onWriteAccessRequested);
    WebView.onEvent("phone_requested", onPhoneRequested);
    WebView.onEvent("file_download_requested", onFileDownloadRequested);
    WebView.onEvent("custom_method_invoked", onCustomMethodInvoked);
    WebView.onEvent("fullscreen_changed", onFullscreenChanged);
    WebView.onEvent("fullscreen_failed", onFullscreenFailed);
    WebView.onEvent("home_screen_added", onHomeScreenAdded);
    WebView.onEvent("home_screen_checked", onHomeScreenChecked);
    WebView.onEvent("prepared_message_sent", onPreparedMessageSent);
    WebView.onEvent("prepared_message_failed", onPreparedMessageFailed);
    WebView.onEvent("emoji_status_set", onEmojiStatusSet);
    WebView.onEvent("emoji_status_failed", onEmojiStatusFailed);
    WebView.onEvent("emoji_status_access_requested", onEmojiStatusAccessRequested);
    WebView.postEvent("web_app_request_theme");
    WebView.postEvent("web_app_request_viewport");
    WebView.postEvent("web_app_request_safe_area");
    WebView.postEvent("web_app_request_content_safe_area");
  })();
  return telegramWebApps;
}
var hasRequiredSdk;
function requireSdk() {
  if (hasRequiredSdk) return sdk;
  hasRequiredSdk = 1;
  Object.defineProperty(sdk, "__esModule", { value: true });
  sdk.WebApp = void 0;
  requireTelegramWebApps();
  var telegramWindow = window;
  sdk.WebApp = telegramWindow.Telegram.WebApp;
  return sdk;
}
var hasRequiredDist$1;
function requireDist$1() {
  if (hasRequiredDist$1) return dist$1;
  hasRequiredDist$1 = 1;
  Object.defineProperty(dist$1, "__esModule", { value: true });
  var sdk_1 = /* @__PURE__ */ requireSdk();
  dist$1.default = sdk_1.WebApp;
  return dist$1;
}
var distExports = /* @__PURE__ */ requireDist$1();
const WebApp = /* @__PURE__ */ getDefaultExportFromCjs(distExports);
var reactExports = requireReact();
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredScheduler_production_min;
function requireScheduler_production_min() {
  if (hasRequiredScheduler_production_min) return scheduler_production_min;
  hasRequiredScheduler_production_min = 1;
  (function(exports) {
    function f(a, b) {
      var c = a.length;
      a.push(b);
      a: for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
        else break a;
      }
    }
    function h(a) {
      return 0 === a.length ? null : a[0];
    }
    function k(a) {
      if (0 === a.length) return null;
      var b = a[0], c = a.pop();
      if (c !== b) {
        a[0] = c;
        a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
          var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
          if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
          else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
          else break a;
        }
      }
      return b;
    }
    function g(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return 0 !== c ? c : a.id - b.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      var l = performance;
      exports.unstable_now = function() {
        return l.now();
      };
    } else {
      var p = Date, q = p.now();
      exports.unstable_now = function() {
        return p.now() - q;
      };
    }
    var r = [], t = [], u = 1, v = null, y = 3, z = false, A = false, B = false, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G(a) {
      for (var b = h(t); null !== b; ) {
        if (null === b.callback) k(t);
        else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
        else break;
        b = h(t);
      }
    }
    function H(a) {
      B = false;
      G(a);
      if (!A) if (null !== h(r)) A = true, I(J);
      else {
        var b = h(t);
        null !== b && K(H, b.startTime - a);
      }
    }
    function J(a, b) {
      A = false;
      B && (B = false, E(L), L = -1);
      z = true;
      var c = y;
      try {
        G(b);
        for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
          var d = v.callback;
          if ("function" === typeof d) {
            v.callback = null;
            y = v.priorityLevel;
            var e = d(v.expirationTime <= b);
            b = exports.unstable_now();
            "function" === typeof e ? v.callback = e : v === h(r) && k(r);
            G(b);
          } else k(r);
          v = h(r);
        }
        if (null !== v) var w = true;
        else {
          var m = h(t);
          null !== m && K(H, m.startTime - b);
          w = false;
        }
        return w;
      } finally {
        v = null, y = c, z = false;
      }
    }
    var N = false, O = null, L = -1, P = 5, Q = -1;
    function M() {
      return exports.unstable_now() - Q < P ? false : true;
    }
    function R() {
      if (null !== O) {
        var a = exports.unstable_now();
        Q = a;
        var b = true;
        try {
          b = O(true, a);
        } finally {
          b ? S() : (N = false, O = null);
        }
      } else N = false;
    }
    var S;
    if ("function" === typeof F) S = function() {
      F(R);
    };
    else if ("undefined" !== typeof MessageChannel) {
      var T = new MessageChannel(), U = T.port2;
      T.port1.onmessage = R;
      S = function() {
        U.postMessage(null);
      };
    } else S = function() {
      D(R, 0);
    };
    function I(a) {
      O = a;
      N || (N = true, S());
    }
    function K(a, b) {
      L = D(function() {
        a(exports.unstable_now());
      }, b);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a) {
      a.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A || z || (A = true, I(J));
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h(r);
    };
    exports.unstable_next = function(a) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = y;
      }
      var c = y;
      y = b;
      try {
        return a();
      } finally {
        y = c;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = y;
      y = a;
      try {
        return b();
      } finally {
        y = c;
      }
    };
    exports.unstable_scheduleCallback = function(a, b, c) {
      var d = exports.unstable_now();
      "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c + e;
      a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
      c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
      return a;
    };
    exports.unstable_shouldYield = M;
    exports.unstable_wrapCallback = function(a) {
      var b = y;
      return function() {
        var c = y;
        y = b;
        try {
          return a.apply(this, arguments);
        } finally {
          y = c;
        }
      };
    };
  })(scheduler_production_min);
  return scheduler_production_min;
}
var hasRequiredScheduler;
function requireScheduler() {
  if (hasRequiredScheduler) return scheduler.exports;
  hasRequiredScheduler = 1;
  {
    scheduler.exports = requireScheduler_production_min();
  }
  return scheduler.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactDom_production_min;
function requireReactDom_production_min() {
  if (hasRequiredReactDom_production_min) return reactDom_production_min;
  hasRequiredReactDom_production_min = 1;
  var aa = requireReact(), ca = requireScheduler();
  function p(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da = /* @__PURE__ */ new Set(), ea = {};
  function fa(a, b) {
    ha(a, b);
    ha(a + "Capture", b);
  }
  function ha(a, b) {
    ea[a] = b;
    for (a = 0; a < b.length; a++) da.add(b[a]);
  }
  var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
  function oa(a) {
    if (ja.call(ma, a)) return true;
    if (ja.call(la, a)) return false;
    if (ka.test(a)) return ma[a] = true;
    la[a] = true;
    return false;
  }
  function pa(a, b, c, d) {
    if (null !== c && 0 === c.type) return false;
    switch (typeof b) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d) return false;
        if (null !== c) return !c.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return "data-" !== a && "aria-" !== a;
      default:
        return false;
    }
  }
  function qa(a, b, c, d) {
    if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
    if (d) return false;
    if (null !== c) switch (c.type) {
      case 3:
        return !b;
      case 4:
        return false === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
    return false;
  }
  function v(a, b, c, d, e, f, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    z[a] = new v(a, 0, false, a, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var b = a[0];
    z[b] = new v(b, 1, false, a[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    z[a] = new v(a, 2, false, a, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    z[a] = new v(a, 3, true, a, null, false, false);
  });
  ["capture", "download"].forEach(function(a) {
    z[a] = new v(a, 4, false, a, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a) {
    z[a] = new v(a, 6, false, a, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a) {
    z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  function sa(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(
      ra,
      sa
    );
    z[b] = new v(b, 1, false, a, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a) {
    z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
  });
  z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a) {
    z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
  });
  function ta(a, b, c, d) {
    var e = z.hasOwnProperty(b) ? z[b] : null;
    if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
  }
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
  var Ia = Symbol.for("react.offscreen");
  var Ja = Symbol.iterator;
  function Ka(a) {
    if (null === a || "object" !== typeof a) return null;
    a = Ja && a[Ja] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var A = Object.assign, La;
  function Ma(a) {
    if (void 0 === La) try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      La = b && b[1] || "";
    }
    return "\n" + La + a;
  }
  var Na = false;
  function Oa(a, b) {
    if (!a || Na) return "";
    Na = true;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b) if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l) {
          var d = l;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l) {
          d = l;
        }
        a.call(b.prototype);
      }
      else {
        try {
          throw Error();
        } catch (l) {
          d = l;
        }
        a();
      }
    } catch (l) {
      if (l && d && "string" === typeof l.stack) {
        for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
        for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
          if (1 !== g || 1 !== h) {
            do
              if (g--, h--, 0 > h || e[g] !== f[h]) {
                var k = "\n" + e[g].replace(" at new ", " at ");
                a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                return k;
              }
            while (1 <= g && 0 <= h);
          }
          break;
        }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
  }
  function Pa(a) {
    switch (a.tag) {
      case 5:
        return Ma(a.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a = Oa(a.type, false), a;
      case 11:
        return a = Oa(a.type.render, false), a;
      case 1:
        return a = Oa(a.type, true), a;
      default:
        return "";
    }
  }
  function Qa(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if ("object" === typeof a) switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
      case Ha:
        b = a._payload;
        a = a._init;
        try {
          return Qa(a(b));
        } catch (c) {
        }
    }
    return null;
  }
  function Ra(a) {
    var b = a.type;
    switch (a.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b.displayName || "Context") + ".Consumer";
      case 10:
        return (b._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b);
      case 8:
        return b === za ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b) return b.displayName || b.name || null;
        if ("string" === typeof b) return b;
    }
    return null;
  }
  function Sa(a) {
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a;
      case "object":
        return a;
      default:
        return "";
    }
  }
  function Ta(a) {
    var b = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
  }
  function Ua(a) {
    var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
    if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
      var e = c.get, f = c.set;
      Object.defineProperty(a, b, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(a2) {
        d = "" + a2;
        f.call(this, a2);
      } });
      Object.defineProperty(a, b, { enumerable: c.enumerable });
      return { getValue: function() {
        return d;
      }, setValue: function(a2) {
        d = "" + a2;
      }, stopTracking: function() {
        a._valueTracker = null;
        delete a[b];
      } };
    }
  }
  function Va(a) {
    a._valueTracker || (a._valueTracker = Ua(a));
  }
  function Wa(a) {
    if (!a) return false;
    var b = a._valueTracker;
    if (!b) return true;
    var c = b.getValue();
    var d = "";
    a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), true) : false;
  }
  function Xa(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a) return null;
    try {
      return a.activeElement || a.body;
    } catch (b) {
      return a.body;
    }
  }
  function Ya(a, b) {
    var c = b.checked;
    return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
  }
  function Za(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
    c = Sa(null != b.value ? b.value : c);
    a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
  }
  function ab(a, b) {
    b = b.checked;
    null != b && ta(a, "checked", b, false);
  }
  function bb(a, b) {
    ab(a, b);
    var c = Sa(b.value), d = b.type;
    if (null != c) if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
    else if ("submit" === d || "reset" === d) {
      a.removeAttribute("value");
      return;
    }
    b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
  }
  function db(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
      var d = b.type;
      if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
      b = "" + a._wrapperState.initialValue;
      c || b === a.value || (a.value = b);
      a.defaultValue = b;
    }
    c = a.name;
    "" !== c && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c && (a.name = c);
  }
  function cb(a, b, c) {
    if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
  }
  var eb = Array.isArray;
  function fb(a, b, c, d) {
    a = a.options;
    if (b) {
      b = {};
      for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
      for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
    } else {
      c = "" + Sa(c);
      b = null;
      for (e = 0; e < a.length; e++) {
        if (a[e].value === c) {
          a[e].selected = true;
          d && (a[e].defaultSelected = true);
          return;
        }
        null !== b || a[e].disabled || (b = a[e]);
      }
      null !== b && (b.selected = true);
    }
  }
  function gb(a, b) {
    if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
    return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
  }
  function hb(a, b) {
    var c = b.value;
    if (null == c) {
      c = b.children;
      b = b.defaultValue;
      if (null != c) {
        if (null != b) throw Error(p(92));
        if (eb(c)) {
          if (1 < c.length) throw Error(p(93));
          c = c[0];
        }
        b = c;
      }
      null == b && (b = "");
      c = b;
    }
    a._wrapperState = { initialValue: Sa(c) };
  }
  function ib(a, b) {
    var c = Sa(b.value), d = Sa(b.defaultValue);
    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = "" + d);
  }
  function jb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
  }
  function kb(a) {
    switch (a) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lb(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
  }
  var mb, nb = function(a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
      MSApp.execUnsafeLocalFunction(function() {
        return a(b, c, d, e);
      });
    } : a;
  }(function(a, b) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
      for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
      for (; b.firstChild; ) a.appendChild(b.firstChild);
    }
  });
  function ob(a, b) {
    if (b) {
      var c = a.firstChild;
      if (c && c === a.lastChild && 3 === c.nodeType) {
        c.nodeValue = b;
        return;
      }
    }
    a.textContent = b;
  }
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a) {
    qb.forEach(function(b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      pb[b] = pb[a];
    });
  });
  function rb(a, b, c) {
    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
  }
  function sb(a, b) {
    a = a.style;
    for (var c in b) if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
  }
  var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ub(a, b) {
    if (b) {
      if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
      if (null != b.dangerouslySetInnerHTML) {
        if (null != b.children) throw Error(p(60));
        if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
      }
      if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
    }
  }
  function vb(a, b) {
    if (-1 === a.indexOf("-")) return "string" === typeof b.is;
    switch (a) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var wb = null;
  function xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
  }
  var yb = null, zb = null, Ab = null;
  function Bb(a) {
    if (a = Cb(a)) {
      if ("function" !== typeof yb) throw Error(p(280));
      var b = a.stateNode;
      b && (b = Db(b), yb(a.stateNode, a.type, b));
    }
  }
  function Eb(a) {
    zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
  }
  function Fb() {
    if (zb) {
      var a = zb, b = Ab;
      Ab = zb = null;
      Bb(a);
      if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
    }
  }
  function Gb(a, b) {
    return a(b);
  }
  function Hb() {
  }
  var Ib = false;
  function Jb(a, b, c) {
    if (Ib) return a(b, c);
    Ib = true;
    try {
      return Gb(a, b, c);
    } finally {
      if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
    }
  }
  function Kb(a, b) {
    var c = a.stateNode;
    if (null === c) return null;
    var d = Db(c);
    if (null === d) return null;
    c = d[b];
    a: switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
    if (a) return null;
    if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
    return c;
  }
  var Lb = false;
  if (ia) try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
  function Nb(a, b, c, d, e, f, g, h, k) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      b.apply(c, l);
    } catch (m) {
      this.onError(m);
    }
  }
  var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
    Ob = true;
    Pb = a;
  } };
  function Tb(a, b, c, d, e, f, g, h, k) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  }
  function Ub(a, b, c, d, e, f, g, h, k) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l = Pb;
        Ob = false;
        Pb = null;
      } else throw Error(p(198));
      Qb || (Qb = true, Rb = l);
    }
  }
  function Vb(a) {
    var b = a, c = a;
    if (a.alternate) for (; b.return; ) b = b.return;
    else {
      a = b;
      do
        b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
      while (a);
    }
    return 3 === b.tag ? c : null;
  }
  function Wb(a) {
    if (13 === a.tag) {
      var b = a.memoizedState;
      null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
      if (null !== b) return b.dehydrated;
    }
    return null;
  }
  function Xb(a) {
    if (Vb(a) !== a) throw Error(p(188));
  }
  function Yb(a) {
    var b = a.alternate;
    if (!b) {
      b = Vb(a);
      if (null === b) throw Error(p(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b; ; ) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;
      if (null === f) {
        d = e.return;
        if (null !== d) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f.child) {
        for (f = e.child; f; ) {
          if (f === c) return Xb(e), a;
          if (f === d) return Xb(e), b;
          f = f.sibling;
        }
        throw Error(p(188));
      }
      if (c.return !== d.return) c = e, d = f;
      else {
        for (var g = false, h = e.child; h; ) {
          if (h === c) {
            g = true;
            c = e;
            d = f;
            break;
          }
          if (h === d) {
            g = true;
            d = e;
            c = f;
            break;
          }
          h = h.sibling;
        }
        if (!g) {
          for (h = f.child; h; ) {
            if (h === c) {
              g = true;
              c = f;
              d = e;
              break;
            }
            if (h === d) {
              g = true;
              d = f;
              c = e;
              break;
            }
            h = h.sibling;
          }
          if (!g) throw Error(p(189));
        }
      }
      if (c.alternate !== d) throw Error(p(190));
    }
    if (3 !== c.tag) throw Error(p(188));
    return c.stateNode.current === c ? a : b;
  }
  function Zb(a) {
    a = Yb(a);
    return null !== a ? $b(a) : null;
  }
  function $b(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for (a = a.child; null !== a; ) {
      var b = $b(a);
      if (null !== b) return b;
      a = a.sibling;
    }
    return null;
  }
  var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
  function mc(a) {
    if (lc && "function" === typeof lc.onCommitFiberRoot) try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
  }
  var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
  function nc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
  }
  var rc = 64, sc = 4194304;
  function tc(a) {
    switch (a & -a) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a;
    }
  }
  function uc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
    if (0 !== g) {
      var h = g & ~e;
      0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
    } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
    if (0 === d) return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
  }
  function vc(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 4:
        return b + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wc(a, b) {
    for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
      var g = 31 - oc(f), h = 1 << g, k = e[g];
      if (-1 === k) {
        if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
      } else k <= b && (a.expiredLanes |= h);
      f &= ~h;
    }
  }
  function xc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var a = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a;
  }
  function zc(a) {
    for (var b = [], c = 0; 31 > c; c++) b.push(a);
    return b;
  }
  function Ac(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - oc(b);
    a[b] = c;
  }
  function Bc(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for (a = a.expirationTimes; 0 < c; ) {
      var e = 31 - oc(c), f = 1 << e;
      b[e] = 0;
      d[e] = -1;
      a[e] = -1;
      c &= ~f;
    }
  }
  function Cc(a, b) {
    var c = a.entangledLanes |= b;
    for (a = a.entanglements; c; ) {
      var d = 31 - oc(c), e = 1 << d;
      e & b | a[d] & b && (a[d] |= b);
      c &= ~e;
    }
  }
  var C = 0;
  function Dc(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sc(a, b) {
    switch (a) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b.pointerId);
    }
  }
  function Tc(a, b, c, d, e, f) {
    if (null === a || a.nativeEvent !== f) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    null !== e && -1 === b.indexOf(e) && b.push(e);
    return a;
  }
  function Uc(a, b, c, d, e) {
    switch (b) {
      case "focusin":
        return Lc = Tc(Lc, a, b, c, d, e), true;
      case "dragenter":
        return Mc = Tc(Mc, a, b, c, d, e), true;
      case "mouseover":
        return Nc = Tc(Nc, a, b, c, d, e), true;
      case "pointerover":
        var f = e.pointerId;
        Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
        return true;
      case "gotpointercapture":
        return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
    }
    return false;
  }
  function Vc(a) {
    var b = Wc(a.target);
    if (null !== b) {
      var c = Vb(b);
      if (null !== c) {
        if (b = c.tag, 13 === b) {
          if (b = Wb(c), null !== b) {
            a.blockedOn = b;
            Ic(a.priority, function() {
              Gc(c);
            });
            return;
          }
        } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
          a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a.blockedOn = null;
  }
  function Xc(a) {
    if (null !== a.blockedOn) return false;
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (null === c) {
        c = a.nativeEvent;
        var d = new c.constructor(c.type, c);
        wb = d;
        c.target.dispatchEvent(d);
        wb = null;
      } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
      b.shift();
    }
    return true;
  }
  function Zc(a, b, c) {
    Xc(a) && c.delete(b);
  }
  function $c() {
    Jc = false;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  }
  function ad(a, b) {
    a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  }
  function bd(a) {
    function b(b2) {
      return ad(b2, a);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a);
      for (var c = 1; c < Kc.length; c++) {
        var d = Kc[c];
        d.blockedOn === a && (d.blockedOn = null);
      }
    }
    null !== Lc && ad(Lc, a);
    null !== Mc && ad(Mc, a);
    null !== Nc && ad(Nc, a);
    Oc.forEach(b);
    Pc.forEach(b);
    for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
    for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
  }
  var cd = ua.ReactCurrentBatchConfig, dd = true;
  function ed(a, b, c, d) {
    var e = C, f = cd.transition;
    cd.transition = null;
    try {
      C = 1, fd(a, b, c, d);
    } finally {
      C = e, cd.transition = f;
    }
  }
  function gd(a, b, c, d) {
    var e = C, f = cd.transition;
    cd.transition = null;
    try {
      C = 4, fd(a, b, c, d);
    } finally {
      C = e, cd.transition = f;
    }
  }
  function fd(a, b, c, d) {
    if (dd) {
      var e = Yc(a, b, c, d);
      if (null === e) hd(a, b, d, id, c), Sc(a, d);
      else if (Uc(e, a, b, c, d)) d.stopPropagation();
      else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
        for (; null !== e; ) {
          var f = Cb(e);
          null !== f && Ec(f);
          f = Yc(a, b, c, d);
          null === f && hd(a, b, d, id, c);
          if (f === e) break;
          e = f;
        }
        null !== e && d.stopPropagation();
      } else hd(a, b, d, null, c);
    }
  }
  var id = null;
  function Yc(a, b, c, d) {
    id = null;
    a = xb(d);
    a = Wc(a);
    if (null !== a) if (b = Vb(a), null === b) a = null;
    else if (c = b.tag, 13 === c) {
      a = Wb(b);
      if (null !== a) return a;
      a = null;
    } else if (3 === c) {
      if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
      a = null;
    } else b !== a && (a = null);
    id = a;
    return null;
  }
  function jd(a) {
    switch (a) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kd = null, ld = null, md = null;
  function nd() {
    if (md) return md;
    var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
    for (a = 0; a < c && b[a] === e[a]; a++) ;
    var g = c - a;
    for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
    return md = e.slice(a, 1 < d ? 1 - d : void 0);
  }
  function od(a) {
    var b = a.keyCode;
    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a) {
    function b(b2, d, e, f, g) {
      this._reactName = b2;
      this._targetInst = e;
      this.type = d;
      this.nativeEvent = f;
      this.target = g;
      this.currentTarget = null;
      for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
      this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A(b.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a2 = this.nativeEvent;
      a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a2 = this.nativeEvent;
      a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
    return a.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
    return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
  }, movementX: function(a) {
    if ("movementX" in a) return a.movementX;
    a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
    return wd;
  }, movementY: function(a) {
    return "movementY" in a ? a.movementY : xd;
  } }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  } }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = A({}, ud, { key: function(a) {
    if (a.key) {
      var b = Md[a.key] || a.key;
      if ("Unidentified" !== b) return b;
    }
    return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
    return "keypress" === a.type ? od(a) : 0;
  }, keyCode: function(a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }, which: function(a) {
    return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  } }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
    deltaX: function(a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
  ia && "documentMode" in document && (be = document.documentMode);
  var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
  function ge(a, b) {
    switch (a) {
      case "keyup":
        return -1 !== $d.indexOf(b.keyCode);
      case "keydown":
        return 229 !== b.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he(a) {
    a = a.detail;
    return "object" === typeof a && "data" in a ? a.data : null;
  }
  var ie = false;
  function je(a, b) {
    switch (a) {
      case "compositionend":
        return he(b);
      case "keypress":
        if (32 !== b.which) return null;
        fe = true;
        return ee;
      case "textInput":
        return a = b.data, a === ee && fe ? null : a;
      default:
        return null;
    }
  }
  function ke(a, b) {
    if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
    switch (a) {
      case "paste":
        return null;
      case "keypress":
        if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
          if (b.char && 1 < b.char.length) return b.char;
          if (b.which) return String.fromCharCode(b.which);
        }
        return null;
      case "compositionend":
        return de && "ko" !== b.locale ? null : b.data;
      default:
        return null;
    }
  }
  var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
  }
  function ne(a, b, c, d) {
    Eb(d);
    b = oe(b, "onChange");
    0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
  }
  var pe = null, qe = null;
  function re(a) {
    se(a, 0);
  }
  function te(a) {
    var b = ue(a);
    if (Wa(b)) return a;
  }
  function ve(a, b) {
    if ("change" === a) return b;
  }
  var we = false;
  if (ia) {
    var xe;
    if (ia) {
      var ye = "oninput" in document;
      if (!ye) {
        var ze = document.createElement("div");
        ze.setAttribute("oninput", "return;");
        ye = "function" === typeof ze.oninput;
      }
      xe = ye;
    } else xe = false;
    we = xe && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae() {
    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
  }
  function Be(a) {
    if ("value" === a.propertyName && te(qe)) {
      var b = [];
      ne(b, qe, a, xb(a));
      Jb(re, b);
    }
  }
  function Ce(a, b, c) {
    "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
  }
  function De(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
  }
  function Ee(a, b) {
    if ("click" === a) return te(b);
  }
  function Fe(a, b) {
    if ("input" === a || "change" === a) return te(b);
  }
  function Ge(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var He = "function" === typeof Object.is ? Object.is : Ge;
  function Ie(a, b) {
    if (He(a, b)) return true;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length) return false;
    for (d = 0; d < c.length; d++) {
      var e = c[d];
      if (!ja.call(b, e) || !He(a[e], b[e])) return false;
    }
    return true;
  }
  function Je(a) {
    for (; a && a.firstChild; ) a = a.firstChild;
    return a;
  }
  function Ke(a, b) {
    var c = Je(a);
    a = 0;
    for (var d; c; ) {
      if (3 === c.nodeType) {
        d = a + c.textContent.length;
        if (a <= b && d >= b) return { node: c, offset: b - a };
        a = d;
      }
      a: {
        for (; c; ) {
          if (c.nextSibling) {
            c = c.nextSibling;
            break a;
          }
          c = c.parentNode;
        }
        c = void 0;
      }
      c = Je(c);
    }
  }
  function Le(a, b) {
    return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
  }
  function Me() {
    for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
      try {
        var c = "string" === typeof b.contentWindow.location.href;
      } catch (d) {
        c = false;
      }
      if (c) a = b.contentWindow;
      else break;
      b = Xa(a.document);
    }
    return b;
  }
  function Ne(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
  }
  function Oe(a) {
    var b = Me(), c = a.focusedElem, d = a.selectionRange;
    if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
      if (null !== d && Ne(c)) {
        if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
        else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
          a = a.getSelection();
          var e = c.textContent.length, f = Math.min(d.start, e);
          d = void 0 === d.end ? f : Math.min(d.end, e);
          !a.extend && f > d && (e = d, d = f, f = e);
          e = Ke(c, f);
          var g = Ke(
            c,
            d
          );
          e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
        }
      }
      b = [];
      for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      "function" === typeof c.focus && c.focus();
      for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
  }
  var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
  function Ue(a, b, c) {
    var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
    Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
  }
  function Ve(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
  }
  var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
  ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
  function Ze(a) {
    if (Xe[a]) return Xe[a];
    if (!We[a]) return a;
    var b = We[a], c;
    for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
    return a;
  }
  var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ff(a, b) {
    df.set(a, b);
    fa(b, [a]);
  }
  for (var gf = 0; gf < ef.length; gf++) {
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  ff($e, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  function nf(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = c;
    Ub(d, b, void 0, a);
    a.currentTarget = null;
  }
  function se(a, b) {
    b = 0 !== (b & 4);
    for (var c = 0; c < a.length; c++) {
      var d = a[c], e = d.event;
      d = d.listeners;
      a: {
        var f = void 0;
        if (b) for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k = h.instance, l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped()) break a;
          nf(e, h, l);
          f = k;
        }
        else for (g = 0; g < d.length; g++) {
          h = d[g];
          k = h.instance;
          l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped()) break a;
          nf(e, h, l);
          f = k;
        }
      }
    }
    if (Qb) throw a = Rb, Qb = false, Rb = null, a;
  }
  function D(a, b) {
    var c = b[of];
    void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
    var d = a + "__bubble";
    c.has(d) || (pf(b, a, 2, false), c.add(d));
  }
  function qf(a, b, c) {
    var d = 0;
    b && (d |= 4);
    pf(c, a, d, b);
  }
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(a) {
    if (!a[rf]) {
      a[rf] = true;
      da.forEach(function(b2) {
        "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
      });
      var b = 9 === a.nodeType ? a : a.ownerDocument;
      null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
    }
  }
  function pf(a, b, c, d) {
    switch (jd(b)) {
      case 1:
        var e = ed;
        break;
      case 4:
        e = gd;
        break;
      default:
        e = fd;
    }
    c = e.bind(null, b, c, a);
    e = void 0;
    !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
    d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
  }
  function hd(a, b, c, d, e) {
    var f = d;
    if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
      if (null === d) return;
      var g = d.tag;
      if (3 === g || 4 === g) {
        var h = d.stateNode.containerInfo;
        if (h === e || 8 === h.nodeType && h.parentNode === e) break;
        if (4 === g) for (g = d.return; null !== g; ) {
          var k = g.tag;
          if (3 === k || 4 === k) {
            if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
          }
          g = g.return;
        }
        for (; null !== h; ) {
          g = Wc(h);
          if (null === g) return;
          k = g.tag;
          if (5 === k || 6 === k) {
            d = f = g;
            continue a;
          }
          h = h.parentNode;
        }
      }
      d = d.return;
    }
    Jb(function() {
      var d2 = f, e2 = xb(c), g2 = [];
      a: {
        var h4 = df.get(a);
        if (void 0 !== h4) {
          var k2 = td, n = a;
          switch (a) {
            case "keypress":
              if (0 === od(c)) break a;
            case "keydown":
            case "keyup":
              k2 = Rd;
              break;
            case "focusin":
              n = "focus";
              k2 = Fd;
              break;
            case "focusout":
              n = "blur";
              k2 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k2 = Fd;
              break;
            case "click":
              if (2 === c.button) break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k2 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k2 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k2 = Vd;
              break;
            case $e:
            case af:
            case bf:
              k2 = Hd;
              break;
            case cf:
              k2 = Xd;
              break;
            case "scroll":
              k2 = vd;
              break;
            case "wheel":
              k2 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k2 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k2 = Td;
          }
          var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h4 ? h4 + "Capture" : null : h4;
          t = [];
          for (var w = d2, u; null !== w; ) {
            u = w;
            var F = u.stateNode;
            5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
            if (J) break;
            w = w.return;
          }
          0 < t.length && (h4 = new k2(h4, n, null, c, e2), g2.push({ event: h4, listeners: t }));
        }
      }
      if (0 === (b & 7)) {
        a: {
          h4 = "mouseover" === a || "pointerover" === a;
          k2 = "mouseout" === a || "pointerout" === a;
          if (h4 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
          if (k2 || h4) {
            h4 = e2.window === e2 ? e2 : (h4 = e2.ownerDocument) ? h4.defaultView || h4.parentWindow : window;
            if (k2) {
              if (n = c.relatedTarget || c.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
            } else k2 = null, n = d2;
            if (k2 !== n) {
              t = Bd;
              F = "onMouseLeave";
              x = "onMouseEnter";
              w = "mouse";
              if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
              J = null == k2 ? h4 : ue(k2);
              u = null == n ? h4 : ue(n);
              h4 = new t(F, w + "leave", k2, c, e2);
              h4.target = J;
              h4.relatedTarget = u;
              F = null;
              Wc(e2) === d2 && (t = new t(x, w + "enter", n, c, e2), t.target = u, t.relatedTarget = J, F = t);
              J = F;
              if (k2 && n) b: {
                t = k2;
                x = n;
                w = 0;
                for (u = t; u; u = vf(u)) w++;
                u = 0;
                for (F = x; F; F = vf(F)) u++;
                for (; 0 < w - u; ) t = vf(t), w--;
                for (; 0 < u - w; ) x = vf(x), u--;
                for (; w--; ) {
                  if (t === x || null !== x && t === x.alternate) break b;
                  t = vf(t);
                  x = vf(x);
                }
                t = null;
              }
              else t = null;
              null !== k2 && wf(g2, h4, k2, t, false);
              null !== n && null !== J && wf(g2, J, n, t, true);
            }
          }
        }
        a: {
          h4 = d2 ? ue(d2) : window;
          k2 = h4.nodeName && h4.nodeName.toLowerCase();
          if ("select" === k2 || "input" === k2 && "file" === h4.type) var na = ve;
          else if (me(h4)) if (we) na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
          else (k2 = h4.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h4.type || "radio" === h4.type) && (na = Ee);
          if (na && (na = na(a, d2))) {
            ne(g2, na, c, e2);
            break a;
          }
          xa && xa(a, h4, d2);
          "focusout" === a && (xa = h4._wrapperState) && xa.controlled && "number" === h4.type && cb(h4, "number", h4.value);
        }
        xa = d2 ? ue(d2) : window;
        switch (a) {
          case "focusin":
            if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
            break;
          case "focusout":
            Se = Re = Qe = null;
            break;
          case "mousedown":
            Te = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te = false;
            Ue(g2, c, e2);
            break;
          case "selectionchange":
            if (Pe) break;
          case "keydown":
          case "keyup":
            Ue(g2, c, e2);
        }
        var $a;
        if (ae) b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
        else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
        ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
        if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
      }
      se(g2, b);
    });
  }
  function tf(a, b, c) {
    return { instance: a, listener: b, currentTarget: c };
  }
  function oe(a, b) {
    for (var c = b + "Capture", d = []; null !== a; ) {
      var e = a, f = e.stateNode;
      5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
      a = a.return;
    }
    return d;
  }
  function vf(a) {
    if (null === a) return null;
    do
      a = a.return;
    while (a && 5 !== a.tag);
    return a ? a : null;
  }
  function wf(a, b, c, d, e) {
    for (var f = b._reactName, g = []; null !== c && c !== d; ) {
      var h = c, k = h.alternate, l = h.stateNode;
      if (null !== k && k === d) break;
      5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
      c = c.return;
    }
    0 !== g.length && a.push({ event: b, listeners: g });
  }
  var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
  function zf(a) {
    return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
  }
  function Af(a, b, c) {
    b = zf(b);
    if (zf(a) !== b && c) throw Error(p(425));
  }
  function Bf() {
  }
  var Cf = null, Df = null;
  function Ef(a, b) {
    return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
  }
  var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
    return Hf.resolve(null).then(a).catch(If);
  } : Ff;
  function If(a) {
    setTimeout(function() {
      throw a;
    });
  }
  function Kf(a, b) {
    var c = b, d = 0;
    do {
      var e = c.nextSibling;
      a.removeChild(c);
      if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e);
          bd(b);
          return;
        }
        d--;
      } else "$" !== c && "$?" !== c && "$!" !== c || d++;
      c = e;
    } while (c);
    bd(b);
  }
  function Lf(a) {
    for (; null != a; a = a.nextSibling) {
      var b = a.nodeType;
      if (1 === b || 3 === b) break;
      if (8 === b) {
        b = a.data;
        if ("$" === b || "$!" === b || "$?" === b) break;
        if ("/$" === b) return null;
      }
    }
    return a;
  }
  function Mf(a) {
    a = a.previousSibling;
    for (var b = 0; a; ) {
      if (8 === a.nodeType) {
        var c = a.data;
        if ("$" === c || "$!" === c || "$?" === c) {
          if (0 === b) return a;
          b--;
        } else "/$" === c && b++;
      }
      a = a.previousSibling;
    }
    return null;
  }
  var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
  function Wc(a) {
    var b = a[Of];
    if (b) return b;
    for (var c = a.parentNode; c; ) {
      if (b = c[uf] || c[Of]) {
        c = b.alternate;
        if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
          if (c = a[Of]) return c;
          a = Mf(a);
        }
        return b;
      }
      a = c;
      c = a.parentNode;
    }
    return null;
  }
  function Cb(a) {
    a = a[Of] || a[uf];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
  }
  function ue(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error(p(33));
  }
  function Db(a) {
    return a[Pf] || null;
  }
  var Sf = [], Tf = -1;
  function Uf(a) {
    return { current: a };
  }
  function E(a) {
    0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
  }
  function G(a, b) {
    Tf++;
    Sf[Tf] = a.current;
    a.current = b;
  }
  var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
  function Yf(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Vf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f;
    for (f in c) e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function Zf(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function $f() {
    E(Wf);
    E(H);
  }
  function ag(a, b, c) {
    if (H.current !== Vf) throw Error(p(168));
    G(H, b);
    G(Wf, c);
  }
  function bg(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
    return A({}, c, d);
  }
  function cg(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H.current;
    G(H, a);
    G(Wf, Wf.current);
    return true;
  }
  function dg(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(p(169));
    c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
    G(Wf, c);
  }
  var eg = null, fg = false, gg = false;
  function hg(a) {
    null === eg ? eg = [a] : eg.push(a);
  }
  function ig(a) {
    fg = true;
    hg(a);
  }
  function jg() {
    if (!gg && null !== eg) {
      gg = true;
      var a = 0, b = C;
      try {
        var c = eg;
        for (C = 1; a < c.length; a++) {
          var d = c[a];
          do
            d = d(true);
          while (null !== d);
        }
        eg = null;
        fg = false;
      } catch (e) {
        throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
      } finally {
        C = b, gg = false;
      }
    }
    return null;
  }
  var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
  function tg(a, b) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a;
    ng = b;
  }
  function ug(a, b, c) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a;
    var d = rg;
    a = sg;
    var e = 32 - oc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - oc(b) + e;
    if (30 < f) {
      var g = e - e % 5;
      f = (d & (1 << g) - 1).toString(32);
      d >>= g;
      e -= g;
      rg = 1 << 32 - oc(b) + e | c << e | d;
      sg = f + a;
    } else rg = 1 << f | c << e | d, sg = a;
  }
  function vg(a) {
    null !== a.return && (tg(a, 1), ug(a, 1, 0));
  }
  function wg(a) {
    for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  }
  var xg = null, yg = null, I = false, zg = null;
  function Ag(a, b) {
    var c = Bg(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
  }
  function Cg(a, b) {
    switch (a.tag) {
      case 5:
        var c = a.type;
        b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
        return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
      case 6:
        return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
      case 13:
        return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
      default:
        return false;
    }
  }
  function Dg(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
  }
  function Eg(a) {
    if (I) {
      var b = yg;
      if (b) {
        var c = b;
        if (!Cg(a, b)) {
          if (Dg(a)) throw Error(p(418));
          b = Lf(c.nextSibling);
          var d = xg;
          b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
        }
      } else {
        if (Dg(a)) throw Error(p(418));
        a.flags = a.flags & -4097 | 2;
        I = false;
        xg = a;
      }
    }
  }
  function Fg(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
    xg = a;
  }
  function Gg(a) {
    if (a !== xg) return false;
    if (!I) return Fg(a), I = true, false;
    var b;
    (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
    if (b && (b = yg)) {
      if (Dg(a)) throw Hg(), Error(p(418));
      for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
    }
    Fg(a);
    if (13 === a.tag) {
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(p(317));
      a: {
        a = a.nextSibling;
        for (b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("/$" === c) {
              if (0 === b) {
                yg = Lf(a.nextSibling);
                break a;
              }
              b--;
            } else "$" !== c && "$!" !== c && "$?" !== c || b++;
          }
          a = a.nextSibling;
        }
        yg = null;
      }
    } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
    return true;
  }
  function Hg() {
    for (var a = yg; a; ) a = Lf(a.nextSibling);
  }
  function Ig() {
    yg = xg = null;
    I = false;
  }
  function Jg(a) {
    null === zg ? zg = [a] : zg.push(a);
  }
  var Kg = ua.ReactCurrentBatchConfig;
  function Lg(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (1 !== c.tag) throw Error(p(309));
          var d = c.stateNode;
        }
        if (!d) throw Error(p(147, a));
        var e = d, f = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
        b = function(a2) {
          var b2 = e.refs;
          null === a2 ? delete b2[f] : b2[f] = a2;
        };
        b._stringRef = f;
        return b;
      }
      if ("string" !== typeof a) throw Error(p(284));
      if (!c._owner) throw Error(p(290, a));
    }
    return a;
  }
  function Mg(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
  }
  function Ng(a) {
    var b = a._init;
    return b(a._payload);
  }
  function Og(a) {
    function b(b2, c2) {
      if (a) {
        var d2 = b2.deletions;
        null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
      }
    }
    function c(c2, d2) {
      if (!a) return null;
      for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
      return null;
    }
    function d(a2, b2) {
      for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
      return a2;
    }
    function e(a2, b2) {
      a2 = Pg(a2, b2);
      a2.index = 0;
      a2.sibling = null;
      return a2;
    }
    function f(b2, c2, d2) {
      b2.index = d2;
      if (!a) return b2.flags |= 1048576, c2;
      d2 = b2.alternate;
      if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
      b2.flags |= 2;
      return c2;
    }
    function g(b2) {
      a && null === b2.alternate && (b2.flags |= 2);
      return b2;
    }
    function h(a2, b2, c2, d2) {
      if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function k(a2, b2, c2, d2) {
      var f2 = c2.type;
      if (f2 === ya) return m(a2, b2, c2.props.children, d2, c2.key);
      if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && Ng(f2) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
      d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
      d2.ref = Lg(a2, b2, c2);
      d2.return = a2;
      return d2;
    }
    function l(a2, b2, c2, d2) {
      if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2.children || []);
      b2.return = a2;
      return b2;
    }
    function m(a2, b2, c2, d2, f2) {
      if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function q(a2, b2, c2) {
      if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
      if ("object" === typeof b2 && null !== b2) {
        switch (b2.$$typeof) {
          case va:
            return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
          case wa:
            return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
          case Ha:
            var d2 = b2._init;
            return q(a2, d2(b2._payload), c2);
        }
        if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
        Mg(a2, b2);
      }
      return null;
    }
    function r(a2, b2, c2, d2) {
      var e2 = null !== b2 ? b2.key : null;
      if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
      if ("object" === typeof c2 && null !== c2) {
        switch (c2.$$typeof) {
          case va:
            return c2.key === e2 ? k(a2, b2, c2, d2) : null;
          case wa:
            return c2.key === e2 ? l(a2, b2, c2, d2) : null;
          case Ha:
            return e2 = c2._init, r(
              a2,
              b2,
              e2(c2._payload),
              d2
            );
        }
        if (eb(c2) || Ka(c2)) return null !== e2 ? null : m(a2, b2, c2, d2, null);
        Mg(a2, c2);
      }
      return null;
    }
    function y(a2, b2, c2, d2, e2) {
      if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
      if ("object" === typeof d2 && null !== d2) {
        switch (d2.$$typeof) {
          case va:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
          case wa:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
          case Ha:
            var f2 = d2._init;
            return y(a2, b2, c2, f2(d2._payload), e2);
        }
        if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
        Mg(b2, d2);
      }
      return null;
    }
    function n(e2, g2, h4, k2) {
      for (var l2 = null, m2 = null, u = g2, w = g2 = 0, x = null; null !== u && w < h4.length; w++) {
        u.index > w ? (x = u, u = null) : x = u.sibling;
        var n2 = r(e2, u, h4[w], k2);
        if (null === n2) {
          null === u && (u = x);
          break;
        }
        a && u && null === n2.alternate && b(e2, u);
        g2 = f(n2, g2, w);
        null === m2 ? l2 = n2 : m2.sibling = n2;
        m2 = n2;
        u = x;
      }
      if (w === h4.length) return c(e2, u), I && tg(e2, w), l2;
      if (null === u) {
        for (; w < h4.length; w++) u = q(e2, h4[w], k2), null !== u && (g2 = f(u, g2, w), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
        I && tg(e2, w);
        return l2;
      }
      for (u = d(e2, u); w < h4.length; w++) x = y(u, e2, w, h4[w], k2), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g2 = f(x, g2, w), null === m2 ? l2 = x : m2.sibling = x, m2 = x);
      a && u.forEach(function(a2) {
        return b(e2, a2);
      });
      I && tg(e2, w);
      return l2;
    }
    function t(e2, g2, h4, k2) {
      var l2 = Ka(h4);
      if ("function" !== typeof l2) throw Error(p(150));
      h4 = l2.call(h4);
      if (null == h4) throw Error(p(151));
      for (var u = l2 = null, m2 = g2, w = g2 = 0, x = null, n2 = h4.next(); null !== m2 && !n2.done; w++, n2 = h4.next()) {
        m2.index > w ? (x = m2, m2 = null) : x = m2.sibling;
        var t2 = r(e2, m2, n2.value, k2);
        if (null === t2) {
          null === m2 && (m2 = x);
          break;
        }
        a && m2 && null === t2.alternate && b(e2, m2);
        g2 = f(t2, g2, w);
        null === u ? l2 = t2 : u.sibling = t2;
        u = t2;
        m2 = x;
      }
      if (n2.done) return c(
        e2,
        m2
      ), I && tg(e2, w), l2;
      if (null === m2) {
        for (; !n2.done; w++, n2 = h4.next()) n2 = q(e2, n2.value, k2), null !== n2 && (g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
        I && tg(e2, w);
        return l2;
      }
      for (m2 = d(e2, m2); !n2.done; w++, n2 = h4.next()) n2 = y(m2, e2, w, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
      a && m2.forEach(function(a2) {
        return b(e2, a2);
      });
      I && tg(e2, w);
      return l2;
    }
    function J(a2, d2, f2, h4) {
      "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
      if ("object" === typeof f2 && null !== f2) {
        switch (f2.$$typeof) {
          case va:
            a: {
              for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                if (l2.key === k2) {
                  k2 = f2.type;
                  if (k2 === ya) {
                    if (7 === l2.tag) {
                      c(a2, l2.sibling);
                      d2 = e(l2, f2.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                  } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l2.type) {
                    c(a2, l2.sibling);
                    d2 = e(l2, f2.props);
                    d2.ref = Lg(a2, l2, f2);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                  c(a2, l2);
                  break;
                } else b(a2, l2);
                l2 = l2.sibling;
              }
              f2.type === ya ? (d2 = Tg(f2.props.children, a2.mode, h4, f2.key), d2.return = a2, a2 = d2) : (h4 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h4), h4.ref = Lg(a2, d2, f2), h4.return = a2, a2 = h4);
            }
            return g(a2);
          case wa:
            a: {
              for (l2 = f2.key; null !== d2; ) {
                if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f2.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
                else b(a2, d2);
                d2 = d2.sibling;
              }
              d2 = Sg(f2, a2.mode, h4);
              d2.return = a2;
              a2 = d2;
            }
            return g(a2);
          case Ha:
            return l2 = f2._init, J(a2, d2, l2(f2._payload), h4);
        }
        if (eb(f2)) return n(a2, d2, f2, h4);
        if (Ka(f2)) return t(a2, d2, f2, h4);
        Mg(a2, f2);
      }
      return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f2, a2.mode, h4), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
    }
    return J;
  }
  var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
  function $g() {
    Zg = Yg = Xg = null;
  }
  function ah(a) {
    var b = Wg.current;
    E(Wg);
    a._currentValue = b;
  }
  function bh(a, b, c) {
    for (; null !== a; ) {
      var d = a.alternate;
      (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
      if (a === c) break;
      a = a.return;
    }
  }
  function ch(a, b) {
    Xg = a;
    Zg = Yg = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
  }
  function eh(a) {
    var b = a._currentValue;
    if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
      if (null === Xg) throw Error(p(308));
      Yg = a;
      Xg.dependencies = { lanes: 0, firstContext: a };
    } else Yg = Yg.next = a;
    return b;
  }
  var fh = null;
  function gh(a) {
    null === fh ? fh = [a] : fh.push(a);
  }
  function hh(a, b, c, d) {
    var e = b.interleaved;
    null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return ih(a, d);
  }
  function ih(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    return 3 === c.tag ? c.stateNode : null;
  }
  var jh = false;
  function kh(a) {
    a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function lh(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
  }
  function mh(a, b) {
    return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
  }
  function nh(a, b, c) {
    var d = a.updateQueue;
    if (null === d) return null;
    d = d.shared;
    if (0 !== (K & 2)) {
      var e = d.pending;
      null === e ? b.next = b : (b.next = e.next, e.next = b);
      d.pending = b;
      return ih(a, c);
    }
    e = d.interleaved;
    null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return ih(a, c);
  }
  function oh(a, b, c) {
    b = b.updateQueue;
    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  }
  function ph(a, b) {
    var c = a.updateQueue, d = a.alternate;
    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null, f = null;
      c = c.firstBaseUpdate;
      if (null !== c) {
        do {
          var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          null === f ? e = f = g : f = f.next = g;
          c = c.next;
        } while (null !== c);
        null === f ? e = f = b : f = f.next = b;
      } else e = f = b;
      c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
      a.updateQueue = c;
      return;
    }
    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }
  function qh(a, b, c, d) {
    var e = a.updateQueue;
    jh = false;
    var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
    if (null !== h) {
      e.shared.pending = null;
      var k = h, l = k.next;
      k.next = null;
      null === g ? f = l : g.next = l;
      g = k;
      var m = a.alternate;
      null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
    }
    if (null !== f) {
      var q = e.baseState;
      g = 0;
      m = l = k = null;
      h = f;
      do {
        var r = h.lane, y = h.eventTime;
        if ((d & r) === r) {
          null !== m && (m = m.next = {
            eventTime: y,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });
          a: {
            var n = a, t = h;
            r = b;
            y = c;
            switch (t.tag) {
              case 1:
                n = t.payload;
                if ("function" === typeof n) {
                  q = n.call(y, q, r);
                  break a;
                }
                q = n;
                break a;
              case 3:
                n.flags = n.flags & -65537 | 128;
              case 0:
                n = t.payload;
                r = "function" === typeof n ? n.call(y, q, r) : n;
                if (null === r || void 0 === r) break a;
                q = A({}, q, r);
                break a;
              case 2:
                jh = true;
            }
          }
          null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
        } else y = { eventTime: y, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
        h = h.next;
        if (null === h) if (h = e.shared.pending, null === h) break;
        else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
      } while (1);
      null === m && (k = q);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = m;
      b = e.shared.interleaved;
      if (null !== b) {
        e = b;
        do
          g |= e.lane, e = e.next;
        while (e !== b);
      } else null === f && (e.shared.lanes = 0);
      rh |= g;
      a.lanes = g;
      a.memoizedState = q;
    }
  }
  function sh(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e) throw Error(p(191, e));
        e.call(d);
      }
    }
  }
  var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
  function xh(a) {
    if (a === th) throw Error(p(174));
    return a;
  }
  function yh(a, b) {
    G(wh, b);
    G(vh, a);
    G(uh, th);
    a = b.nodeType;
    switch (a) {
      case 9:
      case 11:
        b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
        break;
      default:
        a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
    }
    E(uh);
    G(uh, b);
  }
  function zh() {
    E(uh);
    E(vh);
    E(wh);
  }
  function Ah(a) {
    xh(wh.current);
    var b = xh(uh.current);
    var c = lb(b, a.type);
    b !== c && (G(vh, a), G(uh, c));
  }
  function Bh(a) {
    vh.current === a && (E(uh), E(vh));
  }
  var L = Uf(0);
  function Ch(a) {
    for (var b = a; null !== b; ) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 128)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }
  var Dh = [];
  function Eh() {
    for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
    Dh.length = 0;
  }
  var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
  function P() {
    throw Error(p(321));
  }
  function Mh(a, b) {
    if (null === b) return false;
    for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
    return true;
  }
  function Nh(a, b, c, d, e, f) {
    Hh = f;
    M = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
    a = c(d, e);
    if (Jh) {
      f = 0;
      do {
        Jh = false;
        Kh = 0;
        if (25 <= f) throw Error(p(301));
        f += 1;
        O = N = null;
        b.updateQueue = null;
        Fh.current = Qh;
        a = c(d, e);
      } while (Jh);
    }
    Fh.current = Rh;
    b = null !== N && null !== N.next;
    Hh = 0;
    O = N = M = null;
    Ih = false;
    if (b) throw Error(p(300));
    return a;
  }
  function Sh() {
    var a = 0 !== Kh;
    Kh = 0;
    return a;
  }
  function Th() {
    var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === O ? M.memoizedState = O = a : O = O.next = a;
    return O;
  }
  function Uh() {
    if (null === N) {
      var a = M.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = N.next;
    var b = null === O ? M.memoizedState : O.next;
    if (null !== b) O = b, N = a;
    else {
      if (null === a) throw Error(p(310));
      N = a;
      a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
    }
    return O;
  }
  function Vh(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function Wh(a) {
    var b = Uh(), c = b.queue;
    if (null === c) throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = N, e = d.baseQueue, f = c.pending;
    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }
      d.baseQueue = e = f;
      c.pending = null;
    }
    if (null !== e) {
      f = e.next;
      d = d.baseState;
      var h = g = null, k = null, l = f;
      do {
        var m = l.lane;
        if ((Hh & m) === m) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
        else {
          var q = {
            lane: m,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null
          };
          null === k ? (h = k = q, g = d) : k = k.next = q;
          M.lanes |= m;
          rh |= m;
        }
        l = l.next;
      } while (null !== l && l !== f);
      null === k ? g = d : k.next = h;
      He(d, b.memoizedState) || (dh = true);
      b.memoizedState = d;
      b.baseState = g;
      b.baseQueue = k;
      c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
      e = a;
      do
        f = e.lane, M.lanes |= f, rh |= f, e = e.next;
      while (e !== a);
    } else null === e && (c.lanes = 0);
    return [b.memoizedState, c.dispatch];
  }
  function Xh(a) {
    var b = Uh(), c = b.queue;
    if (null === c) throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f = b.memoizedState;
    if (null !== e) {
      c.pending = null;
      var g = e = e.next;
      do
        f = a(f, g.action), g = g.next;
      while (g !== e);
      He(f, b.memoizedState) || (dh = true);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }
    return [f, d];
  }
  function Yh() {
  }
  function Zh(a, b) {
    var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
    f && (d.memoizedState = e, dh = true);
    d = d.queue;
    $h(ai.bind(null, c, d, a), [a]);
    if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
      c.flags |= 2048;
      bi(9, ci.bind(null, c, d, e, b), void 0, null);
      if (null === Q) throw Error(p(349));
      0 !== (Hh & 30) || di(c, b, e);
    }
    return e;
  }
  function di(a, b, c) {
    a.flags |= 16384;
    a = { getSnapshot: b, value: c };
    b = M.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
  }
  function ci(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    ei(b) && fi(a);
  }
  function ai(a, b, c) {
    return c(function() {
      ei(b) && fi(a);
    });
  }
  function ei(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
      var c = b();
      return !He(a, c);
    } catch (d) {
      return true;
    }
  }
  function fi(a) {
    var b = ih(a, 1);
    null !== b && gi(b, a, 1, -1);
  }
  function hi(a) {
    var b = Th();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
    b.queue = a;
    a = a.dispatch = ii.bind(null, M, a);
    return [b.memoizedState, a];
  }
  function bi(a, b, c, d) {
    a = { tag: a, create: b, destroy: c, deps: d, next: null };
    b = M.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }
  function ji() {
    return Uh().memoizedState;
  }
  function ki(a, b, c, d) {
    var e = Th();
    M.flags |= a;
    e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
  }
  function li(a, b, c, d) {
    var e = Uh();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== N) {
      var g = N.memoizedState;
      f = g.destroy;
      if (null !== d && Mh(d, g.deps)) {
        e.memoizedState = bi(b, c, f, d);
        return;
      }
    }
    M.flags |= a;
    e.memoizedState = bi(1 | b, c, f, d);
  }
  function mi(a, b) {
    return ki(8390656, 8, a, b);
  }
  function $h(a, b) {
    return li(2048, 8, a, b);
  }
  function ni(a, b) {
    return li(4, 2, a, b);
  }
  function oi(a, b) {
    return li(4, 4, a, b);
  }
  function pi(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function() {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
      b.current = null;
    };
  }
  function qi(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return li(4, 4, pi.bind(null, b, a), c);
  }
  function ri() {
  }
  function si(a, b) {
    var c = Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Mh(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }
  function ti(a, b) {
    var c = Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Mh(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }
  function ui(a, b, c) {
    if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
    He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
    return b;
  }
  function vi(a, b) {
    var c = C;
    C = 0 !== c && 4 > c ? c : 4;
    a(true);
    var d = Gh.transition;
    Gh.transition = {};
    try {
      a(false), b();
    } finally {
      C = c, Gh.transition = d;
    }
  }
  function wi() {
    return Uh().memoizedState;
  }
  function xi(a, b, c) {
    var d = yi(a);
    c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (zi(a)) Ai(b, c);
    else if (c = hh(a, b, c, d), null !== c) {
      var e = R();
      gi(c, a, d, e);
      Bi(c, b, d);
    }
  }
  function ii(a, b, c) {
    var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (zi(a)) Ai(b, e);
    else {
      var f = a.alternate;
      if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
        var g = b.lastRenderedState, h = f(g, c);
        e.hasEagerState = true;
        e.eagerState = h;
        if (He(h, g)) {
          var k = b.interleaved;
          null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
          b.interleaved = e;
          return;
        }
      } catch (l) {
      } finally {
      }
      c = hh(a, b, e, d);
      null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
    }
  }
  function zi(a) {
    var b = a.alternate;
    return a === M || null !== b && b === M;
  }
  function Ai(a, b) {
    Jh = Ih = true;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
  function Bi(a, b, c) {
    if (0 !== (c & 4194240)) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  }
  var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b) {
    Th().memoizedState = [a, void 0 === b ? null : b];
    return a;
  }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return ki(
      4194308,
      4,
      pi.bind(null, b, a),
      c
    );
  }, useLayoutEffect: function(a, b) {
    return ki(4194308, 4, a, b);
  }, useInsertionEffect: function(a, b) {
    return ki(4, 2, a, b);
  }, useMemo: function(a, b) {
    var c = Th();
    b = void 0 === b ? null : b;
    a = a();
    c.memoizedState = [a, b];
    return a;
  }, useReducer: function(a, b, c) {
    var d = Th();
    b = void 0 !== c ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
    d.queue = a;
    a = a.dispatch = xi.bind(null, M, a);
    return [d.memoizedState, a];
  }, useRef: function(a) {
    var b = Th();
    a = { current: a };
    return b.memoizedState = a;
  }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
    return Th().memoizedState = a;
  }, useTransition: function() {
    var a = hi(false), b = a[0];
    a = vi.bind(null, a[1]);
    Th().memoizedState = a;
    return [b, a];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a, b, c) {
    var d = M, e = Th();
    if (I) {
      if (void 0 === c) throw Error(p(407));
      c = c();
    } else {
      c = b();
      if (null === Q) throw Error(p(349));
      0 !== (Hh & 30) || di(d, b, c);
    }
    e.memoizedState = c;
    var f = { value: c, getSnapshot: b };
    e.queue = f;
    mi(ai.bind(
      null,
      d,
      f,
      a
    ), [a]);
    d.flags |= 2048;
    bi(9, ci.bind(null, d, f, c, b), void 0, null);
    return c;
  }, useId: function() {
    var a = Th(), b = Q.identifierPrefix;
    if (I) {
      var c = sg;
      var d = rg;
      c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
      b = ":" + b + "R" + c;
      c = Kh++;
      0 < c && (b += "H" + c.toString(32));
      b += ":";
    } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
    return a.memoizedState = b;
  }, unstable_isNewReconciler: false }, Ph = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Wh,
    useRef: ji,
    useState: function() {
      return Wh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function(a) {
      var b = Uh();
      return ui(b, N.memoizedState, a);
    },
    useTransition: function() {
      var a = Wh(Vh)[0], b = Uh().memoizedState;
      return [a, b];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: false
  }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
    return Xh(Vh);
  }, useDebugValue: ri, useDeferredValue: function(a) {
    var b = Uh();
    return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
  }, useTransition: function() {
    var a = Xh(Vh)[0], b = Uh().memoizedState;
    return [a, b];
  }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
  function Ci(a, b) {
    if (a && a.defaultProps) {
      b = A({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  function Di(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : A({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }
  var Ei = { isMounted: function(a) {
    return (a = a._reactInternals) ? Vb(a) === a : false;
  }, enqueueSetState: function(a, b, c) {
    a = a._reactInternals;
    var d = R(), e = yi(a), f = mh(d, e);
    f.payload = b;
    void 0 !== c && null !== c && (f.callback = c);
    b = nh(a, f, e);
    null !== b && (gi(b, a, e, d), oh(b, a, e));
  }, enqueueReplaceState: function(a, b, c) {
    a = a._reactInternals;
    var d = R(), e = yi(a), f = mh(d, e);
    f.tag = 1;
    f.payload = b;
    void 0 !== c && null !== c && (f.callback = c);
    b = nh(a, f, e);
    null !== b && (gi(b, a, e, d), oh(b, a, e));
  }, enqueueForceUpdate: function(a, b) {
    a = a._reactInternals;
    var c = R(), d = yi(a), e = mh(c, d);
    e.tag = 2;
    void 0 !== b && null !== b && (e.callback = b);
    b = nh(a, e, d);
    null !== b && (gi(b, a, d, c), oh(b, a, d));
  } };
  function Fi(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
  }
  function Gi(a, b, c) {
    var d = false, e = Vf;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = Ei;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }
  function Hi(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
  }
  function Ii(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = {};
    kh(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
  }
  function Ji(a, b) {
    try {
      var c = "", d = b;
      do
        c += Pa(d), d = d.return;
      while (d);
      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }
    return { value: a, source: b, stack: e, digest: null };
  }
  function Ki(a, b, c) {
    return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
  }
  function Li(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var Mi = "function" === typeof WeakMap ? WeakMap : Map;
  function Ni(a, b, c) {
    c = mh(-1, c);
    c.tag = 3;
    c.payload = { element: null };
    var d = b.value;
    c.callback = function() {
      Oi || (Oi = true, Pi = d);
      Li(a, b);
    };
    return c;
  }
  function Qi(a, b, c) {
    c = mh(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
      var e = b.value;
      c.payload = function() {
        return d(e);
      };
      c.callback = function() {
        Li(a, b);
      };
    }
    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
      Li(a, b);
      "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
      var c2 = b.stack;
      this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
    });
    return c;
  }
  function Si(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
      d = a.pingCache = new Mi();
      var e = /* @__PURE__ */ new Set();
      d.set(b, e);
    } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
    e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
  }
  function Ui(a) {
    do {
      var b;
      if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
      if (b) return a;
      a = a.return;
    } while (null !== a);
    return null;
  }
  function Vi(a, b, c, d, e) {
    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
  }
  var Wi = ua.ReactCurrentOwner, dh = false;
  function Xi(a, b, c, d) {
    b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
  }
  function Yi(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    ch(b, e);
    d = Nh(a, b, c, d, f, e);
    c = Sh();
    if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
    I && c && vg(b);
    b.flags |= 1;
    Xi(a, b, d, e);
    return b.child;
  }
  function $i(a, b, c, d, e) {
    if (null === a) {
      var f = c.type;
      if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
      a = Rg(c.type, null, d, b, b.mode, e);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    f = a.child;
    if (0 === (a.lanes & e)) {
      var g = f.memoizedProps;
      c = c.compare;
      c = null !== c ? c : Ie;
      if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
    }
    b.flags |= 1;
    a = Pg(f, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  function bj(a, b, c, d, e) {
    if (null !== a) {
      var f = a.memoizedProps;
      if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
      else return b.lanes = a.lanes, Zi(a, b, e);
    }
    return cj(a, b, c, d, e);
  }
  function dj(a, b, c) {
    var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
    else {
      if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f ? f.baseLanes : c;
      G(ej, fj);
      fj |= d;
    }
    else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
    Xi(a, b, e, c);
    return b.child;
  }
  function gj(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
  }
  function cj(a, b, c, d, e) {
    var f = Zf(c) ? Xf : H.current;
    f = Yf(b, f);
    ch(b, e);
    c = Nh(a, b, c, d, f, e);
    d = Sh();
    if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
    I && d && vg(b);
    b.flags |= 1;
    Xi(a, b, c, e);
    return b.child;
  }
  function hj(a, b, c, d, e) {
    if (Zf(c)) {
      var f = true;
      cg(b);
    } else f = false;
    ch(b, e);
    if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
    else if (null === a) {
      var g = b.stateNode, h = b.memoizedProps;
      g.props = h;
      var k = g.context, l = c.contextType;
      "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
      var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
      q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
      jh = false;
      var r = b.memoizedState;
      g.state = r;
      qh(b, d, g, e);
      k = b.memoizedState;
      h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
    } else {
      g = b.stateNode;
      lh(a, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : Ci(b.type, h);
      g.props = l;
      q = b.pendingProps;
      r = g.context;
      k = c.contextType;
      "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
      var y = c.getDerivedStateFromProps;
      (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
      jh = false;
      r = b.memoizedState;
      g.state = r;
      qh(b, d, g, e);
      var n = b.memoizedState;
      h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
    }
    return jj(a, b, c, d, f, e);
  }
  function jj(a, b, c, d, e, f) {
    gj(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
    d = b.stateNode;
    Wi.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
    b.memoizedState = d.state;
    e && dg(b, c, true);
    return b.child;
  }
  function kj(a) {
    var b = a.stateNode;
    b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
    yh(a, b.containerInfo);
  }
  function lj(a, b, c, d, e) {
    Ig();
    Jg(e);
    b.flags |= 256;
    Xi(a, b, c, d);
    return b.child;
  }
  var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
  function nj(a) {
    return { baseLanes: a, cachePool: null, transitions: null };
  }
  function oj(a, b, c) {
    var d = b.pendingProps, e = L.current, f = false, g = 0 !== (b.flags & 128), h;
    (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
    if (h) f = true, b.flags &= -129;
    else if (null === a || null !== a.memoizedState) e |= 1;
    G(L, e & 1);
    if (null === a) {
      Eg(b);
      a = b.memoizedState;
      if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
      g = d.children;
      a = d.fallback;
      return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
    }
    e = a.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
    if (f) {
      f = d.fallback;
      g = b.mode;
      e = a.child;
      h = e.sibling;
      var k = { mode: "hidden", children: d.children };
      0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
      null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
      f.return = b;
      d.return = b;
      d.sibling = f;
      b.child = d;
      d = f;
      f = b.child;
      g = a.child.memoizedState;
      g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
      f.memoizedState = g;
      f.childLanes = a.childLanes & ~c;
      b.memoizedState = mj;
      return d;
    }
    f = a.child;
    a = f.sibling;
    d = Pg(f, { mode: "visible", children: d.children });
    0 === (b.mode & 1) && (d.lanes = c);
    d.return = b;
    d.sibling = null;
    null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
  }
  function qj(a, b) {
    b = pj({ mode: "visible", children: b }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
  }
  function sj(a, b, c, d) {
    null !== d && Jg(d);
    Ug(b, a.child, null, c);
    a = qj(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
  }
  function rj(a, b, c, d, e, f, g) {
    if (c) {
      if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
      if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
      f = d.fallback;
      e = b.mode;
      d = pj({ mode: "visible", children: d.children }, e, 0, null);
      f = Tg(f, e, g, null);
      f.flags |= 2;
      d.return = b;
      f.return = b;
      d.sibling = f;
      b.child = d;
      0 !== (b.mode & 1) && Ug(b, a.child, null, g);
      b.child.memoizedState = nj(g);
      b.memoizedState = mj;
      return f;
    }
    if (0 === (b.mode & 1)) return sj(a, b, g, null);
    if ("$!" === e.data) {
      d = e.nextSibling && e.nextSibling.dataset;
      if (d) var h = d.dgst;
      d = h;
      f = Error(p(419));
      d = Ki(f, d, void 0);
      return sj(a, b, g, d);
    }
    h = 0 !== (g & a.childLanes);
    if (dh || h) {
      d = Q;
      if (null !== d) {
        switch (g & -g) {
          case 4:
            e = 2;
            break;
          case 16:
            e = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e = 32;
            break;
          case 536870912:
            e = 268435456;
            break;
          default:
            e = 0;
        }
        e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
        0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
      }
      tj();
      d = Ki(Error(p(421)));
      return sj(a, b, g, d);
    }
    if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
    a = f.treeContext;
    yg = Lf(e.nextSibling);
    xg = b;
    I = true;
    zg = null;
    null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
    b = qj(b, d.children);
    b.flags |= 4096;
    return b;
  }
  function vj(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    bh(a.return, b, c);
  }
  function wj(a, b, c, d, e) {
    var f = a.memoizedState;
    null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
  }
  function xj(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f = d.tail;
    Xi(a, b, d.children, c);
    d = L.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
    else {
      if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
        if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
        else if (19 === a.tag) vj(a, c, b);
        else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;
        for (; null === a.sibling; ) {
          if (null === a.return || a.return === b) break a;
          a = a.return;
        }
        a.sibling.return = a.return;
        a = a.sibling;
      }
      d &= 1;
    }
    G(L, d);
    if (0 === (b.mode & 1)) b.memoizedState = null;
    else switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        wj(b, false, e, c, f);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === Ch(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        wj(b, true, c, null, f);
        break;
      case "together":
        wj(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
    return b.child;
  }
  function ij(a, b) {
    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
  }
  function Zi(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    rh |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error(p(153));
    if (null !== b.child) {
      a = b.child;
      c = Pg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  function yj(a, b, c) {
    switch (b.tag) {
      case 3:
        kj(b);
        Ig();
        break;
      case 5:
        Ah(b);
        break;
      case 1:
        Zf(b.type) && cg(b);
        break;
      case 4:
        yh(b, b.stateNode.containerInfo);
        break;
      case 10:
        var d = b.type._context, e = b.memoizedProps.value;
        G(Wg, d._currentValue);
        d._currentValue = e;
        break;
      case 13:
        d = b.memoizedState;
        if (null !== d) {
          if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
          if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
          G(L, L.current & 1);
          a = Zi(a, b, c);
          return null !== a ? a.sibling : null;
        }
        G(L, L.current & 1);
        break;
      case 19:
        d = 0 !== (c & b.childLanes);
        if (0 !== (a.flags & 128)) {
          if (d) return xj(a, b, c);
          b.flags |= 128;
        }
        e = b.memoizedState;
        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
        G(L, L.current);
        if (d) break;
        else return null;
      case 22:
      case 23:
        return b.lanes = 0, dj(a, b, c);
    }
    return Zi(a, b, c);
  }
  var zj, Aj, Bj, Cj;
  zj = function(a, b) {
    for (var c = b.child; null !== c; ) {
      if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
      else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;
      for (; null === c.sibling; ) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  };
  Aj = function() {
  };
  Bj = function(a, b, c, d) {
    var e = a.memoizedProps;
    if (e !== d) {
      a = b.stateNode;
      xh(uh.current);
      var f = null;
      switch (c) {
        case "input":
          e = Ya(a, e);
          d = Ya(a, d);
          f = [];
          break;
        case "select":
          e = A({}, e, { value: void 0 });
          d = A({}, d, { value: void 0 });
          f = [];
          break;
        case "textarea":
          e = gb(a, e);
          d = gb(a, d);
          f = [];
          break;
        default:
          "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
      }
      ub(c, d);
      var g;
      c = null;
      for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
        var h = e[l];
        for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
      } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
      for (l in d) {
        var k = d[l];
        h = null != e ? e[l] : void 0;
        if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
        } else c || (f || (f = []), f.push(
          l,
          c
        )), c = k;
        else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
      }
      c && (f = f || []).push("style", c);
      var l = f;
      if (b.updateQueue = l) b.flags |= 4;
    }
  };
  Cj = function(a, b, c, d) {
    c !== d && (b.flags |= 4);
  };
  function Dj(a, b) {
    if (!I) switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }
  function S(a) {
    var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
    if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
    else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
  }
  function Ej(a, b, c) {
    var d = b.pendingProps;
    wg(b);
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return S(b), null;
      case 1:
        return Zf(b.type) && $f(), S(b), null;
      case 3:
        d = b.stateNode;
        zh();
        E(Wf);
        E(H);
        Eh();
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
        Aj(a, b);
        S(b);
        return null;
      case 5:
        Bh(b);
        var e = xh(wh.current);
        c = b.type;
        if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        else {
          if (!d) {
            if (null === b.stateNode) throw Error(p(166));
            S(b);
            return null;
          }
          a = xh(uh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.type;
            var f = b.memoizedProps;
            d[Of] = b;
            d[Pf] = f;
            a = 0 !== (b.mode & 1);
            switch (c) {
              case "dialog":
                D("cancel", d);
                D("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", d);
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D(lf[e], d);
                break;
              case "source":
                D("error", d);
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  d
                );
                D("load", d);
                break;
              case "details":
                D("toggle", d);
                break;
              case "input":
                Za(d, f);
                D("invalid", d);
                break;
              case "select":
                d._wrapperState = { wasMultiple: !!f.multiple };
                D("invalid", d);
                break;
              case "textarea":
                hb(d, f), D("invalid", d);
            }
            ub(c, f);
            e = null;
            for (var g in f) if (f.hasOwnProperty(g)) {
              var h = f[g];
              "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                d.textContent,
                h,
                a
              ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
            }
            switch (c) {
              case "input":
                Va(d);
                db(d, f, true);
                break;
              case "textarea":
                Va(d);
                jb(d);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f.onClick && (d.onclick = Bf);
            }
            d = e;
            b.updateQueue = d;
            null !== d && (b.flags |= 4);
          } else {
            g = 9 === e.nodeType ? e : e.ownerDocument;
            "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
            "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
            a[Of] = b;
            a[Pf] = d;
            zj(a, b, false, false);
            b.stateNode = a;
            a: {
              g = vb(c, d);
              switch (c) {
                case "dialog":
                  D("cancel", a);
                  D("close", a);
                  e = d;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", a);
                  e = d;
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++) D(lf[e], a);
                  e = d;
                  break;
                case "source":
                  D("error", a);
                  e = d;
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    a
                  );
                  D("load", a);
                  e = d;
                  break;
                case "details":
                  D("toggle", a);
                  e = d;
                  break;
                case "input":
                  Za(a, d);
                  e = Ya(a, d);
                  D("invalid", a);
                  break;
                case "option":
                  e = d;
                  break;
                case "select":
                  a._wrapperState = { wasMultiple: !!d.multiple };
                  e = A({}, d, { value: void 0 });
                  D("invalid", a);
                  break;
                case "textarea":
                  hb(a, d);
                  e = gb(a, d);
                  D("invalid", a);
                  break;
                default:
                  e = d;
              }
              ub(c, e);
              h = e;
              for (f in h) if (h.hasOwnProperty(f)) {
                var k = h[f];
                "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
              }
              switch (c) {
                case "input":
                  Va(a);
                  db(a, d, false);
                  break;
                case "textarea":
                  Va(a);
                  jb(a);
                  break;
                case "option":
                  null != d.value && a.setAttribute("value", "" + Sa(d.value));
                  break;
                case "select":
                  a.multiple = !!d.multiple;
                  f = d.value;
                  null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(
                    a,
                    !!d.multiple,
                    d.defaultValue,
                    true
                  );
                  break;
                default:
                  "function" === typeof e.onClick && (a.onclick = Bf);
              }
              switch (c) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d = !!d.autoFocus;
                  break a;
                case "img":
                  d = true;
                  break a;
                default:
                  d = false;
              }
            }
            d && (b.flags |= 4);
          }
          null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        }
        S(b);
        return null;
      case 6:
        if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
        else {
          if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
          c = xh(wh.current);
          xh(uh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.memoizedProps;
            d[Of] = b;
            if (f = d.nodeValue !== c) {
              if (a = xg, null !== a) switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
              }
            }
            f && (b.flags |= 4);
          } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
        }
        S(b);
        return null;
      case 13:
        E(L);
        d = b.memoizedState;
        if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
          if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = false;
          else if (f = Gg(b), null !== d && null !== d.dehydrated) {
            if (null === a) {
              if (!f) throw Error(p(318));
              f = b.memoizedState;
              f = null !== f ? f.dehydrated : null;
              if (!f) throw Error(p(317));
              f[Of] = b;
            } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
            S(b);
            f = false;
          } else null !== zg && (Fj(zg), zg = null), f = true;
          if (!f) return b.flags & 65536 ? b : null;
        }
        if (0 !== (b.flags & 128)) return b.lanes = c, b;
        d = null !== d;
        d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
        null !== b.updateQueue && (b.flags |= 4);
        S(b);
        return null;
      case 4:
        return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
      case 10:
        return ah(b.type._context), S(b), null;
      case 17:
        return Zf(b.type) && $f(), S(b), null;
      case 19:
        E(L);
        f = b.memoizedState;
        if (null === f) return S(b), null;
        d = 0 !== (b.flags & 128);
        g = f.rendering;
        if (null === g) if (d) Dj(f, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
            g = Ch(a);
            if (null !== g) {
              b.flags |= 128;
              Dj(f, false);
              d = g.updateQueue;
              null !== d && (b.updateQueue = d, b.flags |= 4);
              b.subtreeFlags = 0;
              d = c;
              for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
              G(L, L.current & 1 | 2);
              return b.child;
            }
            a = a.sibling;
          }
          null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
        }
        else {
          if (!d) if (a = Ch(g), null !== a) {
            if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
          } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
          f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
        }
        if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
        S(b);
        return null;
      case 22:
      case 23:
        return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, b.tag));
  }
  function Ij(a, b) {
    wg(b);
    switch (b.tag) {
      case 1:
        return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 3:
        return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
      case 5:
        return Bh(b), null;
      case 13:
        E(L);
        a = b.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          if (null === b.alternate) throw Error(p(340));
          Ig();
        }
        a = b.flags;
        return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 19:
        return E(L), null;
      case 4:
        return zh(), null;
      case 10:
        return ah(b.type._context), null;
      case 22:
      case 23:
        return Hj(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
  function Lj(a, b) {
    var c = a.ref;
    if (null !== c) if ("function" === typeof c) try {
      c(null);
    } catch (d) {
      W(a, b, d);
    }
    else c.current = null;
  }
  function Mj(a, b, c) {
    try {
      c();
    } catch (d) {
      W(a, b, d);
    }
  }
  var Nj = false;
  function Oj(a, b) {
    Cf = dd;
    a = Me();
    if (Ne(a)) {
      if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
      else a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e = d.anchorOffset, f = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f.nodeType;
          } catch (F) {
            c = null;
            break a;
          }
          var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
          b: for (; ; ) {
            for (var y; ; ) {
              q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
              q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
              3 === q.nodeType && (g += q.nodeValue.length);
              if (null === (y = q.firstChild)) break;
              r = q;
              q = y;
            }
            for (; ; ) {
              if (q === a) break b;
              r === c && ++l === e && (h = g);
              r === f && ++m === d && (k = g);
              if (null !== (y = q.nextSibling)) break;
              q = r;
              r = q.parentNode;
            }
            q = y;
          }
          c = -1 === h || -1 === k ? null : { start: h, end: k };
        } else c = null;
      }
      c = c || { start: 0, end: 0 };
    } else c = null;
    Df = { focusedElem: a, selectionRange: c };
    dd = false;
    for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
    else for (; null !== V; ) {
      b = V;
      try {
        var n = b.alternate;
        if (0 !== (b.flags & 1024)) switch (b.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (null !== n) {
              var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
              x.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var u = b.stateNode.containerInfo;
            1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p(163));
        }
      } catch (F) {
        W(b, b.return, F);
      }
      a = b.sibling;
      if (null !== a) {
        a.return = b.return;
        V = a;
        break;
      }
      V = b.return;
    }
    n = Nj;
    Nj = false;
    return n;
  }
  function Pj(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
      var e = d = d.next;
      do {
        if ((e.tag & a) === a) {
          var f = e.destroy;
          e.destroy = void 0;
          void 0 !== f && Mj(b, c, f);
        }
        e = e.next;
      } while (e !== d);
    }
  }
  function Qj(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
      var c = b = b.next;
      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }
        c = c.next;
      } while (c !== b);
    }
  }
  function Rj(a) {
    var b = a.ref;
    if (null !== b) {
      var c = a.stateNode;
      switch (a.tag) {
        case 5:
          a = c;
          break;
        default:
          a = c;
      }
      "function" === typeof b ? b(a) : b.current = a;
    }
  }
  function Sj(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, Sj(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
  }
  function Tj(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function Uj(a) {
    a: for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Tj(a.return)) return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2) continue a;
        if (null === a.child || 4 === a.tag) continue a;
        else a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2)) return a.stateNode;
    }
  }
  function Vj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
    else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
  }
  function Wj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
  }
  var X = null, Xj = false;
  function Yj(a, b, c) {
    for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
  }
  function Zj(a, b, c) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
      lc.onCommitFiberUnmount(kc, c);
    } catch (h) {
    }
    switch (c.tag) {
      case 5:
        U || Lj(c, b);
      case 6:
        var d = X, e = Xj;
        X = null;
        Yj(a, b, c);
        X = d;
        Xj = e;
        null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
        break;
      case 18:
        null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
        break;
      case 4:
        d = X;
        e = Xj;
        X = c.stateNode.containerInfo;
        Xj = true;
        Yj(a, b, c);
        X = d;
        Xj = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
          e = d = d.next;
          do {
            var f = e, g = f.destroy;
            f = f.tag;
            void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
            e = e.next;
          } while (e !== d);
        }
        Yj(a, b, c);
        break;
      case 1:
        if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          W(c, b, h);
        }
        Yj(a, b, c);
        break;
      case 21:
        Yj(a, b, c);
        break;
      case 22:
        c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
        break;
      default:
        Yj(a, b, c);
    }
  }
  function ak(a) {
    var b = a.updateQueue;
    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Kj());
      b.forEach(function(b2) {
        var d = bk.bind(null, a, b2);
        c.has(b2) || (c.add(b2), b2.then(d, d));
      });
    }
  }
  function ck(a, b) {
    var c = b.deletions;
    if (null !== c) for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f = a, g = b, h = g;
        a: for (; null !== h; ) {
          switch (h.tag) {
            case 5:
              X = h.stateNode;
              Xj = false;
              break a;
            case 3:
              X = h.stateNode.containerInfo;
              Xj = true;
              break a;
            case 4:
              X = h.stateNode.containerInfo;
              Xj = true;
              break a;
          }
          h = h.return;
        }
        if (null === X) throw Error(p(160));
        Zj(f, g, e);
        X = null;
        Xj = false;
        var k = e.alternate;
        null !== k && (k.return = null);
        e.return = null;
      } catch (l) {
        W(e, b, l);
      }
    }
    if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
  }
  function dk(a, b) {
    var c = a.alternate, d = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ck(b, a);
        ek(a);
        if (d & 4) {
          try {
            Pj(3, a, a.return), Qj(3, a);
          } catch (t) {
            W(a, a.return, t);
          }
          try {
            Pj(5, a, a.return);
          } catch (t) {
            W(a, a.return, t);
          }
        }
        break;
      case 1:
        ck(b, a);
        ek(a);
        d & 512 && null !== c && Lj(c, c.return);
        break;
      case 5:
        ck(b, a);
        ek(a);
        d & 512 && null !== c && Lj(c, c.return);
        if (a.flags & 32) {
          var e = a.stateNode;
          try {
            ob(e, "");
          } catch (t) {
            W(a, a.return, t);
          }
        }
        if (d & 4 && (e = a.stateNode, null != e)) {
          var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
          a.updateQueue = null;
          if (null !== k) try {
            "input" === h && "radio" === f.type && null != f.name && ab(e, f);
            vb(h, g);
            var l = vb(h, f);
            for (g = 0; g < k.length; g += 2) {
              var m = k[g], q = k[g + 1];
              "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
            }
            switch (h) {
              case "input":
                bb(e, f);
                break;
              case "textarea":
                ib(e, f);
                break;
              case "select":
                var r = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f.multiple;
                var y = f.value;
                null != y ? fb(e, !!f.multiple, y, false) : r !== !!f.multiple && (null != f.defaultValue ? fb(
                  e,
                  !!f.multiple,
                  f.defaultValue,
                  true
                ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
            }
            e[Pf] = f;
          } catch (t) {
            W(a, a.return, t);
          }
        }
        break;
      case 6:
        ck(b, a);
        ek(a);
        if (d & 4) {
          if (null === a.stateNode) throw Error(p(162));
          e = a.stateNode;
          f = a.memoizedProps;
          try {
            e.nodeValue = f;
          } catch (t) {
            W(a, a.return, t);
          }
        }
        break;
      case 3:
        ck(b, a);
        ek(a);
        if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
          bd(b.containerInfo);
        } catch (t) {
          W(a, a.return, t);
        }
        break;
      case 4:
        ck(b, a);
        ek(a);
        break;
      case 13:
        ck(b, a);
        ek(a);
        e = a.child;
        e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
        d & 4 && ak(a);
        break;
      case 22:
        m = null !== c && null !== c.memoizedState;
        a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
        ek(a);
        if (d & 8192) {
          l = null !== a.memoizedState;
          if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
            for (q = V = m; null !== V; ) {
              r = V;
              y = r.child;
              switch (r.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pj(4, r, r.return);
                  break;
                case 1:
                  Lj(r, r.return);
                  var n = r.stateNode;
                  if ("function" === typeof n.componentWillUnmount) {
                    d = r;
                    c = r.return;
                    try {
                      b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                    } catch (t) {
                      W(d, c, t);
                    }
                  }
                  break;
                case 5:
                  Lj(r, r.return);
                  break;
                case 22:
                  if (null !== r.memoizedState) {
                    gk(q);
                    continue;
                  }
              }
              null !== y ? (y.return = r, V = y) : gk(q);
            }
            m = m.sibling;
          }
          a: for (m = null, q = a; ; ) {
            if (5 === q.tag) {
              if (null === m) {
                m = q;
                try {
                  e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                } catch (t) {
                  W(a, a.return, t);
                }
              }
            } else if (6 === q.tag) {
              if (null === m) try {
                q.stateNode.nodeValue = l ? "" : q.memoizedProps;
              } catch (t) {
                W(a, a.return, t);
              }
            } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
              q.child.return = q;
              q = q.child;
              continue;
            }
            if (q === a) break a;
            for (; null === q.sibling; ) {
              if (null === q.return || q.return === a) break a;
              m === q && (m = null);
              q = q.return;
            }
            m === q && (m = null);
            q.sibling.return = q.return;
            q = q.sibling;
          }
        }
        break;
      case 19:
        ck(b, a);
        ek(a);
        d & 4 && ak(a);
        break;
      case 21:
        break;
      default:
        ck(
          b,
          a
        ), ek(a);
    }
  }
  function ek(a) {
    var b = a.flags;
    if (b & 2) {
      try {
        a: {
          for (var c = a.return; null !== c; ) {
            if (Tj(c)) {
              var d = c;
              break a;
            }
            c = c.return;
          }
          throw Error(p(160));
        }
        switch (d.tag) {
          case 5:
            var e = d.stateNode;
            d.flags & 32 && (ob(e, ""), d.flags &= -33);
            var f = Uj(a);
            Wj(a, f, e);
            break;
          case 3:
          case 4:
            var g = d.stateNode.containerInfo, h = Uj(a);
            Vj(a, h, g);
            break;
          default:
            throw Error(p(161));
        }
      } catch (k) {
        W(a, a.return, k);
      }
      a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
  }
  function hk(a, b, c) {
    V = a;
    ik(a);
  }
  function ik(a, b, c) {
    for (var d = 0 !== (a.mode & 1); null !== V; ) {
      var e = V, f = e.child;
      if (22 === e.tag && d) {
        var g = null !== e.memoizedState || Jj;
        if (!g) {
          var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
          h = Jj;
          var l = U;
          Jj = g;
          if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
          for (; null !== f; ) V = f, ik(f), f = f.sibling;
          V = e;
          Jj = h;
          U = l;
        }
        kk(a);
      } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a);
    }
  }
  function kk(a) {
    for (; null !== V; ) {
      var b = V;
      if (0 !== (b.flags & 8772)) {
        var c = b.alternate;
        try {
          if (0 !== (b.flags & 8772)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              U || Qj(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
              else {
                var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
              }
              var f = b.updateQueue;
              null !== f && sh(b, f, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b.child) switch (b.child.tag) {
                  case 5:
                    c = b.child.stateNode;
                    break;
                  case 1:
                    c = b.child.stateNode;
                }
                sh(b, g, c);
              }
              break;
            case 5:
              var h = b.stateNode;
              if (null === c && b.flags & 4) {
                c = h;
                var k = b.memoizedProps;
                switch (b.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k.autoFocus && c.focus();
                    break;
                  case "img":
                    k.src && (c.src = k.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b.memoizedState) {
                var l = b.alternate;
                if (null !== l) {
                  var m = l.memoizedState;
                  if (null !== m) {
                    var q = m.dehydrated;
                    null !== q && bd(q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
          U || b.flags & 512 && Rj(b);
        } catch (r) {
          W(b, b.return, r);
        }
      }
      if (b === a) {
        V = null;
        break;
      }
      c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        V = c;
        break;
      }
      V = b.return;
    }
  }
  function gk(a) {
    for (; null !== V; ) {
      var b = V;
      if (b === a) {
        V = null;
        break;
      }
      var c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        V = c;
        break;
      }
      V = b.return;
    }
  }
  function jk(a) {
    for (; null !== V; ) {
      var b = V;
      try {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            var c = b.return;
            try {
              Qj(4, b);
            } catch (k) {
              W(b, c, k);
            }
            break;
          case 1:
            var d = b.stateNode;
            if ("function" === typeof d.componentDidMount) {
              var e = b.return;
              try {
                d.componentDidMount();
              } catch (k) {
                W(b, e, k);
              }
            }
            var f = b.return;
            try {
              Rj(b);
            } catch (k) {
              W(b, f, k);
            }
            break;
          case 5:
            var g = b.return;
            try {
              Rj(b);
            } catch (k) {
              W(b, g, k);
            }
        }
      } catch (k) {
        W(b, b.return, k);
      }
      if (b === a) {
        V = null;
        break;
      }
      var h = b.sibling;
      if (null !== h) {
        h.return = b.return;
        V = h;
        break;
      }
      V = b.return;
    }
  }
  var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
  function R() {
    return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
  }
  function yi(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
    if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
    a = C;
    if (0 !== a) return a;
    a = window.event;
    a = void 0 === a ? 16 : jd(a.type);
    return a;
  }
  function gi(a, b, c, d) {
    if (50 < yk) throw yk = 0, zk = null, Error(p(185));
    Ac(a, c, d);
    if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
  }
  function Dk(a, b) {
    var c = a.callbackNode;
    wc(a, b);
    var d = uc(a, a === Q ? Z : 0);
    if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
      null != c && bc(c);
      if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c = null;
      else {
        switch (Dc(d)) {
          case 1:
            c = fc;
            break;
          case 4:
            c = gc;
            break;
          case 16:
            c = hc;
            break;
          case 536870912:
            c = jc;
            break;
          default:
            c = hc;
        }
        c = Fk(c, Gk.bind(null, a));
      }
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }
  function Gk(a, b) {
    Ak = -1;
    Bk = 0;
    if (0 !== (K & 6)) throw Error(p(327));
    var c = a.callbackNode;
    if (Hk() && a.callbackNode !== c) return null;
    var d = uc(a, a === Q ? Z : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
    else {
      b = d;
      var e = K;
      K |= 2;
      var f = Jk();
      if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
      do
        try {
          Lk();
          break;
        } catch (h) {
          Mk(a, h);
        }
      while (1);
      $g();
      mk.current = f;
      K = e;
      null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
    }
    if (0 !== b) {
      2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
      if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
      if (6 === b) Ck(a, d);
      else {
        e = a.current.alternate;
        if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
        a.finishedWork = e;
        a.finishedLanes = d;
        switch (b) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Pk(a, tk, uk);
            break;
          case 3:
            Ck(a, d);
            if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
              if (0 !== uc(a, 0)) break;
              e = a.suspendedLanes;
              if ((e & d) !== d) {
                R();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 4:
            Ck(a, d);
            if ((d & 4194240) === d) break;
            b = a.eventTimes;
            for (e = -1; 0 < d; ) {
              var g = 31 - oc(d);
              f = 1 << g;
              g = b[g];
              g > e && (e = g);
              d &= ~f;
            }
            d = e;
            d = B() - d;
            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
            if (10 < d) {
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 5:
            Pk(a, tk, uk);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    Dk(a, B());
    return a.callbackNode === c ? Gk.bind(null, a) : null;
  }
  function Nk(a, b) {
    var c = sk;
    a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
    a = Ik(a, b);
    2 !== a && (b = tk, tk = c, null !== b && Fj(b));
    return a;
  }
  function Fj(a) {
    null === tk ? tk = a : tk.push.apply(tk, a);
  }
  function Ok(a) {
    for (var b = a; ; ) {
      if (b.flags & 16384) {
        var c = b.updateQueue;
        if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
          var e = c[d], f = e.getSnapshot;
          e = e.value;
          try {
            if (!He(f(), e)) return false;
          } catch (g) {
            return false;
          }
        }
      }
      c = b.child;
      if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
      else {
        if (b === a) break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a) return true;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return true;
  }
  function Ck(a, b) {
    b &= ~rk;
    b &= ~qk;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for (a = a.expirationTimes; 0 < b; ) {
      var c = 31 - oc(b), d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }
  function Ek(a) {
    if (0 !== (K & 6)) throw Error(p(327));
    Hk();
    var b = uc(a, 0);
    if (0 === (b & 1)) return Dk(a, B()), null;
    var c = Ik(a, b);
    if (0 !== a.tag && 2 === c) {
      var d = xc(a);
      0 !== d && (b = d, c = Nk(a, d));
    }
    if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
    if (6 === c) throw Error(p(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Pk(a, tk, uk);
    Dk(a, B());
    return null;
  }
  function Qk(a, b) {
    var c = K;
    K |= 1;
    try {
      return a(b);
    } finally {
      K = c, 0 === K && (Gj = B() + 500, fg && jg());
    }
  }
  function Rk(a) {
    null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
    var b = K;
    K |= 1;
    var c = ok.transition, d = C;
    try {
      if (ok.transition = null, C = 1, a) return a();
    } finally {
      C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
    }
  }
  function Hj() {
    fj = ej.current;
    E(ej);
  }
  function Kk(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    -1 !== c && (a.timeoutHandle = -1, Gf(c));
    if (null !== Y) for (c = Y.return; null !== c; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $f();
          break;
        case 3:
          zh();
          E(Wf);
          E(H);
          Eh();
          break;
        case 5:
          Bh(d);
          break;
        case 4:
          zh();
          break;
        case 13:
          E(L);
          break;
        case 19:
          E(L);
          break;
        case 10:
          ah(d.type._context);
          break;
        case 22:
        case 23:
          Hj();
      }
      c = c.return;
    }
    Q = a;
    Y = a = Pg(a.current, null);
    Z = fj = b;
    T = 0;
    pk = null;
    rk = qk = rh = 0;
    tk = sk = null;
    if (null !== fh) {
      for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e = d.next, f = c.pending;
        if (null !== f) {
          var g = f.next;
          f.next = e;
          d.next = g;
        }
        c.pending = d;
      }
      fh = null;
    }
    return a;
  }
  function Mk(a, b) {
    do {
      var c = Y;
      try {
        $g();
        Fh.current = Rh;
        if (Ih) {
          for (var d = M.memoizedState; null !== d; ) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }
          Ih = false;
        }
        Hh = 0;
        O = N = M = null;
        Jh = false;
        Kh = 0;
        nk.current = null;
        if (null === c || null === c.return) {
          T = 1;
          pk = b;
          Y = null;
          break;
        }
        a: {
          var f = a, g = c.return, h = c, k = b;
          b = Z;
          h.flags |= 32768;
          if (null !== k && "object" === typeof k && "function" === typeof k.then) {
            var l = k, m = h, q = m.tag;
            if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
              var r = m.alternate;
              r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
            }
            var y = Ui(g);
            if (null !== y) {
              y.flags &= -257;
              Vi(y, g, h, f, b);
              y.mode & 1 && Si(f, l, b);
              b = y;
              k = l;
              var n = b.updateQueue;
              if (null === n) {
                var t = /* @__PURE__ */ new Set();
                t.add(k);
                b.updateQueue = t;
              } else n.add(k);
              break a;
            } else {
              if (0 === (b & 1)) {
                Si(f, l, b);
                tj();
                break a;
              }
              k = Error(p(426));
            }
          } else if (I && h.mode & 1) {
            var J = Ui(g);
            if (null !== J) {
              0 === (J.flags & 65536) && (J.flags |= 256);
              Vi(J, g, h, f, b);
              Jg(Ji(k, h));
              break a;
            }
          }
          f = k = Ji(k, h);
          4 !== T && (T = 2);
          null === sk ? sk = [f] : sk.push(f);
          f = g;
          do {
            switch (f.tag) {
              case 3:
                f.flags |= 65536;
                b &= -b;
                f.lanes |= b;
                var x = Ni(f, k, b);
                ph(f, x);
                break a;
              case 1:
                h = k;
                var w = f.type, u = f.stateNode;
                if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                  f.flags |= 65536;
                  b &= -b;
                  f.lanes |= b;
                  var F = Qi(f, h, b);
                  ph(f, F);
                  break a;
                }
            }
            f = f.return;
          } while (null !== f);
        }
        Sk(c);
      } catch (na) {
        b = na;
        Y === c && null !== c && (Y = c = c.return);
        continue;
      }
      break;
    } while (1);
  }
  function Jk() {
    var a = mk.current;
    mk.current = Rh;
    return null === a ? Rh : a;
  }
  function tj() {
    if (0 === T || 3 === T || 2 === T) T = 4;
    null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
  }
  function Ik(a, b) {
    var c = K;
    K |= 2;
    var d = Jk();
    if (Q !== a || Z !== b) uk = null, Kk(a, b);
    do
      try {
        Tk();
        break;
      } catch (e) {
        Mk(a, e);
      }
    while (1);
    $g();
    K = c;
    mk.current = d;
    if (null !== Y) throw Error(p(261));
    Q = null;
    Z = 0;
    return T;
  }
  function Tk() {
    for (; null !== Y; ) Uk(Y);
  }
  function Lk() {
    for (; null !== Y && !cc(); ) Uk(Y);
  }
  function Uk(a) {
    var b = Vk(a.alternate, a, fj);
    a.memoizedProps = a.pendingProps;
    null === b ? Sk(a) : Y = b;
    nk.current = null;
  }
  function Sk(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b.return;
      if (0 === (b.flags & 32768)) {
        if (c = Ej(c, b, fj), null !== c) {
          Y = c;
          return;
        }
      } else {
        c = Ij(c, b);
        if (null !== c) {
          c.flags &= 32767;
          Y = c;
          return;
        }
        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
        else {
          T = 6;
          Y = null;
          return;
        }
      }
      b = b.sibling;
      if (null !== b) {
        Y = b;
        return;
      }
      Y = b = a;
    } while (null !== b);
    0 === T && (T = 5);
  }
  function Pk(a, b, c) {
    var d = C, e = ok.transition;
    try {
      ok.transition = null, C = 1, Wk(a, b, c, d);
    } finally {
      ok.transition = e, C = d;
    }
    return null;
  }
  function Wk(a, b, c, d) {
    do
      Hk();
    while (null !== wk);
    if (0 !== (K & 6)) throw Error(p(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(p(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f = c.lanes | c.childLanes;
    Bc(a, f);
    a === Q && (Y = Q = null, Z = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
      Hk();
      return null;
    }));
    f = 0 !== (c.flags & 15990);
    if (0 !== (c.subtreeFlags & 15990) || f) {
      f = ok.transition;
      ok.transition = null;
      var g = C;
      C = 1;
      var h = K;
      K |= 4;
      nk.current = null;
      Oj(a, c);
      dk(c, a);
      Oe(Df);
      dd = !!Cf;
      Df = Cf = null;
      a.current = c;
      hk(c);
      dc();
      K = h;
      C = g;
      ok.transition = f;
    } else a.current = c;
    vk && (vk = false, wk = a, xk = e);
    f = a.pendingLanes;
    0 === f && (Ri = null);
    mc(c.stateNode);
    Dk(a, B());
    if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
    if (Oi) throw Oi = false, a = Pi, Pi = null, a;
    0 !== (xk & 1) && 0 !== a.tag && Hk();
    f = a.pendingLanes;
    0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
    jg();
    return null;
  }
  function Hk() {
    if (null !== wk) {
      var a = Dc(xk), b = ok.transition, c = C;
      try {
        ok.transition = null;
        C = 16 > a ? 16 : a;
        if (null === wk) var d = false;
        else {
          a = wk;
          wk = null;
          xk = 0;
          if (0 !== (K & 6)) throw Error(p(331));
          var e = K;
          K |= 4;
          for (V = a.current; null !== V; ) {
            var f = V, g = f.child;
            if (0 !== (V.flags & 16)) {
              var h = f.deletions;
              if (null !== h) {
                for (var k = 0; k < h.length; k++) {
                  var l = h[k];
                  for (V = l; null !== V; ) {
                    var m = V;
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(8, m, f);
                    }
                    var q = m.child;
                    if (null !== q) q.return = m, V = q;
                    else for (; null !== V; ) {
                      m = V;
                      var r = m.sibling, y = m.return;
                      Sj(m);
                      if (m === l) {
                        V = null;
                        break;
                      }
                      if (null !== r) {
                        r.return = y;
                        V = r;
                        break;
                      }
                      V = y;
                    }
                  }
                }
                var n = f.alternate;
                if (null !== n) {
                  var t = n.child;
                  if (null !== t) {
                    n.child = null;
                    do {
                      var J = t.sibling;
                      t.sibling = null;
                      t = J;
                    } while (null !== t);
                  }
                }
                V = f;
              }
            }
            if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
            else b: for (; null !== V; ) {
              f = V;
              if (0 !== (f.flags & 2048)) switch (f.tag) {
                case 0:
                case 11:
                case 15:
                  Pj(9, f, f.return);
              }
              var x = f.sibling;
              if (null !== x) {
                x.return = f.return;
                V = x;
                break b;
              }
              V = f.return;
            }
          }
          var w = a.current;
          for (V = w; null !== V; ) {
            g = V;
            var u = g.child;
            if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
            else b: for (g = w; null !== V; ) {
              h = V;
              if (0 !== (h.flags & 2048)) try {
                switch (h.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qj(9, h);
                }
              } catch (na) {
                W(h, h.return, na);
              }
              if (h === g) {
                V = null;
                break b;
              }
              var F = h.sibling;
              if (null !== F) {
                F.return = h.return;
                V = F;
                break b;
              }
              V = h.return;
            }
          }
          K = e;
          jg();
          if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
          d = true;
        }
        return d;
      } finally {
        C = c, ok.transition = b;
      }
    }
    return false;
  }
  function Xk(a, b, c) {
    b = Ji(c, b);
    b = Ni(a, b, 1);
    a = nh(a, b, 1);
    b = R();
    null !== a && (Ac(a, 1, b), Dk(a, b));
  }
  function W(a, b, c) {
    if (3 === a.tag) Xk(a, a, c);
    else for (; null !== b; ) {
      if (3 === b.tag) {
        Xk(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
          a = Ji(c, a);
          a = Qi(b, a, 1);
          b = nh(b, a, 1);
          a = R();
          null !== b && (Ac(b, 1, a), Dk(b, a));
          break;
        }
      }
      b = b.return;
    }
  }
  function Ti(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = R();
    a.pingedLanes |= a.suspendedLanes & c;
    Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
    Dk(a, b);
  }
  function Yk(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c = R();
    a = ih(a, b);
    null !== a && (Ac(a, b, c), Dk(a, c));
  }
  function uj(a) {
    var b = a.memoizedState, c = 0;
    null !== b && (c = b.retryLane);
    Yk(a, c);
  }
  function bk(a, b) {
    var c = 0;
    switch (a.tag) {
      case 13:
        var d = a.stateNode;
        var e = a.memoizedState;
        null !== e && (c = e.retryLane);
        break;
      case 19:
        d = a.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    null !== d && d.delete(b);
    Yk(a, c);
  }
  var Vk;
  Vk = function(a, b, c) {
    if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
      dh = 0 !== (a.flags & 131072) ? true : false;
    }
    else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
    b.lanes = 0;
    switch (b.tag) {
      case 2:
        var d = b.type;
        ij(a, b);
        a = b.pendingProps;
        var e = Yf(b, H.current);
        ch(b, c);
        e = Nh(null, b, d, a, e, c);
        var f = Sh();
        b.flags |= 1;
        "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
        return b;
      case 16:
        d = b.elementType;
        a: {
          ij(a, b);
          a = b.pendingProps;
          e = d._init;
          d = e(d._payload);
          b.type = d;
          e = b.tag = Zk(d);
          a = Ci(d, a);
          switch (e) {
            case 0:
              b = cj(null, b, d, a, c);
              break a;
            case 1:
              b = hj(null, b, d, a, c);
              break a;
            case 11:
              b = Yi(null, b, d, a, c);
              break a;
            case 14:
              b = $i(null, b, d, Ci(d.type, a), c);
              break a;
          }
          throw Error(p(
            306,
            d,
            ""
          ));
        }
        return b;
      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
      case 3:
        a: {
          kj(b);
          if (null === a) throw Error(p(387));
          d = b.pendingProps;
          f = b.memoizedState;
          e = f.element;
          lh(a, b);
          qh(b, d, null, c);
          var g = b.memoizedState;
          d = g.element;
          if (f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
            e = Ji(Error(p(423)), b);
            b = lj(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ji(Error(p(424)), b);
            b = lj(a, b, d, c, e);
            break a;
          } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            Ig();
            if (d === e) {
              b = Zi(a, b, c);
              break a;
            }
            Xi(a, b, d, c);
          }
          b = b.child;
        }
        return b;
      case 5:
        return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
      case 6:
        return null === a && Eg(b), null;
      case 13:
        return oj(a, b, c);
      case 4:
        return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
      case 7:
        return Xi(a, b, b.pendingProps, c), b.child;
      case 8:
        return Xi(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return Xi(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          f = b.memoizedProps;
          g = e.value;
          G(Wg, d._currentValue);
          d._currentValue = g;
          if (null !== f) if (He(f.value, g)) {
            if (f.children === e.children && !Wf.current) {
              b = Zi(a, b, c);
              break a;
            }
          } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
            var h = f.dependencies;
            if (null !== h) {
              g = f.child;
              for (var k = h.firstContext; null !== k; ) {
                if (k.context === d) {
                  if (1 === f.tag) {
                    k = mh(-1, c & -c);
                    k.tag = 2;
                    var l = f.updateQueue;
                    if (null !== l) {
                      l = l.shared;
                      var m = l.pending;
                      null === m ? k.next = k : (k.next = m.next, m.next = k);
                      l.pending = k;
                    }
                  }
                  f.lanes |= c;
                  k = f.alternate;
                  null !== k && (k.lanes |= c);
                  bh(
                    f.return,
                    c,
                    b
                  );
                  h.lanes |= c;
                  break;
                }
                k = k.next;
              }
            } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
            else if (18 === f.tag) {
              g = f.return;
              if (null === g) throw Error(p(341));
              g.lanes |= c;
              h = g.alternate;
              null !== h && (h.lanes |= c);
              bh(g, c, b);
              g = f.sibling;
            } else g = f.child;
            if (null !== g) g.return = f;
            else for (g = f; null !== g; ) {
              if (g === b) {
                g = null;
                break;
              }
              f = g.sibling;
              if (null !== f) {
                f.return = g.return;
                g = f;
                break;
              }
              g = g.return;
            }
            f = g;
          }
          Xi(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
      case 14:
        return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
      case 15:
        return bj(a, b, b.type, b.pendingProps, c);
      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
      case 19:
        return xj(a, b, c);
      case 22:
        return dj(a, b, c);
    }
    throw Error(p(156, b.tag));
  };
  function Fk(a, b) {
    return ac(a, b);
  }
  function $k(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Bg(a, b, c, d) {
    return new $k(a, b, c, d);
  }
  function aj(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function Zk(a) {
    if ("function" === typeof a) return aj(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === Da) return 11;
      if (a === Ga) return 14;
    }
    return 2;
  }
  function Pg(a, b) {
    var c = a.alternate;
    null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }
  function Rg(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) aj(a) && (g = 1);
    else if ("string" === typeof a) g = 5;
    else a: switch (a) {
      case ya:
        return Tg(c.children, e, f, b);
      case za:
        g = 8;
        e |= 8;
        break;
      case Aa:
        return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
      case Ea:
        return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
      case Fa:
        return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
      case Ia:
        return pj(c, e, f, b);
      default:
        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
          case Ba:
            g = 10;
            break a;
          case Ca:
            g = 9;
            break a;
          case Da:
            g = 11;
            break a;
          case Ga:
            g = 14;
            break a;
          case Ha:
            g = 16;
            d = null;
            break a;
        }
        throw Error(p(130, null == a ? a : typeof a, ""));
    }
    b = Bg(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  }
  function Tg(a, b, c, d) {
    a = Bg(7, a, d, b);
    a.lanes = c;
    return a;
  }
  function pj(a, b, c, d) {
    a = Bg(22, a, d, b);
    a.elementType = Ia;
    a.lanes = c;
    a.stateNode = { isHidden: false };
    return a;
  }
  function Qg(a, b, c) {
    a = Bg(6, a, null, b);
    a.lanes = c;
    return a;
  }
  function Sg(a, b, c) {
    b = Bg(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
    return b;
  }
  function al(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
  }
  function bl(a, b, c, d, e, f, g, h, k) {
    a = new al(a, b, c, h, k);
    1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
    f = Bg(3, null, null, b);
    a.current = f;
    f.stateNode = a;
    f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    kh(f);
    return a;
  }
  function cl(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
  }
  function dl(a) {
    if (!a) return Vf;
    a = a._reactInternals;
    a: {
      if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
      var b = a;
      do {
        switch (b.tag) {
          case 3:
            b = b.stateNode.context;
            break a;
          case 1:
            if (Zf(b.type)) {
              b = b.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b = b.return;
      } while (null !== b);
      throw Error(p(171));
    }
    if (1 === a.tag) {
      var c = a.type;
      if (Zf(c)) return bg(a, c, b);
    }
    return b;
  }
  function el(a, b, c, d, e, f, g, h, k) {
    a = bl(c, d, true, a, e, f, g, h, k);
    a.context = dl(null);
    c = a.current;
    d = R();
    e = yi(c);
    f = mh(d, e);
    f.callback = void 0 !== b && null !== b ? b : null;
    nh(c, f, e);
    a.current.lanes = e;
    Ac(a, e, d);
    Dk(a, d);
    return a;
  }
  function fl(a, b, c, d) {
    var e = b.current, f = R(), g = yi(e);
    c = dl(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = mh(f, g);
    b.payload = { element: a };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = nh(e, b, g);
    null !== a && (gi(a, e, g, f), oh(a, e, g));
    return g;
  }
  function gl(a) {
    a = a.current;
    if (!a.child) return null;
    switch (a.child.tag) {
      case 5:
        return a.child.stateNode;
      default:
        return a.child.stateNode;
    }
  }
  function hl(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }
  function il(a, b) {
    hl(a, b);
    (a = a.alternate) && hl(a, b);
  }
  function jl() {
    return null;
  }
  var kl = "function" === typeof reportError ? reportError : function(a) {
    console.error(a);
  };
  function ll(a) {
    this._internalRoot = a;
  }
  ml.prototype.render = ll.prototype.render = function(a) {
    var b = this._internalRoot;
    if (null === b) throw Error(p(409));
    fl(a, b, null, null);
  };
  ml.prototype.unmount = ll.prototype.unmount = function() {
    var a = this._internalRoot;
    if (null !== a) {
      this._internalRoot = null;
      var b = a.containerInfo;
      Rk(function() {
        fl(null, a, null, null);
      });
      b[uf] = null;
    }
  };
  function ml(a) {
    this._internalRoot = a;
  }
  ml.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
      var b = Hc();
      a = { blockedOn: null, target: a, priority: b };
      for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
      Qc.splice(c, 0, a);
      0 === c && Vc(a);
    }
  };
  function nl(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
  }
  function ol2(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
  }
  function pl() {
  }
  function ql(a, b, c, d, e) {
    if (e) {
      if ("function" === typeof d) {
        var f = d;
        d = function() {
          var a2 = gl(g);
          f.call(a2);
        };
      }
      var g = el(b, d, a, 0, null, false, false, "", pl);
      a._reactRootContainer = g;
      a[uf] = g.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk();
      return g;
    }
    for (; e = a.lastChild; ) a.removeChild(e);
    if ("function" === typeof d) {
      var h = d;
      d = function() {
        var a2 = gl(k);
        h.call(a2);
      };
    }
    var k = bl(a, 0, false, null, null, false, false, "", pl);
    a._reactRootContainer = k;
    a[uf] = k.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk(function() {
      fl(b, k, c, d);
    });
    return k;
  }
  function rl(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
      var g = f;
      if ("function" === typeof e) {
        var h = e;
        e = function() {
          var a2 = gl(g);
          h.call(a2);
        };
      }
      fl(b, g, a, e);
    } else g = ql(c, b, a, e, d);
    return gl(g);
  }
  Ec = function(a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;
        if (b.current.memoizedState.isDehydrated) {
          var c = tc(b.pendingLanes);
          0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
        }
        break;
      case 13:
        Rk(function() {
          var b2 = ih(a, 1);
          if (null !== b2) {
            var c2 = R();
            gi(b2, a, 1, c2);
          }
        }), il(a, 1);
    }
  };
  Fc = function(a) {
    if (13 === a.tag) {
      var b = ih(a, 134217728);
      if (null !== b) {
        var c = R();
        gi(b, a, 134217728, c);
      }
      il(a, 134217728);
    }
  };
  Gc = function(a) {
    if (13 === a.tag) {
      var b = yi(a), c = ih(a, b);
      if (null !== c) {
        var d = R();
        gi(c, a, b, d);
      }
      il(a, b);
    }
  };
  Hc = function() {
    return C;
  };
  Ic = function(a, b) {
    var c = C;
    try {
      return C = a, b();
    } finally {
      C = c;
    }
  };
  yb = function(a, b, c) {
    switch (b) {
      case "input":
        bb(a, c);
        b = c.name;
        if ("radio" === c.type && null != b) {
          for (c = a; c.parentNode; ) c = c.parentNode;
          c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
          for (b = 0; b < c.length; b++) {
            var d = c[b];
            if (d !== a && d.form === a.form) {
              var e = Db(d);
              if (!e) throw Error(p(90));
              Wa(d);
              bb(d, e);
            }
          }
        }
        break;
      case "textarea":
        ib(a, c);
        break;
      case "select":
        b = c.value, null != b && fb(a, !!c.multiple, b, false);
    }
  };
  Gb = Qk;
  Hb = Rk;
  var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
  var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
    a = Zb(a);
    return null === a ? null : a.stateNode;
  }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vl.isDisabled && vl.supportsFiber) try {
      kc = vl.inject(ul), lc = vl;
    } catch (a) {
    }
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
  reactDom_production_min.createPortal = function(a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!nl(b)) throw Error(p(200));
    return cl(a, b, null, c);
  };
  reactDom_production_min.createRoot = function(a, b) {
    if (!nl(a)) throw Error(p(299));
    var c = false, d = "", e = kl;
    null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
    b = bl(a, 1, false, null, null, c, false, d, e);
    a[uf] = b.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    return new ll(b);
  };
  reactDom_production_min.findDOMNode = function(a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternals;
    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(p(188));
      a = Object.keys(a).join(",");
      throw Error(p(268, a));
    }
    a = Zb(b);
    a = null === a ? null : a.stateNode;
    return a;
  };
  reactDom_production_min.flushSync = function(a) {
    return Rk(a);
  };
  reactDom_production_min.hydrate = function(a, b, c) {
    if (!ol2(b)) throw Error(p(200));
    return rl(null, a, b, true, c);
  };
  reactDom_production_min.hydrateRoot = function(a, b, c) {
    if (!nl(a)) throw Error(p(405));
    var d = null != c && c.hydratedSources || null, e = false, f = "", g = kl;
    null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
    b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
    a[uf] = b.current;
    sf(a);
    if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
      c,
      e
    );
    return new ml(b);
  };
  reactDom_production_min.render = function(a, b, c) {
    if (!ol2(b)) throw Error(p(200));
    return rl(null, a, b, false, c);
  };
  reactDom_production_min.unmountComponentAtNode = function(a) {
    if (!ol2(a)) throw Error(p(40));
    return a._reactRootContainer ? (Rk(function() {
      rl(null, null, a, false, function() {
        a._reactRootContainer = null;
        a[uf] = null;
      });
    }), true) : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Qk;
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
    if (!ol2(c)) throw Error(p(200));
    if (null == a || void 0 === a._reactInternals) throw Error(p(38));
    return rl(a, b, c, false, d);
  };
  reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
  return reactDom_production_min;
}
var hasRequiredReactDom;
function requireReactDom() {
  if (hasRequiredReactDom) return reactDom.exports;
  hasRequiredReactDom = 1;
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    reactDom.exports = requireReactDom_production_min();
  }
  return reactDom.exports;
}
var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client;
  hasRequiredClient = 1;
  var m = requireReactDom();
  {
    client.createRoot = m.createRoot;
    client.hydrateRoot = m.hydrateRoot;
  }
  return client;
}
var clientExports = requireClient();
var withSelector = { exports: {} };
var useSyncExternalStoreWithSelector_production = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredUseSyncExternalStoreWithSelector_production;
function requireUseSyncExternalStoreWithSelector_production() {
  if (hasRequiredUseSyncExternalStoreWithSelector_production) return useSyncExternalStoreWithSelector_production;
  hasRequiredUseSyncExternalStoreWithSelector_production = 1;
  var React = requireReact();
  function is2(x, y) {
    return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
  }
  var objectIs = "function" === typeof Object.is ? Object.is : is2, useSyncExternalStore = React.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
  useSyncExternalStoreWithSelector_production.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
    var instRef = useRef(null);
    if (null === instRef.current) {
      var inst = { hasValue: false, value: null };
      instRef.current = inst;
    } else inst = instRef.current;
    instRef = useMemo(
      function() {
        function memoizedSelector(nextSnapshot) {
          if (!hasMemo) {
            hasMemo = true;
            memoizedSnapshot = nextSnapshot;
            nextSnapshot = selector(nextSnapshot);
            if (void 0 !== isEqual && inst.hasValue) {
              var currentSelection = inst.value;
              if (isEqual(currentSelection, nextSnapshot))
                return memoizedSelection = currentSelection;
            }
            return memoizedSelection = nextSnapshot;
          }
          currentSelection = memoizedSelection;
          if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
          var nextSelection = selector(nextSnapshot);
          if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
            return memoizedSnapshot = nextSnapshot, currentSelection;
          memoizedSnapshot = nextSnapshot;
          return memoizedSelection = nextSelection;
        }
        var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
        return [
          function() {
            return memoizedSelector(getSnapshot());
          },
          null === maybeGetServerSnapshot ? void 0 : function() {
            return memoizedSelector(maybeGetServerSnapshot());
          }
        ];
      },
      [getSnapshot, getServerSnapshot, selector, isEqual]
    );
    var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
    useEffect(
      function() {
        inst.hasValue = true;
        inst.value = value;
      },
      [value]
    );
    useDebugValue(value);
    return value;
  };
  return useSyncExternalStoreWithSelector_production;
}
var hasRequiredWithSelector;
function requireWithSelector() {
  if (hasRequiredWithSelector) return withSelector.exports;
  hasRequiredWithSelector = 1;
  {
    withSelector.exports = requireUseSyncExternalStoreWithSelector_production();
  }
  return withSelector.exports;
}
var withSelectorExports = requireWithSelector();
function defaultNoopBatch(callback) {
  callback();
}
function createListenerCollection() {
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },
    notify() {
      defaultNoopBatch(() => {
        let listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get() {
      const listeners = [];
      let listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      const listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store2, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  let subscriptionsAmount = 0;
  let selfSubscribed = false;
  function addNestedSub(listener) {
    trySubscribe();
    const cleanupListener = listeners.subscribe(listener);
    let removed = false;
    return () => {
      if (!removed) {
        removed = true;
        cleanupListener();
        tryUnsubscribe();
      }
    };
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return selfSubscribed;
  }
  function trySubscribe() {
    subscriptionsAmount++;
    if (!unsubscribe) {
      unsubscribe = store2.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    subscriptionsAmount--;
    if (unsubscribe && subscriptionsAmount === 0) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  function trySubscribeSelf() {
    if (!selfSubscribed) {
      selfSubscribed = true;
      trySubscribe();
    }
  }
  function tryUnsubscribeSelf() {
    if (selfSubscribed) {
      selfSubscribed = false;
      tryUnsubscribe();
    }
  }
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe: trySubscribeSelf,
    tryUnsubscribe: tryUnsubscribeSelf,
    getListeners: () => listeners
  };
  return subscription;
}
var canUseDOM = () => !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isDOM = /* @__PURE__ */ canUseDOM();
var isRunningInReactNative = () => typeof navigator !== "undefined" && navigator.product === "ReactNative";
var isReactNative = /* @__PURE__ */ isRunningInReactNative();
var getUseIsomorphicLayoutEffect = () => isDOM || isReactNative ? reactExports.useLayoutEffect : reactExports.useEffect;
var useIsomorphicLayoutEffect$1 = /* @__PURE__ */ getUseIsomorphicLayoutEffect();
var ContextKey = /* @__PURE__ */ Symbol.for(`react-redux-context`);
var gT = typeof globalThis !== "undefined" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function getContext() {
  if (!reactExports.createContext) return {};
  const contextMap = gT[ContextKey] ?? (gT[ContextKey] = /* @__PURE__ */ new Map());
  let realContext = contextMap.get(reactExports.createContext);
  if (!realContext) {
    realContext = reactExports.createContext(
      null
    );
    contextMap.set(reactExports.createContext, realContext);
  }
  return realContext;
}
var ReactReduxContext = /* @__PURE__ */ getContext();
function Provider(providerProps) {
  const { children, context, serverState, store: store2 } = providerProps;
  const contextValue = reactExports.useMemo(() => {
    const subscription = createSubscription(store2);
    const baseContextValue = {
      store: store2,
      subscription,
      getServerState: serverState ? () => serverState : void 0
    };
    {
      return baseContextValue;
    }
  }, [store2, serverState]);
  const previousState = reactExports.useMemo(() => store2.getState(), [store2]);
  useIsomorphicLayoutEffect$1(() => {
    const { subscription } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store2.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext;
  return /* @__PURE__ */ reactExports.createElement(Context.Provider, { value: contextValue }, children);
}
var Provider_default = Provider;
function createReduxContextHook(context = ReactReduxContext) {
  return function useReduxContext2() {
    const contextValue = reactExports.useContext(context);
    return contextValue;
  };
}
var useReduxContext = /* @__PURE__ */ createReduxContextHook();
function createStoreHook(context = ReactReduxContext) {
  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : (
    // @ts-ignore
    createReduxContextHook(context)
  );
  const useStore2 = () => {
    const { store: store2 } = useReduxContext2();
    return store2;
  };
  Object.assign(useStore2, {
    withTypes: () => useStore2
  });
  return useStore2;
}
var useStore = /* @__PURE__ */ createStoreHook();
function createDispatchHook(context = ReactReduxContext) {
  const useStore2 = context === ReactReduxContext ? useStore : createStoreHook(context);
  const useDispatch2 = () => {
    const store2 = useStore2();
    return store2.dispatch;
  };
  Object.assign(useDispatch2, {
    withTypes: () => useDispatch2
  });
  return useDispatch2;
}
var useDispatch = /* @__PURE__ */ createDispatchHook();
var refEquality = (a, b) => a === b;
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
  const useSelector2 = (selector, equalityFnOrOptions = {}) => {
    const { equalityFn = refEquality } = typeof equalityFnOrOptions === "function" ? { equalityFn: equalityFnOrOptions } : equalityFnOrOptions;
    const reduxContext = useReduxContext2();
    const { store: store2, subscription, getServerState } = reduxContext;
    reactExports.useRef(true);
    const wrappedSelector = reactExports.useCallback(
      {
        [selector.name](state) {
          const selected = selector(state);
          return selected;
        }
      }[selector.name],
      [selector]
    );
    const selectedState = withSelectorExports.useSyncExternalStoreWithSelector(
      subscription.addNestedSub,
      store2.getState,
      getServerState || store2.getState,
      wrappedSelector,
      equalityFn
    );
    reactExports.useDebugValue(selectedState);
    return selectedState;
  };
  Object.assign(useSelector2, {
    withTypes: () => useSelector2
  });
  return useSelector2;
}
var useSelector = /* @__PURE__ */ createSelectorHook();
var dist = {};
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  Object.defineProperty(dist, "__esModule", { value: true });
  dist.parse = parse;
  dist.serialize = serialize;
  const cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
  const cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
  const domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
  const pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
  const __toString = Object.prototype.toString;
  const NullObject = /* @__PURE__ */ (() => {
    const C = function() {
    };
    C.prototype = /* @__PURE__ */ Object.create(null);
    return C;
  })();
  function parse(str, options) {
    const obj = new NullObject();
    const len = str.length;
    if (len < 2)
      return obj;
    const dec = (options == null ? void 0 : options.decode) || decode;
    let index = 0;
    do {
      const eqIdx = str.indexOf("=", index);
      if (eqIdx === -1)
        break;
      const colonIdx = str.indexOf(";", index);
      const endIdx = colonIdx === -1 ? len : colonIdx;
      if (eqIdx > endIdx) {
        index = str.lastIndexOf(";", eqIdx - 1) + 1;
        continue;
      }
      const keyStartIdx = startIndex(str, index, eqIdx);
      const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
      const key = str.slice(keyStartIdx, keyEndIdx);
      if (obj[key] === void 0) {
        let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
        let valEndIdx = endIndex(str, endIdx, valStartIdx);
        const value = dec(str.slice(valStartIdx, valEndIdx));
        obj[key] = value;
      }
      index = endIdx + 1;
    } while (index < len);
    return obj;
  }
  function startIndex(str, index, max) {
    do {
      const code = str.charCodeAt(index);
      if (code !== 32 && code !== 9)
        return index;
    } while (++index < max);
    return max;
  }
  function endIndex(str, index, min) {
    while (index > min) {
      const code = str.charCodeAt(--index);
      if (code !== 32 && code !== 9)
        return index + 1;
    }
    return min;
  }
  function serialize(name, val, options) {
    const enc = (options == null ? void 0 : options.encode) || encodeURIComponent;
    if (!cookieNameRegExp.test(name)) {
      throw new TypeError(`argument name is invalid: ${name}`);
    }
    const value = enc(val);
    if (!cookieValueRegExp.test(value)) {
      throw new TypeError(`argument val is invalid: ${val}`);
    }
    let str = name + "=" + value;
    if (!options)
      return str;
    if (options.maxAge !== void 0) {
      if (!Number.isInteger(options.maxAge)) {
        throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
      }
      str += "; Max-Age=" + options.maxAge;
    }
    if (options.domain) {
      if (!domainValueRegExp.test(options.domain)) {
        throw new TypeError(`option domain is invalid: ${options.domain}`);
      }
      str += "; Domain=" + options.domain;
    }
    if (options.path) {
      if (!pathValueRegExp.test(options.path)) {
        throw new TypeError(`option path is invalid: ${options.path}`);
      }
      str += "; Path=" + options.path;
    }
    if (options.expires) {
      if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
        throw new TypeError(`option expires is invalid: ${options.expires}`);
      }
      str += "; Expires=" + options.expires.toUTCString();
    }
    if (options.httpOnly) {
      str += "; HttpOnly";
    }
    if (options.secure) {
      str += "; Secure";
    }
    if (options.partitioned) {
      str += "; Partitioned";
    }
    if (options.priority) {
      const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : void 0;
      switch (priority) {
        case "low":
          str += "; Priority=Low";
          break;
        case "medium":
          str += "; Priority=Medium";
          break;
        case "high":
          str += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${options.priority}`);
      }
    }
    if (options.sameSite) {
      const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
      switch (sameSite) {
        case true:
        case "strict":
          str += "; SameSite=Strict";
          break;
        case "lax":
          str += "; SameSite=Lax";
          break;
        case "none":
          str += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
      }
    }
    return str;
  }
  function decode(str) {
    if (str.indexOf("%") === -1)
      return str;
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  }
  function isDate(val) {
    return __toString.call(val) === "[object Date]";
  }
  return dist;
}
requireDist();
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var PopStateEventType = "popstate";
function createBrowserHistory(options = {}) {
  function createBrowserLocation(window2, globalHistory) {
    let { pathname, search, hash } = window2.location;
    return createLocation(
      "",
      { pathname, search, hash },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(
    createBrowserLocation,
    createBrowserHref,
    null,
    options
  );
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined") console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substring(2, 10);
}
function getHistoryState(location2, index) {
  return {
    usr: location2.state,
    key: location2.key,
    idx: index
  };
}
function createLocation(current2, to, state = null, key) {
  let location2 = {
    pathname: typeof current2 === "string" ? current2 : current2.pathname,
    search: "",
    hash: "",
    ...typeof to === "string" ? parsePath(to) : to,
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  };
  return location2;
}
function createPath({
  pathname = "/",
  search = "",
  hash = ""
}) {
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substring(hashIndex);
      path = path.substring(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substring(searchIndex);
      path = path.substring(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref2, validateLocation, options = {}) {
  let { window: window2 = document.defaultView, v5Compat = false } = options;
  let globalHistory = window2.history;
  let action = "POP";
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState({ ...globalHistory.state, idx: index }, "");
  }
  function getIndex() {
    let state = globalHistory.state || { idx: null };
    return state.idx;
  }
  function handlePop() {
    action = "POP";
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({ action, location: history.location, delta });
    }
  }
  function push(to, state) {
    action = "PUSH";
    let location2 = createLocation(history.location, to, state);
    index = getIndex() + 1;
    let historyState = getHistoryState(location2, index);
    let url2 = history.createHref(location2);
    try {
      globalHistory.pushState(historyState, "", url2);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url2);
    }
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 1 });
    }
  }
  function replace2(to, state) {
    action = "REPLACE";
    let location2 = createLocation(history.location, to, state);
    index = getIndex();
    let historyState = getHistoryState(location2, index);
    let url2 = history.createHref(location2);
    globalHistory.replaceState(historyState, "", url2);
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 0 });
    }
  }
  function createURL(to) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    href = href.replace(/ $/, "%20");
    invariant(
      base,
      `No window.location.(origin|href) available to create URL for href: ${href}`
    );
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref2(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url2 = createURL(to);
      return {
        pathname: url2.pathname,
        search: url2.search,
        hash: url2.hash
      };
    },
    push,
    replace: replace2,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}
var immutableRouteKeys = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children"
]);
function isIndexRoute(route) {
  return route.index === true;
}
function convertRoutesToDataRoutes(routes, mapRouteProperties2, parentPath = [], manifest = {}) {
  return routes.map((route, index) => {
    let treePath = [...parentPath, String(index)];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(
      route.index !== true || !route.children,
      `Cannot specify children on an index route`
    );
    invariant(
      !manifest[id],
      `Found a route id collision on id "${id}".  Route id's must be globally unique within Data Router usages`
    );
    if (isIndexRoute(route)) {
      let indexRoute = {
        ...route,
        ...mapRouteProperties2(route),
        id
      };
      manifest[id] = indexRoute;
      return indexRoute;
    } else {
      let pathOrLayoutRoute = {
        ...route,
        ...mapRouteProperties2(route),
        id,
        children: void 0
      };
      manifest[id] = pathOrLayoutRoute;
      if (route.children) {
        pathOrLayoutRoute.children = convertRoutesToDataRoutes(
          route.children,
          mapRouteProperties2,
          treePath,
          manifest
        );
      }
      return pathOrLayoutRoute;
    }
  });
}
function matchRoutes(routes, locationArg, basename = "/") {
  return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
  let location2 = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location2.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(
      branches[i],
      decoded,
      allowPartial
    );
  }
  return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
  let { route, pathname, params } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}
function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "") {
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(
        meta.relativePath.startsWith(parentPath),
        `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      );
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _a;
    if (route.path === "" || !((_a = route.path) == null ? void 0 : _a.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(
    ...restExploded.map(
      (subpath) => subpath === "" ? required : [required, subpath].join("/")
    )
  );
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map(
    (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
  );
}
function rankRouteBranches(branches) {
  branches.sort(
    (a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(
      a.routesMeta.map((meta) => meta.childrenIndex),
      b.routesMeta.map((meta) => meta.childrenIndex)
    )
  );
}
var paramRe = /^:[\w-]+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s) => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce(
    (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
    initialScore
  );
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname, allowPartial = false) {
  let { routesMeta } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath(
      { path: meta.relativePath, caseSensitive: meta.caseSensitive, end },
      remainingPathname
    );
    let route = meta.route;
    if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
      match = matchPath(
        {
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end: false
        },
        remainingPathname
      );
    }
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(
        joinPaths([matchedPathname, match.pathnameBase])
      ),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = { path: pattern, caseSensitive: false, end: true };
  }
  let [matcher, compiledParams] = compilePath(
    pattern.path,
    pattern.caseSensitive,
    pattern.end
  );
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce(
    (memo2, { paramName, isOptional }, index) => {
      if (paramName === "*") {
        let splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }
      const value = captureGroups[index];
      if (isOptional && !value) {
        memo2[paramName] = void 0;
      } else {
        memo2[paramName] = (value || "").replace(/%2F/g, "/");
      }
      return memo2;
    },
    {}
  );
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive = false, end = true) {
  warning(
    path === "*" || !path.endsWith("*") || path.endsWith("/*"),
    `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
  );
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (_, paramName, isOptional) => {
      params.push({ paramName, isOptional: isOptional != null });
      return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
    }
  );
  if (path.endsWith("*")) {
    params.push({ paramName: "*" });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(
      false,
      `The URL path "${value}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
    );
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to, fromPathname = "/") {
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
    path
  )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function getPathContributingMatches(matches) {
  return matches.filter(
    (match, index) => index === 0 || match.route.path && match.route.path.length > 0
  );
}
function getResolveToMatches(matches) {
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches.map(
    (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
  );
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = { ...toArg };
    invariant(
      !to.pathname || !to.pathname.includes("?"),
      getInvalidPathError("?", "pathname", "search", to)
    );
    invariant(
      !to.pathname || !to.pathname.includes("#"),
      getInvalidPathError("#", "pathname", "hash", to)
    );
    invariant(
      !to.search || !to.search.includes("#"),
      getInvalidPathError("#", "search", "hash", to)
    );
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
var ErrorResponseImpl = class {
  constructor(status, statusText, data2, internal = false) {
    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;
    if (data2 instanceof Error) {
      this.data = data2.toString();
      this.error = data2;
    } else {
      this.data = data2;
    }
  }
};
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
var validMutationMethodsArr = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
var validMutationMethods = new Set(
  validMutationMethodsArr
);
var validRequestMethodsArr = [
  "GET",
  ...validMutationMethodsArr
];
var validRequestMethods = new Set(validRequestMethodsArr);
var redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
var redirectPreserveMethodStatusCodes = /* @__PURE__ */ new Set([307, 308]);
var IDLE_NAVIGATION = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
};
var IDLE_FETCHER = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
};
var IDLE_BLOCKER = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
};
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var defaultMapRouteProperties = (route) => ({
  hasErrorBoundary: Boolean(route.hasErrorBoundary)
});
var TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
var ResetLoaderDataSymbol = Symbol("ResetLoaderData");
function createRouter(init) {
  const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : void 0;
  const isBrowser2 = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
  invariant(
    init.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let mapRouteProperties2 = init.mapRouteProperties || defaultMapRouteProperties;
  let manifest = {};
  let dataRoutes = convertRoutesToDataRoutes(
    init.routes,
    mapRouteProperties2,
    void 0,
    manifest
  );
  let inFlightDataRoutes;
  let basename = init.basename || "/";
  let dataStrategyImpl = init.dataStrategy || defaultDataStrategy;
  let patchRoutesOnNavigationImpl = init.patchRoutesOnNavigation;
  let future = {
    ...init.future
  };
  let unlistenHistory = null;
  let subscribers = /* @__PURE__ */ new Set();
  let savedScrollPositions2 = null;
  let getScrollRestorationKey2 = null;
  let getScrollPosition = null;
  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
  let initialErrors = null;
  if (initialMatches == null && !patchRoutesOnNavigationImpl) {
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let { matches, route } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = { [route.id]: error };
  }
  if (initialMatches && !init.hydrationData) {
    let fogOfWar = checkFogOfWar(
      initialMatches,
      dataRoutes,
      init.history.location.pathname
    );
    if (fogOfWar.active) {
      initialMatches = null;
    }
  }
  let initialized;
  if (!initialMatches) {
    initialized = false;
    initialMatches = [];
    let fogOfWar = checkFogOfWar(
      null,
      dataRoutes,
      init.history.location.pathname
    );
    if (fogOfWar.active && fogOfWar.matches) {
      initialMatches = fogOfWar.matches;
    }
  } else if (initialMatches.some((m) => m.route.lazy)) {
    initialized = false;
  } else if (!initialMatches.some((m) => m.route.loader)) {
    initialized = true;
  } else {
    let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
    let errors = init.hydrationData ? init.hydrationData.errors : null;
    if (errors) {
      let idx = initialMatches.findIndex(
        (m) => errors[m.route.id] !== void 0
      );
      initialized = initialMatches.slice(0, idx + 1).every((m) => !shouldLoadRouteOnHydration(m.route, loaderData, errors));
    } else {
      initialized = initialMatches.every(
        (m) => !shouldLoadRouteOnHydration(m.route, loaderData, errors)
      );
    }
  }
  let router2;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  };
  let pendingAction = "POP";
  let pendingPreventScrollReset = false;
  let pendingNavigationController;
  let pendingViewTransitionEnabled = false;
  let appliedViewTransitions = /* @__PURE__ */ new Map();
  let removePageHideEventListener = null;
  let isUninterruptedRevalidation = false;
  let isRevalidationRequired = false;
  let cancelledFetcherLoads = /* @__PURE__ */ new Set();
  let fetchControllers = /* @__PURE__ */ new Map();
  let incrementingLoadId = 0;
  let pendingNavigationLoadId = -1;
  let fetchReloadIds = /* @__PURE__ */ new Map();
  let fetchRedirectIds = /* @__PURE__ */ new Set();
  let fetchLoadMatches = /* @__PURE__ */ new Map();
  let activeFetchers = /* @__PURE__ */ new Map();
  let fetchersQueuedForDeletion = /* @__PURE__ */ new Set();
  let blockerFunctions = /* @__PURE__ */ new Map();
  let unblockBlockerHistoryUpdate = void 0;
  let pendingRevalidationDfd = null;
  function initialize() {
    unlistenHistory = init.history.listen(
      ({ action: historyAction, location: location2, delta }) => {
        if (unblockBlockerHistoryUpdate) {
          unblockBlockerHistoryUpdate();
          unblockBlockerHistoryUpdate = void 0;
          return;
        }
        warning(
          blockerFunctions.size === 0 || delta != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let blockerKey = shouldBlockNavigation({
          currentLocation: state.location,
          nextLocation: location2,
          historyAction
        });
        if (blockerKey && delta != null) {
          let nextHistoryUpdatePromise = new Promise((resolve) => {
            unblockBlockerHistoryUpdate = resolve;
          });
          init.history.go(delta * -1);
          updateBlocker(blockerKey, {
            state: "blocked",
            location: location2,
            proceed() {
              updateBlocker(blockerKey, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location: location2
              });
              nextHistoryUpdatePromise.then(() => init.history.go(delta));
            },
            reset() {
              let blockers = new Map(state.blockers);
              blockers.set(blockerKey, IDLE_BLOCKER);
              updateState({ blockers });
            }
          });
          return;
        }
        return startNavigation(historyAction, location2);
      }
    );
    if (isBrowser2) {
      restoreAppliedTransitions(routerWindow, appliedViewTransitions);
      let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
      routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
      removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
    }
    if (!state.initialized) {
      startNavigation("POP", state.location, {
        initialHydration: true
      });
    }
    return router2;
  }
  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }
    if (removePageHideEventListener) {
      removePageHideEventListener();
    }
    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  }
  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  }
  function updateState(newState, opts = {}) {
    state = {
      ...state,
      ...newState
    };
    let unmountedFetchers = [];
    let mountedFetchers = [];
    state.fetchers.forEach((fetcher, key) => {
      if (fetcher.state === "idle") {
        if (fetchersQueuedForDeletion.has(key)) {
          unmountedFetchers.push(key);
        } else {
          mountedFetchers.push(key);
        }
      }
    });
    [...subscribers].forEach(
      (subscriber) => subscriber(state, {
        deletedFetchers: unmountedFetchers,
        viewTransitionOpts: opts.viewTransitionOpts,
        flushSync: opts.flushSync === true
      })
    );
    unmountedFetchers.forEach((key) => deleteFetcher(key));
    mountedFetchers.forEach((key) => state.fetchers.delete(key));
  }
  function completeNavigation(location2, newState, { flushSync } = {}) {
    var _a, _b;
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_a = location2.state) == null ? void 0 : _a._isRedirect) !== true;
    let actionData;
    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        actionData = null;
      }
    } else if (isActionReload) {
      actionData = state.actionData;
    } else {
      actionData = null;
    }
    let loaderData = newState.loaderData ? mergeLoaderData(
      state.loaderData,
      newState.loaderData,
      newState.matches || [],
      newState.errors
    ) : state.loaderData;
    let blockers = state.blockers;
    if (blockers.size > 0) {
      blockers = new Map(blockers);
      blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
    }
    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_b = location2.state) == null ? void 0 : _b._isRedirect) !== true;
    if (inFlightDataRoutes) {
      dataRoutes = inFlightDataRoutes;
      inFlightDataRoutes = void 0;
    }
    if (isUninterruptedRevalidation) ;
    else if (pendingAction === "POP") ;
    else if (pendingAction === "PUSH") {
      init.history.push(location2, location2.state);
    } else if (pendingAction === "REPLACE") {
      init.history.replace(location2, location2.state);
    }
    let viewTransitionOpts;
    if (pendingAction === "POP") {
      let priorPaths = appliedViewTransitions.get(state.location.pathname);
      if (priorPaths && priorPaths.has(location2.pathname)) {
        viewTransitionOpts = {
          currentLocation: state.location,
          nextLocation: location2
        };
      } else if (appliedViewTransitions.has(location2.pathname)) {
        viewTransitionOpts = {
          currentLocation: location2,
          nextLocation: state.location
        };
      }
    } else if (pendingViewTransitionEnabled) {
      let toPaths = appliedViewTransitions.get(state.location.pathname);
      if (toPaths) {
        toPaths.add(location2.pathname);
      } else {
        toPaths = /* @__PURE__ */ new Set([location2.pathname]);
        appliedViewTransitions.set(state.location.pathname, toPaths);
      }
      viewTransitionOpts = {
        currentLocation: state.location,
        nextLocation: location2
      };
    }
    updateState(
      {
        ...newState,
        // matches, errors, fetchers go through as-is
        actionData,
        loaderData,
        historyAction: pendingAction,
        location: location2,
        initialized: true,
        navigation: IDLE_NAVIGATION,
        revalidation: "idle",
        restoreScrollPosition: getSavedScrollPosition(
          location2,
          newState.matches || state.matches
        ),
        preventScrollReset,
        blockers
      },
      {
        viewTransitionOpts,
        flushSync: flushSync === true
      }
    );
    pendingAction = "POP";
    pendingPreventScrollReset = false;
    pendingViewTransitionEnabled = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    pendingRevalidationDfd == null ? void 0 : pendingRevalidationDfd.resolve();
    pendingRevalidationDfd = null;
  }
  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }
    let normalizedPath = normalizeTo(
      state.location,
      state.matches,
      basename,
      to,
      opts == null ? void 0 : opts.fromRouteId,
      opts == null ? void 0 : opts.relative
    );
    let { path, submission, error } = normalizeNavigateOptions(
      false,
      normalizedPath,
      opts
    );
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state);
    nextLocation = {
      ...nextLocation,
      ...init.history.encodeLocation(nextLocation)
    };
    let userReplace = opts && opts.replace != null ? opts.replace : void 0;
    let historyAction = "PUSH";
    if (userReplace === true) {
      historyAction = "REPLACE";
    } else if (userReplace === false) ;
    else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      historyAction = "REPLACE";
    }
    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : void 0;
    let flushSync = (opts && opts.flushSync) === true;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });
    if (blockerKey) {
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,
        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: nextLocation
          });
          navigate(to, opts);
        },
        reset() {
          let blockers = new Map(state.blockers);
          blockers.set(blockerKey, IDLE_BLOCKER);
          updateState({ blockers });
        }
      });
      return;
    }
    await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace,
      enableViewTransition: opts && opts.viewTransition,
      flushSync
    });
  }
  function revalidate() {
    if (!pendingRevalidationDfd) {
      pendingRevalidationDfd = createDeferred();
    }
    interruptActiveLoads();
    updateState({ revalidation: "loading" });
    let promise = pendingRevalidationDfd.promise;
    if (state.navigation.state === "submitting") {
      return promise;
    }
    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return promise;
    }
    startNavigation(
      pendingAction || state.historyAction,
      state.navigation.location,
      {
        overrideNavigation: state.navigation,
        // Proxy through any rending view transition
        enableViewTransition: pendingViewTransitionEnabled === true
      }
    );
    return promise;
  }
  async function startNavigation(historyAction, location2, opts) {
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(routesToUse, location2, basename);
    let flushSync = (opts && opts.flushSync) === true;
    let fogOfWar = checkFogOfWar(matches, routesToUse, location2.pathname);
    if (fogOfWar.active && fogOfWar.matches) {
      matches = fogOfWar.matches;
    }
    if (!matches) {
      let { error, notFoundMatches, route } = handleNavigational404(
        location2.pathname
      );
      completeNavigation(
        location2,
        {
          matches: notFoundMatches,
          loaderData: {},
          errors: {
            [route.id]: error
          }
        },
        { flushSync }
      );
      return;
    }
    if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location2) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location2, { matches }, { flushSync });
      return;
    }
    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(
      init.history,
      location2,
      pendingNavigationController.signal,
      opts && opts.submission
    );
    let pendingActionResult;
    if (opts && opts.pendingError) {
      pendingActionResult = [
        findNearestBoundary(matches).route.id,
        { type: "error", error: opts.pendingError }
      ];
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      let actionResult = await handleAction(
        request,
        location2,
        opts.submission,
        matches,
        fogOfWar.active,
        { replace: opts.replace, flushSync }
      );
      if (actionResult.shortCircuited) {
        return;
      }
      if (actionResult.pendingActionResult) {
        let [routeId, result] = actionResult.pendingActionResult;
        if (isErrorResult(result) && isRouteErrorResponse(result.error) && result.error.status === 404) {
          pendingNavigationController = null;
          completeNavigation(location2, {
            matches: actionResult.matches,
            loaderData: {},
            errors: {
              [routeId]: result.error
            }
          });
          return;
        }
      }
      matches = actionResult.matches || matches;
      pendingActionResult = actionResult.pendingActionResult;
      loadingNavigation = getLoadingNavigation(location2, opts.submission);
      flushSync = false;
      fogOfWar.active = false;
      request = createClientSideRequest(
        init.history,
        request.url,
        request.signal
      );
    }
    let {
      shortCircuited,
      matches: updatedMatches,
      loaderData,
      errors
    } = await handleLoaders(
      request,
      location2,
      matches,
      fogOfWar.active,
      loadingNavigation,
      opts && opts.submission,
      opts && opts.fetcherSubmission,
      opts && opts.replace,
      opts && opts.initialHydration === true,
      flushSync,
      pendingActionResult
    );
    if (shortCircuited) {
      return;
    }
    pendingNavigationController = null;
    completeNavigation(location2, {
      matches: updatedMatches || matches,
      ...getActionDataForCommit(pendingActionResult),
      loaderData,
      errors
    });
  }
  async function handleAction(request, location2, submission, matches, isFogOfWar, opts = {}) {
    interruptActiveLoads();
    let navigation = getSubmittingNavigation(location2, submission);
    updateState({ navigation }, { flushSync: opts.flushSync === true });
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(
        matches,
        location2.pathname,
        request.signal
      );
      if (discoverResult.type === "aborted") {
        return { shortCircuited: true };
      } else if (discoverResult.type === "error") {
        let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
        return {
          matches: discoverResult.partialMatches,
          pendingActionResult: [
            boundaryId,
            {
              type: "error",
              error: discoverResult.error
            }
          ]
        };
      } else if (!discoverResult.matches) {
        let { notFoundMatches, error, route } = handleNavigational404(
          location2.pathname
        );
        return {
          matches: notFoundMatches,
          pendingActionResult: [
            route.id,
            {
              type: "error",
              error
            }
          ]
        };
      } else {
        matches = discoverResult.matches;
      }
    }
    let result;
    let actionMatch = getTargetMatch(matches, location2);
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      result = {
        type: "error",
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location2.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      let results = await callDataStrategy(
        "action",
        state,
        request,
        [actionMatch],
        matches,
        null
      );
      result = results[actionMatch.route.id];
      if (request.signal.aborted) {
        return { shortCircuited: true };
      }
    }
    if (isRedirectResult(result)) {
      let replace2;
      if (opts && opts.replace != null) {
        replace2 = opts.replace;
      } else {
        let location22 = normalizeRedirectLocation(
          result.response.headers.get("Location"),
          new URL(request.url),
          basename
        );
        replace2 = location22 === state.location.pathname + state.location.search;
      }
      await startRedirectNavigation(request, result, true, {
        submission,
        replace: replace2
      });
      return { shortCircuited: true };
    }
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      if ((opts && opts.replace) !== true) {
        pendingAction = "PUSH";
      }
      return {
        matches,
        pendingActionResult: [boundaryMatch.route.id, result]
      };
    }
    return {
      matches,
      pendingActionResult: [actionMatch.route.id, result]
    };
  }
  async function handleLoaders(request, location2, matches, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace2, initialHydration, flushSync, pendingActionResult) {
    let loadingNavigation = overrideNavigation || getLoadingNavigation(location2, submission);
    let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
    let shouldUpdateNavigationState = !isUninterruptedRevalidation && !initialHydration;
    if (isFogOfWar) {
      if (shouldUpdateNavigationState) {
        let actionData = getUpdatedActionData(pendingActionResult);
        updateState(
          {
            navigation: loadingNavigation,
            ...actionData !== void 0 ? { actionData } : {}
          },
          {
            flushSync
          }
        );
      }
      let discoverResult = await discoverRoutes(
        matches,
        location2.pathname,
        request.signal
      );
      if (discoverResult.type === "aborted") {
        return { shortCircuited: true };
      } else if (discoverResult.type === "error") {
        let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
        return {
          matches: discoverResult.partialMatches,
          loaderData: {},
          errors: {
            [boundaryId]: discoverResult.error
          }
        };
      } else if (!discoverResult.matches) {
        let { error, notFoundMatches, route } = handleNavigational404(
          location2.pathname
        );
        return {
          matches: notFoundMatches,
          loaderData: {},
          errors: {
            [route.id]: error
          }
        };
      } else {
        matches = discoverResult.matches;
      }
    }
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(
      init.history,
      state,
      matches,
      activeSubmission,
      location2,
      initialHydration === true,
      isRevalidationRequired,
      cancelledFetcherLoads,
      fetchersQueuedForDeletion,
      fetchLoadMatches,
      fetchRedirectIds,
      routesToUse,
      basename,
      pendingActionResult
    );
    pendingNavigationLoadId = ++incrementingLoadId;
    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      let updatedFetchers2 = markFetchRedirectsDone();
      completeNavigation(
        location2,
        {
          matches,
          loaderData: {},
          // Commit pending error if we're short circuiting
          errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? { [pendingActionResult[0]]: pendingActionResult[1].error } : null,
          ...getActionDataForCommit(pendingActionResult),
          ...updatedFetchers2 ? { fetchers: new Map(state.fetchers) } : {}
        },
        { flushSync }
      );
      return { shortCircuited: true };
    }
    if (shouldUpdateNavigationState) {
      let updates = {};
      if (!isFogOfWar) {
        updates.navigation = loadingNavigation;
        let actionData = getUpdatedActionData(pendingActionResult);
        if (actionData !== void 0) {
          updates.actionData = actionData;
        }
      }
      if (revalidatingFetchers.length > 0) {
        updates.fetchers = getUpdatedRevalidatingFetchers(revalidatingFetchers);
      }
      updateState(updates, { flushSync });
    }
    revalidatingFetchers.forEach((rf) => {
      abortFetcher(rf.key);
      if (rf.controller) {
        fetchControllers.set(rf.key, rf.controller);
      }
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((f) => abortFetcher(f.key));
    if (pendingNavigationController) {
      pendingNavigationController.signal.addEventListener(
        "abort",
        abortPendingFetchRevalidations
      );
    }
    let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(
      state,
      matches,
      matchesToLoad,
      revalidatingFetchers,
      request
    );
    if (request.signal.aborted) {
      return { shortCircuited: true };
    }
    if (pendingNavigationController) {
      pendingNavigationController.signal.removeEventListener(
        "abort",
        abortPendingFetchRevalidations
      );
    }
    revalidatingFetchers.forEach((rf) => fetchControllers.delete(rf.key));
    let redirect2 = findRedirect(loaderResults);
    if (redirect2) {
      await startRedirectNavigation(request, redirect2.result, true, {
        replace: replace2
      });
      return { shortCircuited: true };
    }
    redirect2 = findRedirect(fetcherResults);
    if (redirect2) {
      fetchRedirectIds.add(redirect2.key);
      await startRedirectNavigation(request, redirect2.result, true, {
        replace: replace2
      });
      return { shortCircuited: true };
    }
    let { loaderData, errors } = processLoaderData(
      state,
      matches,
      loaderResults,
      pendingActionResult,
      revalidatingFetchers,
      fetcherResults
    );
    if (initialHydration && state.errors) {
      errors = { ...state.errors, ...errors };
    }
    let updatedFetchers = markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
    return {
      matches,
      loaderData,
      errors,
      ...shouldUpdateFetchers ? { fetchers: new Map(state.fetchers) } : {}
    };
  }
  function getUpdatedActionData(pendingActionResult) {
    if (pendingActionResult && !isErrorResult(pendingActionResult[1])) {
      return {
        [pendingActionResult[0]]: pendingActionResult[1].data
      };
    } else if (state.actionData) {
      if (Object.keys(state.actionData).length === 0) {
        return null;
      } else {
        return state.actionData;
      }
    }
  }
  function getUpdatedRevalidatingFetchers(revalidatingFetchers) {
    revalidatingFetchers.forEach((rf) => {
      let fetcher = state.fetchers.get(rf.key);
      let revalidatingFetcher = getLoadingFetcher(
        void 0,
        fetcher ? fetcher.data : void 0
      );
      state.fetchers.set(rf.key, revalidatingFetcher);
    });
    return new Map(state.fetchers);
  }
  async function fetch2(key, routeId, href, opts) {
    abortFetcher(key);
    let flushSync = (opts && opts.flushSync) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let normalizedPath = normalizeTo(
      state.location,
      state.matches,
      basename,
      href,
      routeId,
      opts == null ? void 0 : opts.relative
    );
    let matches = matchRoutes(routesToUse, normalizedPath, basename);
    let fogOfWar = checkFogOfWar(matches, routesToUse, normalizedPath);
    if (fogOfWar.active && fogOfWar.matches) {
      matches = fogOfWar.matches;
    }
    if (!matches) {
      setFetcherError(
        key,
        routeId,
        getInternalRouterError(404, { pathname: normalizedPath }),
        { flushSync }
      );
      return;
    }
    let { path, submission, error } = normalizeNavigateOptions(
      true,
      normalizedPath,
      opts
    );
    if (error) {
      setFetcherError(key, routeId, error, { flushSync });
      return;
    }
    let match = getTargetMatch(matches, path);
    let preventScrollReset = (opts && opts.preventScrollReset) === true;
    if (submission && isMutationMethod(submission.formMethod)) {
      await handleFetcherAction(
        key,
        routeId,
        path,
        match,
        matches,
        fogOfWar.active,
        flushSync,
        preventScrollReset,
        submission
      );
      return;
    }
    fetchLoadMatches.set(key, { routeId, path });
    await handleFetcherLoader(
      key,
      routeId,
      path,
      match,
      matches,
      fogOfWar.active,
      flushSync,
      preventScrollReset,
      submission
    );
  }
  async function handleFetcherAction(key, routeId, path, match, requestMatches, isFogOfWar, flushSync, preventScrollReset, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);
    function detectAndHandle405Error(m) {
      if (!m.route.action && !m.route.lazy) {
        let error = getInternalRouterError(405, {
          method: submission.formMethod,
          pathname: path,
          routeId
        });
        setFetcherError(key, routeId, error, { flushSync });
        return true;
      }
      return false;
    }
    if (!isFogOfWar && detectAndHandle405Error(match)) {
      return;
    }
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
      flushSync
    });
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(
      init.history,
      path,
      abortController.signal,
      submission
    );
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(
        requestMatches,
        path,
        fetchRequest.signal
      );
      if (discoverResult.type === "aborted") {
        return;
      } else if (discoverResult.type === "error") {
        setFetcherError(key, routeId, discoverResult.error, { flushSync });
        return;
      } else if (!discoverResult.matches) {
        setFetcherError(
          key,
          routeId,
          getInternalRouterError(404, { pathname: path }),
          { flushSync }
        );
        return;
      } else {
        requestMatches = discoverResult.matches;
        match = getTargetMatch(requestMatches, path);
        if (detectAndHandle405Error(match)) {
          return;
        }
      }
    }
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let actionResults = await callDataStrategy(
      "action",
      state,
      fetchRequest,
      [match],
      requestMatches,
      key
    );
    let actionResult = actionResults[match.route.id];
    if (fetchRequest.signal.aborted) {
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }
      return;
    }
    if (fetchersQueuedForDeletion.has(key)) {
      if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
        updateFetcherState(key, getDoneFetcher(void 0));
        return;
      }
    } else {
      if (isRedirectResult(actionResult)) {
        fetchControllers.delete(key);
        if (pendingNavigationLoadId > originatingLoadId) {
          updateFetcherState(key, getDoneFetcher(void 0));
          return;
        } else {
          fetchRedirectIds.add(key);
          updateFetcherState(key, getLoadingFetcher(submission));
          return startRedirectNavigation(fetchRequest, actionResult, false, {
            fetcherSubmission: submission,
            preventScrollReset
          });
        }
      }
      if (isErrorResult(actionResult)) {
        setFetcherError(key, routeId, actionResult.error);
        return;
      }
    }
    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(
      init.history,
      nextLocation,
      abortController.signal
    );
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let loadFetcher = getLoadingFetcher(submission, actionResult.data);
    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(
      init.history,
      state,
      matches,
      submission,
      nextLocation,
      false,
      isRevalidationRequired,
      cancelledFetcherLoads,
      fetchersQueuedForDeletion,
      fetchLoadMatches,
      fetchRedirectIds,
      routesToUse,
      basename,
      [match.route.id, actionResult]
    );
    revalidatingFetchers.filter((rf) => rf.key !== key).forEach((rf) => {
      let staleKey = rf.key;
      let existingFetcher2 = state.fetchers.get(staleKey);
      let revalidatingFetcher = getLoadingFetcher(
        void 0,
        existingFetcher2 ? existingFetcher2.data : void 0
      );
      state.fetchers.set(staleKey, revalidatingFetcher);
      abortFetcher(staleKey);
      if (rf.controller) {
        fetchControllers.set(staleKey, rf.controller);
      }
    });
    updateState({ fetchers: new Map(state.fetchers) });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((rf) => abortFetcher(rf.key));
    abortController.signal.addEventListener(
      "abort",
      abortPendingFetchRevalidations
    );
    let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(
      state,
      matches,
      matchesToLoad,
      revalidatingFetchers,
      revalidationRequest
    );
    if (abortController.signal.aborted) {
      return;
    }
    abortController.signal.removeEventListener(
      "abort",
      abortPendingFetchRevalidations
    );
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach((r) => fetchControllers.delete(r.key));
    let redirect2 = findRedirect(loaderResults);
    if (redirect2) {
      return startRedirectNavigation(
        revalidationRequest,
        redirect2.result,
        false,
        { preventScrollReset }
      );
    }
    redirect2 = findRedirect(fetcherResults);
    if (redirect2) {
      fetchRedirectIds.add(redirect2.key);
      return startRedirectNavigation(
        revalidationRequest,
        redirect2.result,
        false,
        { preventScrollReset }
      );
    }
    let { loaderData, errors } = processLoaderData(
      state,
      matches,
      loaderResults,
      void 0,
      revalidatingFetchers,
      fetcherResults
    );
    if (state.fetchers.has(key)) {
      let doneFetcher = getDoneFetcher(actionResult.data);
      state.fetchers.set(key, doneFetcher);
    }
    abortStaleFetchLoads(loadId);
    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      updateState({
        errors,
        loaderData: mergeLoaderData(
          state.loaderData,
          loaderData,
          matches,
          errors
        ),
        fetchers: new Map(state.fetchers)
      });
      isRevalidationRequired = false;
    }
  }
  async function handleFetcherLoader(key, routeId, path, match, matches, isFogOfWar, flushSync, preventScrollReset, submission) {
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(
      key,
      getLoadingFetcher(
        submission,
        existingFetcher ? existingFetcher.data : void 0
      ),
      { flushSync }
    );
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(
      init.history,
      path,
      abortController.signal
    );
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(
        matches,
        path,
        fetchRequest.signal
      );
      if (discoverResult.type === "aborted") {
        return;
      } else if (discoverResult.type === "error") {
        setFetcherError(key, routeId, discoverResult.error, { flushSync });
        return;
      } else if (!discoverResult.matches) {
        setFetcherError(
          key,
          routeId,
          getInternalRouterError(404, { pathname: path }),
          { flushSync }
        );
        return;
      } else {
        matches = discoverResult.matches;
        match = getTargetMatch(matches, path);
      }
    }
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let results = await callDataStrategy(
      "loader",
      state,
      fetchRequest,
      [match],
      matches,
      key
    );
    let result = results[match.route.id];
    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }
    if (fetchRequest.signal.aborted) {
      return;
    }
    if (fetchersQueuedForDeletion.has(key)) {
      updateFetcherState(key, getDoneFetcher(void 0));
      return;
    }
    if (isRedirectResult(result)) {
      if (pendingNavigationLoadId > originatingLoadId) {
        updateFetcherState(key, getDoneFetcher(void 0));
        return;
      } else {
        fetchRedirectIds.add(key);
        await startRedirectNavigation(fetchRequest, result, false, {
          preventScrollReset
        });
        return;
      }
    }
    if (isErrorResult(result)) {
      setFetcherError(key, routeId, result.error);
      return;
    }
    updateFetcherState(key, getDoneFetcher(result.data));
  }
  async function startRedirectNavigation(request, redirect2, isNavigation, {
    submission,
    fetcherSubmission,
    preventScrollReset,
    replace: replace2
  } = {}) {
    if (redirect2.response.headers.has("X-Remix-Revalidate")) {
      isRevalidationRequired = true;
    }
    let location2 = redirect2.response.headers.get("Location");
    invariant(location2, "Expected a Location header on the redirect Response");
    location2 = normalizeRedirectLocation(
      location2,
      new URL(request.url),
      basename
    );
    let redirectLocation = createLocation(state.location, location2, {
      _isRedirect: true
    });
    if (isBrowser2) {
      let isDocumentReload = false;
      if (redirect2.response.headers.has("X-Remix-Reload-Document")) {
        isDocumentReload = true;
      } else if (ABSOLUTE_URL_REGEX.test(location2)) {
        const url2 = init.history.createURL(location2);
        isDocumentReload = // Hard reload if it's an absolute URL to a new origin
        url2.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        stripBasename(url2.pathname, basename) == null;
      }
      if (isDocumentReload) {
        if (replace2) {
          routerWindow.location.replace(location2);
        } else {
          routerWindow.location.assign(location2);
        }
        return;
      }
    }
    pendingNavigationController = null;
    let redirectNavigationType = replace2 === true || redirect2.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH";
    let { formMethod, formAction, formEncType } = state.navigation;
    if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
      submission = getSubmissionFromNavigation(state.navigation);
    }
    let activeSubmission = submission || fetcherSubmission;
    if (redirectPreserveMethodStatusCodes.has(redirect2.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
      await startNavigation(redirectNavigationType, redirectLocation, {
        submission: {
          ...activeSubmission,
          formAction: location2
        },
        // Preserve these flags across redirects
        preventScrollReset: preventScrollReset || pendingPreventScrollReset,
        enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
      });
    } else {
      let overrideNavigation = getLoadingNavigation(
        redirectLocation,
        submission
      );
      await startNavigation(redirectNavigationType, redirectLocation, {
        overrideNavigation,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission,
        // Preserve these flags across redirects
        preventScrollReset: preventScrollReset || pendingPreventScrollReset,
        enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
      });
    }
  }
  async function callDataStrategy(type, state2, request, matchesToLoad, matches, fetcherKey) {
    let results;
    let dataResults = {};
    try {
      results = await callDataStrategyImpl(
        dataStrategyImpl,
        type,
        state2,
        request,
        matchesToLoad,
        matches,
        fetcherKey,
        manifest,
        mapRouteProperties2
      );
    } catch (e) {
      matchesToLoad.forEach((m) => {
        dataResults[m.route.id] = {
          type: "error",
          error: e
        };
      });
      return dataResults;
    }
    for (let [routeId, result] of Object.entries(results)) {
      if (isRedirectDataStrategyResult(result)) {
        let response = result.result;
        dataResults[routeId] = {
          type: "redirect",
          response: normalizeRelativeRoutingRedirectResponse(
            response,
            request,
            routeId,
            matches,
            basename
          )
        };
      } else {
        dataResults[routeId] = await convertDataStrategyResultToDataResult(
          result
        );
      }
    }
    return dataResults;
  }
  async function callLoadersAndMaybeResolveData(state2, matches, matchesToLoad, fetchersToLoad, request) {
    let loaderResultsPromise = callDataStrategy(
      "loader",
      state2,
      request,
      matchesToLoad,
      matches,
      null
    );
    let fetcherResultsPromise = Promise.all(
      fetchersToLoad.map(async (f) => {
        if (f.matches && f.match && f.controller) {
          let results = await callDataStrategy(
            "loader",
            state2,
            createClientSideRequest(init.history, f.path, f.controller.signal),
            [f.match],
            f.matches,
            f.key
          );
          let result = results[f.match.route.id];
          return { [f.key]: result };
        } else {
          return Promise.resolve({
            [f.key]: {
              type: "error",
              error: getInternalRouterError(404, {
                pathname: f.path
              })
            }
          });
        }
      })
    );
    let loaderResults = await loaderResultsPromise;
    let fetcherResults = (await fetcherResultsPromise).reduce(
      (acc, r) => Object.assign(acc, r),
      {}
    );
    return {
      loaderResults,
      fetcherResults
    };
  }
  function interruptActiveLoads() {
    isRevalidationRequired = true;
    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.add(key);
      }
      abortFetcher(key);
    });
  }
  function updateFetcherState(key, fetcher, opts = {}) {
    state.fetchers.set(key, fetcher);
    updateState(
      { fetchers: new Map(state.fetchers) },
      { flushSync: (opts && opts.flushSync) === true }
    );
  }
  function setFetcherError(key, routeId, error, opts = {}) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState(
      {
        errors: {
          [boundaryMatch.route.id]: error
        },
        fetchers: new Map(state.fetchers)
      },
      { flushSync: (opts && opts.flushSync) === true }
    );
  }
  function getFetcher(key) {
    activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
    if (fetchersQueuedForDeletion.has(key)) {
      fetchersQueuedForDeletion.delete(key);
    }
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function deleteFetcher(key) {
    let fetcher = state.fetchers.get(key);
    if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
      abortFetcher(key);
    }
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    fetchersQueuedForDeletion.delete(key);
    cancelledFetcherLoads.delete(key);
    state.fetchers.delete(key);
  }
  function queueFetcherForDeletion(key) {
    let count = (activeFetchers.get(key) || 0) - 1;
    if (count <= 0) {
      activeFetchers.delete(key);
      fetchersQueuedForDeletion.add(key);
    } else {
      activeFetchers.set(key, count);
    }
    updateState({ fetchers: new Map(state.fetchers) });
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    if (controller) {
      controller.abort();
      fetchControllers.delete(key);
    }
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = getDoneFetcher(fetcher.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    let updatedFetchers = false;
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, `Expected fetcher: ${key}`);
      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
        updatedFetchers = true;
      }
    }
    markFetchersDone(doneKeys);
    return updatedFetchers;
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, `Expected fetcher: ${key}`);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }
  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }
    return blocker;
  }
  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  }
  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    invariant(
      blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked",
      `Invalid blocker state transition: ${blocker.state} -> ${newBlocker.state}`
    );
    let blockers = new Map(state.blockers);
    blockers.set(key, newBlocker);
    updateState({ blockers });
  }
  function shouldBlockNavigation({
    currentLocation,
    nextLocation,
    historyAction
  }) {
    if (blockerFunctions.size === 0) {
      return;
    }
    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }
    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);
    if (blocker && blocker.state === "proceeding") {
      return;
    }
    if (blockerFunction({ currentLocation, nextLocation, historyAction })) {
      return blockerKey;
    }
  }
  function handleNavigational404(pathname) {
    let error = getInternalRouterError(404, { pathname });
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let { matches, route } = getShortCircuitMatches(routesToUse);
    return { notFoundMatches: matches, route, error };
  }
  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions2 = positions;
    getScrollPosition = getPosition;
    getScrollRestorationKey2 = getKey || null;
    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);
      if (y != null) {
        updateState({ restoreScrollPosition: y });
      }
    }
    return () => {
      savedScrollPositions2 = null;
      getScrollPosition = null;
      getScrollRestorationKey2 = null;
    };
  }
  function getScrollKey(location2, matches) {
    if (getScrollRestorationKey2) {
      let key = getScrollRestorationKey2(
        location2,
        matches.map((m) => convertRouteMatchToUiMatch(m, state.loaderData))
      );
      return key || location2.key;
    }
    return location2.key;
  }
  function saveScrollPosition(location2, matches) {
    if (savedScrollPositions2 && getScrollPosition) {
      let key = getScrollKey(location2, matches);
      savedScrollPositions2[key] = getScrollPosition();
    }
  }
  function getSavedScrollPosition(location2, matches) {
    if (savedScrollPositions2) {
      let key = getScrollKey(location2, matches);
      let y = savedScrollPositions2[key];
      if (typeof y === "number") {
        return y;
      }
    }
    return null;
  }
  function checkFogOfWar(matches, routesToUse, pathname) {
    if (patchRoutesOnNavigationImpl) {
      if (!matches) {
        let fogMatches = matchRoutesImpl(
          routesToUse,
          pathname,
          basename,
          true
        );
        return { active: true, matches: fogMatches || [] };
      } else {
        if (Object.keys(matches[0].params).length > 0) {
          let partialMatches = matchRoutesImpl(
            routesToUse,
            pathname,
            basename,
            true
          );
          return { active: true, matches: partialMatches };
        }
      }
    }
    return { active: false, matches: null };
  }
  async function discoverRoutes(matches, pathname, signal) {
    if (!patchRoutesOnNavigationImpl) {
      return { type: "success", matches };
    }
    let partialMatches = matches;
    while (true) {
      let isNonHMR = inFlightDataRoutes == null;
      let routesToUse = inFlightDataRoutes || dataRoutes;
      let localManifest = manifest;
      try {
        await patchRoutesOnNavigationImpl({
          path: pathname,
          matches: partialMatches,
          patch: (routeId, children) => {
            if (signal.aborted) return;
            patchRoutesImpl(
              routeId,
              children,
              routesToUse,
              localManifest,
              mapRouteProperties2
            );
          }
        });
      } catch (e) {
        return { type: "error", error: e, partialMatches };
      } finally {
        if (isNonHMR && !signal.aborted) {
          dataRoutes = [...dataRoutes];
        }
      }
      if (signal.aborted) {
        return { type: "aborted" };
      }
      let newMatches = matchRoutes(routesToUse, pathname, basename);
      if (newMatches) {
        return { type: "success", matches: newMatches };
      }
      let newPartialMatches = matchRoutesImpl(
        routesToUse,
        pathname,
        basename,
        true
      );
      if (!newPartialMatches || partialMatches.length === newPartialMatches.length && partialMatches.every(
        (m, i) => m.route.id === newPartialMatches[i].route.id
      )) {
        return { type: "success", matches: null };
      }
      partialMatches = newPartialMatches;
    }
  }
  function _internalSetRoutes(newRoutes) {
    manifest = {};
    inFlightDataRoutes = convertRoutesToDataRoutes(
      newRoutes,
      mapRouteProperties2,
      void 0,
      manifest
    );
  }
  function patchRoutes(routeId, children) {
    let isNonHMR = inFlightDataRoutes == null;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    patchRoutesImpl(
      routeId,
      children,
      routesToUse,
      manifest,
      mapRouteProperties2
    );
    if (isNonHMR) {
      dataRoutes = [...dataRoutes];
      updateState({});
    }
  }
  router2 = {
    get basename() {
      return basename;
    },
    get future() {
      return future;
    },
    get state() {
      return state;
    },
    get routes() {
      return dataRoutes;
    },
    get window() {
      return routerWindow;
    },
    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch: fetch2,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (to) => init.history.createHref(to),
    encodeLocation: (to) => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher: queueFetcherForDeletion,
    dispose,
    getBlocker,
    deleteBlocker,
    patchRoutes,
    _internalFetchControllers: fetchControllers,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes
  };
  return router2;
}
function isSubmissionNavigation(opts) {
  return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== void 0);
}
function normalizeTo(location2, matches, basename, to, fromRouteId, relative) {
  let contextualMatches;
  let activeRouteMatch;
  if (fromRouteId) {
    contextualMatches = [];
    for (let match of matches) {
      contextualMatches.push(match);
      if (match.route.id === fromRouteId) {
        activeRouteMatch = match;
        break;
      }
    }
  } else {
    contextualMatches = matches;
    activeRouteMatch = matches[matches.length - 1];
  }
  let path = resolveTo(
    to ? to : ".",
    getResolveToMatches(contextualMatches),
    stripBasename(location2.pathname, basename) || location2.pathname,
    relative === "path"
  );
  if (to == null) {
    path.search = location2.search;
    path.hash = location2.hash;
  }
  if ((to == null || to === "" || to === ".") && activeRouteMatch) {
    let nakedIndex = hasNakedIndexQuery(path.search);
    if (activeRouteMatch.route.index && !nakedIndex) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    } else if (!activeRouteMatch.route.index && nakedIndex) {
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      params.delete("index");
      indexValues.filter((v) => v).forEach((v) => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? `?${qs}` : "";
    }
  }
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function normalizeNavigateOptions(isFetcher, path, opts) {
  if (!opts || !isSubmissionNavigation(opts)) {
    return { path };
  }
  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, { method: opts.formMethod })
    };
  }
  let getInvalidBodyError = () => ({
    path,
    error: getInternalRouterError(400, { type: "invalid-body" })
  });
  let rawFormMethod = opts.formMethod || "get";
  let formMethod = rawFormMethod.toUpperCase();
  let formAction = stripHashFromPath(path);
  if (opts.body !== void 0) {
    if (opts.formEncType === "text/plain") {
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      let text2 = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(opts.body.entries()).reduce(
          (acc, [name, value]) => `${acc}${name}=${value}
`,
          ""
        )
      ) : String(opts.body);
      return {
        path,
        submission: {
          formMethod,
          formAction,
          formEncType: opts.formEncType,
          formData: void 0,
          json: void 0,
          text: text2
        }
      };
    } else if (opts.formEncType === "application/json") {
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      try {
        let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
        return {
          path,
          submission: {
            formMethod,
            formAction,
            formEncType: opts.formEncType,
            formData: void 0,
            json,
            text: void 0
          }
        };
      } catch (e) {
        return getInvalidBodyError();
      }
    }
  }
  invariant(
    typeof FormData === "function",
    "FormData is not available in this environment"
  );
  let searchParams;
  let formData;
  if (opts.formData) {
    searchParams = convertFormDataToSearchParams(opts.formData);
    formData = opts.formData;
  } else if (opts.body instanceof FormData) {
    searchParams = convertFormDataToSearchParams(opts.body);
    formData = opts.body;
  } else if (opts.body instanceof URLSearchParams) {
    searchParams = opts.body;
    formData = convertSearchParamsToFormData(searchParams);
  } else if (opts.body == null) {
    searchParams = new URLSearchParams();
    formData = new FormData();
  } else {
    try {
      searchParams = new URLSearchParams(opts.body);
      formData = convertSearchParamsToFormData(searchParams);
    } catch (e) {
      return getInvalidBodyError();
    }
  }
  let submission = {
    formMethod,
    formAction,
    formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
    formData,
    json: void 0,
    text: void 0
  };
  if (isMutationMethod(submission.formMethod)) {
    return { path, submission };
  }
  let parsedPath = parsePath(path);
  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }
  parsedPath.search = `?${searchParams}`;
  return { path: createPath(parsedPath), submission };
}
function getLoaderMatchesUntilBoundary(matches, boundaryId, includeBoundary = false) {
  let index = matches.findIndex((m) => m.route.id === boundaryId);
  if (index >= 0) {
    return matches.slice(0, includeBoundary ? index + 1 : index);
  }
  return matches;
}
function getMatchesToLoad(history, state, matches, submission, location2, initialHydration, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult) {
  let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : void 0;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location2);
  let boundaryMatches = matches;
  if (initialHydration && state.errors) {
    boundaryMatches = getLoaderMatchesUntilBoundary(
      matches,
      Object.keys(state.errors)[0],
      true
    );
  } else if (pendingActionResult && isErrorResult(pendingActionResult[1])) {
    boundaryMatches = getLoaderMatchesUntilBoundary(
      matches,
      pendingActionResult[0]
    );
  }
  let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : void 0;
  let shouldSkipRevalidation = actionStatus && actionStatus >= 400;
  let navigationMatches = boundaryMatches.filter((match, index) => {
    let { route } = match;
    if (route.lazy) {
      return true;
    }
    if (route.loader == null) {
      return false;
    }
    if (initialHydration) {
      return shouldLoadRouteOnHydration(route, state.loaderData, state.errors);
    }
    if (isNewLoader(state.loaderData, state.matches[index], match)) {
      return true;
    }
    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, {
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params,
      ...submission,
      actionResult,
      actionStatus,
      defaultShouldRevalidate: shouldSkipRevalidation ? false : (
        // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
        isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
        currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
      )
    });
  });
  let revalidatingFetchers = [];
  fetchLoadMatches.forEach((f, key) => {
    if (initialHydration || !matches.some((m) => m.route.id === f.routeId) || fetchersQueuedForDeletion.has(key)) {
      return;
    }
    let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
    if (!fetcherMatches) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    let fetcher = state.fetchers.get(key);
    let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
    let shouldRevalidate = false;
    if (fetchRedirectIds.has(key)) {
      shouldRevalidate = false;
    } else if (cancelledFetcherLoads.has(key)) {
      cancelledFetcherLoads.delete(key);
      shouldRevalidate = true;
    } else if (fetcher && fetcher.state !== "idle" && fetcher.data === void 0) {
      shouldRevalidate = isRevalidationRequired;
    } else {
      shouldRevalidate = shouldRevalidateLoader(fetcherMatch, {
        currentUrl,
        currentParams: state.matches[state.matches.length - 1].params,
        nextUrl,
        nextParams: matches[matches.length - 1].params,
        ...submission,
        actionResult,
        actionStatus,
        defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
      });
    }
    if (shouldRevalidate) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: fetcherMatches,
        match: fetcherMatch,
        controller: new AbortController()
      });
    }
  });
  return [navigationMatches, revalidatingFetchers];
}
function shouldLoadRouteOnHydration(route, loaderData, errors) {
  if (route.lazy) {
    return true;
  }
  if (!route.loader) {
    return false;
  }
  let hasData = loaderData != null && loaderData[route.id] !== void 0;
  let hasError = errors != null && errors[route.id] !== void 0;
  if (!hasData && hasError) {
    return false;
  }
  if (typeof route.loader === "function" && route.loader.hydrate === true) {
    return true;
  }
  return !hasData && !hasError;
}
function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew = (
    // [a] -> [a, b]
    !currentMatch || // [a, b] -> [a, c]
    match.route.id !== currentMatch.route.id
  );
  let isMissingData = !currentLoaderData.hasOwnProperty(match.route.id);
  return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}
function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);
    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }
  return arg.defaultShouldRevalidate;
}
function patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties2) {
  let childrenToPatch;
  if (routeId) {
    let route = manifest[routeId];
    invariant(
      route,
      `No route found to patch children into: routeId = ${routeId}`
    );
    if (!route.children) {
      route.children = [];
    }
    childrenToPatch = route.children;
  } else {
    childrenToPatch = routesToUse;
  }
  let uniqueChildren = children.filter(
    (newRoute) => !childrenToPatch.some(
      (existingRoute) => isSameRoute(newRoute, existingRoute)
    )
  );
  let newRoutes = convertRoutesToDataRoutes(
    uniqueChildren,
    mapRouteProperties2,
    [routeId || "_", "patch", String((childrenToPatch == null ? void 0 : childrenToPatch.length) || "0")],
    manifest
  );
  childrenToPatch.push(...newRoutes);
}
function isSameRoute(newRoute, existingRoute) {
  if ("id" in newRoute && "id" in existingRoute && newRoute.id === existingRoute.id) {
    return true;
  }
  if (!(newRoute.index === existingRoute.index && newRoute.path === existingRoute.path && newRoute.caseSensitive === existingRoute.caseSensitive)) {
    return false;
  }
  if ((!newRoute.children || newRoute.children.length === 0) && (!existingRoute.children || existingRoute.children.length === 0)) {
    return true;
  }
  return newRoute.children.every(
    (aChild, i) => {
      var _a;
      return (_a = existingRoute.children) == null ? void 0 : _a.some((bChild) => isSameRoute(aChild, bChild));
    }
  );
}
async function loadLazyRouteModule(route, mapRouteProperties2, manifest) {
  if (!route.lazy) {
    return;
  }
  let lazyRoute = await route.lazy();
  if (!route.lazy) {
    return;
  }
  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest");
  let routeUpdates = {};
  for (let lazyRouteProperty in lazyRoute) {
    let staticRouteValue = routeToUpdate[lazyRouteProperty];
    let isPropertyStaticallyDefined = staticRouteValue !== void 0 && // This property isn't static since it should always be updated based
    // on the route updates
    lazyRouteProperty !== "hasErrorBoundary";
    warning(
      !isPropertyStaticallyDefined,
      `Route "${routeToUpdate.id}" has a static property "${lazyRouteProperty}" defined but its lazy function is also returning a value for this property. The lazy route property "${lazyRouteProperty}" will be ignored.`
    );
    if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
      routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
  }
  Object.assign(routeToUpdate, routeUpdates);
  Object.assign(routeToUpdate, {
    // To keep things framework agnostic, we use the provided `mapRouteProperties`
    // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
    // since the logic will differ between frameworks.
    ...mapRouteProperties2(routeToUpdate),
    lazy: void 0
  });
}
async function defaultDataStrategy({
  matches
}) {
  let matchesToLoad = matches.filter((m) => m.shouldLoad);
  let results = await Promise.all(matchesToLoad.map((m) => m.resolve()));
  return results.reduce(
    (acc, result, i) => Object.assign(acc, { [matchesToLoad[i].route.id]: result }),
    {}
  );
}
async function callDataStrategyImpl(dataStrategyImpl, type, state, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties2, requestContext) {
  let loadRouteDefinitionsPromises = matches.map(
    (m) => m.route.lazy ? loadLazyRouteModule(m.route, mapRouteProperties2, manifest) : void 0
  );
  let dsMatches = matches.map((match, i) => {
    let loadRoutePromise = loadRouteDefinitionsPromises[i];
    let shouldLoad = matchesToLoad.some((m) => m.route.id === match.route.id);
    let resolve = async (handlerOverride) => {
      if (handlerOverride && request.method === "GET" && (match.route.lazy || match.route.loader)) {
        shouldLoad = true;
      }
      return shouldLoad ? callLoaderOrAction(
        type,
        request,
        match,
        loadRoutePromise,
        handlerOverride,
        requestContext
      ) : Promise.resolve({ type: "data", result: void 0 });
    };
    return {
      ...match,
      shouldLoad,
      resolve
    };
  });
  let results = await dataStrategyImpl({
    matches: dsMatches,
    request,
    params: matches[0].params,
    fetcherKey,
    context: requestContext
  });
  try {
    await Promise.all(loadRouteDefinitionsPromises);
  } catch (e) {
  }
  return results;
}
async function callLoaderOrAction(type, request, match, loadRoutePromise, handlerOverride, staticContext) {
  let result;
  let onReject;
  let runHandler = (handler) => {
    let reject;
    let abortPromise = new Promise((_, r) => reject = r);
    onReject = () => reject();
    request.signal.addEventListener("abort", onReject);
    let actualHandler = (ctx) => {
      if (typeof handler !== "function") {
        return Promise.reject(
          new Error(
            `You cannot call the handler for a route which defines a boolean "${type}" [routeId: ${match.route.id}]`
          )
        );
      }
      return handler(
        {
          request,
          params: match.params,
          context: staticContext
        },
        ...ctx !== void 0 ? [ctx] : []
      );
    };
    let handlerPromise = (async () => {
      try {
        let val = await (handlerOverride ? handlerOverride((ctx) => actualHandler(ctx)) : actualHandler());
        return { type: "data", result: val };
      } catch (e) {
        return { type: "error", result: e };
      }
    })();
    return Promise.race([handlerPromise, abortPromise]);
  };
  try {
    let handler = match.route[type];
    if (loadRoutePromise) {
      if (handler) {
        let handlerError;
        let [value] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          runHandler(handler).catch((e) => {
            handlerError = e;
          }),
          loadRoutePromise
        ]);
        if (handlerError !== void 0) {
          throw handlerError;
        }
        result = value;
      } else {
        await loadRoutePromise;
        handler = match.route[type];
        if (handler) {
          result = await runHandler(handler);
        } else if (type === "action") {
          let url2 = new URL(request.url);
          let pathname = url2.pathname + url2.search;
          throw getInternalRouterError(405, {
            method: request.method,
            pathname,
            routeId: match.route.id
          });
        } else {
          return { type: "data", result: void 0 };
        }
      }
    } else if (!handler) {
      let url2 = new URL(request.url);
      let pathname = url2.pathname + url2.search;
      throw getInternalRouterError(404, {
        pathname
      });
    } else {
      result = await runHandler(handler);
    }
  } catch (e) {
    return { type: "error", result: e };
  } finally {
    if (onReject) {
      request.signal.removeEventListener("abort", onReject);
    }
  }
  return result;
}
async function convertDataStrategyResultToDataResult(dataStrategyResult) {
  var _a, _b, _c, _d;
  let { result, type } = dataStrategyResult;
  if (isResponse(result)) {
    let data2;
    try {
      let contentType = result.headers.get("Content-Type");
      if (contentType && /\bapplication\/json\b/.test(contentType)) {
        if (result.body == null) {
          data2 = null;
        } else {
          data2 = await result.json();
        }
      } else {
        data2 = await result.text();
      }
    } catch (e) {
      return { type: "error", error: e };
    }
    if (type === "error") {
      return {
        type: "error",
        error: new ErrorResponseImpl(result.status, result.statusText, data2),
        statusCode: result.status,
        headers: result.headers
      };
    }
    return {
      type: "data",
      data: data2,
      statusCode: result.status,
      headers: result.headers
    };
  }
  if (type === "error") {
    if (isDataWithResponseInit(result)) {
      if (result.data instanceof Error) {
        return {
          type: "error",
          error: result.data,
          statusCode: (_a = result.init) == null ? void 0 : _a.status
        };
      }
      result = new ErrorResponseImpl(
        ((_b = result.init) == null ? void 0 : _b.status) || 500,
        void 0,
        result.data
      );
    }
    return {
      type: "error",
      error: result,
      statusCode: isRouteErrorResponse(result) ? result.status : void 0
    };
  }
  if (isDataWithResponseInit(result)) {
    return {
      type: "data",
      data: result.data,
      statusCode: (_c = result.init) == null ? void 0 : _c.status,
      headers: ((_d = result.init) == null ? void 0 : _d.headers) ? new Headers(result.init.headers) : void 0
    };
  }
  return { type: "data", data: result };
}
function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename) {
  let location2 = response.headers.get("Location");
  invariant(
    location2,
    "Redirects returned/thrown from loaders/actions must have a Location header"
  );
  if (!ABSOLUTE_URL_REGEX.test(location2)) {
    let trimmedMatches = matches.slice(
      0,
      matches.findIndex((m) => m.route.id === routeId) + 1
    );
    location2 = normalizeTo(
      new URL(request.url),
      trimmedMatches,
      basename,
      location2
    );
    response.headers.set("Location", location2);
  }
  return response;
}
function normalizeRedirectLocation(location2, currentUrl, basename) {
  if (ABSOLUTE_URL_REGEX.test(location2)) {
    let normalizedLocation = location2;
    let url2 = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
    let isSameBasename = stripBasename(url2.pathname, basename) != null;
    if (url2.origin === currentUrl.origin && isSameBasename) {
      return url2.pathname + url2.search + url2.hash;
    }
  }
  return location2;
}
function createClientSideRequest(history, location2, signal, submission) {
  let url2 = history.createURL(stripHashFromPath(location2)).toString();
  let init = { signal };
  if (submission && isMutationMethod(submission.formMethod)) {
    let { formMethod, formEncType } = submission;
    init.method = formMethod.toUpperCase();
    if (formEncType === "application/json") {
      init.headers = new Headers({ "Content-Type": formEncType });
      init.body = JSON.stringify(submission.json);
    } else if (formEncType === "text/plain") {
      init.body = submission.text;
    } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
      init.body = convertFormDataToSearchParams(submission.formData);
    } else {
      init.body = submission.formData;
    }
  }
  return new Request(url2, init);
}
function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();
  for (let [key, value] of formData.entries()) {
    searchParams.append(key, typeof value === "string" ? value : value.name);
  }
  return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
  let formData = new FormData();
  for (let [key, value] of searchParams.entries()) {
    formData.append(key, value);
  }
  return formData;
}
function processRouteLoaderData(matches, results, pendingActionResult, isStaticHandler = false, skipLoaderErrorBubbling = false) {
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {};
  let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : void 0;
  matches.forEach((match) => {
    if (!(match.route.id in results)) {
      return;
    }
    let id = match.route.id;
    let result = results[id];
    invariant(
      !isRedirectResult(result),
      "Cannot handle redirect results in processLoaderData"
    );
    if (isErrorResult(result)) {
      let error = result.error;
      if (pendingError !== void 0) {
        error = pendingError;
        pendingError = void 0;
      }
      errors = errors || {};
      if (skipLoaderErrorBubbling) {
        errors[id] = error;
      } else {
        let boundaryMatch = findNearestBoundary(matches, id);
        if (errors[boundaryMatch.route.id] == null) {
          errors[boundaryMatch.route.id] = error;
        }
      }
      if (!isStaticHandler) {
        loaderData[id] = ResetLoaderDataSymbol;
      }
      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      loaderData[id] = result.data;
      if (result.statusCode && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  });
  if (pendingError !== void 0 && pendingActionResult) {
    errors = { [pendingActionResult[0]]: pendingError };
    loaderData[pendingActionResult[0]] = void 0;
  }
  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}
function processLoaderData(state, matches, results, pendingActionResult, revalidatingFetchers, fetcherResults) {
  let { loaderData, errors } = processRouteLoaderData(
    matches,
    results,
    pendingActionResult
  );
  revalidatingFetchers.forEach((rf) => {
    let { key, match, controller } = rf;
    let result = fetcherResults[key];
    invariant(result, "Did not find corresponding fetcher result");
    if (controller && controller.signal.aborted) {
      return;
    } else if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = {
          ...errors,
          [boundaryMatch.route.id]: result.error
        };
      }
      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else {
      let doneFetcher = getDoneFetcher(result.data);
      state.fetchers.set(key, doneFetcher);
    }
  });
  return { loaderData, errors };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = Object.entries(newLoaderData).filter(([, v]) => v !== ResetLoaderDataSymbol).reduce((merged, [k, v]) => {
    merged[k] = v;
    return merged;
  }, {});
  for (let match of matches) {
    let id = match.route.id;
    if (!newLoaderData.hasOwnProperty(id) && loaderData.hasOwnProperty(id) && match.route.loader) {
      mergedLoaderData[id] = loaderData[id];
    }
    if (errors && errors.hasOwnProperty(id)) {
      break;
    }
  }
  return mergedLoaderData;
}
function getActionDataForCommit(pendingActionResult) {
  if (!pendingActionResult) {
    return {};
  }
  return isErrorResult(pendingActionResult[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [pendingActionResult[0]]: pendingActionResult[1].data
    }
  };
}
function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find((m) => m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes) {
  let route = routes.length === 1 ? routes[0] : routes.find((r) => r.index || !r.path || r.path === "/") || {
    id: `__shim-error-route__`
  };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route
      }
    ],
    route
  };
}
function getInternalRouterError(status, {
  pathname,
  routeId,
  method,
  type,
  message
} = {}) {
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";
  if (status === 400) {
    statusText = "Bad Request";
    if (method && pathname && routeId) {
      errorMessage = `You made a ${method} request to "${pathname}" but did not provide a \`loader\` for route "${routeId}", so there is no way to handle the request.`;
    } else if (type === "invalid-body") {
      errorMessage = "Unable to encode submission body";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = `Route "${routeId}" does not match URL "${pathname}"`;
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = `No route matches URL "${pathname}"`;
  } else if (status === 405) {
    statusText = "Method Not Allowed";
    if (method && pathname && routeId) {
      errorMessage = `You made a ${method.toUpperCase()} request to "${pathname}" but did not provide an \`action\` for route "${routeId}", so there is no way to handle the request.`;
    } else if (method) {
      errorMessage = `Invalid request method "${method.toUpperCase()}"`;
    }
  }
  return new ErrorResponseImpl(
    status || 500,
    statusText,
    new Error(errorMessage),
    true
  );
}
function findRedirect(results) {
  let entries = Object.entries(results);
  for (let i = entries.length - 1; i >= 0; i--) {
    let [key, result] = entries[i];
    if (isRedirectResult(result)) {
      return { key, result };
    }
  }
}
function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath({ ...parsedPath, hash: "" });
}
function isHashChangeOnly(a, b) {
  if (a.pathname !== b.pathname || a.search !== b.search) {
    return false;
  }
  if (a.hash === "") {
    return b.hash !== "";
  } else if (a.hash === b.hash) {
    return true;
  } else if (b.hash !== "") {
    return true;
  }
  return false;
}
function isRedirectDataStrategyResult(result) {
  return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
}
function isErrorResult(result) {
  return result.type === "error";
}
function isRedirectResult(result) {
  return (result && result.type) === "redirect";
}
function isDataWithResponseInit(value) {
  return typeof value === "object" && value != null && "type" in value && "data" in value && "init" in value && value.type === "DataWithResponseInit";
}
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isValidMethod(method) {
  return validRequestMethods.has(method.toUpperCase());
}
function isMutationMethod(method) {
  return validMutationMethods.has(method.toUpperCase());
}
function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some((v) => v === "");
}
function getTargetMatch(matches, location2) {
  let search = typeof location2 === "string" ? parsePath(location2).search : location2.search;
  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    return matches[matches.length - 1];
  }
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
  let { formMethod, formAction, formEncType, text: text2, formData, json } = navigation;
  if (!formMethod || !formAction || !formEncType) {
    return;
  }
  if (text2 != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: void 0,
      json: void 0,
      text: text2
    };
  } else if (formData != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData,
      json: void 0,
      text: void 0
    };
  } else if (json !== void 0) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: void 0,
      json,
      text: void 0
    };
  }
}
function getLoadingNavigation(location2, submission) {
  if (submission) {
    let navigation = {
      state: "loading",
      location: location2,
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text
    };
    return navigation;
  } else {
    let navigation = {
      state: "loading",
      location: location2,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    };
    return navigation;
  }
}
function getSubmittingNavigation(location2, submission) {
  let navigation = {
    state: "submitting",
    location: location2,
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text
  };
  return navigation;
}
function getLoadingFetcher(submission, data2) {
  if (submission) {
    let fetcher = {
      state: "loading",
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text,
      data: data2
    };
    return fetcher;
  } else {
    let fetcher = {
      state: "loading",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
      data: data2
    };
    return fetcher;
  }
}
function getSubmittingFetcher(submission, existingFetcher) {
  let fetcher = {
    state: "submitting",
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text,
    data: existingFetcher ? existingFetcher.data : void 0
  };
  return fetcher;
}
function getDoneFetcher(data2) {
  let fetcher = {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: data2
  };
  return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
  try {
    let sessionPositions = _window.sessionStorage.getItem(
      TRANSITIONS_STORAGE_KEY
    );
    if (sessionPositions) {
      let json = JSON.parse(sessionPositions);
      for (let [k, v] of Object.entries(json || {})) {
        if (v && Array.isArray(v)) {
          transitions.set(k, new Set(v || []));
        }
      }
    }
  } catch (e) {
  }
}
function persistAppliedTransitions(_window, transitions) {
  if (transitions.size > 0) {
    let json = {};
    for (let [k, v] of transitions) {
      json[k] = [...v];
    }
    try {
      _window.sessionStorage.setItem(
        TRANSITIONS_STORAGE_KEY,
        JSON.stringify(json)
      );
    } catch (error) {
      warning(
        false,
        `Failed to save applied view transitions in sessionStorage (${error}).`
      );
    }
  }
}
function createDeferred() {
  let resolve;
  let reject;
  let promise = new Promise((res, rej) => {
    resolve = async (val) => {
      res(val);
      try {
        await promise;
      } catch (e) {
      }
    };
    reject = async (error) => {
      rej(error);
      try {
        await promise;
      } catch (e) {
      }
    };
  });
  return {
    promise,
    //@ts-ignore
    resolve,
    //@ts-ignore
    reject
  };
}
var DataRouterContext = reactExports.createContext(null);
DataRouterContext.displayName = "DataRouter";
var DataRouterStateContext = reactExports.createContext(null);
DataRouterStateContext.displayName = "DataRouterState";
var ViewTransitionContext = reactExports.createContext({
  isTransitioning: false
});
ViewTransitionContext.displayName = "ViewTransition";
var FetchersContext = reactExports.createContext(
  /* @__PURE__ */ new Map()
);
FetchersContext.displayName = "Fetchers";
var AwaitContext = reactExports.createContext(null);
AwaitContext.displayName = "Await";
var NavigationContext = reactExports.createContext(
  null
);
NavigationContext.displayName = "Navigation";
var LocationContext = reactExports.createContext(
  null
);
LocationContext.displayName = "Location";
var RouteContext = reactExports.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
RouteContext.displayName = "Route";
var RouteErrorContext = reactExports.createContext(null);
RouteErrorContext.displayName = "RouteError";
function useHref(to, { relative } = {}) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useHref() may be used only in the context of a <Router> component.`
  );
  let { basename, navigator: navigator2 } = reactExports.useContext(NavigationContext);
  let { hash, pathname, search } = useResolvedPath(to, { relative });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({ pathname: joinedPathname, search, hash });
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useLocation() may be used only in the context of a <Router> component.`
  );
  return reactExports.useContext(LocationContext).location;
}
var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function useIsomorphicLayoutEffect(cb) {
  let isStatic = reactExports.useContext(NavigationContext).static;
  if (!isStatic) {
    reactExports.useLayoutEffect(cb);
  }
}
function useNavigate() {
  let { isDataRoute } = reactExports.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useNavigate() may be used only in the context of a <Router> component.`
  );
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  let { basename, navigator: navigator2 } = reactExports.useContext(NavigationContext);
  let { matches } = reactExports.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(
    (to, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to === "number") {
        navigator2.go(to);
        return;
      }
      let path = resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        options.relative === "path"
      );
      if (dataRouterContext == null && basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
      }
      (!!options.replace ? navigator2.replace : navigator2.push)(
        path,
        options.state,
        options
      );
    },
    [
      basename,
      navigator2,
      routePathnamesJson,
      locationPathname,
      dataRouterContext
    ]
  );
  return navigate;
}
reactExports.createContext(null);
function useResolvedPath(to, { relative } = {}) {
  let { matches } = reactExports.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  return reactExports.useMemo(
    () => resolveTo(
      to,
      JSON.parse(routePathnamesJson),
      locationPathname,
      relative === "path"
    ),
    [to, routePathnamesJson, locationPathname, relative]
  );
}
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useRoutes() may be used only in the context of a <Router> component.`
  );
  let { navigator: navigator2 } = reactExports.useContext(NavigationContext);
  let { matches: parentMatches } = reactExports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(
      parentPathname,
      !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
    );
  }
  let locationFromContext = useLocation();
  let location2;
  {
    location2 = locationFromContext;
  }
  let pathname = location2.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = matchRoutes(routes, { pathname: remainingPathname });
  {
    warning(
      parentRoute || matches != null,
      `No routes matched location "${location2.pathname}${location2.search}${location2.hash}" `
    );
    warning(
      matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${location2.pathname}${location2.search}${location2.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  }
  let renderedMatches = _renderMatches(
    matches && matches.map(
      (match) => Object.assign({}, match, {
        params: Object.assign({}, parentParams, match.params),
        pathname: joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
        ]),
        pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
        ])
      })
    ),
    parentMatches,
    dataRouterState,
    future
  );
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
  let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
  let devInfo = null;
  {
    console.error(
      "Error handled by React Router default ErrorBoundary:",
      error
    );
    devInfo = /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ reactExports.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ reactExports.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ reactExports.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
  }
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", { style: preStyles }, stack) : null, devInfo);
}
var defaultErrorElement = /* @__PURE__ */ reactExports.createElement(DefaultErrorComponent, null);
var RenderErrorBoundary = class extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error !== void 0 ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error(
      "React Router caught the following error during render",
      error,
      errorInfo
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ reactExports.createElement(
      RouteErrorContext.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function RenderedRoute({ routeContext, match, children }) {
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, { value: routeContext }, children);
}
function _renderMatches(matches, parentMatches = [], dataRouterState = null, future = null) {
  if (matches == null) {
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(
      (m) => m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== void 0
    );
    invariant(
      errorIndex >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        errors
      ).join(",")}`
    );
    renderedMatches = renderedMatches.slice(
      0,
      Math.min(renderedMatches.length, errorIndex + 1)
    );
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState) {
    for (let i = 0; i < renderedMatches.length; i++) {
      let match = renderedMatches[i];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        let { loaderData, errors: errors2 } = dataRouterState;
        let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
        if (match.route.lazy || needsToRunLoader) {
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : void 0;
      errorElement = match.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index === 0) {
          warningOnce(
            "route-fallback",
            false,
            "No `HydrateFallback` element provided to render during initial hydration"
          );
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match.route.Component) {
        children = /* @__PURE__ */ reactExports.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /* @__PURE__ */ reactExports.createElement(
        RenderedRoute,
        {
          match,
          routeContext: {
            outlet,
            matches: matches2,
            isDataRoute: dataRouterState != null
          },
          children
        }
      );
    };
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ reactExports.createElement(
      RenderErrorBoundary,
      {
        location: dataRouterState.location,
        revalidation: dataRouterState.revalidation,
        component: errorElement,
        error,
        children: getChildren(),
        routeContext: { outlet: null, matches: matches2, isDataRoute: true }
      }
    ) : getChildren();
  }, null);
}
function getDataRouterConsoleError(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError(hookName));
  return ctx;
}
function useDataRouterState(hookName) {
  let state = reactExports.useContext(DataRouterStateContext);
  invariant(state, getDataRouterConsoleError(hookName));
  return state;
}
function useRouteContext(hookName) {
  let route = reactExports.useContext(RouteContext);
  invariant(route, getDataRouterConsoleError(hookName));
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  invariant(
    thisRoute.route.id,
    `${hookName} can only be used on routes that contain a unique "id"`
  );
  return thisRoute.route.id;
}
function useRouteId() {
  return useCurrentRouteId(
    "useRouteId"
    /* UseRouteId */
  );
}
function useRouteError() {
  var _a;
  let error = reactExports.useContext(RouteErrorContext);
  let state = useDataRouterState(
    "useRouteError"
    /* UseRouteError */
  );
  let routeId = useCurrentRouteId(
    "useRouteError"
    /* UseRouteError */
  );
  if (error !== void 0) {
    return error;
  }
  return (_a = state.errors) == null ? void 0 : _a[routeId];
}
function useNavigateStable() {
  let { router: router2 } = useDataRouterContext(
    "useNavigate"
    /* UseNavigateStable */
  );
  let id = useCurrentRouteId(
    "useNavigate"
    /* UseNavigateStable */
  );
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(
    async (to, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to === "number") {
        router2.navigate(to);
      } else {
        await router2.navigate(to, { fromRouteId: id, ...options });
      }
    },
    [router2, id]
  );
  return navigate;
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    warning(false, message);
  }
}
var alreadyWarned2 = {};
function warnOnce(condition, message) {
  if (!condition && !alreadyWarned2[message]) {
    alreadyWarned2[message] = true;
    console.warn(message);
  }
}
function mapRouteProperties(route) {
  let updates = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: route.hasErrorBoundary || route.ErrorBoundary != null || route.errorElement != null
  };
  if (route.Component) {
    {
      if (route.element) {
        warning(
          false,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        );
      }
    }
    Object.assign(updates, {
      element: reactExports.createElement(route.Component),
      Component: void 0
    });
  }
  if (route.HydrateFallback) {
    {
      if (route.hydrateFallbackElement) {
        warning(
          false,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        );
      }
    }
    Object.assign(updates, {
      hydrateFallbackElement: reactExports.createElement(route.HydrateFallback),
      HydrateFallback: void 0
    });
  }
  if (route.ErrorBoundary) {
    {
      if (route.errorElement) {
        warning(
          false,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        );
      }
    }
    Object.assign(updates, {
      errorElement: reactExports.createElement(route.ErrorBoundary),
      ErrorBoundary: void 0
    });
  }
  return updates;
}
var Deferred = class {
  constructor() {
    this.status = "pending";
    this.promise = new Promise((resolve, reject) => {
      this.resolve = (value) => {
        if (this.status === "pending") {
          this.status = "resolved";
          resolve(value);
        }
      };
      this.reject = (reason) => {
        if (this.status === "pending") {
          this.status = "rejected";
          reject(reason);
        }
      };
    });
  }
};
function RouterProvider({
  router: router2,
  flushSync: reactDomFlushSyncImpl
}) {
  let [state, setStateImpl] = reactExports.useState(router2.state);
  let [pendingState, setPendingState] = reactExports.useState();
  let [vtContext, setVtContext] = reactExports.useState({
    isTransitioning: false
  });
  let [renderDfd, setRenderDfd] = reactExports.useState();
  let [transition, setTransition] = reactExports.useState();
  let [interruption, setInterruption] = reactExports.useState();
  let fetcherData = reactExports.useRef(/* @__PURE__ */ new Map());
  let setState = reactExports.useCallback(
    (newState, { deletedFetchers, flushSync, viewTransitionOpts }) => {
      deletedFetchers.forEach((key) => fetcherData.current.delete(key));
      newState.fetchers.forEach((fetcher, key) => {
        if (fetcher.data !== void 0) {
          fetcherData.current.set(key, fetcher.data);
        }
      });
      warnOnce(
        flushSync === false || reactDomFlushSyncImpl != null,
        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
      );
      let isViewTransitionAvailable = router2.window != null && router2.window.document != null && typeof router2.window.document.startViewTransition === "function";
      warnOnce(
        viewTransitionOpts == null || isViewTransitionAvailable,
        "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
      );
      if (!viewTransitionOpts || !isViewTransitionAvailable) {
        if (reactDomFlushSyncImpl && flushSync) {
          reactDomFlushSyncImpl(() => setStateImpl(newState));
        } else {
          reactExports.startTransition(() => setStateImpl(newState));
        }
        return;
      }
      if (reactDomFlushSyncImpl && flushSync) {
        reactDomFlushSyncImpl(() => {
          if (transition) {
            renderDfd && renderDfd.resolve();
            transition.skipTransition();
          }
          setVtContext({
            isTransitioning: true,
            flushSync: true,
            currentLocation: viewTransitionOpts.currentLocation,
            nextLocation: viewTransitionOpts.nextLocation
          });
        });
        let t = router2.window.document.startViewTransition(() => {
          reactDomFlushSyncImpl(() => setStateImpl(newState));
        });
        t.finished.finally(() => {
          reactDomFlushSyncImpl(() => {
            setRenderDfd(void 0);
            setTransition(void 0);
            setPendingState(void 0);
            setVtContext({ isTransitioning: false });
          });
        });
        reactDomFlushSyncImpl(() => setTransition(t));
        return;
      }
      if (transition) {
        renderDfd && renderDfd.resolve();
        transition.skipTransition();
        setInterruption({
          state: newState,
          currentLocation: viewTransitionOpts.currentLocation,
          nextLocation: viewTransitionOpts.nextLocation
        });
      } else {
        setPendingState(newState);
        setVtContext({
          isTransitioning: true,
          flushSync: false,
          currentLocation: viewTransitionOpts.currentLocation,
          nextLocation: viewTransitionOpts.nextLocation
        });
      }
    },
    [router2.window, reactDomFlushSyncImpl, transition, renderDfd]
  );
  reactExports.useLayoutEffect(() => router2.subscribe(setState), [router2, setState]);
  reactExports.useEffect(() => {
    if (vtContext.isTransitioning && !vtContext.flushSync) {
      setRenderDfd(new Deferred());
    }
  }, [vtContext]);
  reactExports.useEffect(() => {
    if (renderDfd && pendingState && router2.window) {
      let newState = pendingState;
      let renderPromise = renderDfd.promise;
      let transition2 = router2.window.document.startViewTransition(async () => {
        reactExports.startTransition(() => setStateImpl(newState));
        await renderPromise;
      });
      transition2.finished.finally(() => {
        setRenderDfd(void 0);
        setTransition(void 0);
        setPendingState(void 0);
        setVtContext({ isTransitioning: false });
      });
      setTransition(transition2);
    }
  }, [pendingState, renderDfd, router2.window]);
  reactExports.useEffect(() => {
    if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
      renderDfd.resolve();
    }
  }, [renderDfd, transition, state.location, pendingState]);
  reactExports.useEffect(() => {
    if (!vtContext.isTransitioning && interruption) {
      setPendingState(interruption.state);
      setVtContext({
        isTransitioning: true,
        flushSync: false,
        currentLocation: interruption.currentLocation,
        nextLocation: interruption.nextLocation
      });
      setInterruption(void 0);
    }
  }, [vtContext.isTransitioning, interruption]);
  let navigator2 = reactExports.useMemo(() => {
    return {
      createHref: router2.createHref,
      encodeLocation: router2.encodeLocation,
      go: (n) => router2.navigate(n),
      push: (to, state2, opts) => router2.navigate(to, {
        state: state2,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state2, opts) => router2.navigate(to, {
        replace: true,
        state: state2,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router2]);
  let basename = router2.basename || "/";
  let dataRouterContext = reactExports.useMemo(
    () => ({
      router: router2,
      navigator: navigator2,
      static: false,
      basename
    }),
    [router2, navigator2, basename]
  );
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(DataRouterContext.Provider, { value: dataRouterContext }, /* @__PURE__ */ reactExports.createElement(DataRouterStateContext.Provider, { value: state }, /* @__PURE__ */ reactExports.createElement(FetchersContext.Provider, { value: fetcherData.current }, /* @__PURE__ */ reactExports.createElement(ViewTransitionContext.Provider, { value: vtContext }, /* @__PURE__ */ reactExports.createElement(
    Router,
    {
      basename,
      location: state.location,
      navigationType: state.historyAction,
      navigator: navigator2
    },
    /* @__PURE__ */ reactExports.createElement(
      MemoizedDataRoutes,
      {
        routes: router2.routes,
        future: router2.future,
        state
      }
    )
  ))))), null);
}
var MemoizedDataRoutes = reactExports.memo(DataRoutes);
function DataRoutes({
  routes,
  future,
  state
}) {
  return useRoutesImpl(routes, void 0, state, future);
}
function Router({
  basename: basenameProp = "/",
  children = null,
  location: locationProp,
  navigationType = "POP",
  navigator: navigator2,
  static: staticProp = false
}) {
  invariant(
    !useInRouterContext(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
  );
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = reactExports.useMemo(
    () => ({
      basename,
      navigator: navigator2,
      static: staticProp,
      future: {}
    }),
    [basename, navigator2, staticProp]
  );
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = reactExports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  warning(
    locationContext != null,
    `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
  );
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, { children, value: locationContext }));
}
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
var _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      );
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
var supportedFormEncTypes = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
    warning(
      false,
      `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
    );
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    let attr = target.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`
      );
    }
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(form, target);
    if (!isFormDataSubmitterSupported()) {
      let { name, type, value } = target;
      if (type === "image") {
        let prefix = name ? `${name}.` : "";
        formData.append(`${prefix}x`, "0");
        formData.append(`${prefix}y`, "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
    );
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  if (formData && encType === "text/plain") {
    body = formData;
    formData = void 0;
  }
  return { action, method: method.toLowerCase(), encType, formData, body };
}
function invariant2(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id];
  }
  try {
    let routeModule = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      route.module
    );
    routeModulesCache[route.id] = routeModule;
    return routeModule;
  } catch (error) {
    console.error(
      `Error loading route module \`${route.module}\`, reloading page...`
    );
    console.error(error);
    if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
    void 0) {
      throw error;
    }
    window.location.reload();
    return new Promise(() => {
    });
  }
}
function isHtmlLinkDescriptor(object) {
  if (object == null) {
    return false;
  }
  if (object.href == null) {
    return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
  }
  return typeof object.rel === "string" && typeof object.href === "string";
}
async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
  let links = await Promise.all(
    matches.map(async (match) => {
      let route = manifest.routes[match.route.id];
      if (route) {
        let mod = await loadRouteModule(route, routeModules);
        return mod.links ? mod.links() : [];
      }
      return [];
    })
  );
  return dedupeLinkDescriptors(
    links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
      (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
    )
  );
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location2, mode) {
  let isNew = (match, index) => {
    if (!currentMatches[index]) return true;
    return match.route.id !== currentMatches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    var _a;
    return (
      // param change, /users/123 -> /users/456
      currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((_a = currentMatches[index].route.path) == null ? void 0 : _a.endsWith("*")) && currentMatches[index].params["*"] !== match.params["*"]
    );
  };
  if (mode === "assets") {
    return nextMatches.filter(
      (match, index) => isNew(match, index) || matchPathChanged(match, index)
    );
  }
  if (mode === "data") {
    return nextMatches.filter((match, index) => {
      var _a;
      let manifestRoute = manifest.routes[match.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return false;
      }
      if (isNew(match, index) || matchPathChanged(match, index)) {
        return true;
      }
      if (match.route.shouldRevalidate) {
        let routeChoice = match.route.shouldRevalidate({
          currentUrl: new URL(
            location2.pathname + location2.search + location2.hash,
            window.origin
          ),
          currentParams: ((_a = currentMatches[0]) == null ? void 0 : _a.params) || {},
          nextUrl: new URL(page, window.origin),
          nextParams: match.params,
          defaultShouldRevalidate: true
        });
        if (typeof routeChoice === "boolean") {
          return routeChoice;
        }
      }
      return true;
    });
  }
  return [];
}
function getModuleLinkHrefs(matches, manifestPatch) {
  return dedupeHrefs(
    matches.map((match) => {
      let route = manifestPatch.routes[match.route.id];
      if (!route) return [];
      let hrefs = [route.module];
      if (route.imports) {
        hrefs = hrefs.concat(route.imports);
      }
      return hrefs;
    }).flat(1)
  );
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function sortKeys(obj) {
  let sorted = {};
  let keys = Object.keys(obj).sort();
  for (let key of keys) {
    sorted[key] = obj[key];
  }
  return sorted;
}
function dedupeLinkDescriptors(descriptors, preloads) {
  let set2 = /* @__PURE__ */ new Set();
  new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    let key = JSON.stringify(sortKeys(descriptor));
    if (!set2.has(key)) {
      set2.add(key);
      deduped.push({ key, link: descriptor });
    }
    return deduped;
  }, []);
}
function singleFetchUrl(reqUrl) {
  let url2 = typeof reqUrl === "string" ? new URL(
    reqUrl,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
  ) : reqUrl;
  if (url2.pathname === "/") {
    url2.pathname = "_root.data";
  } else {
    url2.pathname = `${url2.pathname.replace(/\/$/, "")}.data`;
  }
  return url2;
}
function useDataRouterContext2() {
  let context = reactExports.useContext(DataRouterContext);
  invariant2(
    context,
    "You must render this element inside a <DataRouterContext.Provider> element"
  );
  return context;
}
function useDataRouterStateContext() {
  let context = reactExports.useContext(DataRouterStateContext);
  invariant2(
    context,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  );
  return context;
}
var FrameworkContext = reactExports.createContext(void 0);
FrameworkContext.displayName = "FrameworkContext";
function useFrameworkContext() {
  let context = reactExports.useContext(FrameworkContext);
  invariant2(
    context,
    "You must render this element inside a <HydratedRouter> element"
  );
  return context;
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let frameworkContext = reactExports.useContext(FrameworkContext);
  let [maybePrefetch, setMaybePrefetch] = reactExports.useState(false);
  let [shouldPrefetch, setShouldPrefetch] = reactExports.useState(false);
  let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
  let ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (prefetch === "render") {
      setShouldPrefetch(true);
    }
    if (prefetch === "viewport") {
      let callback = (entries) => {
        entries.forEach((entry) => {
          setShouldPrefetch(entry.isIntersecting);
        });
      };
      let observer = new IntersectionObserver(callback, { threshold: 0.5 });
      if (ref.current) observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [prefetch]);
  reactExports.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]);
  let setIntent = () => {
    setMaybePrefetch(true);
  };
  let cancelIntent = () => {
    setMaybePrefetch(false);
    setShouldPrefetch(false);
  };
  if (!frameworkContext) {
    return [false, ref, {}];
  }
  if (prefetch !== "intent") {
    return [shouldPrefetch, ref, {}];
  }
  return [
    shouldPrefetch,
    ref,
    {
      onFocus: composeEventHandlers(onFocus, setIntent),
      onBlur: composeEventHandlers(onBlur, cancelIntent),
      onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
      onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
      onTouchStart: composeEventHandlers(onTouchStart, setIntent)
    }
  ];
}
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      ourHandler(event);
    }
  };
}
function PrefetchPageLinks({
  page,
  ...dataLinkProps
}) {
  let { router: router2 } = useDataRouterContext2();
  let matches = reactExports.useMemo(
    () => matchRoutes(router2.routes, page, router2.basename),
    [router2.routes, page, router2.basename]
  );
  if (!matches) {
    console.warn(`Tried to prefetch ${page} but no routes matched.`);
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(PrefetchPageLinksImpl, { page, matches, ...dataLinkProps });
}
function useKeyedPrefetchLinks(matches) {
  let { manifest, routeModules } = useFrameworkContext();
  let [keyedPrefetchLinks, setKeyedPrefetchLinks] = reactExports.useState([]);
  reactExports.useEffect(() => {
    let interrupted = false;
    void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
      (links) => {
        if (!interrupted) {
          setKeyedPrefetchLinks(links);
        }
      }
    );
    return () => {
      interrupted = true;
    };
  }, [matches, manifest, routeModules]);
  return keyedPrefetchLinks;
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location2 = useLocation();
  let { manifest, routeModules } = useFrameworkContext();
  let { loaderData, matches } = useDataRouterStateContext();
  let newMatchesForData = reactExports.useMemo(
    () => getNewMatchesForLinks(
      page,
      nextMatches,
      matches,
      manifest,
      location2,
      "data"
    ),
    [page, nextMatches, matches, manifest, location2]
  );
  let newMatchesForAssets = reactExports.useMemo(
    () => getNewMatchesForLinks(
      page,
      nextMatches,
      matches,
      manifest,
      location2,
      "assets"
    ),
    [page, nextMatches, matches, manifest, location2]
  );
  let dataHrefs = reactExports.useMemo(() => {
    if (page === location2.pathname + location2.search + location2.hash) {
      return [];
    }
    let routesParams = /* @__PURE__ */ new Set();
    let foundOptOutRoute = false;
    nextMatches.forEach((m) => {
      var _a;
      let manifestRoute = manifest.routes[m.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return;
      }
      if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && ((_a = routeModules[m.route.id]) == null ? void 0 : _a.shouldRevalidate)) {
        foundOptOutRoute = true;
      } else if (manifestRoute.hasClientLoader) {
        foundOptOutRoute = true;
      } else {
        routesParams.add(m.route.id);
      }
    });
    if (routesParams.size === 0) {
      return [];
    }
    let url2 = singleFetchUrl(page);
    if (foundOptOutRoute && routesParams.size > 0) {
      url2.searchParams.set(
        "_routes",
        nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
      );
    }
    return [url2.pathname + url2.search];
  }, [
    loaderData,
    location2,
    manifest,
    newMatchesForData,
    nextMatches,
    page,
    routeModules
  ]);
  let moduleHrefs = reactExports.useMemo(
    () => getModuleLinkHrefs(newMatchesForAssets, manifest),
    [newMatchesForAssets, manifest]
  );
  let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ reactExports.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ reactExports.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ reactExports.createElement("link", { key, ...link })
  )));
}
function mergeRefs(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
try {
  if (isBrowser) {
    window.__reactRouterVersion = "7.0.2";
  }
} catch (e) {
}
function createBrowserRouter(routes, opts) {
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    future: opts == null ? void 0 : opts.future,
    history: createBrowserHistory({ window: opts == null ? void 0 : opts.window }),
    hydrationData: parseHydrationData(),
    routes,
    mapRouteProperties,
    dataStrategy: opts == null ? void 0 : opts.dataStrategy,
    patchRoutesOnNavigation: opts == null ? void 0 : opts.patchRoutesOnNavigation,
    window: opts == null ? void 0 : opts.window
  }).initialize();
}
function parseHydrationData() {
  let state = window == null ? void 0 : window.__staticRouterHydrationData;
  if (state && state.errors) {
    state = {
      ...state,
      errors: deserializeErrors(state.errors)
    };
  }
  return state;
}
function deserializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new ErrorResponseImpl(
        val.status,
        val.statusText,
        val.data,
        val.internal === true
      );
    } else if (val && val.__type === "Error") {
      if (val.__subType) {
        let ErrorConstructor = window[val.__subType];
        if (typeof ErrorConstructor === "function") {
          try {
            let error = new ErrorConstructor(val.message);
            error.stack = "";
            serialized[key] = error;
          } catch (e) {
          }
        }
      }
      if (serialized[key] == null) {
        let error = new Error(val.message);
        error.stack = "";
        serialized[key] = error;
      }
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var Link = reactExports.forwardRef(
  function LinkWithRef({
    onClick,
    discover = "render",
    prefetch = "none",
    relative,
    reloadDocument,
    replace: replace2,
    state,
    target,
    to,
    preventScrollReset,
    viewTransition,
    ...rest
  }, forwardedRef) {
    let { basename } = reactExports.useContext(NavigationContext);
    let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
    let absoluteHref;
    let isExternal = false;
    if (typeof to === "string" && isAbsolute) {
      absoluteHref = to;
      if (isBrowser) {
        try {
          let currentUrl = new URL(window.location.href);
          let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
          let path = stripBasename(targetUrl.pathname, basename);
          if (targetUrl.origin === currentUrl.origin && path != null) {
            to = path + targetUrl.search + targetUrl.hash;
          } else {
            isExternal = true;
          }
        } catch (e) {
          warning(
            false,
            `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
          );
        }
      }
    }
    let href = useHref(to, { relative });
    let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
      prefetch,
      rest
    );
    let internalOnClick = useLinkClickHandler(to, {
      replace: replace2,
      state,
      target,
      preventScrollReset,
      relative,
      viewTransition
    });
    function handleClick(event) {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) {
        internalOnClick(event);
      }
    }
    let link = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ reactExports.createElement(
        "a",
        {
          ...rest,
          ...prefetchHandlers,
          href: absoluteHref || href,
          onClick: isExternal || reloadDocument ? onClick : handleClick,
          ref: mergeRefs(forwardedRef, prefetchRef),
          target,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      )
    );
    return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, link, /* @__PURE__ */ reactExports.createElement(PrefetchPageLinks, { page: href })) : link;
  }
);
Link.displayName = "Link";
var NavLink = reactExports.forwardRef(
  function NavLinkWithRef({
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    viewTransition,
    children,
    ...rest
  }, ref) {
    let path = useResolvedPath(to, { relative: rest.relative });
    let location2 = useLocation();
    let routerState = reactExports.useContext(DataRouterStateContext);
    let { navigator: navigator2, basename } = reactExports.useContext(NavigationContext);
    let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useViewTransitionState(path) && viewTransition === true;
    let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
    let locationPathname = location2.pathname;
    let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
      locationPathname = locationPathname.toLowerCase();
      nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
      toPathname = toPathname.toLowerCase();
    }
    if (nextLocationPathname && basename) {
      nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
    }
    const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
    let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    let renderProps = {
      isActive,
      isPending,
      isTransitioning
    };
    let ariaCurrent = isActive ? ariaCurrentProp : void 0;
    let className;
    if (typeof classNameProp === "function") {
      className = classNameProp(renderProps);
    } else {
      className = [
        classNameProp,
        isActive ? "active" : null,
        isPending ? "pending" : null,
        isTransitioning ? "transitioning" : null
      ].filter(Boolean).join(" ");
    }
    let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
    return /* @__PURE__ */ reactExports.createElement(
      Link,
      {
        ...rest,
        "aria-current": ariaCurrent,
        className,
        ref,
        style,
        to,
        viewTransition
      },
      typeof children === "function" ? children(renderProps) : children
    );
  }
);
NavLink.displayName = "NavLink";
var Form = reactExports.forwardRef(
  ({
    discover = "render",
    fetcherKey,
    navigate,
    reloadDocument,
    replace: replace2,
    state,
    method = defaultMethod,
    action,
    onSubmit,
    relative,
    preventScrollReset,
    viewTransition,
    ...props
  }, forwardedRef) => {
    let submit = useSubmit();
    let formAction = useFormAction(action, { relative });
    let formMethod = method.toLowerCase() === "get" ? "get" : "post";
    let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX2.test(action);
    let submitHandler = (event) => {
      onSubmit && onSubmit(event);
      if (event.defaultPrevented) return;
      event.preventDefault();
      let submitter = event.nativeEvent.submitter;
      let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
      submit(submitter || event.currentTarget, {
        fetcherKey,
        method: submitMethod,
        navigate,
        replace: replace2,
        state,
        relative,
        preventScrollReset,
        viewTransition
      });
    };
    return /* @__PURE__ */ reactExports.createElement(
      "form",
      {
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler,
        ...props,
        "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
      }
    );
  }
);
Form.displayName = "Form";
function getDataRouterConsoleError2(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext3(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError2(hookName));
  return ctx;
}
function useLinkClickHandler(to, {
  target,
  replace: replaceProp,
  state,
  preventScrollReset,
  relative,
  viewTransition
} = {}) {
  let navigate = useNavigate();
  let location2 = useLocation();
  let path = useResolvedPath(to, { relative });
  return reactExports.useCallback(
    (event) => {
      if (shouldProcessLinkClick(event, target)) {
        event.preventDefault();
        let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location2) === createPath(path);
        navigate(to, {
          replace: replace2,
          state,
          preventScrollReset,
          relative,
          viewTransition
        });
      }
    },
    [
      location2,
      navigate,
      path,
      replaceProp,
      state,
      target,
      to,
      preventScrollReset,
      relative,
      viewTransition
    ]
  );
}
var fetcherId = 0;
var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
function useSubmit() {
  let { router: router2 } = useDataRouterContext3(
    "useSubmit"
    /* UseSubmit */
  );
  let { basename } = reactExports.useContext(NavigationContext);
  let currentRouteId = useRouteId();
  return reactExports.useCallback(
    async (target, options = {}) => {
      let { action, method, encType, formData, body } = getFormSubmissionInfo(
        target,
        basename
      );
      if (options.navigate === false) {
        let key = options.fetcherKey || getUniqueFetcherId();
        await router2.fetch(key, currentRouteId, options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          flushSync: options.flushSync
        });
      } else {
        await router2.navigate(options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          replace: options.replace,
          state: options.state,
          fromRouteId: currentRouteId,
          flushSync: options.flushSync,
          viewTransition: options.viewTransition
        });
      }
    },
    [router2, basename, currentRouteId]
  );
}
function useFormAction(action, { relative } = {}) {
  let { basename } = reactExports.useContext(NavigationContext);
  let routeContext = reactExports.useContext(RouteContext);
  invariant(routeContext, "useFormAction must be used inside a RouteContext");
  let [match] = routeContext.matches.slice(-1);
  let path = { ...useResolvedPath(action ? action : ".", { relative }) };
  let location2 = useLocation();
  if (action == null) {
    path.search = location2.search;
    let params = new URLSearchParams(path.search);
    let indexValues = params.getAll("index");
    let hasNakedIndexParam = indexValues.some((v) => v === "");
    if (hasNakedIndexParam) {
      params.delete("index");
      indexValues.filter((v) => v).forEach((v) => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? `?${qs}` : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function useViewTransitionState(to, opts = {}) {
  let vtContext = reactExports.useContext(ViewTransitionContext);
  invariant(
    vtContext != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename } = useDataRouterContext3(
    "useViewTransitionState"
    /* useViewTransitionState */
  );
  let path = useResolvedPath(to, { relative: opts.relative });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
}
new TextEncoder();
var reactDomExports = requireReactDom();
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function RouterProvider2(props) {
  return /* @__PURE__ */ reactExports.createElement(RouterProvider, { flushSync: reactDomExports.flushSync, ...props });
}
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var hasRequiredClassnames;
function requireClassnames() {
  if (hasRequiredClassnames) return classnames.exports;
  hasRequiredClassnames = 1;
  (function(module) {
    (function() {
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames);
  return classnames.exports;
}
var classnamesExports = requireClassnames();
const cn = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
const accordion = "_accordion_4wt6b_1";
const active$2 = "_active_4wt6b_38";
const secret$1 = "_secret_4wt6b_68";
const styles$6 = {
  accordion,
  "accordion-item": "_accordion-item_4wt6b_10",
  "accordion-header": "_accordion-header_4wt6b_14",
  active: active$2,
  "accordion-content": "_accordion-content_4wt6b_43",
  secret: secret$1
};
const itemsDefault = [
  {
    title: "Если частью вспоминаемой ситуации является действительная физическая боль",
    content: [
      "Вспомните приятный случай, который произошел позже.",
      "Вспомните, что вы делали в это время в прошлом году.",
      "Вспомните момент, когда вы действительно получали удовольствие.",
      "Вспомните, что вы делали в это время в прошлом месяце.",
      "Вспомните, что вы делали вчера.",
      "Вспомните что-нибудь приятное, случившееся сегодня."
    ]
  },
  {
    title: "Если не было физической боли, но была печаль, вспомните следующее:",
    content: [
      "Следующий после той ситуации случай, когда вы получили что-то, что вам понравилось.",
      "Вспомните что-то, что у вас есть сейчас, и от чего вы получаете удовольствие.",
      "Вспомните что-то, что вы давно хотели и наконец получили.",
      "Вспомните случай, когда кто-то был очень мил с вами.",
      "Вспомните последний раз, когда вы получили деньги.",
      "Вспомните вчерашний обед.",
      "Вспомните сегодняшнюю еду."
    ]
  },
  {
    title: "Если вы просто почувствуете неудобство, без особой печали или физической боли, испытывая лишь желание избежать вспоминания, используйте следующий список:",
    content: [
      "Вспомните этот случай снова во всей полноте от начала до конца.",
      "Вспомните этот случай еще раз.",
      "Вспомните более ранний похожий случай.",
      "Вспомните еще более ранний похожий случай.",
      "Вспомните самый ранний похожий случай, который вы можете найти.",
      "Вспомните все эти случаи, один за другим, во всей полноте.",
      "Вспомните все эти случаи еще раз, один за другим, от самого раннего до самого позднего.",
      "Еще раз вспомните все эти случаи.",
      "Пройдите по цепи похожих случаев и найдите более поздние случаи, вплоть до настоящего времени.",
      "Вспомните какой-нибудь приятный случай, произошедший в последние несколько дней. Получите все возможные ощущения.",
      "Вспомните, что вы делали час назад."
    ]
  },
  {
    title: "Этот список обычно стабилизирует любое из упомянутых выше состояний.",
    content: [
      "Вспомните случай, который действительно представляется вам реальным.",
      "Вспомните случай, когда вы чувствовали настоящее аффинити со стороны кого-то.",
      "Вспомните случай, когда кто-то был с вами в хорошей коммуникации.",
      "Вспомните случай, когда вы чувствовали глубокое аффинити к кому-то другому.",
      "Вспомните случай, когда вы знали, что действительно общаетесь с кем-то.",
      "Вспомните случай, когда несколько человек полностью с вами согласились.",
      "Вспомните случай, когда вы были согласны с кем-то другим.",
      "Вспомните случай за последние два дня, когда вы чувствовали себя любящим.",
      "Вспомните случай за последние два дня, когда кто-то чувствовал любовь к вам.",
      "Вспомните случай за последние два дня, когда вы были в хорошей коммуникации с кем-то.",
      "Вспомните случай за последние два дня, который действительно представляется вам реальным.",
      "Вспомните случай за последние два дня, когда вы были в хорошей коммуникации с людьми."
    ]
  }
];
const itemsSecret = [
  {
    title: "Если в воспоминаемой ситуации была физическая боль",
    content: [
      "Вспомните приятное событие, которое произошло позже.",
      "Подумайте, чем вы занимались в это же время год назад.",
      "Вспомните момент, когда вам было по-настоящему хорошо.",
      "Подумайте, чем вы занимались в это же время в прошлом месяце.",
      "Вспомните, что вы делали вчера.",
      "Подумайте о чём-то хорошем, что произошло сегодня."
    ]
  },
  {
    title: "Если вместо боли была грусть, попробуйте вспомнить следующее:",
    content: [
      "Случай после этой ситуации, когда вы получили что-то, что вам понравилось.",
      "Подумайте о том, что у вас есть сейчас и приносит вам радость.",
      "Вспомните момент, когда вы получили то, о чём давно мечтали.",
      "Случай, когда кто-то проявил к вам доброту.",
      "Последний раз, когда вы получили деньги.",
      "Что вы ели вчера?",
      "Что вы ели сегодня?"
    ]
  },
  {
    title: "Если вы чувствуете лёгкий дискомфорт или хотите избежать воспоминаний",
    content: [
      "Вспомните ситуацию полностью, от начала до конца.",
      "Снова воспроизведите её в памяти.",
      "Подумайте о более раннем похожем случае.",
      "Вспомните ещё более ранний похожий случай.",
      "Попробуйте найти самый ранний подобный случай, который сможете.",
      "Переберите все эти случаи по порядку, один за другим.",
      "Снова пройдитесь по всем этим воспоминаниям, начиная с самого раннего.",
      "Ещё раз вспомните все эти ситуации.",
      "Проследите цепочку похожих событий, включая более поздние случаи.",
      "Вспомните приятный случай, произошедший за последние несколько дней, и постарайтесь ощутить все детали.",
      "Что вы делали час назад?"
    ]
  },
  {
    title: "Этот список помогает стабилизировать любое из упомянутых выше состояний",
    content: [
      "Вспомните случай, который кажется вам абсолютно реальным.",
      "Момент, когда вы почувствовали искреннюю привязанность к кому-то или от кого-то.",
      "Ситуацию, где вы с кем-то хорошо общались.",
      "Случай, когда вы испытывали глубокую симпатию к другому человеку.",
      "Момент, когда вы осознавали, что действительно общаетесь с кем-то.",
      "Ситуацию, когда вы и другие полностью согласились друг с другом.",
      "Случай, когда вы были полностью согласны с кем-то.",
      "Момент за последние два дня, когда вы чувствовали любовь или привязанность.",
      "Случай за последние два дня, когда кто-то проявил любовь или заботу к вам.",
      "Ситуацию за последние два дня, где у вас было хорошее общение с кем-то.",
      "Момент за последние два дня, который казался вам реальным и важным.",
      "Случай за последние два дня, где вы были в отличной коммуникации с другими."
    ]
  }
];
const Accordion = () => {
  const [activeIndex, setActiveIndex] = reactExports.useState(null);
  const [items, setItems] = reactExports.useState(itemsDefault);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [clickCount, setClickCount] = reactExports.useState(0);
  const [isActivated, setIsActivated] = reactExports.useState(false);
  const handleHiddenClick = () => {
    if (!isActivated) {
      setClickCount((prev) => prev + 1);
    }
  };
  reactExports.useEffect(() => {
    let timer;
    if (clickCount > 0) {
      timer = setTimeout(() => {
        setClickCount(0);
      }, 1e3);
    }
    if (clickCount >= 5) {
      alert("секретный список вопросов активирован!");
      setItems(itemsSecret);
      setIsActivated(true);
      setClickCount(0);
    }
    return () => clearTimeout(timer);
  }, [clickCount]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$6.accordion, children: items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$6["accordion-item"], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(styles$6["accordion-header"], { [styles$6.active]: activeIndex === index }),
          onClick: () => toggleAccordion(index),
          children: item.title
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(styles$6["accordion-content"], { [styles$6.active]: activeIndex === index }),
          style: {
            maxHeight: activeIndex === index ? "1050px" : "0"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { children: item.content.map((item2) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: item2 })) })
        }
      )
    ] }, index)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$6.secret, onClick: handleHiddenClick })
  ] });
};
const button = "_button_u3eze_1";
const small = "_small_u3eze_26";
const big = "_big_u3eze_31";
const styles$5 = {
  button,
  small,
  big
};
const Button = ({ children, className, appearence = "small", ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: cn(styles$5["button"], styles$5["accent"], {
    [styles$5["big"]]: appearence === "big",
    [styles$5["small"]]: appearence === "small"
  }, className), ...props, children });
};
const h1$3 = "_h1_b1gol_1";
const ol$2 = "_ol_b1gol_5";
const note$2 = "_note_b1gol_9";
const wrapper$3 = "_wrapper_b1gol_14";
const content$2 = "_content_b1gol_25";
const styles$4 = {
  h1: h1$3,
  ol: ol$2,
  note: note$2,
  wrapper: wrapper$3,
  content: content$2
};
const Bad = () => {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$4.wrapper, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: styles$4.h1, children: "Вспомните все эти случаи еще раз со всеми доступными вам ощущениями." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$4.content, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate("/training/"), children: "На главную" })
  ] });
};
const h1$2 = "_h1_1wykr_1";
const ol$1 = "_ol_1wykr_4";
const note$1 = "_note_1wykr_8";
const wrapper$2 = "_wrapper_1wykr_13";
const content$1 = "_content_1wykr_24";
const qrCode = "_qrCode_1wykr_37";
const styles$3 = {
  h1: h1$2,
  ol: ol$1,
  note: note$1,
  wrapper: wrapper$2,
  content: content$1,
  qrCode
};
const Donat = () => {
  const navigate = useNavigate();
  const goToDonat = () => {
    const url2 = "https://www.donationalerts.com/r/devforsoul?clckid=c3c8c861";
    window.open(url2, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.wrapper, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.content, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: styles$3.h1, children: "Дорогой пользователь," }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$3.note, children: "Если тебе полезен наш продукт и ты хочешь поучаствовать в его существовании и развитии, можешь поддержать нас донатом:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3.qrCode, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", version: "1.1", width: "150px", height: "150px", viewBox: "0 0 500 500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { id: "block", width: "11.1111111111", height: "11.1111111111", fill: "#ffffff", "fill-opacity": "1" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "0", y: "0", width: "500", height: "500", fill: "#ffffff", "fill-opacity": "0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "55.5555555556", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "433.3333333333", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "0.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "311.1111111111", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "11.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "311.1111111111", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "22.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "311.1111111111", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "33.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "44.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "55.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "55.5555555556", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "311.1111111111", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "433.3333333333", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "66.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "77.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "77.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "77.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "77.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "77.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "77.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "77.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "77.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "77.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "77.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "77.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "77.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "77.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "77.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "77.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "77.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "433.3333333333", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "88.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "55.5555555556", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "77.7777777778", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "433.3333333333", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "100.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "77.7777777778", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "111.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "122.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "122.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "122.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "55.5555555556", y: "122.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "122.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "122.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "122.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "122.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "122.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "122.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "122.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "122.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "122.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "122.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "122.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "122.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "55.5555555556", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "77.7777777778", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "311.1111111111", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "133.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "77.7777777778", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "433.3333333333", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "144.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "55.5555555556", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "77.7777777778", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "155.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "166.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "55.5555555556", y: "166.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "166.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "166.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "166.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "166.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "166.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "166.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "166.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "166.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "166.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "166.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "166.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "166.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "166.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "166.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "166.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "77.7777777778", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "311.1111111111", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "433.3333333333", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "177.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "77.7777777778", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "311.1111111111", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "433.3333333333", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "188.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "77.7777777778", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "200.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "55.5555555556", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "77.7777777778", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "311.1111111111", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "433.3333333333", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "211.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "55.5555555556", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "77.7777777778", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "311.1111111111", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "433.3333333333", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "222.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "233.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "244.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "255.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "255.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "255.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "255.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "255.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "255.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "255.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "255.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "255.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "255.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "255.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "255.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "255.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "255.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "255.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "255.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "255.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "55.5555555556", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "77.7777777778", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "311.1111111111", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "433.3333333333", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "266.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "55.5555555556", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "311.1111111111", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "277.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "77.7777777778", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "433.3333333333", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "288.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "77.7777777778", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "300.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "55.5555555556", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "77.7777777778", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "311.1111111111", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "433.3333333333", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "311.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "77.7777777778", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "322.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "55.5555555556", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "311.1111111111", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "333.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "311.1111111111", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "344.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "55.5555555556", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "77.7777777778", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "311.1111111111", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "355.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "55.5555555556", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "311.1111111111", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "433.3333333333", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "366.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "77.7777777778", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "377.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "433.3333333333", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "388.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "311.1111111111", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "433.3333333333", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "400.0000000000", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "411.1111111111", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "55.5555555556", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "422.2222222222", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "177.7777777778", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "433.3333333333", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "433.3333333333", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "444.4444444444", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "100.0000000000", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "255.5555555556", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "355.5555555556", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "466.6666666667", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "455.5555555556", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "88.8888888889", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "233.3333333333", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "322.2222222222", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "411.1111111111", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "422.2222222222", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "433.3333333333", y: "466.6666666667", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "111.1111111111", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "166.6666666667", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "200.0000000000", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "244.4444444444", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "277.7777777778", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "333.3333333333", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "344.4444444444", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "366.6666666667", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "444.4444444444", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "455.5555555556", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "488.8888888889", y: "477.7777777778", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "0.0000000000", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "11.1111111111", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "22.2222222222", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "33.3333333333", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "44.4444444444", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "55.5555555556", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "66.6666666667", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "122.2222222222", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "133.3333333333", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "144.4444444444", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "155.5555555556", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "188.8888888889", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "211.1111111111", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "222.2222222222", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "266.6666666667", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "288.8888888889", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "300.0000000000", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "377.7777777778", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "388.8888888889", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "400.0000000000", y: "488.8888888889", xlinkHref: "#block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("use", { x: "477.7777777778", y: "488.8888888889", xlinkHref: "#block" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: goToDonat, appearence: "big", children: "Сделать донат" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate("/training/"), children: "На главную" })
  ] });
};
const h1$1 = "_h1_1x9tk_1";
const ol = "_ol_1x9tk_4";
const note = "_note_1x9tk_8";
const wrapper$1 = "_wrapper_1x9tk_13";
const content = "_content_1x9tk_24";
const styles$2 = {
  h1: h1$1,
  ol,
  note,
  wrapper: wrapper$1,
  content
};
const Final = () => {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2.wrapper, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2.content, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: styles$2.h1, children: "Инструкция по завершению сессии" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: styles$2.ol, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Быстро просмотрите мысленно сессию, которую вы только что закончили." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Мысленно просмотрите ещё раз то, что вы делали, обращая особое внимание на то, как вы сидели." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Мысленно пройдитесь по сессии от начала до конца, обращая внимание только на то, что вы делали руками, и на вещи в окружающем мире, звуки которых вы слышали во время сессии." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Задержите ваше внимание на каком-нибудь приятном предметe, находящемся сейчас около вас." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$2.note, children: "Проходите этот список снова и снова, пока вы не почувствуете себя бодрым в отношении вашего непосредственного окружения." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate("/training/"), children: "На главную" })
  ] });
};
const header = "_header_11qnu_10";
const burger = "_burger_11qnu_37";
const menu = "_menu_11qnu_54";
const active$1 = "_active_11qnu_68";
const spin = "_spin_11qnu_1";
const headerLine = "_headerLine_11qnu_111";
const styles$1 = {
  header,
  "header-title": "_header-title_11qnu_26",
  burger,
  menu,
  active: active$1,
  spin,
  headerLine
};
const Header = ({ children, title }) => {
  const menuRef = reactExports.useRef(null);
  const [menuActive, setMenuActive] = reactExports.useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuActive(false);
    }
  };
  reactExports.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: styles$1.header, ref: menuRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.headerLine, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["header-title"], onClick: toggleMenu, children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(styles$1.burger, { [styles$1.active]: menuActive }),
          onClick: toggleMenu,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "40px", height: "40px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M11 3H13C13.5523 3 14 3.44772 14 4V4.56879C14 4.99659 14.2871 5.36825 14.6822 5.53228C15.0775 5.69638 15.5377 5.63384 15.8403 5.33123L16.2426 4.92891C16.6331 4.53838 17.2663 4.53838 17.6568 4.92891L19.071 6.34312C19.4616 6.73365 19.4615 7.36681 19.071 7.75734L18.6688 8.1596C18.3661 8.46223 18.3036 8.92247 18.4677 9.31774C18.6317 9.71287 19.0034 10 19.4313 10L20 10C20.5523 10 21 10.4477 21 11V13C21 13.5523 20.5523 14 20 14H19.4312C19.0034 14 18.6318 14.2871 18.4677 14.6822C18.3036 15.0775 18.3661 15.5377 18.6688 15.8403L19.071 16.2426C19.4616 16.6331 19.4616 17.2663 19.071 17.6568L17.6568 19.071C17.2663 19.4616 16.6331 19.4616 16.2426 19.071L15.8403 18.6688C15.5377 18.3661 15.0775 18.3036 14.6822 18.4677C14.2871 18.6318 14 19.0034 14 19.4312V20C14 20.5523 13.5523 21 13 21H11C10.4477 21 10 20.5523 10 20V19.4313C10 19.0034 9.71287 18.6317 9.31774 18.4677C8.92247 18.3036 8.46223 18.3661 8.1596 18.6688L7.75732 19.071C7.36679 19.4616 6.73363 19.4616 6.34311 19.071L4.92889 17.6568C4.53837 17.2663 4.53837 16.6331 4.92889 16.2426L5.33123 15.8403C5.63384 15.5377 5.69638 15.0775 5.53228 14.6822C5.36825 14.2871 4.99659 14 4.56879 14H4C3.44772 14 3 13.5523 3 13V11C3 10.4477 3.44772 10 4 10L4.56877 10C4.99658 10 5.36825 9.71288 5.53229 9.31776C5.6964 8.9225 5.63386 8.46229 5.33123 8.15966L4.92891 7.75734C4.53838 7.36681 4.53838 6.73365 4.92891 6.34313L6.34312 4.92891C6.73365 4.53839 7.36681 4.53839 7.75734 4.92891L8.15966 5.33123C8.46228 5.63386 8.9225 5.6964 9.31776 5.53229C9.71288 5.36825 10 4.99658 10 4.56876V4C10 3.44772 10.4477 3 11 3Z", stroke: "#FFFFFF", strokeWidth: "1.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z", stroke: "#FFFFFF", strokeWidth: "1.5" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(styles$1.menu, { [styles$1.active]: menuActive }), children })
  ] });
};
const feelingsItems = [
  { name: "Вид", description: "то, что ты действительно видел в то время, когда случай имел место." },
  { name: "Запах", description: "запахи, которые присутствовали во время ситуации, которую ты вспоминаешь." },
  { name: "Осязание", description: "все, что угодно, что ты действительно осязал в то время, включая давление." },
  { name: "Цвет", description: "действительный цвет, который содержался в требуемом случае." },
  { name: "Тон", description: "тембр того звука, который присутствовал во время события." },
  { name: "Внешнее движение", description: "движение других людей, объектов или энергий." },
  { name: "Эмоция", description: "ту эмоцию, которую ты чувствовал во время этого случая." },
  { name: "Громкость", description: "громкость различных звуков в инциденте." },
  { name: "Положение тела", description: "положение твоего собственного тела в то время, когда произошел этот случай." },
  { name: "Звук", description: "те звуки, которые присутствовали в инциденте." },
  { name: "Вес", description: "тяжесть вещей, включая силу притяжения, и вес всего того, что ты мог действительно поддерживать во время случая, например, твоей одежды, мяча или любых других вещей, которые ты действительно держал во время случая." },
  { name: "Свое движение", description: "движение, которое во время события предпринимал ты сам." }
];
function formatProdErrorMessage$1(code) {
  return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
var $$observable = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
var symbol_observable_default = $$observable;
var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
var ActionTypes = {
  INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
};
var actionTypes_default = ActionTypes;
function isPlainObject$1(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}
function createStore(reducer, preloadedState, enhancer) {
  if (typeof reducer !== "function") {
    throw new Error(formatProdErrorMessage$1(2));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage$1(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage$1(1));
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = /* @__PURE__ */ new Map();
  let nextListeners = currentListeners;
  let listenerIdCounter = 0;
  let isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = /* @__PURE__ */ new Map();
      currentListeners.forEach((listener, key) => {
        nextListeners.set(key, listener);
      });
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage$1(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage$1(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage$1(5));
    }
    let isSubscribed = true;
    ensureCanMutateNextListeners();
    const listenerId = listenerIdCounter++;
    nextListeners.set(listenerId, listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage$1(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      nextListeners.delete(listenerId);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject$1(action)) {
      throw new Error(formatProdErrorMessage$1(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage$1(8));
    }
    if (typeof action.type !== "string") {
      throw new Error(formatProdErrorMessage$1(17));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage$1(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    const listeners = currentListeners = nextListeners;
    listeners.forEach((listener) => {
      listener();
    });
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage$1(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: actionTypes_default.REPLACE
    });
  }
  function observable() {
    const outerSubscribe = subscribe;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage$1(11));
        }
        function observeState() {
          const observerAsObserver = observer;
          if (observerAsObserver.next) {
            observerAsObserver.next(getState());
          }
        }
        observeState();
        const unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      },
      [symbol_observable_default]() {
        return this;
      }
    };
  }
  dispatch({
    type: actionTypes_default.INIT
  });
  const store2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [symbol_observable_default]: observable
  };
  return store2;
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach((key) => {
    const reducer = reducers[key];
    const initialState2 = reducer(void 0, {
      type: actionTypes_default.INIT
    });
    if (typeof initialState2 === "undefined") {
      throw new Error(formatProdErrorMessage$1(12));
    }
    if (typeof reducer(void 0, {
      type: actionTypes_default.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(formatProdErrorMessage$1(13));
    }
  });
}
function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducerKeys = Object.keys(finalReducers);
  let shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }
  return function combination(state = {}, action) {
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    let hasChanged = false;
    const nextState = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        action && action.type;
        throw new Error(formatProdErrorMessage$1(14));
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
function applyMiddleware(...middlewares) {
  return (createStore2) => (reducer, preloadedState) => {
    const store2 = createStore2(reducer, preloadedState);
    let dispatch = () => {
      throw new Error(formatProdErrorMessage$1(15));
    };
    const middlewareAPI = {
      getState: store2.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    };
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose(...chain)(store2.dispatch);
    return {
      ...store2,
      dispatch
    };
  };
}
function isAction(action) {
  return isPlainObject$1(action) && "type" in action && typeof action.type === "string";
}
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
function die(error, ...args) {
  throw new Error(
    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  var _a;
  if (!value)
    return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!((_a = value.constructor) == null ? void 0 : _a[DRAFTABLE]) || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0) {
    Reflect.ownKeys(obj).forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2)
    thing.set(propOrOldValue, value);
  else if (t === 3) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  const isPlain = isPlainObject(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return { ...base };
    }
    const obj = Object.create(proto);
    return Object.assign(obj, base);
  }
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep)
    Object.entries(obj).forEach(([key, value]) => freeze(value, true));
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 || state.type_ === 1)
    state.revoke_();
  else
    state.revoked_ = true;
}
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path)
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
    );
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop))
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc == null ? void 0 : desc.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2 == null ? void 0 : current2[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  var _a;
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (_a = desc.get) == null ? void 0 : _a.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof (config == null ? void 0 : config.autoFreeze) === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof (config == null ? void 0 : config.useStrictShallowCopy) === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}
var immer = new Immer2();
var produce = immer.produce;
immer.produceWithPatches.bind(
  immer
);
immer.setAutoFreeze.bind(immer);
immer.setUseStrictShallowCopy.bind(immer);
immer.applyPatches.bind(immer);
immer.createDraft.bind(immer);
immer.finishDraft.bind(immer);
function createThunkMiddleware(extraArgument) {
  const middleware = ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState, extraArgument);
    }
    return next(action);
  };
  return middleware;
}
var thunk = createThunkMiddleware();
var withExtraArgument = createThunkMiddleware;
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0) return void 0;
  if (typeof arguments[0] === "object") return compose;
  return compose.apply(null, arguments);
};
function createAction(type, prepareAction) {
  function actionCreator(...args) {
    if (prepareAction) {
      let prepared = prepareAction(...args);
      if (!prepared) {
        throw new Error(formatProdErrorMessage(0));
      }
      return {
        type,
        payload: prepared.payload,
        ..."meta" in prepared && {
          meta: prepared.meta
        },
        ..."error" in prepared && {
          error: prepared.error
        }
      };
    }
    return {
      type,
      payload: args[0]
    };
  }
  actionCreator.toString = () => `${type}`;
  actionCreator.type = type;
  actionCreator.match = (action) => isAction(action) && action.type === type;
  return actionCreator;
}
var Tuple = class _Tuple extends Array {
  constructor(...items) {
    super(...items);
    Object.setPrototypeOf(this, _Tuple.prototype);
  }
  static get [Symbol.species]() {
    return _Tuple;
  }
  concat(...arr) {
    return super.concat.apply(this, arr);
  }
  prepend(...arr) {
    if (arr.length === 1 && Array.isArray(arr[0])) {
      return new _Tuple(...arr[0].concat(this));
    }
    return new _Tuple(...arr.concat(this));
  }
};
function freezeDraftable(val) {
  return isDraftable(val) ? produce(val, () => {
  }) : val;
}
function getOrInsertComputed(map, key, compute) {
  if (map.has(key)) return map.get(key);
  return map.set(key, compute(key)).get(key);
}
function isBoolean(x) {
  return typeof x === "boolean";
}
var buildGetDefaultMiddleware = () => function getDefaultMiddleware(options) {
  const {
    thunk: thunk$1 = true,
    immutableCheck = true,
    serializableCheck = true,
    actionCreatorCheck = true
  } = options ?? {};
  let middlewareArray = new Tuple();
  if (thunk$1) {
    if (isBoolean(thunk$1)) {
      middlewareArray.push(thunk);
    } else {
      middlewareArray.push(withExtraArgument(thunk$1.extraArgument));
    }
  }
  return middlewareArray;
};
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var createQueueWithTimer = (timeout) => {
  return (notify) => {
    setTimeout(notify, timeout);
  };
};
var autoBatchEnhancer = (options = {
  type: "raf"
}) => (next) => (...args) => {
  const store2 = next(...args);
  let notifying = true;
  let shouldNotifyAtEndOfTick = false;
  let notificationQueued = false;
  const listeners = /* @__PURE__ */ new Set();
  const queueCallback = options.type === "tick" ? queueMicrotask : options.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10)
  ) : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
  const notifyListeners = () => {
    notificationQueued = false;
    if (shouldNotifyAtEndOfTick) {
      shouldNotifyAtEndOfTick = false;
      listeners.forEach((l) => l());
    }
  };
  return Object.assign({}, store2, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(listener2) {
      const wrappedListener = () => notifying && listener2();
      const unsubscribe = store2.subscribe(wrappedListener);
      listeners.add(listener2);
      return () => {
        unsubscribe();
        listeners.delete(listener2);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(action) {
      var _a;
      try {
        notifying = !((_a = action == null ? void 0 : action.meta) == null ? void 0 : _a[SHOULD_AUTOBATCH]);
        shouldNotifyAtEndOfTick = !notifying;
        if (shouldNotifyAtEndOfTick) {
          if (!notificationQueued) {
            notificationQueued = true;
            queueCallback(notifyListeners);
          }
        }
        return store2.dispatch(action);
      } finally {
        notifying = true;
      }
    }
  });
};
var buildGetDefaultEnhancers = (middlewareEnhancer) => function getDefaultEnhancers(options) {
  const {
    autoBatch = true
  } = options ?? {};
  let enhancerArray = new Tuple(middlewareEnhancer);
  if (autoBatch) {
    enhancerArray.push(autoBatchEnhancer(typeof autoBatch === "object" ? autoBatch : void 0));
  }
  return enhancerArray;
};
function configureStore(options) {
  const getDefaultMiddleware = buildGetDefaultMiddleware();
  const {
    reducer = void 0,
    middleware,
    devTools = true,
    preloadedState = void 0,
    enhancers = void 0
  } = options || {};
  let rootReducer;
  if (typeof reducer === "function") {
    rootReducer = reducer;
  } else if (isPlainObject$1(reducer)) {
    rootReducer = combineReducers(reducer);
  } else {
    throw new Error(formatProdErrorMessage(1));
  }
  let finalMiddleware;
  if (typeof middleware === "function") {
    finalMiddleware = middleware(getDefaultMiddleware);
  } else {
    finalMiddleware = getDefaultMiddleware();
  }
  let finalCompose = compose;
  if (devTools) {
    finalCompose = composeWithDevTools({
      // Enable capture of stack traces for dispatched Redux actions
      trace: false,
      ...typeof devTools === "object" && devTools
    });
  }
  const middlewareEnhancer = applyMiddleware(...finalMiddleware);
  const getDefaultEnhancers = buildGetDefaultEnhancers(middlewareEnhancer);
  let storeEnhancers = typeof enhancers === "function" ? enhancers(getDefaultEnhancers) : getDefaultEnhancers();
  const composedEnhancer = finalCompose(...storeEnhancers);
  return createStore(rootReducer, preloadedState, composedEnhancer);
}
function executeReducerBuilderCallback(builderCallback) {
  const actionsMap = {};
  const actionMatchers = [];
  let defaultCaseReducer;
  const builder = {
    addCase(typeOrActionCreator, reducer) {
      const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (!type) {
        throw new Error(formatProdErrorMessage(28));
      }
      if (type in actionsMap) {
        throw new Error(formatProdErrorMessage(29));
      }
      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher(matcher, reducer) {
      actionMatchers.push({
        matcher,
        reducer
      });
      return builder;
    },
    addDefaultCase(reducer) {
      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}
function isStateFunction(x) {
  return typeof x === "function";
}
function createReducer(initialState2, mapOrBuilderCallback) {
  let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = executeReducerBuilderCallback(mapOrBuilderCallback);
  let getInitialState;
  if (isStateFunction(initialState2)) {
    getInitialState = () => freezeDraftable(initialState2());
  } else {
    const frozenInitialState = freezeDraftable(initialState2);
    getInitialState = () => frozenInitialState;
  }
  function reducer(state = getInitialState(), action) {
    let caseReducers = [actionsMap[action.type], ...finalActionMatchers.filter(({
      matcher
    }) => matcher(action)).map(({
      reducer: reducer2
    }) => reducer2)];
    if (caseReducers.filter((cr) => !!cr).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce((previousState, caseReducer) => {
      if (caseReducer) {
        if (isDraft(previousState)) {
          const draft = previousState;
          const result = caseReducer(draft, action);
          if (result === void 0) {
            return previousState;
          }
          return result;
        } else if (!isDraftable(previousState)) {
          const result = caseReducer(previousState, action);
          if (result === void 0) {
            if (previousState === null) {
              return previousState;
            }
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return result;
        } else {
          return produce(previousState, (draft) => {
            return caseReducer(draft, action);
          });
        }
      }
      return previousState;
    }, state);
  }
  reducer.getInitialState = getInitialState;
  return reducer;
}
var asyncThunkSymbol = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function getType(slice, actionKey) {
  return `${slice}/${actionKey}`;
}
function buildCreateSlice({
  creators
} = {}) {
  var _a;
  const cAT = (_a = creators == null ? void 0 : creators.asyncThunk) == null ? void 0 : _a[asyncThunkSymbol];
  return function createSlice2(options) {
    const {
      name,
      reducerPath = name
    } = options;
    if (!name) {
      throw new Error(formatProdErrorMessage(11));
    }
    if (typeof process !== "undefined" && false) {
      if (options.initialState === void 0) {
        console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
      }
    }
    const reducers = (typeof options.reducers === "function" ? options.reducers(buildReducerCreators()) : options.reducers) || {};
    const reducerNames = Object.keys(reducers);
    const context = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    };
    const contextMethods = {
      addCase(typeOrActionCreator, reducer2) {
        const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
        if (!type) {
          throw new Error(formatProdErrorMessage(12));
        }
        if (type in context.sliceCaseReducersByType) {
          throw new Error(formatProdErrorMessage(13));
        }
        context.sliceCaseReducersByType[type] = reducer2;
        return contextMethods;
      },
      addMatcher(matcher, reducer2) {
        context.sliceMatchers.push({
          matcher,
          reducer: reducer2
        });
        return contextMethods;
      },
      exposeAction(name2, actionCreator) {
        context.actionCreators[name2] = actionCreator;
        return contextMethods;
      },
      exposeCaseReducer(name2, reducer2) {
        context.sliceCaseReducersByName[name2] = reducer2;
        return contextMethods;
      }
    };
    reducerNames.forEach((reducerName) => {
      const reducerDefinition = reducers[reducerName];
      const reducerDetails = {
        reducerName,
        type: getType(name, reducerName),
        createNotation: typeof options.reducers === "function"
      };
      if (isAsyncThunkSliceReducerDefinition(reducerDefinition)) {
        handleThunkCaseReducerDefinition(reducerDetails, reducerDefinition, contextMethods, cAT);
      } else {
        handleNormalReducerDefinition(reducerDetails, reducerDefinition, contextMethods);
      }
    });
    function buildReducer() {
      const [extraReducers = {}, actionMatchers = [], defaultCaseReducer = void 0] = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers];
      const finalCaseReducers = {
        ...extraReducers,
        ...context.sliceCaseReducersByType
      };
      return createReducer(options.initialState, (builder) => {
        for (let key in finalCaseReducers) {
          builder.addCase(key, finalCaseReducers[key]);
        }
        for (let sM of context.sliceMatchers) {
          builder.addMatcher(sM.matcher, sM.reducer);
        }
        for (let m of actionMatchers) {
          builder.addMatcher(m.matcher, m.reducer);
        }
        if (defaultCaseReducer) {
          builder.addDefaultCase(defaultCaseReducer);
        }
      });
    }
    const selectSelf = (state) => state;
    const injectedSelectorCache = /* @__PURE__ */ new Map();
    let _reducer;
    function reducer(state, action) {
      if (!_reducer) _reducer = buildReducer();
      return _reducer(state, action);
    }
    function getInitialState() {
      if (!_reducer) _reducer = buildReducer();
      return _reducer.getInitialState();
    }
    function makeSelectorProps(reducerPath2, injected = false) {
      function selectSlice(state) {
        let sliceState = state[reducerPath2];
        if (typeof sliceState === "undefined") {
          if (injected) {
            sliceState = getInitialState();
          }
        }
        return sliceState;
      }
      function getSelectors(selectState = selectSelf) {
        const selectorCache = getOrInsertComputed(injectedSelectorCache, injected, () => /* @__PURE__ */ new WeakMap());
        return getOrInsertComputed(selectorCache, selectState, () => {
          const map = {};
          for (const [name2, selector] of Object.entries(options.selectors ?? {})) {
            map[name2] = wrapSelector(selector, selectState, getInitialState, injected);
          }
          return map;
        });
      }
      return {
        reducerPath: reducerPath2,
        getSelectors,
        get selectors() {
          return getSelectors(selectSlice);
        },
        selectSlice
      };
    }
    const slice = {
      name,
      reducer,
      actions: context.actionCreators,
      caseReducers: context.sliceCaseReducersByName,
      getInitialState,
      ...makeSelectorProps(reducerPath),
      injectInto(injectable, {
        reducerPath: pathOpt,
        ...config
      } = {}) {
        const newReducerPath = pathOpt ?? reducerPath;
        injectable.inject({
          reducerPath: newReducerPath,
          reducer
        }, config);
        return {
          ...slice,
          ...makeSelectorProps(newReducerPath, true)
        };
      }
    };
    return slice;
  };
}
function wrapSelector(selector, selectState, getInitialState, injected) {
  function wrapper2(rootState, ...args) {
    let sliceState = selectState(rootState);
    if (typeof sliceState === "undefined") {
      if (injected) {
        sliceState = getInitialState();
      }
    }
    return selector(sliceState, ...args);
  }
  wrapper2.unwrapped = selector;
  return wrapper2;
}
var createSlice = /* @__PURE__ */ buildCreateSlice();
function buildReducerCreators() {
  function asyncThunk(payloadCreator, config) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator,
      ...config
    };
  }
  asyncThunk.withTypes = () => asyncThunk;
  return {
    reducer(caseReducer) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [caseReducer.name](...args) {
          return caseReducer(...args);
        }
      }[caseReducer.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(prepare, reducer) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare,
        reducer
      };
    },
    asyncThunk
  };
}
function handleNormalReducerDefinition({
  type,
  reducerName,
  createNotation
}, maybeReducerWithPrepare, context) {
  let caseReducer;
  let prepareCallback;
  if ("reducer" in maybeReducerWithPrepare) {
    if (createNotation && !isCaseReducerWithPrepareDefinition(maybeReducerWithPrepare)) {
      throw new Error(formatProdErrorMessage(17));
    }
    caseReducer = maybeReducerWithPrepare.reducer;
    prepareCallback = maybeReducerWithPrepare.prepare;
  } else {
    caseReducer = maybeReducerWithPrepare;
  }
  context.addCase(type, caseReducer).exposeCaseReducer(reducerName, caseReducer).exposeAction(reducerName, prepareCallback ? createAction(type, prepareCallback) : createAction(type));
}
function isAsyncThunkSliceReducerDefinition(reducerDefinition) {
  return reducerDefinition._reducerDefinitionType === "asyncThunk";
}
function isCaseReducerWithPrepareDefinition(reducerDefinition) {
  return reducerDefinition._reducerDefinitionType === "reducerWithPrepare";
}
function handleThunkCaseReducerDefinition({
  type,
  reducerName
}, reducerDefinition, context, cAT) {
  if (!cAT) {
    throw new Error(formatProdErrorMessage(18));
  }
  const {
    payloadCreator,
    fulfilled,
    pending,
    rejected,
    settled,
    options
  } = reducerDefinition;
  const thunk2 = cAT(type, payloadCreator, options);
  context.exposeAction(reducerName, thunk2);
  if (fulfilled) {
    context.addCase(thunk2.fulfilled, fulfilled);
  }
  if (pending) {
    context.addCase(thunk2.pending, pending);
  }
  if (rejected) {
    context.addCase(thunk2.rejected, rejected);
  }
  if (settled) {
    context.addMatcher(thunk2.settled, settled);
  }
  context.exposeCaseReducer(reducerName, {
    fulfilled: fulfilled || noop,
    pending: pending || noop,
    rejected: rejected || noop,
    settled: settled || noop
  });
}
function noop() {
}
function formatProdErrorMessage(code) {
  return `Minified Redux Toolkit error #${code}; visit https://redux-toolkit.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
const randomizeFeeling = () => Math.floor(Math.random() * feelingsItems.length);
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("appState");
    return serializedState ? JSON.parse(serializedState) : {};
  } catch {
    return {};
  }
};
const initialState = {
  phrases: [],
  currentQuestions: [],
  lists: [],
  feelings: [],
  currentListId: 1,
  phraseIndex: 0,
  questionIndex: 0,
  phraseIndexInput: "1",
  feelingIndex: 0,
  // isListDone: false,
  isActiveFeeling: true,
  customListsActivated: false,
  ...loadState()
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLists: (state, action) => {
      var _a;
      state.lists = action.payload;
      state.currentQuestions = ((_a = state.lists.find((item) => item.id === state.currentListId)) == null ? void 0 : _a.questions) || [];
      state.questionIndex = 0;
    },
    setFeelings: (state, action) => {
      state.feelings = action.payload;
    },
    setPhrases: (state, action) => {
      state.phrases = action.payload;
    },
    setCurrentListId: (state, action) => {
      var _a, _b;
      state.currentListId = action.payload;
      state.phraseIndex = 0;
      state.currentQuestions = ((_a = state.lists.find((item) => item.id === action.payload)) == null ? void 0 : _a.questions) || [];
      state.phrases = ((_b = state.lists.find((item) => item.id === action.payload)) == null ? void 0 : _b.phrases) ?? [];
      state.questionIndex = 0;
      state.phraseIndexInput = "1";
    },
    setPhraseIndex: (state, action) => {
      state.phraseIndex = action.payload;
      state.questionIndex = 0;
    },
    nextPhraseIndex: (state) => {
      var _a, _b;
      let value = state.phraseIndex;
      value++;
      state.phraseIndex = value === state.phrases.length ? 0 : value;
      if (value >= state.phrases.length) {
        state.currentListId = state.currentListId + 1;
        state.phraseIndex = 0;
        state.currentQuestions = ((_a = state.lists.find((item) => item.id === state.currentListId + 1)) == null ? void 0 : _a.questions) || [];
        state.phrases = ((_b = state.lists.find((item) => item.id === state.currentListId + 1)) == null ? void 0 : _b.phrases) ?? [];
        state.questionIndex = 0;
        state.phraseIndexInput = "1";
        state.feelingIndex = randomizeFeeling();
      }
    },
    setQuestionIndex: (state, action) => {
      state.questionIndex = action.payload;
    },
    nextQuestionIndex: (state) => {
      state.questionIndex = state.questionIndex + 1;
    },
    setFeelingIndex: (state, action) => {
      state.feelingIndex = action.payload;
    },
    nextFeelingIndex: (state) => {
      let value = state.feelingIndex;
      value++;
      state.feelingIndex = value === state.feelings.length ? 0 : value;
    },
    setPhraseIndexInput: (state, action) => {
      state.phraseIndexInput = action.payload;
    },
    // setIsListDone: (state, action: PayloadAction<boolean>) => {
    // 	state.isListDone = action.payload;
    // },
    toggleActiveFeeling: (state, action) => {
      state.isActiveFeeling = action.payload;
    },
    activateCustomLists: (state) => {
      state.customListsActivated = true;
    },
    toggleActivateCustomLists: (state) => {
      state.customListsActivated = !state.customListsActivated;
    },
    goToStartList: (state) => {
      state.phraseIndex = 0;
      state.phraseIndexInput = "1";
      state.feelingIndex = randomizeFeeling();
    },
    goToNextPhrase: (state) => {
      var _a, _b;
      let value = state.phraseIndex;
      value++;
      state.phraseIndex = value === state.phrases.length ? 0 : value;
      if (value >= state.phrases.length) {
        state.currentListId = state.currentListId + 1;
        state.phraseIndex = 0;
        state.currentQuestions = ((_a = state.lists.find((item) => item.id === state.currentListId + 1)) == null ? void 0 : _a.questions) || [];
        state.phrases = ((_b = state.lists.find((item) => item.id === state.currentListId + 1)) == null ? void 0 : _b.phrases) ?? [];
        state.questionIndex = 0;
        state.phraseIndexInput = "1";
        state.feelingIndex = randomizeFeeling();
      }
      let valueTemp = state.feelingIndex;
      valueTemp++;
      state.feelingIndex = valueTemp === state.feelings.length ? 0 : valueTemp;
      state.phraseIndexInput = state.phraseIndex + 1 + "";
      state.questionIndex = 0;
    }
  }
});
const {
  setLists,
  setFeelings,
  setPhrases,
  setCurrentListId,
  setPhraseIndex,
  setQuestionIndex,
  nextQuestionIndex,
  setFeelingIndex,
  nextFeelingIndex,
  setPhraseIndexInput,
  // setIsListDone,
  toggleActiveFeeling,
  activateCustomLists,
  toggleActivateCustomLists,
  nextPhraseIndex,
  goToStartList,
  goToNextPhrase
} = appSlice.actions;
const appReducer = appSlice.reducer;
const fadeIn = "_fadeIn_z1aca_43";
const fadeOut = "_fadeOut_z1aca_47";
const wrapper = "_wrapper_z1aca_51";
const thxWrapper = "_thxWrapper_z1aca_51";
const displayFlex = "_displayFlex_z1aca_76";
const h1 = "_h1_z1aca_80";
const h2 = "_h2_z1aca_112";
const h3 = "_h3_z1aca_132";
const randomize = "_randomize_z1aca_143";
const text = "_text_z1aca_147";
const thxText = "_thxText_z1aca_147";
const input = "_input_z1aca_160";
const theme = "_theme_z1aca_239";
const select = "_select_z1aca_244";
const defenition = "_defenition_z1aca_306";
const buttons = "_buttons_z1aca_364";
const shuffleButton = "_shuffleButton_z1aca_370";
const active = "_active_z1aca_399";
const donat = "_donat_z1aca_432";
const secret = "_secret_z1aca_450";
const styles = {
  fadeIn,
  fadeOut,
  wrapper,
  thxWrapper,
  displayFlex,
  h1,
  h2,
  h3,
  randomize,
  text,
  thxText,
  input,
  theme,
  select,
  defenition,
  buttons,
  shuffleButton,
  "shuffle-button": "_shuffle-button_z1aca_399",
  active,
  donat,
  secret,
  "neon-flicker": "_neon-flicker_z1aca_1"
};
const Main = () => {
  var _a, _b;
  const dispatch = useDispatch();
  const {
    phrases,
    lists,
    feelings,
    // customListsActivated,
    currentListId,
    phraseIndex,
    questionIndex,
    phraseIndexInput,
    feelingIndex,
    // isListDone,
    currentQuestions
  } = useSelector((state) => state.app);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const randomizeFeeling2 = () => Math.floor(Math.random() * feelingsItems.length);
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    dispatch(setQuestionIndex(0));
  }, [dispatch]);
  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (!value) {
      return;
    }
    dispatch(setCurrentListId(+value));
  };
  const handleChange = (e) => {
    var _a2;
    const value = (_a2 = e.target) == null ? void 0 : _a2.value;
    if (!+value && value !== "") {
      return;
    }
    if (+value > phrases.length || value === "0") {
      return;
    }
    dispatch(setPhraseIndexInput(value));
    if (!value) {
      return;
    }
    dispatch(setPhraseIndex(+value - 1));
    dispatch(nextFeelingIndex());
  };
  const setRandomFeeling = () => {
    dispatch(setFeelingIndex(randomizeFeeling2()));
  };
  const currentTitle = (currentQuestions == null ? void 0 : currentQuestions[questionIndex]) ?? "Вопрос";
  const animateThx = async (fn) => {
    setShowThx(true);
    setShowFadeIn(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        fn();
        setShowFadeOut(true);
        scrollToTop();
      }, 1e3);
      setTimeout(() => {
        setShowThx(false);
        setShowFadeIn(false);
        setShowFadeOut(false);
        resolve();
      }, 2e3);
    });
  };
  const yes = async () => {
    await animateThx(() => {
      dispatch(nextQuestionIndex());
    });
  };
  reactExports.useEffect(() => {
    if (questionIndex === (currentQuestions == null ? void 0 : currentQuestions.length)) {
      dispatch(goToNextPhrase());
    }
  }, [questionIndex, currentQuestions, dispatch]);
  const no = async () => {
    await animateThx(() => {
      dispatch(goToNextPhrase());
    });
  };
  const goToDonat = () => {
    const url2 = "https://www.donationalerts.com/r/devforsoul";
    window.open(url2, "_blank");
  };
  const [showThx, setShowThx] = reactExports.useState(false);
  const [showFadeIn, setShowFadeIn] = reactExports.useState(false);
  const [showFadeOut, setShowFadeOut] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(styles.thxWrapper, { [styles.displayFlex]: showThx }, { [styles.fadeIn]: showFadeIn }, { [styles.fadeOut]: showFadeOut }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles.thxText, children: "Спасибо!" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { title: `Cписок: ${(_a = lists.find((item) => item.id === currentListId)) == null ? void 0 : _a.theme}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.theme, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: styles.select, onChange: handleSelectChange, value: currentListId, children: lists.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item.id, children: item.theme }, item.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.text, children: [
        "всего карточек в списке: ",
        phrases.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: styles.input, type: "number", pattern: "[0-9]*", min: "1", max: phrases.length, value: phraseIndexInput, onChange: handleChange }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: styles.shuffleButton, onClick: () => navigate("/training/bad"), children: "Если вспоминание некоторых вещей вызвало у вас неприятные ощущения" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.wrapper, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: styles.donat, onClick: goToDonat, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16px", height: "16px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z", stroke: "#750000", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Сделай донат"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: styles.input, type: "range", min: "1", max: phrases.length, step: "1", value: phraseIndexInput || 0, onChange: handleChange }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: styles.h1, dangerouslySetInnerHTML: { __html: currentTitle } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles.h2, children: `${phraseIndex + 1}. ${phrases[phraseIndex]}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: cn(styles.h3), children: [
          feelings[feelingIndex],
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.randomize, onClick: setRandomFeeling, children: "🎲" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.defenition, children: ((_b = feelingsItems[feelingIndex]) == null ? void 0 : _b.description) ?? "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.buttons, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearence: "big", onClick: yes, children: "Да (Что это было?)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearence: "big", onClick: no, children: "Нет" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer", style: { marginTop: "auto", padding: "20px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate("/training/final"), children: "Закончить" }) })
    ] })
  ] });
};
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("appState", serializedState);
  } catch {
  }
};
const store = configureStore({
  reducer: {
    app: appReducer
  }
});
store.subscribe(() => {
  saveState(store.getState().app);
});
WebApp.ready();
WebApp.expand();
const router = createBrowserRouter([
  {
    path: "/",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(Main, {})
  },
  {
    path: "/training/",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(Main, {})
  },
  {
    path: "/training/final",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(Final, {})
  },
  {
    path: "/training/bad",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(Bad, {})
  },
  {
    path: "/training/donat",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(Donat, {})
  }
]);
clientExports.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Provider_default, { store, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider2, { router }) }) })
);
//# sourceMappingURL=index-BZFgxGa6.js.map
