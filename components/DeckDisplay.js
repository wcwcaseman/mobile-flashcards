import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class DeckDisplay extends Component {

    render() {
        const {deck, numberOfCards} = this.props
        return (
        <View> 
            <Text style={styles.deckNameText} >{deck.title}</Text>
            <Text>{numberOfCards} cards</Text> 
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
    debugger;
    const numberOfCards = deck.questions.length

    return {
        deck: deck,
        numberOfCards: numberOfCards
    }
  }
      
export default connect(mapStateToProps)(DeckDisplay)