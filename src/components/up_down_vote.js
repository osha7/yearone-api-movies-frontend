import React from 'react';

class Votes extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            id: props.id,
            upVotes: 0,
            downVotes: 0
        };
    }

    componentDidMount = () => {
        const movieAppInfo = this.props
        this.findOrCreateMovie(movieAppInfo)
    }

    findOrCreateMovie = (movieAppInfo) => {
        const BASE = process.env.NODE_ENV === 'production' ? "https://movie-api-search.herokuapp.com/create-or-return-movie" : "http://localhost:3003/create-or-return-movie"
        // fetch("http://localhost:3003/create-or-return-movie", {
        fetch(BASE, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(movieAppInfo)
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                upVotes: data.movie.up_votes,
                downVotes: data.movie.down_votes
            })
        })
    }

    handleUpVote = () => {
        // console.log(this.props, this.state)
        const movieId = this.props.id
        const editUrl = process.env.NODE_ENV === 'production' ? "https://movie-api-search.herokuapp.com/movies/" : "http://localhost:3003/movies/"

        // const editUrl = "http://localhost:3003/movies/"
        // console.log(editUrl + movieId)
        fetch((editUrl + movieId), {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify("upvote")
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data.movie.up_votes)
            this.setState({
                upVotes: data.movie.up_votes
            })
        })
    }

    handleDownVote = () => {
        const movieId = this.props.id
        const editUrl = process.env.NODE_ENV === 'production' ? "https://movie-api-search.herokuapp.com/movies/" : "http://localhost:3003/movies/"
        // const editUrl = "http://localhost:3003/movies/"

        fetch((editUrl + movieId), {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify("downvote")
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data.movie.down_votes)
            this.setState({
                downVotes: data.movie.down_votes
            })
        })
    }

     // componentDidUpdate = () => {
    //     console.log(this.state)
    // }

    render() {
        return(
            <div>
                <button className="up-vote" onClick={this.handleUpVote}>👍 {this.state.upVotes}</button>
                <button className="down-vote" onClick={this.handleDownVote}>👎 {this.state.downVotes}</button>
            </div>
        )
    }
}

export default Votes;