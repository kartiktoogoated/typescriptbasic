interface User {
    id:number;
    name:string;
    isAdmin?:false;
}

function printUserInfo(user: User){
    console.log(`ID: ${user.id}, Name: ${user.name}`);
}

const user: User = {id:1, name:"kartik"};
printUserInfo(user);