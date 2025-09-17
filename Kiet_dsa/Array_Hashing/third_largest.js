// NOTE: Using one pass search approach here
// Talble of conent
// [Naive Approach] Using Sorting
// [Better Approach] Two Pass Search
// [Expected Approach] One Pass Search

// Using one pass
// Time Complexity: O(n)
const third_largest_one_pass = (arr) => {
    let firstLargest = 0
    let secondLargest = 0
    let thirdLargest = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > firstLargest){
            thirdLargest = secondLargest
            secondLargest = firstLargest
            firstLargest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] < firstLargest){
            secondLargest = arr[i]
        }
    }
    return thirdLargest 
}

console.log(third_largest_one_pass([1, 14, 2, 16, 10, 20])) // Expected output: 14