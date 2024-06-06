<template>
    <div class="discussion">
      <Thread :thread="mainThread" />
  
      <div  v-if="replies && replies.length > 0" class="replies">
        <h3>Replies</h3>
        <ThreadReply  v-for="reply in replies" :key="reply.id" :reply="reply" />
      </div>
  
      <div v-if="canReply" class="reply-form">
        <h3>Add a Reply</h3>
        <textarea v-model="newReplyContent" placeholder="Type your reply here..." class="reply-input"></textarea>
        <button @click="addReply" class="reply-button">Reply</button>
      </div>
  
    </div>
  </template>
  
  <script>
  import Thread from '@/components/Thread.vue'; 
  import ThreadReply from '@/components/ThreadReply.vue'; 
  import { getUserById, getUser } from '@/firebase/Authentification/getUser';
  import { getthread } from '@/firebase/Firestore/getthread.js';
  import { appendAnswerToThread } from '@/firebase/Firestore/addThread.js';
  
  export default {
    name: 'DiscussionAPP',
    components: {
      Thread,
      ThreadReply
    },
    data() {
      return {
        mainThread: null,
        replies: null,
        canReply: true, 
        newReplyContent: '' 
      };
    },
    async created() {
      const { post, load } = getthread(this.$route.params.id);
      await load();
      this.mainThread = post.value;
      this.replies = post.value.answers || []; 
    },
    methods: {
      async addReply() {
        if (this.newReplyContent.trim() !== '') {
          const newReply = {
            content: this.newReplyContent,
            author: getUser().uid, 
          };
          await appendAnswerToThread(this.$route.params.id, newReply.author, newReply.content);
          window.location.reload(); 
        }
      },
      async getuser(id) {
          const user = await getUserById(id);
          return user.displayName;
      }
    }
  };
  </script>
  
  <style scoped>
  .discussion {
    background-color: #ffe4e1; /* Light pink background */
    border: 2px solid #ff69b4; /* Hot pink border */
    border-radius: 20px; /* More rounded corners */
    padding: 30px; /* Increased padding */
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); /* Added box shadow for depth */
  }
  
  .replies {
    margin-top: 30px; /* Increased margin-top */
  }
  
  .replies h3 {
    font-size: 20px; /* Larger font size */
    margin-bottom: 15px; /* Increased margin-bottom */
    color: #8b0000; /* Dark red color */
    text-shadow: 1px 1px #ffdab9; /* Added text shadow for depth */
  }
  
  .reply-form {
    margin-top: 30px; /* Increased margin-top */
  }
  
  .reply-form h3 {
    font-size: 20px; /* Larger font size */
    margin-bottom: 15px; /* Increased margin-bottom */
    color: #8b0000; /* Dark red color */
    text-shadow: 1px 1px #ffdab9; /* Added text shadow for depth */
  }
  
  .reply-input {
    width: 100%;
    padding: 20px; /* Increased padding */
    border: 2px solid #69ffdf; /* Hot pink border */
    border-radius: 20px; /* More rounded corners */
    font-size: 20px; /* Larger font size */
    margin-bottom: 15px; /* Increased margin-bottom */
    background-color: #fffafa; /* Snow background color */
  }
  
  .reply-button {
    background-color: #14e7ff; /* Deep pink background */
    color: #fff; /* White text */
    border: none;
    padding: 15px 30px; /* Adjusted padding */
    border-radius: 20px; /* More rounded corners */
    cursor: pointer;
    font-size: 20px; /* Larger font size */
    transition: background-color 0.3s ease;
  }
  
  .reply-button:hover {
    background-color: #69d2ff; /* Hot pink on hover */
  }
  </style>
  


  
  
  