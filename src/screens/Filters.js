import React, {Component} from 'react';
import { Container, Content, ListItem, CheckBox, Body, Button, Text, Form } from 'native-base';
import { connect } from "react-redux";
import { updateCategory } from '../store/actions';

class Filters extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  };

  render(){
    return (
      <Container>

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
    updateCategory
  }
)(Filters);