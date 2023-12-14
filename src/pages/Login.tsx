import React, { useState } from 'react';
import { 
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = () => {
        if(!email || !password){
            alert('Please fill credentials!')
            return;
        }


        
    }
    
    return(
        <>
        <Form>
            <FormGroup>
                <Label for="email">
                email
                </Label>
                <Input
                    id='email'
                    onChange={(e)=>
                        setEmail(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="password">
                password
                </Label>
                <Input
                    id='password'
                    type='password'
                    onChange={(e)=>
                        setPassword(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Button onClick={handleLogin}>Login</Button>
            </FormGroup>
            </Form>
        </>
    )
}
export default Login;