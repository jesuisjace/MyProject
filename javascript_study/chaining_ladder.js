let ladder = {
    step: 0,
    up() {
      this.step++;
      return this; // 메서드를 호출할 때마다 객체 자신을 반환하게끔
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
      console.log( this.step );
      return this;
    }
  };

ladder.up().up().down().showStep(); // 1