const listaDeClientes = () => {
	return fetch(`http://localhost:3000/profile`).then((resposta) => {
		return resposta.json();
	});
};

const criaCliente = (email, nome) => {
	return fetch(`http://localhost:3000/profile`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			nome: nome,
			email: email,
		}),
	}).then((resposta) => {
		return resposta.body;
	});
};

const removeCliente = (id) => {
	return fetch(`http://localhost:3000/profile/${id}`, {
		method: "DELETE",
	});
};

const editaCliente = (id) => {
	return fetch(`http://localhost:3000/profile/${id}`).then((resposta) => {
		return resposta.json();
	});
};

const atualizaCliente = (email, id, nome) => {
	return fetch(`http://localhost:3000/profile/${id}`, {
		method: "PUT",
		headers: { "content-type": "application/json" },
		body: JSON.stringify({ nome: nome, email: email }),
	}).then((resposta) => {
		return resposta.json();
	});
};

const clienteService = {
	atualizaCliente,
	criaCliente,
	editaCliente,
	listaDeClientes,
	removeCliente,
};

export default clienteService;
