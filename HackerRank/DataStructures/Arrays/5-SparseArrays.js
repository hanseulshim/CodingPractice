/*
There are n strings. Each string's length is no more than 20 characters. There are also Q queries. For each query, you are given a string, and you need to find out how many times this string occurred previously.
*/

function processData(input) {
    var input = input.split('\n')
    var n = parseInt(input[0])
    var q = parseInt(input[n+1])
    for(var i = 2; i<=q+1; i++){
        var count = 0;
        var query = input[n+i]
        for(var j = 1; j<=n ; j++){
            input[j]==query ? count++ : null
        }
        console.log(count)
    }
} 