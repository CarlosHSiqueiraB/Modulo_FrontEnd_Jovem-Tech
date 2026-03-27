// let pontuacao = 1000;
// let ponto = 10
// const nome = " Ronaldo";
// console.log(pontuacao+nome)

// Isso é um objeto estruturado em JS, que guarda em padrão Chave e Valor (ex: chave = Resposta correta | Valor = 1
const pergunta = {
    texto: "Que dia é o aniversário de Thaissa?",
    opcoes: ["12/10","24/10","27/03"],
    respostaCorreta: 2,
    categoria: "Aniversário"
}

//Versão vetor 

const perguntas = [{
    texto: "Que dia é o aniversário de Laysa?",
    opcoes: ["09/09","24/10","27/03"],
    respostaCorreta: 1,
    categoria: "Aniversário"
},
{
    texto: "Que dia é o aniversário de Thaissa?",
    opcoes: ["09/09","24/10","27/03"],
    respostaCorreta: 2,
    categoria: "Aniversário"
},
{
    texto: "Que dia é o aniversário de Arthur?",
    opcoes: ["09/09","24/10","27/03"],
    respostaCorreta: 0,
    categoria: "Aniversário"
}
]


console.log(perguntas[1].texto+" "+perguntas[1].opcoes[perguntas[1].respostaCorreta])