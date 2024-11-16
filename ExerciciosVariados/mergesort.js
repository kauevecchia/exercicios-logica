function findMiddle(head) {
    slow = head
    fast = head.next

    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}

function merge(l1, l2) {
    head = new Node()
    tail = head

    while(l1 && l2) {
        if(l1.val < l2.val) {
            tail.next = l1
            l1 = l1.next
        } else {
            tail.next = l2
            l2 = l2.next
        }
        tail = tail.next
    } 

    tail.next = l1 || l2
    return head.next
}

function mergeSort(head) {
    if(!head || !head.next) {
        return head
    }

    middle = findMiddle(head)
    afterMiddle = middle.next
    middle.next = null
    left = mergeSort(head)
    right = mergeSort(afterMiddle)

    sortedList = merge(left, right)

    return sortedList
}

class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

node_7 = new Node(7)
node_1 = new Node(1, next = node_7)
node_3 = new Node(3, next = node_1)
node_9 = new Node(9, next = node_3)

myList = mergeSort(node_9)
console.log(myList)