function DDA(x1,y1,x2,y2){
    var Dx = x2 - x1;
    var Dy = y2 - y1;
    var no_of_steps;

    if(Math.abs(Dx) > Math.abs(Dy)){
        no_of_steps = Dx;
    }else{
        no_of_steps = Dy;
    }

    Dx = Math.abs(( x2 - x1)/no_of_steps);
    Dy = Math.abs(( y2 - y1)/no_of_steps);

    var x = x1 + 0.5;
    var y = y1 + 0.5;
    
    for(let i = 0; i < no_of_steps; i++) {
         x = x + Dx;
         y = y + Dy;

         console.log("Sample :(",x,",",y,")");
         console.log("Draw :(",Math.trunc(x),',',Math.trunc(y),")");
    }
}

DDA(20,10,30,18);