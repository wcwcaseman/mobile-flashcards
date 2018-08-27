import React, { Component } from 'react';
import { TextInput,View,Text, TouchableOpacity, StyleSheet } from 'react-native';

class NewQuestionView extends Component {

    state = { 
        question: '',
        answer: '' 
    };
  
  render() {
    return (
    <View>
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
            <Text style={styles.buttonText}>Submit</Text>
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
    buttonText: {
        textAlign:'center',
        color:'white',
    },
    text: {
        textAlign:'center',
    }
  })



export default (NewQuestionView) 