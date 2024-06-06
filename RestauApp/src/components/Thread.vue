<template>
    <div class="thread" v-if="thread">
      <div v-if="authorName != ''" class="thread-header">
        <h2>{{ thread.title }}</h2>
        <p class="thread-info">Posted by <router-link :to="'/profile/' + thread.author"> {{ authorName }} </router-link> </p>
      </div>
      <div  class="thread-content">
        <p>{{ thread.content }}</p>
      </div>

    </div>
  </template>
  
  <script>
  import { getUserById } from '@/firebase/Authentification/getUser';
  
  export default {
    name: 'ThreadAPP',
    data() {
      return {
        authorName: ''
      };
    },
    async created() {
      if (this.thread && this.thread.author) {
        try {
          const name = await this.getuser(this.thread.author);
          this.authorName = name;
        } catch (error) {
          console.error('Error fetching author name:', error);
        }
      }
    },
    methods: {
      async getuser(id) {
        const user = await getUserById(id);
        return user.displayName;
      }
    },
    props: {
      thread: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  <style scoped>
  .thread {
    margin-bottom: 20px;
    border: 1px solid #007bff; /* Bordure bleue */
    border-radius: 8px; /* Coins plus arrondis */
    padding: 20px;
  }
  
  .thread-header {
    margin-bottom: 10px;
  }
  
  .thread-header h2 {
    margin: 0;
    color: #333; /* Texte plus foncé */
  }
  
  .thread-info {
    font-size: 16px; /* Taille de police augmentée */
    color: #555; /* Couleur de texte plus foncée */
  }
  
  .thread-content {
    margin-bottom: 15px;
  }
  
  .thread-replies h3 {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #555; /* Couleur de texte plus foncée */
  }
  </style>
  