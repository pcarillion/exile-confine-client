import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import APIHandler from '../../api/APIHandler'

import Nav from './AdminHome'

const AdminListSafety = () => {

    const [allSafety, setAllSafety] = useState([])
    useEffect(() => {
        const rv = APIHandler.get('safetyAdvice/all')
        .then((res) => {
            // console.log(res.data)
            setAllSafety(res.data)
            
        })
    },[])
    console.log(allSafety)

    var result;
    const [allLanguage, setAllLanguage] = useState({})
    useEffect(() => {
        const rv = APIHandler.get('inner-text/all')
        .then( res => {
            res.data.map((language) => {
                result = {...result, [language._id] : language.language}
                setAllLanguage(result)
            })
            // setAllSafety(res.data)

        })    
    },[])
    console.log(allLanguage)

    function setLanguage(id) {
        for (const language in allLanguage) {
            if(language === id) {
               return allLanguage[language]
            // console.log(allLanguage[language])
            }
            // console.log(language)
        }
    }

    const deleteLanguage = async (id) => {
        const rv = await APIHandler.delete(`/safetyAdvice/delete`, id);
        console.log("deleted")
        const rs = APIHandler.get("safetyAdvice/all")
        .then (res => 
            {console.log(res.data)
            setAllSafety(res.data)})
        console.log(rv)
        // props.history.push('/admin/list-contacts')
    }

    
    return (
        <div>
            <Nav/>
            <p>Click on the language to edit</p>
            <table>
                <thead>
                    <tr>
                        <th></th>                      
                        <th>Language</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                        {allSafety.map((safety, i) => (
                            <tr>
                                <td>{i +1}</td>
                                <td> <Link to={`/admin/edit-safety-advice/${safety._id}`}>{setLanguage(safety.selLanguageId)}</Link></td>
                                <td><button onClick={() => deleteLanguage(safety._id)}>X</button></td>
                            </tr>
                        ))}

                </tbody>
            </table>
        </div>
    )
}

export default withRouter(AdminListSafety)