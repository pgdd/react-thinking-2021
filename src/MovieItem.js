import './MovieItem.scss'
const MovieItem = ({ name = "Requiem for a dream"}) => {
    return(
        <div className="MovieItem">{name}</div>
    )

}
export default MovieItem