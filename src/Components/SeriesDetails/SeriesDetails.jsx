import { Box, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { authContext } from '../../contexts/authContext';
import { moviesContext } from '../../contexts/moviesContext';
import Loader from "../Loader/Loader";
import './SeriesDetails.css';

const SeriesDetails = () => {
    const {getOneSeries, oneSeries, deleteSeries} = useContext(moviesContext)
    const navigate = useNavigate()
    const {admin} = useContext(authContext)
    const { id } = useParams()
    useEffect(() => {
        getOneSeries(id)
     }, [])
    return (
    // <div className="contentBlock">
    <div className='innerContentBlock' style={{marginTop: '100px'}}>
       {oneSeries ? ( 
           <div className='movie_info'>
                <h2 className='title_text '>{oneSeries.title}</h2>
                {admin ? (<Box  style={{marginTop: '20px'}}><Button style={{marginRight: '20px'}} onClick={() => {deleteSeries(id); navigate(`/series`)}} variant="outline-dark">Delete</Button> <Button onClick={() => navigate(`/edit-series/${id}`)} variant="outline-dark">Edit</Button></Box>) : null}
                <div className="movie_block">
                    <div className="movie_preview" style={{marginTop: '20px'}}>
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
                            <div className='row_label'>Price</div>
                            <div className='row_value'>{oneSeries.price}</div>
                        </div>
                        <div  className="row_info">
                            <div className='row_label'>Starring</div>
                            <div className='row_value'>{oneSeries.actors}</div>
                        </div>
                    </div>
                    <div className='clear'></div>
                   
                    <div className='row_info' style={{paddingLeft:'0px' ,width: '100%'}}>
                        <div style={{fontWeight: 'bold', paddingBottom: '3px', borderBottom: '1px dashed #c0c0c0', marginBottom: '7px'}}>
                            <div className='row_label'>Description</div>
                        </div>
                        <div style={{lineHeight: '18px'}}>
                            <p  style={{ marginBottom: '50px'}}>{oneSeries.description}</p>
                            <p><iframe width="560" height="315" src={oneSeries.trailer} ></iframe></p>
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