import React from 'react';
import Titles from './titles';

class Results extends React.Component {

    state = {
        titles:[]
    }

    componentDidMount = () => {
        let queryResult = this.props.query
        const API_KEY = "0e04a2cb3amsh264b46f00e0337dp195aeajsnaf8da500889c";
        // the API search address here accounts for a scrambling of words (unordered search)
        // console.log("api")
        return fetch(("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/" + queryResult), {
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
            // console.log(data.titles)
            this.setState({
                titles: data.titles
            })
        })
        .catch(err => {
            console.error(err);
        });
    }
    
    render() {
        if (this.state.titles){
            return (
                <div className="all-titles">
                    <h1>ALL RESULTS</h1>
                    <Titles titles={this.state.titles} /> 
                </div>
            )
        } else {
            return (
                <div className="all-titles">
                    <h1>ALL RESULTS</h1>
                    <h3>There Are No Matching Titles</h3> 
                </div>
            )
        }
    }
}

export default Results;