import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class DeckDisplay extends Component {

    render() {
        const {deck} = this.props
        return (
        <View> 
            <Text style={styles.deckNameText} >{deck.title}</Text>
            <Text>{deck.numberOfCards} cards</Text> 
        </View> 
        );
      }
    }
   
    const styles = StyleSheet.create({
        deckNameText: {
            fontWeight: 'bold',
            fontSize: 30,
            color:"red"
        }
      })

function mapStateToProps ({ decks }, {title}) {

    const deck = decks[title];

    return {
        deck: deck
    }
  }
      
export default connect(mapStateToProps)(DeckDisplay)