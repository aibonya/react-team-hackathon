import { Box, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesContext } from '../../contexts/moviesContext';
import Loader from "../Loader/Loader";
import './Details.css';

const SeriesDetails = () => {
    const {getOneSeries, oneSeries} = useContext(moviesContext)
    console.log(oneSeries);
    const { id } = useParams()
    useEffect(() => {
        getOneSeries(id)
     }, [])
    return (
    // <div className="contentBlock">
    <div className='innerContentBlock'>
       {oneSeries ? ( 
            <div className='move_info'>
                <h2 className='title_text'>{oneSeries.title}</h2>
                <div className="movie_block">
                    <div className="movie_preview">
                        <img style={{width: '253x', height: '343px'}} src={oneSeries.image} alt={oneSeries.title} />
                        <br />
                        &nbsp;
                    </div>
                    <div className='movie_decription'>
                        <div className="row_info">
                            <div className='row_label'>Year</div>
                            <div className='row_value'>{oneSeries.year}</div>
                        </div>
                        <div  className="row_info">
                            <div className='row_label'>Country</div>
                            <div className='row_value'>{oneSeries.country}</div>
                        </div>
                        <div  className="row_info">
                            <div className='row_label'>Genre</div>
                            <div className='row_value'>{oneSeries.genre}</div>
                        </div>
                        <div  className="row_info">
                            <div className='row_label'>Duration</div>
                            <div className='row_value'>{oneSeries.duration}</div>
                        </div>
                        <div  className="row_info">
                            <div className='row_label'>Starring</div>
                            <div className='row_value'>{oneSeries.actors}</div>
                        </div>
                    </div>
                    <div className='clear'></div>
                   
                    <div className='row_info' style={{paddingLeft:'0px'}}>
                        <div style={{fontWeight: 'bold', paddingBottom: '3px', borderBottom: '1px dashed #c0c0c0', marginBottom: '7px'}}>
                            <div className='row_label'>Description</div>
                        </div>
                        <div style={{lineHeight: '18px'}}>
                            <p  style={{ marginBottom: '50px'}}>{oneSeries.description}</p>
                            <p><iframe width="560" height="315" src={oneSeries.trailer}></iframe></p>
                        </div>
                    </div>
                </div>
        </div>
       ) : (<Loader />)} 
    </div>
    // </div>    
    );
};

export default SeriesDetails;