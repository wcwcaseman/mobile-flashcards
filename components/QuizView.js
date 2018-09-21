import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'



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
        if(this.state.cardIndex < this.props.deck.questions.length - 1)
        { 
            this.setState((state) => ({ cardIndex: state.cardIndex + 1 }))
        }

        //Quiz is completed, navigate to score and set clear take quiz notification
        if(this.state.cardIndex == this.props.deck.questions.length - 1)
        {
            this.setState(() => ({ takingQuiz: false }))
            clearLocalNotification()
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
    
   view = <View style={styles.container} >       
        <Text style={styles.cardPosition} >{this.state.cardIndex + 1} / {numberOfCards} </Text>

{
     this.state.takingQuiz === true ?
    <View>
        {this.state.viewAnswer === true ? <Text style={styles.titleLarge} >{deck.questions[this.state.cardIndex].question}</Text> : <Text style={styles.titleLarge} >{deck.questions[this.state.cardIndex].answer}</Text>} 
        <TouchableOpacity onPress={this.flipCard}>
        {this.state.viewAnswer === true ? <Text style={styles.smallButtonText}>Answer</Text> : <Text style={styles.smallButtonText}>Question</Text>}        
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.submitCorrect} style={styles.correctButton}><Text style={styles.buttonText}>Correct</Text></TouchableOpacity>
            <TouchableOpacity onPress={this.submitIncorrect} style={styles.inCorrectButton}><Text style={styles.buttonText}>Incorrect</Text></TouchableOpacity>
        </View>
     </View>
: 
    <View>
        <Text style={styles.scoreHeader} >Score</Text>
        <Text style={styles.scoreText} >{this.state.numberCorrect/(this.state.cardIndex + 1) * 100} % Correct</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.submitRestartQuiz} style={styles.restartQuizButton}><Text style={styles.buttonText}>Restart Quiz</Text></TouchableOpacity>
            <TouchableOpacity onPress={this.submitEditDeck} style={styles.editDeck}><Text style={styles.buttonText}>Back to Deck</Text></TouchableOpacity>
        </View>
    </View>
}
   </View>
}else{
    view = <View style={styles.container} >
            <Text style={styles.titleMedium} >You must add cards to your deck before you start your quiz</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={this.submitEditDeck} style={styles.editDeck}><Text style={styles.buttonText}>Back to Deck</Text></TouchableOpacity>
            </View>
        </View>

}

return (view)

  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column', //the default direction
        padding: 10,
        margin: 10,
        alignItems: 'stretch',
        //justifyContent: 'center',

    },
    titleLarge:{
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center'
      },
      titleMedium:{
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
      },
        buttonContainer:{
            alignSelf: 'center'
        },
    correctButton: {
        backgroundColor:'green',
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 20,
        height: 45,
        borderRadius: 10,

    },
    inCorrectButton: {
        backgroundColor:'red',
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 20,
        height: 45,
        borderRadius: 10,

    },
    restartQuizButton: {
        backgroundColor:'black',
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 20,
        height: 45,
        borderRadius: 10,
    },
    editDeck: {
        backgroundColor:'blue',
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 20,
        height: 45,
        borderRadius: 10,
    },
    buttonText: {
        textAlign:'center',
        color:'white',
    },
    smallButtonText: {
        textAlign:'center',
        color:'red',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
    },
    cardPosition: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 5,
        marginBottom: 20
    },
    scoreHeader:{
        marginLeft: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },
    scoreText:{
        marginLeft: 5,
        fontSize: 20,
        marginBottom: 20
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