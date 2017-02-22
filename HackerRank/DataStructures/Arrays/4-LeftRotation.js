/*
A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2].

Given an array of  integers and a number, d, perform d left rotations on the array. Then print the updated array as a single line of space-separated integers.
*/

function processData(input) {
    var input = input.split('\n')
    var n = parseInt(input[0].split(' ')[0])
    var d = input[0].split(' ')[1]
    var arr = input[1].split(' ')
    var ans = new Array(n)
    for(var i = 0; i<n; i++){
        ans[(i+n-d)%n] = arr[i]
    }
    console.log(ans.join(' '))
} 