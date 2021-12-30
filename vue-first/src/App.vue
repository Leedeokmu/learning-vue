<template>
  <section class="container">
    <UserData :firstName="user.firstName"  :lastName="user.lastName" ></UserData>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="first name" v-model="user.firstName">
      <input type="text" placeholder="last name" v-model="user.lastName">
      <input type="text" placeholder="last name" ref="lastNameInput">
    </div>
  </section>
</template>

<script>
import {computed, reactive, ref, provide } from "vue";
import UserData from "@/components/UserData";

export default {
  components: {UserData},
  setup() {
    const lastNameInput = ref(null);
    const user = reactive({
      name: 'freeefly',
      age: 21,
      firstName: '',
      lastName: ''
    });
    const userAge = ref(21);
    provide('userAge', userAge);

    // watch([user], (newValues, oldValues) => {
    //   console.log('Old user: ', oldValues[0]);
    //   console.log('New user: ', newValues[0]);
    //   console.log('New animal: ', newValues[1]);
    //   console.log('New animal: ', newValues[1]);
    // })
    const uName = computed(() => {
      return user.firstName + ' ' + user.lastName
    });

    const setNewData = () => {
      // user.age = 32;
      userAge.value = 32;
    }

    setTimeout(() => {
      // userName.value = 'freefly';
      user.name = 'freefly'
    }, 1000);

    return {
      user: user,
      setAge: setNewData,
      name: uName,
      lastNameInput
    };
  }

  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>