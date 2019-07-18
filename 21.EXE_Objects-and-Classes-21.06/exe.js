let obj = {
    prop0: 0, 
    prop1: 1, 
    prop2: 2
};
console.log(obj);

let prop = 'prop1';
console.log(obj[prop]);
console.log(`---------------\n`);

console.log(obj['prop1']);
console.log(obj.prop1);
console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(`---------------\n`);

let fewProp = ['prop0', 'prop2'];
for (let propName of fewProp) {
    console.log(obj[propName]);
}

console.log(Object.entries(obj));
console.log(Object.length);
console.log(Object.keys(obj).length);
console.log(Object.getOwnPropertyNames(obj).length);
console.log(Object.prototype);
console.log(obj);
