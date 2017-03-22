function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(function(a){return parseInt(a)}).reduce(function(a,b){return a+b});
    console.log(arr)
}
