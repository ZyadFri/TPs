const firebase = require("firebase/app");
require("firebase/firestore");

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
firebase.initializeApp(firebaseConfig);

// Obtenir une référence à la base de données Firestore
const db = firebase.firestore();
module.exports = { db };

// Données d'exemple
const sampleUsers = {
  "userID_1": {
    "email": "utilisateur1@example.com",
    "username": "utilisateur1",
    "fullName": "Utilisateur Un",
    "photoURL": "url_de_la_photo_de_profil",
    "isAdmin": true
  },
  "userID_2": {
    "email": "utilisateur2@example.com",
    "username": "utilisateur2",
    "fullName": "Utilisateur Deux",
    "photoURL": "url_de_la_photo_de_profil",
    "isAdmin": false
  },
  "userID_3": {
    "email": "utilisateur3@example.com",
    "username": "utilisateur3",
    "fullName": "Utilisateur Trois",
    "photoURL": "url_de_la_photo_de_profil",
    "isAdmin": false
  }
};

const sampleRecipes = [
  {
    "nom": "Saumon Rôti aux Asperges Rôties",
    "description": "Un plat délicieux et nutritif, facile à préparer",
    "ingredients": [
      { "nom": "Filets de saumon", "quantité": 450, "unité": "g" },
      { "nom": "Asperges vertes", "quantité": 250, "unité": "g" },
      { "nom": "Huile d'olive", "quantité": "2 cuillères à soupe", "unité": "" },
      { "nom": "Sel et poivre", "quantité": "au goût", "unité": "" },
      { "nom": "Citron, en jus", "quantité": "1/2", "unité": "unité" }
    ],
    "instructions": [
      "Préchauffer le four à 200°C.",
      "Sécher les filets de saumon avec du papier absorbant et les assaisonner de sel, de poivre et d'herbes fraîches (facultatif).",
      "Disposer les filets de saumon sur une plaque de cuisson tapissée de papier sulfurisé.",
      "Laver et sécher les asperges vertes.",
      "Couper les extrémités dures des asperges et les enrober d'huile d'olive.",
      "Disposer les asperges autour des filets de saumon.",
      "Enfourner pendant 15-20 minutes, ou jusqu'à ce que le saumon soit bien cuit.",
      "Servir avec une touche de jus de citron."
    ],
    "tempsPreparation": "10 minutes",
    "tempsCuisson": "15-20 minutes",
    "niveauDifficulte": "Facile",
    "auteur": "Chef Martin",
    "image": "url_de_l'image_du_repas",
    "typeDeRegime": ["Pescétarien", "Sans gluten"],
    "categorie": ["Plat Principal"],
    "popularite": 4.5,
    "dateAjout": firebase.firestore.FieldValue.serverTimestamp()
  },
  {
    "nom": "Saumon Rôti aux Asperges Rôties",
    "description": "Un plat délicieux et nutritif, facile à préparer",
    "ingredients": [
      { "nom": "Filets de saumon", "quantité": 450, "unité": "g" },
      { "nom": "Asperges vertes", "quantité": 250, "unité": "g" },
      { "nom": "Huile d'olive", "quantité": "2 cuillères à soupe", "unité": "" },
      { "nom": "Sel et poivre", "quantité": "au goût", "unité": "" },
      { "nom": "Citron, en jus", "quantité": "1/2", "unité": "unité" }
    ],
    "instructions": [
      "Préchauffer le four à 200°C.",
      "Sécher les filets de saumon avec du papier absorbant et les assaisonner de sel, de poivre et d'herbes fraîches (facultatif).",
      "Disposer les filets de saumon sur une plaque de cuisson tapissée de papier sulfurisé.",
      "Laver et sécher les asperges vertes.",
      "Couper les extrémités dures des asperges et les enrober d'huile d'olive.",
      "Disposer les asperges autour des filets de saumon.",
      "Enfourner pendant 15-20 minutes, ou jusqu'à ce que le saumon soit bien cuit.",
      "Servir avec une touche de jus de citron."
    ],
    "tempsPreparation": "10 minutes",
    "tempsCuisson": "15-20 minutes",
    "niveauDifficulte": "Facile",
    "auteur": "Chef Martin",
    "image": "url_de_l'image_du_repas",
    "typeDeRegime": ["Pescétarien", "Sans gluten"],
    "categorie": ["Plat Principal"],
    "popularite": 4.5,
    "dateAjout": firebase.firestore.FieldValue.serverTimestamp()
  },
  {
    "nom": "Saumon Rôti aux Asperges Rôties",
    "description": "Un plat délicieux et nutritif, facile à préparer",
    "ingredients": [
      { "nom": "Filets de saumon", "quantité": 450, "unité": "g" },
      { "nom": "Asperges vertes", "quantité": 250, "unité": "g" },
      { "nom": "Huile d'olive", "quantité": "2 cuillères à soupe", "unité": "" },
      { "nom": "Sel et poivre", "quantité": "au goût", "unité": "" },
      { "nom": "Citron, en jus", "quantité": "1/2", "unité": "unité" }
    ],
    "instructions": [
      "Préchauffer le four à 200°C.",
      "Sécher les filets de saumon avec du papier absorbant et les assaisonner de sel, de poivre et d'herbes fraîches (facultatif).",
      "Disposer les filets de saumon sur une plaque de cuisson tapissée de papier sulfurisé.",
      "Laver et sécher les asperges vertes.",
      "Couper les extrémités dures des asperges et les enrober d'huile d'olive.",
      "Disposer les asperges autour des filets de saumon.",
      "Enfourner pendant 15-20 minutes, ou jusqu'à ce que le saumon soit bien cuit.",
      "Servir avec une touche de jus de citron."
    ],
    "tempsPreparation": "10 minutes",
    "tempsCuisson": "15-20 minutes",
    "niveauDifficulte": "Facile",
    "auteur": "Chef Martin",
    "image": "url_de_l'image_du_repas",
    "typeDeRegime": ["Pescétarien", "Sans gluten"],
    "categorie": ["Plat Principal"],
    "popularite": 4.5,
    "dateAjout": firebase.firestore.FieldValue.serverTimestamp()
  },
  {
    "nom": "Saumon Rôti aux Asperges Rôties",
    "description": "Un plat délicieux et nutritif, facile à préparer",
    "ingredients": [
      { "nom": "Filets de saumon", "quantité": 450, "unité": "g" },
      { "nom": "Asperges vertes", "quantité": 250, "unité": "g" },
      { "nom": "Huile d'olive", "quantité": "2 cuillères à soupe", "unité": "" },
      { "nom": "Sel et poivre", "quantité": "au goût", "unité": "" },
      { "nom": "Citron, en jus", "quantité": "1/2", "unité": "unité" }
    ],
    "instructions": [
      "Préchauffer le four à 200°C.",
      "Sécher les filets de saumon avec du papier absorbant et les assaisonner de sel, de poivre et d'herbes fraîches (facultatif).",
      "Disposer les filets de saumon sur une plaque de cuisson tapissée de papier sulfurisé.",
      "Laver et sécher les asperges vertes.",
      "Couper les extrémités dures des asperges et les enrober d'huile d'olive.",
      "Disposer les asperges autour des filets de saumon.",
      "Enfourner pendant 15-20 minutes, ou jusqu'à ce que le saumon soit bien cuit.",
      "Servir avec une touche de jus de citron."
    ],
    "tempsPreparation": "10 minutes",
    "tempsCuisson": "15-20 minutes",
    "niveauDifficulte": "Facile",
    "auteur": "Chef Martin",
    "image": "url_de_l'image_du_repas",
    "typeDeRegime": ["Pescétarien", "Sans gluten"],
    "categorie": ["Plat Principal"],
    "popularite": 4.5,
    "dateAjout": firebase.firestore.FieldValue.serverTimestamp()
  },
  {
    "nom": "Saumon Rôti aux Asperges Rôties",
    "description": "Un plat délicieux et nutritif, facile à préparer",
    "ingredients": [
      { "nom": "Filets de saumon", "quantité": 450, "unité": "g" },
      { "nom": "Asperges vertes", "quantité": 250, "unité": "g" },
      { "nom": "Huile d'olive", "quantité": "2 cuillères à soupe", "unité": "" },
      { "nom": "Sel et poivre", "quantité": "au goût", "unité": "" },
      { "nom": "Citron, en jus", "quantité": "1/2", "unité": "unité" }
    ],
    "instructions": [
      "Préchauffer le four à 200°C.",
      "Sécher les filets de saumon avec du papier absorbant et les assaisonner de sel, de poivre et d'herbes fraîches (facultatif).",
      "Disposer les filets de saumon sur une plaque de cuisson tapissée de papier sulfurisé.",
      "Laver et sécher les asperges vertes.",
      "Couper les extrémités dures des asperges et les enrober d'huile d'olive.",
      "Disposer les asperges autour des filets de saumon.",
      "Enfourner pendant 15-20 minutes, ou jusqu'à ce que le saumon soit bien cuit.",
      "Servir avec une touche de jus de citron."
    ],
    "tempsPreparation": "10 minutes",
    "tempsCuisson": "15-20 minutes",
    "niveauDifficulte": "Facile",
    "auteur": "Chef Martin",
    "image": "url_de_l'image_du_repas",
    "typeDeRegime": ["Pescétarien", "Sans gluten"],
    "categorie": ["Plat Principal"],
    "popularite": 4.5,
    "dateAjout": firebase.firestore.FieldValue.serverTimestamp()
  },
  {
    "nom": "Saumon Rôti aux Asperges Rôties",
    "description": "Un plat délicieux et nutritif, facile à préparer",
    "ingredients": [
      { "nom": "Filets de saumon", "quantité": 450, "unité": "g" },
      { "nom": "Asperges vertes", "quantité": 250, "unité": "g" },
      { "nom": "Huile d'olive", "quantité": "2 cuillères à soupe", "unité": "" },
      { "nom": "Sel et poivre", "quantité": "au goût", "unité": "" },
      { "nom": "Citron, en jus", "quantité": "1/2", "unité": "unité" }
    ],
    "instructions": [
      "Préchauffer le four à 200°C.",
      "Sécher les filets de saumon avec du papier absorbant et les assaisonner de sel, de poivre et d'herbes fraîches (facultatif).",
      "Disposer les filets de saumon sur une plaque de cuisson tapissée de papier sulfurisé.",
      "Laver et sécher les asperges vertes.",
      "Couper les extrémités dures des asperges et les enrober d'huile d'olive.",
      "Disposer les asperges autour des filets de saumon.",
      "Enfourner pendant 15-20 minutes, ou jusqu'à ce que le saumon soit bien cuit.",
      "Servir avec une touche de jus de citron."
    ],
    "tempsPreparation": "10 minutes",
    "tempsCuisson": "15-20 minutes",
    "niveauDifficulte": "Facile",
    "auteur": "Chef Martin",
    "image": "url_de_l'image_du_repas",
    "typeDeRegime": ["Pescétarien", "Sans gluten"],
    "categorie": ["Plat Principal"],
    "popularite": 4.5,
    "dateAjout": firebase.firestore.FieldValue.serverTimestamp()
  },
  {
    "nom": "Saumon Rôti aux Asperges Rôties",
    "description": "Un plat délicieux et nutritif, facile à préparer",
    "ingredients": [
      { "nom": "Filets de saumon", "quantité": 450, "unité": "g" },
      { "nom": "Asperges vertes", "quantité": 250, "unité": "g" },
      { "nom": "Huile d'olive", "quantité": "2 cuillères à soupe", "unité": "" },
      { "nom": "Sel et poivre", "quantité": "au goût", "unité": "" },
      { "nom": "Citron, en jus", "quantité": "1/2", "unité": "unité" }
    ],
    "instructions": [
      "Préchauffer le four à 200°C.",
      "Sécher les filets de saumon avec du papier absorbant et les assaisonner de sel, de poivre et d'herbes fraîches (facultatif).",
      "Disposer les filets de saumon sur une plaque de cuisson tapissée de papier sulfurisé.",
      "Laver et sécher les asperges vertes.",
      "Couper les extrémités dures des asperges et les enrober d'huile d'olive.",
      "Disposer les asperges autour des filets de saumon.",
      "Enfourner pendant 15-20 minutes, ou jusqu'à ce que le saumon soit bien cuit.",
      "Servir avec une touche de jus de citron."
    ],
    "tempsPreparation": "10 minutes",
    "tempsCuisson": "15-20 minutes",
    "niveauDifficulte": "Facile",
    "auteur": "Chef Martin",
    "image": "url_de_l'image_du_repas",
    "typeDeRegime": ["Pescétarien", "Sans gluten"],
    "categorie": ["Plat Principal"],
    "popularite": 4.5,
    "dateAjout": firebase.firestore.FieldValue.serverTimestamp()
  },
  {
    "nom": "Saumon Rôti aux Asperges Rôties",
    "description": "Un plat délicieux et nutritif, facile à préparer",
    "ingredients": [
      { "nom": "Filets de saumon", "quantité": 450, "unité": "g" },
      { "nom": "Asperges vertes", "quantité": 250, "unité": "g" },
      { "nom": "Huile d'olive", "quantité": "2 cuillères à soupe", "unité": "" },
      { "nom": "Sel et poivre", "quantité": "au goût", "unité": "" },
      { "nom": "Citron, en jus", "quantité": "1/2", "unité": "unité" }
    ],
    "instructions": [
      "Préchauffer le four à 200°C.",
      "Sécher les filets de saumon avec du papier absorbant et les assaisonner de sel, de poivre et d'herbes fraîches (facultatif).",
      "Disposer les filets de saumon sur une plaque de cuisson tapissée de papier sulfurisé.",
      "Laver et sécher les asperges vertes.",
      "Couper les extrémités dures des asperges et les enrober d'huile d'olive.",
      "Disposer les asperges autour des filets de saumon.",
      "Enfourner pendant 15-20 minutes, ou jusqu'à ce que le saumon soit bien cuit.",
      "Servir avec une touche de jus de citron."
    ],
    "tempsPreparation": "10 minutes",
    "tempsCuisson": "15-20 minutes",
    "niveauDifficulte": "Facile",
    "auteur": "Chef Martin",
    "image": "url_de_l'image_du_repas",
    "typeDeRegime": ["Pescétarien", "Sans gluten"],
    "categorie": ["Plat Principal"],
    "popularite": 4.5,
    "dateAjout": firebase.firestore.FieldValue.serverTimestamp()
  },
  {
    "nom": "Saumon Rôti aux Asperges Rôties",
    "description": "Un plat délicieux et nutritif, facile à préparer",
    "ingredients": [
      { "nom": "Filets de saumon", "quantité": 450, "unité": "g" },
      { "nom": "Asperges vertes", "quantité": 250, "unité": "g" },
      { "nom": "Huile d'olive", "quantité": "2 cuillères à soupe", "unité": "" },
      { "nom": "Sel et poivre", "quantité": "au goût", "unité": "" },
      { "nom": "Citron, en jus", "quantité": "1/2", "unité": "unité" }
    ],
    "instructions": [
      "Préchauffer le four à 200°C.",
      "Sécher les filets de saumon avec du papier absorbant et les assaisonner de sel, de poivre et d'herbes fraîches (facultatif).",
      "Disposer les filets de saumon sur une plaque de cuisson tapissée de papier sulfurisé.",
      "Laver et sécher les asperges vertes.",
      "Couper les extrémités dures des asperges et les enrober d'huile d'olive.",
      "Disposer les asperges autour des filets de saumon.",
      "Enfourner pendant 15-20 minutes, ou jusqu'à ce que le saumon soit bien cuit.",
      "Servir avec une touche de jus de citron."
    ],
    "tempsPreparation": "10 minutes",
    "tempsCuisson": "15-20 minutes",
    "niveauDifficulte": "Facile",
    "auteur": "Chef Martin",
    "image": "url_de_l'image_du_repas",
    "typeDeRegime": ["Pescétarien", "Sans gluten"],
    "categorie": ["Plat Principal"],
    "popularite": 4.5,
    "dateAjout": firebase.firestore.FieldValue.serverTimestamp()
  },
  {
    "nom": "Pancakes Véganes à la Banane",
    "description": "Pancakes moelleux sans produits d'origine animale",
    "ingredients": [
      { "nom": "Farine", "quantité": 200, "unité": "g" },
      { "nom": "Lait d'amande", "quantité": 250, "unité": "ml" },
      { "nom": "Banane mûre", "quantité": 2, "unité": "unité" },
      { "nom": "Bicarbonate de soude", "quantité": "1 cuillère à café", "unité": "" }
    ],
    "instructions": [
      "Écraser les bananes dans un bol.",
      "Ajouter le lait d'amande et mélanger.",
      "Ajouter la farine et le bicarbonate de soude, puis mélanger jusqu'à obtenir une pâte homogène.",
      "Faire chauffer une poêle antiadhésive et y verser une petite louche de pâte.",
      "Cuire jusqu'à ce que des bulles se forment à la surface, puis retourner et cuire l'autre côté jusqu'à ce qu'il soit doré.",
      "Servir chaud avec des fruits frais ou du sirop d'érable."
    ],
    "tempsPreparation": "10 minutes",
    "tempsCuisson": "20 minutes",
    "niveauDifficulte": "Facile",
    "auteur": "Chef Marie",
    "image": "url_de_l'image_du_repas",
    "typeDeRegime": ["Végétalien"],
    "categorie": ["Petit Déjeuner", "Brunch"],
    "popularite": 4.8,
    "dateAjout": firebase.firestore.FieldValue.serverTimestamp()
  },
  {
    "nom": "Salade César",
    "description": "Une salade classique avec une touche maison",
    "ingredients": [
      { "nom": "Laitue romaine", "quantité": 1, "unité": "tête" },
      { "nom": "Croutons", "quantité": 100, "unité": "g" },
      { "nom": "Parmesan", "quantité": 50, "unité": "g" },
      { "nom": "Sauce César", "quantité": "au goût", "unité": "" }
    ],
    "instructions": [
      "Laver et déchirer la laitue en morceaux.",
      "Ajouter les croutons et le parmesan.",
      "Arroser de sauce César et mélanger."
    ],
    "tempsPreparation": "15 minutes",
    "tempsCuisson": "0 minute",
    "niveauDifficulte": "Facile",
    "auteur": "Chef Anna",
    "image": "url_de_l'image_du_repas",
    "typeDeRegime": ["Sans gluten"],
    "categorie": ["Entrée", "Salade"],
    "popularite": 4.2,
    "dateAjout": firebase.firestore.FieldValue.serverTimestamp()
  }
];

