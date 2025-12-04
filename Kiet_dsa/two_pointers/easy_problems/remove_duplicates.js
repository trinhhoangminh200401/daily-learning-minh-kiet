// using set
const remove_duplicates = (arr) => {
    let unique = new Set()
    for(let i = 0; i<arr.length; i++){
        if(unique.has(arr[i])){
            continue
        }
        unique.add(arr[i])
    }
    return unique
}
console.log(remove_duplicates([2,2,2,2,2,2]))
console.log(remove_duplicates([1,2,2,3,3,3,3,4,4,5,5,5,5]))

const two_pointer_remove_duplicates = (arr) => {
    let n = arr.length
    let result = []
    for(let i = 0; i<n; i++){
        if(arr[i]==arr[i+1]){
            continue
        }
        result.push(arr[i])
    }
    return result
}
console.log(two_pointer_remove_duplicates([2,2,2,2,2,2]))
console.log(two_pointer_remove_duplicates([1,2,2,3,3,3,3,4,4,5,5,5,5]))