let calculator = {
    read() {
        this.a = +prompt( "Enter a number: ", "1" );
        this.b = +prompt( "Enter a number: ", "2" );
    },
    
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
  };
  
  calculator.read();
//   alert(calculator.a);
  alert( calculator.sum() );
  alert( calculator.mul() );