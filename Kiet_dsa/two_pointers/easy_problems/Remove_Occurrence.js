const remove_occurences = (arr, ele) => {
    let n = arr.length
    let count = 0
    for(let i = 0; i<n; i++){
        if(arr[i] != ele) count++
    }
    return count

}
console.log(remove_occurences([3,2,2,3],3)) // expected output: 2
console.log(remove_occurences([0,1,3,0,2,2,4,2],2)) // expected output: 5