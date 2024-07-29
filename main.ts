console.log('hey shahbaz hopw are you')
 function addition(a:number,b:number):number{

    return a+b
 }
 function signUp(name:string,email:string,password:string,isPaid:boolean){

 }

signUp(
    'shahba',
    'shahbaz@gmail.com',
    '12345678',
    false
)
 let aa=addition(44,22)
 console.log(aa)


 function getValue(myVal:number):string{
    if (myVal>5){
        return "value greator than 5"
    }
    return '200 OK'
 }

let v=getValue(100)
console.log(v);

const heros = ['thor', 'slah', 'saad', 'shahid'];
const heroMessages = heros.map(hero => {
    return `hero is ${hero}`;
});
console.log(heroMessages);


function consoleError(errmsg:string):void{
    console.log(errmsg);
}
function handleError(errmsg:string):never{
    throw new Error(errmsg)
}


 export{}

