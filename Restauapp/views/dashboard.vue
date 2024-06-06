<template>
    <div class="dashboard-container">
      <h1>Dashboard</h1>
      <ListThread v-if="threads.length > 0" :threads="threads" />
      <div v-else>Loading...</div>
    </div>
  </template>
  
  <script>
  import ListThread from '@/components/ListThread.vue';
  import getposts from '@/firebase/getPosts.js'; 
  
  export default {
    name:'CreatApp',
    components: {
      ListThread,
    },
    data() {
      return {
        threads: []
      };
    },
    async created() {
      try {
        const {load, posts} = getposts();
        await load();
        this.threads = posts.value;
        console.log('Threads:', this.threads)
      } catch (error) {
        console.error('Error fetching threads:', error);
      }
    }
  };
  </script>
  <style scoped>
  .dashboard-container {
    display: flex;
    flex-direction: row; /* Changed to align items horizontally */
    justify-content: space-around; /* Distribute items evenly */
    padding: 20px; /* Adjusted padding for spacing */
    background-color: #004080; /* Changed background color to a dark blue */
    border-radius: 25px; /* Increased border radius for a more rounded look */
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2); /* Added a stronger box shadow for depth */
    margin: 40px; /* Increased margin for better spacing */
    width: auto; /* Allow flexible width */
  }
  
  .dashboard-container > * {
    width: 40%; /* Adjusted width for inner elements */
    max-width: 800px; /* Increased max-width for inner elements */
    margin: 20px; /* Added margin for inner elements */
  }
  
  h1 {
    font-size: 28px; /* Decreased font size for a balanced look */
    color: #ffcc00; /* Changed title color to a bright yellow */
    margin-bottom: 20px; /* Adjusted margin bottom for the title */
    font-weight: bold;
    text-align: left; /* Changed text alignment to left */
    text-transform: uppercase; /* Added text transform to uppercase */
    letter-spacing: 2px; /* Added letter spacing for a modern look */
  }
  
  p {
    font-size: 16px; /* Added font size for paragraph */
    color: #ffffff; /* Changed text color to white */
    line-height: 1.6; /* Added line height for better readability */
    text-align: justify; /* Justified text alignment */
  }
  
  button {
    background-color: #ffcc00; /* Changed button background color to bright yellow */
    color: #004080; /* Changed button text color to dark blue */
    border: none;
    padding: 10px 20px; /* Adjusted padding for better look */
    border-radius: 15px; /* Increased border radius for a more rounded look */
    cursor: pointer;
    transition: background-color 0.3s ease; /* Smooth background color transition on hover */
  }
  
  button:hover {
    background-color: #ff9900; /* Changed button background color on hover to orange */
  }
  </style>
  