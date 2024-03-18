import { Route, Routes } from "react-router-dom";

import GenresInDb from "./GenresInDb";
import Error404 from "./Error404";
import GenreDetail from "./GenreDetail";
import Movies from "./Movies/Movies";
import MasPopulares from "./MasPopulares/MasPopulares";
import Statistics from "./Statistics/Statistics";
import PreSales from "./PreSales/PreSales";

export default function ContentWrap() {
  return (
    <>
      <main className="content-wrap">
        <Routes>
          <Route path="/" exact element={<PreSales />} />
          <Route path="/genres" exact element={<GenresInDb />} />
          <Route path="/genres/:id" element={<GenreDetail />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/maspopulares" element={<MasPopulares />} />
          <Route
            path="/statistics"
            element={
              <Statistics
                props={[
                  {
                    titulo: "Cantidad de estrenos",
                    cifra: 15,
                    icono: "bi bi-film",
                    colorIcono: "cornflowerblue",
                  },
                  {
                    titulo: "Categorias",
                    cifra: 12,
                    icono: "bi bi-tags-fill",
                    colorIcono: "orange",
                  },
                  {
                    titulo: "Total ventas",
                    cifra: 489.567,
                    icono: "bi bi-currency-dollar",
                    colorIcono: "green",
                  },
                ]}
              />
            }
          />
          <Route component={Error404} />
        </Routes>

      </main>
    </>
  );
}
