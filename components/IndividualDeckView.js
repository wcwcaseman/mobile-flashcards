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

    render() {

    /* 2. Get the param, provide a fallback value if not available */
    const {deck, numberOfCards} = this.props

        return (
        <View style={styles.container}>
            <Text style={styles.title} >{deck.title}</Text>
            <Text style={styles.subTitle} >{numberOfCards} cards</Text>
            <View>
                <TouchableOpacity onPress={this.submitAddCard} style={styles.addCardButton}><Text>Add Card</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.submitStartQuiz} style={styles.startQuizButton}><Text style={styles.startQuizButtonText} >Start Quiz</Text></TouchableOpacity>
            </View>
        </View>
        );
      }
    }
    

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column', //the default direction
        padding: 20,
        margin: 10,
        alignItems: 'stretch',
        //justifyContent: 'center',

    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    subTitle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'grey'
    },
    addCardButton: {
        backgroundColor:'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 10,
        height: 45,
        borderRadius: 10,
        alignSelf: 'center'
    },
    startQuizButton: {
        backgroundColor:'black',
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 10,
        height: 45,
        borderRadius: 10,
        alignSelf: 'center'
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



      
