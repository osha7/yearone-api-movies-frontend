import React from 'react'
import Titles from './titles';

class Results extends React.Component {

    state = {
        titles:[]
    }
    
    // componentDidMount = (query = "search") => {
    //     const API_KEY = process.env.REACT_APP_RAPID_API_KEY;
    //     return fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search?q=${query}", {
	  
    // fetchTitles = () => {

    componentDidMount = () => {
        let queryResult = this.props.query
        const API_KEY = process.env.REACT_APP_RAPID_API_KEY;
        // the API search address here accounts for a scrambling of words (unordered search)
        console.log("api")
        return fetch(("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/" + queryResult), {
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