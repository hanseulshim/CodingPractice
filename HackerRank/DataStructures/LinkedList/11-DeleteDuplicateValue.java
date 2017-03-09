Node RemoveDuplicates(Node head) {
  // This is a "method-only" submission. 
  // You only need to complete this method. 
  if(head==null){
      return null;
  }
  Node next = head.next;
  while(next!=null && next.data == head.data){
      next = next.next;
  }
    head.next = next;
    RemoveDuplicates(head.next);
  return head;
}
