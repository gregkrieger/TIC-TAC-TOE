const GameBoard = (() => {
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
    const myGameBoard = [];
    return {
        appendTable
    };
})();
GameBoard.appendTable;
const displayController = (() =>{
    
});

const player = () => {

};