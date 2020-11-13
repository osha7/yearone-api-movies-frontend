import React from 'react';

class Titles extends React.Component {

    handleUpVote = () => {

    }

    handleDownVote = () => {
        
    }
    
    render() {
        // console.log("titles", this.props.titles)
        const searchTitles = this.props.titles.map (title => (
            // console.log("individual", title),
            <div className="search-title" key={title.id} >
                <img src={title.image} alt={title.title} />
                <p>{title.title}</p>
                <button className="up-vote" onClick={this.handleUpVote}>👍 1</button>
                <button className="down-vote" onClick={this.handleDownVote}>👎 2</button>
            </div>
        ))
        return(
            <div>
                {searchTitles}
            </div>
        )
    }
}

export default Titles;