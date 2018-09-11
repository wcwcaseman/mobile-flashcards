import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'


class IndividualDeckView extends Component {

    submitAddCard = () => {

        //Navigate to the Add card view/ New question view... need to pass in what deck
        this.props.navigation.navigate('NewQuestionView',{title : this.props.navigation.getParam('title')});

    }

    submitStartQuiz = () => {
        ///need to pass in what deck
        this.props.navigation.navigate('QuizView', { title: this.props.navigation.getParam('title')});
    }

    homePage = () => {
        this.props.navigation.navigate('DeckListView');
    }


    render() {

    /* 2. Get the param, provide a fallback value if not available */
    const {deck, numberOfCards} = this.props

        return (
        <View>
            <Text>{deck.title}</Text>
            <Text>{numberOfCards} cards</Text>
            <TouchableOpacity onPress={this.submitAddCard} style={styles.addCardButton}><Text>Add Card</Text></TouchableOpacity>
            <TouchableOpacity onPress={this.submitStartQuiz} style={styles.startQuizButton}><Text style={styles.startQuizButtonText} >Start Quiz</Text></TouchableOpacity>
            <Text>Go back to main page</Text>
            <TouchableOpacity onPress={this.homePage} ><Text>Home Page</Text></TouchableOpacity>
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
  
  function mapStateToProps ({ decks }, props) {

    const title = props.navigation.getParam('title')
    const deck = decks[title];
    const numberOfCards = deck.questions.length

    return {
        deck: deck,
        numberOfCards: numberOfCards
    }
  }

  export default connect(mapStateToProps)(IndividualDeckView)



      
