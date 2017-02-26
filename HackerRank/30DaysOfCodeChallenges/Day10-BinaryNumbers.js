function main() {
    var n = parseInt(readLine());
    var rem=0, cons=0, max=0
    while(n>0){
        rem = n%2
        n = n >> 1
        rem == 1 ? (
            cons++,
            max = Math.max(cons,max)
        ) :
        cons = 0
    }
    console.log(max)
}
