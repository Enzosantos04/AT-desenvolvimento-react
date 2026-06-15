import { Link, Outlet } from "react-router-dom";
import styles from "../styles/MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <nav className={styles.sideMenu}>
        <h3>Exercises</h3>
        <ul>
          <li>
            <strong>Part 1</strong>
          </li>
          <li>
            <Link to="/part1/ex1">Exercícios 1 </Link>
          </li>
          <li>
            <Link to="/part1/ex2">Exercícios 2 </Link>
          </li>
          <li>
            <Link to="/part1/ex3">Exercícios 3 </Link>
          </li>
          <li>
            <Link to="/part1/ex4">Exercícios 4 </Link>
          </li>

          <li>
            <strong>Part 2</strong>
          </li>
          <li>
            <Link to="/part2/ex5">Exercícios 5 (Admin Checkbox)</Link>
          </li>
          <li>
            <Link to="/part2/ex6">Exercícios 6 ( Países)</Link>
          </li>
          <li>
            <Link to="/part2/ex7">Exercícios 7 (Lista de Produtos)</Link>
          </li>
          <li>
            <Link to="/part2/ex8">Exercícios 8 (Meal DB)</Link>
          </li>

          <li>
            <strong>Part 3</strong>
          </li>
          <li>
            <Link to="/part3/ex9">Exercícios 9 (form simples)</Link>
          </li>
          <li>
            <Link to="/part3/ex10">Exercícios 10 (Validação manual)</Link>
          </li>
          <li>
            <Link to="/part3/ex11">Exercícios 11 (React Hook Form)</Link>
          </li>
          <li>
            <Link to="/part3/ex12">
              Exercícios 12 (React hook form Validação )
            </Link>
          </li>

          <li>
            <strong>Part 4 (Special)</strong>
          </li>
          <li>
            <Link to="/admin-selecionado">Admin Selecionado</Link>
          </li>
          <li>
            <Link to="/admin-desligado">Admin Desligado</Link>
          </li>
          <li>
            <Link to="/brasil-selecionado">Brazil Selecionado</Link>
          </li>
          <li>
            <Link to="/form-preenchido">Formulário Pré-preenchido</Link>
          </li>
        </ul>
      </nav>

      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
