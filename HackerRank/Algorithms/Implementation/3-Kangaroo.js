function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
    if(v2>=v1){
        console.log("NO")
    }
    else{
        console.log((x1 - x2) % (v2 - v1) == 0 ? 'YES' : 'NO')
    }
}