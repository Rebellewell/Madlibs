var storyBtn = document.getElementById('generate-story-button');
var storyBox = document.getElementById('story-container');
var wordInput = document.getElementsByClassName('word-type-select');
var nounInput = document.getElementById('nouns'); 
var words = [];

storyBtn.addEventListener('click', storyHandler);

function storyHandler() {
  console.log(nounInput.value)
}
