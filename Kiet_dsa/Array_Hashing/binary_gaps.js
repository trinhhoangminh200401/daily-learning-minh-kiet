// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    let binary = N.toString(2)
    let gaps = []
    let count = 0
    for(let bit of binary){
        if(bit === '1'){
            gaps.push(count)
            count = 0
        } else {
            count++
        }
    }
    console.log("gaps array: ",gaps)
    return gaps.length > 0 ? Math.max(...gaps) : 0
}
console.log(solution(1041)) //5
console.log(solution(15)) //0
console.log(solution(32)) //0