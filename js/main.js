//Aula 5 Manipulando Elementos da Página
function clicou(){
    //alert("Obrigado por clicar!");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!" ; //insere a mensagem no id
    //document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>" ; //exemplo com html no innerHTML
    //console.log(document.getElementById("agradecimento"));

};

function redirecionar(){
    window.open("https://globallabs.academy/"); //abre em nova aba
    //window.location.href = "https://globallabs.academy/"; //abre na mesma aba
};

function trocar(elemento){
    elemento.innerHTML = "<b>Obrigado por passar o Mouse aqui</b>";
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o Mouse aqui</b>";
    //alert("trocar texto");
};

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui.";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
};

function load(){
    alert("Página carregada!");
}

function funcaochange(elemento){
    console.log(elemento.value);
}