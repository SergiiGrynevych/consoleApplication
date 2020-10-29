// const objC = {
//     z: 1
// };

// const objB = Object.create(objC);
// objB.x = 'XxX';

// console.log(objB)

// const objA = Object.create(objB);
// objA.a = 'AaaA';
// console.log(objA);
// objA.z = 666;
// console.log(objA)

///// class

// const Car = function (value) {
//     this.a = value;
// };
// const myCar = new Car(5);
// console.log(myCar);

// const myCar1 = new Car(10);
// console.log(myCar1);

// const myCar2 = new Car(30);
// console.log(myCar2);




/////// first level
// const Car = function (brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };

// const myCar = new Car('audi', 'q5', 50000);
// console.log(myCar);

// const myCar1 = new Car('ferrari', 'hui5', 80000);
// console.log(myCar1);

//// second level
// const Car = function (config = {}) { // деструкторизировать можно и в параметрах, тогда в скобках нам нужно прописать ({ brand, model, price } = {})
//     const { brand, model, price } = config; // деструкторизация
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// }

// const myCar = new Car({ brand: 'audi', model: 'q5', price: 50000})
// console.log(myCar)

// const myCar1 = new Car({ brand: 'ferrari', model: 'qweasdz', price: 80000});
// console.log(myCar1);

// const myCar2 = new Car();
// console.log(myCar2);

// const Car = function ({ brand, model, price} = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// }

// Car.prototype.changePrice = function (newPrice) {
//         this.price = newPrice;
// };
     
// const myCar = new Car({
//     brand: 'BMW',
//     model: 'X5',
//     price: 50000
// });
// myCar.changePrice(666);
// console.log(myCar)

// const myCar1 = new Car({
//     model: 'X5',
//     price: 50000
// });
// console.log(myCar1);

///////// User /////////

// const User = function ({ name, age, hobby } = {}) {
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
// };

// User.prototype.changeHobby = function (newHobby) {
//   this.hobby = newHobby;
// };

// const myUser = new User({
//     name: 'Ivan',
//     age: 21,
//     hobby: 'football'
// });
// myUser.changeHobby('baseball');
// console.log(myUser);

// const myUSer1 = new User({
//   name: 'Pete',
//   age: 18,
//   hobby: 'dota 2'
// });

// User.logInfo = function (obj) {
//   console.log('name: ', obj.name);
// };

// User.logInfo(myUser);

// console.log(myUSer1);
//////

// const objA = {
//   a: 1,
// }
// console.log(objA.__proto__ === Object.prototype) 

////



// class Car {
//   constructor({brand, model, price} = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// const carInstance = new Car({
//   brand: 'BMW',
//   model: 'X5',
//   price: 50000
// });
// carInstance.changePrice(666);

// console.log(carInstance);


// const User = function ({name, age, gender} = {}) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// };
// User.prototype.newName = function(elseName){
//   this.name = elseName;
// };

// const myUser = new User({
//   name: 'Pete',
//   age: 18,
//   gender: 'male'
// });
// myUser.newName('Ivan');

// console.log(myUser);

// class User{
//   // static description = 'description';
//   static newUser(userOne) {
//     console.log(userOne);
//   }

//   constructor({name, age, mail} = {}) {
//     this.name = name;
//     this.age = age;
//     this._mail = mail;
//   }

//   get mail() {
//     return this._mail;
//   }
//   // getName() {
//   //   return this.name;
//   // } // обьявление геттера как свойство класса (так раньше делали)
  
//   set mail(newMail) {
//     this._mail = newMail;
//   }
//   // setName(newName) {
//   //   this.name = newName;
//   // } // обьявление сеттера как свойство класса (так раньше делали)
// }

// const myUser1 = new User({
//   name: 'Peter',
//   age: 21,
//   mail: 'gangster@gmail.com'
// });

// User.newUser(myUser1);

// myUser1.mail = 'Vitaliy@gmail.com';
// console.log(myUser1.mail);

// // console.log(myUser1);

// const myUser2 = new User({
//   name: 'Max',
//   age: 45,
//   mail: 'gan12121@gmail.com'
// });
// console.log(myUser2);

// // const myUser2 = new User({
// //   name: 'Бодя',
// //   age: 27,
// //   mail: 'KOL@gmail.com'
// // });
// // console.log(myUser2);


// // Геттер и Сеттер на обьекте - 

// const obj = {
//   _a: 100,

//   get a() {
//     return this._a;
//   },

//   set a(x) {
//     this._a = x;
//   },
// };

// obj.a = 7778;

// console.log(obj.a);



// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function (login, email) {
//   return `login ${this.login} : ${this.email}`;
// };

// //console.log(typeof Account.prototype.getInfo);
// // 'function'

// const mango = new Account( 'Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo()); 
// // 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account( 'Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'





//  // Write code under this line
// class User{
//   constructor(name, age, followers){
//     	  this.name = name;
//       	this.age = age;
//       	this.followers = followers;
//     }
//   	getInfo(name, age, followers){
//     	return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
//     }
// }  

// console.log(typeof User);
// // 'function'

// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo()); 
// // 'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo); 
// // 'function'  

// const poly = new User( 'Poly', 3, 17);
// console.log(poly.getInfo());
// // 'User Poly is 3 years old and has 17 followers'



 // Write code under this line
class Storage{
  constructor(items){
   	this.items = items;
  }
  getItems(){
    return this.items;
  }
  addItem(item){
  	return this.items.push(item);
  }
  removeItem(item){
  	if(this.items.includes(item)){
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
}

console.log(typeof Storage);
// 'function'

const goods = [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem('Пролонгер');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */


