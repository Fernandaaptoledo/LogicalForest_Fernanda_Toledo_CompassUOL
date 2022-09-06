
const array = [5,6,7,8,9,10];

console.log(mediaDoAluno(array));
 function mediaDoAluno(notas){
    const media = calcularMedia(notas);
    
    if (media < 5) return 'recuperação';
    if (media >= 6) return 'regular';
    if (media >= 7) return 'boa';
    if (media >= 8) return 'mediana';
    if (media >= 9) return 'muito boa';
       return 'exelente'
 }
function calcularMedia(array){
    let soma =0;
    for(let valor of array){
        soma += valor;
    }
    return soma/(array.length);
}
