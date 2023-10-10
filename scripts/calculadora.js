function calcular(event) {
    event.preventDefault();

    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    const operacao = document.getElementById("operacao").value;
    let resultado;

    if (operacao == '+') {
        resultado = somar(n1, n2);
    } else if (operacao == '-') {
        resultado = subtrair(n1, n2);
    } else if (operacao == '/') {
        resultado = divisao(n1, n2);
    } else if (operacao == '*') {
        resultado = multiplicacao(n1, n2);
    } else if (operacao == '') {

        resultado = "Selecione uma operação !";
    }

    document.getElementById('result').innerText = resultado;

    if (typeof resultado === 'undefined' || resultado === null) {
        document.getElementById('result').innerText = "Erro ao calcular. Verifique as entradas.";
    } else {
        document.getElementById('result').innerText = resultado;
    }
}

function somar(n1, n2) {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, insira dois números válidos!');
        return;
    }

    return num1 + num2;
}

function subtrair(n1, n2) {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, insira dois números válidos!');
        return;
    }

    return num1 - num2;
}

function divisao(n1, n2) {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, insira dois números válidos!');
        return;
    }

    if (num2 === 0) {
        alert('A divisão por zero não é permitida!');
        return;
    }

    return num1 / num2;
}

function multiplicacao(n1, n2) {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, insira dois números válidos!');
        return;
    }

    return num1 * num2;
}