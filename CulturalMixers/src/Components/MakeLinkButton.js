import '../Button.css';

import { useNavigate } from "react-router-dom"

export  const MakeLinkButton = () => {
    const navigate = useNavigate()
    return (
        <button className='MakeLinkButton' onClick={() => navigate('/')}>リンクをコピー</button>
    );
};