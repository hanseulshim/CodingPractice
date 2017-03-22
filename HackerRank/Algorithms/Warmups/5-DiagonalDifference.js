function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var a1=0;
    var a2=0;
    for(var i = 0; i<n; i++){
        a1+=a[i][i]
        a2+=a[n-1-i][i]
    }
    console.log(Math.abs(a1-a2))

}