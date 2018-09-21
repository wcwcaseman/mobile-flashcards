import {Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'

const NOTIFICATION_KEY = 'MobileFlashCards:Notifications'


//Create a Notification object
  function createNotification () {
    return {
      title: "Hey!",
      body: "You haven't completed a quiz today",
      ios: {
        sound: true,
      },
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true,
      }
    }
  }

  export function setLocalNotification () {

    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {

       //   only try to set if notification hasn't already been set
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
                //If we have permission to show notifications then we can show it
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()//make sure we are doing duplicate notifications
  
                let today = new Date()
                today.setDate(today.getDate())
                today.setHours(20)
                today.setMinutes(12)
                
                //pass in the Notification object and the date object
                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: today,
                    repeat: 'day',
                  }
                )
                
                //Save that we set up the notification to local storage
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }
            })
        }
      })
  }

  //Remove local storage save of notification object then clear the actual notification
  export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }
  
