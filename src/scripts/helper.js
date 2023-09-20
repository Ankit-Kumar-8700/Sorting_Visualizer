let butts_algos=document.querySelectorAll(".algos button");
let inp_as=document.getElementById('a_size');
let array_size=80;
let inp_gen=document.getElementById("a_generate");
let inp_aspeed=document.getElementById("a_speed");
let speed=1000;
let delay_time=10000/(Math.floor(array_size/10)*speed);
let c_delay=0;



let div_sizes=[];
let divs=[];
let margin_size=0;

export {butts_algos,inp_as,inp_gen,inp_aspeed,div_sizes,divs,margin_size,speed,c_delay,delay_time,array_size};

export const vis_speed=(v)=>
{
    switch(parseInt(v))
    {
        case 1: speed=3;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
        default: console.log("Invalid speed");
                 speed=1000;
                 break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
}

export const set_c_delay=(x)=>{
    c_delay=x;
}

export const set_array_size=(x)=>{
    array_size=x;
}

export const disableButtons=()=>{
    const en_dis=document.querySelectorAll(".en_dis");
    for(let i=0;i<en_dis.length;i++)
    {
        en_dis[i].disabled=true;
    }
}

export const enable_buttons=()=>
{
    const en_dis=document.querySelectorAll(".en_dis");
    window.setTimeout(function(){
        for(var i=0;i<en_dis.length;i++)
        {
            en_dis[i].disabled=false;
        }
    },c_delay+=delay_time);
}

export const div_update=(cont,height,color)=>{
    if(!cont) return;
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}


export const generateArray=(cont)=>{

    cont.innerHTML="";
    divs=[];
    div_sizes=[];

    for(let i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(130) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        if(divs[i])
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
  }