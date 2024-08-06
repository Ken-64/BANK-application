import '..//App.css';

import { useNavigate } from "react-router-dom"

export  const SendBotton = () => {
    const navigate = useNavigate()
    return (
<button className='SendMoneyButton' onClick={() => navigate('/')}>送金</button>
      );
    };
