let mainCont = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let quoteInput = document.getElementById("quoteInput")
let result = document.getElementById("result");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner")
let options = {
    method: "GET"
}
let uniqueId = setInterval(function() {
    timer.textContent = parseInt(timer.textContent) + 1;
}, 1000)
mainCont.classList.add("d-none");
spinner.classList.remove("d-none");
fetch("https://apis.ccbp.in/random-quote", options)
    .then(function(response) {
        return response.json()
    })
    .then(function(jsonData) {
        mainCont.classList.remove("d-none");
        spinner.classList.add("d-none");
        quoteDisplay.textContent = jsonData.content
    })
submitBtn.addEventListener("click", function(event) {
    if (quoteInput.value === quoteDisplay.textContent) {
        clearInterval(uniqueId);
        result.textContent = "You typed in " + timer.textContent + " seconds"
    } else {
        result.textContent = "You typed incorrect sentence";
    }
})
resetBtn.addEventListener("click", function(event) {
    mainCont.classList.add("d-none");
    spinner.classList.remove("d-none");
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            mainCont.classList.remove("d-none");
            spinner.classList.add("d-none");
            quoteDisplay.textContent = jsonData.content
        })
    result.textContent = "";
    timer.textContent = "0";

})