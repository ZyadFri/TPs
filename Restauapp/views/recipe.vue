<template>
    <div class="recipes-container">
      <header class="header">
        <div class="logo">
          <img src="path/to/logo.png" alt="App Logo">
        </div>
        <nav class="navbar">
          <router-link to="/home" class="nav-link">Accueil</router-link>
          <router-link to="/Recipeview" class="nav-link">Recettes</router-link>
          <router-link to="/Addtherecipe" class="nav-link">Ajouter une Recette</router-link>
          <router-link to="/login" class="nav-link">Connexion</router-link>
          <router-link to="/register" class="nav-link">Inscription</router-link>
        </nav>
      </header>
      <div class="recipe-list">
        <h2>Toutes les Recettes</h2>
        <div class="filters">
          <input type="text" v-model="searchQuery" placeholder="Rechercher..." class="search-input">
          <select v-model="categoryFilter" class="category-select">
            <option value="">Toutes les catégories</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
        </div>
        <div class="recipes-grid">
          <div class="recipe-card" v-for="recipe in filteredRecipes" :key="recipe.id">
            <img :src="recipe.image" alt="Recipe Image" class="recipe-image">
            <h3>{{ recipe.nom }}</h3>
            <p>{{ recipe.description }}</p>
            <router-link :to="'/voir-details/' + recipe.id" class="details-link">Voir les détails</router-link>
          </div>
        </div>
      </div>
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
  import firebase from "firebase/app";
  import "firebase/firestore";
  
  // Configuration Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBGseEphb5xXGQ-qD0-jUx-kjPKhTcbpQs",
    authDomain: "chatapp-5cc53.firebaseapp.com",
    projectId: "chatapp-5cc53",
    storageBucket: "chatapp-5cc53.appspot.com",
    messagingSenderId: "107191874019",
    appId: "1:107191874019:web:e0ef87063fed3e1c5db0d6"
  };
  
  // Initialisation de Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  // Obtenir une référence à la base de données Firestore
  const db = firebase.firestore();
  
  export default {
    name: 'RecipesAPP',
    data() {
      return {
        recipes: [],
        searchQuery: '',
        categoryFilter: '',
        categories: ['Petit Déjeuner', 'Brunch', 'Déjeuner', 'Dîner', 'Dessert'] // Example recipe categories
      };
    },
    async created() {
      try {
        const snapshot = await db.collection('recipes').get();
        this.recipes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    },
    computed: {
      filteredRecipes() {
        let filtered = this.recipes;
        if (this.searchQuery) {
          filtered = filtered.filter(recipe => 
            recipe.nom.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            recipe.description.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }
        if (this.categoryFilter) {
          filtered = filtered.filter(recipe => recipe.categorie.includes(this.categoryFilter));
        }
        return filtered;
      }
    }
  };
  </script>
  
  <style scoped>
  .recipes-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #34495e;
    color: #ecf0f1;
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
  
  .recipe-list {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    flex: 1;
  }
  
  .recipe-list h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #34495e;
    font-size: 2rem;
  }
  
  .filters {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .search-input, .category-select {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .recipes-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .recipe-card {
    background: #ecf0f1;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    width: calc(33.33% - 20px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .recipe-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .recipe-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  
  .recipe-card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #34495e;
  }
  
  .recipe-card p {
    font-size: 1rem;
    color: #666;
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
  