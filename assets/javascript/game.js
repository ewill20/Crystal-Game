$( document ).ready(function(){
	var Random=Math.floor(Math.random()*101+19);
	console.log(Random);



	$("span#randomnumber").text(Random);


	var Red = Math.floor(Math.random()*11+1);
	var Yellow = Math.floor(Math.random()*11+1);
	var Green = Math.floor(Math.random()*11+1);
	var Blue = Math.floor(Math.random()*11+1);


	var totalScore = 0;
	var wins = 0;
	var losses = 0;


	$("#wins").text(wins);
	$("#losses").text(losses);

	// Resets the game after a win or loss //
	function reset() {
		Random = Math.floor(Math.random()*101+19);
		console.log(Random)
		$("#randomnumber").text(Random);
		Red = Math.floor(Math.random()*11+1);
		Yellow = Math.floor(Math.random()*11+1);
		Green = Math.floor(Math.random()*11+1);
		Blue = Math.floor(Math.random()*11+1);
		totalScore = 0;
		$("span#totalscore").text(totalScore);
		}

	// Functions for a win or a loss //
	function win() {
		alert("You Kick Ass....You're A Winner!");
		wins++;
		$("#wins").text(wins);
		reset();
	}
	function lose() {
		alert("Go Home and Cry....LOSER!");
		losses++;
		$("#losses").text(losses);
		reset();
	}


	// Sets up click functions for the various crystals //
	$("#red").on("click", function() {
		totalScore = totalScore + Red;
		console.log("New totalScore = " + totalScore);
		$("#totalscore").text(totalScore);
		if (totalScore === Random) {
			win();
		}
		else if (totalScore > Random) {
			lose();
		}
	})
	$("#yellow").on("click", function() {
		totalScore = totalScore + Yellow;
		console.log("New totalScore = " + totalScore);
		$("#totalscore").text(totalScore);
		if (totalScore === Random) {
			win();
		}
		else if (totalScore > Random) {
			lose();
		}
	})
	$("#green").on("click", function() {
		totalScore = totalScore + Green;
		console.log("New totalScore = " + totalScore);
		$("#totalscore").text(totalScore);
		if (totalScore === Random) {
			win();
		}
		else if (totalScore > Random) {
			lose();
		}
	})
	$("#blue").on("click", function() {
		totalScore = totalScore + Blue;
		console.log("New totalScore = " + totalScore);
		$("#totalscore").text(totalScore);
		if (totalScore === Random) {
			win();
		}
		else if (totalScore > Random) {
			lose();
		}
	});

});










