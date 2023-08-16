const minhaFuncao1 = (a,b, c = 2, ...arg) => {
    const [notas] = arg
    console.log({a,b,c, notas})
    // console.log(arguments) // ReferenceError: arguments is not defined at minhaFuncao1 
}

minhaFuncao1('Mateus', 26, 1033, 'notas:3,4,5');

minhaFuncao2(1,2,3)
function minhaFuncao2() {
    const [a, b, c] = [...arguments]
    console.log({a, b, c})
}