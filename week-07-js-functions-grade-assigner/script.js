//Creates the assignedScore function with "score" parameter
function assignedScore(score) {
    //Checks if score is within range of 0-100, returns invalid response if not
    if (score > 100 || score < 0)  {
        return "Invalid value! Try again.";
    } else if (score >= 90) {
        return "You received an A!!!"; //Returns grade of A if score is greater than or equal to 90
    } else if (score >= 80){
        return "You received a B!"; //Returns grade of B if score is within range of 80-89
    } else if (score >= 70){
        return "You received a C."; //Returns grade of C if score is within range of 70-79
    } else if (score >= 60){
        return "You received a D."; //Returns grade of D if score is within range of 60-69
    }else {
        return "You received an F..."; //Returns a letter grade of F if score is less than 60
    }
}

alert(assignedScore(50));