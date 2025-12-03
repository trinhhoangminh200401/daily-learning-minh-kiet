// [Naive Approach] Rotate one by one - O(n * d) Time and O(1) Space
// [Better Approach] Using Temporary Array - O(n) Time and O(n) Space
// [Expected Approach 1] Using Juggling Algorithm - O(n) Time and O(1) Space
// [Expected Approach 2] Using Reversal Algorithm - O(n) Time and O(1) Space

// Using rotate one by one
const rotate_one_by_one = (arr, d) => {
    let n = arr.length
    
    // Repeat rotation d times
    for(let i = 0; i<d; i++){
        let first = arr[0]
        for(let j = 0; j<n; j++){
            arr[j] = arr[j+1]
        }
        arr[n-1] = first
    }
    return arr
}
console.log(rotate_one_by_one([1,2,3,4,5,6],2) ) // expected output: [3, 4, 5, 6, 1, 2]

// Using Temporary Array
const rotate_using_temp_array = (arr, d) => {
   let n = arr.length
   let temp = [] 
  for(let i = 0; i<n-d;i++){
   temp[i] = arr[d+i] 
  }
 for(let i = 0; i<d; i++){
   temp[n-d+i]=arr[i] 
 } 
for(let i = 0; i<n; i++){
   arr[i] = temp[i] 
} 
return arr 
}
console.log(rotate_using_temp_array([1,2,3,4,5,6],2) ) // expected output: [3, 4, 5, 6, 1, 2]

// Using Juggling Algorithm
const gcd = (a, b) => {

}
const rotate_using_juggling = (arr, d) => {

}
console.log(rotate_using_juggling([1,2,3,4,5,6],2) ) // expected output: [3, 4, 5, 6, 1, 2]

// Using Reversal Algorithm
const reverse = (arr, left, right) => {

}
const rotate_using_reversal = (arr, d) => {

}
console.log(rotate_using_reversal([1,2,3,4,5,6],2) ) // expected output: [3, 4, 5, 6, 1, 2]