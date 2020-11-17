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
        // console.log("strange cDM", this.props, this.state)
        const movieAppInfo = this.props
        this.findOrCreateMovie(movieAppInfo)
    }

    findOrCreateMovie = (movieAppInfo) => {
        // console.log(movieAppInfo)
        fetch("http://localhost:3003/create-or-return-movie", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(movieAppInfo)
        })
        .then(resp => resp.json())
        .then(data => {
            // console.log("33", data)
            this.setState({
                upVotes: data.movie.up_votes,
                downVotes: data.movie.down_votes
            })
        })
    }

    handleUpVote = () => {
        // console.log(this.props, this.state)
        const movieId = this.props.id
        const editUrl = "http://localhost:3003/movies/"
        // console.log(editUrl + movieId)
        fetch((editUrl + movieId), {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify("upvote")
        })
        this.setState( prevState => ({
            upVotes: prevState.upVotes + 1
        })) 
    }

    handleDownVote = () => {
        const movieId = this.props.id
        const editUrl = "http://localhost:3003/movies/"
        // console.log(editUrl + movieId)
        fetch((editUrl + movieId), {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify("downvote")
        })
        this.setState( prevState => ({
            downVotes: prevState.downVotes + 1
        })) 
    }

     // componentDidUpdate = () => {
    //     console.log(this.state)
    // }

    render() {
        // console.log(this.props)
        return(
            <div>
                <button className="up-vote" onClick={this.handleUpVote}>👍 {this.state.upVotes}</button>
                <button className="down-vote" onClick={this.handleDownVote}>👎 {this.state.downVotes}</button>
            </div>
        )
    }
}

export default Votes;