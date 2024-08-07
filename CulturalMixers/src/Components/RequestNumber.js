import '../App.css';
import '../Button.css';
import React, { useState } from 'react';

import { useNavigate } from "react-router-dom"

export const RequestNumber = () => {
    const navigate = useNavigate();
    const [number, setNumber] = useState('');

    const [money, setMoney] = useState('');
    const [message, setMessage] = useState('');

    const fixedId = '12345'; // 固定ID

    const handleMoneyChange = (event) => {
        setMoney(event.target.value);
    };

    const handleMessageChange = (event) => {
    setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    const link = `hogehoge.com?id=${fixedId}&money=${encodeURIComponent(money)}&message=${encodeURIComponent(message)}`;
    navigate('/MadeLinkFinish', { state: { link } });
    };

    // 数値を比較する関数
    const compareNumber = () => {
        const num = Number(money);
        let retrue = 'Disable';
        if (isNaN(num)) {
            return 'Disable';
        }
        if(num == 0)
        {
            return 'Disable'
        }
        if(Number.isInteger(num))
        {
            return '';
        }
        return retrue;//num < comparisonNumber ? 'Enable' : 'Disable';
    };

    return (
        <div>
          <p className="SendUPNumber3">請求金額 </p>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="money"
                value={money}
                onChange={handleMoneyChange}
                placeholder='請求金額'
                class="SendUPNumber2"
              />
            </div>
            <p className="Requestmessage">メッセージ（任意） </p>
            <div>
              <input
                type="text"
                name="message"
                value={message}
                onChange={handleMessageChange}
                class="RequestMessage"
              />
            </div>
            <div className='MoveMakeLinkButtonPos'>
                <button type="submit" className='MoveMakeLinkButton' disabled={compareNumber()} >リンクを作成</button>
            </div>
          </form>
        </div>
    );

    
    /*
    return (
        <div>
          <p className="SendUPNumber3">請求金額 </p>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="money"
                placeholder='請求金額'
                value={formData.money}
                class="SendUPNumber2"
                onChange={handleFormChange}
              />
            </div>
            <p className="Requestmessage">メッセージ（任意） </p>
            <div>
              <input
                type="text"
                name="message"
                class="RequestMessage"
                value={formData.message}
                onChange={handleFormChange}
              />
            </div>
            <button className='MoveMakeLinkButton' onClick={() => navigate('/MadeLinkFinish')} disabled={compareNumber()}>リンクを作成</button>
          </form>
        </div>
      );
    */
    /*
    return (
        <>
        <div>
            <div className="RequstNumber">
                <p className="SendUPNumber3">請求金額 </p>
                {/* <p id="textInput" className="SendUPNumber2">円 </p> }
                <input typy="text" name = "name" placeholder='請求金額' class="SendUPNumber2" onChange={handleChange}/><span class="currency">円</span>
            </div>
                <div className="Requstmessage">
                <p className="Requestmessage">メッセージ（任意） </p>
                {/* <p id="textInput" className="SendUPNumber2">円 </p> }
                <input typy="text" name = "name" placeholder=' 'class="RequestMessage"/>
            </div>
            <div className='MoveMakeLinkButtonPos'>
                <button className='MoveMakeLinkButton' onClick={() => navigate('/MadeLinkFinish')} disabled={compareNumber()}>リンクを作成</button>
            </div>
        </div>

        </>
    )
    */
    };

