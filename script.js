var storyBtn = document.getElementById('generate-story-button');
var storyContainer = document.getElementById('story-container');
var wordInputEl = document.getElementsByClassName('word-type-select').value; 

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

function getUserWords() {
  return {
    nouns: getUserWordsForType('nouns'),
    verbs: getUserWordsForType('verbs'),
    adjectives: getUserWordsForType('adjectives'),
    adverbs: getUserWordsForType('adverbs')
  }
}


function getBackupWords(userWords) {
  // add random word while length of arr is less than 4
  while (userWords.nouns.length < 4) {
    var randomBackupWord = getRandEl(backupWords.nouns);
    userWords.nouns.push(randomBackupWord);
  }
  
  while (userWords.verbs.length < 4) {
    var randomBackupWord = getRandEl(backupWords.verbs);
    userWords.verbs.push(randomBackupWord);
  }
  
  while (userWords.adjectives.length < 4) {
    var randomBackupWord = getRandEl(backupWords.adjectives);
    userWords.adjectives.push(randomBackupWord);
  }
  
  while (userWords.adverbs.length < 4) {
    var randomBackupWord = getRandEl(backupWords.adverbs);
    userWords.adverbs.push(randomBackupWord);
  }
  return userWords;
}


function getRandEl(arr) {
  return arr[getRandNum(0, arr.length - 1)];
}

function randFilteredElem(arr, filter) {
  var randEl = getRandEl(arr);
  while (randEl === filter) {
    randEl = getRandEl(arr);
  }
  return randEl;
}

function getRandNum(min,max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getStory() {
  var isChristmas = document.getElementById('go-christmas').checked;
  var isShopping = document.getElementById('go-shopping').checked;
  var isBrainstorm = document.getElementById('go-brainstorm').checked;
  
  if (isChristmas) {
    return stories.christmas;
  } else if (isShopping) {
    return stories.shopping;
  } else if (isBrainstorm) {
    return stories.brainstorm;
  }
}

// get an array of words entered by user for this word type
function getUserWordsForType(wordType) {
  var rawStrInput = document.getElementById(wordType).value;
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
