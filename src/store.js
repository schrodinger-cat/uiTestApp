import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    widgets: null,
  },
  getters: {
    getWidgetsList: state => state.widgets,
  },
  mutations: {
    /**
     * Мутация для добавления в стор массива объектов с виджетами
     */
    setWidgetsList: (state, payload) => {
      state.widgets = payload;
    }
  },
  actions: {}
});
