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
const GameBoard = ((position, move) => {

    /**Create the gameboard initially with Jquery, 
     * loop over the gameboard and push it into 
     * myGameBoard. Use Jquery to update array
     * and DOM with the player inputs. after each
     * round loop over the array to determine if any of
     * the conditions match what is needed for a win.
     * When conditions are met display an alert 
     * Update the score label.
     * Generated table with https://www.tablesgenerator.com/html_tables#*/ 
    let table = `<table class="tg">
    <tbody>
      <tr>
        <td class="tg-baqh"></td>
        <td class="tg-0lax"></td>
        <td class="tg-0lax"></td>
      </tr>
      <tr>
        <td class="tg-baqh"></td>
        <td class="tg-0lax"></td>
        <td class="tg-0lax"></td>
      </tr>
      <tr>
        <td class="tg-baqh"></td>
        <td class="tg-0lax"></td>
        <td class="tg-0lax"></td>
      </tr>
    </tbody>
    </table>`
    let appendTable = $("body").append(table);
    
    // const myGameBoard = [$("td").toArray();]
    const myGameBoard = [];

    /**Record user position on board and which move they made 
     * pass it into a function here to write to the array.
     * Once array is updated update the board.
     */

    
      $("body td").on("click", function(event){
        // makeMove(this);
        makeMove(this);
    });
    
    

    // makeMove = (position) => {
    //   position = selectPosition;
    //   $("tbody").on("click", function(event){
    //     let move = event.target.className;
    //     alert(event.target.className)
    //   $(`.${position}`).html(`${move}`)
      
    // })
    //   }

      function makeMove(c)  {
        $(c).html(this);
      
        }

    let result;
    return {
        appendTable
        ,result
        ,myGameBoard
        ,makeMove
        
    };
})();
GameBoard.appendTable;
const displayController = (() =>{
  /**Use Jquery to create a controller
   * These controllers will be returned
   * Each player will have their own controller 
   * Controller will write to array by passing 
   * the move to the gameBoard. 
   * Will have a scoreboard function.
   */
    
    let control = ` 
                  <button type="button" onclick="GameBoard.makeMove()" class="btn btn-primary" value = "X">X</button>
                  <button type="button" onclick="GameBoard.makeMove()" class="btn btn-primary" value = "O">O</button>`
    let appendButtons = $("body").append(control);
    
    return {
      appendButtons
    }
})();

//set ids to somehow attach to a player
displayController.appendButtons;
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