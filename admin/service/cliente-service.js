const listaDeClientes = async () => {
	const resposta = await fetch(`http://localhost:3000/profile`);
	return await resposta.json();
};

const criaCliente = async (email, nome) => {
	const resposta = await fetch(`http://localhost:3000/profile`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			nome: nome,
			email: email,
		}),
	});
	return resposta.body;
};

const removeCliente = (id) => {
	return fetch(`http://localhost:3000/profile/${id}`, {
		method: "DELETE",
	});
};

const editaCliente = async (id) => {
	const resposta = await fetch(`http://localhost:3000/profile/${id}`);
	return await resposta.json();
};

const atualizaCliente = async (email, id, nome) => {
	const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
		method: "PUT",
		headers: { "content-type": "application/json" },
		body: JSON.stringify({ nome: nome, email: email }),
	});
	return await resposta.json();
};

const clienteService = {
	atualizaCliente,
	criaCliente,
	editaCliente,
	listaDeClientes,
	removeCliente,
};

export default clienteService;
