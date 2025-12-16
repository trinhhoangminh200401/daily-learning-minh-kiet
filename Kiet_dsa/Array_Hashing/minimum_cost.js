// const minimumCost = (arr) => {
//     let cost = 0
//     let sortedArr = arr.sort((a,b) => a-b)
//     let right = sortedArr[sortedArr.length - 1]
//     let left = sortedArr[0]
//     while(left < right){
//         cost+=left
//         right--
//     }
//     return cost
// }

const minimumCost = (arr) => {
    const n = arr.length
    return (n-1)*Math.min(...arr)
}
console.log(minimumCost([4,3,2])) //expected output: 4
console.log(minimumCost([3,4])) // expected output: 3