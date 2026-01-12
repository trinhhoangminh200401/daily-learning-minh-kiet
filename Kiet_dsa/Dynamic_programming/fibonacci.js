// Đệ quy để handle small input
// Naive Approach using recursion - O(2^n) time and O(n) space
const fibonacci = (n) => {
    if(n<=1) return n
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(5))

// Memoization Approach - O ^ n time and O ^ n space
// giống hashmap :>>
const nthFibonacciUtil = () => {
    const cache = {}
    return function fib(n){
        if(n in cache){
            return cache[n]
        }
        if(n<=1){
           return n 
        } 
        cache[n] = fib(n-1) + fib(n-2)
        console.log(cache)
        return cache[n]
    }
}
const fib = nthFibonacciUtil()
console.log(fib(6))

// Bottom up Approach - O ^ n time and O ^ n space
const bottomUp = (n) => {
    if(n<=1) return n
    const dp = new Array(n+1)
    dp[0] = 0
    dp[1] = 1
    for(let i = 2; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    console.log(dp)
    return dp[n]
}
console.log(bottomUp(6))
 
// Using matrix - O(n) log n time and O(log n) space
// this is the hardest one so make it later on

const climbStair = (n) => {
    let memo = {}
    if(n<=1) return 1
    if(n in memo) return memo[n]
    memo[n] = climbStair(n-1) + climbStair(n-2)
    return memo[n] 
}
console.log(climbStair(2))
console.log(climbStair(3))
console.log(climbStair(4))
console.log(climbStair(5))