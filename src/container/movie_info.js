import React from 'react'

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
        let movieId = this.props.match.params.id
        const API_KEY = process.env.REACT_APP_RAPID_API_KEY;

        return fetch(("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/" + movieId), {
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
            console.log(data)
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
    
    render() {
        return(
            <div className="movie-page">
                <h1>{this.state.title}</h1>
                <img src={this.state.poster} alt={this.state.title} />
                <p>
                    Release Year: {this.state.releaseYear}
                </p>
                <p>
                    {this.state.description}
                </p>
            </div>
        )
    }
}

export default MoviePage