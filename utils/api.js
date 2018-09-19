import { AsyncStorage } from 'react-native'
export const DECK_STORAGE_KEY = 'MobileFlashCards:Decks'

 //return all of the decks along with their titles, questions, and answers.
export function getDecks () {
    var x = AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) =>  
    {
    return JSON.parse(results)
    }).catch((e) => {});
    return x;
}
 
// take in a single id argument and return the deck associated with that id. 
export function getDeck (id) {
    return AsyncStorage.getItem(id);
}

// take in a single title argument and add it to the decks. 
export function saveDeck (deck) {
    return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify({[deck.title]: deck}));
}

// Will add the card to the list of questions for the deck with the associated title. 
export function addCardToDeck( cardInfo ) {
    //Getting all data, to get questions list back
	return AsyncStorage.getItem(DECK_STORAGE_KEY, (error,results) => {

        //Get Existing Questions 
        let questions = JSON.parse(results)[cardInfo.title].questions
        
        //Add new question card
		questions.push({
            question: cardInfo.question,
            answer: cardInfo.answer
        })

        //Merge new question list onto exisiting Deck
		AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({[cardInfo.title]: { title: cardInfo.title, questions: questions }}) )
	})
}