const prompt = require('prompt-sync')();

const input = (n, arr) =>{
    for(let i = 0; i<n; i++){
        let value = parseInt(prompt(`Nhap phan tu thu ${i}: `))
        arr.push(value)
    }
}

const sumArr = (arr) => {
    // reduce cộng dồn các phần tử trong mảng
    return arr.reduce((sum, num) => sum + num, 0)
    // let sum = 0
    // for(let i in arr){
    //     sum+=arr[i]
    // }
    // return sum
}

const findMin = (arr) => {
    
    let min = arr[0]
    for(let num of arr){
        if(min > num)
            min = num
    }
    return min
    // return Math.max(...arr)
}

const countOcurrences = (arr, x) => {
    let count = 0
    for(let num of arr){
        if(num === x)
            count++
    }
    if(count === 0){
        console.log("Not found that number")
    }
    return count
    // return arr.filter(num => num === x).length
}
 
const reverseArr = (arr) => {
    let reverseArr = []
    for(let i = arr.length - 1; i >= 0; i--){
        reverseArr.push(arr[i])
    }
    return reverseArr
    // return [...arr].reverse()
}

const removeAtIndex = (arr,index) => {
    // if(index < 0 || index >= arr.length) return arr
    // return arr.filter((_,i) => i!==index)
    let removeAtIndexArr = []
    for(let i in arr){
        if(parseInt(i) !== index){
            removeAtIndexArr.push(arr[i])
        }
    }
    return removeAtIndexArr 
}

const insertAtIndex = (arr, index, target) => {
    if(arr.length === 0) return [target]
    if(index < 0 || index >= arr.length) return arr
    let insertedArr = []
    for(let i in arr){
        console.log("DEBUGS: ", i, index, target)
        if(parseInt(i) === index){
            insertedArr[i] = insertedArr[i+1]
            insertedArr[i] = target
        }
        insertedArr.push(arr[i])
    }
    return insertedArr
}

// Bubble sort
const sortedArr = (arr) => {
    // write code to sort array in ascending order
    let n = arr.length
    for(let i = 0; i<n-1; i++){
        for(let j = i+1; j<n; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    // this is the optimizae function
    // [...arr].sort((a,b) => a-b)
    return arr
}

const findMax = (arr) => {
    let max = 0
    for(let num of arr){
        if(max < num)
            max = num
    }
    return max
    // return Math.max(...arr)
}
const output = (arr) => {
    let length = arr.length
    for(let i = 0; i<length; i++){
        console.log(arr[i])
    }
}

const main = () => {
    let arr = []
    let n = parseInt(prompt("Nhap so luongp phan tu cua mang"))
    input(n, arr)
    // console.log(sumArr(arr))
    // console.log(findMax(arr))
    // console.log(findMin(arr))
    // output(arr)
    // let x = parseInt(prompt("Nhap so muon tim: "))
    // console.log(`So lan xuat hien cua ${x} la: `,countOcurrences(arr,x))
    // console.log(reverseArr(arr))
    // const index = parseInt(prompt("Nhap phan tu ma ban muon xoa: "))
    // console.log(removeAtIndex(arr,index))

    const index = parseInt(prompt("Nhap vi tri phan tu ma ban muon chen: "))
    const target = parseInt(prompt("Nhap phan tu ma ban muon chen: "))
    console.log(insertAtIndex(arr,index,target))
}
main()