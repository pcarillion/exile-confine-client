import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import APIHandler from './../api/APIHandler'

const GenConditions = (props) => {

    const [language, setLanguage] = useState({})
    useEffect(() => {
    const rv = APIHandler.get(`inner-text/${props.match.params.id}`)
    .then (res => 
        {console.log(res.data)
        setLanguage(res.data)})
    }, [])

    return (
        <div className="gen-cond-div flex-column-center">
            <div className="border-div">
                <p className="gen-cond-par1">
                    {language.genCond1}
                </p>
                <p className="gen-cond-par2">
                    {language.genCond2}
                </p>
            </div>
            <Link className="enter-btn-1" to={`/home/${props.match.params.id}`}>{language.back}</Link>
        </div>
    )
}

export default GenConditions
