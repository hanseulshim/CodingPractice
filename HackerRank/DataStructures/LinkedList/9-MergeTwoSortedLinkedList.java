/*
  Merge two linked lists 
  head pointer input could be NULL as well for empty list
  Node is defined as 
  class Node {
     int data;
     Node next;
  }
*/

Node MergeLists(Node a, Node b) {
     // This is a "method-only" submission. 
     // You only need to complete this method 
    if (a==null){
        return b;
    }
    if (b==null){
        return a;
    }
    if(a.data < b.data){
        a.next = MergeLists(a.next, b);
        return a;
    }
    else{
        b.next = MergeLists(a, b.next);
        return b;
    }
    
}