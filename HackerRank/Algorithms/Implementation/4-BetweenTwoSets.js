function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number).sort();
    b = readLine().split(' ');
    b = b.map(Number).sort();
    
    var g = b[0]
    for(var i = 1; i<b.length; i++){
        g = gcd(g,b[i])
    }
    var l = a[0]
    for(var i = 1; i<a.length; i++){
        l = lcm(l,a[i])
    }
    var count = 0;
    for(var i=l, j=2; i<=g; i=l*j, j++){
        if(g%i==0){count++}
    }
    console.log(count)
}


function gcd(x,y){
    x = Math.abs(x)
    y = Math.abs(y)
    while(y){
        var temp = y
        y = x%y
        x = temp
    }
    return x
}

function lcm(x,y){
    return Math.abs(x*y) / gcd(x,y)
}