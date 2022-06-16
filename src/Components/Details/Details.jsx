import { Box, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesContext } from '../../contexts/moviesContext';
import Loader from "../Loader/Loader";
import './Details.css';

const Details = () => {
    const {getOneMovie, oneMovie} = useContext(moviesContext)
    console.log(oneMovie);
    const { id } = useParams()
    useEffect(() => {
        getOneMovie(id)
     }, [])
    return (
    // <div className="contentBlock">
    <div className='innerContentBlock'>
       {oneMovie ? ( 
            <div className='movie_info'>
                <h2 className='title_text'>{oneMovie.title}</h2>
                <div className="movie_block">
                    <div className="movie_preview">
                        <img style={{width: '253x', height: '343px'}} src={oneMovie.image} alt={oneMovie.title} />
                        <br />
                        &nbsp;
                    </div>
                    <div className='movie_decription'>
                        <div className="row_info">
                            <div className='row_label'>Year</div>
                            <div className='row_value'>{oneMovie.year}</div>
                        </div>
                        <div  className="row_info">
                            <div className='row_label'>Country</div>
                            <div className='row_value'>{oneMovie.country}</div>
                        </div>
                        <div  className="row_info">
                            <div className='row_label'>Genre</div>
                            <div className='row_value'>{oneMovie.genre}</div>
                        </div>
                        <div  className="row_info">
                            <div className='row_label'>Duration</div>
                            <div className='row_value'>{oneMovie.duration}</div>
                        </div>
                        <div  className="row_info">
                            <div className='row_label'>Starring</div>
                            <div className='row_value'>{oneMovie.actors}</div>
                        </div>
                    </div>
                    <div className='clear'></div>
                   
                    <div className='row_info' style={{paddingLeft:'0px'}}>
                        <div style={{fontWeight: 'bold', paddingBottom: '3px', borderBottom: '1px dashed #c0c0c0', marginBottom: '7px'}}>
                            <div className='row_label'>Description</div>
                        </div>
                        <div style={{lineHeight: '18px'}}>
                            <p  style={{ marginBottom: '50px'}}>{oneMovie.description}</p>
                            <p><iframe width="560" height="315" src={oneMovie.trailer}></iframe></p>
                        </div>
                    </div>
                </div>
        </div>
       ) : (<Loader />)} 
    </div>
    // </div>    
    );
};

export default Details;