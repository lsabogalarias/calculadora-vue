new Vue({
    el: '#app',
    data: {
      num1: 0,
      num2: 0,
      result: 0
    },
    methods: {      
      add() {
        this.result = parseFloat(this.num1) + parseFloat(this.num2);
      },      
      subtract() {
        this.result = this.num1 - this.num2;
      },
      multiply() {
        this.result = this.num1 * this.num2;
      },
      divide() {
        this.result = this.num1 / this.num2;
      }
    }
  });
  