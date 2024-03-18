import PreSales from './PreSales/PreSales'
import Statistics from './Statistics/Statistics.jsx'
import Estrenos from './Estrenos/Estrenos.jsx'
import GenresInDb from './GenresInDb'
import MasPopulares from './MasPopulares/MasPopulares'
import Contador from './Contador'

export default function ContentWrap(){
    return(
        <main className="content-wrap">
        <PreSales/>
        <Statistics props={[
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
        ]} />
        <Estrenos/>
        <GenresInDb/>   
        <MasPopulares/> 
        <Contador />      
       
    </main>
    )
}