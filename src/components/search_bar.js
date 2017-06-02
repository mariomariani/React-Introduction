import React, { Component } from 'react';

class searchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        let searchText = event.target.value;
        this.setState(prevState => ({searchText})); //searchText:searchText
        this.props.onSearchTermChange(searchText);
    }

    render() {
        return (
            <div className="search-bar">
                    <input value={this.state.searchText} onChange={this.onInputChange}/>
                    <p>Valor de busqueda: {this.state.searchText}</p>
            </div>
        )
    }
}

export default searchBar;