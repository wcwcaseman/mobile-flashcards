import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import NewQuestionView from './components/NewQuestionView'
import NewDeckView from './components/NewDeckView'
import QuizView from './components/QuizView'
import IndividualDeckView from './components/IndividualDeckView'
import DeckListView from './components/DeckListView'


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>www</Text>
      <DeckListView></DeckListView>
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
