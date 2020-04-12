import React, {useState, setState} from 'react'
import APIHandler from "../../api/APIHandler";
import { withRouter } from "react-router";



const Signup = (props) => {

    const [user, setUser] = useState({});
    // const [password, setPassword] = useState("password");
    // const [newsletter, setNewsletter] = useState(true)


    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await APIHandler.post("/session/signup", user);
            console.log("ok");
            
            props.history.push("/signin");
          } catch (err) {
            console.error(err);
          }
      };

      const handleChange = e => {
          
        setUser({...user, [e.target.name]: e.target.value});
      };
    

    return (
        <form className="form-signin flex-column-center" onChange={handleChange} onSubmit={handleSubmit}>

            <label className="label" htmlFor="email">Votre adresse e-mail</label>
            <input className="input border-btn" id="email" type="email" name="email" placeholder="example@domaine.com" required/>

            <label className="label" htmlFor="password">Votre mot de passe</label>
            <input className="input border-btn" id="password" type="password" name="password" placeholder="••••••••" required/>

            <button className="green-btn">Envoyer</button>
        </form>
    )
}

export default withRouter(Signup)
