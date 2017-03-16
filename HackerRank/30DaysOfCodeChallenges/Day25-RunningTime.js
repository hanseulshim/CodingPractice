function processData(input) {
    //Enter your code here
    input = input.split('\n')
    for(var i = 1; i<input.length; i++){

        if(input[i]==2){
            console.log('Prime')
        }
        else if(input[i]==1){
            console.log('Not prime')
        }else{
            var num = Math.sqrt(input[i])
            var p = 'Prime'
            for(var j = 2; j<=num; j++){

                if(input[i]%j==0){
                    p = 'Not prime'
                    break
                }
            }
            console.log(p)
        }

    }
} 
