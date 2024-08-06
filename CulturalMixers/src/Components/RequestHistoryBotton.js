import '../Button.css';

import { useNavigate } from "react-router-dom"


export const RequestHistoryButton = () =>{
    const navigate = useNavigate()
    return(
        <div className="SendMoneyButtonContent">
            <img className='ChevronRightpic' src="chevron-right.png" height="30px"/>
            <img className='ChevronRightpic2' src="chevron-right.png" height="30px"/>
            <button className='SendMoneyButton' onClick={() => navigate('')}>請求履歴</button>
        </div>
    )
}