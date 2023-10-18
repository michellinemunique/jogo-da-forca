var palavra = new Array();
var controlando = 0;
var tracos = [];
var jogadas = 6;
var imagensForca = [
    'hangman-0.jpg',
    'hangman-1.jpg',
    'hangman-2.jpg',
    'hangman-3.jpg',
    'hangman-4.jpg',
    'hangman-5.jpg',
    'hangman-6.jpg'
];

function preencher(valor) {
    var elemento = document.getElementById("tela");
    var value = elemento.value;
    if (controlando == 0) {
        elemento.value = value + valor;
    }
    if (controlando == 1) {
        preenchimento(valor);
    }
}

function preenchimento(valor) {
    var elemento = document.getElementById("resp");
    var value = elemento.value;
    var conpt = false;
    
    for (var i = 0; i < palavra.length; i++) {
        if (valor == palavra[i]) {
            tracos[i] = valor;
            document.getElementById(valor).disabled = true;
            conpt = true;
        }
    }

    if (!conpt) {
        jogadas = jogadas - 1;
        atualizarImagemForca(jogadas);

        if (jogadas === 0) {
            alert("Você perdeu! Tente Novamente!");
            location.href = "index.html";
        }

        elemento.value = tracos.join(" ");
    }
}

function atualizarImagemForca(tentativasRestantes) {
    var logElement = document.getElementById("log");
    var imagemElement = document.createElement("img");
    imagemElement.src = imagensForca[6 - tentativasRestantes];
    logElement.innerHTML = "";
    logElement.appendChild(imagemElement);
}

function iniciar(tela) {
    var copia = tela.value;
    document.getElementById("tela").disabled = true;
    palavra = copia.split(""); // Converter a palavra em um array de letras
    controlando = 1;
    criarTracos();
}

function criarTracos() {
    var elemento = document.getElementById("resp");
    var tam = palavra.length;
    for (var i = 0; i < tam; i++) {
        tracos[i] = "__";
    }
    elemento.value = tracos.join(" ");
}

