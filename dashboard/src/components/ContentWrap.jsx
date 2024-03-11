import Presale from './Presale'
import Estadisticas from './Estadisticas'
import Estrenos from './Estrenos'
import Maspopulares from './Maspopulares'
import GenresInDb from './GenresInDb'



export default function ContentWrap(){
    return(
        <main className="content-wrap">
         <Presale/>    
         <Estadisticas/>
        <Estrenos/>
        <Maspopulares/>
        <GenresInDb/>        
       
    </main>
    )
}