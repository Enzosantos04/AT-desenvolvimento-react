import { useState, useEffect } from "react";

const Exercicio6 = ({ defaultCountry }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry || "");

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resposta = await fetch(
          "https://studies.cs.helsinki.fi/restcountries/api/all",
        );
        const resultado = await resposta.json();

        if (!resposta.ok) {
          throw new Error(`Erro: ${resposta.status}`);
        }

        setCountries(resultado);
      } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
      } finally {
        console.log("Busca de dados finalizada.");
      }
    };

    buscarDados();
  }, []);

  return (
    <div>
      <h2>Exercício 6: Dropdown de Países</h2>

      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Selecione um país</option>

        {countries.map((country) => (
          <option key={country.cca3} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <p style={{ marginTop: "20px" }}>
          País selecionado: <strong>{selectedCountry}</strong>
        </p>
      )}
    </div>
  );
};

export default Exercicio6;
