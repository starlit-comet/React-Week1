function UserGreeting(props){

    const welcome =  <h2 className="welcome">Welcome, {props.userName}</h2>
    const notLogged =  <h2 className="login-prompt">user not logged in</h2>

    return props.isLogged ?
     welcome:
     notLogged
    
}

export default UserGreeting