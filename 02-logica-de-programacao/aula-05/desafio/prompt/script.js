const promptWithValidation = (message, validator, errorMessage) => {
    let input;
    do {

        try {
            input = prompt(message);
            if (!validator(input)) {
                throw new Error(errorMessage)
            }

        } catch(e) {
            console.error(e.stack)
        }
        
    } while (!validator(input));
    return input;
};

const validarNome = (input) => input && /^[A-Za-z\s]+$/.test(input.trim());
const validarTurma = (input) => input && input.trim().length > 0;
const validarNotas = (input) => {

    const notasArray = input && input.split(',').map(parseFloat);
    return notasArray.length >= 3 && notasArray.every((nota) => !isNaN(nota));
};

const obterNome = function () {
    return promptWithValidation('Informe seu nome: ', validarNome, 'Informe pelo menos um caractere e apenas letras.');
}

const obterTurma = function () {
    return promptWithValidation('Informe sua turma: ', validarTurma, 'Informe pelo menos um caractere.');
}

const obterNotas = function () {
    return promptWithValidation('Informe suas notas separadas por vírgula: ', validarNotas, 'Informe pelo menos três números separados por vírgula.');
}

const calcularMedia = (notas) => {
    const totalNotas = notas.reduce((acc, nota) => acc + nota, 0);
    return totalNotas / notas.length;
}

const recuperaDados = () => {
    const nome = obterNome();
    const turma = obterTurma();
    const notas = obterNotas().split(',').map(parseFloat);
    const media = calcularMedia(notas);
    return { nome, turma, notas, media };
};

const aluno = recuperaDados();
console.log(aluno);
