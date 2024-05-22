<template>
    <div class="create-post">
      <h1>Edit Existing Post</h1>
      <form @submit.prevent="submitForm" class="form-container">
        <label for="title" class="form-label">Title:</label>
        <input type="text" id="title" v-model="post.title" required class="form-input">
        
        <label for="body" class="form-label">Content:</label>
        <textarea id="body" v-model="post.body" required class="form-textarea"></textarea>
        
        <label for="tags" class="form-label">Tags:</label>
        <input type="text" id="tags" v-model="post.tags" required class="form-input">
        
        <button type="submit" class="form-button">Edit</button>
      </form>
    </div>
  </template>
  
  <script>
  import getpost from '@/firebase/getPost.js'; 
  import { projectFirestore } from '@/firebase/config.js'
  
  export default {
    data() {
      return {
        post: {
            body:'',
            title:'',
            tags:[]
        }
      };
    },
    methods: {
        async submitForm() {
  const { id, ...post } = this.post;
  
  try {
    this.tags=this.tags.split('');
    const postRef = projectFirestore.collection('blogs').doc(id);
    await postRef.update(post);
    console.log('Post updated successfully!');
    this.$router.push({ name: 'home' }); // Redirect to home page
  } catch (err) {
    console.error('Error updating document:', err);
  }
}
,
      async fetchPost() {
        const id = this.$route.params.id;
        const { post, load } = getpost(id);
        await load();
        this.post = post.value;
        this.post.tags = this.post.tags.join(' '); // Join tags when fetching post
      }
    },
    created() {
      this.fetchPost();
    }
  }
  </script>
  
<style scoped>
.create-post {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 18px;
  margin-bottom: 5px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form-button:hover {
  background-color: #0056b3;
}
  </style>
  