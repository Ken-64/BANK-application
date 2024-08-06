import '../App.css';
import '../Button.css';
import React, { useState } from 'react';

import { useNavigate } from "react-router-dom"

export const RequestNumber = () => {
    const navigate = useNavigate();
    const [number, setNumber] = useState('');

    // 入力フィールドが変わったときのハンドラー
    const handleChange = (event) => {
        setNumber(event.target.value);
    };

    function isValidInteger(value) {
        // 数値型であるかをチェック
        if (typeof value !== 'number') {
            return false;
        }
        
        // 数値型であり、かつ整数であるかをチェック
        return Number.isInteger(value);
    }

    // 数値を比較する関数
    const compareNumber = () => {
        const num = Number(number);
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
        <>
        <div>
            <div className="RequstNumber">
                <p className="SendUPNumber3">請求金額 </p>
                {/* <p id="textInput" className="SendUPNumber2">円 </p> */}
                <input typy="text" name = "name" placeholder='請求金額' class="SendUPNumber2" onChange={handleChange}/><span class="currency">円</span>
            </div>
                <div className="Requstmessage">
                <p className="Requestmessage">メッセージ（任意） </p>
                {/* <p id="textInput" className="SendUPNumber2">円 </p> */}
                <input typy="text" name = "name" placeholder=' 'class="RequestMessage"/>
            </div>
            <div className='MoveMakeLinkButtonPos'>
                <button className='MoveMakeLinkButton' onClick={() => navigate('/MadeLinkFinish')} disabled={compareNumber()}>リンクを作成</button>
            </div>
        </div>

        </>
    )
    };