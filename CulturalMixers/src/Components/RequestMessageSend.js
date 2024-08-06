import '..//App.css';

import { useNavigate } from "react-router-dom"

export  const MessageSendBotton = () => {
    const navigate = useNavigate()
    return (
<button className='SendMessageButton' onClick={() => navigate('/')}>リンクを作成</button>
      );
    };
