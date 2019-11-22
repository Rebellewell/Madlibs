var storyBtn = document.getElementById('generate-story-button');
var storyContainer = document.getElementById('story-container');

storyBtn.addEventListener('click', storyHandler);

function storyHandler() {
  var userWords = getUserWords();
  console.log(userWords);

// fill remaining space with backup words to get final owrds
  var finalWords = getBackupWords(userWords);

// grab the appropriate story string
  var storyText = getStory();
  
// get the final story with words inputted
  var finalStory = getFilledStory(storyText, finalWords);

// show final story (filled out) in the DOM
  displayStory(finalStory);
}

// returns OBJECT with key and value(funtion getUserWordsForType())
function getUserWords() {
  return {
    nouns: getUserWordsForType('nouns'),
    verbs: getUserWordsForType('verbs'),
    adjectives: getUserWordsForType('adjectives'),
    adverbs: getUserWordsForType('adverbs')
  }
} // returns object with key and value containing array of user input words

function getBackupWords(userWords) {
  // add random word while length of arr is less than 4
  // looping over each word type (i.e. nouns, verbs,etc.)
  for (var wordType in userWords) {
    // adding backup words as necessary to our list of this type of word
    while (userWords[wordType].length < 4) {
      var randomBackupWord = getRandFilteredElem(backupWords[wordType], userWords[wordType]);
      userWords[wordType].push(randomBackupWord);
    }
  }
  return userWords;
}

function getRandEl(arr) {
  return arr[getRandNum(0, arr.length - 1)];
}

function getRandFilteredElem(arr, filter) {
  var randEl = getRandEl(arr);
  while (filter.includes(randEl)) {
    randEl = getRandEl(arr);
  }
  return randEl;
}

function getRandNum(min,max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getStory() {
  var selectedStory = document.querySelector('#button-container input:checked').value;
  return stories[selectedStory];
}

// get an array of words entered by user for this word type
function getUserWordsForType(wordType) {
  var rawStrInput = document.getElementById(wordType).value; //wordType is the parameter that refers back to getUserWords function above
  var inputWords = rawStrInput.split(',');
  if (rawStrInput === '') {
    return [];
  }
  return inputWords;
}

// dispaly chosen story in DOM
function displayStory(storyStr) {
  storyContainer.innerText = storyStr;
}

// returns a new version of the story where all the word spaces are filled in
function getFilledStory(storyStr, finalWords) {
  for (var i = 0; i < 4; i++) {
    storyStr = storyStr.replace('{{noun}}', finalWords.nouns[i]);
    storyStr = storyStr.replace('{{verb}}', finalWords.verbs[i]);
    storyStr = storyStr.replace('{{adjective}}', finalWords.adjectives[i]);
    storyStr = storyStr.replace('{{adverb}}', finalWords.adverbs[i]);
  }
  return storyStr;
}
