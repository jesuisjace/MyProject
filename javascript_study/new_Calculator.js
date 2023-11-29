let calculator = new Calculator();
calculator.read();

function Calculator() {
    this.read = function() {
        this.a = +prompt( "Enter a number: ", "1");
        this.b = +prompt( "Enter a number: ", "2");
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}

alert( "Sum = " + calculator.sum() );
alert( "Mul = " + calculator.mul() );