
// else practice with object
const obj = {
    name: 'Pete',
    age: 24,
    sex: 'male',
    children: {
        name: 'Hui',
        age: 1
    }
};

for (let key in obj) {
    if (typeof(obj[key]) === 'object') { //if you dont use "typeof", this construction dont work. In this example, we use "typeof" to compare type of obj[key] to 'object', and if it true we will do code what is below.
        for (let i in obj[key]) {
            console.log(`Ключи обьекта ${i}. А это значения обьекта ${obj[key][i]}`); // obj[key][i] - it`s like obj.key.i - but this construction will dont work. Use only obj[key][i].
        }
    } else {
        console.log(`Ключи обьекта ${key}. А это значения обьекта ${obj[key]}`);
    }
}

///////////////////////////////////////////////////////////////////////////////////

// // // перебор вглубь на один (тоесть на второй слой обьектов).
function copyObj(main) {
    let newObj = {};
    let key;
    for (key in main) {
        if (typeof(main[key]) === 'object') {
            for (let i in main[key]) {
                newObj[key] = {};
                newObj[key][i] = main[key][i];
            }
        } else {
            newObj[key] = main[key];
        }
    }
    return newObj;
}

// // // перебор поверхностный (первый слой обьектов)
// function copyObj(main) {
//     let newObj = {};
//     let key;
//     for (key in main) {
//             newObj[key] = main[key];
//     }
//     return newObj;
// }

const object = {
    a: 1,
    b: 22,
    d: {
        x: 4,
        j: 111
    }
};

const copyObject = copyObj(object);

copyObject.d.x = 155;

console.log(copyObject);
console.log(object);

const soldier = {
    health: 100,
    armour: 50
};

const mex = {};

Object.setPrototypeOf(mex, soldier);
mex.armor = 500;
console.log(mex);



const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
    let bestEmployee = 0;
    for (let employee in employees) {
        // console.log(employees[employee]);
        if (employees[employee] > bestEmployee) {
            bestEmployee = employees[employee];
        }
    }
    return bestEmployee;
};

const countTotalSalary = function(employees) {
  'use strict';
  // Write code under this line
  let totalSalary = 0;
  for(let key of employees){
      totalSalary += employees[key]
  }
  return totalSalary;
};

// Объекты и ожидаемый результат
const developers = {
    mango: 300,
    poly: 250,
    alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
}
console.log(countTotalSalary(supports));
// 500
