var instr;
$(function() {
    instr = new Beep.Instrument(); 
    $('#beepbutton').on('click', function (evt) {
 
	//var note = new Beep.Note("C");
	//var voice = new Beep.Voice();
	//voice.play(note);
	instr.play('4A');	
    });

});



function PlayBeepSound(grid){
    var note = Bools3ToNote(grid[20][15].sound, grid[20][16].sound, grid[21][15].sound, grid[21][16].sound);
    DelayThenPlay(0, note, 200);

    note = Bools3ToNote(grid[40][15].sound, grid[40][16].sound, grid[41][15].sound, grid[41][16].sound);
    DelayThenPlay(200, note, 200);

    note = Bools3ToNote(grid[20][30].sound, grid[20][31].sound, grid[21][30].sound, grid[21][31].sound);
    DelayThenPlay(400, note, 100);

    note = Bools3ToNote(grid[40][30].sound, grid[40][31].sound, grid[41][30].sound, grid[41][31].sound);
    DelayThenPlay(600, note, 100);
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

function DelayThenPlay(delay, note, length){
    instr.pause();
    setTimeout(function(){
        PalyAndStop(note, length);
    }, delay);
}


function PalyAndStop(note, length){
    instr.play(note);
    //setTimeout(function(){instr.pause();}, length);
}