<template>
  <div class="griddisplay">
    <div class="left">
      <h1 class="heading">Firestore Data</h1>
      <ul class="blog-list">
        <li v-for="post in posts" :key="post.id" class="blog-item">
          <div class="blog-content">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
            <router-link :to="`/posts/${post.id}`" class="btn-details">View Details</router-link>
            <router-link :to="`/edits/${post.id}`" class="btn-edit">Edit Blog</router-link>
            <button @click="deletePost(post.id)" class="btn-delete">Delete</button> <!-- Delete button -->
            <p class="tag-list"><strong>Tags:</strong></p>
            <ul>
              <li v-for="tag in post.tags" :key="tag" @click="onTagSelected(tag)" class="tag">{{ tag }}</li>
            </ul>
            <p><strong>Created At:</strong> {{ formatDate(post.createdAt) }}</p>
            <p v-if="post.edited.length > 0"><strong>Edited At:</strong> {{ formatDate(post.edited[0]) }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="right">
      <h2 class="heading">Popular Tags</h2>
      <ul class="tag-list">
        <li v-for="tag in tags" :key="tag" @click="onTagSelected(tag)" class="tag">{{ tag }}</li>
      </ul>
    </div>
  </div>
</template>


<script>
import { projectFirestore } from '@/firebase/config.js';

export default {
  name: 'HomePage',
  data() {
    return {
      posts: [],
      tags: [],
      selectedTag: null,
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const snapshot = await projectFirestore.collection('blogs').get();
        this.posts = snapshot.docs.map(doc => ({
          id: doc.id,
          title: doc.data().title,
          body: doc.data().body,
          tags: doc.data().tags,
          createdAt: doc.data().createdAt,
          edited: doc.data().edited || [],
        }));
        this.gatherAllTags();
      } catch (error) {
        console.error('Error fetching Firestore data:', error);
      }
    },
    gatherAllTags() {
      const allTags = this.posts.reduce((tags, post) => {
        post.tags.forEach(tag => {
          if (!tags.includes(tag)) {
            tags.push(tag);
          }
        });
        return tags;
      }, []);
      this.tags = allTags; // Display only top 5 tags
    },
    formatDate(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    },
    onTagSelected(tag) {
      this.selectedTag = tag;
    },
    async deletePost(postId) {
      try {
        await projectFirestore.collection('blogs').doc(postId).delete();
        this.posts = this.posts.filter(post => post.id !== postId);
        console.log('Post deleted successfully!');
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    },
  },
  created() {
    this.fetchPosts();
  },
};
</script>


<style scoped>
.griddisplay {
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 30px;
}

.blog-list {
  list-style-type: none;
  padding: 0;
}

.blog-item {
  margin-bottom: 20px;
}

.blog-content {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
}

.tag-list {
  list-style-type: none;
  padding: 0;
}

.tag-list ul {
  padding-left: 20px;
}

.tag {
  display: block;
  margin-bottom: 5px;
  cursor: pointer;
  background-color: #e2e8f0;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.tag:hover {
  background-color: #cbd5e0;
}

.heading {
  font-size: 24px;
  margin-bottom: 10px;
}

.btn-details,
.btn-edit,
.btn-delete {
  display: inline-block;
  margin-right: 10px;
  padding: 8px 16px;
  border: none;
  background-color: #3490dc;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-details:hover,
.btn-edit:hover,
.btn-delete:hover {
  background-color: #2779bd;
}

.right {
  text-align: center;
}

.btn-delete {
  background-color: #e3342f;
}

.btn-delete:hover {
  background-color: #cc1f1a;
}
</style>