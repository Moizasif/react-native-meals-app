import React from 'react'
import { View, Text, FlatList, StyleSheet} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';

const CategoryMealScreen = (props) => {

    const renderMealItem = (itemData) => {

        return (
         <View><Text>{itemData.item.title}</Text></View>
        );
    }

    //getParam method provided to extract a parameter from categories screen
    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
        );

   
    return (
        //Pop Is only used in stack navigator
        <View style = {styles.screen}>
             <FlatList 
             keyExtractor = {(item,index) => item.id}
             data={displayedMeals}
             renderItem={renderMealItem}/>
        </View>
    );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
      headerTitle: selectedCategory.title
     
  }
}

const styles = StyleSheet.create({
   screen: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
       
   }
})

export default CategoryMealScreen;