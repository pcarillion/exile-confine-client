import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import APIHandler from './../../api/APIHandler'

import Nav from './AdminHome'

const AdminCreateContact = (props) => {

   const [contact, setContact] = useState({})

    const onChange = async e => {
        // console.log(e.target.type, e.target.name, e.target.checked)
        e.target.type === "checkbox"? setContact({...contact, [e.target.name]: e.target.checked}) :
        setContact({...contact, [e.target.name]: e.target.value})
    }

    const onSubmit = async e => {
        e.preventDefault()
        try {
            await APIHandler.post('/contact/create', contact);
            console.log("created")
            props.history.push('/admin/list-contacts')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Nav/>
            <form className='admin-form flex-column-center' onChange={onChange} onSubmit={onSubmit} >
                
                <h3>Main informations (all fields required)</h3>
                
                <div className="flex-column-center">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"/>
                    <label htmlFor="city">City</label>
                    <input type="text" name="city"/>
                    <label htmlFor="language">Language(s)</label>
                    <input type="text" name="language"/>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone"/>
                    <label htmlFor="isWhatsApp">Does this phone number work on WhatsApp?</label>
                    <input type="checkbox" name="isWhatsApp"/>
                </div>

                <h3>What services can he/she propose? (at least one field required)</h3>
                
                <div className="flex-column-center">
                    <label htmlFor="isTranslator">Translation in his/her language</label>
                    <input type="checkbox" name="isTranslator"/>
                    <label htmlFor="callAmbulance">Call an ambulance</label>
                    <input type="checkbox" name="callAmbulance"/>
                    <label htmlFor="psySupport">Psychological support</label>
                    <input type="checkbox" name="psySupport" />
                    <label htmlFor="needsMedecines">If someone needs medecines, would he/she go to buy them?</label>
                    <input type="checkbox" name="needsMedecines"/>
                    <label htmlFor="needsSupermarket">Go to the store to buy food and basic commodities</label>
                    <input type="checkbox" name="needsSupermarket"/>
                    <label htmlFor="needsElse">Anything else that someone would need to ask</label>
                    <input type="checkbox" name="needsElse"/>
                </div>

                <h3>On what hours?</h3>

                <div>
                    <p>a.m.</p>
                    <label htmlFor="from0to4">From midnight to 4</label>
                    <input type="checkbox" name="from0to4"/>
                    <label htmlFor="from4to8">From 4 to 8</label>
                    <input type="checkbox" name="from4to8"/>
                    <label htmlFor="from8to12">From 8 to noon</label>
                    <input type="checkbox" name="from8to12"/>
                    <p>p.m.</p>
                    <label htmlFor="from12to16">From noon to 4</label>
                    <input type="checkbox" name="from12to16"/>
                    <label htmlFor="from16to20">From 4 to 8</label>
                    <input type="checkbox" name="from16to20"/>
                    <label htmlFor="from20to24">From 8 to midnight</label>
                    <input type="checkbox" name="from20to24"/>
                </div>

                <button>Add contact</button>
            </form>
        </div>
    )
}

export default withRouter(AdminCreateContact)
