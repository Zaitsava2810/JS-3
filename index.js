// Task 1
let ltr = ["a", "b", "c"];
let nmbr = [1, 2, 3];
let arr = ltr.concat(nmbr);
console.log(arr);
// объединяем массивы

// Task 2
let ltr2 = ["a", "b", "c"];
let arr2 = ltr2.push(1, 2, 3);
console.log(ltr2);
// добавляем в массив эл-ты

// Task 3
let nmbr2 = [1, 2, 3];
nmbr2.reverse();
console.log(nmbr2);
// меняется последовательность эл-в

//  Task 4
let nmbr3 = [1, 2, 3, 4, 5];
let arr3 = nmbr3.slice(0, 1, 2);
console.log(arr3);
// новый эл-т из nmbr3 в arr3

// Task 5
let nmbr4 = [1, 2, 3, 4, 5];
let arr4 = nmbr4.slice(3, 4);
console.log(arr4);
// новый эл-т из nmbr4 в arr4

// Task 6
let obj = {
  js: "test",
  jq: "hello",
  css: "world",
};
console.log(Object.keys(obj));
// найти массив ключей

// Task 7
let nmbr5 = [1, 2, 3, 4, 5];
for (let i = 0; i < nmbr5.length - 1; i++) {
  nmbr5.splice(i, 0, nmbr5.pop());
}
console.log(nmbr5);
// поменять последовательность без reverse

// Task 8
let arr5 = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let i = 0; i < arr5.length; i++) {
  for (let j = 0; j < arr5[i].length; j++) {
    sum += arr5[i][j];
  }
}
console.log(sum);
// сумма двумерного массива

// Task 9
let arr6 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
let sum2 = 0;
for (let i2 = 0; i2 < arr6.length; i2++) {
  for (let j2 = 0; j2 < arr6[i2].length; j2++) {
    for (let k = 0; k < arr6[i2].length; k++) {
      sum2 += arr6[i2][j2][k];
    }
  }
}
console.log(sum2);
// сумма трехмерного массива

// Task 10
let man = {
  name: "Александр",
  sername: "Попов",
  age: "35",
  weight: "95кг",
  height: "190см",
  pulse: "120/70",
};

let man2 = {
  name: "Александр",
  sername: "Васильев",
  age: "50",
  weight: "80кг",
  height: "190см",
  pulse: "110/75",
};

for (const key in man) {
  if (man[key] == man2[key]) {
    console.log(man);
  }
}
