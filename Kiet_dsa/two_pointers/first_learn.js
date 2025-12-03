// Using two pointers technique
// Requirement: array must be sorted
const two_sum = (arr,target) => {
    let sortedArr = arr.sort((a,b) => a-b)
    let n = arr.length
    let left = 0
    let right = n - 1
    while (left < right){
        let sum = 0
        sum = arr[left] + arr[right]
        if(sum === target){
            return true
        }
        else if (sum < target){
            left++
        }
        else right--
    }
    return false
}
console.log(two_sum([0, -1, 2, -3, 1], -2))
console.log(two_sum([-3, -1, 0, 1, 2], -2))