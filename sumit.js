// // const fruits = ['apple','banana','orange','mango','jackfruit','apple','orange'];

// // const results = fruits.push('fruit','fruit2');


// // const results = fruits.map((f) => {
// //     if(f==='apple'){
// //         return "apple"
// //     }

// //     else{
// //         return 'N/A'
// //     }
// // })


// // console.log(results);

// // console.log(fruits);

// const language = {
//     name:"javascript",
//     year:1995,
//     creator:"Brenden Eich"
// }

// for(key in language){
//     // console.log(key);
//     // console.log(  language[key]);
//     console.log(  language[key]);
// }




// function getLargest(...nums){
//     let max_value = Math.max(...nums);
//     return max_value;
// }

// console.log(getLargest( 4,5,3,2,9));


// function getLowest(...nums){
//     let min_value = Math.min(...nums);
//     return min_value;
// }

// console.log(getLowest( 4,5,3,2,9));


// let nums = [3,5,7,8,2,8,0,9,10];

// let max = -Infinity;

// for(let i = 0; i<nums.length;i++)
// {
//     if(nums[i] >max){
//         max = nums[i];
//     }
// }

// console.log(max);


// const str = "Geeks for Geeks";
// let reversedStr = "";
// for (let i = str.length-1; i >= 0; i--) {
//     reversedStr += str[i];
// }
// console.log(reversedStr);

// let date = new Date();
//  console.log(date);

// function timeForMilkAndCookies(date) {
//     // Destructure month and day from the passed in argument.
//  const [year,month, day] = [date.getYear(), date.getMonth(), date.getDate()]; 
 
//  // if the day matches xmas eve, return true, else return false.
//  if(month === 11 && day === 24 && year>0) return true; 
//  else return false;      
// }

function whichIsLarger(f,g){
	
    if(f()>g())
	{
		return "f"
	}
		else if(g()>f())
			{
				return "g"
			}
	else return "neither"
    
		
	
};






