var storyBtn = document.getElementById('generate-story-button');
var storyBox = document.getElementById('story-container');
var wordInput = document.getElementsByClassName('word-type-select');
var nounList = document.getElementById('nouns').value; 
var words = [];

storyBtn.addEventListener('click', storyHandler);

function storyHandler() {
  words.push(nounList);
  var wordsArray = nounList.split(',');
  console.log(wordsArray);
}
