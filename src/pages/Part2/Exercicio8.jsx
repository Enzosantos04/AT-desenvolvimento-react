import { useState, useEffect } from "react";

const Exercicio8 = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resposta = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php",
        );
        const resultado = await resposta.json();

        if (!resposta.ok) {
          throw new Error(`Erro: ${resposta.status}`);
        }

        setCategories(resultado);
      } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
      } finally {
        console.log("Busca de dados finalizada.");
      }
    };

    buscarDados();
  }, []);

  const handleCategoryChange = (e) => {
    const category = categories.categories.find(
      (cat) => cat.idCategory === e.target.value,
    );
    setSelectedCategory(category);
  };
  return (
    <div>
      <h2>Exercício 8: Categorias de Pratos</h2>
      <select onChange={handleCategoryChange}>
        <option value="">Selecione uma categoria</option>
        {categories.categories &&
          categories.categories.map((category) => (
            <option key={category.idCategory} value={category.idCategory}>
              {category.strCategory}
            </option>
          ))}
      </select>

      {selectedCategory && (
        <div className="category-details">
          <h3>{selectedCategory.strCategory}</h3>
          <p>{selectedCategory.strCategoryDescription}</p>
          <img
            src={selectedCategory.strCategoryThumb}
            alt={selectedCategory.strCategory}
          />
        </div>
      )}
    </div>
  );
};

export default Exercicio8;
