import {createStore} from "vuex";

const module = {
  namespaced: true,
  state() {
    return {

    }
  },
  mutations: {},
  getters: {},
  actions: {}
}

const store = createStore({
  modules: {
    module: module
  },
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;

      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    }
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    // increment(context, payload){
    //   context.commit('increment', payload);
    // }
  }

})

export default store;