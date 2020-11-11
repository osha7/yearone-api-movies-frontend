import React from 'react';

class Titles extends React.Component {
    
    render() {
        // console.log("titles", this.props.titles)
        const searchTitles = this.props.titles.map (title => (
            console.log("individual", title),
            <div className="search-title" key={title.id} >
                <img src={title.image} alt={title.title} />
                <p>{title.title}</p>
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