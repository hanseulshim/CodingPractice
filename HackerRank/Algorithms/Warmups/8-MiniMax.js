function main() {
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var c = parseInt(a_temp[2]);
    var d = parseInt(a_temp[3]);
    var e = parseInt(a_temp[4]);
    var a = [a,b,c,d,e].sort();
    var max = a[1]+a[2]+a[3]+a[4]
    var min = a[0]+a[1]+a[2]+a[3]
    console.log(min + " " + max)
}