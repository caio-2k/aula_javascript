function clicou(){
  document.getElementById("agradecimento").innerHTML = "<strong>Obrigado por clicar!</strong>";
  
  // console.log(document.getElementById("agradecimento"));
  // alert("Obrigado por clicar");
}

function redirecionar(){
  window.open("https://www.google.com.br") //janela difenrete
  //window.location.href = "https://www.google.com.br"; //mesma aba
}

function trocar(elemento){
  elemento.innerHTML = "Obrigado por passar o mouse!";
  //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
  //alert("Trocar Texto"); 
}

function voltar(elemento){
  elemento.innerHTML = "Passe o mouse aqui!";
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
}

function load(){
  alert("Página Carregada");
}

function change(elemento){
  console.log(elemento.value);
}


// function soma(n1, n2) {
//   return n1 + n2;
// }

// function setReplace(frase, nome, novo_nome){
//   return frase.replace(nome, novo_nome);
// }
// // alert(setReplace("Vai Japão", "Japão", "Brasil")); 

// function validaIdade(idade) {
//   let validar = true;

//   if (idade >= 18) {
//     validar = true;
//   } else {
//     validar = false;
//   }
//   return validar;
// }

// let idade = prompt("Qual sua idade?");
// console.log(validaIdade(idade));

//alert(soma(5, 10));

// let d = new Date();
// alert(d.getMonth()+1);
// alert(d.getDay());
//alert(d);

// let count;

// for(count = 0; count <= 5; count++){
//   alert(count);
// }

// let count = 0;
// while(count < 5){
//   console.log(count);
//   alert(count);
//   count++;
// }

// var idade = prompt("Qual sua idade?");

// if (idade >= 18){
//   alert("Maior de idade");
// }else{
//   alert("Menor de idade");
// }

// var frutas = [
//   {nome: "Maçã", cor: "Vermelha"},
//   {nome: "Uva", cor: "Roxa"}
// ]; //Lista de objetos JSON

// console.log(frutas);
// alert(frutas[1].nome);

// var fruta = {nome: "Maçã", cor: "Vermelha"}; //Obj JSON
// console.log(fruta.nome);
// alert(fruta.cor);

// var lista = ["Maçã", "Pera", "Laranja"];

//lista.push("Uva");

//lista.pop(); //Retirar ultimo elemento do array (no caso uva);

// console.log(lista);
// console.log(lista.length); //Tamanho do array
//console.log(lista.reverse); //Inverte o array 
//console.log(lista.toString()[0]); //Transforma array em string e imprime o primeiro elemento do primeiro item (m)
//console.log(lista.join(" - ")); //Separa a lista em string separada por traço

//alert(lista[1]);



// let nome = "Caio Vinicius"
// let idade = 21;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";
// alert("Bem vindo " + nome + ", " + "sua idade é: " + idade);

// alert(idade + idade2);
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());
// alert(frase.replace("Japão"  , "Brasil"));