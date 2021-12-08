// /* eslint-disable */

import React from "react";
//
import { Movies } from '../components/Movies.jsx';
import { Search } from '../components/Search.jsx';
import { Preloader } from '../components/Preloader.jsx';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    //
    state = {
        movies: [],
        loading: true,
    }

    //
    searchMovies = (str='matrix', type='all') => {
        this.setState({loading: true});

        //fetch(`http://www.omdbapi.com/?apikey=33d37bd4&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                //console.log(data);
                this.setState(
                    (state) => ({
                        movies: data.Search
                    }),
                    () => {
                        this.setState({loading: false});
                    }
                );
            })
            .catch(err => {
                console.log(err);
                this.setState({loading: false});
            });
    }

    //
    componentDidMount() {
        this.searchMovies('matrix', 'all');
    }

    //
    render() {
        const {movies, loading} = this.state;

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                {
                    loading
                        ? <Preloader />
                        : (
                            <Movies movies={movies} />
                        )
                }
            </main>
        );
    }
}

export {Main};
