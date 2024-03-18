
function MoviesList(props){
    return(
        <>
            <tr>
                <td>{props.movies.id}</td>
                <td>{props.movies.title}</td>
                <td>{props.movies.rating}</td>
                <td>{props.movies.awards}</td>
                <td>{props.movies.length}</td>
            </tr>
        </>
    )
}
export default MoviesList