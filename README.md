# vue-cryptojs
A small wrapper for integrating crypto-js into VueJS

## How to install:
```bash
npm install vue-cryptojs
```

And in your entry file:
```js
import Vue from 'vue'
import VueCryptojs from 'vue-cryptojs'

Vue.use(VueCryptojs)
```
## Usage:
This wrapper bind `CryptoJS` to `Vue` or `this` if you're using single file component.

You can use `crypto-js` like this:
```js
Vue.CryptoJS.HmacSHA1('Message')

this.CryptoJS.HmacSHA1('Message')

this.$CryptoJS.HmacSHA1('Message')
```

Please kindly check full documention of [crypto-js](https://github.com/brix/crypto-js)