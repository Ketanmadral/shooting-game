      var won1;
      var won2;

      function start(){
      	document.getElementById("player1").value =100;
       	document.getElementById("player2").value=100;
       	document.getElementById("kill1").style.textDecoration="none";
       	document.getElementById("kill2").style.textDecoration="none";
       	 document.getElementById("btn1").disabled =false;
        document.getElementById("btn2").disabled = false;
          document.getElementById("end").innerHTML = " ";

        if(won1 == 3 || won2 == 3){
        	document.getElementById("won1").value=0;
        	document.getElementById("won2").value=0;
         document.getElementById("msg1").innerHTML = " ";
          document.getElementById("msg2").innerHTML = " ";
       
        }
    }

     function shoot2(){
		var player1 = document.getElementById("player1").value - Math.floor ( Math.random() * 6);
		document.getElementById("player1").value = player1;
       
       if(player1<=0)
       {
       	document.getElementById("kill1").style.textDecoration = "line-through";
       	 document.getElementById("btn1").disabled =true;
        document.getElementById("btn2").disabled = true;
        won2 = document.getElementById("won2").value;
        won2++;
        document.getElementById("won2").value = won2;
        document.getElementById("end").innerHTML = "Game End";
        }
       
        if(won2 == 3){
          document.getElementById("msg2").innerHTML = "Player2 is won the match!";
        }

        
     }
   

      

     function shoot1(){
		var player2 = document.getElementById("player2").value - Math.floor ( Math.random() * 6);
		document.getElementById("player2").value = player2;
       
       if( player2<=0)
       {
       	document.getElementById("kill2").style.textDecoration = "line-through";
       	document.getElementById("btn1").disabled = "true";
        document.getElementById("btn2").disabled = "true";
        won1 = document.getElementById("won1").value;
        won1++;
        document.getElementById("won1").value = won1;
        document.getElementById("end").innerHTML = "Game End";
    }

    if(won1==3){
         	 document.getElementById("msg1").innerHTML = "Player1 is won the match!";
         }
   
     }

      

     
