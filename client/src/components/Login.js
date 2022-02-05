

function Login({handleLogin, setEmail, email, setPassword, password,loginRegisterInfo ,currentUser,homeBar }) {

  return (
    <div className="form">   
    <h5> Already a member? Enter your email address and password to login</h5>
    <form  onSubmit={handleLogin}>
        <div className="mb-3" >
            <label className="form-label">Email address 
                <input 
                type="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
            </label>
        </div>

        <div className="mb-3">
            <label  className="form-label">Password
                <input 
                type="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}></input>
            </label>
        </div>
    
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
  )
}

export default Login;