const app = Vue.createApp({
  data() {
    return {
      courseGoal: '',
      vueLink: 'https://www.naver.com'
    }
  },
  methods: {
    changeInput(event) {
      this.courseGoal = event.target.value
    }
  },
  computed: {
    vueLinks(){
      return this.vueLink + '/';
    }
  },
  watch: {
    courseGoal(current, prev) {
      console.log(`current: ${current}, prev: ${prev}`);
    }
  }
});
app.mount('#user-goal');

let message = 'Hello';

const longMessage = message + ' World';

console.log(longMessage);

message = 'Hello!!!'

console.log(longMessage);

const data = {
  message: 'Hello!'
}

const handler = {
  set(target, key, value) {
    console.log(target, key, value);
  }
}

const proxy = new Proxy(data, handler);
proxy.message = 'Hello!!!'