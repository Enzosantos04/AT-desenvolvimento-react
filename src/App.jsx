import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Exercicio1 from "./pages/Part1/Exercicio1";
import Exercicio2 from "./pages/Part1/Exercicio2";
import Exercicio3 from "./pages/Part1/Exercicio3";
import Exercicio4 from "./pages/Part1/Exercicio4";

import Exercicio5 from "./pages/Part2/Exercicio5";
import Exercicio6 from "./pages/Part2/Exercicio6";
import Exercicio7 from "./pages/Part2/Exercicio7";
import Exercicio8 from "./pages/Part2/Exercicio8";

import Exercicio9 from "./pages/Part3/Exercicio9";
import Exercicio10 from "./pages/Part3/Exercicio10";
import Exercicio11 from "./pages/Part3/Exercicio11";
import Exercicio12 from "./pages/Part3/Exercicio12";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/part1/ex1" />} />

          <Route path="/part1/ex1" element={<Exercicio1 />} />
          <Route path="/part1/ex2" element={<Exercicio2 />} />
          <Route path="/part1/ex3" element={<Exercicio3 />} />
          <Route path="/part1/ex4" element={<Exercicio4 />} />

          <Route path="/part2/ex5" element={<Exercicio5 />} />
          <Route path="/part2/ex6" element={<Exercicio6 />} />
          <Route path="/part2/ex7" element={<Exercicio7 />} />
          <Route path="/part2/ex8" element={<Exercicio8 />} />

          <Route path="/part3/ex9" element={<Exercicio9 />} />
          <Route path="/part3/ex10" element={<Exercicio10 />} />
          <Route path="/part3/ex11" element={<Exercicio11 />} />
          <Route path="/part3/ex12" element={<Exercicio12 />} />

          <Route
            path="/admin-selecionado"
            element={<Exercicio5 isAdmin={true} />}
          />
          <Route
            path="/admin-desligado"
            element={<Exercicio5 isAdmin={false} />}
          />
          <Route
            path="/brasil-selecionado"
            element={<Exercicio6 defaultCountry="Brasil" />}
          />
          <Route
            path="/form-preenchido"
            element={
              <Exercicio9
                initialData={{
                  name: "Enzo Santos",
                  email: "enzo.santos@example.com",
                  phone: "(11) 99999-9999",
                }}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
