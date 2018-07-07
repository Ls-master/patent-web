import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import pages from './pages';

export default new Vuex.Store({
  namespaced: true,
  state: {
    comps: ['', '', '', '']
  },
  mutations: {
    setComps(state, obj) {
      state.comps.splice(obj.i, 1, obj.val);
    }
  },
  getters: {
    getComps: (state, getters) => state.comps
  },
  modules: {
    pages,
  },
});
