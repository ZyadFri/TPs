<template>
    <div v-if="currentRecipe" class="recipe-details">
      <h2>{{ currentRecipe.nom }}</h2>
      <img :src="currentRecipe.image" alt="Recipe Image" class="recipe-image">
      <p>{{ currentRecipe.description }}</p>
      <ul class="ingredients-list">
        <li v-for="ingredient in currentRecipe.ingredients" :key="ingredient.nom">
          {{ ingredient.nom }} - {{ ingredient.quantité }} {{ ingredient.unité }}
        </li>
      </ul>
      <h3>Instructions</h3>
      <ol class="instructions-list">
        <li v-for="instruction in currentRecipe.instructions" :key="instruction">
          {{ instruction }}
        </li>
      </ol>
      <div class="recipe-meta">
        <p><strong>Temps de Préparation:</strong> {{ currentRecipe.tempsPreparation }}</p>
        <p><strong>Temps de Cuisson:</strong> {{ currentRecipe.tempsCuisson }}</p>
        <p><strong>Niveau de Difficulté:</strong> {{ currentRecipe.niveauDifficulte }}</p>
        <p><strong>Auteur:</strong> {{ currentRecipe.auteur }}</p>
        <p><strong>Type de Régime:</strong> {{ currentRecipe.typeDeRegime.join(', ') }}</p>
        <p><strong>Catégorie:</strong> {{ currentRecipe.categorie.join(', ') }}</p>
        <p><strong>Popularité:</strong> {{ currentRecipe.popularite }}</p>
      </div>
    </div>
    <div v-else class="not-found">
      <p>Recipe not found</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VoirDetails',
    props: ['recipe'],
    data() {
      return {
        currentRecipe: null
      };
    },
    async created() {
      const recipeId = this.$route.params.id;
      this.currentRecipe = await fetchRecipeById(recipeId);
    }
  };
  
  // Mock function to simulate fetching recipe details
  const fetchRecipeById = async (id) => {
    const recipes = [
      { id: '1', nom: 'Recipe 1', image: 'path_to_image', description: 'Description of Recipe 1', ingredients: [{ nom: 'Ingredient 1', quantité: 1, unité: 'unit' }], instructions: ['Step 1', 'Step 2'], tempsPreparation: '10 minutes', tempsCuisson: '20 minutes', niveauDifficulte: 'Facile', auteur: 'John Doe', typeDeRegime: ['Vegetarian'], categorie: ['Dinner'], popularite: 5 },
      // Add more recipes as needed
    ];
    return recipes.find(recipe => recipe.id === id);
  };
  </script>
  
  <style scoped>
  .recipe-details {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: left;
    font-family: 'Arial', sans-serif;
    color: #333;
  }
  
  .recipe-details h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #34495e;
  }
  
  .recipe-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  
  .ingredients-list, .instructions-list {
    margin-bottom: 20px;
    padding-left: 20px;
  }
  
  .ingredients-list li, .instructions-list li {
    margin-bottom: 10px;
  }
  
  .recipe-meta p {
    margin-bottom: 10px;
  }
  
  .recipe-meta strong {
    color: #1abc9c;
  }
  
  .not-found {
    text-align: center;
    margin-top: 50px;
    font-size: 1.5rem;
    color: #e74c3c;
  }
  </style>
  