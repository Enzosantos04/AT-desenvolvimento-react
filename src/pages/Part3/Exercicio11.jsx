import { useForm } from "react-hook-form";
import { useState } from "react";

const Exercicio11 = () => {
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
      <h2>Exercício 11: React Hook Form </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("nome", { required: true })} placeholder="Nome" />
          {errors.nome && <p>Nome é obrigatório</p>}
        </div>
        <div>
          <input
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email && <p>Email é obrigatório</p>}
        </div>
        <div>
          <input
            {...register("telefone", { required: true })}
            placeholder="Telefone"
          />
          {errors.telefone && <p>Telefone é obrigatório</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
      {submittedData && <pre>{JSON.stringify(submittedData, null, 2)}</pre>}
    </div>
  );
};

export default Exercicio11;
