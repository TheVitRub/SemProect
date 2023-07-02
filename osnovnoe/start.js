import { Osnova } from "./rabota.js";

var id = 1;
var i;
var start = false;
(function () {
    
    async function Start()
{

    i = await Osnova(id)
    if(i == 1){btn(btn)}
}
    document.getElementById('btn').addEventListener('click', Start, true);
  })();
    function btn(callback){
        (function () {
            async function Start_bef()
        {
            console.log('123')
            if(id == 1){}
            else{
                id = id - 6
            }
            console.log('Id.Back:' + id)
            let g = await Osnova(id)
            callback(btn)
        }
            document.querySelector('.btn1').addEventListener('click', Start_bef, true);
          })();
          (function () {
             async function Start_next(){
                console.log('Id:' + id)
            id = id + 6
            console.log('Id:' + id)
            let g = await Osnova(id) 
            callback(btn)
        }
            document.querySelector('.btn2').addEventListener('click', Start_next,true);
          })();
          
    }
    
  