var inst;
$(function() {
    inst = new Beep.Instrument(); 
    $('#beepbutton').on('click', function (evt) {
 
melody = [
     1/4, '4C',  6/4,//  Do[e]  
     1/4, '4D',  2/4,//  a  
     1/4, '4E',  5/4,//  deer  
     1/4, '4C',  2/4,//  A  
     1/4, '4E',  4/4,//  fe  
     4/4, '4C',  3/4,//  male  
     2/4, '4E',  4/4,//  deer
     ];
    
	//var note = new Beep.Note("C");
	//var voice = new Beep.Voice();
	//voice.play(note);
	inst.play('4A');

//    setTimeout("g_loop();", animate_timer)
	
});

});



function PlayBeepSound(grid){
    var note = Bools3ToNote(grid[20][15].sound, grid[20][16].sound, grid[21][15].sound, grid[21][16].sound);
    DelayThenPlay(0, note);

    not = Bools3ToNote(grid[40][15].sound, grid[40][16].sound, grid[41][15].sound, grid[41][16].sound);
    DelayThenPlay(200, not);

    not = Bools3ToNote(grid[20][30].sound, grid[20][31].sound, grid[21][30].sound, grid[21][31].sound);
    DelayThenPlay(400, not);

    not = Bools3ToNote(grid[40][30].sound, grid[40][31].sound, grid[41][30].sound, grid[41][31].sound);
    DelayThenPlay(600, not);
}

function Bools3ToNote(a,b,c,d){
     S = 0;
    if(a === true)
    {
        S = S + 1;
    }

    if(b === true)
    {
        S = S + 2;
    }

    if(c === true)
    {
        S = S + 4;
    }
    if(d == true)
    {
        S = S + 8;
    }

    switch(S)
    {
        case 0:
            return '';
        case 1:
            return '4C';
        case 2:
            return '4D';
        case 3:
            return '4E';
        case 4:
            return '4F';
        case 5:
            return '4G';
        case 6:
            return '4A';
        case 7:
            return '4B';
        case 8:
            return '3C';
        case 9:
            return '3D';
        case 10:
            return '3E';
        case 11:
            return '3F';
        case 12:
            return '3G';
        case 13:
            return '3A';
        case 14:
            return '4B';
        case 15:
            return '4G';
        default:
            return '4E';

   }
}

function DelayThenPlay(delay, note){
    inst.pause();
    setTimeout(function(){
        PalyAndStop(note);
    }, delay);
}


function PalyAndStop(note){
    inst.play(note);
    setTimeout(function(){inst.pause();}, 140);
}