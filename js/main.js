$(function(){
    const params = new URLSearchParams(window.location.search);
    const isEmbed = params.has('embed');
    
    if (isEmbed) {
      document.body.classList.add('embed');
    }
    init()
    console.log("Main loaded");
});

function init(){
    console.log("init()");
    board = new Board(ROW_LEN_1, COL_LEN_1);
    board.boardInit();
}