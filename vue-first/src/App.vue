<template>
  <the-header></the-header>
  <badge-list></badge-list>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" v-model="goal">
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
      <ErrorAlert v-if="inputIsInvalid">
        <h2>Input is Invalid!</h2>
        <p>Please enter at least a few characters...</p>
      </ErrorAlert>
    </teleport>
  </div>
</template>

<script>

import TheHeader from "@/components/TheHeader";
import BadgeList from "@/components/BadgeList";
import UserInfo from "@/components/UserInfo";
import ErrorAlert from "@/components/ErrorAlert";

export default {
  components: {ErrorAlert, TheHeader, BadgeList, UserInfo},
  data() {
    return {
      goal: '',
      inputIsInvalid: false,
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  method: {
    setGoal() {
      if (this.goal) {
        this.inputIsInvalid = true;
      }

    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>