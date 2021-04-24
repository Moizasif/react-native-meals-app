import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';





const CategoriesScreen = (props) => {

    
const renderGridItem = (itemData) => {
    return (
        //params these are taking data passing to new screens
       <CategoryGridTile 
       title = {itemData.item.title}
       color = {itemData.item.color}
       onSelect= {() => {
        props.navigation.navigate({routeName: 'CategoryMeals', params: {
            categoryId: itemData.item.id
       }})
       }}/>
    )
}

    return (
        //Special Prop naviagation it has special method navigate an take an object
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />
    );
};

CategoriesScreen.navigationOptions = {
     headerTitle: 'Meal Categories',
     
    
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
 
})

export default CategoriesScreen;
