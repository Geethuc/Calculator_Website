document.addEventListener('DOMContentLoaded', function() {
let input = document.getElementById('inputBox');
    let buttons = document.querySelectorAll('button');
    let string = "";

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
           let buttonText = e.target.textContent;

            switch (buttonText) {
                case '=':
                    string = evaluateExpression(string);
                    break;
                case 'AC':
                    string = clearExpression();
                    break;
                case 'DEL':
                    string = deleteLastCharacter(string);
                    break;
                default:
                    string += buttonText;
            }

            input.value = string;
        });
    });

    function evaluateExpression(expression) {
        try {
            return eval(expression);
        } catch (error) {
            return 'Error';
        }
    }

    function clearExpression() {
        return '';
    }

    function deleteLastCharacter(expression) {
        return expression.slice(0, -1);
    }
});

