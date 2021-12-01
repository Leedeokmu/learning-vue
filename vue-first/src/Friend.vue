<template>
  <div>{{name}}</div>
  <div>{{phoneNumber}}</div>
  <div>{{emailAddress}}</div>
</template>

<script>
export default {
  name: "Friend",
  // props: ['name', 'pho neNumber', 'emailAddress', 'isFavorite']
  props: {
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: String,
      required: false,
      default: '0',
      validator: function (value) {
        return value === '1' || value === '0'
      }
    },
  },
  // emits: ['toggle-favorite'],
  emits: {
    'toggle-favorite': function (id){
      if(id){
        return true;
      } else{
        console.warn('Id is missing');
        return false;
      }
    }
  },
  inject: ['selectTopic'],
  methods: {
    toggleFavorite(param){
      this.$emit('toggle-favorite', param.id);
    }
  }
}
</script>

<style scoped>

</style>