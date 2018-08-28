import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import NewQuestionView from './components/NewQuestionView'
import NewDeckView from './components/NewDeckView'


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>wwe</Text>
      <NewDeckView></NewDeckView>
      <NewQuestionView></NewQuestionView>

      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default (App)
