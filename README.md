# Off_to_the_Races
[Build Your Race! :horse:](https://gmyers95.github.io/Off_to_the_Races/front_end/index.html)

## Overview  

For this project, we wanted to create a model-based dashboard that enables users to make educated selections in order for "their horse" to finish at the desired position. The dashboard shows visualizations of each variable that goes into the model. Those variables being: Jockey(and jockey weight), race track, track turf, track condition, race class, and race number. Once a selection is made for each variable and the user clicks "Submit", the selected variables' coefficients are sent to the model equation, the equation outputs the predicted placement, and a race chart is shown that ends with the user's horse at the predicted placement.


https://user-images.githubusercontent.com/37047605/220837805-d001f52f-001b-471a-b501-3f924d62508a.mp4


## Group Members

* Georgia Myers
* Jhernie Evangelista
* Lija Hoffman
* Sofia Ysita

## Data Sources   

* [Big Data Derby](https://www.kaggle.com/competitions/big-data-derby-2022/data) via Kaggle

## Backend


### Data Extraction

(@Lija and Sofia)

Data retrieved from S3 Bucket. Columns labeled appropriately and transformed into Pandas DataFrame. DataFrame filtered to include only columns and jockeys of interest. Data one-hot encoded, creating a separate column containing dummy values 0 and 1 for for each variable with a string entry. Dependent variable (position at finish) removed from original DataFrame and entered as a separate DataFrame. X and y variables set using independent and dependent variable DataFrames, respectively. Various regression models (i.e., Ridge, Lasso, Multivariate Linear) trained and tested using a combination of scaled and unscaled independent variable data. Training and test scores computed for all regression models. Variable coefficients and y-intercepts calculated for Ridge and Linear regression models. Ultimately, it was determined that the Unscaled Multivariate Linear Regression Model had the greatest predictive accuracy and the associated coefficients and y-intercept were used in the model equation:
 
    0.13409(race_number) - 0.02071(avg(weight_carried) + tack_id_coefficient + course_type_coefficient + track_condition_coefficient +     race_type_coefficient + jockey_coefficient + 6.353424818425532


## Front-end


### HTML
The dashboard set-up of this project was done through the Bootstrap library (v5.3) as well as some plots embedded from Tableau and the racing chart from (racing library). The set of select menus all interact with the javascript file where the variables' coefficients are plugged in to the model's equation which sends the placement prediction back out to the frontend and triggers the racing chart. Carousels as well as static images are presented in order to give the user more information on the options they have for each select menu.

### Javascript (SO ChatGPT)
(@Sofia)

After having a trained model, we needed a front-end/ back-end interaction where inputs from user were taken in the front end and used in the model's equation and later in a race chart.
Model Equation (model.js):
For the model equation we decided to use Javascript. We asked ChatGPT how to create a form for a multivariate regression for users to input information that will update a trained model, and it responded with an easily modifiable starter code for both HTML and JS files and how they interact (see image below). The HTML contains a "form" with drop down user selection that then is imported to the JS file where the parameters are added to a function with the equation.
https://user-images.githubusercontent.com/37047605/220839099-9be0bb20-dbde-4573-bee5-3317dec4eb84.mov

Race Chart (barchart.js):
For the race chart we used AMCharts that provide you with the documentation necessary to create a bar race chart. We created a function so the result from the model's equation gets inputted on the bar chart's final position. Through an if statement we made sure the chosen horse ended up on the position the model predicted.


### Dashboard + Tableau
(@jhernie)
![Screenshot 2023-02-23 at 7 19 53 AM](https://user-images.githubusercontent.com/37047605/220982075-cd718e90-d3a1-45a4-88c9-6bb60ef26b33.png)

### CSS

One styles sheet was used for this dashboard which coordinated the sizing and colors of the finer details for the final look of the page.


### Future Development
With more time:

        
With more data/deeper dive:
