import LinkedListNode from "./LinkedListNode.js" 
export default class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }
    prepend(value){
        // make new node to be head
        const newNode = new LinkedListNode(value)
        this.head = newNode

        // if there is no tail yet, we make new node as a tail
        if(!this.tail){
            this.tail = newNode
        }
        return this
    }
    append(value){
        const newNode = new LinkedListNode(value)
        // if there is no head yet
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return this
        }
        this.tail.next = newNode
        this.tail = newNode
        return this
    }
    delete(value){
        if(!this.head)
            return null
        let deletedNode = null

        // if the head must be deleted then make next node that is different from the head to be a new head
        while(this.head && this.head.value === value){
            deletedNode = this.head
            this.head = this.head.next
        }
        let currentNode = this.head
            while (currentNode && currentNode.next) {
                if(currentNode.next.value === value){
                  deletedNode = currentNode.next;
                  currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next
                }
            }
        return this
    }
}

const linkedList = new LinkedList()
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
// linkedList.prepend(0)
console.log(linkedList)