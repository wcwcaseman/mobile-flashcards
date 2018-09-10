import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'


class QuizView extends Component {

    state = { 
        cardQuestion: 'Question',
        cardAnswer: 'Answer',
        viewAnswer: true,
        cardNumber: 0,
        percentageCorrect: 0
    }

    submitCorrect = () => {
    }

    submitIncorrect = () => {
    }

    flipCard = () => {
        this.setState(() => ({ viewAnswer:  this.state.viewAnswer === true ? false : true }))    
    }

  render() {

    const {deck, numberOfCards} = this.props
    return (
    <View>
        <Text>{this.state.cardNumber} / {numberOfCards} </Text>
        {this.state.viewAnswer === true ? <Text>{this.state.cardQuestion}</Text> : <Text>{this.state.cardAnswer}</Text>} 
        <TouchableOpacity onPress={this.flipCard}>
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
  

  function mapStateToProps ({ decks }, props) {
    debugger
        const title = props.navigation.getParam('title')
        const deck = decks[title];
        const numberOfCards = deck.questions.length
    
        return {
            deck: deck,
            numberOfCards: numberOfCards
        }
      }
    
      export default connect(mapStateToProps)(QuizView)