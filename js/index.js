import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import VueFormulate from 'https://cdn.jsdelivr.net/npm/@braid/vue-formulate@2.2.8/dist/formulate.umd.js'

Vue.use(VueFormulate)

var app = new Vue({ 
  el: '#app',
  data: {
      message: 'Hello Vue!'
  }
});

//Vue.use(VueFormulate.default)

