let $ = document.querySelector.bind(document);
let painel1 = $('#painel1');
let painel2 = $('#painel2');
let contador = 0;
let array = [];


function Inserir(valor) {
  array.push(valor);
  painel1.innerText += valor;
  console.log(array);
}

function Limpar() {
  painel1.innerText = '';
  painel2.innerText = '';
  contador = 0;
  array = [];
}

function Calcular() {
  let calculo = painel1.innerText;
  painel2.innerText = eval(calculo);
}

function BotaoIgual() {
  let calculo = painel1.innerText;
  painel1.innerText = eval(calculo);
  painel2.innerText = '';
}

function sinalParenteses() {
  let numeroOuSinal = array.slice(-1);
  if (contador == 0 && Number(numeroOuSinal)) {
    painel1.innerText += "*(";
    contador = 1;
    exit();
  }
  if (contador == 0 && !Number(numeroOuSinal)) {
    painel1.innerText += "(";
    contador = 1;
    exit();
  }
  if (contador == 1) {
    painel1.innerText += ")";
    contador = 0;
  }
  Calcular();
}

function botaoMenosMais() {

}


