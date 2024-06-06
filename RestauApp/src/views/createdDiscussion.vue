<template>
  <div class="my-create-thread">
    <h1 class="my-create-thread-title">Share Your Ideas</h1>
    <form @submit.prevent="add" class="my-thread-form">
      <div class="form-group">
        <label for="my-title" class="form-label">Thread Title:</label>
        <input type="text" id="my-title" v-model="title" class="form-input">
      </div>
      <div class="form-group">
        <label for="my-content" class="form-label">Thread Content:</label>
        <textarea id="my-content" v-model="content" class="form-textarea"></textarea>
      </div>
      <div class="form-group">
        <label for="my-tags" class="form-label">Tags (separated by space):</label>
        <input type="text" id="my-tags" v-model="tags" class="form-input">
      </div>
      <button type="submit" class="my-submit-button">Join the Discussion</button>
    </form>
  </div>
</template>

<script>
import { addNewThread } from '@/firebase/Firestore/addDisc';
import { getUser } from '@/firebase/Authentification/getUser';

export default {
  name: 'MyCreateThread',
  data() {
    return {
      title: '',
      content: '',
      tags: ''
    };
  },
  methods: {
    add() {
      const uid = getUser().uid;
      const tagsArray = this.tags.trim().split(' ');
      const data = {
        title: this.title,
        content: this.content,
        tags: tagsArray
      };
      addNewThread(uid, data); 
      this.$router.push({ path: '/dashboard' });
    }
  }
};
</script>
<style scoped>
.my-create-thread {
  max-width: 900px; /* Increased max-width for more space */
  margin: 20px auto; /* Added margin for better spacing */
  padding: 30px; /* Adjusted padding for spacing */
  text-align: center;
  background-color: #2c3e50; /* Changed background color to a dark blue */
  border-radius: 20px; /* Increased border radius for a softer look */
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5); /* Added stronger box shadow for depth */
}

.my-create-thread-title {
  font-size: 40px; /* Increased font size for the title */
  margin-bottom: 30px; /* Adjusted margin bottom for the title */
  color: #ecf0f1; /* Changed title color to a light shade */
  font-weight: bold; /* Added bold font weight */
  text-transform: uppercase; /* Made the title uppercase */
}

.my-thread-form {
  background-color: #34495e; /* Changed background color to a darker shade */
  border-radius: 20px; /* Increased border radius for a softer look */
  padding: 40px; /* Adjusted padding for spacing */
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4); /* Added stronger box shadow for depth */
}

.form-group {
  margin-bottom: 25px; /* Adjusted margin bottom for form groups */
}

.form-label {
  font-size: 22px; /* Increased font size for form labels */
  color: #ecf0f1; /* Changed label color to a light shade */
  display: block;
  margin-bottom: 10px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 20px; /* Increased padding for inputs */
  border: 2px solid #1abc9c; /* Changed border color to a vibrant green */
  border-radius: 10px; /* Increased border radius for a softer look */
  font-size: 18px;
  background-color: #ecf0f1; /* Changed background color for inputs */
  color: #2c3e50; /* Changed text color to dark blue */
}

.my-submit-button {
  background-color: #1abc9c; /* Changed background color for the submit button */
  color: #fff;
  border: none;
  padding: 20px 50px; /* Increased padding for the button */
  border-radius: 10px; /* Increased border radius for a softer look */
  cursor: pointer;
  font-size: 22px; /* Increased font size for the button */
  transition: background-color 0.3s ease;
  display: inline-block; /* Ensured the button is inline-block */
  margin-top: 20px; /* Added margin-top for spacing */
}

.my-submit-button:hover {
  background-color: #16a085; /* Darker shade on hover for the submit button */
}
</style>
