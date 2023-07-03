let names: string;
let age: number | string;//okay with any of the two types
let isStudent: boolean;
let hobbies: string[];//array of strings 
let role: [number, string];//tuple

type Lists = {
  name: string;
  age?: number;// question mark to make the age enty optional
}

let list: Lists = {
  name: "Feranmi",
  age: 19,
}

let moreLists: Lists[];// array of person objects 

function printName(name: string) {
  console.log(name)
}

let printMoreNames: (name:string) => unknown;// beacause it is not returning anything we make it void and unknow cos we dont know the type it will return 

interface Feranmi {
  bio : string;
  age: number;
}

interface Man extends Feranmi{
  profession: string;
}// this adds Feranmi inside Man

//to do the same extend thing with type

type X = {
  a: string;
  b: string;
}

type Y = X & {
  c: string;
  d: string;
}
//type Z = X & Y; //this makes z have all properties from x and y
printName("Feranmi")

// role = [5, "edad"] //tuple
