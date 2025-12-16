const make_all_euqal = (arr, k) => {
    let max = 0
    let output = 0
    for(let i = 0; i<arr.length; i++){
        if(max < arr[i])
            max = arr[i]
    }
    for(let i = 0; i<arr.length; i++){
        if((max - arr[i]) % k != 0){
            return -1
        }
        output+=(max-arr[i]) / k 
    }
    return output
}
console.log(make_all_euqal([4, 7, 19, 16], 3)) // expected output: 10
console.log(make_all_euqal([4,4,4,4], 3)) // expected output: 0
console.log(make_all_euqal([4,2,6,8], 3)) // expected output: -1