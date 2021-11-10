```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // output and reason   Ans- true
reason- when we call user then ans will be arya ,sibling and we creat newUser name and we put value user and compare them and result will we be same.
- `user === newUser;`// output and reason  Ans- true
reason- when we call user then ans will be arya ,sibling and we creat newUser name and we put value user and compare them and result will we be same.
- `user.name === newUser.name;` // output and reason Ans- true 
reason- when we call user.name then ans will be arya and we creat newUser.name and we put value user.name and compare to newUser and result will be true.
- `user.name == newUser.name;` // output and reason Ans- true
reason- when we call user.name then ans will be arya and we creat newUser.name and we put value user.name and compare to newUser and result will be true.
- `user.sibling == newUser.sibling;` // output and reason Ans- true
reason- when  we call user.sibling then ans will be robb, ryan, and john and again we convert user.sibilng to newUser.sibling and compare to each other and result will be true.
- `user.sibling === newUser.sibling;` // output and reason Ans- true
reason- when  we call user.sibling then ans will be robb, ryan, and john and again we convert user.sibilng to newUser.sibling and compare to each other and result will be true.
- `user.sibling == allBrothers;`  // output and reason Ans- false
when we call user.sibling then ans will be robb, ryan,and john and we comparing to user.sibling and compare to allBrothers result will we false because allBrothers are totally different box.
- `user.sibling === allBrothers;` // output and reason Ans- false
when we call user.sibling then ans will be robb, ryan,and john and we comparing to user.sibling and compare to allBrothers result will we false because allBrothers are totally different box.
- `brothersCopy === allBrothers;` // output and reason Ans- false 
when we call user.sibling then ans will be robb, ryan,and john and we comparing to user.sibling and compare to allBrothers result will we false because allBrothers are totally different box.
- `brothersCopy == allBrothers;` // output and reason Ans-false
when we call user.sibling then ans will be robb, ryan,and john and we comparing to user.sibling and compare to allBrothers result will we false because allBrothers are totally different box.
- `brothersCopy == user.sibling;` // output and reason  Ans- true
reason- when  we call brothersCopy then ans will be robb, ryan, and john and again we convert brothersCopy to User.sibling and compare to each other and result will be true.
- `brothersCopy === user.sibling;` // output and reason Ans- true
reason- when  we call brothersCopy then ans will be robb, ryan, and john and again we convert brothersCopy to User.sibling and compare to each other and result will be true.
- `brothersCopy[0] === user.sibling[0];` // output Ans- true 
- `brothersCopy[1] === user.sibling[1];` // output Ans- true
- `user.sibling[1] === newUser.sibling[1];` // output Ans- true
 