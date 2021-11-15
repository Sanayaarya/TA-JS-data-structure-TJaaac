1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]`
- What is the value of obj? // answer
- `obj == newObj` //flase  
reason: obj and new obj both are different because we defined one by one.
- `obj === newObj` //false
reason: obj and new obj both are different because we defined one by one.
- `user === newObj` //false
reason: user and new obj both are different because we defined one by one.
- `user == newObj`//false
reason: user and new obj both are different because we defined one by one.
- `user == obj` //true
reason:user and obj we compare them and result will be true because we make one variable obj and put in user obj.
- `arr == arr2`//true
reason:arr == arr2  we compare them and result will be true because we make one variable arr and put in user arr2.
- `arr === arr2` //true 
reason:arr == arr2  we compare them and result will be true because we make one variable arr and put in user arr2.

2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

<!-- To add this image here use ![name](./hello.jpg) -->

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1); Ans-- { name: 'Alex', age: 30 }
console.log(person2); Ans-- { name: 'John', age: 50 }
```

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers);  Ans----true
console.log(user.brothers.length === brothers.length);  Ans----true
```
