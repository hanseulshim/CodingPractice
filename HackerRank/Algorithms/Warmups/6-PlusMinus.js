function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var p=0,neg=0,z=0;
    arr.forEach(function(e){
        
        if(e>0){
            p++
        }
        else if(e<0){
            neg++
        }
        else{
            z++
        }
    })
    console.log(p/n)
    console.log(neg/n)
    console.log(z/n)
}
