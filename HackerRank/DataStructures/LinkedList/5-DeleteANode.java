/*
You’re given the pointer to the head node of a linked list and the position of a node to delete. Delete the node at the given position and return the head node. A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. The list may become empty after you delete the node.
*/

Node Delete(Node head, int position) {
  // Complete this method
  if(position == 0){
      return head.next;
  }
  int currPos = 0;
  Node curr = head;
  while(currPos < position-1 && curr.next != null){
      curr = curr.next;
      currPos++;
  }
  Node temp = curr.next; //node to be deleted
  temp = temp.next; //gets one after deleted node
  curr.next = temp;
  return head;
}

