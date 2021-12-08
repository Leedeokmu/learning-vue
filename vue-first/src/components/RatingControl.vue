<template>
  <ul>
    <li>
      <button type="button" :class="{active: modelValue === 'poor'}" @click="activate('poor')">Poor</button>
    </li>
    <li>
      <button type="button" :class="{active: modelValue === 'average'}" @click="activate('average')">Average
      </button>
    </li>
    <li>
      <button type="button" :class="{active: modelValue === 'great'}" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RatingControl",
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {

    }
  },
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);

    }
  }
}
</script>

<style scoped>

.active {
  border-color: #a00078;
}

button.active  {
  color: #a00078;
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}


</style>