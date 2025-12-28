class Node{
    constructor(x){
        this.data = x
        this.children = []
    }
}

const addChild = (parent, child) => {
    parent.children.push(child)
}

const printParents = (node, parent) => {
    if(parent == null){
        console.log(node.data + "-> root")
    }
    else {
        console.log(node.data + "->" + parent.data)
    }
    for(let child of node.children){
        printParents(child, node)
    }
}

// Driver code
let root = new Node(0)
let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(3)
let n4 = new Node(4)
let n5 = new Node(5)

// Constructing tree
addChild(root,n1)
addChild(root,n2)
addChild(n1,n3)
addChild(n1,n4)
addChild(n2,n5)

console.log("Parents of each nodes: ")
printParents(root, null)

// console.log("Children of each nodes: ")
// printChildren(root)