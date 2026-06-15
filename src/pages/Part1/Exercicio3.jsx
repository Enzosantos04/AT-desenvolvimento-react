const Exercicio3 = () => {
  const handleClick = () => {
    alert("Botão clicado!");
  };
  return (
    <div>
      <h2>Exercício 3: Função de Tratamento de Eventos</h2>
      <button onClick={handleClick}>Clique Aqui (Handler)</button>
    </div>
  );
};

export default Exercicio3;
