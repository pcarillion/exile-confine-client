import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import APIHandler from './../../api/APIHandler'

import Nav from './AdminHome'

const AdminEditSafety = (props) => {

    const [safety, setSafety] = useState({})
    useEffect(() => {
        const rv = APIHandler.get(`safetyAdvice/${props.match.params.id}`)
        .then( res => {
            setSafety(res.data)
        })
    },[])

    // console.log(safety._id)

    const onChange = async e => {
        setSafety({...safety, [e.target.name] : e.target.value})
    }

    const onSubmit = async e => {
        // console.log(safety)
        e.preventDefault()
        try {
            await APIHandler.patch(`/safetyAdvice/edit/${safety._id}`, safety);
            console.log("edited")
            props.history.push('/admin/list-safety-advice')
        } catch (err) {
            console.log(err)
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
                    
                    <label htmlFor="symptomsTitle">"Symptoms"</label>
                    <input type="text" name="symptomsTitle" defaultValue={safety.symptomsTitle}/>
                    <label htmlFor="symptomFever">"Fever"</label>
                    <input type="text" name="symptomFever" defaultValue={safety.symptomFever}/>
                    <label htmlFor="symptomCough">"Cough"</label>
                    <input type="text" name="symptomCough" defaultValue={safety.symptomCough}/>
                    <label htmlFor="symptomBreath">"Shortness of breath"</label>
                    <input type="text" name="symptomBreath" defaultValue={safety.symptomBreath}/>
                    <label htmlFor="symptomThroat">"Sore throat"</label>
                    <input type="text" name="symptomThroat" defaultValue={safety.symptomThroat}/>
                    <label htmlFor="symptomHeadache">"Headache"</label>
                    <input type="text" name="symptomHeadache" defaultValue={safety.symptomHeadache}/>

                    <label htmlFor="preventionTitle">"Prevention"</label>
                    <input type="text" name="preventionTitle" defaultValue={safety.preventionTitle}/>
                    <label htmlFor="preventionWash">"Wash hands with water and soap/sanitizer, at least 20 seconds"</label>
                    <input type="text" name="preventionWash" defaultValue={safety.preventionWash}/>
                    <label htmlFor="preventionContact">"Avoid contact with sick people"</label>
                    <input type="text" name="preventionContact" defaultValue={safety.preventionContact}/>
                    <label htmlFor="preventionTouch">"Don't Touch eyes, nose or mouth with unwashed hands"</label>
                    <input type="text" name="preventionTouch" defaultValue={safety.preventionTouch}/>
                    <label htmlFor="preventionMask">"Wear mask"</label>
                    <input type="text" name="preventionMask" defaultValue={safety.preventionMask}/>
                    <label htmlFor="preventionCrowd">"Avoid crowded places"</label>
                    <input type="text" name="preventionCrowd" defaultValue={safety.preventionCrowd}/>

                    <label htmlFor="infectedTitle">"Infected"</label>
                    <input type="text" name="infectedTitle" defaultValue={safety.infectedTitle}/>
                    <label htmlFor="infectedHome">"Stay home"</label>
                    <input type="text" name="infectedHome" defaultValue={safety.infectedHome}/>
                    <label htmlFor="infectedOthers">"Avoid contact with others"</label>
                    <input type="text" name="infectedOthers" defaultValue={safety.infectedOthers}/>
                    <label htmlFor="infectedCover">"Cover your nose and mouth with tissue or elbow when sneezing"</label>
                    <input type="text" name="infectedCover" defaultValue={safety.infectedCover}/>
                    <label htmlFor="infectedTissue">"Put tissue in trash bin and wash hands"</label>
                    <input type="text" name="infectedTissue" defaultValue={safety.infectedTissue}/>
                    <label htmlFor="infectedClean">"Keep objects and surfaces clean"</label>
                    <input type="text" name="infectedClean" defaultValue={safety.infectedClean}/>

                    <br/>
                    <label htmlFor="information1Titile">"Information 1 Title"</label>
                    <input type="text" name="information1Title" defaultValue={safety.information1Title}/>
                    <label htmlFor="information1">"Information 1"</label>
                    <textarea name="information1" defaultValue={safety.information1}/>

                    <br/>
                    <label htmlFor="information2Titile">"Information 2 Title"</label>
                    <input type="text" name="information2Title" defaultValue={safety.information2Title}/>
                    <label htmlFor="information2">"Information 2"</label>
                    <textarea name="information2" defaultValue={safety.information2}/>

                    <br/>
                    <label htmlFor="information3Titile">"Information 3 Title"</label>
                    <input type="text" name="information3Title" defaultValue={safety.information3Title}/>
                    <label htmlFor="information3">"Information 3"</label>
                    <textarea name="information3" defaultValue={safety.information3}/>

                </div>  
                <br/> 
                <button>Edit advices</button>
            </form>
        </div>
    )



}

export default withRouter(AdminEditSafety)
