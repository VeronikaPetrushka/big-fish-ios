import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Modal, ScrollView, Share, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import recipes from '../constants/recipes.js';
import Icons from './Icons.jsx';
import CreateRecipe from './CreateRecipe.jsx';

const { width } = Dimensions.get('window');


const RecipeCard = ({ title, image, onPress }) => {
  return (
    <View style={styles.card}>
      <ScrollView style={{width: '100%'}} contentContainerStyle={{ justifyContent: 'space-between'}}>
      <View style={styles.imgContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.recipeBtn} onPress={onPress}>
        <Text style={styles.recipeBtnTxt}>See the recipe</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const Recipes = () => {
  const [detailsModalVisible, setDetailsModalVisible] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [addRecipeVisible, setAddRecipeVisible] = useState(false);
  const [userRecipes, setUserRecipes] = useState([]);

  useEffect(() => {
    const loadUserRecipes = async () => {
        try {
            const storedRecipes = await AsyncStorage.getItem('userRecipes');
            if (storedRecipes) {
                setUserRecipes(JSON.parse(storedRecipes));
            }
        } catch (error) {
            console.error('Failed to load recipes from storage:', error);
        }
    };

    loadUserRecipes();
}, []);

const saveRecipesToStorage = async (userRecipes) => {
    try {
        await AsyncStorage.setItem('userRecipes', JSON.stringify(userRecipes));
    } catch (error) {
        console.error('Failed to save user recipes to storage:', error);
    }
};

const handleAddRecipe = (recipeDetails) => {
  const newRecipe = {
    ...recipeDetails,
    ingredients: recipeDetails.ingredients.trim() ? recipeDetails.ingredients.split('\n') : [],
    instructions: recipeDetails.instructions.trim() ? recipeDetails.instructions.split('\n') : [],
    id: userRecipes.length > 0 ? userRecipes[userRecipes.length - 1].id + 1 : 1,
  };
  const newRecipes = [...userRecipes, newRecipe];
  setUserRecipes(newRecipes);
  saveRecipesToStorage(newRecipes);
};

  const handleAddRecipeClose = () => {
    setAddRecipeVisible(false);
  };

  const handleDetailsModalClose = () => {
    setDetailsModalVisible(false);
    setSelectedRecipe(null);
  };

  const handleShareRecipe = async () => {
    if (selectedRecipe) {
      const { title, name, ingredients, instructions } = selectedRecipe;
      const message = `
        Check out this recipe for ${title || name}!
        
        Ingredients:
        ${ingredients.join('\n')}
        
        Instructions:
        ${instructions.join('\n')}
      `;
      try {
        await Share.share({
          message,
        });
      } catch (error) {
        console.log("Error sharing recipe: ", error);
      }
    }
  };

  const renderItem = ({ item }) => {
    const imageSource = item.imageUri ? { uri: item.imageUri } : item.image;
    return(
    <RecipeCard
      title={item.title || item.name}
      image={imageSource}
      onPress={() => {
        setSelectedRecipe(item);
        setDetailsModalVisible(true);
        console.log(`Selected recipe: ${item.title || item.name}`);
      }}
    />
  )
};


  const combinedRecipes = [...recipes, ...userRecipes];

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.addBtn} onPress={() => setAddRecipeVisible(true)}>
          <Icons type={'plus'}/>
        </TouchableOpacity>
      <Text style={styles.titleMain}>Recipes</Text>
      <FlatList
        data={combinedRecipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id ? item.id.toString() : item.title}
        contentContainerStyle={styles.list}
      />

<Modal
  transparent={true}
  visible={detailsModalVisible}
  animationType="slide"
  onRequestClose={handleDetailsModalClose}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        {selectedRecipe && (
          <>
            <Text style={styles.modalTitle}>{selectedRecipe.title || selectedRecipe.name}</Text>
            <View style={styles.imgContainer}>
              <Image source={selectedRecipe.imageUri ? { uri: selectedRecipe.imageUri } : selectedRecipe.image} style={styles.image} />
            </View>
            <Text style={styles.modalSubtitle}>Ingredients:</Text>
            {Array.isArray(selectedRecipe.ingredients) ? (
              selectedRecipe.ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.modalText}>- {ingredient}</Text>
              ))
            ) : (
              <Text style={styles.modalText}>{selectedRecipe.ingredients}</Text>
            )}

            <Text style={styles.modalSubtitle}>Instructions:</Text>
            {Array.isArray(selectedRecipe.instructions) ? (
              selectedRecipe.instructions.map((instruction, index) => (
                <Text key={index} style={styles.modalText}>{instruction}</Text>
              ))
            ) : (
              <Text style={styles.modalText}>{selectedRecipe.instructions}</Text>
            )}
          </>
        )}
        <TouchableOpacity style={styles.shareButton} onPress={handleShareRecipe}>
          <Text style={styles.shareButtonText}>Share Recipe</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.closeButton} onPress={handleDetailsModalClose}>
        <Icons type={'close'} />
      </TouchableOpacity>
    </View>
  </View>
</Modal>

      <CreateRecipe 
        visible={addRecipeVisible} 
        onClose={handleAddRecipeClose}
        onSubmit={handleAddRecipe}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
    paddingTop: 70,
    backgroundColor: '#c1e5fa',
  },
  addBtn: {
    width: 60,
    height: 60,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 55,
    right: 20,
    zIndex: 10
},
  titleMain: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#284c61',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    alignItems: 'center',
    width: '100%',
    paddingBottom: 130,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginVertical: 10,
    width: width * 0.9,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 315,
  },
  imgContainer: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    marginTop: 10,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#284c61',
  },
  recipeBtn: {
    padding: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#284c61',
    borderRadius: 30,
    marginTop: 10
  },
  recipeBtnTxt: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    height: '70%',
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#284c61',
    textAlign: 'center'
  },
  modalSubtitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#284c61',
    marginBottom: 20
  },
  modalText: {
    color: '#284c61',
    fontSize: 18,
  },
  closeButton: {
    padding: 10,
    width: 40,
    height: 40,
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10
  },
  shareButton: {
    backgroundColor: '#284c61',
    padding: 10,
    borderRadius: 30,
    marginTop: 30,
    alignItems: 'center',
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
  },
});

export default Recipes;
