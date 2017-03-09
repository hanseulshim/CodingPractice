int GetNode(Node head,int n) {
     // This is a "method-only" submission. 
     // You only need to complete this method. 
    Node current = head;
    Node result = head;
    int index = 0;
    while(current != null){
        current = current.next;
        if(index++ > n){
            result = result.next;
        }
    }
    return result.data;

}