import React from 'react'
import { View, Text,Button, StyleSheet } from 'react-native';

const CategoriesScreen = (props) => {
    
    return (
        //Special Prop naviagation it has special method navigate an take an object
        <View style = {styles.screen}>
            <Text>The Categories Screen!</Text>
            <Button title="Go to Meals!" onPress={() => {
                 props.navigation.navigate({routeName: 'CategoryMeals'});
            }}/>
        </View>
    ) 
}

const styles = StyleSheet.create({
   screen: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
       
   }
})

export default CategoriesScreen;
