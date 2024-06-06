<template>
    <div class="create-thread">
      <h1 class="create-thread-title">Create Thread</h1>
      <form @submit.prevent="add" class="thread-form">
        <div class="form-group">
          <label for="title" class="form-label">Title:</label>
          <input type="text" id="title" v-model="title" class="form-input">
        </div>
        <div class="form-group">
          <label for="content" class="form-label">Content:</label>
          <textarea id="content" v-model="content" class="form-textarea"></textarea>
        </div>
        <div class="form-group">
          <label for="tags" class="form-label">Tags (separated by space):</label>
          <input type="text" id="tags" v-model="tags" class="form-input">
        </div>
        <button type="submit" class="submit-button">Create Thread</button>
      </form>
    </div>
  </template>
  
  <script>
  import { addNewThread} from '@/firebase/Firestore/addThread';
  import { getUser } from '@/firebase/Authentification/getUser';
  
  export default {
    name: 'CreateThread',
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
  .create-thread {
    max-width: 1000px; /* Increased max-width for more space */
    margin: 20px auto; /* Added margin for better spacing */
    padding: 30px; /* Adjusted padding for spacing */
    background-color: #1a1a2e; /* Changed background color to dark blue */
    border-radius: 20px; /* Increased border radius for a softer look */
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.3); /* Added stronger box shadow for depth */
  }
  
  .create-thread-title {
    font-size: 40px; /* Increased font size for the title */
    color: #e94560; /* Changed title color to bright red */
    margin-bottom: 30px; /* Adjusted margin bottom for the title */
    text-align: center; /* Centered the title */
    font-weight: bold; /* Added bold font weight */
    text-transform: uppercase; /* Made the title uppercase */
  }
  
  .thread-form {
    background-color: #16213e; /* Changed background color to a darker shade */
    border-radius: 20px; /* Increased border radius for a softer look */
    padding: 40px; /* Adjusted padding for spacing */
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2); /* Added stronger box shadow for depth */
  }
  
  .form-group {
    margin-bottom: 20px; /* Adjusted margin bottom for form groups */
  }
  
  .form-label {
    font-size: 22px; /* Increased font size for form labels */
    color: #e94560; /* Changed label color to bright red */
    display: block;
    margin-bottom: 10px;
  }
  
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 20px; /* Increased padding for inputs */
    border: 2px solid #e94560; /* Changed border color to bright red */
    border-radius: 10px; /* Increased border radius for a softer look */
    font-size: 18px;
    background-color: #0f3460; /* Changed background color for inputs */
    color: #fff; /* Changed text color to white */
  }
  
  .submit-button {
    background-color: #e94560; /* Changed background color for the submit button */
    color: #fff;
    border: none;
    padding: 20px 50px; /* Increased padding for the button */
    border-radius: 10px; /* Increased border radius for a softer look */
    cursor: pointer;
    font-size: 22px; /* Increased font size for the button */
    transition: background-color 0.3s ease;
    display: block;
    margin: 20px auto; /* Centered the submit button */
  }
  
  .submit-button:hover {
    background-color: #c3425b; /* Darker shade on hover for the submit button */
  }
  </style>
  