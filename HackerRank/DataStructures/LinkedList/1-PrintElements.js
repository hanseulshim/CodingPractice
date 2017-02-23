/*
If you're new to linked lists, this is a great exercise for learning about them. Given a pointer to the head node of a linked list, print its elements in order, one element per line. If the head pointer is null (indicating the list is empty), don’t print anything.
*/

function print(head) {
    if(head != null){
        console.log(head.data)
        print(head.next)
    }
}