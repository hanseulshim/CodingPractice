
/*
You are given the pointer to the head node of a linked list and you need to print all its elements in reverse order from tail to head, one element per line. The head pointer may be null meaning that the list is empty - in that case, do not print anything!
*/

void ReversePrint(Node head) {
  // This is a "method-only" submission. 
  // You only need to complete this method. 
  if(head == null){
      ;
  }
  else{
      ReversePrint(head.next);
      System.out.println(head.data);
  }

}
