let audio = document.querySelector(`#audioFile`);

let backwardBtn = document.querySelector(`#playBackRate`);
let playBtn = document.querySelector(`#play`);
let pauseBtn = document.querySelector(`#pause`);
let fastForwardBtn = document.querySelector(`#fastForward`);

//functions/



let rewindTheMusic = function () {
    audio.rewind();
};





var lamp = document.querySelector('.st1');
var svgCircle = document.getElementById("svg-audio");
var nailVar = document.getElementById("nailID");

let playTheMusic = function () {
    audio.play();
    svgCircle.classList.add("rotate");
    nailVar.classList.remove("kl");
    nailVar.classList.add("nail");
    lamp.style.fill = 'green';
}


playBtn.addEventListener(`click`, playTheMusic);


let pauseTheMusic = function () {
    audio.pause();
    svgCircle.classList.remove("rotate");
    nailVar.classList.remove("nail");
    nailVar.classList.add("kl");
    lamp.style.fill = 'red';
    
}


pauseBtn.addEventListener(`click`, pauseTheMusic);

let loadTheMusic = function () {
    audio.load();
};



fastForwardBtn.addEventListener(`click`, function () {
    
    
    if (audio.playbackRate == 1){
        audio.playbackRate = 4.0;
    }
    else{
   
        audio.playbackRate = 1;
    }
    
});
/*
backwardBtn.addEventListener(`click`, function () {
    
    console.log(5 + 6);
    if (audio.playbackRate == 1){
        audio.playbackRate = -1.0;
    }
    else{
   
        audio.playbackRate = 1;
    }
    
});
*/
