import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import DeckDisplay from './DeckDisplay';

class DeckListView extends Component {

    render() {
        return (
        <View> 
            {this.props.Decks.map((deck) => (<DeckDisplay key={deck} title={deck}/>))}
        </View> 
        );
      }
    }


function mapStateToProps ({ decks, quesitons }) {

    let Decks = [];

    if(decks !== {} && decks !== null)
    {  
        Decks = Object.keys(decks);
    }
  
    return {
        Decks: Decks
    }
  }
      

export default connect(mapStateToProps)(DeckListView)