var questionturn="player1";
var answerturn="player2";
function check(){
    var get_answer=document.getElementById("input_box").value;
    var answer=get_answer.toLowerCase();
    if(answerturn=="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;  
    }
    if(questionturn=="player1"){
        questionturn="player2";
        document.getElementById("player_question").innerHTML="question turn- "+player2_name;
    }
    else{
        questionturn="player1";
        document.getElementById("player_question").innerHTML="question turn- "+player1_name; 
    }
    if(answerturn=="player1"){
        answerturn="player2";
        document.getElementById("player_answer").innerHTML="answer turn- "+player2_name;
    }
    else{
        answerturn="player1";
        document.getElementById("player_answer").innerHTML="answer turn- "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}