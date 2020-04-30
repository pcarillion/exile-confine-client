import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import APIHandler from './../../api/APIHandler'

import Nav from './AdminHome'


const AdminEditLanguage = (props) => {


    const [language, setLanguage] = useState({})

useEffect(() => {
 const rv = APIHandler.get(`inner-text/${props.match.params.id}`)
 .then (res => 
     {console.log(res.data)
     setLanguage(res.data)})
 console.log(rv)
}, [])

const onChange = async e => {
        // console.log(language)
        // console.log(e.target.type, e.target.name, e.target.checked)
        setLanguage({...language, [e.target.name]: e.target.value})
    }

    const onSubmit = async e => {
        e.preventDefault()
        try {
            await APIHandler.patch(`/inner-text/edit/${language._id}`, language);
            console.log("edited")
            props.history.push('/admin/list-languages')
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div >
            <Nav/>
            <p>Edit a language</p> 
            <p>Please, write directly in the language</p>
            <p>Please translate literaly the terms between quotation marks ("")</p>
            <p>Please, fill ALL the fields to register a new language</p>
            
            <form className='admin-form flex-column-center' 
            onChange={onChange} onSubmit={onSubmit} 
            >
            
            <h3>Home page</h3>
            <label htmlFor="language">Language</label>
            <input type="text" name="language" defaultValue={language.language}/>
            <label htmlFor="websiteName">Main title</label>
            <input type="text" name="websiteName" defaultValue={language.websiteName}/>
            <label htmlFor="advice">link "See safety advice"</label>
            <input type="text" name="advice" defaultValue={language.advice}/>
            <label htmlFor="enter">Button "enter"</label>
            <input type="text" name="enter" defaultValue={language.enter}/>
            <label htmlFor="websitePresentation">Website Presentation and general conditions</label>
            <textarea className="textarea" name="websitePresentation" defaultValue={language.websitePresentation}/>

            <h3>Time schedule</h3>

            <label htmlFor="timeSchedule">"Time schedule"</label>
            <input type="text" name="timeSchedule" defaultValue={language.timeSchedule}/>
            <label htmlFor="morning">"a.m" or "morning"</label>
            <input type="text" name="morning" defaultValue={language.morning}/>
            <label htmlFor="afternoon">"p.m." or "afternoon"</label>
            <input type="text" name="afternoon" defaultValue={language.afternoon}/>
            <label htmlFor="from0to4">"from midnight to 4" (am)</label>
            <input type="text" name="from0to4" defaultValue={language.from0to4}/>
            <label htmlFor="from4to8">"from 4 to 8" (am)</label>
            <input type="text" name="from4to8" defaultValue={language.from4to8}/>
            <label htmlFor="from8to12">"from 8 to 12" (am)</label>
            <input type="text" name="from8to12" defaultValue={language.from8to12}/>
            <label htmlFor="from12to16">"from noon to 4" (pm)</label>
            <input type="text" name="from12to16" defaultValue={language.from12to16}/>
            <label htmlFor="from16to20">"from 4 to 8" (pm)</label>
            <input type="text" name="from16to20" defaultValue={language.from16to20}/>
            <label htmlFor="from20to24">"from 8 (pm) to midnight"</label>
            <input type="text" name="from20to24" defaultValue={language.from20to24}/>
            
            <h3>Services requested</h3>
            <label htmlFor="serviceRequested">Title "Services requested"</label>
            <input type="text" name="serviceRequested" defaultValue={language.serviceRequested}/>
            <label htmlFor="medicalSupport">"Medical support"</label>
            <input type="text" name="medicalSupport" defaultValue={language.medicalSupport}/>
            <label htmlFor="translation">"Translation by telephone"</label>
            <input type="text" name="translation" defaultValue={language.translation}/>
            <label htmlFor="ambulanceCall">"Call an ambulance"</label>
            <input type="text" name="ambulanceCall" defaultValue={language.ambulanceCall}/>
            <label htmlFor="psySupport">"Pyschological support"</label>
            <input type="text" name="psySupport" defaultValue={language.psySupport}/>
            <label htmlFor="otherService">"Other Services"</label>
            <input type="text" name="otherService" defaultValue={language.otherService}/>
            <label htmlFor="medecinesRequest">"Need of medecine"</label>
            <input type="text" name="medecinesRequest" defaultValue={language.medecinesRequest}/>
            <label htmlFor="supermarket">"Need of help for shopping at the supermarket"</label>
            <input type="text" name="supermarket" defaultValue={language.supermarket}/>
            <label htmlFor="other">"Other request"</label>
            <input type="text" name="other" defaultValue={language.other}/>
            <label htmlFor="teamComposition">"Available people"</label>
            <input type="text" name="teamComposition" defaultValue={language.teamComposition}/>
            <label htmlFor="name">"Name"</label>
            <input type="text" name="name" defaultValue={language.name}/>
            <label htmlFor="city">"City"</label>
            <input type="text" name="city" defaultValue={language.city}/>
            <label htmlFor="transLanguage">"Language"</label>
            <input type="text" name="transLanguage" defaultValue={language.transLanguage}/>
            <label htmlFor="phone">"Phone"</label>
            <input type="text" name="phone" defaultValue={language.phone}/>
            <label htmlFor="whatsapp">"Whatsapp available"</label>
            <input type="text" name="whatsapp" defaultValue={language.whatsapp}/>

            <label htmlFor="genCond1">General Conditions, first Paragraph</label>
            <textarea className="textarea" name="genCond1" defaultValue={language.genCond1}/>
            <label htmlFor="">General Conditions, second Paragraph</label>
            <textarea className="textarea" name="genCond2" defaultValue={language.genCond2}/>
            <label htmlFor="back">"Back"</label>
            <input type="text" name="back" defaultValue={language.back}/>
            <label htmlFor="seeMore">"Read more" (link to general conditions)</label>
            <input type="text" name="seeMore" defaultValue={language.seeMore}/>

            <button>Edit</button>
            </form>
        </div>
    )
}

export default withRouter(AdminEditLanguage)
