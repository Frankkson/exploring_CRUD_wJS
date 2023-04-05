import clienteService from "../service/cliente-service.js";

const pegaurl = new URL(window.location);
console.log(pegaurl);

const id = pegaurl.searchParams.get("id");

const inputNome = document.querySelector("[data-nome]");
const inputEmail = document.querySelector("[data-email]");

clienteService.editaCliente(id).then((dados) => {
	inputNome.value = dados.nome;
	inputEmail.value = dados.email;
});

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
	evento.preventDefault();

	clienteService
		.atualizaCliente(inputEmail.value, id, inputNome.value)
		.then(() => {
			window.location.href = "../telas/edicao_concluida.html";
		});
});
