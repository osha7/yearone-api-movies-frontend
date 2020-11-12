import React from 'react';
 
class SearchBar extends React.Component {
 
    state = {
        searchTerm: ""
    }

    movieFilterOnChange = (e) => {

        console.log("here", e.target.value)
        this.setState({
            searchTerm: e.target.value
        })
        console.log("here", this.state.searchTerm)
    }

    render(){
        return (
            <div className="search-articles">
                <label htmlFor="searchTerm">Search: </label><input type="search" value={this.state.searchTerm} onChange={this.movieFilterOnChange} placeholder="Search Thru Movies"/>
            </div> 
        );
    }

}
export default SearchBar;



