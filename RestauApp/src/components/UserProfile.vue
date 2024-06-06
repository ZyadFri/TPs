<template>
  <div class="navbar-container">
    <nav class="navbar">
      <div class="logo">
        <img src="path_to_logo" alt="App Logo">
      </div>
      <div class="buttons-container">
        <router-link to="/home" class="button">Accueil</router-link>
        <router-link to="/recipes" class="button">Recettes</router-link>
        <router-link to="/add-recipe" class="button" v-if="isAdmin">Ajouter une Recette</router-link>
        <router-link to="/login" class="button" v-if="!isAuthenticated">Connexion</router-link>
        <router-link to="/signup" class="button" v-if="!isAuthenticated">Inscription</router-link>
      </div>
      <div class="usermenu" v-if="isAuthenticated">
        <router-link :to="'/profile/' + user.uid" class="username">
          <img :src="user.photoURL || defaultPhotoURL" class="userphoto">
        </router-link>
        <button class="button" @click="signOut">Déconnexion</button>
      </div>
    </nav>
    <div class="banner">
      <img src="path_to_banner_image" alt="Banner">
      <h1>Bienvenue sur notre application de recettes!</h1>
    </div>
    <section class="intro">
      <p>Découvrez et partagez des recettes adaptées à votre régime alimentaire.</p>
    </section>
    <section class="popular-recipes">
      <h2>Recettes populaires</h2>
      <div class="recipes-list">
        <div v-for="recipe in popularRecipes" :key="recipe.id" class="recipe-card">
          <img :src="recipe.image" alt="Recipe Image">
          <h3>{{ recipe.nom }}</h3>
          <p>{{ recipe.description }}</p>
          <router-link :to="'/recipes/' + recipe.id">Voir la recette</router-link>
        </div>
      </div>
    </section>
    <footer>
      <div class="footer-links">
        <router-link to="/contact">Contact</router-link>
        <router-link to="/legal">Mentions légales</router-link>
        <router-link to="/social">Réseaux sociaux</router-link>
      </div>
    </footer>
  </div>
</template>

<script>
import signOut from '@/firebase/Authentification/SignOut';
export default {
  name: 'HomeApp',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      defaultPhotoURL: "https://th.bing.com/th/id/OIP.DQdhyRifE5tywz-uIlBKUAHaHa?rs=1&pid=ImgDetMain",
      popularRecipes: [] // This should be populated with actual data
    }
  },
  computed: {
    isAuthenticated() {
      return !!this.user;
    },
    isAdmin() {
      return this.user && this.user.isAdmin; // Assuming user object contains isAdmin property
    }
  },
  methods: {
    signOut() {
      signOut();
      this.$router.push('/login');
    }
  },
  created() {
    // Fetch popular recipes data
    this.fetchPopularRecipes();
  },
    async fetchPopularRecipes() {
      try {
        const recipesSnapshot = await this.$firestore.collection('recipes').orderBy('popularity', 'desc').limit(5).get();
        this.popularRecipes = recipesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error("Error fetching popular recipes: ", error);
      }
    }
  }

</script>

<style scoped>
.navbar-container {
  text-align: center;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
  height: 70px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.buttons-container,
.usermenu {
  display: flex;
  align-items: center;
}

.usermenu {
  margin-left: auto;
}

.userphoto {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 15px;
  border: 2px solid #ecf0f1;
}

.username {
  text-decoration: none;
  color: #ecf0f1;
  font-weight: bold;
  font-size: 18px;
}

.button {
  padding: 10px 25px;
  font-size: 16px;
  border: 1px solid #ecf0f1;
  background-color: #34495e;
  color: #ecf0f1;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  text-decoration: none;
  margin-left: 15px;
  border-radius: 5px;
}

button.button:hover {
  background-color: #ecf0f1;
  color: #34495e;
}

button.button:focus {
  outline: none;
}

.banner {
  text-align: center;
  margin: 20px 0;
}

.banner img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}

.intro {
  text-align: center;
  margin: 20px 0;
}

.popular-recipes {
  margin: 20px 0;
}

.recipe-card {
  border: 1px solid #ecf0f1;
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.footer-links a {
  margin: 0 10px;
  color: #ecf0f1;
  text-decoration: none;
}
</style>
