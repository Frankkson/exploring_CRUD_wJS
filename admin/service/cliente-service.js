const listaDeClientes = () => {
	return fetch("http://localhost:3000/profile").then((resposta) => {
		resposta.json();
	});
};

const clienteService = {
	listaDeClientes,
};
export default clienteService;
