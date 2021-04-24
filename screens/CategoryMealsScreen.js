import React from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = (props) => {


    //getParam method provided to extract a parameter from categories screen
    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );


    return (
        //Pop Is only used in stack navigator
        <MealList listData={displayedMeals} navigation={props.navigation} />
    );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title

    }
}



export default CategoryMealScreen;