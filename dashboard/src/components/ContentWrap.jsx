import Presale from './Presale'
import Estadisticas from './Estadisticas'
import Estrenos from './Estrenos'
import Maspopulares from './Maspopulares'
import GenresInDb from './GenresInDb'

import Contador from "./Contador";



export default function ContentWrap(){
    return(
        <main className="content-wrap">
         <Presale/>    
         <Estadisticas/>
        <Estrenos/>
        <Maspopulares/>
        <GenresInDb/>  
        <Contador />      
       
    </main>
    )
}