const alunos = [
    {
        matricula: "2026001",
        nome: "Ana Souza",
        curso: "Sistemas de Informação",
        situacao: "Ativo"
    },
    {
        matricula: "2026002",
        nome: "João Silva",
        curso: "Administração",
        situacao: "Ativo"
    },
    {
        matricula: "2026003",
        nome: "Maria Oliveira",
        curso: "Engenharia de Software",
        situacao: "Trancado"
    },
    {
        matricula: "2026004",
        nome: "Pedro Santos",
        curso: "Ciência da Computação",
        situacao: "Ativo"
    }
];

const tabela = document.getElementById("tabela-alunos");

alunos.forEach(aluno => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${aluno.matricula}</td>
        <td>${aluno.nome}</td>
        <td>${aluno.curso}</td>
        <td>${aluno.situacao}</td>
    `;

    tabela.appendChild(linha);
});