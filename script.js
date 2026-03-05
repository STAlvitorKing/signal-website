const password = "avlFUCK";

const captions = [

"System scanning...",
"Encrypted signal detected...",
"AI engine running...",
"Market analysis active...",
"Secure signal generated...",
"Crypto system online...",
"Algorithm calculating...",
"Prediction engine ready..."

];

function login(){

let input = document.getElementById("password").value;

if(input === password){

document.getElementById("loginBox").style.display="none";

document.getElementById("mainBox").style.display="block";

}else{

document.getElementById("error").innerText="Wrong Password";

}

}

function getSignal(){

let rand = Math.random();
let value;

if(rand < 0.85){

value = Math.floor(Math.random()*5)+1;

}

else if(rand < 0.97){

value = Math.floor(Math.random()*15)+6;

}

else{

value = Math.floor(Math.random()*80)+20;

}

document.getElementById("result").innerText =
"Signal - " + value + "x";

let caption =
captions[Math.floor(Math.random()*captions.length)];

document.getElementById("caption").innerText = caption;

}
