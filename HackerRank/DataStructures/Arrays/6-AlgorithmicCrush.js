/*
You are given a list of size N, initialized with zeroes. You have to perform M operations on the list and output the maximum of final values of all the N elements in the list. For every operation, you are given three integers a, b and k and you have to add value k to all the elements ranging from index a to b (both inclusive).
*/

function processData(input) {
    var input = input.split('\n')
    var n = parseInt(input[0].split(' ')[0])
    var m = input[0].split(' ')[1]
    var max = Number.MIN_VALUE
    var prefixSum = 0
    var dArray = new Array(n+1).fill(0);
    for(var i=0; i < m; i++){
        var begIndex = parseInt(input[i+1].split(' ')[0])
        var endIndex = parseInt(input[i+1].split(' ')[1])
        var value = parseInt(input[i+1].split(' ')[2])
        dArray[begIndex]+=value
        dArray[endIndex+1]-=value
    }
    
    for(var i=1; i<=n; i++){
        prefixSum+=dArray[i]
        max = Math.max(prefixSum, max)
    }
    console.log(max)
    
} 