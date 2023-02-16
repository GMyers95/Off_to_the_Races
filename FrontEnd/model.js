const form = document.getElementById("regression-form");
const predictionOutput = document.getElementById("prediction-output");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let jockey_coefficient  = parseFloat(document.getElementById("jockey_coefficient").value);
  let tack_id_coefficient = parseFloat(document.getElementById("tack_id_coefficient").value);
  let course_type_coefficient = parseFloat(document.getElementById("course_type_coefficient").value);
  let track_condition_coefficient = parseFloat(document.getElementById("track_condition_coefficient").value);  
  let race_type_coefficient = parseFloat(document.getElementById("race_type_coefficient").value);


  // Get the prediction from the trained model using the input variables
  const prediction = getPredictionFromModel(variable1, variable2, variable3);
  
  predictionOutput.innerHTML = `Prediction: ${prediction}`;
});

function getPredictionFromModel(jockey_coefficient, tack_id_coefficient, course_type_coefficient,track_condition_coefficient, race_type_coefficient) {
  // This function would contain the code to use the trained model to get the prediction based on the input variables.
  // Currently, it is just returning a placeholder value.
  if (jockey_coefficient == "Joel Rosario")
  {weight_carried = 120.7}
else if (jockey_coefficient == "Eric Cancel")
  {weight_carried = 120.8}
else if (jockey_coefficient == "Manuel Franco")
  {weight_carried = 120.8}
else if (jockey_coefficient == "Dylan Davis")
  {weight_carried = 120.9}
else if (jockey_coefficient == "Reylu Gutierrez")
  {weight_carried = 119}

  y = 0.07397(weight_carried) + tack_id_coefficient + course_type_coefficient + track_condition_coefficient + race_type_coefficient + jockey_coefficient  - 1.8255655575251346
return y
  ;
}

