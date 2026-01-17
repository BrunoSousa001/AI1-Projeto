const { useState} = React;

function ContactForm() {
    // Estado do formulário
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        motivo: 'informação',
        mensagem: ''
    });

    const [status, setStatus] = useState('');

    // Lidar com alterações nos inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Submissão do Formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validação básica (além da do HTML5)
        if (formData.nome.length < 3) {
            setStatus('Erro: O nome deve ter pelo menos 3 caracteres.');
            return;
        }

        // Guardar no LocalStorage (Requisito)
        const contactosAnteriores = JSON.parse(localStorage.getItem('contactos_fixnshine') || '[]');
        contactosAnteriores.push({ ...formData, data: new Date().toISOString() });
        localStorage.setItem('contactos_fixnshine', JSON.stringify(contactosAnteriores));

        setStatus('Sucesso! A sua mensagem foi guardada com sucesso.');
        
        // Limpar formulário
        setFormData({ nome: '', email: '', telefone: '', motivo: 'informação', mensagem: '' });
    };

    return (
        <div className="contactos-form-container">
            <form onSubmit={handleSubmit} className="react-form">
                <div className="form-group">
                    <label>Nome *</label>
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Telefone</label>
                    <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} pattern="[0-9]{9}" placeholder="Ex: 912345678" />
                </div>

                <div className="form-group">
                    <label>Motivo do Contacto</label>
                    <select name="motivo" value={formData.motivo} onChange={handleChange}>
                        <option value="informação">Informação</option>
                        <option value="agendamento">Agendamento de Serviço</option>
                        <option value="reclamação">Reclamação</option>
                        <option value="outro">Outro</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Mensagem *</label>
                    <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} required></textarea>
                </div>

                <button type="submit" className="btn-submit">Enviar Mensagem</button>
                
                {status && <p className={status.includes('Erro') ? 'msg-error' : 'msg-success'}>{status}</p>}
            </form>
        </div>
    );
}

// Renderizar o componente
const root = ReactDOM.createRoot(document.getElementById('react-contacto-form'));
root.render(<ContactForm />);
