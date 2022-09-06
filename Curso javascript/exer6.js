
const filme = {
    titulo: 'Duro de matar',
    ano: 1988,
    diretor: 'John Mc Tierman',
    personagem: 'Bruce Willis'
}
exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
if (typeof obj  [prop] === 'string')
console.log(prop, obj [prop])
}