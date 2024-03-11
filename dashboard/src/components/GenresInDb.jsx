import { Component } from "react";
import Generos from "./Generos";

class GenresInDb extends Component{  

    

    render(){
        return(
            <>
            <h1>HOLA</h1>
            <Generos/>

            </>
        )
    }

    constructor(){
        super();
        this.state = {
            genresList: []
        }
    }

}

export default GenresInDb;