Uma empresa de engenharia precisa fazer a separação de seus parceiros/sócios
em duas modalidades, parceiros PF, pessoas físicas no qual possuem CPF e PJ pessoas jurídicas no qual possuem CNPJ, dito isso temos a seguinte lista: 


const parceirosExemplo = [
    { parceirosId: '12345678901', nome: 'Carlos Antonio' },
    { parceirosId: '12345678901234', nome: 'Empresa Xpto Ltda.' },
    { parceirosId: '12345678901', nome: 'Informática' },
    { parceirosId: '12345678901235', nome: 'Construtora' },
]

o resultado final desse agrupamento deverá ser algo como:

const parceirosAgrupados = {
    PF: [
        { parceirosId: '12345678901', nome: 'Carlos Antonio' },
        { parceirosId: '12345678901', nome: 'Informática' },
    ],
    PJ: [
        { parceirosId: '12345678901234', nome: 'Empresa Xpto Ltda.' },
        { parceirosId: '12345678901235', nome: 'Construtora' },
    ]
}

// utilize a seguinte variável:

const listaParceiros = [{"parceirosId":"19660156627897","nome":"Fernanda Santos"},{"parceirosId":"23998058019370","nome":"Rafael Souza"},{"parceirosId":"92291338611","nome":"Maria Silva"},{"parceirosId":"55443795656","nome":"Maria Souza"},{"parceirosId":"77743761456","nome":"Ana Costa"},{"parceirosId":"47202302326","nome":"Maria Ferreira"},{"parceirosId":"58017232567","nome":"Sofia Costa"},{"parceirosId":"16733009491247","nome":"Lucas Silva"},{"parceirosId":"63351859919","nome":"Rafael Souza"},{"parceirosId":"84297701780","nome":"Carlos Oliveira"}];

// Dicas, utilize o conteúdo aprendido na aula de hoje.
// Leve em conta o parceirosId para fazer a diferenciação.