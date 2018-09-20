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
        <TouchableOpacity style={styles.listItem} onPress={this.goToDeckView}> 
            <Text style={styles.deckNameText} >{deck.title}</Text>
            <Text style={styles.deckCardsText} >{numberOfCards} cards</Text> 
        </TouchableOpacity> 
        );
      }
    }
   
    const styles = StyleSheet.create({
        listItem:{
            borderBottomWidth: 2,
            borderBottomColor: 'grey',
            borderStyle: 'solid',
            padding: 10
        },
        deckNameText: {
            fontWeight: 'bold',
            fontSize: 24,
            alignSelf: 'center'
        },
        deckCardsText: {
            color: 'grey',
            fontSize: 14,
            alignSelf: 'center'
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