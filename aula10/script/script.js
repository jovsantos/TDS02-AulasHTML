console.log("Hello World")

const nome = "João"; // Recebeu valor não pode ser alterada
let idade = "21"; // Posso Alterar
var sobrenome = "Ferreira" // Escopo global

// function multiplicar(x, y) { //função tradicional
//   return x*y;    
// }

//Arrow function

const multiplicar = (x, y) => {
    console.log(x*y)
    return `O resultado da multiplicação é: $(x*y)`
}
const raizQuadrada = (n) => Math.sqrt(n)

const subtrair = (x, y) => x-y

const potencia = (x,y) => x^y

const dividir = (x,y) => {
    if (y != 0) {
        return x/y
    }

return "Denominador precisa ser diferente de 0"
}