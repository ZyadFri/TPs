import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue"; // Corrected file extension
import CreatePost from "../views/CreatePost.vue";
import EditPost from "../views/EditPost.vue";
import Tag from "../views/Tag.vue";
import tagsfilter from "../views/FilterTags.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/edits/:id",
    name: "EditPost",
    component: EditPost,
    props: true,
  }
  ,{path: "/tagss",
  name: "tagsfilter",
  component: tagsfilter,
  props: true,}
  ,
  {
    path: "/posts/:id",
    name: "Details",
    component: Details,
    props: true,
  },
  {
    path: "/create",
    name: "CreatePost",
    component: CreatePost,
  },
  {
    path: "/tags/:tag",
    name: "Tag",
    component: Tag,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
