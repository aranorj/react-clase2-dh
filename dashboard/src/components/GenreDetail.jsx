import {useParams} from 'react-router-dom';
export default function GenreDetail(){
    let { id } = useParams();
    return(
        <h1>Estoy en la pagina del genero {id}</h1>
    )
}