
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
