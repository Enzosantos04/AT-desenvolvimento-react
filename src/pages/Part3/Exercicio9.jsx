import { useState } from "react";

const Exercicio9 = ({ initialData }) => {
  const infos = {
    nome: "",
    email: "",
    telefone: "",
  };

  const [formData, setFormData] = useState(infos);

  const [submittedData, setSubmittedData] = useState(initialData || null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const handleNameChange = (e) => {
    setFormData({ ...formData, nome: e.target.value });
  };

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleTelefoneChange = (e) => {
    setFormData({ ...formData, telefone: e.target.value });
  };

  return (
    <div>
      <h2>Exercício 9: Formulário Simples</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleNameChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleEmailChange}
        />
        <input
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleTelefoneChange}
        />
        <button type="submit">Enviar</button>
      </form>

      {submittedData && <pre>{JSON.stringify(submittedData, null, 2)}</pre>}
    </div>
  );
};

export default Exercicio9;
