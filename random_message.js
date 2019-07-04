var funnyCaptions = ["I need a six-month holiday, twice a year.", "We tried to be normal once. Worst two minutes of our lives!", "There are 16-year-olds competing at the Olympics and some of us still push on pull doors.", "Namast'ay in bed.", "Friday ... Our second-favorite F word.", "I used to think I was indecisive, but now I am not so sure.", "What do you call a bear with no ears? EARS!", "Follow your heart, but take your brain with you.", "How do you call a pig that does karate? Pork Chop", "I am not lazy, I am just on save energy mode."];
var friendsCaptions = ["Friends buy you food. Best friends eat your food.", "Best Friends. They know how crazy you are, yet they are okay to be with you in public.", "The alphabet begins with ABC, numbers begin with 123, music begins with do-re-mi, and friendship begins with you and me.", "Normal? Normal is only the people you do not know well enough. - Matt from Hostelgeeks", "Friends don't let you do stupid things... alone!", "Friends are the people in life that make you laugh a little louder, smile a little bigger, and live just a little bit better.", "A best friend knows your weakness but shows you your strength.", "It's the friends you can call at 4 am that matters.", "A good friend is like a four-leaf clover: hard to find and lucky to have.", "Friendship is a simple recipe: 1 cup of caring, 1 cup of sharing, 2 cups of insanity."];
var songCaptions = ["I'm gonna live like tomorrow doesn't exist. -- Sia, Chandelier", "I live for the nights that I can't remember, with the people that I won't forget. -- Drake, Show Me a Good Time", "I hope you never lose your sense of wonder. -- Lee Ann Womack, I Hope You Dance", "You may say I'm a dreamer, but I'm not the only one. -- John Lennon, Imagine", "If you give, you begin to live. -Dave Matthews Band", "Outlining my findings, using life as a stencil. -- Kero One, In All the Wrong Places", "Feeling good living better. -- Drake, Over My Dead Body", "Say oh, got this feeling that you can't fight, like this city is on fire tonight -- OneRepublic, Good Life", "If I fail, if I succeed, at least I'll live as I believe -- Whitney Houston, The Greatest Love of All", "The rest of the world was in black and white, but we were in screaming color. -- Taylor Swift, Out of the Woods"];

var random = Math.floor(Math.random()*9);

let funny1 = document.getElementById('funny1');
funny1.addEventListener('click', function(){
	console.log(funnyCaptions[random]);
	document.getElementById("caption").innerHTML = funnyCaptions[random];
});
let friends1 = document.getElementById('friends1');
friends1.addEventListener('click', function(){
	console.log(friendsCaptions[random]);
	document.getElementById("caption").innerHTML = friendsCaptions[random];
});
let song1 = document.getElementById('song1');
song1.addEventListener('click', function(){
	console.log(songCaptions[random]);
	document.getElementById("caption").innerHTML = songCaptions[random];
});
