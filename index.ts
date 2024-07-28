const User = {
    name: 'shahbaz',
    email: 'shahbaz@gmail.com',
    isActive: true
};

type UserType = {
    name: string;
    isPaid: boolean;
};

function createUser(user: UserType) {
    console.log(user);
}
let newUser={ name: "shahbaz", isPaid: false ,email:'shah@gmail.com'}
createUser(newUser);

function createCourse(): {name:string,price:number} {
    return {name:'reactjs',price:399};
}

export {}; // Ensures this file is treated as a module
