  import { useHistory } from 'react-router-dom'

function Logout({setIsLoggedIn, setCurrentUser, setCartArr, currentUser}) {
    const history = useHistory()
    setIsLoggedIn(false)
    setCartArr([])
   
    function handleLogOut(event) {

        // fetch(`/logout/${currentUser.id}`,{
        fetch(`/logout`,{
        method: "DELETE"
    })
    .then(resp => {
        if (resp.ok) {
       
            setCurrentUser(null)
            history.push("/")
        }else {
            resp.json().then(errors => {
            console.error(errors)
            })
        }
  })
}

 

    return( <div>
    <h1>Logged out</h1>
  
    </div>

    )
}


export default Logout;