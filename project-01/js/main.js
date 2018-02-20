
function quizSubmit() {

/* The first variable I want to define is the userScore variable which will be reporting the user's imput by increasing by ten points per each correct answer. */

var userScore = 1;
// Question variables 
var choiceAspect = document.querySelector("input[name='aspect']:checked").value;

var choiceLeader = document.querySelector("input[name='leader']:checked").value;

var choiceHome = document.querySelector("input[name='home']:checked").value;

var choiceSister = document.querySelector("input[name='sister']:checked").value;

var choiceRace = document.querySelector("input[name='race']:checked").value;

var choicePanda = document.querySelector("input[name='panda']:checked").value;

var choiceGod = document.querySelector("input[name='god']:checked").value;

var choiceYears = document.querySelector("input[name='years']:checked").value;

var choiceClan = document.querySelector("input[name='clan']:checked").value;

var choiceFaction = document.querySelector("input[name='faction']:checked").value;


// 1
	if(choiceAspect == 3){
		document.querySelector(".user-total").innerHTML = userScore++;
	}
	else {
	document.querySelector(".user-total").innerHTML = userScore;
	}

// 2
	if(choiceLeader == 5){
		document.querySelector(".user-total").innerHTML = userScore++;
	}
	else {
	document.querySelector(".user-total").innerHTML = userScore;
	}

// 3
	if(choiceHome == 8){
		document.querySelector(".user-total").innerHTML = userScore++;
	}
	else {
	document.querySelector(".user-total").innerHTML = userScore;
	}

// 4
	if(choiceSister == 15){
		document.querySelector(".user-total").innerHTML = userScore++;
	}
	else {
	document.querySelector(".user-total").innerHTML = userScore;
	}

// 5
	if(choiceRace == 17){
		document.querySelector(".user-total").innerHTML = userScore++;
	}
	else {
	document.querySelector(".user-total").innerHTML = userScore;
	}

// 6
	if(choicePanda == 23){
		document.querySelector(".user-total").innerHTML = userScore++;
	}
	else {
	document.querySelector(".user-total").innerHTML = userScore;
	}

// 7
	if(choiceGod == 24){
		document.querySelector(".user-total").innerHTML = userScore++;
	}
	else {
	document.querySelector(".user-total").innerHTML = userScore;
	}

// 8
	if(choiceYears == 31){
		document.querySelector(".user-total").innerHTML = userScore++;
	}
	else {
	document.querySelector(".user-total").innerHTML = userScore;
	}

// 9
	if(choiceClan == 32){
		document.querySelector(".user-total").innerHTML = userScore++;
	}
	else {
	document.querySelector(".user-total").innerHTML = userScore;
	}

// 10
	if(choiceFaction == 36){
		document.querySelector(".user-total").innerHTML = userScore++;
	}
	else {
	document.querySelector(".user-total").innerHTML = userScore++;
	}

/* Here I set the total percentages and messages for each score bracket as well as custom images depending on userScore. */
if(userScore == 11){
		document.querySelector(".total-percentage").innerHTML = "Congrats! 100%" + '<br><br><img src="http://icons.iconarchive.com/icons/calle/black-knight/32/Swords-Shield-BK-icon.png">' + '<br> You have unlocked the <span style="color:#ffb600">[Loremaster]</span> achievement!' + '<p><a href="?reload=1#" onClick="history.go(0)">Try it Again</a></p>';
	}
else if(userScore == 10){
		document.querySelector(".total-percentage").innerHTML = "Nice job, 90%"+ '<br><br><img src="http://icons.iconarchive.com/icons/calle/black-knight/32/Sword-Shield-BK-icon.png">' + '<p><a href="?reload=1#" onClick="history.go(0)">Try it Again</a></p>';
	}
else if(userScore == 9){
		document.querySelector(".total-percentage").innerHTML = "Not bad, 80%"+ '<br><br><img src="http://icons.iconarchive.com/icons/calle/black-knight/32/Sword-Right-icon.png">' + '<p><a href="?reload=1#" onClick="history.go(0)">Try it Again</a></p>';
	}
else if(userScore == 8){
		document.querySelector(".total-percentage").innerHTML = "Passing, 70%"+ '<br><br><img src="http://icons.iconarchive.com/icons/calle/black-knight/32/Baron-Carls-shield-icon.png">' + '<p><a href="?reload=1#" onClick="history.go(0)">Try it Again</a></p>';
	}
else {
	document.querySelector(".total-percentage").innerHTML = "Not adequate" + '<p><a href="?reload=1#" onClick="history.go(0)">Try it Again</a></p>';
	// I added this link here to refresh and reset the page if the userScore is below 60% correct. I also went ahead and applied it to all the answers so the user may reset the checked boxes with any score.
	}

}
