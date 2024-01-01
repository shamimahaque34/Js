

function celciusToFarenhite(celcius)
{
   celciusCalculation = celcius * (9/5) +32;
   return celciusCalculation;
}

 var celcius = celciusToFarenhite(2);
 console.log (celcius);

 var celcius = celciusToFarenhite(5);
 console.log (celcius);

////////////////////////////////////////

 function FarenhiteToCelcius(farenhite)
 {
    farenhiteCalculation = (farenhite - 32) *(5/9);
    return farenhiteCalculation;
 }


 var farenhite = FarenhiteToCelcius(1);
 console.log(farenhite);


///////////////////////////////////////////////////

  function gradeCalculation(number)
  {
     var grades;
     if (number <= 100 && number >= 80) {
        grades = "A";
      } else if (number <= 79 && number >= 60) {
        grades = "B";
      } else if (number <= 59 && number >= 40) {
        grades = "C";
      } else {
        grades = "F";
      }

    return grades;
  }


 var gradeCalculation = gradeCalculation(50);
 console.log(gradeCalculation);

///////////////////////////////////////////////////

 function simpleInterest(initialAmount , interest ,years)
 { 
    var finalAmount;
    finalAmount = initialAmount*(1 + ((interest/100)*years));
    return finalAmount;
 }


 var finalAmountCalculation = simpleInterest(1000,5,5);
 console.log(finalAmountCalculation);

///////////////////////////////////////////////

function largest(num1 , num2 ,num3)
 { 
    var largestNumber;
    largestNumber = Math.max(num1,num2,num3);
    return largestNumber;
 }



 var largestNumberCalculation =largest(4,5,100);
 console.log(largestNumberCalculation);

////////////////////////////////////////////////

 function smallest(num1 , num2 ,num3)
 { 
    var smallestNumber;
    smallestNumber = Math.min(num1,num2,num3);
    return smallestNumber;
 }



 var smallestNumberCalculation =smallest(4,5,100);
 console.log(smallestNumberCalculation);

//////////////////////////////////////////////////////

 function arrayTotalNumber(numbers)
 {
    let sum=0;
    for(let i = 0; i<numbers.length;i++)
    {
        const element = numbers[i];
        sum = sum + element;
    }

    return sum;
 }


  const total = arrayTotalNumber([2,3,7]);
  console.log(total);

  /////////////////////////////////////////////////////

  function arrayLargestNumber(numbers)
  {
    let largest = numbers[0];

    for(let i = 0; i<numbers.length;i++)
    {
        const element = numbers[i];
        if(element>largest)
        {
            largest = element;
        }
    }

    return largest;

  }


  var arrayLargest = arrayLargestNumber([-12,-3,-5]);
  console.log(arrayLargest);


  /////////////////////////////////////////////////////

  function arraySmallestNumber(numbers)
  {
    let smallest = numbers[0];

    for(let i = 0; i<numbers.length;i++)
    {
        const element = numbers[i];
        if(element<smallest)
        {
            smallest = element;
        }
    }

    return smallest;

  }


  var arraySmallest = arraySmallestNumber([-12,-3,-24]);
  console.log(arraySmallest);

/////////////////////////////////////////////////

const fibo =[0,1]

for(i=2;i<=10;i++)
{
    fibo[i]=  fibo[i-1] +fibo[i-2];
}

console.log(fibo);


/////////////////////////////////////////////////

function fibonacciSeries(num){
    const fibo =[0,1]

    for(i=2;i<=num;i++)
    {
        fibo[i]=  fibo[i-1] +fibo[i-2];
    }

    return fibo;
}

var fibonacci = fibonacciSeries(13);
console.log(fibonacci);

/////////////////////////////////////////////////

function fibonacciSeries(num){

    if(typeof num != 'number'){
         return'please give a number';
    }

    if(num < 2){
        return'please give a number greater than 1';
   }
    const fibo =[0,1]

    for(i=2;i<=num;i++)
    {
        fibo[i]=  fibo[i-1] +fibo[i-2];
    }

    return fibo;
}

var fibonacci = fibonacciSeries('13');
console.log(fibonacci);


////////////////////////////////////////////////////////////////////


