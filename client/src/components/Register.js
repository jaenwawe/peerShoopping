import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';



function Register({
  handleRegister, first_name,setFirstName,last_name,setLastName, username,setUsername,phone_number,setNumber, address,setAddress,city, setCity, state,setState, zipcode,setZip,email, setEmail, setPassword,password }) 
  {
    
  return (
    <Form className="form-container" onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label className="container-text">First Name</Form.Label>
            <Form.Control type="firstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
          </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Shhh...Password" onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="595-340-5555" onChange={(e) => setNumber(e.target.value)}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="address" placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicState">
          <Form.Label>State</Form.Label>
          <Form.Control type="state" placeholder="State" onChange={(e) => setState(e.target.value)}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="city" placeholder="City" onChange={(e) => setCity(e.target.value)}/>
      </Form.Group>


    <Form.Group className="mb-3" controlId="formBasicZipCode">
          <Form.Label>Zip code</Form.Label>
          <Form.Control type="zipcode" placeholder="ZipCode" onChange={(e) => setZip(e.target.value)}/>
      </Form.Group>



      <Button variant="primary" type="submit">
          Submit
      </Button>
    </Form>
  )
}

export default Register;