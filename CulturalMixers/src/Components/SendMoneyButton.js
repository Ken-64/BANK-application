


import { useNavigate } from "react-router-dom"


export const SendMoneyButton = () =>{
    const navigate = useNavigate()
    return(
        <>
        <button onClick={() => navigate('/List')}>送金する</button>
        </>
    )
}