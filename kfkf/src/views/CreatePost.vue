<template>
  <div class="create p-4">
    <h1 class="font-black text-center">Create A New Post</h1>
    <form @submit.prevent="submitForm">
      <label>Title:</label>
      <input
        v-model="post.title"
        type="text"
        class="focus:outline-none focus:ring focus:border-blue-300"
        required
      />
      <label>Content:</label>
      <textarea
        v-model="post.body"
        required
        class="focus:outline-none focus:ring focus:border-blue-300"
      ></textarea>
      <label>Tags (hit enter to add a tag):</label>
      <input
        @keydown.enter.prevent="handleKeydown"
        v-model="tag"
        type="text"
        class="focus:outline-none focus:ring focus:border-blue-300"
      />

      <div v-for="tag in post.tags" :key="tag" class="pill">#{{ tag }}</div> <!-- Display added tags -->
      <button type="submit" class="bg-blue-500 text-white py-2 px-3 rounded-md block my-3">
        Add Post
      </button>
    </form>
  </div>
</template>
<script>
import { projectFirestore } from '@/firebase/config.js';

export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
        tags: [] // Initialize tags array
      },
      tag: ''
    };
  },
  methods: {
    submitForm() {
      // Add trim method to remove extra spaces
      this.post.tags = this.post.tags.map(tag => tag.trim());
      projectFirestore.collection('blogs').add(this.post); // Save the post to Firestore
      this.clearForm(); // Clear form inputs after submission
      this.$router.push({ name: 'Home' }); // Navigate back to home page
    },
    handleKeydown(event) {
  if (event.key === 'Enter' && this.tag.trim() !== '') {
    this.post.tags.push(this.tag.trim()); // Add tag to post tags array
    console.log('Tags:', this.post.tags); // Log the tags array
    this.tag = ''; // Clear the tag input after adding
  }
}
,
    clearForm() {
      this.post.title = ''; // Clear title
      this.post.body = ''; // Clear body
      this.post.tags = []; // Clear tags array
      this.tag = ''; // Clear tag input
    }
  }
};
</script>

<style scoped>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 5px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: #0f0f0f;
  margin-bottom: 5px;
}

.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
