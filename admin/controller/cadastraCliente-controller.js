import clienteService from "../service/cliente-service";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
	evento.preventDefault();
	const nome = evento.target.querySelector("[data-nome]").value;
	const email = evento.target.querySelector("[data-email]").value;

	clienteService.criaCliente(nome, email).then((resposta) => {
		window.location.href = "../telas/cadastro_concluido.html";
	});
});