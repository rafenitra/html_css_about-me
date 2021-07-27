const teny = document.getElementById('autotext');
const text = "Ary Fenitra RAFANOMEZANTSOA IGGLIA 3";
let index = 0;
const hafainganana = (min,max)=>{
    return Math.floor(Math.random() * (max - min) + min)
}
const play = () => {
    teny.innerHTML = text.slice(0,index);
    index++;
    if(index>text.length){
        index = 0;
    }
    clearInterval(timer);
    timer = setInterval(play,hafainganana(200,500));
};

let timer = setInterval(play,300);