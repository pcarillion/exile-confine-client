import React, {useEffect, useState} from 'react'
import APIHandler from './../api/APIHandler'
import { withRouter } from 'react-router-dom'

const SafetyAdvice = (props) => {

    const [advices, setAdvices] = useState([])
    useEffect(() => {
        const rv = APIHandler.get("safetyAdvice/all")
        .then (res => 
            {console.log(res.data)
            setAdvices(res.data)})
        console.log(rv)
    }, [])

    return(
        <div>
            <p>hello</p>
        </div>
    )
}

export default withRouter(SafetyAdvice)