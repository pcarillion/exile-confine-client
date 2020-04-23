import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import APIHandler from './../../api/APIHandler'

import Nav from './AdminHome'

const AdminSafetyList = () => {

    const [allSafety, setAllSafety] = useState([])
    useEffect(() => {
        const rv = APIHandler.get('safetyAdvice/all')
        .then((res) => {
            // console.log(res.data)
            setAllSafety(res.data)
        })
    },[])

    const [innerText, setInnerText] = useState([])
    useEffect(() => {
        const rv = APIHandler.get('inner-text/all')
        .then(res => {
            // console.log(res.data)
            setInnerText(res.data)

        })    
    },[])
        

    
    return(
        <div>
            <p>ok</p>
        </div>
    )
}

export default withRouter(AdminSafetyList)