
function Logout({setIsLoggedIn, setCurrentUser, setCartArr, currentUser, homeBar,handleLogOut}) {
    setIsLoggedIn(false)
    setCartArr([])
    setCurrentUser('')
    localStorage.clear();

    return( 
        <div>
            {handleLogOut}
            {homeBar}
            <h1>Logged out</h1>
        </div>

    )
}


export default Logout;