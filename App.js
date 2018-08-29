import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import NewQuestionView from './components/NewQuestionView'
import NewDeckView from './components/NewDeckView'
import QuizView from './components/QuizView'


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>wwexxxwcwAWAecwawaaaaaaaaaaa</Text>
      <QuizView></QuizView>
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
