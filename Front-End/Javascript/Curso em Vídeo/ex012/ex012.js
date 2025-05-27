let agora = new Date()
let horario = agora.getHours()
console.log(`Agora são ${horario} horas`)
if (horario < 12){
    console.log("bom dia")
}
else if (horario <= 18){
    console.log("boa tarde")
}
else{
    console.log("Boa noite")
}