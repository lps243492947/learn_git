import Vue from 'vue';
import Vuex from 'vuex';
import com from './modules/com';
import cou from './modules/cou';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    com,
    cou
  }
})