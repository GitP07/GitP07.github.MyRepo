var http = require("http")
http
.createServer(function(req,res){
    res.writeHead(200);
    res.end("Odd Numbers: " + oddNum(300) + "\n" + "\n" + "Even Numbers: " + evenNum(-200) + "\n" + "\n" + "Prime Numbers: " + primNum(210));

}).listen(8080)



//Finding even Numbers from giveng range of numbers
function oddNum(num) {
    let odd = "";
    let dataType = "Enter dataType must be only numbers";
    if(typeof num === "number"){

        if(num < 0){
            var j = num;
            num = 0;

            for(var i = j; i <= num; i++){
                if(i%2 != 0){
                    odd = odd+ " " +i;
                }
            }return odd.toString();
        }
        else{
            for(var i = 0; i <= num; i++){
                if(i%2 != 0){
                    odd = odd+ " " +i;
                }
            }return odd.toString();
        }
    }
    else{
        return dataType.toString();
    }
}


//Finding even Numbers from given range of numbers 
function evenNum(num) {
    let even = "";
    let dataType = "Enter dataType must be only numbers";

    if(typeof num === "number"){
        if(num < 0){
            var j = num;
            num = 0;

            for(var i = j; i <= num; i++){
                if(i%2 == 0){
                   even = even+ " " +i;
                }
            }return even.toString();
        }
        else{
            for(var i = 0; i <= num; i++){
                if(i%2 == 0){
                   even = even+ " " +i;
                }
            }return even.toString();
        }
    }
    else{
        return dataType.toString();
    }
}


//Finding prime numbers from given range of numbers
function isPrim(val) {
    for(let i = 2; i <= Math.sqrt(val); i++){
        if (val%i == 0) {
            return false;
        }
    }return true;
}

function primNum(num){
    let prime = "";
    let dataType = "Enter dataType must be only number";

    if(typeof num === "number"){
        if(num < 2){
            let messag = "Prime numbers cannot be 1, 0 OR negative number"
            return messag.toString();
        }
        for( let val = 2; val <= num; val++){
            if(isPrim(val)){
                prime = prime+ " " +val;
            }
        }return prime.toString();
    }
    
    else{
        return dataType.toString();
    }
}
