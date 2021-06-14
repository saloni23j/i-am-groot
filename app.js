var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/groot.json"

function getURL(text){
    return serverURL + "?" + "text=" + text
}
function errorHandler(error){
    console.log("Some error occured");
    alert("Try again Later!");
}
function clickHandler()
{
var inputText = textInput.value;
fetch(getURL(inputText))
.then(response => response.json())
.then(json =>{
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;
})
.catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)
