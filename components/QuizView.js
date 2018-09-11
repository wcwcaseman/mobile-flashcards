import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'



class QuizView extends Component {

    state = { 
        viewAnswer: true,
        takingQuiz: true,
        cardIndex: 0,
        numberCorrect: 0
    }

    submitCorrect = () => {
        this.setState((state) => ({ numberCorrect: state.numberCorrect + 1 }))   
        this.moveToNextCard()
    }

    submitIncorrect = () => {
        this.moveToNextCard()
    }

    moveToNextCard = () => {
        
        if(this.state.cardIndex < this.props.deck.questions - 1)
        { 
            this.setState((state) => ({ cardIndex: state.cardIndex + 1 }))
        }
        else{
            this.setState(() => ({ takingQuiz: false })) 
        }
    }

    flipCard = () => {
        this.setState(() => ({ viewAnswer:  this.state.viewAnswer === true ? false : true }))    
    }

    submitRestartQuiz = () => {
        this.setState(() => ({ 
            cardIndex: 0,
            numberCorrect: 0,
            viewAnswer: true,
            takingQuiz: true,     
        }))
    }

    submitEditDeck = () => {
        this.props.navigation.navigate('IndividualDeckView', {title: this.props.navigation.getParam('title')});
    }

  render() {
    const {deck, numberOfCards} = this.props

    if(deck.questions.length > 0){
    
   view = <View>       
        <Text>{this.state.cardIndex + 1} / {numberOfCards} </Text>

{
     this.state.takingQuiz === true ?
    <View>
        {this.state.viewAnswer === true ? <Text>{deck.questions[this.state.cardIndex].question}</Text> : <Text>{deck.questions[this.state.cardIndex].answer}</Text>} 
        <TouchableOpacity onPress={this.flipCard}>
        {this.state.viewAnswer === true ? <Text style={styles.smallButtonText}>Answer</Text> : <Text style={styles.smallButtonText}>Question</Text>}        
        </TouchableOpacity>
        <TouchableOpacity onPress={this.submitCorrect} style={styles.correctButton}><Text>Correct</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.submitIncorrect} style={styles.inCorrectButton}><Text>Incorrect</Text></TouchableOpacity>
     </View>
: 
    <View>
        <Text>Score</Text>
        <Text>{this.state.numberCorrect/(this.state.cardIndex + 1) * 100} % Correct</Text>
        <TouchableOpacity onPress={this.submitRestartQuiz} style={styles.restartQuizButton}><Text>Restart Quiz</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.submitEditDeck} style={styles.editDeck}><Text>Edit Deck</Text></TouchableOpacity>
    </View>
}
   </View>
}else{
    view = <View>
            <Text>You must add cards to your deck before you start your quiz</Text>
            <TouchableOpacity onPress={this.submitEditDeck} style={styles.editDeck}><Text>Edit Deck</Text></TouchableOpacity>
        </View>

}

return (view)

  }
}

const styles = StyleSheet.create({
    correctButton: {
        backgroundColor:'green'
    },
    inCorrectButton: {
        backgroundColor:'red'
    },
    restartQuizButton: {
        backgroundColor:'black'
    },
    editDeck: {
        backgroundColor:'blue'
    },
    smallButtonText: {
        textAlign:'center',
        color:'red',
    }
  })
  

  function mapStateToProps ({ decks }, props) {

        const title = props.navigation.getParam('title')
        const deck = decks[title];
        const numberOfCards = deck.questions.length
    
        return {
            deck: deck,
            numberOfCards: numberOfCards
        }
      }
    
      export default connect(mapStateToProps)(QuizView)