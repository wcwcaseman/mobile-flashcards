import { AsyncStorage } from 'react-native'
export const DECK_STORAGE_KEY = 'MobileFlashCards:Decks'

 //return all of the decks along with their titles, questions, and answers.
export function getDecks () {
    return AsyncStorage.getItem(DECK_STORAGE_KEY);
}
 
// take in a single id argument and return the deck associated with that id. 
export function getDeck (id) {
    return AsyncStorage.getItem(id);
}

// take in a single title argument and add it to the decks. 
export function saveDeckTitle (title) {
    return AsyncStorage.setItem(DECK_STORAGE_KEY,title);
}

// take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 
export function addCardToDeck (title, card) {

    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [title]: card
      }))
}