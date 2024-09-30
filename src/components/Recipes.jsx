import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Modal, ScrollView, Share } from 'react-native';
import recipes from '../constants/recipes.js';
import Icons from './Icons.jsx';

const RecipeCard = ({ title, image, onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.recipeBtn} onPress={onPress}>
        <Text style={styles.recipeBtnTxt}>See the recipe</Text>
      </TouchableOpacity>
    </View>
  );
};

const Recipes = () => {
  const [detailsModalVisible, setDetailsModalVisible] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleDetailsModalClose = () => {
    setDetailsModalVisible(false);
    setSelectedRecipe(null);
  };

  const handleShareRecipe = async () => {
    if (selectedRecipe) {
      const { title, ingredients, instructions } = selectedRecipe;
      const message = `
        Check out this recipe for ${title}!
        
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

  const renderItem = ({ item }) => (
    <RecipeCard
      title={item.title}
      image={item.image}
      onPress={() => {
        setSelectedRecipe(item);
        setDetailsModalVisible(true);
        console.log(`Selected recipe: ${item.title}`);
      }}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titleMain}>Recipes</Text>
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
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
            <ScrollView>
              {selectedRecipe && (
                <>
                  <Text style={styles.modalTitle}>{selectedRecipe.title}</Text>
                  <View style={styles.imgContainer}>
                    <Image source={selectedRecipe.image} style={styles.image} />
                  </View>
                  <Text style={styles.modalSubtitle}>Ingredients:</Text>
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <Text key={index} style={styles.modalText}>- {ingredient}</Text>
                  ))}
                  <Text style={styles.modalSubtitle}>Instructions:</Text>
                  {selectedRecipe.instructions.map((instruction, index) => (
                    <Text key={index} style={styles.modalText}>{instruction}</Text>
                  ))}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '110%',
    padding: 20,
    paddingTop: 30,
    backgroundColor: '#c1e5fa',
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
    paddingBottom: 170,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginVertical: 10,
    width: 355,
    minWidth: 280,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 330,
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
