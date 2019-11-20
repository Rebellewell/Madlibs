var storyBtn = document.getElementById('generate-story-button');
var storyContainer = document.getElementById('story-container');
var nounInputEl = document.getElementById('nouns'); 

storyBtn.addEventListener('click', storyHandler);

function storyHandler() {
  var userWords = getUserWords();
  console.log(userWords);


// fill remaining space with backup words to get final owrds

// grab the appropriate story string

// fill the story string with our final words
  var finalWords = getUserWords();  
    
    // nouns: ['NOUN','NOUN','NOUN','NOUN'],
    // verbs: ['VERB','VERB','VERB','VERB'],
    // adjectives: ['ADJECTIVE','ADJECTIVE','ADJECTIVE','ADJECTIVE'],
    // adverbs: ['ADVERB','ADVERB','ADVERB','ADVERB']
  
  
  var finalStory = getFilledStory(stories.christmas, finalWords);

// show final story (filled out) in the DOM
  displayStory(finalStory);
}

function getUserWords() {
  return {
    nouns: getUserWordsForType('nouns'),
    verbs: getUserWordsForType('verbs'),
    adjectives: getUserWordsForType('adjectives'),
    adverbs: getUserWordsForType('adverbs')
  }
}

// function getStory() {
//   var isChristmas = document.getElementById('go-christmas').checked;
//   var isShopping = document.getElementById('go-shopping').checked;
//   var isBrainstorm = document.getElementById('go-brainstorm').checked;
  
//   if (isChristmas) {
//     return stories.christmas;
//   } else if (isShopping) {
//     return stories.shopping;
//   } else if (isBrainstorm) {
//     return stories.brainstorm;
//   }

// get an array of words entered by user for this word type
function getUserWordsForType(wordType) {
  var rawStrInput = document.getElementById(wordType).value;
  var inputWords = rawStrInput.split(',');
  return inputWords;
}

// dispaly chosen story in DOM

function displayStory(storyStr) {
  storyContainer.innerText = storyStr;
}

// returns a new version of the story where ll the word spaces are filled in
function getFilledStory(storyStr, finalWords) {
  for (var i = 0; i < 4; i++) {
    storyStr = storyStr.replace('{{noun}}', finalWords.nouns[i]);
    storyStr = storyStr.replace('{{verb}}', finalWords.verbs[i]);
    storyStr = storyStr.replace('{{adjective}}', finalWords.adjectives[i]);
    storyStr = storyStr.replace('{{adverb}}', finalWords.adverbs[i]);
  }
  return storyStr;
}
