import clienteService from "../service/cliente-service.js";

(async () => {
	const pegaurl = new URL(window.location);

	const id = pegaurl.searchParams.get("id");

	const inputNome = document.querySelector("[data-nome]");
	const inputEmail = document.querySelector("[data-email]");

	const dados = await clienteService.editaCliente(id);
	inputNome.value = dados.nome;
	inputEmail.value = dados.email;

	const formulario = document.querySelector("[data-form]");

	formulario.addEventListener("submit", async (evento) => {
		evento.preventDefault();

		await clienteService.atualizaCliente(inputEmail.value, id, inputNome.value);

		window.location.href = "../telas/edicao_concluida.html";
	});
})();
