// [Naive Approach] Using a temporary array - O(n) Time and O(n) Space
// [Expected Approach - 1] Using Two Pointers - O(n) Time and O(1) Space
// [Expected Approach - 2] By Swapping Elements - O(n) Time and O(1) Space
// Using Inbuilt Methods - O(n) Time and O(1) Space

// Using a temporary array
const reverse_temporary_array = (arr) => {
    let reverseArray = []
    for(let i = arr.length - 1; i >= 0; i--){
        reverseArray.push(arr[i])
    }
    return reverseArray
}
console.log(reverse_temporary_array([1, 4, 3, 2, 6, 5]))

// Using 2 pointers
const reverse_two_pointers = (arr) => {
    let left = 0, right = arr.length - 1
    while(left < right){
        [arr[left],arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr
}
console.log(reverse_two_pointers([1, 4, 3, 2, 6, 5]))

// By swapping elements
const reverse_swapping = (arr) => {
    const n = arr.length
    for(let i = 0; i<n/2; i++){
        let temp = arr[i]
        arr[i] = arr[n-i-1]
        arr[n-i-1] = temp
    }
    return arr
}
console.log(reverse_swapping([1, 4, 3, 2, 6, 5])) // expected output: [5,6,2,3,4,1]

// Using inbuilt methods
const reverse_inbuilt = (arr) => {
    return [...arr].reverse()
}
console.log(reverse_inbuilt([1, 4, 3, 2, 6, 5])) // expected output: [5,6,2,3,4,1]