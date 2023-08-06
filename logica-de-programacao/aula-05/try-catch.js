// --------
// TRY CATCH

let mensagem = ''
try{
    console.log(frutas) // is not defined
    mensagem = '// Deu tudo certo :)'
}catch(erro){
    // console.error(erro)
    mensagem = '// Deu tudo errado :('
}finally{
    console.log(mensagem) // sempre executa
}

try{
    // if(false){
    //     throw 'Uma mensagem de erro bem bacana'
    // }

    console.log('Continua executando')

    // throw 'Ocorreu um erro!'
    throw {
        mensagem: 'Mensagem do erro.',
        codigo: 778,
        data: new Date(),
    }
    console.log('Não executa')
}catch(erro){
    console.log(erro)
}


console.clear();
try {
    throw new Error(JSON.stringify({
        mensagem: 'Deu erro.'
    }))

    throw new Error('Deu errado.')
}catch(erro){
    // console.log(erro.message)
    // console.log(erro.stack)
    // console.log(erro.name)
    console.log(JSON.parse(erro.message))
}