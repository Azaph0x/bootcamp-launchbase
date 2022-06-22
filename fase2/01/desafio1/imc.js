// Cálculo de IMC
//
// link: https://github.com/rocketseat-education/bootcamp-launchbase-desafios-01/blob/master/desafios/01-1-primeiros-passos-com-js.md


const nome = "Carlos";
const peso = 84;
const altura = 1.88;

const imc  = peso / (altura * altura);

console.log(imc)

if(imc >= 29.9) {
    console.log('Voce esta acima do peso');
} else {
    console.log('Voce nao esta acima do peso');
}