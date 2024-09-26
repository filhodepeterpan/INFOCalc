function calculaQuadrado(){
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    resultado.innerHTML="";

    for (let i = 1; i <= numero; i++){
        resultado.innerHTML+= `${i*i}<br>`;
    }
}

function somaImpares(){
    let numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    resultado.innerHTML="";

    let soma = 0;

    for (let i = 1; i <= numero; i++){
        
        if (i % 2 != 0){
            soma += i;
        }
        resultado.innerHTML = soma;
    }
}

function fatora(){
    let numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    resultado.innerHTML="";

    for (let i = (numero-1); i >= 1; i--){
        numero*=i;
        resultado.innerHTML= numero;
    }
}

function verificaPrimos(){
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    
    resultado.innerHTML="";

    for (let i = 2; i <= numero; i++){
        primo = true;

        for(let p = 2; p < i; p++){

            if(i % p == 0){
                primo = false;
                break;
            }
        }

        if (primo){
            resultado.innerHTML+= `${i}<br>`;
        }
    }
}