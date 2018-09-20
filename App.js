import React from 'react'
import { StyleSheet, Text, View, TextInput, Platform, StatusBar } from 'react-native'
import NewQuestionView from './components/NewQuestionView'
import NewDeckView from './components/NewDeckView'
import QuizView from './components/QuizView'
import IndividualDeckView from './components/IndividualDeckView'
import DeckListView from './components/DeckListView'
import {createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor , height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


const Tabs = createMaterialTopTabNavigator({

  DeckListView: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'Decks',
    }
  },
  NewDeckView: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    }
  }

}, {
  navigationOptions: {
    header: <Text style={{flex: 1}}>Hello</Text>,
    headerStyle: {
      backgroundColor: '#333',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#00afff' : 'white',
    style: {
      backgroundColor: Platform.OS === 'ios' ? 'black' : '#00afff',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

//Home is the built in default screen 
const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    } 
  },
  IndividualDeckView: {
    screen: IndividualDeckView,
    navigationOptions: {
      title: "Deck",
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: 'black'
      }
    } 
  },
  NewQuestionView: {
    screen: NewQuestionView,
    navigationOptions: {
      title: "New Question",
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: 'black'
      }
    } 
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      title: "Quiz",
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: 'black'
      }
    } 
  }
})


class App extends React.Component {
  render() {
    return (
    <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        <UdaciStatusBar backgroundColor={'#00afff'} barStyle="light-content" />
        <MainNavigator style={styles.container}/>
      </View>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default (App)
