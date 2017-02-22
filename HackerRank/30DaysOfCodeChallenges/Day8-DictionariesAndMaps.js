/*

Task 
Given n names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each name queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for name is not found, print Not found instead.

*/


function processData(input) {
    //Enter your code here
    var input = input.split('\n')
    var n = parseInt(input[0])
    var phoneBook = {}
    for(var i=1; i<=n; i++){
        var data = input[i].split(' ')
        phoneBook[data[0]] = data[1]
    }
    for(var j=n+1; j<input.length; j++){
        phoneBook[input[j]] ? 
            console.log(input[j]+"="+phoneBook[input[j]]) :
            console.log('Not found')
    }
} 