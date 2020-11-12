import React from 'react';
 
class SearchBar extends React.Component {
 
    state = {
        searchTerm: ""
    }

    render(){
        return (
            <div className="search-articles">
                <label htmlFor="searchTerm">Search:</label><input type="search" value={this.state.searchTerm} onChange={this.articleFilterOnChange} placeholder="Search Thru Movies"/>
            </div> 
        );
    }


}
export default SearchBar;



