//Aula 1 Alert, Comsole.log, Strings, váriaveis
/*
var nome = "Lucas Landim Alves";
var n1 = 24;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade +" anos");
alert(idade + idade2)
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Japão", "Brasil").toLowerCase());
alert(frase.replace("Japão", "Brasil"));
*/
//*************************************************************************************************************************************

//Aula 2  Array
/*
var lista = ["maçã", "pera", "laranja"];
lista.push("uva"); //insire uva no array
lista.pop("pera"); //tira pera do array
console.log(lista.length); //mostra a quantidade de dados no array
console.log(lista.reverse()); //imprime de forma reversa, sendo a var 1 2 3, imprime 3 2 1
console.log(lista.toString()); //imprime como texto
console.log(lista.join(" - ")); //troca a virgula pelo caracter inserido no caso foi " - "

var fruta = {nome:"maçã", cor:"vermelha"}; //dicionário
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);

var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]; //dicionário e array
console.log(frutas);
console.log(frutas[1].nome);
console.log(frutas[1].cor);
*/
//*************************************************************************************************************************************

//Aula 3 Estruturas de Repetição e data
/*
//estrutura de repetição IF
var idade = prompt("Qual a sua idade");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");   
};

//estrutura de repetição while
var count = 0;
while (count < 5){
    console.log(count);
    count ++;
};

//estrutura de repetição for
var cout;
for(count=0; count <= 5; count++){
    console.log(count);
};

//Data
var d = new Date; //data completa
console.log(d); //imprime os valores obtidos no 'new Date'
console.log(d.getDate()); //dia
console.log(d.getMonth()+1); //mês, a contagem do Mês se inicia do '0' então para corrigir é necessário somar 1
console.log(d.getFullYear()); //ano
console.log(d.getHours() +":"+ d.getMinutes() +"hs"); //horas com concatenação com os minutos
*/
//*************************************************************************************************************************************

//Aula 4 Funções, variáveis locais e globais
/*
//função de soma
function soma(n1,n2){
    return n1 + n2;
};

console.log(soma(5, 10));

//função de substituição de palavra
function setReplece(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
};

console.log(setReplece("vai Japão","Japão", "Brasil"));

//função de validação de maior idade e exemplo de variável local
function validaIdade(idade){
    var validar; // variável local
    if(idade >= 18){
        validar = true
    }else{
        validar = false

    }
    return validar;
};

var idade = prompt("Qual a sua idade?"); //Exibe a mensagem e recebe o valor da variável
console.log(validaIdade(idade));

//exemplo de váriavel global
var validar;// variável global
function validaIdade(idade){
    validar; 
    if(idade >= 18){
        validar = true
    }else{
        validar = false

    }
    return validar;
};

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/