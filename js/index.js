var inpTxt = document.getElementById('inpTxt');
var btn = document.getElementById('btn');
var mensagem = document.getElementById('mensagen');

btn.addEventListener('click', function(){
    
    var mensagemCifrada = inpTxt.value.toLowerCase();

    var mensagemDecifrada = decifrarMensagem(mensagemCifrada);

    if(mensagemCifrada === ''){

        mensagem.innerHTML = 'Digite algo!';

    }else{

        mensagem.innerHTML = `Mensagem Decifrada: ${mensagemDecifrada}`;

    }

});

function decifrarMensagem(mensagemCifrada){

    var alfabeto = 'abcdefghijklmnopqrstuvwxyz';

    var mensagemDecifrada = '';

    for(var i = 0; i <  mensagemCifrada.length; i++){

        //obten o caracter cifrado atual
        var caracterCifrado = mensagemCifrada[i];

        // Obtém o índice do caractere no alfabeto
        var indiceAlfabeto = alfabeto.indexOf(caracterCifrado);

        if(indiceAlfabeto !== -1){
    
            //Calcula o índice decifrado com um deslocamento de 3 posições para trás
            // Adiciona 26 para lidar com números negativos e aplica o módulo 26
            var indiceDecifrado = (indiceAlfabeto - 3 + 26) %26;
    
            // Obtém o caractere decifrado correspondente
            var caracterDecifrado = alfabeto[indiceDecifrado];
    
            mensagemDecifrada += caracterDecifrado;
    
        }else{

            // Se não for uma letra do alfabeto, mantenha o caractere como está
            mensagemDecifrada += caracterCifrado
        }

    }

    return mensagemDecifrada;

}