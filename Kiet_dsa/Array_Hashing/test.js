// const second_largest = (arr) => {
//     let first_largest = 0
//     let second_largest = 0
//     for(let i = 0; i<arr.length; i++){
//         if(first_largest < arr[i]){
//             second_largest = first_largest
//             first_largest = arr[i]
//         } else if (second_largest < first_largest && second_largest < arr[i]){
//             second_largest = arr[i]
//         }
//     }
//     return second_largest   
// }
// console.log(second_largest([12, 35, 1, 10, 34, 1]))

// const third_largest = (arr) => {
//     let first_largest = 0
//     let second_largest = 0
//     let third_largest = 0
//     for(let i = 0; i<arr.length; i++){
//         if(first_largest < arr[i]){
//             third_largest = second_largest
//             second_largest = first_largest
//             first_largest = arr[i]
//         } else if (second_largest < first_largest && second_largest < arr[i]){
//             third_largest = second_largest
//             second_largest = arr[i]
//         }
//     } 
//     return third_largest
// }
// console.log(third_largest([12, 35, 1, 10, 34, 1]))

// const reverse_arr = (arr) => {
//     let reverse = []
//     console.log(arr)
//     for(let i = arr.length - 1; i > 0; i--){
//         reverse+=arr[i]
//     }
//     return reverse
// }
// console.log(reverse_arr([1,2,3,4,5,6]))

// const reverse_group = (arr, k) => {
//     let n = arr.length
//     for(let i = k; i<n; i+=k){
//         let left = i
//        let right = Math.min(i+k-1,n-1)
//        while (left < right){
//        [arr[left],arr[right]] = [arr[right],arr[left]]
//        left++
//        right-- 
//        } 
//     }  
//    return arr
// }
// console.log(reverse_group([1,2,3,4,5,6,7,8],3))

// const unique = (arr) => {
//     let s = new Set(arr)
//     let uniqueNumbers = [...s]
//     return uniqueNumbers
// }
// const solution = (A) => {
//     let sortedArr = A.sort((a,b) => a-b)
//     let unique_arr = unique(sortedArr)
//     let count = 1
//     let check = false
//     for(let i = 0; i<unique_arr.length; i++){       
//         if(unique_arr[i] < 0){
//             check = true
//         } else {
//             check = false
//             if(unique_arr[i] == count){
//                 count++
//             } else if(unique_arr[i] > count){
//                 return count
//             } 
//         }
//     }
//     if(check == true) return 1
//     return count
// }
// console.log(solution([1,3,6,4,1,2])) // expected output: 5
// console.log(solution([-1,-3])) // expected output: 1
// console.log(solution([1,2,3])) // expected output: 4

// const solution = (A,k) => {
//     let result = []
//     for(let i = k-1; i<A.length; i++){
//         result.push(A[i])
//     }
//     for(let j = 0; j<k-1; j++){
//         result.push(A[j])
//     }
//     return result
// }
// console.log(solution([3,8,9,7,6],3)) // expected result: 9 7 6 3 8

// const solution = (X,Y,D) => {
//     let result = 0
//     let count = 0 
//     while(result < Y){
//         ++count
//         result = X + D * count
//     }
//     console.log(result)
//     return count
// }
// console.log(solution(10,85,30))


// const fibonacci = (n) => {
//     const fib = (n) => {
//         if (n <= 1) return n
//         return fib(n - 1) + fib(n - 2)
//     }
//     for (let i = 0; i <= n; i++) {
//         console.log(fib(i))
//     }
// }
// fibonacci(7)
// expected output: 0 1 1 2 3 5 8 13

// const bracket = (S) => {
//     const brackets = {
//         "{":"}",
//         "(":")",
//         "[":"]"
//     }
//     if(S.length % 2 !== 0) return 0
//     const stack = []
//     for(let i = 0; i<S.length;i++){
//         console.log(S[i])
//         if(brackets[S[i]]){
//             console.log("close bracket")
//             stack.push(brackets[S[i]])
//             console.log("stack",stack)
//         } else {
//             console.log("open bracket")
//             const popped = stack.pop()
//             console.log("popped",popped)
//             if(!popped || popped !== S[i]) return 0
//         }
//     }
//     return stack.length === 0 ? 1 : 0 
// }
// console.log(bracket("[{()()}]")); //expected output: 1
// console.log(bracket("(()")); //expected output: 0
// console.log(bracket(")(")); //expected output: 0

// const frog = (X,A) => {
//     const coveredPosition = new Set()
//     for(let time = 0; time < A.length; time++){
//         const position = A[time]
//         coveredPosition.add(position)
//         if(coveredPosition.size === X)
//             return time
//     }
//     return -1
// }
// console.log(frog(5,[1,3,1,4,2,3,5,4]))

