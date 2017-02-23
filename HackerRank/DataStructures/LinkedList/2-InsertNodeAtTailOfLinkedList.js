/*
You are given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer. Insert this node at the tail of the linked list and return the head node. The given head pointer may be null, meaning that the initial list is empty.
*/



Node Insert(Node head,int data) { 

  Node tmp = new Node(); tmp.data = data; tmp.next = null;
  if(head == null) {
      head = tmp;
      return head;
  } 

  Node current = head;
  while(current.next != null) {
      current = current.next;
  }
  current.next = tmp;
  return head;