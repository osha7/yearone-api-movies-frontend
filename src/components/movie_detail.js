import React from 'react';
import Votes from './up_down_vote';

class MovieDetail extends React.Component {
    
    componentDidUpdate = () => {
        console.log(this.props)
    }
    
    render() {
        const{
            id,
            title,
            director,
            releaseYear,
            description,
            poster
        } = this.props

        return(
            <div className="movie-page">
                
                <h1>{title}</h1>
                <img src={poster} alt={title} />
                <Votes id={id}/>
                <p>
                   
                    Release Year: {releaseYear} <br />
                    Director: {director} <br />
                    _ 
                    <br /><br />
                    {description}
                </p>
            </div>
        )
    }
}

export default MovieDetail;