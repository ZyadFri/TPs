<template>
    <div class="paddd">
      <div v-if="user" class="profile-container">
        <div class="profile-header">
          <h1>Profile</h1>
          <p>Name: <span class="profile-detail">{{ user.displayName }}</span></p>
          <p>Email: <span class="profile-detail">{{ user.email }}</span></p>
          <p>Creation Time: <span class="profile-detail">{{ user.createdAt }}</span></p>
        </div>
        
        <div class="threads-section">
          <h1>Threads:</h1>
          <ListThread v-if="threads.length > 0" :threads="threads" />
          <div v-else>Loading...</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ListThread from '@/components/ListThread.vue';
  import { getUserById } from '@/firebase/Authentification/getUser';
  import { getThreadsByIds } from '@/firebase/Firestore/getthread.js';
  
  export default {
    name: 'ProfileAPP',
    components: { ListThread },
    data() {
      return {
        user: null,
        threads: [],
      };
    },
    methods: {},
    async created() {
      try {
        const userId = this.$route.params.id;
        this.user = await getUserById(userId);
        if (this.user) {
          this.user.createdAt = this.user.createdAt.toDate();
  
          const { posts, load } = await getThreadsByIds(this.user.threads);
          await load();
          this.threads = posts.value;
        } else {
          console.error('User not found.');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
  };
  </script>
  <style scoped>
  .paddd {
    padding: 50px; /* Significantly increased padding for more spacious layout */
  }
  
  .profile-container {
    margin-top: 50px;
    background-color: #ffe4e1; /* Light pink background */
    border: 3px solid #8b0000; /* Dark red border */
    border-radius: 20px; /* Softer, more rounded look */
    padding: 40px; /* Increased padding for better spacing */
    max-width: 900px;
    margin: 0 auto;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2); /* Increased shadow for depth */
  }
  
  .profile-header {
    background: linear-gradient(to right, #ff7f50, #ff6347); /* Coral gradient */
    padding: 40px; /* Increased padding for better spacing */
    border-radius: 20px; /* Softer, more rounded look */
    margin-bottom: 40px; /* Increased margin bottom for spacing */
    text-align: center; /* Center aligned text */
    color: #fff8dc; /* Light goldenrod color */
  }
  
  .profile-header h1 {
    color: #ff4500; /* Orange red color */
    margin-bottom: 30px; /* Increased margin bottom for spacing */
  }
  
  .profile-detail {
    font-weight: bold;
    color: #ffefd5; /* Papaya whip color */
  }
  
  .threads-section {
    background-color: #fafad2; /* Light goldenrod yellow background */
    padding: 40px; /* Increased padding for better spacing */
    border-radius: 20px; /* Softer, more rounded look */
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2); /* Increased shadow for depth */
  }
  
  .threads-section h1 {
    color: #daa520; /* Goldenrod color */
    margin-bottom: 30px; /* Increased margin bottom for spacing */
    text-align: left; /* Left aligned text */
  }
  
  p {
    margin: 20px 0; /* Increased margin for better spacing */
    font-size: 20px; /* Increased font size for better readability */
    color: #4b0082; /* Indigo color */
  }
  
  h1 {
    font-size: 32px; /* Increased font size for better readability */
    margin-bottom: 30px; /* Increased margin bottom for spacing */
  }
</style>
