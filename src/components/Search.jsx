// /* eslint-disable */

import React from "react";

class Search extends React.Component {
    //
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            type: 'all'
        }
    }

    handleSearch = (ev) => {
        this.setState(state => ({
            search: ev.target.value
        }));
    }

    handleKey = (ev) => {
        if (ev.key === 'Enter') {
            if (this.state.search.trim().length) {
                this.props.searchMovies( this.state.search.trim(), this.state.type );
            }
        }
    }

    handleButtonClick = () => {
        if (this.state.search.trim().length) {
            this.props.searchMovies( this.state.search.trim(), this.state.type );
        }
    }

    handleFilter = (ev) => {
        this.setState(
            (state) => {
                return {
                    //type: ev.target.value
                    type: ev.target.dataset.type
                }
            },
            () => {
                if (this.state.search.trim().length) {
                    this.props.searchMovies( this.state.search.trim(), this.state.type );
                }
            }
        );
    }

    //
    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        type="search"
                        className="validate"
                        placeholder="search"
                        value={this.state.search}
                        onChange={(ev) => this.handleSearch(ev)}
                        onKeyDown={(ev) => this.handleKey(ev)}
                    />
                    <button
                        className="btn search-btn"
                        onClick={this.handleButtonClick}
                    >
                        Search
                    </button>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            className="with-gap"
                            name="type"
                            data-type="all"
                            value="all"
                            checked={this.state.type === 'all'}
                            onChange={(ev) => this.handleFilter(ev)}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            className="with-gap"
                            name="type"
                            data-type="movie"
                            value="movie"
                            checked={this.state.type === 'movie'}
                            onChange={(ev) => this.handleFilter(ev)}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            className="with-gap"
                            name="type"
                            data-type="series"
                            value="series"
                            checked={this.state.type === 'series'}
                            onChange={(ev) => this.handleFilter(ev)}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        );
    }
}

export {Search};
