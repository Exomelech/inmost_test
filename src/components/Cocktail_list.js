import React from 'react';
import { View, FlatList } from "react-native";
import Cocktail from './Cocktail';

export default ({drinks}) => {

  return (
    <View>
      <FlatList
        data={drinks}
        renderItem={({ item }) => (
          <Cocktail 
            title={item.title}
            image={item.image}
          />
        )}
        keyExtractor={item => item.title}
      />
    </View>
  );

}