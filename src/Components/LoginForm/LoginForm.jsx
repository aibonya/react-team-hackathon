import { Alert } from '@mui/material';
import React, { useContext, useState } from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/authContext';
import './LoginForm.css';

const LoginForm = () => {
    const {signIn, error} = useContext(authContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleValues(e){
        e.preventDefault()
        if(!email || !password){
            alert("Заполните поля!")
            return
        }
        signIn(email,password, navigate)
    }

    return (
        <>
            <Container>
                <Row style={{display: "flex", justifyContent: 'center' ,alignItems: 'center', marginTop: '6rem'}}>
                    <Col lg={4} md={5} sm={12} className="text-center mt-5 p-3">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <div style={{display:'flex', justifyContent: "start"}}>Email</div>
                                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="mt-3">
                                <div style={{display:'flex', justifyContent: "start"}}>Login</div>
                                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Your password" />
                            </Form.Group>

                            <Button onClick={(e)=>handleValues(e)} style={{width:'100%'}} variant="primary btn-block" className="mt-3" type="submit">Login</Button>

                            {error ? (<Alert style={{ marginTop: '10px'}} severity="error">The email or password was entered incorrectly. <a onClick={() => navigate(`/sign-up`) } className='register'>Register</a> or try again.</Alert>) : null}
                            <div className="text-left mt-3">
                                <div style={{display:'inline', textDecoration: "underline" }} onClick={() => navigate(`/sign-up`)}><small className="reset">Sign Up</small></div> 
                            </div>
                        </Form>
                    </Col>
                    <Col style={{display: "flex", justifyContent: 'center'}} lg={14} md={7} sm={12}>
                        <img className="w-50" src='https://makers.courses/static/media/login.c2fed377.svg' alt=""/>
                    </Col>

                </Row>
            </Container>
        </>
    );
};

export default LoginForm; 