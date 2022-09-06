
//Primeira forma de fazer
let faixas = [
    {tooltip: 'até R$800', minimo:0, maximo: 800},
    {tooltip: 'de R$800 a R$1000', minimo:800, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo:1000, maximo: 999999}
];

//Segunda forma de fazer

function criarFaixaPreco(tooltip,minimo,maximo){
    return {
tooltip,
minimo,
maximo
    }
}

let faixas2 = [
    criarFaixaPreco('a',0,50),
     criarFaixaPreco('b',50,100),
      criarFaixaPreco('c',100,200),
]
console.log(faixas);
console.log(faixas2);