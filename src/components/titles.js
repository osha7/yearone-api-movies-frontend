import React from 'react';
import Votes from "./up_down_vote"
import {Link}from 'react-router-dom'

function Titles(props) {
    // console.log(props)
    
    // console.log("titles", this.props.titles)
    const searchTitles = props.titles.map (title => (
    // console.log("individual", title),
            
        <div className="search-title" key={title.id} >
            <img src={title.image} alt={title.title} /><br />
           <Link to={'/movies/' + title.id} movieid={title.id}> <h2>{title.title}</h2></Link>

            {/* <p><a href={'/movies/' + title.id} movieid={title.id}>{title.title}</a></p> */}
            <Votes id={title.id} title={title.title} />
        </div>
    ))

    return(
        <div>
            {searchTitles}
        </div>
    )
}

export default Titles;