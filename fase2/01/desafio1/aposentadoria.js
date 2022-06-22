// Calculo de aposentadoria
//
// link: https://github.com/rocketseat-education/bootcamp-launchbase-desafios-01/blob/master/desafios/01-1-primeiros-passos-com-js.md

const aposentado = {
    nome: "Silvana",
    sexo : "F",
    idade: 50,
    contribuicao: 30

}

const M = (aposentado.idade + aposentado.contribuicao) >= 95 && aposentado.contribuicao >= 35 && aposentado.sexo == "M"; 
const F = (aposentado.idade + aposentado.contribuicao) >= 85 && aposentado.contribuicao >= 30 && aposentado.sexo == "F"; 

if(M || F) {
    console.log(`${aposentado.nome}, voce pode se aposentar`);
} else {
    console.log(`${aposentado.nome}, você ainda não pode se aposentar!`)
}