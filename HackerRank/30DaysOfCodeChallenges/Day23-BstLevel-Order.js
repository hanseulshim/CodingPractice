levelOrder(root){
  var queue = [root]
  var print = ""
  var count = 0
  while(queue.length>0){
      var current = queue.shift()
      print = print.concat(current.data + ' ')
     if(current.left!=null) queue.push(current.left)
     if(current.right!=null) queue.push(current.right)
  }
  console.log(print)      
}