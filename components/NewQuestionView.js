import React, { Component } from 'react';
import { TextInput,View,Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { addQuestion } from '../actions'
import { addCardToDeck } from '../utils/api'

class NewQuestionView extends Component {

    state = { 
        question: '',
        answer: '',
        validQuestion: false,
        validAnswer: false,
        showValidationMessages: false
    };

    submit = () => {

        if(this.state.validQuestion === true && this.state.validAnswer === true){
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
        this.setState(() => ({ 
            question: '',
            answer: '',
            validQuestion: false,
            validAnswer: false,
            showValidationMessages: false 
    }))

        // Navigate to home
        this.props.navigation.navigate('IndividualDeckView', {title: this.props.navigation.getParam('title')});
        }else{
            this.setState(() => ({ showValidationMessages: true}))
        }

      }

      questionTextChanged = (question) => {
        this.setState({question})
        if(question){
            this.setState({validQuestion: true}) 
        }else{
            this.setState({validQuestion: false}) 
        }
      }

      answerTextChanged = (answer) => {
        this.setState({answer})
        if(answer){
            this.setState({validAnswer: true}) 
        }else{
            this.setState({validAnswer: false}) 
        }
      }
  
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.inputContainer} >
            <Text style={styles.text}>Question</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={this.questionTextChanged}
                value={this.state.question}
            />
            {(this.state.validQuestion === false && this.state.showValidationMessages === true) ? <Text style={styles.errorText}>Please enter a question</Text> : <View></View>} 
        </View>
        <View style={styles.inputContainer} >
            <Text style={styles.text}>Answer</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={this.answerTextChanged}
                value={this.state.answer}
            />
            {(this.state.validAnswer === false && this.state.showValidationMessages === true) ? <Text style={styles.errorText}>Please enter an answer</Text> : <View></View>}
        </View>
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
    inputContainer:{
        marginBottom:20
    },
    textInput: 
    {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin:5,
        marginTop:10,
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
    },
    errorText:{
        color: 'red'
    }
  })



export default connect()(NewQuestionView) 