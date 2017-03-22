function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(function(n){return parseInt(n)}).reduce(function(a,b){return a+b})
    console.log(arr)
}