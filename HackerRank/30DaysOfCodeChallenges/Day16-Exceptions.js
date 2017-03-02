function main() {
    var S = readLine();
    try{
        S != parseInt(S) && someNonDefinedFunction();
        console.log(S)
    }
    catch(e){
        console.log("Bad String")
        }

}