const objC = {
    z: 1
};

const objB = Object.create(objC);
objB.x = 'XxX';

console.log(objB)

const objA = Object.create(objB);
objA.a = 'AaaA';
console.log(objA);
objA.z = 666;
console.log(objA)