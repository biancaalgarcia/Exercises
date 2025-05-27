function contar(){
let numeroInicio = Number(document.getElementById("numeroInicio").value)
let numeroFim = Number(document.getElementById("numeroFim").value)
let passo = Number(document.getElementById("numeroPasso").value)
let resultado = document.getElementById("resultado")

if (isNaN(numeroInicio) || isNaN(numeroFim) || isNaN(passo) || passo  < 0){
    resultado.innerHTML = `<br>Impossível contar`
}
if(passo == 0){
    window.alert("Passo inválido! Considerando PASSO 1!")
    passo = 1
}
    if(numeroInicio < numeroFim){
    resultado.innerHTML = `<br>Contagem crescente...<br>`
for(let c = numeroInicio;c<=numeroFim;c+=passo){
    resultado.innerHTML += `${c}👉`
    }
    resultado.innerHTML += `🏁`
}
if(numeroFim < numeroInicio){
    resultado.innerHTML = `<br>Contagem regressiva...<br>`
for(let c = numeroInicio;c>=numeroFim;c-=passo){
    resultado.innerHTML += `${c}👉`
    }
    resultado.innerHTML += `🏁`
}

}