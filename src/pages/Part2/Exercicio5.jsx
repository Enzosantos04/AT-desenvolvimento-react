import { useState } from "react";

const Exercicio5 = ({ isAdmin }) => {
  const [isUserAdmin, setIsUserAdmin] = useState(isAdmin);
  const handleClick = () => {
    setIsUserAdmin(!isUserAdmin);
  };

  return (
    <div>
      <h2>Exercício 5: Checkbox Administrador</h2>
      <label>
        <input type="checkbox" checked={isUserAdmin} onChange={handleClick} />
        Administrador
      </label>
      <p>
        {isUserAdmin
          ? "O usuário atual é administrador."
          : "O usuário atual não é administrador."}
      </p>
    </div>
  );
};

export default Exercicio5;
