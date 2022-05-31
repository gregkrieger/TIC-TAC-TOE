const GameBoard = ((move) => {
    /**Create the gameboard initially with Jquery, 
     * loop over the gameboard and push it into 
     * myGameBoard. Use Jquery to update array
     * and DOM with the player inputs. after each
     * round loop over the array to determine if any of
     * the conditions match what is needed for a win.
     * When conditions are met display an alert 
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
    
    const myGameBoard = $("td").toArray();;
    let result;
    return {
        appendTable
        ,result
        ,myGameBoard
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
    let control = ``
});

const player = () => {
  /**function factory to create players 
   * on inception of window and DOM each
   * player will be give a controller 
   * Each player will be given a scoreboard
   */
};