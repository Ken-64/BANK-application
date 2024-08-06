import '../Button.css';

import { useNavigate } from "react-router-dom"


export const HistoryRequestButton = () =>{
    const navigate = useNavigate()
    return(
        <div className="HistoryRequestButton">
            <img className='Walletpic' src="wallet.png" alt="wallet" height="30px"/>
            <img className='AllowRightpic' src="arrow-right.png" alt=" " height="20px"/>
            <img className='ChevronRightpic' src="chevron-right.png" alt=" " height="30px"/>
            <img className='ChevronRightpic2' src="chevron-right.png" alt=" " height="30px"/>
            <button className='HistoryRequestButton' onClick={() => navigate('/')}>請求履歴</button>
        </div>
    )
}