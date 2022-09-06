

let endereco = {
    Rua: 'Antonio Alves Melo',
    Cidade: 'Jaboticabal',
    CEP: '16408-25',

};
function exibirEndereco(endereco){
    for (let chave in endereco)
    console.log(chave, endereco[chave]);
}
exibirEndereco(endereco);