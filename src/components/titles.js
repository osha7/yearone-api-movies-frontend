import React from 'react';
import Votes from "./up_down_vote"

function Titles(props) {
    
    // console.log("titles", this.props.titles)
    const searchTitles = props.titles.map (title => (
    // console.log("individual", title),
            
        <div className="search-title" key={title.id} >
            <img src={title.image} alt={title.title} />
            <p><a href={'/movies/' + title.id} movieid={title.id}>{title.title}</a></p>
            <Votes />
        </div>
    ))

    return(
        <div>
            {searchTitles}
        </div>
    )
}

export default Titles;