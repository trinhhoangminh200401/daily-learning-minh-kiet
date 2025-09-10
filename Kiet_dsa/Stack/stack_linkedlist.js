class Node {
    constructor(value){
        this.data = value
        this.next = null
    }
    toString(callback){
        return callback ? callback(this.value) : `${this.value}`
    }
}

class Stack_LinkedList {
    constructor(){
        this.head = null
    }
    isEmpty(){
        return this.head === null
    }
    push(value){
        const new_node = new Node(value)
        if(this.isEmpty()){
            this.head = new_node
        }
        new_node.next = this.head
        this.head = new_node

    }
    pop(){
        if(this.isEmpty()){
            return false
        }
        this.head = this.head.next
    }
    peek(){
        if(!this.isEmpty()){
            return this.head.data
        }
        return Number.MIN_SAFE_INTEGER
    }
    toString(callback){
        this.toArray().map((node) => node.toString(callback)).toString()
    }
}

let st = new Stack_LinkedList()
st.push(11)
st.push(22)
st.push(33)
st.push(44)
console.log(st.toString())
// console.log(st.peek())
// st.pop()
// st.pop()
// console.log(st.peek())