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

    if (jockey_coefficient == (0.25955))
    {weight_carried = 120.7}
    else if (jockey_coefficient == -0.13681)
    {weight_carried = 120.8}
    else if (jockey_coefficient == 0.11636)
    {weight_carried = 120.8}
    else if (jockey_coefficient == -0.25798)
    {weight_carried = 120.9}
    else if (jockey_coefficient == 0.19755)
    {weight_carried = 119}

    // console.log(weight_carried)
    // console.log(race_number)
    // console.log(jockey_coefficient)
    // console.log(track_id_coefficient)
    // console.log(course_type_coefficient)
    // console.log(race_type_coefficient)
    // console.log(track_condition_coefficient)

    y = Math.round(Math.abs(0.3698*(race_number) -0.05089*(weight_carried) + track_id_coefficient + course_type_coefficient + track_condition_coefficient + race_type_coefficient + jockey_coefficient + 4.108333333333333))
    // if (y<=0)
    // {y = 1}
  console.log(y)
return y
  ;
}

const myCarouselElement = document.querySelector('#myCarousel')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false
// })