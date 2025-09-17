// Using hashmap
// Time Complexity: O(n)
const two_sum = (arr, target) => {
    let hashmap = {}
    for(let i = 0; i<arr.length; i++){
        let complement = target - arr[i]
        if(hashmap[complement] !== undefined){
            return [hashmap[complement], i]
        }
        hashmap[arr[i]] = i
    }
    return null
}
console.log(two_sum([2,7,11,15],9)) // expected output: [0,1]