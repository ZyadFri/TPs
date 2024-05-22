<template>
  <header class="bg-blue-500 py-3 px-4">
    <router-link to="/">
      <h1 class="md:text-4xl font-black text-white sm:text-3xl">The Blog</h1>
    </router-link>
    <nav class="nav items-baseline">
      <router-link class="mx-2 font-light" to="/">Home</router-link>
      <router-link class="mx-2 font-light" to="/tagss">Filter Tag</router-link>
      <router-link
        class="font-lighter text-gray-200 hover:text-gray-100"
        to="/create"
      >
        New Post
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
header nav {
  display: flex;
}
header a {
  color: #f3eeee;
  text-decoration: none;
}

header a.router-link-active {
  color: #ffffff;
  font-weight: bold;
  color: #f8f8f8;
  font-size: 1.2rem;
}
</style>
