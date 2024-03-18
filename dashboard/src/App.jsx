import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import GenresInDb from './components/GenresInDb';
import Error404 from './components/Error404';
import GenreDetail from './components/GenreDetail';
import Movies from './components/Movies/Movies';
import MasPopulares from './components/MasPopulares/MasPopulares';
import Statistics from './components/Statistics/Statistics';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" exact element={<Dashboard/>}/>
      <Route path="/genres" exact element={<GenresInDb/>}/>
      <Route path="/genres/:id" element={<GenreDetail/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/maspopulares"  element={<MasPopulares/>}/>
      <Route path="/statistics"  element={<Statistics props={[
            {
                titulo: "Cantidad de estrenos",
                cifra: 15,
                icono: "bi bi-film",
                colorIcono: "cornflowerblue"
            },
            {
                titulo: "Categorias",
                cifra: 12,
                icono: "bi bi-tags-fill",
                colorIcono: "orange"
            },
            {
                titulo: "Total ventas",
                cifra: 489.567,
                icono: "bi bi-currency-dollar",
                colorIcono:"green"
            }
        ]}/>
        }/>
      <Route  component={Error404}/>
    </Routes>
    </>
  )
}

export default App
