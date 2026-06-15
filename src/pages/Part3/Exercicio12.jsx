import { useForm } from "react-hook-form";
import { useState } from "react";

const Exercicio12 = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSubmittedData(data);
  };
  return (
    <div>
      <h2>Exercício 12: React Hook Form com Validações</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("nome", { required: true })} placeholder="Nome" />
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
          placeholder="Email"
        />
        <input
          {...register("telefone", {
            required: true,
            pattern: /^(55)?(?:([1-9]{2})?)(\d{4,5})(\d{4})$/,
          })}
          placeholder="Telefone"
        />

        {errors.nome && <p>Nome é obrigatório</p>}
        {errors.email && <p>Email inválido</p>}
        {errors.telefone && <p>Telefone inválido</p>}
        <button type="submit">Enviar</button>
      </form>
      {submittedData && <pre>{JSON.stringify(submittedData, null, 2)}</pre>}
    </div>
  );
};

export default Exercicio12;
