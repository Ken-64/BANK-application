import '../Button.css';

import { useNavigate } from "react-router-dom"

export const BackToHomeButton = () =>{
    const navigate = useNavigate()
    return(
        <div className="BackToHomeButtonContent">
            <img className='Homepic' src="home.png"　alt="home" height="30px"/>
            <button className='BackToHomeButton' onClick={() => navigate('/')}></button>
        </div>
    )
}