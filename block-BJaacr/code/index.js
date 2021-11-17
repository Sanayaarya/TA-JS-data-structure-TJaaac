/*
Game of Thrones : Houses And People's Name
Try to first understand how Array in Objects & Objects in Array are arranged in this example.
Only when you don't get it by yourself, comeback again and read the hint
*/

// Write code for the following problems:
console.log(got);

// You have access to a variable named `got`. Which comes from `data.js` file

/*
Hint: (Structure of got variable)
  - got variable is an Object which has one key: `houses`
  - `houses` is an array of multiple house
  - Each house is an Object which has two keys: "name" and "people"
  - people is an array of all persons living in that particular house
  - And, each person is an object with "name" and "description" properties
*/

// 1. Log the value of key "houses"

console.log(got.house);

// 2. Log the length of the "houses" key

console.log(got.house.lenght)

// 3. Log the name of all houses in got one by one

for(let i=0 ; i<got.houses.length;i++){
  console.log(got.houses[i].name)
}
or 
for(let person of houses){
  console.log(houses.name)
}

// 4. Log the name of all the people in house Starks (index 0) one by one
for(let i=0; i<got.houses[0].people.length;i++){
  console.log(got.houses[0].people[i].name)
 }
 or 
 for(let person of got.houses[0].people){
   console.log(person.name);
 }

// 5. Log the name of all the people in house Lannisters (index 1) one by one

for(let i=0; i<got.houses[1].people.length;i++){
  console.log(got.houses[1].people[i].name)
 }
 or
 for(let person of got.houses[1].people){
   console.log(person.name)
 }


// 6. Log the description of all the people in house Lannisters (index 1) one by one

for(let i=0; i<got.houses[1].people.length;i++){
  console.log(got.houses[1].people[i].description)
 }
 or

 for(let person of got.houses[1].people){
   console.log(person.description)
 }

// 7. Log the name and description of all the people in house Lannisters (index 1) one by one like `I am [name] and my bio is [description]`

for(let i=0; i<got.houses[1].people.length;i++){
  console.log(`I am${got.houses[1].people[i].description} and ${got.houses[1].people[i].name}`)
}
 
or

for(let person of got.house[1].people){
  console.log(person.name,person.description)
}

// 8. Log the name and description of all the people in house Starks (index 0) one by one like `I am [name] and my bio is [description]`
for(let i=0; i<got.houses[0].people.length;i++){
  console.log(`I am${got.houses[0].people[i].description} and ${got.houses[0].people[i].name}`)
}
 
or
for(let person of got.house[0].people){
  console.log(person.name,person.description)
}

// 9. Log the name and description of the people in house Starks whose name is `Robb Stark`
     
for(let i=0; i<got.houses[0].people.length;i++){
  if(got.houses[0].people[i].name == "Robb Stark"){
  console.log(got.houses[0].people[i].description)
  console.log(got.houses[1].people[i].name)
  }
  }
  or

  for(let person of got.house[0].people){
    if(person.name==="Robb stark"){
      console.log(person.name,person.description)
    }
  }

// 10. Log the name and description of the people in house Lannisters whose name is `Tywin Lannister`

for(let i=0; i<got.houses[1].people.length;i++){
  if(got.houses[1].people[i].name == "Tywin Lannister"){
  console.log(got.houses[1].people[i].description)
  console.log(got.houses[1].people[i].name)
  }
  }

  or

  for(let person of got.house[0].people){
    if(person.name==="Tywin Lannister"){
      console.log(person.name,person.description)
    }
  }


// 11. Push the name of the houses in an array named `houseNames` and Log the array
let houseName =[]
for(let i=0 ; i<got.houses.length;i++){
 houseName.push(got.houses[i].name)
}

console.log(houseName)

or 

let houseName = [];
for(let house of got.house){
  houseName.push(house.name);
}

// 12. Log the size of people in Starks house

for(let i=0;i<got.houses.length;i++){
  console.log(got.houses[0].people.length)
 }

 or

 console.log(got.house[0].people.length);
// 13. Log the size of people in Lannisters house


for(let i=0;i<got.houses.length;i++){
  console.log(got.houses[1].people.length)
 }
or
console.log(got.house[0].people.length);

// 14. Add the name and size of people in an object like {Starks: 4, Lannisters: 6} and log the object
let houseInfo = {}
for(let house of got.house){
  houseInfo[house.name]=house.people.length
}
console.log(houseInfo)

// 15. Log the name of all the people of all the houses in got one by one

for(let house of got.houses){
  for(let peop of house.people){
     console.log(peop.name)
}
}

or

for(let house of got.houses){
  for(let people of house.people){
    console.log(people.name)
  }
}
   

// 16. Push all names into a new array named `allPeople` and log the value array.

let allPeople = []
for ( let house of got.houses  ){
   for( let peop of house.people ){
     
    allPeople.push(peop.name);
     }
}console.log(allPeople)

or

let allPeople=[]
for(let house of got .houses){
  for(let people of houses.people){
    allPeople.push(people.name)
  }
}
// 17. Log the value and length of `allPeople` array created above
 console.log(allPeople)
 console.log(allPeople.length)

 or 

 console.log(allPeople,allPeople.lenght);

// 18. Push all descriptions into an array named `allDescription`

let allDescription = []
for ( let house of got.houses  ){
   for( let peop of house.people ){
     
    allPeople.push(peop.description);
     }
}console.log(allDescription)
 

or

let allDescription=[];
for(let house of got.houses){
  for(let people of house.people){
    allDescription.push(people.description)
  }
}

// 19. Log the value and length `allDescription`

console.log(allDescription)
console.log(allDescription.length)

or

console.log(allDescription.length)

// 20. Only the the description whose length is more than 30. (use .length property on string to get the length)
let allDescription30 = []
for ( let house of got.houses  ){
   for( let peop of house.people ){
     if( peop.description.length > 30 ){
       allDescription30.push(peop.description)
     }
    
     }
}
console.log(allDescription30)

or

for(let description of allDescription){
  if(description.lenght>30){
    console.log(description);
  }
}
