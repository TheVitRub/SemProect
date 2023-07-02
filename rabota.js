import { getData } from "./data_api.js";
import { getPlanetData } from "./data_api.js";
import { getOrPlanetData } from "./data_api.js";
var name
export async function Osnova(id){
    let data = await getData(id)
    let  src =  await Pers_icon(data, id)
    id++
    for( var i =0; i<5;i++){
        let data = await getData(id)
        src = src + await Pers_icon(data, id)
        id++
    }
    let g
    if (name == g){
    name = document.querySelector('input').value;}
    name == window.name
    document.getElementById("body").innerHTML = '<table class="form-4" id="table_first" style="height: 90%; width: 80%">\
    </table>'
    let start = '<tr id="tr_one" class="rick-and-morti" style="height: 50px; width: 200px;">'
    let hello = '<td colspan="4" style="width: 50px;" id="td_one">\
    <h1 id="privet">Приветствую,'+ name +'!</h1>\
    </td></tr>'
    let but_1 = '<td id="td_3" style="width: 50%; height: 100px; colspan="5">\
    <button type="button"  class="btn1" id="btn1" style="width: 97%; height: 100px; text-align: center;">\
    Прошлая\
    </button></td>'
    let but_2 = '<td id="td_3" style="width: 50%; height: 100px; colspan="5">\
    <button type="button"  class="btn2" rowspan="4" id="btn2" style="width: 97%; height: 100px; text-align: center;">\
    Следующая\
    </button> \
    </td>'

    let end = '<td></td>\
    <td></td>'
    document.getElementById("table_first").innerHTML =  start + hello + src + but_1 + but_2 + end


return 1
}
async function  Pers_icon(data, id){
    let loc_planet = await getPlanetData(data,id)
    let or_planet = await getOrPlanetData(data,id)
    
    let photo = '<td id="td_1' + id +'" rowspan="4" style="width: 100%;height: 100%;"><img style="width: 100%;height: 100%;" src="'+data[0].image+'"></img></td>'
    let personal_name = '<td  id="tr_2' + id +'">\
    <h2 >\
    Имя персонажа: </br>\
    </h2>\
    <h3>'
    +data[0].name+
    '</h3>\
    </td>'
    let origin_name = '<td id="tr_3' 
    + id 
    +'" >\
    <h2 >\
    Место рождения: </br>\
    </h2>\
    <h3>'
    +data[0].origin.name+
    '</h3>\
    </td>'
    let location_name = '<td id="tr_4' + id +'">\
    <h2 >\
        Место проживания: </br>\
        </h2>\
        <h3>'
            +data[0].location.name+'\
            </h3>\
            </td>'
    let first_tr = '<tr>' + photo + personal_name + origin_name + location_name + '</tr>'

    let per_status = '<td id="td_5' + id +'" style="width: 75px;height: 150px;">\
    <h2 >\
    Нынешний статус:\
    </h2>\
    </br>\
    <h3>'
    +data[0].status+
    '</td>'
    let planet_status_loc = '<td id="td_6' + id +'" style="width: 75px;height: 150px;" rowspan="3">\
    <h2 >    Статус местонахождения:</br>\
    </h2>\
    <h3>'
    +loc_planet[0].status+
    '</h3></br>\
    <h2 >    Тип планеты местонахождения:</br>\
    </h2><h3>'
    +loc_planet[0].species+'\
    </h3>\
    </td>'
    let planet_status_ori = '<td id="td_7' + id +'" style="width: 75px;height: 150px;" rowspan="3">\
    <h2 >    Статус планеты рождения:</br>\
    </h2>\
    <h3>'
    +or_planet[0].status+'\
    </h3>\
    </br>\
    <h2 >    Тип планеты рождения:\
    </h2>\
    <h3>'
    +or_planet[0].species+
    '</h3>\
    </td>'
    let second_tr = '<tr>' +per_status + planet_status_loc + planet_status_ori + '</tr>'

    let per_species = '<td  id="tr_8' + id +'">\
    <h2 >    Раса:</br>\
    </h2>\
    <h3>'
    +data[0].species+
    '</h3>\
    </h2>\
    </td>'
    let therd_tr = '<tr>' +per_species + '</tr>'

    let per_gender = ' <td  id="tr_9' + id +'">\
    <h2 >    Гендер:</br>\
    </h2>\
    <h3>'
    +data[0].gender+
    '</h3>\
    </h2>\
    </td>'
    let four_tr = '<tr>' +per_gender + '</tr>'

    let src = first_tr + second_tr + therd_tr +four_tr
    return src
}

