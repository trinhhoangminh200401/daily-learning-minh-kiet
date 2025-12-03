const second_largest = (arr) => {
    let first_largest = 0
    let second_largest = 0
    for(let i = 0; i<arr.length; i++){
        if(first_largest < arr[i]){
            second_largest = first_largest
            first_largest = arr[i]
        } else if (second_largest < first_largest && second_largest < arr[i]){
            second_largest = arr[i]
        }
    }
    return second_largest   
}
console.log(second_largest([12, 35, 1, 10, 34, 1]))

const third_largest = (arr) => {
    let first_largest = 0
    let second_largest = 0
    let third_largest = 0
    for(let i = 0; i<arr.length; i++){
        if(first_largest < arr[i]){
            third_largest = second_largest
            second_largest = first_largest
            first_largest = arr[i]
        } else if (second_largest < first_largest && second_largest < arr[i]){
            third_largest = second_largest
            second_largest = arr[i]
        }
    } 
    return third_largest
}
console.log(third_largest([12, 35, 1, 10, 34, 1]))

const reverse_arr = (arr) => {
    let reverse = []
    console.log(arr)
    for(let i = arr.length - 1; i > 0; i--){
        reverse+=arr[i]
    }
    return reverse
}
console.log(reverse_arr([1,2,3,4,5,6]))

const reverse_group = (arr, k) => {
    let n = arr.length
    for(let i = k; i<n; i+=k){
        let left = i
       let right = Math.min(i+k-1,n-1)
       while (left < right){
       [arr[left],arr[right]] = [arr[right],arr[left]]
       left++
       right-- 
       } 
    }  
   return arr
}
console.log(reverse_group([1,2,3,4,5,6,7,8],3))