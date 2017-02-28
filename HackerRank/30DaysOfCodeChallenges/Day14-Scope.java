class Difference {
    private int[] elements;
    public int maximumDifference;
      // Add your code here
    public Difference(int[] elements){
        this.elements = elements;
    }
    void computeDifference(){
     int min = Integer.MAX_VALUE; 
     int max = Integer.MIN_VALUE;

    for(int i : elements){
        min = Math.min(min,i);
        max = Math.max(max,i);
    }
    maximumDifference = max-min;
    }
}