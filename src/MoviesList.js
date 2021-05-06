import './MoviesList.scss'
import MovieItem from './MovieItem'

const MoviesList = ({movies = [{}, {}, {}, {}, {}, {},{}, {}, {}]}) => {
    return(
        <div className="MoviesList">
            {movies.map(movie => <MovieItem />)}
        
        </div>
    )
}

export default MoviesList;