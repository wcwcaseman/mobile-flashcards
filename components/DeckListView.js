import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'



class DeckListView extends Component {

    render() {
        return (
        <View>
            <Text>Toast the world</Text>
        {this.props.Decks.map((deck) => {        

                <Text key={deck} >item</Text>
{/*             <Text style={styles.deckNameText} >{deck.title}</Text>
            <Text>{deck.numberOfCards} cards</Text> */}

            })}
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


      //takes in questions state and returns question ids sorted by timestamp?
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