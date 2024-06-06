<template>
    <div class="add-recipe-container">
      <h1>Ajouter une recette</h1>
      <form @submit.prevent="addRecipe">
        <div class="form-group">
          <label for="nom">Nom de la recette:</label>
          <input type="text" v-model="recipe.nom" required />
        </div>
  
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea v-model="recipe.description" required></textarea>
        </div>
  
        <div class="form-group">
          <label for="ingredients">Ingrédients:</label>
          <div v-for="(ingredient, index) in recipe.ingredients" :key="index" class="ingredient-group">
            <input type="text" v-model="ingredient.nom" placeholder="Nom de l'ingrédient" required />
            <input type="number" v-model="ingredient.quantité" placeholder="Quantité" required />
            <input type="text" v-model="ingredient.unité" placeholder="Unité" />
            <button type="button" @click="removeIngredient(index)">Supprimer</button>
          </div>
          <button type="button" @click="addIngredient">Ajouter un ingrédient</button>
        </div>
  
        <div class="form-group">
          <label for="instructions">Instructions:</label>
          <div v-for="(instruction, index) in recipe.instructions" :key="index" class="instruction-group">
            <textarea v-model="recipe.instructions[index]" placeholder="Étape" required></textarea>
            <button type="button" @click="removeInstruction(index)">Supprimer</button>
          </div>
          <button type="button" @click="addInstruction">Ajouter une étape</button>
        </div>
  
        <div class="form-group">
          <label for="tempsPreparation">Temps de préparation:</label>
          <input type="text" v-model="recipe.tempsPreparation" required />
        </div>
  
        <div class="form-group">
          <label for="tempsCuisson">Temps de cuisson:</label>
          <input type="text" v-model="recipe.tempsCuisson" required />
        </div>
  
        <div class="form-group">
          <label for="niveauDifficulte">Niveau de difficulté:</label>
          <select v-model="recipe.niveauDifficulte" required>
            <option>Facile</option>
            <option>Moyen</option>
            <option>Difficile</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="typeDeRegime">Type de régime:</label>
          <input type="text" v-model="recipe.typeDeRegime" required />
        </div>
  
        <div class="form-group">
          <label for="categorie">Catégorie:</label>
          <input type="text" v-model="recipe.categorie" required />
        </div>
  
        <div class="form-group">
          <label for="auteur">Auteur:</label>
          <input type="text" v-model="recipe.auteur" required />
        </div>
  
        <div class="form-group">
          <label for="image">URL de l'image:</label>
          <input type="text" v-model="recipe.image" required />
        </div>
  
        <button type="submit" class="submit-button">Ajouter la recette</button>
      </form>
    </div>
  </template>
  
  <script>
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  
  export default {
    name: 'AddRecipe',
    data() {
      return {
        recipe: {
          nom: '',
          description: '',
          ingredients: [{ nom: '', quantité: '', unité: '' }],
          instructions: [''],
          tempsPreparation: '',
          tempsCuisson: '',
          niveauDifficulte: 'Facile',
          typeDeRegime: '',
          categorie: '',
          auteur: '',
          image: '',
          popularite: 0,
          dateAjout: ''
        }
      };
    },
    methods: {
      addIngredient() {
        this.recipe.ingredients.push({ nom: '', quantité: '', unité: '' });
      },
      removeIngredient(index) {
        this.recipe.ingredients.splice(index, 1);
      },
      addInstruction() {
        this.recipe.instructions.push('');
      },
      removeInstruction(index) {
        this.recipe.instructions.splice(index, 1);
      },
      async addRecipe() {
        try {
          this.recipe.dateAjout = firebase.firestore.FieldValue.serverTimestamp();
          await firebase.firestore().collection('recipes').add(this.recipe);
          alert('Recette ajoutée avec succès !');
          this.$router.push('/home');
        } catch (error) {
          console.error('Erreur lors de l\'ajout de la recette :', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .add-recipe-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
  }
  
  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .ingredient-group,
  .instruction-group {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .ingredient-group input,
  .instruction-group textarea {
    flex: 1;
    margin-right: 0.5rem;
  }
  
  .ingredient-group button,
  .instruction-group button {
    padding: 0.3rem 0.6rem;
    background-color: #ff6b6b;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .ingredient-group button:hover,
  .instruction-group button:hover {
    background-color: #ff4c4c;
  }
  
  button {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #359f70;
  }
  
  .submit-button {
    display: block;
    width: 100%;
    padding: 0.75rem;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #359f70;
  }
  </style>
  