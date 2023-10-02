import { useState } from 'react'
import { Link } from 'react-router-dom'
import instagram from '../images/mdi_instagram.png'
import linkedin from '../images/ri_linkedin-fill.png'
import facebook from '../images/facebook.png'
import x from '../images/x.png'
import whiteStar from '../images/white-star.png'
import grayStar from '../images/gray-star-big.png'
import puStar from '../images/star pu.png'
import back from '../images/back.png'

function Contact() {
    const [contactInfo, setContactInfo] = useState({
        email: "",
        phone_number: "",
        first_name: "",
        message: ""
    });

    const handleChange = e => {
        const {value, name, checked, type} = e.target
        setContactInfo(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    //post contact from
    const postContact = async (contact) => {
        const raw = JSON.stringify(contact);

        const responce = await fetch('https://backend.getlinked.ai/hackathon/contact-form',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: raw,
        })
        const data = await responce.json();
        console.log(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postContact(contactInfo);
    }

  return (
    <section className="contact">
        {window.matchMedia("(max-width:1023px)").matches && <Link to="/" className='back'><img src={back} alt='' /></Link>}
        {window.matchMedia("(min-width:1024px)").matches && 
        <div>
            <h2 className='getInTouch'>Get in touch</h2>
            <div className="pDiv">
                <p className="ourTech cont">Contact</p>
                <p className="ourTech cont">Information</p>
            </div>
            <div className="pDiv">
                <p className="ourTech cont">27,Alara Street</p>
                <p className="ourTech cont">Yaba 100012</p>
                <p className="ourTech cont">Lagos State</p>
            </div>
            <p className="ourTech cont">Call Us : 07067981819</p>
            <div className="pDiv">
                <p className="ourTech cont">we are open from Monday-Friday</p>
                <p className="ourTech cont">08:00am - 05:00pm</p>
            </div>
            <div className='socialsDiv'>
                <p className="ourTech share">Share on</p>
                <div className='socials cont'><img src={instagram} alt="" /><img src={x} alt="" /><img src={facebook} alt="" /><img src={linkedin} alt="" /></div>
            </div>
        </div>}
        <form className="contactForm" action="" onSubmit={handleSubmit}>
            <h3 className='tech cont'>Questions or need assistance?</h3>
            <h3 className="tech cont">Let us know about it!</h3>
            {window.matchMedia("(max-width:1023px)").matches &&
            <p className="ourTech cont">Email us below to any question related to our event</p>}
            <input onChange={handleChange} type="text" name="first_name" id="first_name" placeholder="First Name" value={contactInfo.first_name} required/>
            {window.matchMedia("(max-width:1023px)").matches &&
            <input onChange={handleChange} type="text" name="topic" id="topic" placeholder="Topic" value={contactInfo.topic}/>}
            <input onChange={handleChange} type="email" name="email" id="email" placeholder="Mail" value={contactInfo.email} required/>
            <textarea onChange={handleChange} name="message" id="message" placeholder="Message" value={contactInfo.message}></textarea>
            <button className="register">Submit</button>
        </form>
        {window.matchMedia("(max-width:1023px)").matches && 
        <>
            <p className="ourTech share">Share on</p>
            <div className='socials cont'><img src={instagram} alt="" /><img src={x} alt="" /><img src={facebook} alt="" /><img src={linkedin} alt="" /></div>
        </>}  
        <img src={puStar} alt="" className='star puStar star-1'/>
        <img src={grayStar} alt="" className='star puStar star-2'/>
        <img src={whiteStar} alt="" className='star puStar star-3'/>
        <img src={whiteStar} alt="" className='star puStar star-4'/>
        <img src={whiteStar} alt="" className='star puStar star-5'/>
    </section>
  )
}

export default Contact