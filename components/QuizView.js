import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


class QuizView extends Component {

    state = { 
        cardQuestion: 'Question',
        cardAnswer: 'Answer',
        viewAnswer: true,
        cardNumber: 0,
        numberOfCards: 0,
        percentageCorrect: 0
    }

    submitCorrect = () => {
    }

    submitIncorrect = () => {
    }

  render() {
    return (
    <View>
        <Text>{this.state.cardNumber} / {this.state.numberOfCards} </Text>
        {this.state.viewAnswer === true ? <Text>{this.state.cardQuestion}</Text> : <Text>{this.state.cardAnswer}</Text>} 
        <TouchableOpacity>
        {this.state.viewAnswer === true ? <Text style={styles.smallButtonText}>Answer</Text> : <Text style={styles.smallButtonText}>Question</Text>}        
        </TouchableOpacity>
        <TouchableOpacity onPress={this.submitCorrect} style={styles.correctButton}><Text>Correct</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.submitIncorrect} style={styles.inCorrectButton}><Text>Incorrect</Text></TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    correctButton: {
        backgroundColor:'green'
    },
    inCorrectButton: {
        backgroundColor:'red'
    },
    smallButtonText: {
        textAlign:'center',
        color:'red',
    }
  })
  

export default (QuizView)