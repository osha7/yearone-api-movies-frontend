import React from 'react'
import Titles from './titles';

class Results extends React.Component {

    state = {
        titles:[],
        query:""
    }

    componentDidMount = () => {
        const API_KEY = process.env.REACT_APP_RAPID_API_KEY;
        return fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/amelie", {
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
            this.setState({
                titles: data.titles
            })
        })
        .catch(err => {
            console.error(err);
        });
    }
    
    render() {
        return (
            <div className="all-titles">
                <h1>ALL RESULTS</h1>
                <Titles titles={this.state.titles} /> 
            </div>
        )
    }
}

export default Results