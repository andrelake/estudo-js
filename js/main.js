function clicar() {
    document.getElementById("texto").innerHTML = "<b>Cliquei no botão</b>"
    //alert("Cliquei")
}

function redirecionar() {
    //window.open("https://www.uol.com.br/")
    window.location.href = "https://www.uol.com.br/"
}

function trocar(elemento) {
    elemento.innerHTML = "Boaaa!"
    //document.getElementById("mouse").innerHTML = "Boaaa!"
    //alert("Passei o mouse por cima")
}

function voltar(elemento) {
    elemento.innerHTML = "Opa!"
    //document.getElementById("mouse").innerHTML = "Opa!"
}

function load() {
    alert("aeeee")
}

function change(elemento) {
    console.log(elemento.value)
}
//var nome = "Isaac Newton"

//alert("teste de alert");
//alert("Bem vindo, " + nome);

//console.log(nome);
//console.log(nome.replace("Isaac Newton", "Carl Sagan"))
//console.log(nome.toUpperCase());
//console.log(nome.toLowerCase());
//-----------------------------------------------------------------
/*
var listaTeste = ["aaa", "bbb", "ccc", "ddd"]
listaTeste.push("eee")
listaTeste.pop()

console.log(listaTeste)
console.log(listaTeste.toString())
*/
/*
var carro = {nome: "Fusca", cor: "Azul"}
console.log(carro)

var carros = [{nome: "Fusca", cor: "Azul"}, {nome: "Gol", cor: "Branco"}]
console.log(carros)
*/
//-----------------------------------------------------------------
/*
var idade = prompt("Digite sua idade")

if(idade >= 18) {
    alert("Maior de idade")
} else{
    alert("Menor de idade")
}
*/
/*
var i = 0;
while (i < 10) {
    console.log(i)
    i++
}
*/
/*
for(var i=0; i<5; i++) {
    console.log(i)
}
*/
//-----------------------------------------------------------------
/*
var date = new Date()

console.log(date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear())
console.log(date)
*/
//-----------------------------------------------------------------

