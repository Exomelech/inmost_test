import React from 'react';
import { Image } from 'react-native';
import { Item, Text, Right } from 'native-base';

export default Filter = ({ title, onChange, id, enable }) => {

  return (
    <Item 
      style={{height: 50, marginLeft: 20, marginRight: 20}}
      onPress={() => onChange(!enable, id)}
      >
      <Text>{title}</Text>
      <Right>
        <Image 
          source={require('../styles/images/mark_icon.png')}
          style={{width:32, height: 32, opacity: enable ? 100 : 0}}
        />
      </Right>
    </Item>
  )

};