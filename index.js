const display = document.getElementById("display")
const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        const value = button.textContent;
        
        if (button.classList.contains("clear")) {
            display.value = "";
        }
        else if (button.classList.contains("equal")) {
            try {
                display.value = eval(display.value)
            } catch {
                console.log("Error")
                display.value = "Error"
            }
        } else {
            display.value += value;
        }
    })    
});

document.addEventListener("keydown", function(event) {
    const key = event.key;

    if ("0123456789+-*/".includes(key)) {
        display.value += key;
    } 
    else if (key === "Escape") {
        display.value = "";
    } 
    else if (key === "Enter") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
});