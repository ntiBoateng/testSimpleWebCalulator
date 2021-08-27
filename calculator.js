class Calculator {
    constructor(x,y){
        this.x=x;
        this.y=y
    }
    get add(){
        return this.x + this.y
    }
    get product(){
        return this.x * this.y
    }
}


module.exports=Calculator;
/*
let adds = new Calculator(3,5)
let mul = new Calculator(3,4)
console.log(mul.product)
console.log(adds.add)*/
