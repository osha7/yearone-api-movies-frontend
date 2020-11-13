import React from 'react';
import Votes from './up_down_vote';

function MovieDetail(props) {
    const{
        id,
        title,
        director,
        releaseYear,
        description,
        poster
    } = props


        return(
            <div className="movie-page">
                
                <h1>{title}</h1>
                <img src={poster} alt={title} />
                <Votes />
                <p>
                   
                    Release Year: {releaseYear} <br />
                    Director: {director} <br />
                    _
                </p>
                <p>
                    {description}
                </p>
            </div>
        )
}

export default MovieDetail;