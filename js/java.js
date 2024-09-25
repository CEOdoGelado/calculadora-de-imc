function calculo_masc(){
    var peso = parseFloat(document.getElementById('peso').value); /*/ dividir logo no começo caso de errado /100;  /*/
    var altura = parseFloat(document.getElementById('altura').value);

    var imc = (peso / (altura*altura)); /*/ conta do IMC /*/
    var text="" /*/ valor NULO /*/
    /*/                                               
    A VARIAVEL "text" ira aparecer na caixa de texto mostrado o resultado do imc
    /*/
    /*/if e else.... CASO mudança altere os VALOR /*/
    if (imc < 18.5){
        text="voce esta muito magro"

    }
    else if (imc < 24.9){
         text="voce esta normal "
         

    }
    else if (imc < 29.9){
         text="voce esta sobrepeso"

    }

    else if (imc < 34.9){
         text="voce esta obeso I "
    }
     else if (imc < 39.9){
         text="voce esta obeso II"

    }
    else if(imc > 40){
         text="voce esta obeso grau III ou Mórbido "

    }
    document.getElementById("texto_").innerText=text
}