import { Alert } from '@mui/material';
import React, { useContext, useState } from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/authContext';
import './SignUp.css';

const SignUp = (e) => {
    const {signUp, error} = useContext(authContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [passCheck, setPassCheck] = useState('')
    const [password, setPassword] = useState('')
    console.log(passCheck)
    function handleValues(e){

        if(!email || !password){
            alert("Заполните поля!")
            return
        } else if(password !== passCheck){
            alert("Пароли не совпадают!")
            return
        }
        e.preventDefault(e)
        
        signUp(email,password, navigate)
    }

    return (
        <div>
            <Container>
                <Row  className="mt-5" style={{display: "flex", justifyContent: 'center' ,alignItems: 'center'}}>
                    <Col style={{display: "flex", justifyContent: 'center' }} lg={14} md={7} sm={12}>
                        <img className="w-50" src='https://makers.courses/static/media/signup.9bbc758c.svg' alt=""/>
                    </Col>
                    <Col lg={4} md={5} sm={12} className="text-center mt-5 p-3">
                        <Form>
                            <Form.Group >
                                <div style={{display:'flex', justifyContent: "start"}}>Email</div>
                                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" />
                            </Form.Group>

                      

                            <Form.Group className="mt-3">
                                <div style={{display:'flex', justifyContent: "start"}}>Password</div>
                                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Your password" />
                            </Form.Group>

                            <Form.Group className="mt-3">
                                <div style={{display:'flex', justifyContent: "start"}}>Confirm the password</div>
                                <Form.Control value={passCheck} onChange={(e) => setPassCheck(e.target.value)} type="password"  placeholder="Confirm" />
                            </Form.Group>

                            <Button onClick={(e) => handleValues(e)} style={{width:'100%'}} variant="primary btn-block" className="mt-3" type="submit">Sign Up</Button>

                            <div className="text-left mt-3">
                                <div onClick={() => navigate(`/log-in`)} style={{display: 'inline', textDecoration: 'underLine', }}><small className="reset">Log In</small></div> 
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp; 