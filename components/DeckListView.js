import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


class DeckListView extends Component {

    state = { 
        decks: []
    }


    render() {
        return (
        <View>
        {this.state.decks.map((deck) => {        
            <View>
            <Text style={styles.deckNameText} >{deck.deckName}</Text>
            <Text>{deck.numberOfCards} cards</Text>
            </View>
            })}
        </View> 
        );
      }
    }

    
    const styles = StyleSheet.create({
        deckNameText: {
            fontWeight: 'bold',
            fontSize: 30,
        }
      })
      
    

  


export default (DeckListView)