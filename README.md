# vue-cryptojs
A small wrapper for integrating crypto-js into Vue3 and Vue2

## How to install:
```bash
npm install vue-cryptojs
```

And in your entry file:
```js
// Vue3
import { createApp } from 'vue'
import VueCryptojs from 'vue-cryptojs'

createApp(...).use(VueCryptojs).mount(...)

// Vue2
import Vue from 'vue'
import VueCryptojs from 'vue-cryptojs'

Vue.use(VueCryptojs)
```
## Usage:
This wrapper bind `CryptoJS` to `Vue` or `this` if you're using single file component.

Simple AES text encrypt/decrypt example:
```js
const encryptedText = this.$CryptoJS.AES.encrypt("Hi There!", "Secret Passphrase").toString()
const decryptedText = this.$CryptoJS.AES.decrypt(encryptedText, "Secret Passphrase").toString(this.$CryptoJS.enc.Utf8)
```

Directly on a template:
```js
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  {{ $CryptoJS.AES.encrypt("Hi There!", "Secret Passphrase").toString() }}
</template>
```

For Vue3 we suggest to use `inject` on Composition API:
```js
<script>
import { inject } from 'vue'

export default {
  setup() {
    const cryoptojs = inject('cryptojs')

    return {
      cryoptojs
    }
  }
}
</script>

```

Please kindly check full documention of [crypto-js](https://github.com/brix/crypto-js)
