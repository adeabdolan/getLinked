import { Link } from 'react-router-dom'
import congratulation from '../images/congratulation.png'
import bigCongratulation from '../images/congratulation-big.png'
import wink from '../images/wink.png'
import whiteStar from '../images/white-star.png'
import grayStar from '../images/gray-star-big.png'
import puStar from '../images/star pu.png'

function Confirmation({setModal}) {
  const handleClick = () => {
    
    setModal(false)
  }

  return (
    <section className="confirmationPage">
        <div>
            <img src={window.matchMedia("(min-width:1024px)").matches? bigCongratulation : congratulation} alt="" />
            <h2>
                Congratulations you have successfully Registered!
            </h2>
            <p>
                Yes, it was easy and you did it! check your mail box for next step
                <img src={wink} alt="" />
            </p>
            <Link to="/" className='register' onClick={handleClick} >Back</Link>   
        </div>
        <img src={puStar} alt="" className='star puStar star-1'/>
        <img src={grayStar} alt="" className='star puStar star-2'/>
        <img src={whiteStar} alt="" className='star puStar star-3'/>
        <img src={whiteStar} alt="" className='star puStar star-4'/>
        <img src={whiteStar} alt="" className='star puStar star-5'/>
    </section>
  )
}

export default Confirmation