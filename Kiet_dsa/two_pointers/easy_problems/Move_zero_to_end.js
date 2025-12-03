const move_zero_to_end = (arr) => {
    let n = arr.length
    let left = 0
    let right = n-1
    while(left < right){
        if(arr[right]==0){
            right--
        }
        if(arr[left]==0){
            [arr[left], arr[right]] = [arr[right], arr[left]]
        }
        // using ++left instead of left++
        // because if using left++ then left will be equal to right and while loop will stop
        ++left
    }
    return arr
}
console.log(move_zero_to_end([1,2,0,4,3,0,5,0]))
console.log(move_zero_to_end([10,20,30]))
console.log(move_zero_to_end([0,0]))