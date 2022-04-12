console.log("Estou funcionando!")

//Selecionando o h1 e adicionando a uma variavel chamada header
let header = document.querySelector("h1");

console.log(header);

header.innerText = "Login";

//Meu Mockup de Banco de Dados
const user = {
    username: "admin",
    email: "admin@admin.com",
    password: "admin"
}


function validarLogin()  {
    let typedEmail = document.getElementById("input-email");
    console.log(typedEmail, "--> typedEmail");

    let typedPassword = document.getElementById("input-password")

    if(typedEmail.value === user.email && typedPassword.value === user.password){
        console.log("Usuário e Senha corretos! Login feito com SUCESSO!");
        location.href = "admin.html"
    }else{
        alert("E-mail ou Senha incorretos! Tente novamente!")
}
}












