// Nếu chẵn thì giá trị tại ô chẵn phải lớn hơn hoặc bằng trước nó
// Nếu lẻ thì giá trị tại ô lẻ phải bé hơn hoặc bằng trước nó
const makeEvenPositionedGreater = (arr) => {
    for(let i = 1; i<arr.length; i++){
        if(arr[i] < arr[i-1] && i%2==0){
            swap(arr, i, i-1)
        }
        else if(arr[i] > arr[i-1] && i%2!=0){
            swap(arr, i, i-1)
        }
    }
    return arr
}
const swap = (arr,a,b) => {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}
console.log(makeEvenPositionedGreater([1,2,2,1])) // expected output: [1,2,1,2]
console.log(makeEvenPositionedGreater([1,3,2])) // expected output: [1,3,2]
console.log(makeEvenPositionedGreater([1,2,3,4,5])) // expected output: [1,3,2,5,4]
console.log(makeEvenPositionedGreater([5,4,3,2,1])) // expected output: [4,5,2,3,1]