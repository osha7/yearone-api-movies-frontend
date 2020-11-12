import React from 'react';

class Titles extends React.Component {
    
    render() {
        // console.log("titles", this.props.titles)
        const searchTitles = this.props.titles.map (title => (
            console.log("individual", title),
            <div className="search-title" key={title.id} >
                <img src={title.image} alt={title.title} />
                <p>{title.title}</p>
                <button className="up-vote" >👍</button>
                <button className="down-vote" >👎</button>
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