import React, {useEffect, useState} from 'react'
import APIHandler from './../api/APIHandler'
import { withRouter } from 'react-router-dom'

const SafetyAdvice = (props) => {


    const [allLanguage, setAllLanguage] = useState({})
    useEffect(() => {
        const rv = APIHandler.get(`safetyAdvice/all`)
            .then(res => {
                console.log(res.data)
                res.data.filter(obj => obj.selLanguageId === props.match.params.id ?
                setAllLanguage(obj) : console.log("not found"))
            })
    }, [])
    // console.log(allLanguage)

    return(
        <div>
            <p className="safety-title">{allLanguage.symptomsTitle}</p>
            <div className="safety-advice-container">
                <div className="safety-advice">
                    <img src="./../../img/safety/safetyFever.png" alt="" />
                    <p>{allLanguage.symptomFever}</p>
                </div>
                <div className="safety-advice">
                    <img src="./../../img/safety/safetyCough.png" alt="" />
                    <p>{allLanguage.symptomCough}</p>
                </div>
                <div className="safety-advice">
                    <img src="./../../img/safety/safetyBreath.png" alt="" />
                    <p>{allLanguage.symptomBreath}</p>
                </div>
                <div className="safety-advice">
                    <img src="./../../img/safety/safetyThroat.png" alt="" />
                    <p>{allLanguage.symptomThroat}</p>
                </div>
                <div className="safety-advice">
                    <img src="./../../img/safety/safetyHeadache.png" alt="" />
                    <p>{allLanguage.symptomHeadache}</p>
                </div>
            </div>
            
            <p className="safety-title">{allLanguage.preventionTitle}</p>
            <div className="safety-advice-container">
                <div className="safety-advice">
                    <img src="./../../img/safety/preventionWash.png" alt="" />
                    <p>{allLanguage.preventionWash}</p>
                </div>
                <div className="safety-advice">
                    <img src="./../../img/safety/PreventionContact.png" alt="" />
                    <p>{allLanguage.preventionContact}</p>
                </div>
                <div className="safety-advice">
                    <img src="./../../img/safety/preventionTouch.png" alt="" />
                    <p>{allLanguage.preventionTouch}</p>
                </div>
                <div className="safety-advice">
                    <img src="./../../img/safety/preventionMask.png" alt="" />
                    <p>{allLanguage.preventionMask}</p>
                </div>
                <div className="safety-advice">
                    <img src="./../../img/safety/preventionCrowd.png" alt="" />
                    <p>{allLanguage.preventionCrowd}</p>
                </div>
            </div>
            
            <p className="safety-title">{allLanguage.infectedTitle}</p>
            <div className="safety-advice-container">
                <div className="safety-advice">
                    <img src="./../../img/safety/infectedHome.png" alt="" />
                    <p>{allLanguage.infectedHome}</p>
                </div>
                <div className="safety-advice">
                    <img src="./../../img/safety/infectedOthers.png" alt="" />
                    <p>{allLanguage.infectedOthers}</p>
                </div>
                <div className="safety-advice">
                    <img src="./../../img/safety/infectedCover.png" alt="" />
                    <p>{allLanguage.infectedCover}</p>
                </div>
                <div className="safety-advice">
                    <img src="./../../img/safety/infectedTissue.png" alt="" />
                    <p>{allLanguage.infectedTissue}</p>
                </div>
                <div className="safety-advice">
                    <img src="./../../img/safety/infectedClean.png" alt="" />
                    <p>{allLanguage.infectedClean}</p>
                </div>
            </div>
        </div>
    )
}


export default withRouter(SafetyAdvice)