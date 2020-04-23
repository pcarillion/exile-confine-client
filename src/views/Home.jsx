import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import APIHandler from './../api/APIHandler'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'



const Home = (props) => {


    
    // langue


    const [allLanguages, setAllLanguages] = useState([])
    useEffect(() => {
        const rv = APIHandler.get("inner-text/all")
        .then (res => 
            {console.log(res.data)
            setAllLanguages(res.data)
            defaultLanguage(res.data)
        })
    }, [])


    const [languageId, setLanguageId] = useState("")
    const handleChange = async e => {
        setLanguageId(e.target.value)
        console.log(languageId)
    }

    const defaultLanguage = async (data) => {
        console.log(data)
        if (props.match.params.id) {
            return setLanguageId(props.match.params.id)
        }
        if (languageId.length == 0) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].language.trim() === "عربي") {
                    setLanguageId(data[i]._id)
                }
            }
        }
    }


    const [language, setLanguage] = useState({})
    useEffect(() => {
    console.log(languageId)
    const rv = APIHandler.get(`inner-text/${languageId}`)
    .then (res => 
        {console.log(res.data)
        setLanguage(res.data)})
    }, [languageId])




    // liste des contacts

    const [allContacts, setAllContacts] = useState([])
    useEffect(() => {
        const rv = APIHandler.get("contact/all")
        .then (res => 
            {console.log(res.data)
            setAllContacts(res.data)})
        console.log(rv)
    }, [])

    function checkIfTrue(bool){
        if (bool === true) {
            return <FontAwesomeIcon className="FontIcon" icon={faWhatsapp}/>
          }
    }

    const [time, setTime] = useState("")

    const [service, setService] = useState("")
    
    const [country, setCountry] = useState("France")

    const  onChange = e => {
        console.log(e.target.value)
        if (e.target.name === "time") setTime(e.target.value);
        if (e.target.name === "service") setService(e.target.value);
        if (e.target.name === "country") setCountry(e.target.value);
    }

    const [results, setResults] = useState([])
    
    useEffect(() => {
        setResults(allContacts.filter((contact) => {
            console.log(contact.country === country, contact.language === language._id)
            console.log("service: ", service)
            console.log("time : ", time)
            console.log(
                service === "translation" && contact.isTranslator ||
                service === "callAmbulance"  && contact.callAmbulance ||
                service === "psySupport"  && contact.psySupport ||
                service === "medecinesRequest"  && contact.needsMedecines ||
                service === "supermarket"  && contact.needsSupermarket ||
                service === "other"  && contact.needsElse
            );
            console.log(
                time === "from0to4" && contact.from0to4 || 
                time === "from4to8" && contact.from4to8 ||
                time === "from8to12" && contact.from8to12 ||
                time === "from12to16" && contact.from12to16 ||
                time === "from16to20" && contact.from16to20 ||
                time === "from20to24" && contact.from20to24
            );
            return (
                time === "from0to4" && contact.from0to4 || 
                time === "from4to8" && contact.from4to8 ||
                time === "from8to12" && contact.from8to12 ||
                time === "from12to16" && contact.from12to16 ||
                time === "from16to20" && contact.from16to20 ||
                time === "from20to24" && contact.from20to24
            )
            &&
            (
                service === "translation" && contact.isTranslator ||
                service === "callAmbulance"  && contact.callAmbulance ||
                service === "psySupport"  && contact.psySupport ||
                service === "medecinesRequest"  && contact.needsMedecines ||
                service === "supermarket"  && contact.needsSupermarket ||
                service === "other"  && contact.needsElse
            )
            &&
            (
                contact.language === language._id
            )
            && 
            (
                contact.country === country
            )
        }))}
    , ([
        time,
        service,
        language, 
        country
    ]))

    function changeNumToWhats(number) {
        var result
        result = number.replace(")", "").replace("(", "").split(" ").join("")
        return result
      }




    return (
        <div className="app-div">

            <div className="home-div">
                <nav className="home-nav">
                    <form action="" className="language-selection">
                        <select style={{color: "white"}} className="language-option"  onChange={handleChange}>
                            {allLanguages.map((lang, i) => {
                                return lang.language === language.language ? 
                                <option style={{color: "white"}} className="text-option" value={lang._id} selected>{lang.language}</option>:
                                <option style={{color: "white"}} className="text-option" value={lang._id}>{lang.language}</option> 
                            })}
                        </select>
                    </form>
                </nav>
                <div className="flex-column-center home-content">
                    <img className="website-logo" src="./../../Final Go.png" />

                    {language.websiteName ? <h1>{language.websiteName}</h1> : <h1>ترجمة نزبطا ليك</h1>}
                    <div className="presentation-div">
                        {language.websitePresentation ?
                            <p className="presentation-par">
                                {language.websitePresentation}
                            </p>
                            : <p className="presentation-par">
                                Here is an application but the data base seems to encounter difficulties.
                            </p>}
                        <br />
                        {language.seeMore ?
                            <Link className="gen-cond-link" to={`/general-conditions/${language._id}`}>{language.seeMore}</Link> :
                            <Link className="gen-cond-link" to={`/general-conditions/${language._id}`}>Read more about our general conditions</Link>}
                    </div>

                    {language.advice ?
                            <Link className="advice-link" to={`/safety-advice/${language._id}`}>{language.advice}</Link> :
                            <Link className="advice-link" to={`/safety-advice/${language._id}`}>See safety advice</Link>}

                    {language.enter ? <a href="#form-div" className="enter-btn-1">{language.enter}</a> : <a href='#form-div' className="enter-btn-1">أدخل</a>}
                    {/* <Link to="/signin">Log in</Link> */}
                    {/* <Link to='/signup'>Sign up</Link> */}

                </div>
            </div>

            <div className="form-div" id="form-div">
                    <form onChange={onChange} className="flex-column-center">
                    {language.timeSchedule? <h2>{language.timeSchedule}</h2>:<h2>Time Schedule</h2>}
                    <div className="form-component" id="form-component1">
                        
                        <div className='form-component1-div'>
                            <div >
                                {language.morning? <h4>{language.morning}</h4>:<h4>Morning</h4>}
                                <div className="input-div">
                                    <input type="radio" name="time" value="from0to4"/>
                                    {language.from0to4? <p>{language.from0to4}</p>:<p>From midnight to 4</p>}
                                </div>
                                <div className="input-div">
                                    <input type="radio" name="time" value="from4to8"/>
                                    {language.from4to8? <p>{language.from4to8}</p>:<p>From 4 to 8</p>}
                                </div>
                                <div className="input-div">
                                    <input type="radio" name="time" value="from8to12"/>
                                    {language.from8to12? <p>{language.from8to12}</p>: <p>From 8 to 12</p>}
                                </div>
                                
                            </div>

                            <div>
                                {language.afternoon? <h4>{language.afternoon}</h4>:<h4>Afternoon</h4>}
                                <div className="input-div">
                                    <input type="radio" name="time" value="from12to16"/>
                                    {language.from12to16? <p>{language.from12to16}</p>: <p>From noon to 4</p>} 
                                </div>
                                <div className="input-div">
                                    <input type="radio" name="time" value="from16to20"/>
                                    {language.from16to20? <p>{language.from16to20}</p>: <p>From 4 to 8</p>}
                                </div>
                                <div className="input-div">
                                    <input type="radio" name="time" value="from20to24"/>
                                    {language.from20to24? <p>{language.from20to24}</p>: <p>From 8 to midnight </p>}
                                </div>
                            </div>
                        </div>

                        <div id="country-div">
                            <h4>{language.country? <p>{language.country}</p>: <p>country</p>}</h4>
                            <div>
                                <input type="radio" name="country" value="France"/>
                                {language.France? <p>{language.France}</p>: <p>France</p>}
                                <input type="radio" name="country" value="Malte"/>
                                {language.Malte? <p>{language.Malte}</p>: <p>Malte</p>}
                            </div>
                        </div>

                    </div>

                    {language.serviceRequested? <h2>{language.serviceRequested}</h2> : <h2>Services required</h2>}
                    
                    <div className="form-component">
                        <div>
                            {language.medicalSupport ? <h4>{language.medicalSupport}</h4> : <h4>Medical Support</h4>}
                            <div className="input-div">
                                <input type="radio" name="service" value="translation"/>
                                {language.translation? <p>{language.translation}</p> : <p>Translation by telephone </p>}
                            </div>
                            <div className="input-div">
                                <input type="radio" name="service" value="callAmbulance"/>
                                {language.ambulanceCall? <p>{language.ambulanceCall}</p> : <p>Call an ambulance </p>}
                            </div>
                            <div className="input-div">
                                <input type="radio" name="service" value="psySupport"/>
                                {language.psySupport? <p>{language.psySupport}</p> : <p>Any other request </p>}
                            </div>
                        </div>
                        <div>
                            {language.otherService ? <h4>{language.otherService}</h4> : <h4>Other Services</h4>}
                            <div className="input-div">
                                <input type="radio" name="service" value="medecinesRequest"/>
                                {language.medecinesRequest? <p>{language.medecinesRequest}</p> : <p>Any other request </p>}
                            </div>
                            <div className="input-div">
                                <input type="radio" name="service" value="supermarket"/>
                                {language.supermarket? <p>{language.supermarket}</p> : <p>Need for help for shopping at the supermarket  </p>}
                            </div>
                            <div className="input-div">
                                <input type="radio" name="service" value="other"/>
                                {language.other? <p>{language.other}</p> : <p>Any other request </p>}
                            </div>
                        </div>
                    </div>
                    
                        {language.enter? <a href="#list-div" className="enter-btn-2">{language.enter}</a> : <a href="#list-div" className="enter-btn-2">Enter</a>}
                    </form>
            </div> 

            <div id="list-div">
                {language.teamComposition? <h2>{language.teamComposition}</h2> : <h2>Available people</h2>}
                {(language.language === "عربي" || language.language === "فارسی" || language.language ==="پښتو")&&
                <table>
                    <thead>
                        <tr>
                            {language.whatsapp? <th>{language.whatsapp}</th> : <th>Whatsapp</th>}
                            {language.phone? <th>{language.phone}</th> : <th>Phone number</th>}
                            {language.transLanguage? <th>{language.transLanguage}</th> : <th>Language</th>}
                            {language.city? <th>{language.city}</th> : <th>City</th>}
                            {language.name? <th>{language.name}</th> : <th>Name</th> }
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((contact, i) => (
                            <tr>
                                <td><a href={`https://wa.me/${changeNumToWhats(contact.phone)}`}>{checkIfTrue(contact.isWhatsApp)}</a></td>
                                <td><a href={`tel:${contact.phone}`}><FontAwesomeIcon className="FontIcon" icon={faPhone}/></a></td>
                                <td>{`${language.language}, ${contact.otherLanguage}`}</td>
                                <td>{contact.city}</td>
                                <td>{contact.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
                {(language.language !== "عربي" && language.language !== "فارسی" && language.language !=="پښتو")&&
                <table>
                    <thead>
                        <tr>
                            {language.name? <th>{language.name}</th> : <th>Name</th> }
                            {language.city? <th>{language.city}</th> : <th>City</th>}
                            {language.transLanguage? <th>{language.transLanguage}</th> : <th>Language</th>}
                            {language.phone? <th>{language.phone}</th> : <th>Phone number</th>}
                            {language.whatsapp? <th>{language.whatsapp}</th> : <th>Whatsapp</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((contact, i) => (
                            <tr>
                                <td>{contact.name}</td>
                                <td>{contact.city}</td>
                                <td>{`${language.language}, ${contact.otherLanguage}`}</td>
                                <td><a href={`tel:${contact.phone}`}><FontAwesomeIcon className="FontIcon" icon={faPhone}/></a></td>
                                <td><a href={`https://wa.me/${changeNumToWhats(contact.phone)}`}>{checkIfTrue(contact.isWhatsApp)}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
                <div className="flex-column-center contact-div">
                        <p>Rejoignez-nous / انضم إلينا</p>
                        <p>exiled.confined@gmail.com</p>
                        <a href="https://www.facebook.com/Exil%C3%A9Es-Confin%C3%A9Es-101584331519914" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{fontSize:"30px", color:"#3b5998"}}/></a>
                        <div>
                            <img className="logo" src="./../../bonabroad.png"/>
                            <img className="logo" src="./../../ensemblepourlechangement.png"/>
                        </div>
                        

                    </div>
            </div>
        </div>
    )
}

export default Home
