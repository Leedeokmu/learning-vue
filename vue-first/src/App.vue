<template>
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <FavoriteValue></FavoriteValue>
    <button @click="addOne">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import FavoriteValue from "@/components/FavoriteValue";

export default {
  components: {
    FavoriteValue,
    BaseContainer,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    addOne() {
      this.$store.dispatch('increment');
    },
    add() {
      this.$store.commit('increase', {value: 10})
      this.$store.commit({
        type: 'increase',
        value: 10
      })
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>