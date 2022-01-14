function fizzBuzz (n) {


    if(n%3==0 && n%5==0){
        return "Fizzbuzz"
    }
    else if (n%5==0){return "Buzz"}
    else if(n%3==0 ){return "Fizz"}


}
fizzBuzz(3)
fizzBuzz(5)
fizzBuzz(15)

module.exports = fizzBuzz
