<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>

</template>

<script>
import {computed, inject, onBeforeMount, onBeforeUpdate, onBeforeUnmount, onMounted, onUpdated, onUnmounted} from "vue";

export default {
  name: "UserData",
  props: ['lastName', 'firstName'],
  setup(props) {
    const uName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });
    const age = inject('userAge');

    onBeforeMount(() => {
      console.log('onBeforeMount')
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    });
    onMounted(() => {
      console.log('onMounted')
    });
    onUpdated(() => {
      console.log('onUpdated')
    });
    onUnmounted(() => {
      console.log('onUnmounted')
    });


    return {
      userName: uName,
      age
    }
  }
}
</script>

<style scoped>

</style>