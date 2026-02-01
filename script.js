let music=document.getElementById("bgMusic");

window.onload=function(){
if(localStorage.getItem("music")==="on"){
music.play();
}
music.volume=0.5;
playHeartbeat();
createHearts();
};

function playHeartbeat(){
let beat=new Audio("heartbeat.mp3");
beat.volume=0.25;
beat.play();
setInterval(()=>{
let pulse=new Audio("heartbeat.mp3");
pulse.volume=0.15;
pulse.play();
},6000);
}

function toggleMusic(){
if(music.paused){
music.play();
localStorage.setItem("music","on");
}
else{
music.pause();
localStorage.setItem("music","off");
}
}

function setVolume(val){
music.volume=val;
}

function funnyNo(){
let txt=document.getElementById("funnyText");
if(txt){
txt.innerHTML="Dii 😌💕 NO is not allowed, only YES!";
}
}

function openPopup(){
playHeartbeat();
document.getElementById("popup").style.display="flex";
}

function nextPage(){
window.location.href="about.html";
}

/* Floating Hearts Generator */
function createHearts(){
setInterval(()=>{
let heart=document.createElement("span");
heart.innerHTML="💖";
heart.style.left=Math.random()*100+"vw";
heart.style.animationDuration=(3+Math.random()*3)+"s";
document.getElementById("floating-hearts").appendChild(heart);
setTimeout(()=>{heart.remove();},6000);
},400);
}