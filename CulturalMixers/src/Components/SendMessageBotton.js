import '..//App.css';

import { useNavigate } from "react-router-dom"

export  const SendMessageBotton = () => {
    const navigate = useNavigate()
    return (
<button className='SendMessageBotton' onClick={() => navigate('/MadeLinkFinish')}>リンクを作成</button>
      );
    };
