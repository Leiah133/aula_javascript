var nome = "Léia Oliver";
var idade = 29;
var frase = "Brasil melhor time do mundo"
var n1 = 150
var n2 = 700
var n3 = 200
var n4 = 500
// alerta
// alert(nome + " tem " + idade + " anos");

// mostra no console do navegador: F12 ou insepcionar
console.log(nome)
console.log (n1 + n2) 
console.log (n3 * n4) 
console.log (n1 / n3)
console.log (n2 - n4)
console.log(frase.replace("Brasil", "Corea"))

var lista = ["maça", "pera", "laranja"];
lista.push("melao", "melancia");
lista.pop();
// para verificar o tamanho da lista console.log (lista.length)
// inverter a posição console.log (lista.reverse())
console.log(lista)
console.log (lista.toString())
//substituição da virgula para sua preferencia console.log(lista.join(" - "))
console.log(lista.join(" - "))

// dicionario
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta)

//lista de dicionario
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"mamao", cor:"bege"}, {nome:"banana", cor:"amarela"}]
console.log(frutas)

// verificação de didade ou qualquer outra coisa. if= se  else= se nao
// var idade = prompt("Qual sua idade?")
// if (idade >= 18){
//   alert("maior de idade")
// }else{
//    alert("menor de idade")
// }




//estrutura de repetição
var count = 0
while (count <= 5){
  console.log(count)
  count = count + 1
}
var count; 
for(count=0; count <= 5; count++){
  // alert(count);
}

// data: para alet inserir ex:alert(d.getMonth()) coloque +1 para poder ter o resultado do mes atual

var d = new Date()
// alert(d.getMonth())

//função de soma
function soma(n1, n2){
return n1 + n2;
}
// alert(soma(750, 750))

function setReplace(frase, nome, novo_nome){
  return frase.replace(nome, novo_nome)
}
// alert(setReplace("Vai Japão", "Japão", "Brasil"));


// true= verdadeiro false= falso
function validaIdade(idade){
  if(idade >=18){
    validar = true
  }else{
    validar = false
  }
  return validar
}
// var idade = prompt("Qual sua Idade?")
console.log(validaIdade(idade))

//criando função ao clicar em algum elemento na tela - getElementid trás o id - innerHTML trás o texto ou qualquer outra função a tela quando clicar
function botao() {
  document.getElementById("agradecimento").innerHTML = "obrigado por clicar"
  // console.log(document.getElementById("agradecimento"))
}

// redirecionar para outra página - window.open = nova aba - window.location.href =  mesma página
function redirecionar(){
//  window.open("https://web.dio.me/home") 
 window.location.href = "https://web.dio.me/home"
}
// ESSA FUNÇÃO FUNCIONA PARA APENAS 1 ID - 
// function trocar(){
//   document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
//   // alert("trocar texto")
// }

// function voltar(){
//   document.getElementById("mousemove").innerHTML = " passe o mouse aqui"
// }

//para funcionar com varias IDs e globais nao precisa necessariamente ter uma id
function trocar(elemento){
  elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
  elemento.innerHTML= "passe o mouse aqui"
}

function load(){
  // alert("Página carregada")
}
function funcaoChange(elemento){
console.log(elemento.value)
}



