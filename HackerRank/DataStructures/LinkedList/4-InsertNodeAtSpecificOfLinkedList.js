/*
You’re given the pointer to the head node of a linked list, an integer to add to the list and the position at which the integer must be inserted. Create a new node with the given integer, insert this node at the desired position and return the head node. A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. The head pointer given may be null meaning that the initial list is empty.
*/

function insert(head, data, position) {
    var n = new Node(data) //node to insert
    if(head==null){
        return n
    }
    if(position == 0){
        n.next = head
        return n
    }
    var currentPos = 0
    var curr = head
    while(currentPos < position -1 && curr.next != null){
        curr = curr.next
        currentPos++
    }
    var nodeAtPos = curr.next
    curr.next = n
    n.next = nodeAtPos
    
    return head
    
}