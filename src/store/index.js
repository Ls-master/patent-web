import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import pages from './pages';

export default new Vuex.Store({
    modules: {
      pages,
    },
});
