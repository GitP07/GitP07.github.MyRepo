function cal (num1,op,num2) {
    if ((typeof num1 === "number") && (typeof num2 === "number")) {
        if(typeof op === "string"){
            switch(op){
                case "+":
                    console.log(num1+num2);
                    break;
                case "-":
                    console.log(num1-num2);
                    break;
                case "*":
                    console.log(num1*num2);
                    break;
                case "/":
                    if(num2 != 0){
                        console.log(num1/num2);
                    }
                    else{
                        console.log("divisor cannot be 0");
                    }
                    break;
                default:
                    console.log("Please enter correct math Operator");
                    break;

            }
        }
        else{
            console.log("Operator cannot be a number");
        }
    }
    else{
        console.log("Please enter correct values");
    }
}

cal(5,"*",5);  /* enter 1st number in place of num1, enter math operator Ex +,-,*,/ at place of op
                enter 2nd number in place of num2*/