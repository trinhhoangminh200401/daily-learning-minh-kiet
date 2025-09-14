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
    let x = parseInt(prompt("Nhap so muon tim: "))
    console.log(`So lan xuat hien cua ${x} la: `,countOcurrences(arr,x))
}
main()