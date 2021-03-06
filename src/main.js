// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import './utils';
import 'normalize.css';
import axios from 'axios';
import _ from 'lodash';
import ElementUI from 'element-ui'

Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.$_ = _;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
