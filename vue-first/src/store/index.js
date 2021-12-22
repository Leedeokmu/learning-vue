import {createStore} from "vuex";
import rootMutations from "./mutations";
import rootGetters from "./getters";

const store = createStore({
  state() {
    return {
      counter: 0
    };
  },
  mutations: rootMutations,
  getters: rootGetters,
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