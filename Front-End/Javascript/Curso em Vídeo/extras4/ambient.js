let coleguinha = {nome: "Maria",
    sexo: "Feminino",
    Idade: 17,
    envelhecer(n=0){
        console.log("Envelheceu")
        this.Idade += n
    }
}
let idadeAntes = coleguinha.Idade
coleguinha.envelhecer(2)
console.log(`Sua amiga ${coleguinha.nome}, sexo: ${coleguinha.sexo}, idade: ${idadeAntes} e agora envelheci ele pra ${coleguinha.Idade}`)