import React from 'react';
 
class SearchBar extends React.Component {
 
    state = {
        searchTerm: ""
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    movieFilterOnChange = (e) => {
 
        e.preventDefault()

        this.props.retrievingQuery(this.state.searchTerm)
        this.setState({
            searchTerm: ""
        })
        
    }

    render(){
        return (
            <div className="search-articles">
                 {/* <form onSubmit={this.movieFilterOnChange}>
                 <label >Search: </label>
                <input className="search-input" name="searchTerm" type="search" value={this.state.searchTerm} onChange={this.handleOnChange} placeholder="Search Thru Movies"/>
                 <button className="search-button" type="submit" >Submit </button>
                 </form> */}
                    
                    <div className="search-box">
                        <form onSubmit={this.movieFilterOnChange}>
                            <input className="search-input" name="searchTerm" type="search" value={this.state.searchTerm} onChange={this.handleOnChange} placeholder="Search For Movies..."/>
                            <a className="search-btn" onClick={this.movieFilterOnChange}>
                            <i className="fa fa-search" aria-hidden="true"></i>
                            </a>
                        </form>
                    </div>
         
            </div> 
        );
    }

}
export default SearchBar;



