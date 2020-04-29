import React, {Component} from 'react';
//import { Container, Content, ListItem, CheckBox, Body, Button, Text, Form } from 'native-base';
//import {Container} from 'native-base';
import { Image, TouchableOpacity, FlatList, View} from 'react-native';
import { connect } from "react-redux";
import { initCategories, updateCategory } from '../store/actions';
import Drink from '../components/Drink';

class Drinks extends Component {
  constructor(props){
    super(props)
    this.state = {
      fetched: false
    };
  };

  async componentDidMount(){
    try{
      const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const data = await res.json();
      const categories = data.drinks.map( el => {
        return {
          enable: true,
          title: el.strCategory,
          displayed: false
        } 
      });
      this.props.initCategories(categories);
      this.getCategory(0);
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

  // async getCategory(id){
  //   this.setState({ fetched: true })
  //   try{
  //     const title = this.props.categories[id].title;
  //     const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${title}`);
  //     const data = await res.json();
  //     const drinks = data.drinks.map( el => { return { title: el.strDrink, image: el.strDrinkThumb }} );
  //     this.props.updateCategory({id, drinks});
  //     this.setState({ fetched: false });
  //   }catch( err ){ console.warn( err ) };
  // };

  getCategory(id){
    const title = this.props.categories[id].title;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${title}`)
      .then(res => res.json())
      .then( data =>{ 
        const drinks = data.drinks.map( el => { return { title: el.strDrink, image: el.strDrinkThumb }} );
        this.props.updateCategory({id, drinks});
      })
    this.setState({ fetched: false });
  };

  handleEndReached = () => {
    console.log( 'end reached' )
    if( !this.state.fetched ){
      this.setState({ fetched: true });
      const { categories } = this.props;
      categories.some( (el, id) => {
        if( el.enable && !el.displayed ){
          console.log( 'title '+el.title )
          this.getCategory(id);
          return true;
        };
      });
    };
  };

  render(){
    const { drinks } = this.props;
    // const { categories } = this.props;
    // const { fetched } = this.state;
    // //if( !fetched ) {
    //   categories.some( (el, id) => {
    //     if( el.enable && !el.displayed ){
    //       console.log(id)
    //       this.getCategory(id);
    //       return true;
    //     };
    //   });
    // //};
    
    return(
      <View>
        <FlatList
          data={drinks}
          renderItem={({ item }) => (
            <Drink 
              title={item.title}
              image={item.image}
              />
            )}
            keyExtractor={item => item.title}
            //onEndReached={this.handleEndReached}
            //onEndThreshold={0}
          />
        </View>
      )
    };

};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    drinks: state.drinks
  };
};

export default connect(
  mapStateToProps,
  { 
    initCategories,
    updateCategory
  }
)(Drinks);