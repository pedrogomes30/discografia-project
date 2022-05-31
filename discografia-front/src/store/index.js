import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import discography from './modules/discography';

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    discography,
  },
  plugins:[createPersistedState()]
})
