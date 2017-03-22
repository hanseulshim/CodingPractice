function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);
    
    appleNum = 0, orangeNum = 0
    for(var i=0; i < m; i++){
        (apple[i]+a >= s && apple[i]+a <= t) ? appleNum++ : null
    }
    for(var i=0; i < n; i++){
        (orange[i]+b >= s && orange[i]+b <= t) ? orangeNum++ : null
    }
    console.log(appleNum)
    console.log(orangeNum)

}
