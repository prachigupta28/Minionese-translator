var btnTranslate = document.querySelector("#btn-translate");
var input = document.querySelector("#txtarea-input");
var output = document.querySelector("#div-output");
var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(input) {
    var inputText = input.value;
    return serverUrl + "?text=" + inputText;
}

btnTranslate.addEventListener("click",
    () => fetch(getTranslationUrl(input))
    .then(response => response.json())
    .then(json => output.innerText = json.contents.translated)
    .catch((error) => console.log("Error occured: ", error)));