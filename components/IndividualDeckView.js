import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


class IndividualDeckView extends Component {

    state = { 
        deckName: 'deckName',
        numberOfCards: 0
    }

    submitAddCard = () => {

        //Navigate to the New card view/ New question view... need to pass in what deck
        this.props.navigation.navigate('NewQuestionView');

    }

    submitStartQuiz = () => {
        ///need to pass in what deck
        this.props.navigation.navigate('QuizView');
    }


    render() {

    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const title = navigation.getParam('title')



        return (
        <View>
            <Text>{title}</Text>
            <Text>{this.state.numberOfCards} cards</Text>
            <TouchableOpacity onPress={this.submitAddCard} style={styles.addCardButton}><Text>Add Card</Text></TouchableOpacity>
            <TouchableOpacity onPress={this.submitStartQuiz} style={styles.startQuizButton}><Text style={styles.startQuizButtonText} >Start Quiz</Text></TouchableOpacity>
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