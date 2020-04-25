import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import APIHandler from './../../api/APIHandler'

import Nav from './AdminHome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'


const AdminHome = (props) => {

    
    const [allContacts, setAllContacts] = useState([])
    useEffect(() => {
        const rv = APIHandler.get("contact/all")
        .then (res => 
            {setAllContacts(res.data)
        })
    },[])

console.log(allContacts)


    function checkIfTrue(bool){
        if (bool === true) {
            return "yes"
          }
        else { return "no"}
    }

    const deleteContact = async (id) => {
        const rv = await APIHandler.delete(`/contact/delete`, id);
        console.log("deleted")
        const rs = APIHandler.get("contact/all")
        .then (res => 
            {console.log(res.data)
            setAllContacts(res.data)})
        console.log(rv)
        // props.history.push('/admin/list-contacts')
    }

    const [contacts, setContacts] = useState([])

    // const findLanguageName = async (id) => {
    //     console.log(id)
    //     const rv = await APIHandler.get(`inner-text/${id}`)
    //         .then( res => {
    //                 // return res.data.language
    //                 setContacts([{...allContacts, [res.data] : res.data}])
    //                 console.log(res.data)
    //         })
    // }
    // console.log(allContacts)
    // console.log(contacts[0])

    var result

    const [languageTable, setLanguageTable] = useState({})
    useEffect(() => {
        const rv = APIHandler.get('inner-text/all')
            .then ( res => {
                res.data.map((language) => {
                    result = {...result, [language._id] : language.language}
                    setLanguageTable(result)
                })
            })
    }, [])
    console.log(languageTable)


    function setLanguageName(id) {
        for (const language in languageTable) {
            if (language === id) {
                return languageTable[language]
            }
        }
    }

  
    return (
        <div>
            <Nav/>
            <p>Click on the name to edit</p>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Phone Number</th>
                        <th>Language</th>
                        <th>WhatsApp</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                        {allContacts.map((contact, i) => (
                            <tr>
                                <td>{i +1}</td>
                                <td> <Link to={`/admin/edit-contact/${contact._id}`}>{contact.name}</Link></td>
                                <td>{contact.city}</td>
                                <td>{contact.country}</td>
                                <td>{contact.phone}</td>
                                <td>{setLanguageName(contact.language)}</td>
                                <td>{checkIfTrue(contact.isWhatsApp)}</td>
                                <td><button onClick={() => deleteContact(contact._id)}>X</button></td>
                            </tr>
                        ))}

                </tbody>
            </table>
        </div>
    )
}

export default withRouter(AdminHome)