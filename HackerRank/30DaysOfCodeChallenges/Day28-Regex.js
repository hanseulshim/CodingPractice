function main() {
    var N = parseInt(readLine());
    var array = []
    for(var a0 = 0; a0 < N; a0++){
        var firstName_temp = readLine().split(' ');
        var firstName = firstName_temp[0];
        var emailID = firstName_temp[1];
        emailID.search(/@gmail\.com/) >= 0 ? array.push(firstName):null
    }
    console.log(array.sort().join('\n'))

}
