<template>
  <div>
    <Friend
        :friend="friend"
        :name="friend.name"
        :phone-number="friend.phoneNumber"
        email-address="freeefly1@host.com"
        is-favorite="0"
        @toggle-favorite="toggleFavoriteStatus"
    />
    <Friend name="freeefly2" phone-number="01213 12312" email-address="freeefly2@host.com"/>
  </div>
</template>

<script>
import Friend from "@/Friend";

export default {
  name: "App",
  components: {Friend},
  data() {
    return {
      friend: {
        name: 'freeefly',
        phoneNumber: '01012341234'
      }
    }
  },
  provide() {
    return {
      friend: this.friend
    }
  },

  method: {
    toggleFavoriteStatus(friendId) {
      const foundFriend = this.friends.find(friend => friend.id === friendId);
      foundFriend.isFavorite = !foundFriend.isFavorite;

    }
  }
}
</script>

<style scoped>


</style>