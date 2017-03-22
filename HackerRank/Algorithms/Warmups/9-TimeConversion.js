function main() {
    var time = readLine();
    var clock = time.split(":")
    var hour = clock[0];
    var minute = clock[1]
    var second = clock[2].substr(0,2)
    var zone = clock[2].substr(2,2)
    
    if(zone=="AM" && parseInt(hour)==12){
        hour = "00"
    }
    if(zone=="PM" && parseInt(hour)<12){
            hour = parseInt(hour)+12
    }
    console.log(hour+":"+minute+":"+second)
}