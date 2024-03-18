import MoviesList from "./MoviesList";
import { Component } from "react";
import MenuWrap from "../MenuWrap";
import SearchWrap from "../SearchWrap";

import style from "./Movies.module.css";

class Movies extends Component {
  render() {
    return (
      <>
        <div className="dashboard">
          <SearchWrap />
          <MenuWrap />
          <main className="content-wrap">
            <section className="content">
              <h2 className="mt-3">All the movies in the database</h2>
              <table className={style.table}>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Título</th>
                    <th>Calificación</th>
                    <th>Premios</th>
                    <th>Duración</th>
                  </tr>
                </thead>
                {this.state.moviesList.map((movie) => (
                  <MoviesList movies={movie} key={movie.id} />
                ))}
              </table>
            </section>
          </main>
        </div>
      </>
    );
  }

  constructor() {
    super();
    this.state = {
      moviesList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3030/movies")
      .then((respuesta) => respuesta.json())
      .then((movies) => this.setState({ moviesList: movies }));
  }
}

export default Movies;
