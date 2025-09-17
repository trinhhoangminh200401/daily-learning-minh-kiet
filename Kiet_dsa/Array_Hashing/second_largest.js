// Talble of conent
// [Naive Approach] Using Sorting
// [Better Approach] Two Pass Search
// [Expected Approach] One Pass Search

// Using Sorting
// Time Complexity: O(n log n) due to sorting
const second_largest_sorting = (arr) => {
    // let sortedArr = arr.sort()
    // above line will give wrong result [10,2,100] => [10,100,2]
    // why ? because sort() convert number to string and sort in lexicographical order
    // to avoid this we need to pass a compare function to sort()
    // better way to sort without mutating the original array
    let sortedArr = arr.sort((a,b) => a-b)
    const secondLargest = sortedArr[sortedArr.length - 2]
    return secondLargest
}

console.log("DEBUG: ", ([10,2,100].sort()))

// console.log(second_largest_sorting([12,35,1,10,34,1])) // Expected output: 34

// Two Pass Search
// Time Complexity: O(n) + O(n) = O(2n) => O(n)
const second_largest_two_pass = (arr) => {
    let firstLargest = 0
    let secondLargest = 0
    for(let i = 0; i<arr.length;i++){
        if(arr[i] > firstLargest)
            firstLargest = arr[i]
    }
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > secondLargest && arr[i] < firstLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}
// console.log(second_largest_two_pass([12,35,1,10,34,1]))

// One Pass Search
// Time Complexity: O(n)
const second_largest_one_pass = (arr) => {
    let firstLargest = 0
    let secondLargest = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest
            firstLargest = arr[i]
        } else if (arr[i] < firstLargest && arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}
console.log(second_largest_one_pass([12,35,1,10,34,1]))
