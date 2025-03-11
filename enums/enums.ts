enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resource<T>{
    uid:number;
    resourcetype:ResourceType;
    data:T;
}

const docOne: Resource<object> = {
    uid:1,
    resourcetype: ResourceType.BOOK,
    data: {title: "name of the wind"}
}

const docTwo: Resource<object> = {
    uid:10,
    resourcetype: ResourceType.DIRECTOR,
    data: {title: "Kartik"}
}
console.log(docOne, docTwo);