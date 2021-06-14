var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}
function errorHandler(error){
    console.log("error occured", error);
    alert("something is broken! Try again in sometime")
}

function clickHandler(){
    //  output.innerText = "banana" + textInput.value
    var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
       .then(response => response.json())
       .then(json =>{
           var translatedtext = json.contents.translated;
           outputDiv.innerText = translatedtext;
       })
   .catch(errorHandler)
};


btnTranslate.addEventListener("click", clickHandler)
