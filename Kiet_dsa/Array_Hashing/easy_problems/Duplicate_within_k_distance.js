// this is my work
const duplicateWithinKDistance = (arr, k) => {
    let hashmap = {}
    for(let i = 0; i<arr.length; i++){
        if(hashmap[arr[i]] != undefined) {
            if(i-hashmap[arr[i]] <= k){
                return "yes"
            }
        }
        hashmap[arr[i]] = i
    }
    return "No"
}

// this is brute force
// const duplicateWithinKDistance = (arr, k) => {
//     for(let i = 0; i<arr.length - 1; i++){
//         for(let j = i+1; j< arr.length; j++){
//             if(arr[i] == arr[j]){
//                 if(Math.abs(i - j) <= k){
//                     return "yes"
//                 }
//             }
//         }
//     }
//     return "No"
// }

console.log(duplicateWithinKDistance([1,2,3,4,1,2,3,4],3)) // expected output: No
console.log(duplicateWithinKDistance([1,2,3,1,4,5],3)) // expected output: Yes
console.log(duplicateWithinKDistance([1,2,3,4,5],3)) // expected output: No