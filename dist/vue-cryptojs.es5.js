"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _cryptoJs = _interopRequireDefault(require("crypto-js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable */

var VueCryptojs = {
  install: function install(Vue, options) {
    Vue.CryptoJS = _cryptoJs["default"];

    // VueJS 2

    if (Vue.prototype) {
      Object.defineProperties(Vue.prototype, {
        $CryptoJS: {
          get: function get() {
            return _cryptoJs["default"];
          }
        },
        CryptoJS: {
          get: function get() {
            return _cryptoJs["default"];
          }
        }
      });
    }

    // VueJS 3

    if (Vue.config && Vue.config.globalProperties) {
      Vue.config.globalProperties.$CryptoJS = _cryptoJs["default"];
    }
    if (Vue.provide && typeof Vue.provide === 'function') {
      Vue.provide('cryptojs', _cryptoJs["default"]);
    }
    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(VueCryptojs);
    }
  }
};
var _default = exports["default"] = VueCryptojs;
