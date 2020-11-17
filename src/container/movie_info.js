import React from 'react';
import MovieDetail from '../components/movie_detail';

class MoviePage extends React.Component {

    state = {
        id: '',
        title: '',
        director: 'Not Available',
        releaseYear: '',
        description: '',
        poster: ''
    }
    

    componentDidMount = () => {
        // console.log(this.props.match.params.id)
        let movieid = this.props.match.params.id
        const API_KEY = process.env.REACT_APP_RAPID_API_KEY;

        return fetch(("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/" + movieid), {
        // return fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/spiderman", {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-key": API_KEY,
		        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
	        }
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            // console.log(data)
            this.setState({
                id: data.id,
                title: data.title,
                releaseYear: data.year,
                description: data.plot,
                poster: data.poster
            })
        })
        .catch(err => {
            console.error(err);
        });
    }

    returnToSearch = () => {
        // console.log('return to search', this.props)
        window.setTimeout(() => {
            this.props.history.push("/");
         }, 500)
    }
    
    render() {
        // console.log("movie-info", this.props.match.params.id)
        const{
            id,
            title,
            director,
            releaseYear,
            description,
            poster
        } = this.state
        return(
            <div className="movie-info">
                <button className="return-to-search" onClick={this.returnToSearch} >Return to Search</button>
                <MovieDetail id={this.props.match.params.id} title={title} director={director} releaseYear={releaseYear} description={description} poster={poster} />
            </div>
        )
    }
}

export default MoviePage;