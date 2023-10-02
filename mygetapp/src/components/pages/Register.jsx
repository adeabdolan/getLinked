import { useState, useEffect } from 'react'
import Confirmation from '../pages/Confirmation'
import designer from '../images/3d-graphic-designer.png'
import bigDesigner from '../images/designer-big.png'
import whiteStar from '../images/white-star.png'
import grayStar from '../images/gray-star-big.png'
import puStar from '../images/star pu.png'
import movement from '../images/movement.png'
import bigMovement from '../images/movement-big.png'
import Spinner from '../spinner/Spinner'

function Register({modal, setModal}) {
    const [categoryList, setCategoryList] = useState([]);
    const [status, setStatus] = useState(undefined);
    const [loading, setLoading] = useState(false)
    
    const [application, setApplication] = useState({
        email:"",
        phone_number:"",
        team_name: "",
        group_size: "",
        project_topic:"",
        category: 1,
        privacy_poclicy_accepted: false
    })

    useEffect(() => {
        getCategoryList()
    },[])

    useEffect(() => {
        if(status !== undefined){
            setLoading(false)
            setModal(true)
        }
    }, [status])

    //get category list
    const getCategoryList = async () => {
        const responce = await fetch('https://backend.getlinked.ai/hackathon/categories-list');
        const data = await responce.json();
        setCategoryList(data);
    }

    const handleChange = e => {
        const {value, name, checked, type} = e.target
        setApplication(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    const postApplication = async (applicationData) => {
        const raw = JSON.stringify(applicationData);

        const responce = await fetch('https://backend.getlinked.ai/hackathon/registration',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: raw,
        })
        const data = await responce.json();
        setStatus(data)
        console.log(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postApplication(application);
        setLoading(true)
    }

    
  return loading ? (<Spinner/>) : (
    <div>
        {modal && <Confirmation setModal={setModal}/>}
    <section className='registerPage' style={{opacity: `${modal? '5%' : '100%'}`}}>
        {window.matchMedia("(max-width:1023px)").matches && 
        <h3>Register</h3>}
        <img src={window.matchMedia("(min-width:1024px)").matches? bigDesigner : designer} alt="" className='designer'/>
        <form action="" className='registerForm' onSubmit={handleSubmit}>
            {window.matchMedia("(min-width:1024px)").matches && 
            <h3>Register</h3>}
            <div className='block'>
                <p className="ourTech reg">Be part of this movement!<img src={window.matchMedia("(min-width:1024px)").matches? bigMovement : movement} alt="" className='movement'/></p>
                <h2 className='reg'>CREATE YOUR ACCOUNT</h2>
            </div>
            <div className='inputDiv'>
                <div className='block'>
                    <label htmlFor="team_name" className='ourTech reg'>Team's Name</label>
                    <input onChange={handleChange} type="text" name='team_name' id='team_name' placeholder='Enter the name of your group' value={application.team_name} required/>
                </div>
                <div className='block'>
                    <label htmlFor="numberphone_number" className='ourTech reg'>Phone</label>
                    <input onChange={handleChange} type="text" name='phone_number' id='phone_number' placeholder='Enter your phone number' value={application.phone_number} required/>
                </div>
                <div className='block'>
                    <label htmlFor="email" className='ourTech reg'>Email</label>
                    <input onChange={handleChange} type="email" name='email' id='email' placeholder='Enter your email address' value={application.email} required/>
                </div>
                <div className='block'>
                    <label htmlFor="project_topic" className='ourTech reg'>Project Topic</label>
                    <input onChange={handleChange} type="text" name='project_topic' id='project_topic' placeholder='What is your group project topic' value={application.project_topic} required/>
                </div>
                {window.matchMedia("(min-width:1024px)").matches? 
                <>
                    <div className='block'>
                        <label htmlFor="category" className='ourTech reg'>Category</label>
                        <select onChange={handleChange} name="category" id="category" value={application.category}>
                            {
                                categoryList.map((e) => (<option value={e.id} key={e.id}>{e.name}</option>))
                            }
                        </select>
                    </div>
                    <div className='block'>
                        <label htmlFor="group_size" className='ourTech reg'>Group Size</label>
                        <input onChange={handleChange} type="number" id="group_size" name="group_size" min="1" max="10" placeholder='Select' value={application.group_size} required/>
                    </div>
                </> :
                <>
                    <div className='inline'>
                        <div className='block'>
                            <label htmlFor="category" className='ourTech reg'>Category</label>
                            <select onChange={handleChange} name="category" id="category" value={application.category}>
                                {
                                    categoryList.map((e) => (<option value={e.id} key={e.id}>{e.name}</option>))
                                }
                            </select>
                        </div>
                        <div className='block'>
                            <label htmlFor="group_size" className='ourTech reg'>Group Size</label>
                            <input onChange={handleChange} type="number" id="group_size" name="group_size" min="1" max="10" placeholder='Select' value={application.group_size} required/>
                        </div>
                    </div>
                </>}
            </div>
            <p className="ourTech please">Please review your registration details before submitting</p>
            <div className='check'>
                <label htmlFor="privacy_poclicy_accepted" className='container ourTech reg'>I agreed with the event terms and conditions and privacy policy
                    <input onChange={handleChange} type="checkbox" id="privacy_poclicy_accepted" name="privacy_poclicy_accepted" className='checkbox' checked={application.privacy_poclicy_accepted} />
                    <span className='checkmark'></span>
                </label>
            </div>
            <button className="register">{window.matchMedia("(min-width:1024px)").matches? "Register Now" : "Submit"}</button>
        </form>
        <img src={puStar} alt="" className='star puStar star-1'/>
        <img src={grayStar} alt="" className='star puStar star-2'/>
        <img src={whiteStar} alt="" className='star puStar star-3'/>
        <img src={whiteStar} alt="" className='star puStar star-4'/>
        <img src={whiteStar} alt="" className='star puStar star-5'/>
    </section>
    </div>
  )
}

export default Register