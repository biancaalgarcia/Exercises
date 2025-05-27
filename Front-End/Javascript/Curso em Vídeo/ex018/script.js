let numero;
let select = document.getElementById("valores");
let resultado = document.getElementById("resultado");
let valores = [];

function adicionar() {

    numero = Number(document.getElementById("numeros").value);
     let input = document.getElementById("numeros");

    if (input.value === "") {
        window.alert("Digite um valor antes de adicionar.");
        return;
    }
    
    if (!numero || numero < 1 || numero > 100) {
        return;
    }

    if (valores.includes(numero)) {
        window.alert("Já tem o valor na lista");
    } else {
        valores.push(numero);
        const novaOption = document.createElement("option");
        novaOption.text = `Valor ${numero} selecionado.`;
        select.appendChild(novaOption);
        resultado.innerHTML = ""
    }
    input.value = " "
    input.focus()

}

function finalizar() {
    if (valores.length === 0) {
        window.alert("Adicione valores antes de finalizar");
        return;
    }

    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;

    for (let pos in valores) {
        soma += valores[pos];
        if (valores[pos] > maior) maior = valores[pos];
        if (valores[pos] < menor) menor = valores[pos];
    }

    let media = soma / tot;

    resultado.innerHTML = `Ao todo, temos ${tot} números selecionados.<br>`;
    resultado.innerHTML += `O maior valor informado foi ${maior}.<br>`;
    resultado.innerHTML += `O menor valor informado foi ${menor}.<br>`;
    resultado.innerHTML += `Somando todos os valores, temos ${soma}.<br>`;
    resultado.innerHTML += `A média dos valores digitados é ${media.toFixed(2)}.<br>`;
}