<template>
    <div v-if="reply && authorName != ''" class="thread-reply">
      <p>{{ reply.message }}</p>
      <p class="reply-info">Reply by <router-link :to="'/profile/' + reply.author"> {{ authorName }} </router-link> </p>
    </div>
  </template>
  
  <script>
  import { getUserById } from '@/firebase/Authentification/getUser';
  
  export default {
    name: 'ThreadReply',
    props: {
      reply: {
        type: Object,
        required: true
      }
    },
    data() {
        return {
          authorName: ''
        };
      },
      async created() {
        if (this.reply && this.reply.author) {
          try {
            const name = await this.getuser(this.reply.author);
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
  };
  </script>
  <style scoped>
  .thread-reply {
    border-left: 3px solid #009688; /* Bordure verte */
    padding-left: 15px; /* Espacement du texte par rapport à la bordure */
    margin-bottom: 20px; /* Espacement entre les réponses */
  }
  
  .reply-info {
    font-size: 14px; /* Taille de police légèrement augmentée */
    color: #555; /* Couleur de texte plus foncée */
  }
  </style>
  