import React, { Component } from 'react';
import { TextInput,View,Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { addQuestion } from '../actions'
import { addCardToDeck } from '../utils/api'

class NewQuestionView extends Component {

    state = { 
        question: '',
        answer: '' 
    };

    submit = () => {

        // Update Redux
        this.props.dispatch(addQuestion(
          {
            question: this.state.question,
            answer: this.state.answer,
            title: this.props.navigation.getParam('title')  
          }))
      
        // Save to "DB"
        addCardToDeck(
            { 
                question: this.state.question,
                answer: this.state.answer,
                title: this.props.navigation.getParam('title')
            }
        )

        //reset state
        this.setState(() => ({ question: '', answer: '' }))

        // Navigate to home
        this.props.navigation.navigate('IndividualDeckView', {title: this.props.navigation.getParam('title')});
      

      }
  
  render() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Question</Text>
        <TextInput
            style={styles.textInput}
            onChangeText={(question) => this.setState({question})}
            value={this.state.question}
        />
        <Text style={styles.text}>Answer</Text>
        <TextInput
            style={styles.textInput}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
        />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={this.submit} >Submit</Text>
        </TouchableOpacity>
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
    textInput: 
    {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin:5,
        marginTop:10,
        marginBottom:20,
        borderRadius:10
    },
    button: {
        backgroundColor:'black',
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 10,
        height: 45,
        borderRadius: 10,
        alignSelf: 'center',
      },
    buttonText: {
        textAlign:'center',
        color:'white',
    },
    text: {
        textAlign:'center',
    }
  })



export default connect()(NewQuestionView) 