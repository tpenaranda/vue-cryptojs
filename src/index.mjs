/* eslint-disable */
import cryptojs from 'crypto-js'

const VueCryptojs = {
  install (Vue, options) {
    Vue.CryptoJS = cryptojs

    // VueJS 2

    if (Vue.prototype) {
      Object.defineProperties(Vue.prototype, {
        $CryptoJS: { get() { return cryptojs } },
        CryptoJS: { get() { return cryptojs } }
      })
    }

    // VueJS 3

    if (Vue.config && Vue.config.globalProperties) {
      Vue.config.globalProperties.$CryptoJS = cryptojs
    }

    if (Vue.provide && typeof Vue.provide === 'function') {
      Vue.provide('cryptojs', cryptojs)
    }

    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(VueCryptojs)
    }
  }
}

export default VueCryptojs
