import React, {useState, useContext} from 'react'
import { Redirect } from 'react-router-dom'
import { withRouter } from "react-router";

import UserContext from "../../auth/UserContext";


import APIHandler from "../../api/APIHandler";


const Signin = (props) => {

    const [user, setUser] = useState({
      email: "",
      password: ""
    });
    const userContext = useContext(UserContext);
    const { setCurrentUser } = userContext;
    const [error, setError] =useState("")


  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const apiRes = await APIHandler.post("/session/signin", user);
      console.log(apiRes)
      setCurrentUser(apiRes.data.currentUser);
    
      props.history.push('/admin')
    } catch (err) {   
      setCurrentUser(null);
      setError("Les identifiants sont incorrects.")
    }
  };

  const handleChange = e => {
    setUser({...user, [e.target.name]: e.target.value });
  }

    return (
        <form className="form-signin flex-column-center" onChange={handleChange} onSubmit={handleSubmit}>
            <label className="label" htmlFor="from">Votre adresse e-mail</label>
            <input className="input border-btn"  type="email" name="email" required  />

            <label className="label" htmlFor="password">Votre mot de passe</label>
            <input className="input border-btn" type="password" name="password" required/>
             
            <p className="error-message">{error}</p>

            <button className="green-btn">Envoyer</button>
        </form>
    )
}

export default withRouter(Signin)
