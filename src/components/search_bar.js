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
        // console.log(this.props)
        e.preventDefault()
        // console.log("here", this.state.searchTerm)
        // this.props.clearQuery()
        // this.props.clearQueue()
        this.props.retrievingQuery(this.state.searchTerm)
        this.setState({
            searchTerm: ""
        })
        
    }

    render(){
        return (
            <div className="search-articles">
                <form onSubmit={this.movieFilterOnChange}>
                <label >Search: </label>
                <input name="searchTerm" type="search" value={this.state.searchTerm} onChange={this.handleOnChange} placeholder="Search Thru Movies"/>
                <button type="submit" >Submit</button>
                </form>
            </div> 
        );
    }

}
export default SearchBar;



