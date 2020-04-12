import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import APIHandler from './../../api/APIHandler'

import Nav from './AdminHome'


const AdminListLanguages = () => {


    const [allLanguages, setAllLanguages] = useState([])
    useEffect(() => {
        const rv = APIHandler.get("inner-text/all")
        .then (res => 
            {console.log(res.data)
            setAllLanguages(res.data)})
        console.log(rv)
    }, [])

    const deleteLanguage = async (id) => {
        const rv = await APIHandler.delete(`/inner-text/delete`, id);
        console.log("deleted")
        const rs = APIHandler.get("inner-text/all")
        .then (res => 
            {console.log(res.data)
            setAllLanguages(res.data)})
        console.log(rv)
        // props.history.push('/admin/list-Languages')
    }

    return (
        <div>
        <Nav/>
            <p>Here is the list of the languages, click on it to edit</p>
            <ul>
                {allLanguages.map((language, i) => (
                    <li className="li-language"><Link to={`/admin/edit-language/${language._id}`}>{language.language} </Link><button onClick={() => deleteLanguage(language._id)} className="delete-button">Delete</button></li>
                ))}
            </ul>
        </div>
    )
}

export default withRouter(AdminListLanguages)