const sampleComments = {
  "commentID_1": {
    "recipeID": "recipeID_1",
    "userID": "userID_2",
    "comment": "J'adore cette recette ! Facile à préparer et tellement délicieuse.",
    "timestamp": "2024-06-05T12:00:00Z"
  },
  "commentID_2": {
    "recipeID": "recipeID_2",
    "userID": "userID_1",
    "comment": "Cette salade est devenue un incontournable à la maison. Merci pour la recette !",
    "timestamp": "2024-06-05T13:30:00Z"
  },
  "commentID_3": {
    "recipeID": "recipeID_1",
    "userID": "userID_3",
    "comment": "Recette simple et délicieuse. Je recommande !",
    "timestamp": "2024-06-06T08:00:00Z"
  }
};

const sampleRegimes = [
  {
    "name": "Végétalien",
    "description": "Un régime qui exclut tous les produits d'origine animale.",
    "exampleFoods": [
      "Fruits",
      "Légumes",
      "Légumineuses",
      "Noix",
      "Graines"
    ],
    "photo": "https://www.exemple.com/regimes/images/vegetalien.png"
  },
  {
    "name": "Pescétarien",
    "description": "Un régime qui inclut du poisson mais exclut la viande.",
    "exampleFoods": [
      "Poisson",
      "Fruits de mer",
      "Légumes",
      "Fruits",
      "Céréales complètes"
    ],
    "photo": "https://www.exemple.com/regimes/images/pescetarien.png"
  }
];

// Fonction pour enregistrer les données dans Firestore
const saveDataToFirestore = async (data, collectionName) => {
  try {
    for (const key in data) {
      const item = data[key];
      await db.collection(collectionName).doc(key).set(item);
    }
    console.log(`${collectionName} saved successfully to Firestore.`);
  } catch (error) {
    console.error('Error saving data to Firestore:', error);
  }
};
const filterRecipesByRegime = (regime) => {
  return sampleRecipes.filter(recipe => recipe.typeDeRegime.includes(regime));
};

module.exports = { db, filterRecipesByRegime };


// Fonction à appeler pour enregistrer les données (exemple)
function saveSampleDataToFirestore() {
  saveDataToFirestore(sampleUsers, 'users');
  saveDataToFirestore(sampleRecipes, 'recipes');
  saveDataToFirestore(sampleComments, 'comments');
  saveDataToFirestore(sampleRegimes, 'regimes');
}

// Appel de la fonction pour enregistrer les données
saveSampleDataToFirestore();
