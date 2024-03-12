import { Component } from "react";
import Generos from "./Generos";

class GenresInDb extends Component{  



    render(){
        return(
            
        <section className="content">
             <h2 className="mt-3">Géneros</h2>
            <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <button type="button" className="list-group-item list-group-item-action active text-center"
            aria-current="true">
            Listado de géneros de las películas
            </button>
            {this.state.genresList.map((genero)=> <Generos genero={genero} key={genero.id}/>)}
            </div>
            </section>
          
        )
    }

    constructor(){
        super();
        this.state = {
            genresList: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:3030/genres")
        .then((respuesta)=> respuesta.json())
        .then((generos)=>this.setState({genresList: generos}))
    }

}

export default GenresInDb;