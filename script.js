/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.opacity = "0";

setTimeout(() => {

document.getElementById("loader").style.display = "none";

},800);

},2000);

});


/* ==========================
TYPEWRITER
========================== */

const message =

"Some people become friends... Some become memories... And then there are people who quietly become your favourite part of every day.";

const typing = document.querySelector(".typing");

let i = 0;

function type(){

if(i < message.length){

typing.innerHTML += message.charAt(i);

i++;

setTimeout(type,40);

}

}

type();


/* ==========================
BACKGROUND MUSIC
Starts when user scrolls
========================== */

const player = document.getElementById("player");

let musicStarted = false;

window.addEventListener("scroll", () => {

if(!musicStarted){

player.src = "haareya.mp3";

player.volume = 0.55;

player.play().catch(()=>{});

musicStarted = true;

}

},{once:true});


function playSong(song){

player.src = song;

player.play();

}


/* ==========================
Pause music during videos
========================== */

document.querySelectorAll("video").forEach(video=>{

video.addEventListener("play",()=>{

player.pause();

});

video.addEventListener("pause",()=>{

if(musicStarted){

player.play().catch(()=>{});

}

});

video.addEventListener("ended",()=>{

if(musicStarted){

player.play().catch(()=>{});

}

});

});


/* ==========================
Floating Hearts
========================== */

setInterval
