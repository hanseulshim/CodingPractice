/*
Task 
Given a string, S, of length N that is indexed from 0 to N-1, print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line (see the Sample below for more detail).

Note: 0 is considered to be an even index.
*/

function processData(input) {
    //Enter your code here
    var input = input.split('\n')
    var n = input[0]
    for(var i=1; i<=n; i++){
        var str = input[i].split('')
        var even=[], odd=[]
        for(var j=0; j<str.length; j++){
            if(j%2===0){
                even.push(str[j])
            }
            else{
                odd.push(str[j])
            }
        }
        console.log(even.join('')+ ' '+odd.join(''))
    }
} 