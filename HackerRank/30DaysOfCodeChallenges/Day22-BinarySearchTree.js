getHeight(root){
      if(root == null){
        return -1
    }
    var left = this.getHeight(root.left)
    var right = this.getHeight(root.right)
    
    return Math.max(left,right) +1
}