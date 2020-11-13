import React from 'react';

class Votes extends React.Component {


    handleUpVote = () => {

    }

    handleDownVote = () => {
        
    }
    
    render() {
        return(
            <div>
                <button className="up-vote" onClick={this.handleUpVote}>👍 1</button>
                <button className="down-vote" onClick={this.handleDownVote}>👎 2</button>
            </div>
        )
    }
}

export default Votes;