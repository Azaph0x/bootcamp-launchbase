/* 

Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

link: https://github.com/rocketseat-education/bootcamp-launchbase-desafios-01/blob/master/desafios/01-2-lidando-com-objetos-e-vetores.md

*/

const dev = {
  nome: "Joaozin",
  idade: 20,
  especialidades: [
    {
      nome: "C++",
      especialidade: "Desktop",
    },
    ,
    {
      nome: "Python",
      especialidade: "Data Science",
    },
    {
      nome: "JavaScript",
      especialidade: "Web/Mobile",
    },
  ],
};

console.log(`O usuário ${dev.nome} tem ${dev.idade} e usa a tecnologi ${dev.especialidades[0].nome} com especialidade em ${dev.especialidades[0].especialidade}`);
