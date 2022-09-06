
verificarVelocidade(120);

function verificarVelocidade(velocidade){
     if (velocidade <=100)
     console.log('Ok');
     else {
        const pontos = ((velocidade - 100) / 5);
        if (pontos >= 21)
        console.log('Carteira Suspensa');
        else
            console.log('Pontos',pontos);
        
     }
}