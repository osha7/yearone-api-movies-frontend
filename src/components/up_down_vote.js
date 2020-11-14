import React from 'react';

class Votes extends React.Component {

    state = {
        upVotes: '',
        downVotes:''
    }


    handleUpVote = () => {

    }

    handleDownVote = () => {
        
    }

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