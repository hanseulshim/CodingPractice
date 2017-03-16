function processData(input) {
    input = input.split('\n')
    actualData = input[0].split(' ')
    actualDay = actualData[0]
    actualMonth = actualData[1]
    actualYear = actualData[2]
    expectedData = input[1].split(' ')
    expectedDay = expectedData[0]
    expectedMonth = expectedData[1]
    expectedYear = expectedData[2]

    if(expectedYear - actualYear < 0){
        console.log(10000)
    }
    else if(expectedMonth - actualMonth < 0 && expectedYear - actualYear == 0){
        console.log((actualMonth-expectedMonth)*500)
    }
    else if(expectedDay - actualDay < 0 && expectedYear - actualYear == 0) {
        console.log((actualDay - expectedDay)*15)
    }
    else{
        console.log(0)
    }
} 
