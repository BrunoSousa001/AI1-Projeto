// Dados dos serviços (Título, Descrição e Lista de Pontos)
const serviceDetails = {
    // --- MECÂNICA ---
    'ac': {
        title: "A/C e Aquecimento",
        desc: "Os especialistas da Fix & Shine realizam a manutenção do ar condicionado para garantir uma temperatura ideal no interior do seu veículo e evitar maus odores e pólen.",
        points: [
            "Recarga do ar condicionado com líquido refrigerante",
            "Verificação de fugas e teste de pressão",
            "Troca do filtro do habitáculo",
            "Limpeza de condutas anti-bactérias"
        ]
    },
    'chapas': {
        title: "Chapas e Carroçaria",
        desc: "Serviço profissional de bate-chapas para recuperar a estética e segurança do seu automóvel após acidentes ou pequenos toques.",
        points: [
            "Reparação de mossas e riscos profundos",
            "Alinhamento de chassis em banco de ensaio",
            "Substituição de painéis danificados",
            "Soldadura e tratamento anti-corrosão"
        ]
    },
    'travoes': {
        title: "Sistema de Travagem",
        desc: "Garanta a sua segurança com uma revisão completa ao sistema de travagem. Utilize apenas peças de qualidade equivalente à origem.",
        points: [
            "Substituição de pastilhas e discos",
            "Verificação e troca de líquido de travões",
            "Teste de eficiência de travagem",
            "Diagnóstico de ABS/ESP"
        ]
    },
    'diagnostico': {
        title: "Diagnóstico Computorizado",
        desc: "Detetamos qualquer anomalia eletrónica no seu veículo utilizando equipamento de diagnóstico de última geração multimarca.",
        points: [
            "Leitura e apagamento de códigos de erro",
            "Análise de parâmetros em tempo real",
            "Reset de intervalos de serviço",
            "Diagnóstico de luzes de avaria no painel"
        ]
    },
    'eletrica': {
        title: "Parte Elétrica",
        desc: "Resolução de todos os problemas elétricos do seu carro, desde baterias a sistemas de conforto.",
        points: [
            "Teste e substituição de baterias",
            "Reparação de alternadores e motores de arranque",
            "Arranjo de vidros elétricos e fechos",
            "Instalação de sensores e multimédia"
        ]
    },
    'motor': {
        title: "Mecânica de Motor",
        desc: "Intervenções profundas e manutenção preventiva para garantir a longevidade do coração do seu automóvel.",
        points: [
            "Substituição de correia de distribuição",
            "Reparação de juntas da cabeça",
            "Substituição de velas e injetores",
            "Controlo de emissões de escape"
        ]
    },
    'suspensao': {
        title: "Suspensão e Direção",
        desc: "Para uma condução confortável e segura, mantenha a suspensão e a direção do seu veículo em perfeito estado.",
        points: [
            "Substituição de amortecedores",
            "Troca de braços de suspensão e casquilhos",
            "Alinhamento de direção 3D",
            "Verificação de folgas na direção"
        ]
    },
    'transmissao': {
        title: "Transmissão",
        desc: "Especialistas em caixas de velocidades manuais e embraiagens para garantir uma condução suave.",
        points: [
            "Substituição de Kit de Embraiagem",
            "Mudança de valvulina da caixa",
            "Substituição de foles e juntas homocinéticas",
            "Diagnóstico de ruídos na transmissão"
        ]
    },
    'oleo': {
        title: "Troca de Óleo e Filtros",
        desc: "A manutenção mais essencial. Utilizamos óleos sintéticos de alta performance adequados à norma do seu motor.",
        points: [
            "Mudança de óleo do motor",
            "Substituição do filtro de óleo",
            "Verificação de filtro de ar e combustível",
            "Reset do indicador de revisão"
        ]
    },

    // --- ESTÉTICA ---
    'pintura': {
        title: "Pintura Automóvel",
        desc: "Pintura de alta qualidade em estufa, com afinação de cor computorizada para um acabamento perfeito.",
        points: [
            "Pintura total ou parcial",
            "Retoques de riscos",
            "Aplicação de verniz de alta resistência",
            "Polimento final de acabamento"
        ]
    },
    'wraps': {
        title: "Car Wrapping",
        desc: "Personalize e proteja o seu veículo com vinil de alta qualidade. Mude a cor sem pintar.",
        points: [
            "Wrap total ou parcial (tejadilho, espelhos)",
            "Vinil mate, brilho, carbono ou cromado",
            "Proteção da pintura original",
            "Remoção sem danos"
        ]
    },
    'jantes': {
        title: "Jantes e Pinças",
        desc: "Dê um novo visual às rodas do seu carro com reparação profissional e pintura personalizada.",
        points: [
            "Retificação de jantes empenadas",
            "Reparação de raspões de passeio",
            "Pintura de jantes (qualquer cor)",
            "Pintura de pinças de travão"
        ]
    },
    'estofos': {
        title: "Estofos e Interiores",
        desc: "Recuperamos o interior do seu carro, tratando estofos em pele ou tecido e reparando plásticos.",
        points: [
            "Hidratação e pintura de pele",
            "Lavagem profunda de estofos",
            "Restauro de volantes desgastados",
            "Reparação de botões e tabliers"
        ]
    },
    'lavagem_ext': {
        title: "Lavagem Exterior Detalhada",
        desc: "Lavagem manual cuidadosa para remover sujidade sem criar riscos na pintura.",
        points: [
            "Pré-lavagem com espuma ativa",
            "Lavagem manual técnica (2 baldes)",
            "Descontaminação de jantes",
            "Aplicação de cera rápida"
        ]
    },
    'limpeza_int': {
        title: "Limpeza Interior",
        desc: "Higienização completa do habitáculo para um ambiente saudável e limpo.",
        points: [
            "Aspiração profunda (incluindo bagageira)",
            "Limpeza de plásticos e vidros",
            "Higienização de condutas de ar",
            "Aplicação de condicionador de plásticos"
        ]
    },
    'polimento': {
        title: "Polimento e Correção",
        desc: "Remova 'swirls', riscos superficiais e oxidação para devolver o brilho de stand ao seu carro.",
        points: [
            "Polimento de corte e acabamento",
            "Remoção de marcas de água",
            "Restauro de óticas (faróis)",
            "Aplicação de selante ou cerâmica"
        ]
    }
};

// Função para abrir o Modal
function openModal(serviceId) {
    const modal = document.getElementById("serviceModal");
    const titleElement = document.getElementById("modalTitle");
    const descElement = document.getElementById("modalDesc");
    const listElement = document.getElementById("modalList");
    
    // Verifica se o serviço existe na nossa lista
    if (serviceDetails[serviceId]) {
        // Atualiza Título e Descrição
        titleElement.textContent = serviceDetails[serviceId].title;
        descElement.textContent = serviceDetails[serviceId].desc;
        
        // Limpa a lista anterior
        listElement.innerHTML = "";

        // Adiciona os novos pontos da lista (Bullets)
        if (serviceDetails[serviceId].points) {
            serviceDetails[serviceId].points.forEach(point => {
                const li = document.createElement("li");
                li.textContent = point;
                listElement.appendChild(li);
            });
        }

        // Mostrar o modal (flex para centrar)
        modal.style.display = "flex";
    } else {
        console.log("Serviço não encontrado: " + serviceId);
    }
}

// Função para fechar o Modal
function closeModal() {
    const modal = document.getElementById("serviceModal");
    modal.style.display = "none";
}

// Fechar o modal se o utilizador clicar fora da caixa de conteúdo
window.onclick = function(event) {
    const modal = document.getElementById("serviceModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}