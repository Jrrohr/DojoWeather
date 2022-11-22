function convertToF(temp) {
        return Math.round(temp * 1.8 + 32);
}

function convertToC(temp) {
        return Math.round((temp - 32) * .5556);
}

function convert(element) {
        for(var i = 1; i < 9; i++) {
                var tempSpan = document.querySelector("#temp" + i);
                var tempVal = parseInt(tempSpan.innerText);
                if(element.value == "°F") {
                        tempSpan.innerText = convertToF(tempVal);
                }
                else {
                        tempSpan.innerText = convertToC(tempVal);
                }
        }
}

function hide() {
        var cookies = document.querySelector("#cookieBox")
        cookies.style.display = "none"
}