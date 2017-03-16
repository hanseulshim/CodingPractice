function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        if(((k-1)|k) > n && k%2==0){
                console.log(k-2);
            }else{
                console.log(k-1);
       }
    }

}
