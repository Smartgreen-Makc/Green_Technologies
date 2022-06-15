const controls = document.querySelectorAll('.controls');
const controlsUp = document.querySelectorAll('.controls__up');
const controlsDown = document.querySelectorAll('.controls__down');
const controlsLeft = document.querySelectorAll('.controls__left');
const controlsRight = document.querySelectorAll('.controls__right');
const controlsOk = document.querySelectorAll('.controls__ok');
const tank = document.querySelector('.tank');
const tankPuha = document.querySelector('.tank__puha');
const snaryadOk = document.querySelector('.snaryad');







function clickControlDown(e){
   const upcontrolDown = e.currentTarget;
  
   
}

function clickControlLeft(e){
   const upcontrolLeft = e.currentTarget;
   tank.style.left = "100px"; 
}
function clickControlRight(e){
   const upcontrolRight = e.currentTarget;
   tank.style.left = "500px";
}
function clickControlOk(e){
   const upcontrolOk = e.currentTarget;
   snaryadOk.style.display = 'block';
}

controlsUp.forEach(controls => {
   controls.addEventListener('keydown',clickControlUp);
});

controlsDown.forEach(controls => {
   controls.addEventListener('keydown',clickControlDown);
});
controlsLeft.forEach(controls => {
   controls.addEventListener('keydown',clickControlLeft);
});

controlsRight.forEach(controls => {
   controls.addEventListener('keydown',clickControlRight);
});
controlsOk.forEach(controls => {
   controls.addEventListener('mousedown',clickControlOk);
});

function clickControlUp(e){

}
document.addEventListener('keydown',function(e){console.log(e.target);
   if(e.code == 'KeyW') {//w
   tankPuha.style.cssText = `transform: rotate(15deg);
   top: 85px;`;
  setTimeout(puhaTime,5000);
   snaryadOk.style.cssText = `transform: rotate(15deg);
                              top: 340px;
                              left: 505px;
                              animation: wistrelUp 1.5s linear;`;
  }
  if(e.code == 'KeyS'){
   tankPuha.style.cssText = `transform: rotate(-10deg);
   top: 115px;`;
   //setTimeout(puhaTime,5000);
   snaryadOk.style.cssText = `transform: rotate(-10deg);
                              top: 405px;
                              left: 500px;
                              animation: wistrelDown 1.5s linear;`;
  }
  if(e.code == 'KeyA'){
   tank.style.left = "100px";
   snaryadOk.style.left = "100px"

  }
  if(e.code == 'KeyD'){
   tank.style.left = "500px";
   //snaryadOk.style.left = "500px"
  }
   
})

function puhaTime(){
   tankPuha.style.cssText = `transform: rotate(0deg);
                              top: 100px;`;
   snaryadOk.style.cssText = `animation: wistrelTop 1.5s infinite linear;`;
}
      
   

   



/*


console.log(controlsDown);
console.log(controlsLeft);
console.log(controlsRight);

function contolSS(){
   //console.log('left');
}

controlsLeft.forEach(c => {
   c.addEventListener("click", contolSS);
});

const controlS = document.querySelectorAll('.controls');



function contolSS(){
   console.log('up');
}



/*
controlS.forEach(controlsdown => {
   controlsdown.addEventListener("click", contolSD);
});
*/
/*
function clickUP(){
   //console.log(event.target);
   console.log(controlsUp);
   //console.log(event.clientY);
   tankPuha.style.cssText = `transform: rotate(10deg);
   top: 90px;`;

}
controlsUp.forEach( => {
   controlsUp.addEventListener("click",clickUP);
})
*/

/*
function clickDOWN(){
   console.log(Event);
   console.log(Event);
}
*/
//controlsUp.addEventListener("click",clickUP);
//controlsDown.addEventListener("click",clickDOWN);

/*

controlsUp.addEventListener("click", function (e) {
   console.log('down');
});
controlsUp.addEventListener("click", function (e) {
   console.log('left');
});
controlsUp.addEventListener("click", function (e) {
   console.log('right');
});

*/

//var activeUp = window.getComputedStyle(controlsUp,':active');
//console.log(activeUp);


/*tankPuha.style.cssText = `transform: rotate(10deg);tank.style.left = "100px";
                              top: 90px;`;
//tankPuha.classList.add('active');
//controlsUp.classList.add('active')
console.log(tankPuha);
for(let className of tankPuha.classList){
   console.log(className);
}
*/