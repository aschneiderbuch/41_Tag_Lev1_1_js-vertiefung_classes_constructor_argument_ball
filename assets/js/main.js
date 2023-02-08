console.log("test");

class Ball {
    constructor(ballType = "leer-->regular"){
        this.ballType = ballType;   // = ballType wird von oben geholt
        }
    }



ball1 = new Ball();
ball2 = new Ball("super");

console.log(ball1.ballType);	//=> "regular"
console.log(ball2.ballType);	//=> "super"



// oder
function Ball2(ballType = "leer-->regular"){
    this.ballType = ballType;    // = ballType wird von oben geholt
}


ball11 = new Ball2();
ball21 = new Ball2("super");

console.log(ball11.ballType);	//=> "regular"
console.log(ball21.ballType);