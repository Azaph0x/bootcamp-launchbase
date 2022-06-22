// Criar um programar que calcula a media
// das notas entre os alunos e envia
// mensagem dos calculo da media...

const TurmaA = {
    nome: 'Turma A',
    alunos: [
    {
        nome: 'Joao',
        nota: 9.1  
    },
    {
        nome: 'Marcos',
        nota: 7.1
    },
    {
        nome: 'Rodrigo',
        nota: 5.1
    }
]
}


const TurmaB = {
    nome: 'Turma A',
    alunos: [
    {
        nome: 'Mario',
        nota: 5.1  
    },
    {
        nome: 'Maria',
        nota: 3.1
    },
    {
        nome: 'Polo',
        nota: 4.1
    }
]
}

function calcMedia(alunos) {
    let soma = 0;
    for(let i in alunos) {
        soma += alunos[i].nota;
    }

    return soma / alunos.length;
}

function enviarMensagem(turma, media) {
    if(media > 5) {
        console.log(`Parabens ${turma} a media da turma foi de ${media}`);
    } else {
        console.log('Infelizmente a media da turma foi menor que 5 :C');
    }
    
}


const mediaA = calcMedia(TurmaA.alunos);
const mediaB = calcMedia(TurmaB.alunos);

enviarMensagem(TurmaA.nome, mediaA);
enviarMensagem(TurmaB.nome, mediaB);