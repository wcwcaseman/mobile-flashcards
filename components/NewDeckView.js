import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'

//Once the new deck is submited route to the IndividualDeckView

class NewDeckView extends Component {
  state = { 
    title: '',
    validTitle: false,
    showValidationMessages: false
};

submit = () => {

  if(this.state.validTitle === true){
  const title = this.state.title

  // Update Redux
  this.props.dispatch(addDeck(
    {
      title: title,
      questions: []  
    }))

  //reset state
  this.setState(() => ({ title: '', validTitle: false, showValidationMessages: false }))

  // Navigate to home
  this.props.navigation.navigate('IndividualDeckView', {title: title});
  try{
    // Save to "DB"
    saveDeckTitle({
      title: title,
      questions: []  
    })
  }catch(e){}

  }else{
    this.setState(() => ({ showValidationMessages: true}))
  }


}

titleChange = (title) => {
  this.setState({title})
  if(title){
      this.setState({validTitle: true}) 
  }else{
      this.setState({validTitle: false}) 
  }
}



  render() {
    return (
    <View style={styles.container} >
          <Text style={styles.titleLarge}>What is the title of your new deck?</Text>
          <TextInput
          style={styles.textInput}
          onChangeText={this.titleChange}
          value={this.state.title}
          />
    {(this.state.validTitle === false && this.state.showValidationMessages === true) ? <Text style={styles.errorText}>Please enter a title</Text> : <View></View>}
        <TouchableOpacity style={styles.button} onPress={this.submit}>
            <Text style={styles.buttonText}>Create Deck</Text>
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
titleLarge:{
  fontSize: 40,
  fontWeight: 'bold',
  alignSelf: 'center'
},
  textInput: 
  {
      height: 45,
      borderColor: 'gray',
      borderWidth: 1,
      margin:20,
      padding: 10,
      borderRadius:10
  },
  button: {
    backgroundColor:'black',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    margin: 20,
    height: 45,
    borderRadius: 10,
    alignSelf: 'center'
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


export default connect()(NewDeckView)