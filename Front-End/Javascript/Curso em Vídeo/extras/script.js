function verificar(){
    let data = new Date()
    let anoAtual = data.getFullYear()
    let anoEscolhido = document.getElementById("ano")
    let anoDeNascimento = Number(anoEscolhido.value)
    let resultado = document.querySelector("#resultado")
    let radsex = document.querySelector("[name = radsex]:checked")
    let idade = anoAtual - anoDeNascimento
    const genero = radsex.id === "masc" ? "Homem" : "Mulher"
    if(anoDeNascimento>anoAtual || !anoDeNascimento){
        resultado.innerHTML = "Ano inválido, tente novamente"
        return
    }
    let img = document.createElement("img")
        img.setAttribute("id", "foto")
    if (genero == "Homem"){
    if(idade < 2){
        img.setAttribute("src", "bebêHomem.png")
    }
    else if(idade < 12){
        img.setAttribute("src", "criançaHomem.png")
    }
    else if(idade < 18){
        img.setAttribute("src", "adolescenteHomem.png")
    }
    else if(idade < 50){
        img.setAttribute("src", "adultoHomem.png")
    }
    else{
        img.setAttribute("src", "idosoHomem.png")
    }
    }
    if (genero == "Mulher"){
    if(idade < 2){
        img.setAttribute("src", "bebêMulher.png")
    }
    else if(idade < 12){
        img.setAttribute("src", "criançaMulher.png")
    }
    else if(idade < 18){
        img.setAttribute("src", "adolescenteMulher.png")
    }
    else if(idade < 50){
        img.setAttribute("src", "adultaMulher.png")
    }
    else{
        img.setAttribute("src", "idosaMulher.png")
    }
}
 resultado.innerHTML = `Detectamos ${genero == "Homem" ? "um" : "uma"} ${genero} com ${idade} ${idade < 2 ? "ano" : "anos"}`
resultado.appendChild(img)
}
