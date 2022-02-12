import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function Login({handleLogin, setEmail, email, setPassword, password,loginRegisterInfo ,currentUser,homeBar }) {

  return (
    <Form className="form-container-small"  onSubmit={handleLogin}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
    
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">

    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
    )
}

export default Login;




