int FindMergeNode(Node headA, Node headB) {
    // Complete this function
    // Do not write the main method. 
    Node currentA = headA;
    Node currentB = headB;        
    while(currentA != currentB){
        if(currentA.next==null){
            currentA = headB;
        }
        else{
            currentA = currentA.next;
        }
        if(currentB.next==null){
            currentB = headA;
        }
        else{
            currentB = currentB.next;
        }
    }
    return currentB.data;

}