// const triangular = (A) => {
//     if(A.length < 3) return 0
//     const sortedArr = A.sort((a,b) => a-b)
//     for(let i = 0; i<sortedArr.length - 2; i++){
//         if(sortedArr[i] + sortedArr[i+1] > sortedArr[i+2])
//             return 1
//     }
//     return 0
// }
// console.log(triangular([10,2,5,1,8,20])) // expected output: 1
// console.log(triangular([10,50,5,1])) // expected output: 0

// const fish = (A,B) => {
//     let stack = []
//     let alive = 0
//     for(let i = 0; i<A.length; i++){
//         if(B[i] === 1)
//             stack.push(A[i])
//         else {
//             while(stack.length > 0 && stack.pop < A[i]){
//                 stack.pop()
//             }
//             if(stack.length === 0){
//                 alive++
//             }
//         }
//     }
//     return alive + stack.length
// }
// console.log(fish([4,3,2,1,5],[0,1,0,0,0]))

// const blocks = (H) => {
//     let blocks = 0
//     const stack = []
//     for(let i = 0; i<H.length; i++){
//         if(stack.length === 0){
//             stack.push(H[i])
//         } else {
//             if(H[i] < H[i-1]) stack[H[i]]
//             else if(H[i] > H[i-1]){
//                 console.log()
//                 stack.pop()
//                 stack.push(H[i])
//             } else if(H[i] === H[i-1]) continue
//         }
//     }
//     console.log(stack)
// }    
// console.log(blocks([8,8,5,7,9,8,7,4,8])); //ecpected output: 7

//https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/
function solution(H) {
    const stack = [];
    let count = 0;
    
    for (let height of H) {
        // Pop taller buildings
        while (stack.length > 0 && stack[stack.length - 1] > height) {
            stack.pop();
        }
        
        // Only push if strictly taller than current top (or stack empty)
        if (stack.length === 0 || stack[stack.length - 1] < height) {
            stack.push(height);
            count++;
        }
        // If equal, reuse the existing block → no new count
    }
    
    return count;
}

// Dominator - https://app.codility.com/programmers/lessons/8-leader/
function solution(A) {
    const hashmap = {}
    let max = 0
    for(let i = 0; i<A.length; i++){
        hashmap[A[i]] = (hashmap[A[i]] + 1) || 1
        if(hashmap[A[i]] > max) max = hashmap[A[i]]
    }
    const leader = Object.keys(hashmap).find(k => hashmap[k] === max)
    if(hashmap[leader] > A.length / 2){
        for(let i = 0; i<A.length; i++){
            if(A[i] === parseInt(leader)){
                return i
            }
        }
    }
    return -1
}

// 1. How to create a graph
const createGraph =(V,edges) => {
    let mat = Array.from({length: V}, () => Array(V).fill(0))
    for(let i of edges){
        let u = i[0]
        let v = i[1]
        mat[u][v] = 1
        // since graph is undirected
        // mat[v][u] = 1
    }
    return mat
}
let V = 3
let edges = [[1,0],[2,0],[1,2]]
let mat = createGraph(V,edges)
for(let i = 0; i<V; i++){
    let row = ""
    for(let j = 0; j<V; j++){
        row += mat[i][j] + " "
    }
    console.log("Row " + i + ": " + row)
}
// output: có hướng
// Row 0: 0 0 0
// Row 1: 1 0 1
// Row 2: 1 1 0

// output: vô hướng
// Row 0: 0 1 1
// Row 1: 1 0 1
// Row 2: 1 1 0

// console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

// 2. Mảng đa chiều - multi-dimensional array
// 3. Ứng dụng thuật toán DFS trong graph
const graphDFS = (graph, start) => {
    const visited = new Set();
    const dfs = (node) => {
        if (visited.has(node)) return;
        visited.add(node);
        console.log("Visiting:", node);
        for (let neighbor of graph[node] || []) {
            dfs(neighbor);
        }
    };
    dfs(start);
    console.log("DFS complete");
    return visited;
};
console.log(graphDFS(mat, 0));

const brackets =(str) => {
   const brackets = { 
        "{" : "}",
        "(" : ")",
        "[" : "]"
    }
    let stack = []
    for(let char of str){
        if(brackets[char]){
            stack.push(brackets[char])
        }
        else {
            const popped = stack.pop()
            if(popped!=char){
                return false
            }
        }
    }
    return true
}
console.log(brackets("{([][])}")) //expected: true