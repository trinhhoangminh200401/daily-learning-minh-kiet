// STack is linear data structure that follows LIFO priciple 
class Stack_array {
    constructor(capacity){
        this.top = -1
        this.cap = capacity
        this.a = new Array(capacity)
    }
    pop(){
        if(this.top < 0){
            console.log("stack is underflow")
            return false
        }
       return this.a[this.top--]
    }
    peek(){
        if(this.top < 0){
            return false
        }
        return this.a[this.top]
    }
    push(value){
        if(this.top >= this.cap - 1){
            return false
        }

        this.a[++this.top] = value
        return true
    }
    size(){
        // why return this.top + 1 instea of this.a.length
        // because this.a.length is the capacity of the stack
        // but this.top + 1 is the current size of the stack
        return this.top + 1
    }
    print(){
        // need to understand slice method
        console.log(this.a.slice(0,this.top+1))
    }
}

let stack = new Stack_array(4)
stack.push(1)
stack.push(2)
stack.push(10)
stack.push(4)
stack.pop()
stack.print()
console.log(stack.peek())
console.log(stack.size())