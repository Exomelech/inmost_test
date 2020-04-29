import React from 'react';
import { Image, View, Text } from 'react-native';
//import { Item, Text } from 'native-base';

export default ({ title, image }) => {
  
  const width = image == 'noimage' ? 0 : 64;

  return (
    <View 
      style={{height: 80, marginLeft: 10, marginRight: 10}}
      >
        <Image 
          source={{uri: image}}
          style={{ width , height: 64 }}
        />
        <Text>{title}</Text>
    </View>
  )

};