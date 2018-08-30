import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


//Once the new deck is submited route to the IndividualDeckView

class NewDeckView extends Component {
  state = { 
    title: ''
};



submit = () => {

  // Update Redux
  //this.props.dispatch(addDeck(this.state.title))

  //reset state
  //this.setState(() => ({ title: '' }))

  // Navigate to home
  this.props.navigation.navigate('IndividualDeckView', {title: this.state.title});

  // Save to "DB"
   // submitEntry({ key, entry })
}

  render() {
    return (
    <View>
          <Text>What is the title of your new deck?</Text>
          <TextInput
          style={styles.textInput}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
          />
        <TouchableOpacity style={styles.button} onPress={this.submit}>
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


export default (NewDeckView)