<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostListComponent :posts="postsWithTag" />
      <TagCloudComponent :posts="posts" />
    </div>
    <div v-else>
      <SpinnerComponent />
    </div>
  </div>
</template>

<script>
import TagCloudComponent from "../components/TagCloud.vue";
import SpinnerComponent from "../components/SpinnerComponent.vue";
import getPosts from "../firebase/getPosts";
import { useRoute } from "vue-router";
import { computed } from "vue";
import PostListComponent from "../components/PostList";

export default {
  name: "TagPage",
  components: { SpinnerComponent, TagCloudComponent, PostListComponent },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();
    const postsWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });

    return { error, posts, postsWithTag };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
