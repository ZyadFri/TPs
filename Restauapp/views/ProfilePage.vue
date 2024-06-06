<template>
    <div class="profile">
      <div class="profile-header">
        <h1>{{ user.fullName }}</h1>
        <p>{{ user.email }}</p>
      </div>
      <div class="profile-body">
        <img class="profile-picture" :src="user.photoURL" alt="Profile Picture" />
        <!-- Display other user information as needed -->
      </div>
    </div>
  </template>
  
  <script>
  import { db } from './firebase/Config'; // Import your Firebase configuration
  
  export default {
    data() {
      return {
        user: {},
      };
    },
    async mounted() {
      // Fetch user data from Firestore based on user ID
      const userId = 'userID_1'; // Replace with actual user ID
      const doc = await db.collection('users').doc(userId).get();
      this.user = doc.data();
    },
  };
  </script>
  
  <style scoped>
  .profile {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .profile-header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .profile-body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }
  </style>
  