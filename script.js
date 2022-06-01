var turn = x

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
    
    const myGameBoard = $("td").toArray();

    /**Record user position on board and which move they made 
     * pass it into a function here to write to the array.
     * Once array is updated update the board.
     */

    
      $("body td").on("click", function(event){
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
        $(c).html('X');
      
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
                   
                   <div class="form-outline">
                   <button type="button" onclick="GameBoard.makeMove()" class="btn btn-primary" value = "X">X</button>
                   <button type="button" onclick="GameBoard.makeMove()" class="btn btn-primary" value = "O">O</button>
                   <label class="form-label" for="formControlReadonly">Score</label>
                  <input
                    class="form-control"
                    id="formControlReadonly"
                    type="text"
                    value=""
                    aria-label="readonly input example"
                    readonly
                  />
                </div>`
    let appendButtons = $("body").append(control);
    
    return {
      appendButtons
    }
})();

//set ids to somehow attach to a player
displayController.appendButtons;
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