import '../Button.css';

import { useNavigate } from "react-router-dom"

import React from 'react';
import { useLocation } from 'react-router-dom';

export  const MakeLinkButton = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const link = location.state?.link;
  
    return (
      <div>
        {link ? (
          <div>
            <a href={link} target="_blank" rel="noopener noreferrer" className='MadeLink'>
              {link}
            </a>
          </div>
        ) : (
          <p>No link generated.</p>
        )}
        <div>
            <button className='MakeLinkButton' onClick={() => navigate('/')}>リンクをコピー</button>
        </div>
      </div>
    );
};

/*
export  const MakeLinkButton = () => {
    const navigate = useNavigate()
    return (
        <button className='MakeLinkButton' onClick={() => navigate('/')}>リンクをコピー</button>
    );
};
*/