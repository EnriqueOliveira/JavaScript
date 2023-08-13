let valores = [8, 1, 7, 4, 2, 9] 
           //  0  1  2  3  4  5

//console.log(valores)
/*
console.log(valores[0]) // A posição 0 tem o valor 8
console.log(valores[1]) // A posição 1 tem o valor 1
console.log(valores[2]) // A posição 2 tem o valor 7
console.log(valores[3]) // A posição 3 tem o valor 4
console.log(valores[4]) // A posição 4 tem o valor 2
console.log(valores[5]) // A posição 5 tem o valor 9

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // console.log quer dizer "MOSTRAR NA TELA"
}

