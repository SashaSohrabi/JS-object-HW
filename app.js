//===============Q1=============
let user = {};

user.name = 'Vasiliy';
user.surname = 'Prohorov';
user.age = 25;

user.phones = {
    "+7": "Russia",
    "+38": "Ukraine",
    "+1": "Usa"
};

user.name = 'Sergey';
delete user.surname;

//===============Q2=============
let userKeys = Object.entries(user);
console.log('User key equals:\n', userKeys);

//===============Q3=============

// For-in method
let student = {},
    key;

for (key in user) {
    student[key] = user[key];
}

student.name = 'Tom'

console.log('Cloned student:\n', student);

// Object.assign
let student2 = Object.assign({}, user);
student2.age = 28;
console.log('Cloned student2:\n', student2);

// Using JSON.parse
let student3 = JSON.parse(JSON.stringify(user));


student3.phones["+1"] = "Canada";
console.log('Cloned student3:\n', student3);

// fully identical shallow clone of obj
let student4 = Object.create(Object.getPrototypeOf
(user), Object.getOwnPropertyDescriptors(user));

student4.phones["+1"] = "Canada";
console.log('Cloned student4:\n', student4);

//===============Q4=============
Object.defineProperty(user, "isHiddenTalent", {
    "writable": true,
    "enumerable": false,
    "configurable": true

});
// let descriptor = Object.getOwnPropertyDescriptor(user, 'isHiddenTalent');
// console.log(JSON.stringify(descriptor, null, 2 ));

// Deep clone of obj
let student5 = Object.create(Object.getPrototypeOf
(user), Object.getOwnPropertyDescriptors(user));

student5.phones["+1"] = "Canada";
console.log('Cloned student5:\n', student5);

//===============Q5=============
user.bbf = 'bbf'
Object.defineProperty(user, "country", {
    value: "Ukraine"
});

delete user.bbf;
delete user.country;

console.log(user.country);
console.log(user.bbf);

//===============Q6=============

user.toString = function () {
    return this.name;
};

/*user.valueOf = function () {
    return this.age;
};*/

console.log('His name is ' + user);
console.log(user * 2);