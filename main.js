jQuery(document).ready(function (){

    
    
 console.log('the document is ready');

var count = 0;
 var playerOne = "X";
 var playerTwo = "O";
 currentPlayer = "X";
 var turns = 0;

    var index0 = $('#zero');
    var index1 = $('#one');
    var index2 = $('#two');
    var index3 = $('#three');
    var index4 = $('#four');
    var index5 = $('#five');
    var index6 = $('#six');
    var index7 = $('#seven');
    var index8 = $('#eight');

 var myCell = $('.cell');
 $(myCell).click(function(){
    console.log($(this));
        count++;
    if (currentPlayer === playerOne) {
        $(this).text(playerOne);
        $(this).unbind('click')
        currentPlayer = "O"
    }  else if ( currentPlayer === playerTwo){
        $(this).text(playerTwo);
        $(this).unbind('click');
        currentPlayer = "X"
    } else{
        return turns;
    }
    checkForWinning();

    });
    $('.myBotton').on('click', function(){
        $(myCell).text('');
    });



    function checkForWinning (){
        if(index0.text() === "X" && index1.text() === "X" && index2.text() === "X" ||
    index3.text() === "X" && index4.text() === "X" && index5.text() === "X" ||
    index6.text() === "X" && index7.text() === "X" && index8.text() === "X" ||
    index0.text() === "X" && index3.text() === "X" && index6.text() === "X" ||
    index1.text() === "X" && index4.text() === "X" && index7.text() === "X" ||
    index2.text() === "X" && index5.text() === "X" && index8.text() === "X" ||
    index0.text() === "X" && index4.text() === "X" && index8.text() === "X" ||
    index2.text() === "X" && index4.text() === "X" && index6.text() === "X")
    {
        alert("The winner is X");
        setTimeout(rest, 500);
    } else if (index0.text() === "O" && index1.text() === "O" && index2.text() === "O" ||
    index3.text() === "O" && index4.text() === "O" && index5.text() === "O" ||
    index6.text() === "O" && index7.text() === "O" && index8.text() === "O" ||
    index0.text() === "O" && index3.text() === "O" && index6.text() === "O" ||
    index1.text() === "O" && index4.text() === "O" && index7.text() === "O" ||
    index2.text() === "O" && index5.text() === "O" && index8.text() === "O" ||
    index0.text() === "O" && index4.text() === "O" && index8.text() === "O" ||
    index2.text() === "O" && index4.text() === "O" && index6.text() === "O"){
        alert("The winner is O");
        setTimeout(rest, 500);
    } else if(count ==9){
        alert("No one wins");
        setTimeout(rest, 500);
    } else{
        return turns;
    };
    };
checkForWinning();
function rest(){
    $(myCell).text('');
    location.reload();
}

    });

    



     




    
   


    




    
    
    

    
    





    

       
        
  
       
       
       
       
        




  



   
    

    













    

