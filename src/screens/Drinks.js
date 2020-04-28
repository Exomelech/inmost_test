import React, {Component} from 'react';
//import { Container, Content, ListItem, CheckBox, Body, Button, Text, Form } from 'native-base';
import {Container} from 'native-base';
import { Image, TouchableOpacity} from 'react-native';
import { connect } from "react-redux";
import { initCategories } from '../store/actions';

class Drinks extends Component {
  constructor(props){
    super(props)
    this.state = {
    };
  };

  async componentDidMount(){
    try{
      const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const data = await res.json();
      const categories = data.drinks.map( el => {
        return {
          enable: true,
          title: el.strCategory
        } 
      });
      this.props.initCategories(categories);
    }catch( err ){ console.warn( err ) };
    
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Filters')}
          style={{marginRight: 10}}
          >
          <Image 
            source={require('../styles/images/filter_icon.png')} 
            style={{width: 32, height: 32 }}
          />
        </TouchableOpacity>
      )
    })

  };

  render(){

    return(
      <Container>
      </Container>
    )
  };

};

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
};

export default connect(
  mapStateToProps,
  { 
    initCategories
  }
)(Drinks);