function arrayEvenNumber(numbers)
{   
  
  // var element;
  
  for( i=0;i<numbers.length;i++)
  { 
    
     var element = numbers[i];

    if(element % 2 == 0 )
    {
      console.log(element);
    }

  }

  
}

  arrayEvenNumber([2,12,5,6,9]);


  ////////////////////////////////////////////////////

 
 function arrayOddNumber(numbers)

 {
   for(i=0;i<numbers.length;i++)
   {
     if(numbers[i] % 2 !==0)
     {
      console.log(numbers[i]);
     }
   }
 }

 arrayOddNumber([2,6,5,3,9,7,10]);

 //////////////////////////////////////////////////////

 function uniqueValueOfArray(arrays)

 { var unique =[];
   for(const element of arrays)
   {
    if(unique.indexOf(element) == -1)
    {
           unique.push(element);
    }
   }
   return unique;
 }


  var uniqueElement = uniqueValueOfArray([2,6,5,3,9,7,10,2,6,5,3,9,7]);
  console.log(uniqueElement);


  ///////////////////////////////////////////////////////

  function reverseString(string)
  {
    var reverseString ='';
    for(const letter of string)
    {
      reverseString = letter + reverseString;
    }
    return reverseString;
  }


  var reversedString = reverseString('hello world');
  console.log(reversedString);


  //////////////////////////////////////////////////

  function fooBar()
  {
    for( i=1;i<=50;i++)
    {
      if(i%3 == 0)
      {
        console.log('foo');
      }

      else if(i%5 == 0)
      {
        console.log('bar');
      }

      else if(i%3 == 0 && i%5 == 0 )
      {
        console.log('foobar');
      }

      else{
        console.log (i);
      }
    }
  }

  fooBar();


  ////////////////////////////////////////////////////////

  var phones=[
    {name:'samsung',price:150000},
    {name:'walton',price:35000},
    {name:'nokia',price:45000},
    {name:'huawei',price:85000},
    {name:'apple',price:95000},
  ]

  function cheapest(phones)
  {
    var cheapest = phones[0];
    for(const phone of phones){
      if( phone.price < cheapest.price)
      {
         cheapest = phone;
      }
    }

    return cheapest;
  }

  var cheapestPhone = cheapest(phones);
  console.log(cheapestPhone);

  //////////////////////////////////////////////////////////////////


  
  var products=[
    {name:'phone',price:1 ,quantity:8},
    {name:'saree',price:3 ,quantity:5},
    {name:'watch',price:4 ,quantity:3},
    {name:'television',price:8 ,quantity:9},
    {name:'bag',price:9 ,quantity:4},
  ]

  function cartTotal(productss)
  {
    var cartTotal = 0;
    for(const product of productss){
       var productTotal = product.price * product.quantity;
       cartTotal = cartTotal + productTotal  
    }

    return cartTotal;
  }

  var cartTotalPrice = cartTotal(products);
  console.log(cartTotalPrice);


  ///////////////////////////////////////////////////////////////////////

  function animalCount(miles)
  {
    const firstTenMilesAnimalDensity = 10;
    const secondTenMilesAnimalDensity =50;
    const thirdTenMilesAnimalDensity = 100;

    if(miles<=10)
    {
      const firstTenMilesAnimalCount = miles*firstTenMilesAnimalDensity;
      return firstTenMilesAnimalCount;
    }


    else if(miles<=20)
    {
      const firstTenMilesAnimalCounts = 10*firstTenMilesAnimalDensity;
     var restMiles = miles-10;
     const secondTenMilesAnimalCount = firstTenMilesAnimalCounts +(restMiles*secondTenMilesAnimalDensity)
     return secondTenMilesAnimalCount;
    }

    else (miles<=30)
    {
      const firstTenMilesAnimalCounts = 10*firstTenMilesAnimalDensity;
     
     const secondTenMilesAnimalCount = firstTenMilesAnimalCounts +(10*secondTenMilesAnimalDensity)
     var restMiles = miles-20;
     const thirdTenMilesAnimalCount = secondTenMilesAnimalCount+ (restMiles*thirdTenMilesAnimalDensity)
     return thirdTenMilesAnimalCount;
    }
  }

   var animalCounts =animalCount(25);
   console.log(animalCounts);


   ///////////////////////////////////////////////////////////////////
  
var i=1;
var num=100;
while(i<num){
  if(i%2 == 0){
    console.log(i+" is not a prime number");
    
  }
  else{
    console.log(i+" is a prime number");
  
}
i++;

 
}




