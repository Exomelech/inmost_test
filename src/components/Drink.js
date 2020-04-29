import React from 'react';
import { Image, View, Text } from 'react-native';

export default ({ title, image }) => {
  
  let width = 64;
  let height = 64;
  let vheight = 80;

  if( image == 'noimage' ){
    width = 0;
    height = 0;
    vheight = 32;
  };

  return (
    <View 
      style={{
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        height: vheight, 
        marginLeft: 10,
        marginBottom: 5
      }}
    >
      <Image 
        source={{uri: image}}
        style={{ width , height, marginRight: 5 }}
      />
      <Text>{title}</Text>
    </View>
  )

};