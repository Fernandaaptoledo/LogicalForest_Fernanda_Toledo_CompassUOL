
numerosPrimos(15);

function numerosPrimos(limite){
    for (let numero = 4; numero <= limite; numero++){
        let ePrimo = true;
        for ( let divisor = 4; divisor < numero; divisor++){
            if (numero % divisor === 0){
                ePrimo = false;
                break;
            }
        }
        if (ePrimo) console.log(numero);
    }
}