// Palavras para o jogo
const palavras = ["javascript", "html", "css", "openai", "forca"];


let palavraSelecionada = "";
let palavraEscondida = [];
let tentativas = 6;
let letrasUsadas = [];
let imagemAtual = 0;

function iniciarJogo() {
    
    palavraSelecionada = palavras[Math.floor(Math.random() * palavras.length)];

    palavraEscondida = Array(palavraSelecionada.length).fill('_');

   
    atualizarInterface();
}

function atualizarInterface() {
    document.getElementById('palavra').textContent = palavraEscondida.join(' ');
    document.getElementById('tentativas').textContent = `Tentativas restantes: ${tentativas}`;
    document.getElementById('resultado').textContent = '';
    let letrasUsadasTexto = letrasUsadas.join(', ');
    document.getElementById('letras-usadas').textContent = `Letras usadas: ${letrasUsadasTexto}`;
}

function atualizarImagem() {
    document.getElementById('enforcado').src = `./hangman-${imagemAtual}.jpg`;
}

function checarLetra() {
    let letra = document.getElementById('letra').value.toLowerCase();

    if (letrasUsadas.includes(letra)) {
        document.getElementById('resultado').textContent = 'Você já usou essa letra!';
        return;
    }

    letrasUsadas.push(letra);

    if (palavraSelecionada.includes(letra)) {
        for (let i = 0; i < palavraSelecionada.length; i++) {
            if (palavraSelecionada[i] === letra) {
                palavraEscondida[i] = letra;
            }
        }
    } else {
        tentativas--;
        imagemAtual++;
        atualizarImagem();
    }

    atualizarInterface();

    if (tentativas === 0 || !palavraEscondida.includes('_')) {
        document.getElementById('resultado').textContent = tentativas === 0 ? 'Você perdeu!' : 'Parabéns, você ganhou!';
        document.getElementById('letra').disabled = true;
        document.getElementById('btn-verificar').disabled = true;
    }
}


iniciarJogo();
