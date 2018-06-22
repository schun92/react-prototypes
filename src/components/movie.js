import React from 'react';
import './movie.css';

export default props => {
    const {info} = props;
    return(
        <div className='movie-info'>
            <img src={info['im:image'][2].label}/>
            <h3>{info['im:name'].label}</h3>
            <p>{info['summary'].label}</p>
            <a href="">{info['id'].label}</a>
        </div>
    )

}