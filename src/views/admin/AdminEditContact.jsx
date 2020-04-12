import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import APIHandler from './../../api/APIHandler'

import Nav from './AdminHome'


const AdminEditContact = (props) => {

   const [contact, setContact] = useState({
        
   })

   useEffect(() => {
    const rv = APIHandler.get(`contact/${props.match.params.id}`)
    .then (res => 
        {console.log(res.data)
        setContact(res.data)})
    console.log(rv)
   }, [])

   const onClick = async e => {
       console.log("clicked!")
   }

    const onChange = async e => {
        console.log(e.target.type, e.target.name, e.target.checked)
        e.target.type === "checkbox"? setContact({...contact, [e.target.name]: e.target.checked}) :
        setContact({...contact, [e.target.name]: e.target.value})
    }

    const onSubmit = async e => {
        e.preventDefault()
        try {
            await APIHandler.patch(`/contact/edit/${contact._id}`, contact);
            console.log("edited")
            props.history.push('/admin/list-contacts')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Nav/>
            <form className='admin-form flex-column-center' onChange={onChange} onSubmit={onSubmit} onCLick={onClick}>
                
                <h3>Main informations (all fields required)</h3>
                
                <div className="flex-column-center">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" defaultValue={contact.name}/>
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" defaultValue={contact.city}/>
                    <label htmlFor="language">Language(s)</label>
                    <input type="text" name="language" defaultValue={contact.language}/>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" defaultValue={contact.phone}/>
                    <label htmlFor="isWhatsApp">Does this phone number work on WhatsApp?</label>
                    {contact.isWhatsApp? <input type="checkbox" name="isWhatsApp" checked/>:
                    <input type="checkbox" name="isWhatsApp" />}
                    {/* <input type="radio" name="isWhatsApp" defaultChecked={contact.isWhatsApp && "true"}/> */}
                </div>

                <h3>What services can he/she propose? (at least one field required)</h3>
                
                <div className="flex-column-center">
                    <label htmlFor="isTranslator">Translation in his/her language</label>
                    {
                        contact.isTranslator ? <input type="checkbox" name="isTranslator" checked/>:
                        <input type="checkbox" name="isTranslator"/>
                    }
                    <label htmlFor="callAmbulance">Call an ambulance</label>
                    {
                        contact.callAmbulance ? <input type="checkbox" name="callAmbulance" checked/>:
                        <input type="checkbox" name="callAmbulance"/>
                    }
                    <label htmlFor="psySupport">Psychological support</label>
                    {
                        contact.psySupport ? <input type="checkbox" name="psySupport" checked/>:
                        <input type="checkbox" name="psySupport"/>
                    }
                    <label htmlFor="needsMedecines">If someone needs medecines, would he/she go to buy them?</label>
                    {
                        contact.needsMedecines ?<input type="checkbox" name="needsMedecines" checked/>:
                        <input type="checkbox" name="needsMedecines"/>
                    }
                    
                    <label htmlFor="needsSupermarket">Go to the store to buy food and basic commodities</label>
                    {
                        contact.needsSupermarket ? <input type="checkbox" name="needsSupermarket" checked/> :
                        <input type="checkbox" name="needsSupermarket" />
                    }
                    <label htmlFor="needsElse">Anything else that someone would need to ask</label>
                    {
                        contact.needsElse?<input type="checkbox" name="needsElse" checked/>:
                        <input type="checkbox" name="needsElse" />
                    }
                </div>

                <h3>On what hours?</h3>

                <div className="flex-column-center">
                    <p>a.m.</p>
                    <label htmlFor="from0to4">From midnight to 4</label>
                    {
                        contact.from0to4 ?<input type="checkbox" name="from0to4" checked/>:
                        <input type="checkbox" name="from0to4" />
                    }
                    <label htmlFor="from4to8">From 4 to 8</label>
                    {
                        contact.from4to8 ?<input type="checkbox" name="from4to8" checked/>: 
                        <input type="checkbox" name="from4to8" />
                    }
                    <label htmlFor="from8to12">From 8 to noon</label>
                    {
                        contact.from8to12? <input type="checkbox" name="from8to12" checked/>:
                        <input type="checkbox" name="from8to12" />   
                    }
                    <p>p.m.</p>
                    <label htmlFor="from12to16">From noon to 4</label>
                    {
                        contact.from12to16?  <input type="checkbox" name="from12to16" checked/>:
                        <input type="checkbox" name="from12to16" />
                    }
                    <label htmlFor="from16to20">From 4 to 8</label>
                    {
                        contact.from16to20 ? <input type="checkbox" name="from16to20" checked/> :
                        <input type="checkbox" name="from16to20"/>
                    }
                    <label htmlFor="from20to24">From 8 to midnight</label>
                    {
                        contact.from20to24 ? <input type="checkbox" name="from20to24" checked/>:
                        <input type="checkbox" name="from20to24"/>
                    }
                </div>

                <button>Edit contact</button>
            </form>
        </div>
    )
}

export default withRouter(AdminEditContact)
