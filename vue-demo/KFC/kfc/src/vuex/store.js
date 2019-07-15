import Vue from 'vue';
import Vuex from 'vuex';
import com from './modules/com';
import cou from './modules/cou';
import take from './modules/take';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    com,
    cou,
    take
  }
})