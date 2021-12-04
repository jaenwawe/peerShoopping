  import { useHistory } from 'react-router-dom'

function Logout({setIsLoggedIn, setCurrentUser, setCartArr, currentUser, homeBar}) {
    const history = useHistory()
    setIsLoggedIn(false)
    setCartArr([])
    setCurrentUser('')
   
    function handleLogOut() {
        setIsLoggedIn(false)
        setCartArr([])
        setCurrentUser(null)
        homeBar()
       
    }

    return( 
        <div>
            {handleLogOut}
            <h1>Logged out</h1>
        </div>

    )
}


export default Logout;