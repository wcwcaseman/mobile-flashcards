import React from 'react'
import { StyleSheet, Text, View, TextInput, Platform, StatusBar } from 'react-native'
import NewQuestionView from './components/NewQuestionView'
import NewDeckView from './components/NewDeckView'
import QuizView from './components/QuizView'
import IndividualDeckView from './components/IndividualDeckView'
import DeckListView from './components/DeckListView'
import {createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { Constants } from 'expo'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor , height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


const Tabs = createMaterialTopTabNavigator({
  NewDeckView: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: 'NewDeckView',
    },
  },
  DeckListView: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'DeckListView',
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
    activeTintColor: Platform.OS === 'ios' ? 'purple' : 'red',
    style: {
      backgroundColor: Platform.OS === 'ios' ? 'red' : 'purple',
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

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    } 
  },


})



class App extends React.Component {
  render() {
    return (
    <View style={{flex: 1}}>
      <UdaciStatusBar backgroundColor={'purple'} barStyle="light-content" />
      <MainNavigator style={styles.container}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default (App)
