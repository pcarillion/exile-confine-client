import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import APIHandler from '../../api/APIHandler'

import Nav from './AdminHome'

const AdminAddAdviceLanguage = () => {

    const [advice, setAdvice] = useState({})
    
    const onChange = async e => {
        setAdvice({...advice, [e.target.name] : e.target.value})
        console.log(advice);
    }

    const onSubmit = async e => {
        e.preventDefault()
        try{
            await APIHandler.post('/safetyAdvice/create', advice);
            console.log("done");
        }catch (err) {
            console.log(err);
        }
    }


    return(
        <div>
            <Nav/>
            <form className='admin-form flex-column-center' onChange={onChange} onSubmit={onSubmit} >
                

                <h3>Add new language for safety advice</h3>
                <p>Please translate literaly the terms between quotation marks ("")</p>
                <p>(all fields required)</p>
                
                <div className="flex-column-center">
                    <label htmlFor="language">Language</label>
                    <input type="text" name="language"/>
                    <label htmlFor="symptomsTitle">"Symptoms"</label>
                    <input type="text" name="symptomsTitle"/>
                    <label htmlFor="symptomFever">"Fever"</label>
                    <input type="text" name="symptomFever"/>
                    <label htmlFor="symptomCough">"Cough"</label>
                    <input type="text" name="symptomCough"/>
                    <label htmlFor="symptomBreath">"Shortness of breath"</label>
                    <input type="text" name="symptomBreath"/>
                    <label htmlFor="symptomThroat">"Sore throat"</label>
                    <input type="text" name="symptomThroat"/>
                    <label htmlFor="symptomHeadache">"Headache"</label>
                    <input type="text" name="symptomHeadache"/>

                    <label htmlFor="preventionTitle">"Prevention"</label>
                    <input type="text" name="preventionTitle"/>
                    <label htmlFor="preventionWash">"Wash hands with water and soap/sanitizer, at least 20 seconds"</label>
                    <input type="text" name="preventionWash"/>
                    <label htmlFor="preventionContact">"Avoid contact with sick people"</label>
                    <input type="text" name="preventionContact"/>
                    <label htmlFor="preventionTouch">"Don't Touch eyes, nose or mouth with unwashed hands</label>
                    <input type="text" name="preventionTouch"/>
                    <label htmlFor="preventionMask">"Wear mask"</label>
                    <input type="text" name="preventionMask"/>
                    <label htmlFor="preventionCrowd">"Avoid crowded places"</label>
                    <input type="text" name="preventionCrowd"/>

                    <label htmlFor="infectedTitle">"Infected"</label>
                    <input type="text" name="infectedTitle"/>
                    <label htmlFor="infectedHome">"Stay home"</label>
                    <input type="text" name="infectedHome"/>
                    <label htmlFor="infectedOthers">"Avoid contact with others"</label>
                    <input type="text" name="infectedOthers"/>
                    <label htmlFor="infectedCover">"Cover your nose and mouth with tissue or elbow when sneezing"</label>
                    <input type="text" name="infectedCover"/>
                    <label htmlFor="infectedTissue">"Put tissue in trash bin and wash hands"</label>
                    <input type="text" name="infectedTissue"/>
                    <label htmlFor="infectedClean">"Keep objects and surfaces clean"</label>
                    <input type="text" name="infectedClean"/>

                </div>  
                <br/> 
                <button>Add language</button>
            </form>
        </div>
    )
}

export default withRouter(AdminAddAdviceLanguage);