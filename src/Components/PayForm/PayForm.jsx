import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PayForm = () => {
  const navigate = useNavigate()
    return (
        <Form style={{marginTop: '140px'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your phone</Form.Label>
          <Form.Control type="number" placeholder="+(996) _ _ _ _ _ _" />
          <Form.Text className="text-muted">
            We send you a code to verify your phone number.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Paypal, MasterCard, DemirBank</Form.Label>
          <Form.Control placeholder="your card" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I accept" />
        </Form.Group>
        <Button onClick={() => navigate(`/`)} variant="secondary" >
          Submit
        </Button>
      </Form>
    );
};

export default PayForm;