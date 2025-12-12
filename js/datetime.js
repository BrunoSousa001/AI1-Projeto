function updateDateTime() {
    // Cria um novo objeto Date
    const now = new Date(); 
    
    const options = {
        //year: 'numeric', 
        //month: '2-digit', 
        //day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false // Formato 24h
    };

    // Formata a data e hora
    const formattedDateTime = now.toLocaleTimeString('pt-PT', options);

    // Encontra o elemento e atualiza o seu conteúdo
    const datetimeElement = document.getElementById('datetime');
    if (datetimeElement) {
        datetimeElement.innerHTML = `${formattedDateTime}`;
    }
}

updateDateTime(); 
// Atualizar a cada segundo
setInterval(updateDateTime, 1000);
