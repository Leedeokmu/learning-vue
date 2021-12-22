<template>
  <h3>{{finalCounter}}</h3>
  <p>We do more...</p>
</template>

<script>
import mapGetters from "vuex";

export default {
  name: "FavoriteValue",
  computed: {
    ...mapGetters(['finalCounter'])
  }
}
</script>

<style scoped>

</style>