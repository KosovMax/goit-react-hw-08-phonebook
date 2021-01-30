import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import {authOperations} from './../../redux/auth';

const INITIAL_STATE = {
    name:"",
    email:"",
    password:""
}

function RegisterView({onRegister}){

    const [state, setState] = useState({...INITIAL_STATE})
    const {name, email, password} = state;

    const handleChange = ({target}) => {
        const { name, value } = target;
        setState(prevState => ({...prevState, [name]:value}))
    }

    const handleSubmit = evt =>{
        evt.preventDefault();

        onRegister(state)
        setState(INITIAL_STATE);
    }

    return (
        <Form className="formInput" onSubmit={handleSubmit}>
            <h3 style={{textAlign: 'center'}}>Register</h3>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name="name" value={name} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />
            </Form.Group>
            
            <Button variant="primary" type="submit" style={{margin:'auto', display: 'block'}}>Sign Up</Button>
            
        </Form>
    )
}

// const mapStateToProps = state => {

// }

const mapDispatchToProps = {
    onRegister: authOperations.register
}

export default connect(null, mapDispatchToProps)(RegisterView);