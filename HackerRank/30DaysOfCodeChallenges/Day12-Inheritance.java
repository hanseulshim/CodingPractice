public String calculate(){
    int score = 0;
    for(int i=0; i<testScores.length; i++){
        score+=testScores[i];
    }
    int avg = score / testScores.length;
    if(avg >= 90){
        return "O";
    }
    else if (avg >= 80){
        return "E";
    }
    else if (avg >= 70){
        return "A";
    }
    else if (avg >= 55){
        return "P";
    }
    else if (avg >= 40){
        return "D";
    }
    else{
        return "T";
    }
}
}
