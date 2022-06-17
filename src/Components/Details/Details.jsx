import { Box, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { authContext } from '../../contexts/authContext';
import { moviesContext } from '../../contexts/moviesContext';
import Loader from "../Loader/Loader";
import './Details.css';

const Details = () => {
    const {getOneMovie, oneMovie, deleteMovie} = useContext(moviesContext)
    const navigate = useNavigate()
    const {admin} = useContext(authContext)
    const { id } = useParams()
    useEffect(() => {
        getOneMovie(id)
     }, [])
    return (
    // <div className="contentBlock">
    <div className='innerContentBlock'>
       {oneMovie ? ( 
           <div className='movie_info'>
                <h2 className='title_text '>{oneMovie.title}</h2>
                {admin ? (<Box  style={{marginTop: '20px'}}><Button style={{marginRight: '20px'}} onClick={() => {deleteMovie(id); navigate(`/movies`)}} variant="outline-dark">Delete</Button> <Button onClick={() => navigate(`/edit-movies/${id}`)} variant="outline-dark">Edit</Button></Box>) : null}
                <div className="movie_block"  style={{marginTop: '20px'}}>
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
                   
                    <div className='row_info' style={{paddingLeft:'0px' ,width: '100%'}}>
                        <div style={{fontWeight: 'bold', paddingBottom: '3px', borderBottom: '1px dashed #c0c0c0', marginBottom: '7px'}}>
                            <div className='row_label'>Description</div>
                        </div>
                        <div style={{lineHeight: '18px'}}>
                            <p  style={{ marginBottom: '50px'}}>{oneMovie.description}</p>
                            <p><iframe width="560" height="315" src={oneMovie.trailer} ></iframe></p>
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