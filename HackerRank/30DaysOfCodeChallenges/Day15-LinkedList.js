  /*
  Task 
Complete the insert function in your editor so that it creates a new Node (pass data as the Node constructor argument) and inserts it at the tail of the linked list referenced by the head parameter. Once the new node is added, return the reference to the head node.
*/

  this.insert=function(head,data){
          //complete this method
        if(head == null){
            return new Node(data)
        }
        if (head.next==null){
            head.next = new Node(data)
            return head
        }
        else{
            this.insert(head.next,data)
        }
        return head
    };