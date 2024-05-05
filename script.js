// function getMaxSubSum(arr) {
//   let max = 0;
//   let maxfix = 0;
//   for (let key of arr) {
//     // console.log(arr[key]);
//     console.log(key);
//     maxfix += key;
//     if (max < maxfix) {
//       max = maxfix;
//     }
//     if (maxfix < 0) {
//       maxfix = 0;
//     }
//   }
//   console.log(max);
//   return max;
// }
// getMaxSubSum([-1, 2, 3, -9]);
// getMaxSubSum([2, -1, 2, 3, -9]);
// getMaxSubSum([-1, 2, 3, -9, 11]);
// getMaxSubSum([-2, -1, 1, 2]);
// getMaxSubSum([100, -9, 2, -3, 5]);
// getMaxSubSum([1, 2, 3]);

//

// let arr = [10, 20, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);

// function copySorted(arr) {
//   let arrOne = ["HTML", "JavaScript", "CSS"];
//   let arrTow = arrOne.slice(0, 2);
//   console.log(arrTow.slice);
//   arrOne = arrTow.sort();
//   console.log(arrTow.sort());
// }
//
// let sorted = copySorted(arr);

// console.log(sorted);
// console.log(arr);

// function camelize(str) {
//   return str
//     .split("-")
//     .map((word, index) =>
//       index === 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// }
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// function filterRange(arr, a, b) {
//   return arr.filter((item) => b >= item && a <= item);
// }

// let arr = [1, 2, 3, 4, 5, 6, 6, 5];

// let filtered = filterRange(arr, 5, 6);
// console.log(filtered);
// console.log(arr);

// function filterRangeInPlace(arr, a, b) {
//   for (i = 0; i < arr.length; i++) {
//     let number = arr[i];
//     if (number < a || number > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }
// let arr = [5, 3, 8, 1];
// console.log(arr);
// filterRangeInPlace(arr, 1, 4);

// console.log(arr);

// function copySorted(arr) {
//   return arr.slice().sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);

// let arr = ["Слава", "Cаша", "Миша"];
// let arrOne = arr.slice();
// console.log(arrOne);
// arrOne = arr.sort();
// console.log(arrOne);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((item) => item.name);
// console.log(names);

// let users = ["vasya", "petya", "masha"];
// users.splice(-1);
// console.log(users);

// let names = ["CЛава", "misha", "Koля"];
// names.splice(0, 1, "hi");
// console.log(names);

// let names = ["CЛава", "misha", "Koля"];
// names.splice(1, 0, "Пока");
// console.log(names);

// let arr = ["Путин", "Сталин", "Гитлер", "Ленин", "musolini"];
// arr.reverse();
// console.log(arr);

// function Calculator() {
//   this.calculate = (str) => {
//     console.log(str);
//     let firstStr = str.split(" ");
//     // console.log(firstStr);

//     // console.log(+firstStr[0]);
//     // console.log(+firstStr[2]);
//     // console.log(this.obj);
//     console.log(this.obj["+"]);
//     // console.log(this.obj[firstStr[1]](+firstStr[0], +firstStr[2]));
//     return this.obj[firstStr[1]](+firstStr[0], +firstStr[2]);

//     // if (firstStr[1] === "+") {
//     //   let sum = +firstStr[0] + +firstStr[2];
//     //   console.log(sum);
//     // } else if (firstStr[1] === "-") {
//     //   let minus = firstStr[0] - firstStr[2];
//     //   console.log(minus);
//     // }
//   };
//   this.addMethod = (name, func) => {
//     console.log("name", name);
//     console.log("func", func);
//     console.log(this.obj);
//     this.obj[name] = func;
//   };
//   this.obj = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//   };
// }
// //   let Calculator = calc.split("");
// //   console.log();

// let calc = new Calculator();
// console.log(calc.calculate("3 + 7"));
// console.log(calc.calculate("5 + 8"));
// console.log(calc.calculate("20 - 10"));
// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// // let result = powerCalc.calculate("2 ** 3");
// // console.log(result)
// console.log(powerCalc.calculate("3 * 7"));
// console.log(powerCalc.calculate("5 ** 8"));
// console.log(powerCalc.calculate("20 / 10"));

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [vasya, petya, masha];
// let usersMapped = users.map((item) => ({
//   fullName: `${item.name} ${item.surname}`,
//   id: item.id,
// }));
// console.log(usersMapped);
// console.log(usersMapped[0].id);
// console.log(usersMapped[0].fullName);

// function sortByAge(users) {
//   arr.sort((a, b) => (b.age < a.age ? 1 : -1));
// }

// let vasya = { name: "Вася", age: 25 };
//  let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

//  sortByAge(arr);

//  console.log(arr[0].name);
// console.log(arr[1].name);
// console.log(arr[2].name);

// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }
// let arr = [1, 2, 3];
// shuffle(arr);
// shuffle(arr);
// shuffle(arr);
// console.log(arr);

// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// console.log(getAverageAge(arr));

// function unique(arr) {
//   let result = [];
//   for (str of arr) if (!result.includes(str)) result.push(str);
//   return result;
// }

// let strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "харе",
//   "харе",
//   "кришна",
//   "кришна",
//   ":-O",
// ];
// console.log(unique(strings));

// function groupById(arr) {
//   return users.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {});
// }
// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];
// let usersById = groupById(users);
// console.log(usersById);

// let army = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   },
// };

// let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];
// let soldiers = users.filter(army.canJoin, army);
// console.log(soldiers.length);
// console.log(soldiers[0].age);
// console.log(soldiers[1].age);

// let porno = {
//   minAge: 18,
//   maxAge: 27,
//   cantsee(user) {
//     return user.age < this.minAge;
//   },
// };

// let user = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];
// let persons = user.filter(porno.cantsee, porno);
// console.log(user.length);
// console.log(persons[0].age);

// let myColor = ["Red", "Green", "White", "Black"];
// let firstStr = myColor.join(",");
// console.log(firstStr);
// let firstStrr = myColor.join("+");
// console.log(firstStrr);

// isArray = function (input) {
//   if (toString.call(input) === "[obj.Array]") {
//     return true;
//
//   }
// return false;
// };
// console.log(isArray("w3resource"));
// console.log(isArray([1, 2, 4, 0]));

// function reverse(arr) {
//   let numOne = num.reverse();
//   console.log(numOne);
// }
// let num = [1, 2, 3];
// console.log(reverse(num));

// function isPlainObject(element) {
//   if (Array.isArray(data)) {
//     console.log("arr");
//     return true;
//   } else {
//     console.log("obj");
//     return false;
//   }
// }
// const data = { a: 1 };
// console.log(isPlainObject(data));
// const dataBig = [1, 2, 3];
// console.log(isPlainObject(dataBig));

// let city1 = {
//   name: "Город N",
//   population: 10e6,
//   getName: function () {
//     return {
//       name: "Город N",
//     };
//   },
// };

// let city2 = {
//   name: "Город M",
//   population: 1e6,
//   getName: function () {
//     return {
//       name: "Город N",
//     };
//   },
// };
// city1.getName();
// console.log(city1.name);
// city2.getName();
// console.log(city2.name);
// // city2.exportStr()
