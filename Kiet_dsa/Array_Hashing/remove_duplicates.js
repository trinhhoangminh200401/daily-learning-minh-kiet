// return true if duplicated and false for unique
const removeDuplicates = (nums) => {
    let map = new Set()
    let sortedArr = nums.sort()
    for(let num of sortedArr){
        if(map.has(num)){
            return true
        }
        map.add(num)
    }
    return false 
}
removeDuplicates([1,4,2,3,4])