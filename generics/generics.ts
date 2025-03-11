const addUID = <T extends {name: string}>(obj: T) =>  {
    let uid = Math.floor(Math.random()*100);
    return {...obj, uid};
}

let docThree = addUID({name: "kartik", age:20});

console.log(docThree);