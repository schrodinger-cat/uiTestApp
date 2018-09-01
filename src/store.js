import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    widgets: null,
    widgetValues: null,
  },
  getters: {
    getWidgetsList: state => state.widgets,
    getWidgetsValues: state => state.widgetValues,
  },
  mutations: {
    /**
     * Мутация для добавления в стор массива объектов с виджетами
     */
    setWidgetsList: (state, payload) => {
      state.widgets = payload;
    },

    /**
     * Мутация для добавления в стор массива значений виджетов
     */
    setWidgetsValuesList: (state, payload) => {
      state.widgetValues = payload;
    },
  },
  actions: {},
});
