import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import APIHandler from './../../api/APIHandler'

import Nav from './AdminHome'


const AdminCreateLanguage = (props) => {


    const [language, setLanguage] = useState({})
 
     const onChange = async e => {
         console.log(e.target.value)
         setLanguage({...language, [e.target.name]: e.target.value})
     }
 
     const onSubmit = async e => {
         console.log(language)
         e.preventDefault()
         try {
             await APIHandler.post('/inner-text/create', language);
             console.log("created")
             props.history.push('/admin/list-languages')
         } catch (err) {
             console.log(err)
         }
     }

    return (
        <div >
            <Nav/>
            <p>Add a new language</p> 
            <p>Please, write directly in the language</p>
            <p>Please translate literaly the terms between quotation marks ("")</p>
            <p>Please, fill ALL the fields to register a new language</p>
            
            <form className='admin-form flex-column-center' onChange={onChange} onSubmit={onSubmit} >
            
            <h3>Home page</h3>
            <label htmlFor="language">Language</label>
            <input type="text" name="language"/>
            <label htmlFor="websiteName">Main title</label>
            <input type="text" name="websiteName"/>
            <label htmlFor="advice">link "See safety advice"</label>
            <input type="text" name="advice"/>
            <label htmlFor="enter">Button "enter"</label>
            <input type="text" name="enter"/>
            <label htmlFor="websitePresentation">Website Presentation and general conditions</label>
            <textarea name="websitePresentation"/>

            <h3>Time schedule</h3>

            <label htmlFor="timeSchedule">"Time schedule"</label>
            <input type="text" name="timeSchedule"/>
            <label htmlFor="morning">"a.m" or "morning"</label>
            <input type="text" name="morning"/>
            <label htmlFor="afternoon">"p.m." or "afternoon"</label>
            <input type="text" name="afternoon"/>
            <label htmlFor="from0to4">"from midnight to 4" (am)</label>
            <input type="text" name="from0to4"/>
            <label htmlFor="from4to8">"from 4 to 8" (am)</label>
            <input type="text" name="from4to8"/>
            <label htmlFor="from8to12">"from 8 to 12" (am)</label>
            <input type="text" name="from8to12"/>
            <label htmlFor="from12to16">"from noon to 4" (pm)</label>
            <input type="text" name="from12to16"/>
            <label htmlFor="from16to20">"from 4 to 8" (pm)</label>
            <input type="text" name="from16to20"/>
            <label htmlFor="from20to24">"from 8 (pm) to midnight"</label>
            <input type="text" name="from20to24"/>
            
            <h3>Services requested</h3>
            <label htmlFor="serviceRequested">Title "Services requested"</label>
            <input type="text" name="serviceRequested"/>
            <label htmlFor="medicalSupport">"Medical support"</label>
            <input type="text" name="medicalSupport"/>
            <label htmlFor="translation">"Translation by telephone"</label>
            <input type="text" name="translation"/>
            <label htmlFor="ambulanceCall">"Call an ambulance"</label>
            <input type="text" name="ambulanceCall"/>
            <label htmlFor="psySupport">"Pyschological support"</label>
            <input type="text" name="psySupport"/>
            <label htmlFor="otherService">"Other Services"</label>
            <input type="text" name="otherService"/>
            <label htmlFor="medecinesRequest">"Need for medecines"</label>
            <input type="text" name="medecinesRequest"/>
            <label htmlFor="supermarket">"Need for help for shopping at the supermarket"</label>
            <input type="text" name="supermarket"/>
            <label htmlFor="other">"Any other request"</label>
            <input type="text" name="other"/>
            <label htmlFor="teamComposition">"Available people"</label>
            <input type="text" name="teamComposition"/>
            <label htmlFor="name">"Name"</label>
            <input type="text" name="name"/>
            <label htmlFor="city">"City"</label>
            <input type="text" name="city"/>
            <label htmlFor="phone">"Phone"</label>
            <input type="text" name="phone"/>
            <label htmlFor="transLanguage">"Language"</label>
            <input type="text" name="transLanguage"/>
            <label htmlFor="whatsapp">"Whatsapp"</label>
            <input type="text" name="whatsapp"/>

            <label htmlFor="genCond1">General Conditions, first Paragraph</label>
            <textarea name="genCond1"/>
            <label htmlFor="">General Conditions, second Paragraph</label>
            <textarea name="genCond2"/>
            <label htmlFor="back">"Back"</label>
            <input type="text" name="back"/>
            <label htmlFor="seeMore">"Read more" (link to general conditions)</label>
            <input type="text" name="seeMore"/>

            <button>Add</button>
            </form>
        </div>
    )
}

export default withRouter(AdminCreateLanguage)
