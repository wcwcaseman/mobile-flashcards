import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


class QuizView extends Component {

    state = { 
        cardQuestion: '',
        viewAnswer: true
    }

  render() {
    return (
    <View>
        <Text>cardQuestion</Text>
        <TouchableOpacity>
        {this.state.viewAnswer === true ? <Text style={styles.smallButtonText}>Answer</Text> : <Text style={styles.smallButtonText}>Question</Text>}        
        </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    textInput: 
    {
        height: 40,
        width: 100,
        borderColor: 'gray',
        borderWidth: 1,
        margin:5,
        borderRadius:10
    },
    button: {
        backgroundColor:'blue'
      },
    smallButtonText: {
        textAlign:'center',
        color:'red',
    },
    text: {
        textAlign:'center',
    }
  })
  

export default (QuizView)