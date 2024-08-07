import '../Button.css';

import { useNavigate } from "react-router-dom"

export const ErrorToHomeButton = () =>{
    const navigate = useNavigate()
    return(
        <div className="ErrorToHomeButtonContent">
            {/* <img className='Homepic' src="home.png"　alt="home" height="30px"/> */}
            <button className='ErrorBackToHomeButton' onClick={() => navigate('/')}>HOME</button>
        </div>
    )
}