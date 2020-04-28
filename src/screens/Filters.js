import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native'
import { Container, Text } from 'native-base';
import { connect } from "react-redux";
import { initCategories } from '../store/actions';
import Filter from '../components/Filter';

class Filters extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      filters: []
    };
  };

  componentDidMount(){
    this.setState({
      filters: this.props.categories.map( el => Object.assign({}, el) )
    });
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          onPress={() => {
            this.applyFilters();
            this.props.navigation.goBack();
          }}
          style={{marginRight: 10}}
          >
          <Text>Apply</Text>
        </TouchableOpacity>
      )
    })
  };

  updateFilter( state, id ){
    const {filters} = this.state;
    filters[id].enable = state;
    this.setState({filters});
  };

  applyFilters(){
    this.props.initCategories( this.state.filters )
  }

  render(){

    const filterItems = this.state.filters.map( (el,i) => 
      <Filter 
        title={el.title} 
        key={i} 
        id={i}
        onChange={(state, id) => this.updateFilter(state, id)}
        enable={el.enable}
      /> 
    );

    return (
      <Container>
        {filterItems}
      </Container>
    )
  }

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
)(Filters);