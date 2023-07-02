import { Persons } from "./api.mjs";
import { Planet } from "./api.mjs";
export async function getData (id) {
    let data = await get_1(id)
    setTimeout(() => {
    }, 10 * 1000)    
    return data
}
async function get_1(id){
    let DataArray = []
    return  fetch("https://rickandmortyapi.com/api/character/" + id)
        .then(response => response.json())
        .then(data => {
            DataArray.push(new Persons(
            data.id,
            data.name,
            data.status,
            data.species,
            data.type,
            data.gender,
            data.origin,
            data.location,
            data.image,
            data.episode,
            data.url,
            data.created
            ))
            return DataArray;
        });
}
export async function getPlanetData (data, id) {    
    let url = data[0].location.url
    if (url == ''){
        url = 'https://rickandmortyapi.com/api/location/' + id
        let data1 = await get_2(url)
        return data1
    }
    let data1 = await get_2(url)
    return data1
}
export async function getOrPlanetData (data, id) {
    let url = data[0].origin.url
    if (url == ''){
        url = 'https://rickandmortyapi.com/api/location/' + id
        let data1 = await get_2(url)
        return data1
    }
    let data1 = await get_2(url)
    return data1
}
async function get_2(url){
    let DataArray = []
    return  fetch(url)
        .then(response => response.json())
        .then(data => {
            DataArray.push(new Persons(
            data.id,
            data.name,
            data.type,
            data.dimension,
            data.residents,
            data.url,
            data.created,
            ))

            return DataArray;
        });
}