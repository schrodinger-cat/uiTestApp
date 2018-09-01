import Vue from 'vue';
import App from './App.vue';
import store from './store';
import html from 'data.html';
import { parseHtml, valuesList } from './utils';

Vue.config.productionTip = false;

/**
 * Перед загрузкой приложения получим html, так как я не могу получить данные со статичной страницы
 * или с помощью ajax запроса, я вынесу их в отдельный файл и получу его как строку, а затем уже
 * используя DOMParser - распаршу его и запишу полученный результат в стор
 */
store.commit('setWidgetsList', parseHtml(html));
store.commit('setWidgetsValuesList', valuesList(html));

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
