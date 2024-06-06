<template>
  <div class="home-container">
    <header class="header">
      <div class="logo">
        <img src="../assets/OIP.jpeg" alt="App Logo">
      </div>
      <nav class="navbar">
        <router-link to="/home" class="nav-link">Accueil</router-link>
        <router-link to="/Recipeview" class="nav-link">Recettes</router-link>
        <router-link to="/Addtherecipe" class="nav-link">Ajouter une Recette</router-link>
        <router-link to="/FilterRegime" class="nav-link">Filter Recipes By Regime</router-link>
      </nav>
    </header>
    <div class="banner">
      <h1>Découvrez et partagez vos recettes préférées</h1>
    </div>
    <section class="presentation">
      <p>Bienvenue sur notre application de partage de recettes ! Découvrez des recettes délicieuses et partagez les vôtres avec la communauté.</p>
    </section>
    <section class="popular-recipes">
    
      <div class="recipe-list">
        <div class="recipe-card" v-for="recipe in popularRecipes" :key="recipe.id">
          <h3>{{ recipe.title }}</h3>
          <p>{{ recipe.description }}</p>
          <router-link :to="'/recipe/' + recipe.id" class="details-link">Voir les détails</router-link>
        </div>
      </div>
    </section>
    <footer class="footer">
      <router-link to="/contact" class="footer-link">Contact</router-link>
      <router-link to="/legal" class="footer-link">Mentions Légales</router-link>
      <div class="social-links">
        <a href="https://facebook.com" target="_blank" class="social-link">Facebook</a>
        <a href="https://twitter.com" target="_blank" class="social-link">Twitter</a>
        <a href="https://instagram.com" target="_blank" class="social-link">Instagram</a>
      </div>
    </footer>
  </div>
</template>

<script>
//import { getPopularRecipes } from '@/firebase/recipes';

export default {
  name: 'HomeApp',
  data() {
    return {
      popularRecipes: []
    }
  },
  async created() {
    //this.popularRecipes = await getPopularRecipes();
  }
}
</script>

<style scoped>
.home-container {
  text-align: center;
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  color: #333;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #34495e;
  color: #ecf0f1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.logo img {
  height: 50px;
}

.navbar {
  display: flex;
}

.nav-link {
  margin: 0 10px;
  color: #ecf0f1;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}

.nav-link:hover {
  color: #1abc9c;
}

.banner {
  background-color: #34495e;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.banner h1 {
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
}

.presentation {
  padding: 20px;
  margin-bottom: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.presentation p {
  font-size: 1.2rem;
  color: #666;
}

.popular-recipes {
  padding: 20px;
  margin-bottom: 2rem;
}

.popular-recipes h2 {
  font-size: 2rem;
  color: #34495e;
  margin-bottom: 1rem;
}

.recipe-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.recipe-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 15px;
  width: 250px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.recipe-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.recipe-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #1abc9c;
}

.recipe-card p {
  font-size: 1rem;
  color: #777;
  margin-bottom: 10px;
}

.details-link {
  text-decoration: none;
  color: #1abc9c;
  font-weight: bold;
}

.details-link:hover {
  text-decoration: underline;
}

.footer {
  padding: 20px;
  background-color: #34495e;
  color: #ecf0f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-link {
  color: #ecf0f1;
  text-decoration: none;
  margin: 0 10px;
}

.footer-link:hover {
  color: #1abc9c;
}

.social-links {
  display: flex;
}

.social-link {
  color: #ecf0f1;
  margin: 0 10px;
  text-decoration: none;
}

.social-link:hover {
  color: #1abc9c;
}
</style>
