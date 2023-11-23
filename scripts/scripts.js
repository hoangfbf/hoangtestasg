/****************** YOUR NAME: 

The instructions describe the missing logic that is needed; you will translate these into
 JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/


/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// Some Elements that will be used by the functions:
const MODELNAME_SPANELEMENT = document.getElementById("model-text");
const DURATION_SPANELEMENT = document.getElementById("duration-text");
const CALCULATEDCOST_SPANELEMENT = document.getElementById("calculated-cost");

const SWITCHMODEL_BUTTONELEMENT = document.getElementById('model-button');
const CHANGEDURATION_SPANELEMENT = document.getElementById("duration-button");
// INSERT YOUR CODE HERE


/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE

function recalculate() {
    const model_Name = MODELNAME_SPANELEMENT.innerText;
    let total_cost = 0;
    let duration = parseInt(DURATION_SPANELEMENT.innerText);
   
    if (isNaN(duration)) { duration = 0 };    // if user don't enter input, set duration to 0
    if (model_Name === "Model XYZ") {
        total_cost = duration * 100;} 
    else if (model_Name === "Model CPRG") {
        total_cost = duration * 213;}
    CALCULATEDCOST_SPANELEMENT.innerText = total_cost.toFixed(2); // display the cost with two decimal places
}

/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button
 (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the
 model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG",
    and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", 
    and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run
 automatically whenever the pseudo-button is clicked: */
    // SwitchModelButtonElement.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE

function changeModel() {
    const model_name = MODELNAME_SPANELEMENT.innerText
   
    if (model_name === "Model CPRG") {
        MODELNAME_SPANELEMENT.innerText = "Model XYZ" } 
    else {
        MODELNAME_SPANELEMENT.innerText = "Model CPRG"}
     recalculate()
}

/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE

function changeDuration() {
    let newDuration = prompt("Please enter the duration");

    if (newDuration == "") { newDuration = "0" };
    DURATION_SPANELEMENT.innerText = newDuration
    recalculate()}

SWITCHMODEL_BUTTONELEMENT.addEventListener('click', changeModel)
CHANGEDURATION_SPANELEMENT.addEventListener('click', changeDuration)










