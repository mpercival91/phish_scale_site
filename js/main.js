/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */


//colour definitions
var pastle_green = "linear-gradient(rgb(120, 222, 129) , rgb(108, 199, 115)"
var pastle_amber = "linear-gradient(rgb(235, 204, 90) , rgb(215, 184, 8)"
var pastle_red = "linear-gradient(rgb(255, 100, 100) , rgb(245, 90, 90)"

//Add listners after load
window.onload=function(){
document.getElementById('email_upload').addEventListener('change', loadImageFileAsURL);

//listeners for changes to selectors to recalculate within interaction 
document.getElementById ("cue1").addEventListener ('change', calculate);
document.getElementById ("cue2").addEventListener ('change', calculate);
document.getElementById ("cue3").addEventListener ('change', calculate);
document.getElementById ("cue4").addEventListener ('change', calculate);
document.getElementById ("cue5").addEventListener ('change', calculate);
document.getElementById ("cue6").addEventListener ('change', calculate);
document.getElementById ("cue7").addEventListener ('change', calculate);
document.getElementById ("cue8").addEventListener ('change', calculate);
document.getElementById ("cue9").addEventListener ('change', calculate);
document.getElementById ("cue10").addEventListener ('change', calculate);
document.getElementById ("cue11").addEventListener ('change', calculate);
document.getElementById ("cue12").addEventListener ('change', calculate);
document.getElementById ("cue13").addEventListener ('change', calculate);
document.getElementById ("cue14").addEventListener ('change', calculate);
document.getElementById ("cue15").addEventListener ('change', calculate);
document.getElementById ("cue16").addEventListener ('change', calculate);
document.getElementById ("cue17").addEventListener ('change', calculate);
document.getElementById ("cue18").addEventListener ('change', calculate);
document.getElementById ("cue19").addEventListener ('change', calculate);
document.getElementById ("cue20").addEventListener ('change', calculate);
document.getElementById ("cue21").addEventListener ('change', calculate);
document.getElementById ("cue22").addEventListener ('change', calculate);
document.getElementById ("premise_alignment_assessment_point_1").addEventListener ('change', calculate);
document.getElementById ("premise_alignment_assessment_point_2").addEventListener ('change', calculate);
document.getElementById ("premise_alignment_assessment_point_3").addEventListener ('change', calculate);
document.getElementById ("premise_alignment_assessment_point_4").addEventListener ('change', calculate);
document.getElementById ("premise_alignment_assessment_point_5").addEventListener ('change', calculate);
}

function calculate() {

	var final_premise_alignment_score = 0;
	//Get 1st result and convert to a score
	var assessment_point_1_selection = document.getElementById("premise_alignment_assessment_point_1");
	var assessment_point_1_selection_text = assessment_point_1_selection.options[assessment_point_1_selection.selectedIndex].text;
	switch (assessment_point_1_selection_text){
	   case "Extreme applicability, alignment, or relevancy":
			final_premise_alignment_score += 8;
			break;
	   case "Significant applicability, alignment, or relevancy":
			final_premise_alignment_score += 6;
			break;
	   case "Moderate applicability, alignment, or relevancy": 
			final_premise_alignment_score += 4;
			break;
	   case "Low applicability, alignment, or relevancy": 
			final_premise_alignment_score += 2;
			break;
	   case "Not applicable, no alignment, or no relevancy": 
			final_premise_alignment_score += 0;
			break;
	}
	
	//Get 2nd result and convert to a score
	var assessment_point_2_selection = document.getElementById("premise_alignment_assessment_point_2");
	var assessment_point_2_selection_text = assessment_point_2_selection.options[assessment_point_2_selection.selectedIndex].text;
	switch (assessment_point_2_selection_text){
	   case "Extreme applicability, alignment, or relevancy":
			final_premise_alignment_score += 8;
			break;
	   case "Significant applicability, alignment, or relevancy":
			final_premise_alignment_score += 6;
			break;
	   case "Moderate applicability, alignment, or relevancy": 
			final_premise_alignment_score += 4;
			break;
	   case "Low applicability, alignment, or relevancy": 
			final_premise_alignment_score += 2;
			break;
	   case "Not applicable, no alignment, or no relevancy": 
			final_premise_alignment_score += 0;
			break;
	}
	
	//Get 3rd result and convert to a score
	var assessment_point_3_selection = document.getElementById("premise_alignment_assessment_point_3");
	var assessment_point_3_selection_text = assessment_point_3_selection.options[assessment_point_3_selection.selectedIndex].text;
	switch (assessment_point_3_selection_text){
	   case "Extreme applicability, alignment, or relevancy":
			final_premise_alignment_score += 8;
			break;
	   case "Significant applicability, alignment, or relevancy":
			final_premise_alignment_score +=6;
			break;
	   case "Moderate applicability, alignment, or relevancy": 
			final_premise_alignment_score += 4;
			break;
	   case "Low applicability, alignment, or relevancy": 
			final_premise_alignment_score += 2;
			break;
	   case "Not applicable, no alignment, or no relevancy": 
			final_premise_alignment_score += 0;
			break;
	}
	
	//Get 4th result and convert to a score
	var assessment_point_4_selection = document.getElementById("premise_alignment_assessment_point_4");
	var assessment_point_4_selection_text = assessment_point_4_selection.options[assessment_point_4_selection.selectedIndex].text;
	switch (assessment_point_4_selection_text){
	   case "Extreme applicability, alignment, or relevancy":
			final_premise_alignment_score += 8;
			break;
	   case "Significant applicability, alignment, or relevancy":
			final_premise_alignment_score += 6;
			break;
	   case "Moderate applicability, alignment, or relevancy": 
			final_premise_alignment_score += 4;
			break;
	   case "Low applicability, alignment, or relevancy": 
			final_premise_alignment_score += 2;
			break;
	   case "Not applicable, no alignment, or no relevancy": 
			final_premise_alignment_score += 0;
			break;
	}
	
	//Get 5th result and convert to a score
	var assessment_point_5_selection = document.getElementById("premise_alignment_assessment_point_5");
	var assessment_point_5_selection_text = assessment_point_5_selection.options[assessment_point_5_selection.selectedIndex].text;
	switch (assessment_point_5_selection_text){
	   case "Extreme applicability, alignment, or relevancy":
			final_premise_alignment_score += -8;
			break;
	   case "Significant applicability, alignment, or relevancy":
			final_premise_alignment_score += -6;
			break;
	   case "Moderate applicability, alignment, or relevancy": 
			final_premise_alignment_score += -4;
			break;
	   case "Low applicability, alignment, or relevancy": 
			final_premise_alignment_score += -2;
			break;
	   case "Not applicable, no alignment, or no relevancy": 
			final_premise_alignment_score += 0;
			break;
	}
	
        var final_premise_alignment_score_text = "None";
        var final_premise_alignment_score_colour = pastle_green;
		switch (true){
       case (final_premise_alignment_score <= 0):
            var final_premise_alignment_score_text = "None";
            var final_premise_alignment_score_colour = pastle_green;
			break;
	   case (final_premise_alignment_score <= 10):
            var final_premise_alignment_score_text = "Low";
            var final_premise_alignment_score_colour = pastle_green;
			break;
	   case (final_premise_alignment_score <= 18):
            var final_premise_alignment_score_text = "Medium";
            var final_premise_alignment_score_colour = pastle_amber;
			break;
	   case (final_premise_alignment_score <= 32):
            var final_premise_alignment_score_text = "High";
            var final_premise_alignment_score_colour = pastle_red;
			break;
	}
	
	
	
	// Cue Selectors
	var final_cue_score = 0;
	var final_cue_score_text = "None"
	final_cue_score += document.getElementById("cue1").checked? 1 : 0;
	final_cue_score += document.getElementById("cue2").checked? 1 : 0;
	final_cue_score += document.getElementById("cue3").checked? 1 : 0;
	final_cue_score += document.getElementById("cue4").checked? 1 : 0;
	final_cue_score += document.getElementById("cue5").checked? 1 : 0;
	final_cue_score += document.getElementById("cue6").checked? 1 : 0;
	final_cue_score += document.getElementById("cue7").checked? 1 : 0;
	final_cue_score += document.getElementById("cue8").checked? 1 : 0;
	final_cue_score += document.getElementById("cue9").checked? 1 : 0;
	final_cue_score += document.getElementById("cue10").checked? 1 : 0;
	final_cue_score += document.getElementById("cue11").checked? 1 : 0;
	final_cue_score += document.getElementById("cue12").checked? 1 : 0;
	final_cue_score += document.getElementById("cue13").checked? 1 : 0;
	final_cue_score += document.getElementById("cue14").checked? 1 : 0;
	final_cue_score += document.getElementById("cue15").checked? 1 : 0;
	final_cue_score += document.getElementById("cue16").checked? 1 : 0;
	final_cue_score += document.getElementById("cue17").checked? 1 : 0;
	final_cue_score += document.getElementById("cue18").checked? 1 : 0;
	final_cue_score += document.getElementById("cue19").checked? 1 : 0;
	final_cue_score += document.getElementById("cue20").checked? 1 : 0;
	final_cue_score += document.getElementById("cue21").checked? 1 : 0;
	final_cue_score += document.getElementById("cue22").checked? 1 : 0;
	
	switch (true){
	   case (final_cue_score <= 0):
            var final_cue_score_text = "No Cues";
            var final_cue_score_colour = pastle_red;
			break;		
	   case (final_cue_score <= 8):
            var final_cue_score_text = "Few";
            var final_cue_score_colour = pastle_red;
			break;
	   case (final_cue_score <= 14):
            var final_cue_score_text = "Some";
            var final_cue_score_colour = pastle_amber;
			break;
	   case (final_cue_score <= 22):
            var final_cue_score_text = "Many";
            var final_cue_score_colour = pastle_red;
			break;
	}
	
	//difficulty calulations
    var final_difficulty_score_text = "None"
    var final_difficulty_score_colour = pastle_green;
	switch (true){
       case (final_cue_score_text == "No Cues" && final_premise_alignment_score_text == "High"):
            final_difficulty_score_text = "Very Difficult"
            final_difficulty_score_colour = pastle_red;
            break;
       case (final_cue_score_text == "No Cues" && final_premise_alignment_score_text == "Medium"):
            final_difficulty_score_text = "Very Difficult"
            final_difficulty_score_colour = pastle_red;
            break;
       case (final_cue_score_text == "No Cues" && final_premise_alignment_score_text == "Low"):
            final_difficulty_score_text = "Very Difficult"
            final_difficulty_score_colour = pastle_red;
			break;
	   case (final_cue_score_text == "Few" && final_premise_alignment_score_text == "High"):
            final_difficulty_score_text = "Very Difficult"
            final_difficulty_score_colour = pastle_red;
			break;
	   case (final_cue_score_text == "Few" && final_premise_alignment_score_text == "Medium"):
            final_difficulty_score_text = "Very Difficult"
            final_difficulty_score_colour = pastle_red;
			break;			
	   case (final_cue_score_text == "Few" && final_premise_alignment_score_text == "Low"):
            final_difficulty_score_text = "Moderately Difficult"
            final_difficulty_score_colour = pastle_amber;
			break;
	   case (final_cue_score_text == "Some" && final_premise_alignment_score_text == "High"):
            final_difficulty_score_text = "Very Difficult"
            final_difficulty_score_colour = pastle_red;
			break;
	   case (final_cue_score_text == "Some" && final_premise_alignment_score_text == "Medium"):
            final_difficulty_score_text = "Moderately Difficult"
            final_difficulty_score_colour = pastle_amber;
			break;			
	   case (final_cue_score_text == "Some" && final_premise_alignment_score_text == "Low"):
            final_difficulty_score_text = "Moderately to Least Difficult"
            final_difficulty_score_colour = pastle_green;
			break;
	   case (final_cue_score_text == "Many" && final_premise_alignment_score_text == "High"):
            final_difficulty_score_text = "Moderately Difficult"
            final_difficulty_score_colour = pastle_amber;
			break;
	   case (final_cue_score_text == "Many" && final_premise_alignment_score_text == "Medium"):
            final_difficulty_score_text = "Moderately Difficult"
            final_difficulty_score_colour = pastle_amber;
			break;			
	   case (final_cue_score_text == "Many" && final_premise_alignment_score_text == "Low"):
            final_difficulty_score_text = "Least Difficult"
            final_difficulty_score_colour = pastle_green;
			break;
	}
	
    document.getElementById("result-premise-alignment-value").innerHTML =  final_premise_alignment_score_text;
    document.getElementById("result-premise-alignment").style.backgroundImage = final_premise_alignment_score_colour;
	document.getElementById("result-cue-count-value").innerHTML = final_cue_score_text;
    document.getElementById("result-cue-count").style.backgroundImage = final_cue_score_colour;
    document.getElementById("result-difficulty-value").innerHTML = final_difficulty_score_text;
    document.getElementById("result-difficulty").style.backgroundImage = final_difficulty_score_colour;
}


function loadImageFileAsURL()
{
    var filesSelected = document.getElementById("email_upload").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];

        if (fileToLoad.type.match("image.*"))
        {
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) 
            {
                var imageLoaded = document.getElementById("emailviewer");
                imageLoaded.src = fileLoadedEvent.target.result;
               
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }
}


function loadDroppedImageFileAsURL(e)
{
    let dt = e.dataTransfer
    var filesSelected = dt.files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];

        if (fileToLoad.type.match("image.*"))
        {
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) 
            {
                var imageLoaded = document.getElementById("emailviewer");
                imageLoaded.src = fileLoadedEvent.target.result;
               
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }
}