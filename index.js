var player = 1;
var win = 0;
var button = [];
var box = 0;
function game(btn){ 
    if(win == 0 && document.getElementById(btn).innerHTML ==''){
        ++box;
        button[btn]= document.getElementById(btn);
        if(player == 1){
            button[btn].innerHTML = 'X';
            button[btn] = 'X';
            ++player;
        }
        else{
            button[btn].innerHTML = 'O';
            button[btn] = 'O';
            --player;
        }
        if(button[1] == 'X' && button[2] == 'X' && button[3] == 'X'){
            window.setTimeout(function(){alert('X win!')},500);
            ++win;
        }
        if(button[4] == 'X' && button[5] == 'X' && button[6] == 'X'){
            window.setTimeout(function(){alert('X win!')},500);
            ++win;
        }
        if(button[7] == 'X' && button[8] == 'X' && button[9] == 'X'){
            window.setTimeout(function(){alert('X win!')},500);   
            ++win;
        }
        if(button[1] == 'X' && button[4] == 'X' && button[7] == 'X'){
            window.setTimeout(function(){alert('X win!')},500);
            ++win;
        }
        if(button[2] == 'X' && button[5] == 'X' && button[8] == 'X'){
            window.setTimeout(function(){alert('X win!')},500);
            ++win;
        }
        if(button[3] == 'X' && button[6] == 'X' && button[9] == 'X'){
            window.setTimeout(function(){alert('X win!')},500);
            ++win;
        }
        if(button[1] == 'X' && button[5] == 'X' && button[9] == 'X'){
            window.setTimeout(function(){alert('X win!')},500);
            ++win;
        }
        if(button[3] == 'X' && button[5] == 'X' && button[7] == 'X'){
            window.setTimeout(function(){alert('X win!')},500);
            ++win;
        }
        //O win if ->
        if(button[1] == 'O' && button[2] == 'O' && button[3] == 'O'){
            window.setTimeout(function(){alert('O win!')},500);
            ++win;
        }
        if(button[4] == 'O' && button[5] == 'O' && button[6] == 'O'){
            window.setTimeout(function(){alert('O win!')},500);
            ++win;
        }
        if(button[7] == 'O' && button[8] == 'O' && button[9] == 'O'){
            window.setTimeout(function(){alert('O win!')},500);
            ++win;
        }
        if(button[1] == 'O' && button[4] == 'O' && button[7] == 'O'){
            window.setTimeout(function(){alert('O win!')},500);
            ++win;
        }
        if(button[2] == 'O' && button[5] == 'O' && button[8] == 'O'){
            window.setTimeout(function(){alert('O win!')},500);
            ++win;
        }
        if(button[3] == 'O' && button[6] == 'O' && button[9] == 'O'){
            window.setTimeout(function(){alert('O win!')},500);
            ++win;
        }
        if(button[1] == 'O' && button[5] == 'O' && button[9] == 'O'){
            window.setTimeout(function(){alert('O win!')},500);
            ++win;
        }
        if(button[3] == 'O' && button[5] == 'O' && button[7] == 'O'){
            window.setTimeout(function(){alert('O win!')},500);
            ++win;
        }
        if(win == 0 && box == 9){
            ++win;
            window.setTimeout(function(){alert('It'+'s a draw')},500);
        }
    }
    if(win == 1){
        window.setTimeout(function(){location.reload()},1500);
    }
}