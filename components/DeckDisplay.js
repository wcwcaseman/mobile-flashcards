import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class DeckDisplay extends Component {

    goToDeckView = () => {
        this.props.navigation.navigate('IndividualDeckView', {title: this.props.title});  
    }

    render() {
        const {deck, numberOfCards} = this.props
        return (
        <TouchableOpacity onPress={this.goToDeckView}> 
            <Text style={styles.deckNameText} >{deck.title}</Text>
            <Text>{numberOfCards} cards</Text> 
        </TouchableOpacity> 
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

function mapStateToProps ({ decks }, {title}, props) {

    const deck = decks[title];
    const numberOfCards = deck.questions.length

    return {
        deck: deck,
        numberOfCards: numberOfCards
    }
  }
      
export default connect(mapStateToProps)(DeckDisplay)