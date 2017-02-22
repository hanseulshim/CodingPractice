/*
Task 
Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.

Note: Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result!
*/

function main(mealCost, tipPercent, taxPercent){
    // Write your code here
    var tip = mealCost * (tipPercent/100)
    var tax = mealCost * (taxPercent/100)
    var totalCost = Math.round(mealCost + tip + tax)
    // Use console.log() to print to stdout
    console.log('The total meal cost is '+totalCost+' dollars.')
}