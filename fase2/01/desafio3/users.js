/* 
    Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array)

    https://github.com/rocketseat-education/bootcamp-launchbase-desafios-01/blob/master/desafios/01-3-funcoes-e-estruturas-de-repeticao.md

*/

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

  function checaSeUsuarioUsaCSS(usuario) {
    //poderia ter utilizado um includes
    for(tec of usuario.tecnologias) {
        if(tec == 'CSS') {
            return true;
        }
    }
    
    return false;
  }

  function checkAllUsersCSS() {
    for (let i = 0; i < usuarios.length; i++) {
        const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
      
        if (usuarioTrabalhaComCSS) {
          console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
        }
      }
  }

  function getAllUsers() {

    for(user of usuarios) {
        console.log(`${user.nome} trabalha com ${user.tecnologias}`);
    }
  }

  getAllUsers();
  checkAllUsersCSS()