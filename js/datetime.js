/**
 * Função para atualizar a data e hora no rodapé.
 * Cumpre o requisito: "Deverá estar sempre presente em todas as páginas".
 */
function updateDateTime() {
    // 1. Cria um novo objeto com a data/hora atual do sistema do cliente
    const now = new Date(); 
    
    // 2. Define as opções de formatação (PT-PT, formato 24h)
    const options = {
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
    };

    // 3. Converte a data para uma string legível
    const formattedDateTime = now.toLocaleTimeString('pt-PT', options);

    // 4. Injeta o texto no elemento HTML com id 'datetime'
    const datetimeElement = document.getElementById('datetime');
    if (datetimeElement) {
        datetimeElement.innerHTML = `${formattedDateTime}`;
    }
}

// Chamada inicial para evitar delay de 1 segundo ao abrir a página
updateDateTime(); 

// Define um intervalo para executar a função a cada 1000ms (1 segundo)
setInterval(updateDateTime, 1000);