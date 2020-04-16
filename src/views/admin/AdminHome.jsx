import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import APIHandler from './../../api/APIHandler'
import {withRouter, Switch, Route} from 'react-router-dom'

const AdminHome = (props) => {

    // const userContext = useContext(UserContext);

    // const { setCurrentUser } = userContext;


    function handleSignout() {
        APIHandler.post("/session/signout").finally(() => {
            props.history.push("/signin")
            // setCurrentUser(null);
            console.log("signed out!")
        })
    }

    return (
        <div >
            <div className="nav-bar">
                <Link to='/admin/list-contacts'>List of contacts</Link>
                <Link to='/admin/create-contact'>Add a new Contact</Link>
                <Link to='/admin/list-languages'>List of languages</Link>
                <Link to='/admin/create-language'>Add a new language</Link>
                <Link to='/admin/safety-advice'> Add safety advice</Link>
                <button onClick={handleSignout}>Log Out</button>
            </div>
        </div>
    )
}

export default withRouter(AdminHome)
