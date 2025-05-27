function carregar(){
let msg = window.document.getElementById("msg")
let img = window.document.getElementById("imagem")
let data = new Date()   
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){
    console.log("bom dia")
    img.src = "manhã.png"
    document.body.style.background = "#77d3ff"
}
else if(hora >= 12 && hora < 18){
    console.log("boa tarde")
    img.src = "tarde.png"
    document.body.style.background = "#dd6700"
}
else{
    console.log("Boa noite")
    img.src = "noite.png"
    document.body.style.background = "#220a6f"
}
}