import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


class IndividualDeckView extends Component {

    state = { 
        deckName: 'deckName',
        numberOfCards: 0
    }

    render() {
        return (
        <View>
            <Text>{this.state.deckName}</Text>
            <Text>{this.state.numberOfCards} cards</Text>
            <TouchableOpacity style={styles.addCardButton}><Text>Add Card</Text></TouchableOpacity>
            <TouchableOpacity style={styles.startQuizButton}><Text style={styles.startQuizButtonText} >Start Quiz</Text></TouchableOpacity>
        </View>
        );
      }
    }
    

const styles = StyleSheet.create({
    addCardButton: {
        backgroundColor:'white'
    },
    startQuizButton: {
        backgroundColor:'black'
    },
    startQuizButtonText: {
        color:'white'
    }
  })
  


export default (IndividualDeckView)