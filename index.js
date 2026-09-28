const form = document.querySelector("form");
const email = document.querySelector("#userMail");
const password = document.querySelector("#userPassword");

console.log("Running");

const alunos = [
    {
        email: "teste@gmail.com",
        password: 1234
    }
];

form.addEventListener("submit", formulario);

function formulario(event) {
    event.preventDefault();

    let isUser = false;
    
    //Chegar Email
    if (email.value == alunos[0].email) {
        isUser = true;
    } else {
        alert("Email Inválido!");
    }

    //Checar Senha
    if (password.value == alunos[0].password) {
        isUser = true;
    } else {
        alert("Senha Inválida!");
    }

    if (isUser == true) {
         window.location.href = "page.html";
    }
    
    console.log("Formulário Processado!");
}
