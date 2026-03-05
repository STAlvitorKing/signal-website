const correctPassword = "shahed";

function checkPass(){

let pass = document.getElementById("password").value;

if(pass === correctPassword){

document.getElementById("login").style.display="none";
document.getElementById("main").style.display="block";

}else{

alert("Wrong Password");

}

}

function getSignal(){

let num = Math.floor(Math.random()*1000)+1;

document.getElementById("result").innerText =
"Signal - " + num + "x";

document.getElementById("confidence").innerText =
"Success Rate: 99%";

}
