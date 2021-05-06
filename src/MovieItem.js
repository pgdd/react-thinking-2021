import './MovieItem.scss'
const MovieItem = ({ Title, Year, imdbID }) => {
    return(
        <div className="MovieItem">{Title} – {Year}</div>
    )

}
export default MovieItem