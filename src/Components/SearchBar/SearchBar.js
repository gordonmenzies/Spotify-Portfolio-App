import React from 'react'
import './SearchBar.css';

export class SearchBar extends React.Component {
    constructor(props) {
        super (props) 

        this.state = {
            search: ''
        }
            this.search=this.search.bind(this)
            this.handleTermChange = this.handleTermChange.bind(this)

    }


search() {
    this.props.onSearch(this.state.search)
}

handleTermChange(event) {
    this.setState({search: event.target.value})
}

render () {
    return (
    <div className="SearchBar">
    <input placeholder="Enter A Song, Album, or Artist" 
            onChange={this.handleTermChange}/>
    <button className="SearchButton">SEARCH</button>
    </div>
    )
}
}

export default SearchBar;
