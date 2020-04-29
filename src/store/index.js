import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      newUrl: '',
      devUrl: '',
      oldUrl: '',
      oldLinks: [],
      newLinks: [],
      automatching: false,
      remaining: [],
      matches: [],
      redirects: [],
      test: '',
      stage0: false,
      stage1: false,
      stage2: false,
      stage3: false,
      stage4: false,
      stage5: false,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
