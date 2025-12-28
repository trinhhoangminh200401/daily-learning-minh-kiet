import LinkedListNode  from './LinkedListNode.js'
const mergeTwoList = (l1, l2) => {
    let dummyNode = new LinkedListNode(0);
    let temp = dummyNode
    let curr1 = l1, curr2 = l2
    while(curr1 != null && curr2 != null){
        if(curr1.val < curr2.val){
            temp.next = curr1
            curr1.next = curr1
        } else {
            temp.next = curr2
            curr2.next = curr2
        }
    }
    temp = temp.next
    temp.next = curr1 ? curr1 : curr2
    return dummyNode.next
}
console.log(mergeTwoList([1,2,4], [1,3,4]))
