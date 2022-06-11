/**use an array
do all the logic from the array
only render to dom no logic */

/**Players will add their moves to the multidemensional array at index position and this will add the move from the array to the board on the corresponding position*/

// var turn = x
//to target value of element with jquery $('a["value"]). type (":type"), attribute ("[href]")
//to load event on ready (element).ready(function){function}
//should use $(element).on('event', function(){$(element).function()} ) event being click, hover, etc...
//To get attributes of DOM elements $(element).click(function(e){e.currenttarget.innerhtml}) this specifically gets the innerhtml "text" or use outerhtml for all the tags
//focus event for when you click into element use (element).focus(function){$(element).css(background)} change background 
//For the above instead of element use this $(this).css use blur to unfocus $(elemenet).blur(function(){$(this).css(background)})
//to see what someone is typing $(element).keyup(function(e){e.target.value}s
//to get input var variable = $(element).val();
//You can set html tags when using .html
//to get values use the .text $(element.text())
//Use .append to add inside an element
//before and after is outside append prepend appento prependto is inside the element use the to methods to append elements to other elements.
//.empty could use this inside of a loop based on length of table and empty all td.
//https://github.com/bradtraversy/jquery_crash_course find the keyup preventfault this will show how to make a list and update it
//next section is array methods
//use .each method to loop through array $.each(myArr, function(i, val){$(#element).append('<tag>'+val+'</tag>')})  takes in index and value
//to add dom elements to array var newArr = $(element).toArray(); and then to do something with it $.each(newArr, function(i, val){console.log(val.innerHTML)})
//so maybe empty array, loop through gameboard update array on each turn or players directly
//https://stackoverflow.com/questions/7545641/how-to-create-multidimensional-array
//don't even need buttons players can just type x or o
//each player is assigned their x or o they don't do x or o themselves make this a lot easier
//basically going to assign a player a letter and that letter will be what they place on the board

const GameBoard = (() => {

    /**Create the gameboard initially with Jquery, 
     * loop over the gameboard and push it into 
     * myGameBoard. Use Jquery to update array
     * and DOM with the player inputs. after each
     * round loop over the array to determine if any of
     * the conditions match what is needed for a win.
     * When conditions are met display an alert 
     * Update the score label.
     */ 
    let table = `<table class="tg">
    <tbody>
      <tr>
        <td  role="button"><b class = "x" hidden>X</b><b class = "o" hidden>O</b></td>
        <td  role="button"><b class = "x" hidden>X</b><b class = "o" hidden>O</b></td>
        <td  role="button"><b class = "x" hidden>X</b><b class = "o" hidden>O</b></td>
      </tr>
      <tr>
      <td role="button"><b class = "x" hidden>X</b><b class = "o" hidden>O</b></td>
      <td  role="button"><b class = "x" hidden>X</b><b class = "o" hidden>O</b></td>
      <td  role="button"><b class = "x" hidden>X</b><b class = "o" hidden>O</b></td>
      </tr>
      <tr>
      <td  role="button"><b class = "x" hidden>X</b><b class = "o" hidden>O</b></td>
      <td  role="button"><b class = "x" hidden>X</b><b class = "o" hidden>O</b></td>
      <td  role="button"><b class = "x" hidden>X</b><b class = "o" hidden>O</b></td>
      </tr>
    </tbody>
    </table>`
    function startGame(){
      $("body").append(table); 
      // $(document).ready(
       
      // )
      console.log(myGameBoard);
      function updateArray(){
        
      }
      var myGameBoard = [...Array(3)].map(e => Array(3));
      var i = 0;
      var playerOne = 0;
      var playerTwo = 0;
      var position;

      var checkResult = function(){
      
        for(var i = 0; i<3;i++){
            var rowSum = 0;
            for(var j = 0; j<3;j++){
                rowSum += myGameBoard[i][j];
            }
            if(rowSum === 3)
                alert("Circle WIN!");
            else if(rowSum === -3)
                alert("Cross WIN!");
        }
        
        for(var i = 0; i<3;i++){
            var colSum = 0;
            for(var j = 0; j<3;j++){
                colSum += myGameBoard[j][i];
            }
            if(colSum === 3)
                alert("Circle WIN!");
            else if(colSum === -3)
                alert("Cross WIN!");
        }
        
        if(myGameBoard[0][0] + myGameBoard[1][1] + myGameBoard[2][2] === 3)
            alert("Circle WIN!");
        else if(myGameBoard[0][0] + myGameBoard[1][1] + myGameBoard[2][2] === -3)
            alert("Cross WIN!");
        
        if(myGameBoard[2][0] + myGameBoard[1][1] + myGameBoard[0][2] === 3)
            alert("Circle WIN!");
        else if(myGameBoard[2][0] + myGameBoard[1][1] + myGameBoard[0][2] === -3)
            alert("Cross WIN!");
    };

      $(document).ready(
        $("td").click(function(){
          $("tr").index(this)
          if($(this).hasClass('filled')){
            alert('field is filled');
         }
          else if(i == 0){
            $(this).find('.x').attr('hidden', false);
            $(this).find('.o').remove();
            i++
            var row_index = $(this).parent().index();
            var col_index = $(this).index();
            console.log(row_index, col_index)
          myGameBoard[row_index][col_index] = -1;
          $(this).addClass('filled')
            //myGameBoard[row_index].splice(col_index, "x");
            console.log(myGameBoard);
           
           
          }
          else if(i == 1){
            $(this).find('.o').attr('hidden', false);
            $(this).find('.x').remove();
            i--
            var row_index = $(this).parent().index();
            var col_index = $(this).index();
            console.log(row_index, col_index)
            myGameBoard[row_index][col_index] = 1;
            $(this).addClass('filled')
            //myGameBoard[row_index].splice(col_index, "o");
            console.log(myGameBoard);
          }
          
          checkResult();
        })
      )
     
    } 

    function newGame(){
      
       $("table").remove();
    
    startGame();
    }
    //to add dom elements to array var newArr = $(element).toArray(); and then to do something with it $.each(newArr, function(i, val){console.log(val.innerHTML)})
     
  
    /**Record user position on board and which move they made 
     * pass it into a function here to write to the array.
     * Once array is updated update the board.
     */

    
  

    
        
    let result;
    return {
        startGame,
        newGame

       
        
    };
})();
// GameBoard.appendTable;
const displayController = (() =>{
  /**Use Jquery to create a controller
   * These controllers will be returned
   * Each player will have their own controller 
   * Controller will write to array by passing 
   * the move to the gameBoard. 
   * Will have a scoreboard function.
   */
    
   


    return {
      // appendButtons
    }


})();

//set ids to somehow attach to a player
// displayController.appendButtons;
const player = () => {
  /**function factory to create players 
   * on inception of window and DOM each
   * player will be give a controller 
   * Each player will be given a scoreboard
   */
};


/**Game logic will be a loop until victory is determined 
 * Loop will loop allow player to make their move on their turn
 * and only their turn. This will be down somehow!
 */