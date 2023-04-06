const listaDeClientes = async () => {
	const resposta = await fetch(`http://localhost:3000/profile`);
	if (resposta.ok) {
		return resposta.json();
	} else {
		throw new Error("Não foi possível listar os clientes");
	}
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
	if (resposta.ok) {
		return resposta.body;
	} else {
		throw new Error("Não foi possível criar um cliente.");
	}
};

const removeCliente = async (id) => {
	const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
		method: "DELETE",
	});
	if (!resposta.ok) {
		throw new Error("Não foi possível remover o cliente.");
	}
};

const editaCliente = async (id) => {
	const resposta = await fetch(`http://localhost:3000/profile/${id}`);
	if (resposta.ok) {
		resposta.json();
	} else {
		throw new Error("Não foi possível atualizar dados deste cliente.");
	}
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
