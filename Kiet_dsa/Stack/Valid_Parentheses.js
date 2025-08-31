// // Basic stack using implement
class Stack {
    constructor(){this.items = []}
    push(element) {return this.items.push(element)}
    isEmpty() {return this.items.length === 0}
    pop() {
        if(this.isEmpty()){
            return null
        }
        return this.items.pop()
    }
    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.items[this.items.length - 1]
    }
    size(){
        return this.items.length
    }
    print() {console.log(this.items)}
}

// const stack = new Stack()
// stack.push("1")
// stack.push("2")
// stack.push("3")
// stack.push("hello")
// stack.push("5")
// stack.print()
// stack.pop()
// stack.print()
// console.log(stack.peek())
// console.log(stack.size())

// // Reverse a string using js method
// const reverseStringJsMethod = (str) => {
//     return str.split("").reverse().join("")
// }

// // Reverse a string using stack
// const reverseStringStackMethod = (str) => {
//     const stack = new Stack()
//     for(let char of str){
//         stack.push(char)
//     }
//     let reverse = ""
//     while(!stack.isEmpty()){
//         reverse+=stack.pop()
//     }
//     return reverse
//     console.log("reverse: ",reverse)
// }
// reverseStringJsMethod("hello")
// reverseStringStackMethod("hello")

const isBalanced = (str) => {
    const stack = new Stack()
    const parentheses = {
        '[' : ']',
        '{' : '}',
        '(' : ')'

    }
    for(let char of str){
        if(char in parentheses){
            stack.push(char)   
        } else if(Object.values(parentheses).includes(char)){
            if(stack.isEmpty()){
                return false
            }
            const top = stack.pop()
            if(parentheses[top]!==char){
                return false
            }
        }
    }
    return stack.isEmpty()
}

console.log(isBalanced("[()]")); // true
console.log(isBalanced("((()))")); // true
console.log(isBalanced("(()")); // false
console.log(isBalanced(")(")); // false
console.log(isBalanced("")); // true
console.log(isBalanced("[{]}")); // false