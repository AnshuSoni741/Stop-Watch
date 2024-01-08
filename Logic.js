let time_run = false;
let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let count_show = document.querySelector("#timer");
let hr_show = document.querySelector("#hr");
let min_show = document.querySelector("#min");
let sec_show = document.querySelector("#sec");

let hr_str = "0"+hr;
let min_str = "0"+min;
let sec_str = "0"+sec;
let count_str = "0"+count;



function start(){
    if(time_run==true){return;}
    time_run = true;
    stopwatch();
}


function stop(){
    time_run=false;
}


function reset(){
    time_run = false;
    count_show.innerHTML = "00";
    sec_show.innerHTML = "00";
    min_show.innerHTML = "00";
    hr_show.innerHTML = "00";
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    ()=>{reset();}
}


function stopwatch(){
    if(!time_run){return;}
    count = count + 1;
    // count_show.innerHTML = count;

    if(count==100){
        sec = sec+1;
        count = 0;
    }

    if(sec==60){
        min = min+1;
        sec = 0;
    }
    
    if(min==60){
        hr = hr + 1;
        min = 0;
    }

    count_str = count;
     sec_str = sec;
     min_str = min;
      hr_str= hr;
//---------------------------------------------------------
    if(count<10){
        count_str = "0" + count_str;
    }
    if(sec<10){
        sec_str = "0" + sec_str;
    }
    if(min<10){
        min_str = "0" + min_str;
    }
    if(hr<10){
        hr_str = "0" + hr_str;
    }

//--------------------------------------------------------


    count_show.innerHTML = count_str;
    sec_show.innerHTML = sec_str;
    min_show.innerHTML = min_str;
    hr_show.innerHTML = hr_str;


    if(time_run==true){
    setTimeout("stopwatch()",10);
    }


}