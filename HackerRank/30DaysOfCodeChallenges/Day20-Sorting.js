function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var count=0
    do{
        var swapped = false
        for(var i=0; i<a.length-1; i++){
        if(a[i]>a[i+1]){
            var temp = a[i]
            a[i]=a[i+1]
            a[i+1]=temp
            swapped=true
            count++
        }
        }
    }while(swapped)
        console.log('Array is sorted in '+count+' swaps.')
        console.log('First Element: '+a[0])
        console.log('Last Element: '+a[a.length-1])

}
