import React from 'react'
import SearchBar from '../components/search_bar'
import Results from '../components/results'

class MainPage extends React.Component {

    state = {
        query: ''
    }
    
    retrievingQuery = (searchTerms) => {
        
        // console.log("in retrievingQuery", searchTerms)
        let newQueryString = searchTerms.split(" ").join('')
        console.log("this.state.query:", newQueryString)
        // this.setState({query: newQueryString})
        this.state.query = newQueryString
        console.log(this.state.query)
        // debugger
    }


    render() {
        return (
            <div className="main-page">
            <SearchBar retrievingQuery={this.retrievingQuery} />
            <Results query={this.state.query}/>
            </div>
        );
    }
}

export default MainPage;
