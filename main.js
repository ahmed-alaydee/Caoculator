document.addEventListener('DOMContentLoaded', function() {
    const calculatorContainer = document.getElementById("calculator_container");
    const displayArea = document.getElementById("disply_area");

    calculatorContainer.addEventListener('click', function(e) {
        if (e.target.nodeName === "BUTTON") {
            const buttonText = e.target.textContent.trim();
            switch (buttonText) {
                case "C":
                    clearDisplay();
                    break;
                case "DEL":
                    deleteOneValue();
                    break;
                case "=":
                    evaluate();
                    break;
                default:
                    addToDisplayArea(buttonText);
            }
        }
    });

    function clearDisplay() {
        displayArea.textContent = "";
    }

    function addToDisplayArea(value) {
        displayArea.textContent += value;
    }

    function deleteOneValue() {
        let currentDisplay = displayArea.textContent;
        displayArea.textContent = currentDisplay.slice(0, -1);
    }

    function evaluate() {
        try {
            let result = eval(displayArea.textContent);
            displayArea.textContent = result;
        } catch (error) {
            displayArea.textContent = "Error";
        }
    }
});


