"use strict"

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const $ = selector => document.querySelector(selector);

const addScore = () => {
	// get user entries
	const name = $("#name").value;
	const score  = parseInt( $("#score").value );
	let isValid = true;
    
    // check entries for validity
    if (name == "") {
		$("#name").nextElementSibling.textContent = "This field is required.";
		isValid = false;
	} else {
		$("#name").nextElementSibling.textContent = "";
	}
	
	if (isNaN(score) || score < 0 || score > 100) {
		$("#score").nextElementSibling.textContent = "You must enter a valid score.";
		isValid = false;
	} else {
		$("#score").nextElementSibling.textContent = "";
	}
	
	if (isValid) {
		names[names.length] = name;
		scores[scores.length] = score;
	    $("#name").value = "";
		$("#score").value = "";
		// Clear textarea after adding name and score
		$("#scores_display").value = "";
	}
    $("#name").focus();
};
// Display Scores button && testarea display scores
const displayScores = () => {
	var NameScore = "";
	for (let i=0; i < names.length; i++) {
		NameScore += names[i];
		NameScore += " ";
		NameScore += "=";
		NameScore += " ";
		NameScore += scores[i];
		NameScore += "\n";
		}
		$("#scores_display").value = NameScore
};

document.addEventListener("DOMContentLoaded", () => {
	$("#add").addEventListener("click", addScore);
	$("#name").focus();
	$("#display_scores").addEventListener("click", displayScores);
});
