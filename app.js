const button = document.getElementById('button-div'),
guess1 = document.getElementById('guess1'),
guess2 = document.getElementById('guess2'),
guess3 = document.getElementById('guess3')

button.addEventListener('click', Click)

function Click() {
    const num = Math.floor(Math.random() * 100),
    num2 = Math.floor(Math.random() * 100),
    num3 = Math.floor(Math.random() * 100),
    arr = [num, num2, num3],
    output = arr.sort((a, b) => a - b),
    result = document.getElementById('output')
    result.innerHTML = output
}