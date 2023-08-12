var http = require("http");
http
.createServer(function(req, res){
    res.writeHead(200);
    res.end("Odd Numbers: " + oddNum() + "\n" + "Prime Numbers: " + primeAns())
})
.listen(3000)



function oddNum(){
    var odd ="";
    for(let i = 1; i <= 20; i++){
        if(i%2 !=0){
            odd = odd+" "+i;
        }
    }
    return odd.toString();
 }



//Finding Prime numbers
function isPrime(num){
    for(let i = 2; i<= Math.sqrt(num); i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}

//calling above function to find prime numbers between range of 20
function primeAns(){
    var primeNum="";
    for (var num = 2; num <= 20; num++) {
        if(isPrime(num)){
            primeNum = primeNum+" "+num;
        }
        
    }
    return primeNum.toString();

}
