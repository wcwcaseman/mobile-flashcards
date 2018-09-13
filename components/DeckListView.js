import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux'
import DeckDisplay from './DeckDisplay';
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'




class DeckListView extends Component {

    componentDidMount () {
        const { dispatch } = this.props
    
        getDecks()
          .then((decks) => dispatch(receiveDecks(decks)))

      }

    render() {
        return (
        <View> 
            <FlatList
            data={this.props.Decks}
            renderItem={({item}) => <DeckDisplay navigation={this.props.navigation} title={item.title}></DeckDisplay>}
            keyExtractor={item => item.title} 
            />           
        </View> 
        );
      }
    }


function mapStateToProps ({ decks, quesitons }) {

    let Decks = [];

    if(decks !== {} && decks !== null)
    {  
        Decks = Object.values(decks)
    }
  
    return {
        Decks: Decks
    }
  }
      

export default connect(mapStateToProps)(DeckListView)