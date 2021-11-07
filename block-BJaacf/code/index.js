// 1. Create an array named numbers and store 5 number values in it
 let numbers = [1,2,3,4,5]
// 2. Calculate the sum of array items and print it to the console using console.log()

let num = 0;
for(let number of numbers){
  num += number
}
console.log(num);

// 3. Calculate the average of array items and print it to the console using console.log()
let arr = [1,2,3,4,5,6,7,8];

let total = 0;

for (let i = 0 ; i < arr.length ; i++){
     total += arr[i];
}  
console.log(total/arr.length)
// 4. Find the highest number in the array and print it to the console using console.log()
let arr=[1,2,3,4,5,6,7,8,9,10]
let highest = 0;
for(let i=0;i<arr.length;i++){
    if(highest < arr[i]){
      highest = arr[i]
    }
}
console.log(highest);
// 5. Find the lowest number in the array and print it to the console using console.log()
let arr=[11,22,23,2,5,6,7,8,9,10]


let small = arr[0]
for(let i = 0; i < arr.length ; i++){
   if(arr[i]<small){
      small = arr[i]
}
}
console.log(small)
// 6. Find the even numbers in the array and print them to the console using console.log()
let arr=[1,2,3,4,5,6,7,8,9,10]

for(let i=0;i<arr.length;i++){
  if(i%2==0)  {
    console.log(i)
  }
}
// 7. Find the odd numbers in the array and print them to the console using console.log()
let arr=[1,2,3,4,5,6,7,8,9,10]

for(let i=0;i<arr.length;i++){
  if(i%2!==0)  {
    console.log(i)
  }
}
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let arr=[1,2,3,4,5,6,7,8,9,10]

for(let i=0;i<arr.length;i++){
  if( arr[i] % 5 === 0 ){
    console.log(arr[i])
  }
}

// 9. Log all the element of the array one by one
console.log(num);
console.log(total/arr.length);
console.log(highest);
console.log(small);
console.log(i);
console.log(i);
console.log(arr[i]);


// 10. Find all the number in the array that is divisible by 3
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]


for(let i=0;i<arr.length;i++){
  if( arr[i] % 3 === 0 ){
    console.log(arr[i])
  }
}