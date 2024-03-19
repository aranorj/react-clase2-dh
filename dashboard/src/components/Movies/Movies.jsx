import MoviesList from "./MoviesList";
import { Component } from "react";
import MenuWrap from "../MenuWrap";
import SearchWrap from "../SearchWrap";
import { useEffect, useState } from "react";

import style from "./Movies.module.css";



function Movies(){
  const [movies, setMovies] = useState([]);

  useEffect(
    () => {
      fetch("http://localhost:3030/movies")
      .then((respuesta) => respuesta.json())
      .then((peliculas) => setMovies(peliculas));
    }, []
  )
  return(
    <>
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
                {movies.map((movie) => (
                  <MoviesList movies={movie} key={movie.id} />
                ))}
              </table>
            </section>
          </main>
      </>
  )
}


export default Movies;
