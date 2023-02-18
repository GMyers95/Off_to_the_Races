const form = document.getElementById("regression-form");
const predictionOutput = document.getElementById("prediction-output");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let race_number  = parseFloat(document.getElementById("race_number").value);
  let jockey_coefficient  = parseFloat(document.getElementById("jockey_coefficient").value);
  let track_id_coefficient = parseFloat(document.getElementById("tack_id_coefficient").value);
  let course_type_coefficient = parseFloat(document.getElementById("course_type_coefficient").value);
  let track_condition_coefficient = parseFloat(document.getElementById("track_condition_coefficient").value);  
  let race_type_coefficient = parseFloat(document.getElementById("race_type_coefficient").value);

  // console.log(race_number)
  // console.log(jockey_coefficient)
  // console.log(tack_id_coefficient)
  // console.log(course_type_coefficient)
  // console.log(track_condition_coefficient)
  // console.log(race_type_coefficient)

  // Get the prediction from the trained model using the input variables
  const prediction = getPredictionFromModel(jockey_coefficient, race_number, track_id_coefficient, course_type_coefficient,track_condition_coefficient, race_type_coefficient);
  raceChart(prediction)

  predictionOutput.innerHTML = `Prediction: ${prediction}`;
});

function getPredictionFromModel(jockey_coefficient, race_number, track_id_coefficient, course_type_coefficient,track_condition_coefficient, race_type_coefficient) {

    if (jockey_coefficient == (-2.09187))
    {weight_carried = 120.7}
    else if (jockey_coefficient == -0.84382)
    {weight_carried = 120.8}
    else if (jockey_coefficient == -1.39210)
    {weight_carried = 120.8}
    else if (jockey_coefficient == 0)
    {weight_carried = 120.9}
    else if (jockey_coefficient == -1.60010)
    {weight_carried = 119}

    console.log(weight_carried)
    console.log(race_number)
    console.log(jockey_coefficient)
    console.log(track_id_coefficient)
    console.log(course_type_coefficient)
    console.log(race_type_coefficient)
    console.log(track_condition_coefficient)

    y = 0.18520*(race_number) - 0.09951*(weight_carried) + track_id_coefficient + course_type_coefficient + track_condition_coefficient + race_type_coefficient + jockey_coefficient + 16.883959286386713
  
  console.log(y)
return y
  ;
}

