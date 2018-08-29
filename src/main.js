import Vue from 'vue';
import App from './App.vue';
import store from './store';
import html from 'data.html';
import { parseHtml } from './utils';

Vue.config.productionTip = false;

parseHtml(html);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
