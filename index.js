"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'shahbaz',
    email: 'shahbaz@gmail.com',
    isActive: true
};
function createUser(user) {
    console.log(user);
}
var newUser = { name: "shahbaz", isPaid: false, email: 'shah@gmail.com' };
createUser(newUser);
function createCourse() {
    return { name: 'reactjs', price: 399 };
}
