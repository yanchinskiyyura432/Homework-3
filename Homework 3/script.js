//task 1
// let arr = [2, 3, 4, 5];
// let res = 1;
// i = 0;
// for (i = 0; i < arr.length; i += 1) {
//   res *= arr[i];
//   console.log(res);
// }
// while (i < arr.length) {
//   res *= arr[i];

//   i += 1;
//   console.log(res);
// }

//task 2
// for (let i = 0; i < 14; i += 1) {
//   if (i % 2 == 0) {
//     console.log(i + " is even");
//   } else if (i % 2 != 0) {
//     console.log(i + " is odd");
//   }
// }

//task 3
// k = [];
// function getRandomNum(min, max) {
//   return Math.random() * (max - min) + min;
// }
// function randArray(a) {
//   for (let i = 0; i < a; i += 1) {
//     k[i] = getRandomNum(1,500);
//    k[i] = Math.round(k[i]);
//     console.log(k[i]);
//   }
// }
// randArray(3);

//task 4
// let a = prompt("Enter number");
// let b = prompt("Enter degree");
// a = Math.round(a);
// b = Math.round(b);

// function raiseToDegree(a, b) {
//   let res = Math.pow(a, b);
//   console.log(res);
// }

// raiseToDegree(a, b);

//task 5
// function findMin() {
//   let min = 1;
//   for (i = 0; i < arguments.length; i += 1) {
//     if (arguments[i] <= min) {
//       min = arguments[i];
//     }
//     console.log(min);
//   }
// }
// findMin(4, 1, 17, 5);

//task 6         Некоректно працює, наскільки я зрозумів має бути 2 цикла 1 - вписує у змінну число з n-елементу, який у другому циклі буде зрівнювати цю змінну з іншими елементами
// let arr = [6, 4, 3, 3, 1];
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// function findUniqueArr(arr) {
//   let example;
//   for (let i = 0; i < arr.length; i += 1) {
//     example = arr[i];
//     for (let j = 0; j < arr.length; j += 1) {
//       if (j != i) {
//         if (example == arr[0 + j]) {
//           return false;
//         } else if (example != arr[j]) {
//           return true;
//         }
//       }
//     }
//   }
// }

// let result = findUniqueArr(arr);
// console.log(result);

//task 7
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function lastElement(arr, a) {
//   let lastElem = arr.slice(-a);

//   console.log(lastElem);
// }
// lastElement(arr, 2);

//task 8
// let text = prompt();

// function capitalize(text) {
//   let res = "";
//   for (i = 0; i < text.length; i++) {
//     if (text[i - 1] == " " || i == 0) {
//       res += text[i].toUpperCase();
//     } else {
//       res += text[i];
//     }
//   }
//   return res;
// }

// alert(capitalize(text));
