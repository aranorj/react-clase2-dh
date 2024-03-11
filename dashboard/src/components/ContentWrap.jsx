import avatar from '../assets/img/sniper.jpg'
import trolls2 from '../assets/img/banner.jpg'
import avatar2 from '../assets/img/avatar.jpg'
import john from '../assets/img/john-wick.jpg'
import sayen from '../assets/img/sayen.jpg'
import shazam from '../assets/img/shazan.jpg'
import elephant from '../assets/img/the-magicians-elephant.jpg'
import Presale from './Presale'
import Estadisticas from './Estadisticas'
import Estrenos from './Estrenos'
import Maspopulares from './Maspopulares'
import Generos from './Generos'



export default function ContentWrap(){
    return(
        <main className="content-wrap">
         <Presale/>    
         <Estadisticas/>
        <Estrenos/>
        <Maspopulares/>
        <Generos/>
       
    </main>
    )
}