# vue-cryptojs
A small wrapper for integrating crypto-js into Vue3 and Vue2

## How to install:
```bash
npm install vue-cryptojs
```

### Vue3
Entry file:
```js

import { createApp } from 'vue'
import VueCryptojs from 'vue-cryptojs'

createApp(...).use(VueCryptojs).mount(...)
```

TS Component:
```js
<script setup lang="ts">
  import { inject } from 'vue'
  import CryptoJS from 'crypto-js'

  const cryptojs = inject('cryptojs') as typeof CryptoJS
</script>

<template>
  <p>{{cryptojs.AES.encrypt("Hi There!", "Secret Passphrase").toString()}}</p>
  <p>{{cryptojs.AES.decrypt("U2FsdGVkX1/zclTGSirKJ+oYxGJFRR96i9MkjOb8X0s=", "Secret Passphrase").toString(cryptojs.enc.Utf8)}}</p>
</template>
```

`inject` on Composition API without TS:
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

### Vue2
```js
import Vue from 'vue'
import VueCryptojs from 'vue-cryptojs'

Vue.use(VueCryptojs)
```

This binds `CryptoJS` to `Vue` or `this` if you're using single file component.

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

Please kindly check full documention of [crypto-js](https://github.com/brix/crypto-js)
