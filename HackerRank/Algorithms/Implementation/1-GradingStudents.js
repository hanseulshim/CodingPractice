function main() {
    var n = parseInt(readLine());
    for(var a0 = 0; a0 < n; a0++){
        var grade = parseInt(readLine());
        // your code goes here
        if(5 - grade%5 < 3 && grade >= 38){
            grade+=5-grade%5
        }
        console.log(grade)
    }

}