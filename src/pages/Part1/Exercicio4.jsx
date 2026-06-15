import FaqCard from "../../components/FaqCard";

const Exercicio4 = () => {
  const pergunta = "Quais são as desvantagens de implementar um inline event?";
  const resposta =
    "Prejudica a legibilidade do código, dificulta a manutenção e pode levar a problemas de desempenho, especialmente em aplicações maiores.";

  return (
    <div>
      <h2>Exercício 4: FAQ Específico</h2>
      <FaqCard question={pergunta} answer={resposta} />
    </div>
  );
};

export default Exercicio4;
