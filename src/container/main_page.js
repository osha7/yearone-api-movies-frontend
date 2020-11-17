import React from 'react';
import SearchBar from '../components/search_bar';
import Results from '../components/results';

class MainPage extends React.Component {

    state = {
        query: ''
    }
    
    // setState is async...so was having a hard time changing state here w/out async/await (know it's not best practice)
    // I also tried to code a callback of console.log() in setState, that didn't work either
    // https://stackoverflow.com/questions/41278385/setstate-doesnt-update-the-state-immediately 
    // async retrievingQuery(searchTerms){
    //     await this.setState({query: ''})
    //     // console.log("in retrievingQuery", searchTerms)

    //     // accounts for multiple words separated by space
    //     // do I also need to account for special characters?
    //     let newQueryString = searchTerms.split(" ").join('')

    //     console.log("this.state.query:", newQueryString)
    //     await this.setState({query: newQueryString})
    //     console.log(this.state.query)
    // }

    // best option: - async/await not good to use in this situation
    retrievingQuery = (searchTerms) =>{
        let newQueryString = searchTerms.split(" ").join('')
        this.setState({query: ''}, () => {
            // console.log("clear", this.state.query)
            this.setState({query: newQueryString},  () => {console.log("should have state", this.state)})
        })
    }

    render() {
        if (this.state.query){
            return (
                <div className="main-page">
                    <SearchBar retrievingQuery={this.retrievingQuery}/>
                    <Results query={this.state.query}/>
                </div>
            );
        } else {
            return (
                <div id="initial" className="main-page">
                    <SearchBar clearQuery={this.clearQuery} retrievingQuery={this.retrievingQuery} />
                </div>
            );
        }
    }
}

export default MainPage;
