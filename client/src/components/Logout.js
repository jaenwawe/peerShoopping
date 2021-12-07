  import { useHistory } from 'react-router-dom'

function Logout({setIsLoggedIn, setCurrentUser, setCartArr, currentUser, homeBar,handleLogOut}) {
    const history = useHistory()
    setIsLoggedIn(false)
    setCartArr([])
    setCurrentUser('')
    localStorage.clear();

    function handleLogOut() {
        setIsLoggedIn(false)
        setCartArr([])
        setCurrentUser(null)
        localStorage.clear();
        homeBar()
    }

    return( 
        <div>
            {handleLogOut}
            {homeBar}
            <h1>Logged out</h1>
        </div>

    )
}


export default Logout;