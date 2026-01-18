/**
 * Base de Dados local (Objeto JSON) com os detalhes dos serviços.
 * Permite carregar conteúdo dinamicamente sem recarregar a página.
 */
const serviceDetails = {
    'ac': {
        title: "A/C e Aquecimento",
        desc: "Manutenção do ar condicionado para garantir temperatura ideal.",
        points: ["Recarga de gás", "Teste de fugas", "Filtro de habitáculo"]
    },
    // ... outros serviços ...
};

/**
 * Abre o Modal e preenche-o com os dados do serviço clicado.
 * @param {string} serviceId - A chave do serviço (ex: 'ac', 'motor')
 */
function openModal(serviceId) {
    const modal = document.getElementById("serviceModal");
    const listElement = document.getElementById("modalList");
    
    // Verifica se o serviço existe na base de dados
    if (serviceDetails[serviceId]) {
        // Injeta o Título e a Descrição
        document.getElementById("modalTitle").textContent = serviceDetails[serviceId].title;
        document.getElementById("modalDesc").textContent = serviceDetails[serviceId].desc;
        
        // Limpa a lista antiga para não acumular
        listElement.innerHTML = "";

        // Cria dinamicamente os <li> para cada ponto da lista
        if (serviceDetails[serviceId].points) {
            serviceDetails[serviceId].points.forEach(point => {
                const li = document.createElement("li");
                li.textContent = point;
                listElement.appendChild(li);
            });
        }

        // Torna o modal visível (Flex para centrar)
        modal.style.display = "flex";
    }
}

/**
 * Fecha o modal ao clicar no 'X' ou fora da caixa de conteúdo.
 */
function closeModal() {
    document.getElementById("serviceModal").style.display = "none";
}

// Event Listener para fechar ao clicar no fundo escuro
window.onclick = function(event) {
    const modal = document.getElementById("serviceModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}