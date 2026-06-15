import { useState } from "react";

const Exercicio10 = () => {
  const infos = {
    nome: "",
    email: "",
    telefone: "",
  };

  const [formData, setFormData] = useState(infos);
  const [errors, setErrors] = useState({});

  const [submittedData, setSubmittedData] = useState(null);

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexTelefone = /^(55)?(?:([1-9]{2})?)(\d{4,5})(\d{4})$/;

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleTelefoneChange = (e) => {
    setFormData({ ...formData, telefone: e.target.value });
  };

  const handleNameChange = (e) => {
    setFormData({ ...formData, nome: e.target.value });
  };

  const validateEmail = (email) => {
    if (!regexEmail.test(email)) {
      return "Email inválido";
    }
    return null;
  };

  const validateTelefone = (telefone) => {
    if (!regexTelefone.test(telefone) || telefone.trim() == "") {
      return "Telefone inválido";
    }
    return null;
  };

  const validateName = (nome) => {
    if (nome.trim() === "") {
      return "Nome é obrigatório";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const emailError = validateEmail(formData.email);
    const telefoneError = validateTelefone(formData.telefone);
    const nameError = validateName(formData.nome);

    if (nameError) {
      newErrors.nome = nameError;
    }

    if (emailError) {
      newErrors.email = emailError;
    }
    if (telefoneError) {
      newErrors.telefone = telefoneError;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmittedData(formData);
    }
  };

  return (
    <div>
      <h2>Exercício 10: Formulário com Validação Manual</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="nome" placeholder="Nome" onChange={handleNameChange} />
          {errors.nome && <span style={{ color: "red" }}>{errors.nome}</span>}
        </div>
        <div>
          <input
            name="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div>
          <input
            name="telefone"
            placeholder="Telefone"
            onChange={handleTelefoneChange}
          />
          {errors.telefone && (
            <span style={{ color: "red" }}>{errors.telefone}</span>
          )}
        </div>
        <button type="submit">Enviar</button>
      </form>
      {submittedData && <pre>{JSON.stringify(submittedData, null, 2)}</pre>}
    </div>
  );
};

export default Exercicio10;
