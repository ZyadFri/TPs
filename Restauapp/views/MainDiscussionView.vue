<template>
  <div class="dashboard-container">
    <h1>Welcome to the world of information</h1>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search discussions...">
      <button @click="search">Search</button>
    </div>
    <div class="threads">
      <ListThread v-if="filteredThreads.length > 0" :threads="filteredThreads" />
      <div v-else>Loading...</div>
    </div>
  </div>
</template>

<script>
import ListThread from '@/components/DiscussionList.vue';
import getposts from '@/firebase/getPosts.js'; 

export default {
  name: 'DashboardView',
  components: {
    ListThread,
  },
  data() {
    return {
      threads: [],
      searchQuery: ''
    };
  },
  async created() {
    try {
      const { load, posts } = getposts();
      await load();
      this.threads = posts.value;
      console.log('Threads:', this.threads)
    } catch (error) {
      console.error('Error fetching threads:', error);
    }
  },
  computed: {
    filteredThreads() {
      if (!this.searchQuery) {
        return this.threads;
      } else {
        const query = this.searchQuery.toLowerCase();
        return this.threads.filter(thread => 
          thread.title.toLowerCase().includes(query) || 
          thread.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }
    }
  },
  methods: {
    search() {
      // This method is called when the search button is clicked
      // The computed property `filteredThreads` automatically updates based on the `searchQuery`
    }
  }
};
</script>
<style scoped>
.dashboard-container {
  background-color: #ffebcd; /* Blanched almond background */
  border-radius: 20px; /* Softer, more rounded look */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); /* Increased shadow for depth */
  margin: 30px;
  padding: 30px;
}

.threads {
  display: flex;
  flex-direction: column; /* Vertical layout */
  gap: 25px; /* Increased space between items */
}

.dashboard-container > h1 {
  font-size: 36px; /* Larger font size */
  color: #8b0000; /* Dark red color */
  margin-bottom: 30px;
  font-weight: bold;
  text-align: left; /* Left-aligned text */
}

/* Adjusting for vertical threads */
@media (min-width: 768px) {
  .threads {
    flex-direction: row; /* Horizontal layout for wider screens */
    flex-wrap: wrap; /* Wrap items to the next line */
  }
}

.search-bar {
  margin-bottom: 30px; /* Increased margin bottom for spacing */
  text-align: center;
}

.search-bar input {
  padding: 12px;
  width: 70%; /* Wider input field */
  border-radius: 10px; /* More rounded input field */
  border: 2px solid #8b0000; /* Dark red border */
}

.search-bar button {
  padding: 12px 25px; /* Increased padding for a larger button */
  border: none;
  border-radius: 10px; /* More rounded button */
  background-color: #8b0000; /* Dark red background */
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth transition on hover */
}

.search-bar button:hover {
  background-color: #a52a2a; /* Brown color on hover */
}
</style>
