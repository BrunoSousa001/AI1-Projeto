const { useState } = React; // Importa o Hook de estado do React

function ContactForm() {
    // 1. Definição do Estado Inicial (Stateful Component)
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        motivo: 'informação',
        mensagem: ''
    });

    const [status, setStatus] = useState(''); // Estado para mensagens de erro/sucesso

    // 2. Manipulador de Eventos (Two-way binding)
    // Atualiza o estado sempre que o utilizador escreve num campo
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // 3. Submissão do Formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Impede o recarregamento da página (comportamento padrão)
        
        // Validação JS (Cumpre requisito de validação)
        if (formData.nome.trim().length < 3) {
            setStatus('Erro: O nome deve ter pelo menos 3 caracteres.');
            return;
        }

        // Validação de formato de telemóvel (Regex)
        const phoneRegex = /^[9][0-9]{8}$/;
        if (formData.telefone && !phoneRegex.test(formData.telefone)) {
            setStatus('Erro: O telemóvel deve começar por 9 e ter 9 dígitos.');
            return;
        }

        // 4. Armazenamento no Local Storage (Cumpre requisito de persistência)
        // Obtém dados antigos ou cria array vazio
        const contactosAnteriores = JSON.parse(localStorage.getItem('contactos_fixnshine') || '[]');
        
        // Adiciona nova submissão com data/hora
        contactosAnteriores.push({ ...formData, data: new Date().toISOString() });
        
        // Guarda de volta no browser
        localStorage.setItem('contactos_fixnshine', JSON.stringify(contactosAnteriores));

        setStatus('Sucesso! A sua mensagem foi guardada.');
        
        // Limpa o formulário (Reset do estado)
        setFormData({ nome: '', email: '', telefone: '', motivo: 'informação', mensagem: '' });
    };

    return (
        /* Renderização do Formulário (JSX) */
        <div className="contactos-form-container">
            <form onSubmit={handleSubmit}>
                {/* Inputs ligados ao estado via value={formData.x} */}
                <div className="form-group">
                    <label>Nome *</label>
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
                </div>
                {/* ... restantes campos ... */}
                
                <button type="submit" className="btn-submit">Enviar Mensagem</button>
                
                {/* Renderização Condicional da mensagem de estado */}
                {status && <p className={status.includes('Erro') ? 'msg-error' : 'msg-success'}>{status}</p>}
            </form>
        </div>
    );
}

// Renderiza o componente React na div com id 'react-contacto-form'
const root = ReactDOM.createRoot(document.getElementById('react-contacto-form'));
root.render(<ContactForm />);