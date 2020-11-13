import React from 'react'
import SearchBar from '../components/search_bar'
import Results from '../components/results'

class MainPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            query: ''
        }

        this.retrievingQuery = this.retrievingQuery.bind(this)
    }
    
    async retrievingQuery(searchTerms){
        await this.setState({query: ''})
        // console.log("in retrievingQuery", searchTerms)

        // accounts for multiple words separated by space
        // do I also need to account for special characters?
        let newQueryString = searchTerms.split(" ").join('')

        console.log("this.state.query:", newQueryString)
        await this.setState({query: newQueryString})
        console.log(this.state.query)
    }

    render() {
        if (this.state.query){
            return (
                <div className="main-page">
                <SearchBar retrievingQuery={this.retrievingQuery} clearQuery={this.clearQuery} />
                <Results query={this.state.query} />
                </div>
            );
        } else {
            return (
                <div className="main-page">
                <SearchBar retrievingQuery={this.retrievingQuery} />
                </div>
            );
        }
    }
}

export default MainPage;
