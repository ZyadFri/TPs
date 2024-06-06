<template>
    <div>
      <h2>Recettes selon le régime : {{ selectedRegime }}</h2>
      <ul>
        <li v-for="recipe in filteredRecipes" :key="recipe.nom">
          <img :src="recipe.image" alt="Image de la recette"/>
          <h3>{{ recipe.nom }}</h3>
          <p>{{ recipe.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { filterRecipesByRegime } from './data.js';
  
  export default {
    data() {
      return {
        selectedRegime: 'Pescétarien', // Valeur initiale du régime sélectionné
        filteredRecipes: []
      };
    },
    methods: {
      updateFilteredRecipes() {
        this.filteredRecipes = filterRecipesByRegime(this.selectedRegime);
      }
    },
    mounted() {
      this.updateFilteredRecipes();
    },
    watch: {
      selectedRegime() {
        this.updateFilteredRecipes();
      }
    }
  };
  </script>
  