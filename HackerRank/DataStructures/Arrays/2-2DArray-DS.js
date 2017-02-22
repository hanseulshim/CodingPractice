/*

Given a 6x6 2D Array, A

Task 
Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.

*/


function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    var max = Number.MIN_SAFE_INTEGER;
    for(var i = 0; i<arr.length-2; i++){
        for(var j=0; j<arr[i].length-2; j++){
            var hourGlass = arr[i][j]+arr[i][j+1]+arr[i][j+2]+
                            arr[i+1][j+1]+
                            arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]
            max = Math.max(max,hourGlass)
        }
    }
    console.log(max)
}