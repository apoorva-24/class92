player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score= 0;
player2_score= 0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_qestion").innerHTML="question turn: "+player1_name;
document.getElementById("player_answer").innerHTML="answer turn: "+player2_name;

function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();

    Chr1=word.charAt(1);

    gem=Math.floor(word.length/2);
    Chr2=word.charAt(gem);
    
    gem1=word.length-1;
    Chr3=word.charAt(gem1);

    remove1=word.replace(Chr1,"_");
    remove2=remove1.replace(Chr2,"_");
    remove3=remove2.replace(Chr3,"_");

    question="<h4 id='word_display'>  Q."+remove3+"</h4>";
    input_box="<br>Anwser : <input type='text' id='input_check_box'>";
    button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row = question+input_box+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value = " ";    
}

questionturn="player1";
answerturn="player2";

function check(){
    getanswer=document.getElementById("input_check_box").value;
    answer=getanswer.toLowerCase();

if(answer==word){
    if(answerturn=="player1"){
        player1_score=player1_score +1;
        document.getElementById("player1_score").innerHTML=player1_score;
  
    }
    else{
        player2_score=player2_score +1;
        document.getElementById("player2_score").innerHTML=player2_score;
        
    }
}
if(questionturn == "player1") { 
    questionturn = "player2" 
    document.getElementById("player_qestion").innerHTML = "Question Turn - " + player2_name ;
 } 
    else { 
        questionturn = "player1" 
    document.getElementById("player_qestion").innerHTML = "Question Turn - " + player1_name ;
 } 
    if(answerturn == "player1") { 
        answerturn = "player2" 
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
     } 
        else { 
            answerturn = "player1" 
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ; 
    } 
        document.getElementById("output").innerHTML = "";
}