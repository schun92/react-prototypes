import React, { Component } from 'react';
import Movie from './movie';
import axios from 'axios';

class MoviesContainer extends Component {
    constructor(props){
        super(props);

        this.state =  {
            movies: []
        };
    }
    render(){
        console.log('this.state: ', this.state)
        const movieList = this.state.movies.map((movieInfo, index) => {
            return <Movie info={movieInfo} key={index}/>;  
        });
        return(
        <div>
            {movieList}
        </div>
        )
    }

    componentWillMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

        axios.get(url).then((response) => {
            this.setState({
                movies: response.data.feed.entry
            });
        });
    }
}

export default MoviesContainer;