# vue-cryptojs
A small wrapper for integrating crypto-js into VueJS v3 and VueJS v2

## How to install:
```bash
npm install vue-cryptojs
```

And in your entry file:
```js
// VueJS v3
import { createApp } from 'vue'
import VueCryptojs from 'vue-cryptojs'

const app = createApp(<YourComponent>)
app.use(VueCryptojs)
app.mount('#app')

// VueJS v2
import Vue from 'vue'
import VueCryptojs from 'vue-cryptojs'

Vue.use(VueCryptojs)
```
## Usage:
This wrapper bind `CryptoJS` to `Vue` or `this` if you're using single file component.

Simple AES text encrypt/decrypt example:
```js
const encryptedText = this.$CryptoJS.AES.encrypt("Hi There!", "Secret Passphrase").toString()
const decryptedText = this.$CryptoJS.AES.decrypt(encryptedText, "Secret Passphrase").toString(this.CryptoJS.enc.Utf8)
```

For VueJS v3 we suggest to use `inject` on Composition API:
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
