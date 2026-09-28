//Formulário
const form = document.querySelector("form");
const email = document.querySelector("#userMail");
const password = document.querySelector("#userPassword");
const cadastrar = document.querySelector("#cadastrar");
const voltar = document.querySelector("#voltar");

//Usuários cadastrados
const userName = document.querySelector(".userName");
const userMat = document.querySelector(".userMat");
const userMail = document.querySelector(".userMail");
const userCourse = document.querySelector(".userCourse");

console.log("Running");

const alunos = [
    {
        nome: "João",
        matricula: 230120,
        curso: "Análise e desenvolvimento de sistemas",
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
         window.location.href = "assets/pages/page.html";
    }
    
    console.log("Formulário Processado!");
}

userName.innerHTML = `<p>${alunos[0].nome}</p>`;
userMat.innerHTML =  `<p>${alunos[0].matricula}</p>`;
userMail.innerHTML = `<p>${alunos[0].email}</p>`
userCourse.innerHTML = `<p>${alunos[0].curso}</p>`;

voltar.addEventListener("click", () => {
    window.location.href = "/assets/pages/page.html";
})