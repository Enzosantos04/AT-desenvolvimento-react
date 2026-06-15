import { useState } from "react";
import { faker } from "@faker-js/faker";

const products = [];
for (let i = 0; i < 100; i++) {
  products.push(faker.commerce.productName());
}

const Exercicio7 = () => {
  const [filter, setFilter] = useState("");

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <h2>Exercício 7: Lista de Produtos com Filtro</h2>
      <input
        type="text"
        placeholder="Filtrar produtos..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercicio7;
