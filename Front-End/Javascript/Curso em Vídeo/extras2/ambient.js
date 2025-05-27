let num = [5, 8, 9, 2]
num[4] = 7
num.push(3)
num.sort()
console.log(`Nosso vetor é ${num} e tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(2)
if (pos == -1){
    console.log(`O valor não foi encontrado`)
}
else{
    console.log(`O valor foi encontrado, está no vetor ${pos}`)
}