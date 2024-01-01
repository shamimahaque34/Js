function fib(n){
    const arr =[0,1];
    for(let i =2;i<=n;i++)
    {
        arr.push(arr[i-1] + arr[i-2]);
        
    }
     
    //console.log(arr) //array ta return kore [0,1,1,2,3,5]
    //console.log(arr[n]) // n tomo position a ke ase seita return kore 5

    return arr[n];
}

fib(5)