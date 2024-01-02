// most asked recursion question in dsa //

// factorial of n//

// n = 5 =>5*4*3*2*1;


function factorial(n){
    if(n === 0){
        return 1;
    }

    else{
       return n * factorial(n-1);
    }
}

console.log(factorial(7));


//create an array with a range of number



function rangeOfNumbers(startNum,endNum){
     if(endNum < startNum) 
     {
        return [];
     }

     else{
        const numbers = rangeOfNumbers(startNum,endNum - 1)
        numbers.push(endNum)
        return numbers;
     }
}

console.log(rangeOfNumbers(0,5));