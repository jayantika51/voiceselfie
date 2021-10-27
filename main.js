var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start(){

    document.getElementById("text").innerHTML="";
    recognition.start();
}
    recognition.onresult = function run (event){
console.log(event);

var Content=event.result[0][0].transcript;
console.log(Content);

document.getElementById("text").innerHTML= Content;
    }

