/*
You’re given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer, insert this node at the head of the linked list and return the new head node. The head pointer given may be null meaning that the initial list is empty.
*/

function insert(head, data) {
    var n = new Node(data)
    if(head == null){
        head = n
        return head
    }
    n.next = head
    return n
}