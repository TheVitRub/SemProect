import { Persons } from "./api.mjs";

async function DataPersons(){
    let pers = new Persons();
    return await pers
}
console.log(await DataPersons())