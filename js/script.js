
var controlsUp = document.querySelector('.contpols__up');
var controlsDown = document.querySelector('.contpols__down');
var controlsLeft = document.querySelector('.controls__left');
var controlsRight = document.querySelector('.controls__right');
var tank = document.querySelector('.tank');

var tankPuha = document.querySelector('.tank__puha');

if(controlsUp.classList.contains('.controls__up')){
   tankPuha.style.cssText = `transform: rotate(10deg);top:90px;`;
}

//tank.style.left = "200px";

//tankPuha.classList.add('active');
//controlsUp.classList.add('active')
console.log(tankPuha);
for(let className of tankPuha.classList){
   console.log(className);
}