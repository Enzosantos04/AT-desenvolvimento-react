import FaqCard from "../../components/FaqCard";

const Exercicio1 = () => {
  return (
    <div>
      <h2>Exercício 1: Componente FAQ</h2>
      <FaqCard
        question="Quais são as desvantagens de implementar um inline event?"
        answer="Prejudica a legibilidade do código, dificulta a manutenção e pode levar a problemas de desempenho, especialmente em aplicações maiores."
      />
    </div>
  );
};

export default Exercicio1;
