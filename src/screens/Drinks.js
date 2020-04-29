import React, {Component} from 'react';
import { Image, TouchableOpacity, FlatList, View} from 'react-native';
import { connect } from "react-redux";
import { initCategories, updateCategory } from '../store/actions';
import Drink from '../components/Drink';

class Drinks extends Component {
  constructor(props){
    super(props)
    this.state = {
      fetched: true
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
          onPress={() => {
            this.setState({ fetched: false });
            this.props.navigation.navigate('Filters')
          }}
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

  getCategory(id){
    const title = this.props.categories[id].title;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${title}`)
      .then(res => res.json())
      .then( data =>{ 
        const arr = [{
          title,
          image: 'noimage'
        }];
        const drinks = arr.concat(data.drinks.map( el => { return { title: el.strDrink, image: el.strDrinkThumb }} ));
        this.props.updateCategory({id, drinks});
        this.setState({ fetched: false });
      });
  };

  shouldComponentUpdate(nextProps) {
    if( this.props.drinks !== nextProps.drinks ){
      return true;
    }
    return false;
  };

  handleEndReached = () => {
    if( !this.state.fetched ){
      this.setState({ fetched: true });
      const { categories } = this.props;
      categories.some( (el, id) => {
        if( el.enable && !el.displayed ){
          this.getCategory(id);
          return true;
        };
      });
    };
  };

  componentDidUpdate(prevProps) {
    if(this.props.categories !== prevProps.categories){
      const { fetched } = this.state;
      if( this.props.drinks.length == 0 && !fetched ){
        this.handleEndReached();
      };
    };
  };

  render(){
    const { drinks } = this.props;
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
            onEndReached={this.handleEndReached}
            onEndThreshold={0}
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