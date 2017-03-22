function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var a = [a0,a1,a2]
    var b = [b0,b1,b2]
    var pt1 = 0, pt2 = 0;
    for(var i = 0; i<a.length; i++){
        if(a[i] > b[i]){
            pt1++
        }
        else if(a[i] < b[i]){
            pt2++
        }
        else{}
    }
    console.log(pt1+" "+pt2)

}