// Considere o seguinte array:
// const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
// 1290.00, 15000.00];

// a. Imprima no console o índice do primeiro salário maior que
// 7.500 utilizando o findIndex
// b. Crie uma nova lista filtrada com os salários que são maior que
// 8.000 utilizando o filter

//letra a
const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00]

console.log(salarios.findIndex(salario => salario > 7500));

//letra b

const novaListaSalarios = []

//filtra todos os salrios que são maior que 8000
let salarioMaiorQue8000 = salarios.filter(salario => salario > 8000)

novaListaSalarios.push(salarioMaiorQue8000)

console.log(novaListaSalarios);


