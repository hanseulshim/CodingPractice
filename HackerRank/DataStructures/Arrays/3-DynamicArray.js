function processData(input) {
    var input = input.split('\n')
    var n = input[0].split(' ')[0]
    var q = input[0].split(' ')[1]
    var seqList = []
    var lastAns = 0
    
    for(var i = 0; i < n; i++){
        seqList.push([])
    }
    for(var i = 1; i<=q; i++){
        var query = input[i].split(' ')
        var index = (query[1]^lastAns)%n
        var seq = seqList[index]
        if(query[0] == '1'){
            seq.push(query[2])
        }
        else{
            var seqIndex = query[2] % seq.length
            lastAns = seq[seqIndex]
            console.log(lastAns)
        }
    }
} 