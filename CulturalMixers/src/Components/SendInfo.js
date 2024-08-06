import '..//App.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

export const SendInfo = () => {

    // 状態を定義
    const navigate = useNavigate()
    const [number, setNumber] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const comparisonNumber = 50000; // 比較する基準の数値

    // 入力フィールドが変わったときのハンドラー
    const handleChange = (event) => {
        setNumber(event.target.value);
    };

    // 数値を比較する関数
    const compareNumber = () => {
        const num = parseFloat(number);
        let retrue = 'Disable';
        if (isNaN(num)) {
            return 'Disable';
        }
        if(!Number.isInteger(num))
        {
            return 'Disable';
        }
        if(num < comparisonNumber)
        {
            retrue = '';
        }
        return retrue;//num < comparisonNumber ? 'Enable' : 'Disable';
    };

    // ボタンの有効/無効を切り替える関数
    const toggleButton = () => {
        setIsDisabled(!isDisabled);
    };


    return (
        <div>
            <div>
            <input
                type="text"
                value={number}
                onChange={handleChange}
                placeholder="送金金額"
                class="SendUPNumber2"
            />
            </div>
            <div className="SendBotton">
                <button className='SendMoneyButton' onClick={() => navigate('/SendMoneyFinish') } disabled={compareNumber()}>送金</button>
            </div>
            

            
        </div>
    );
    /*
    return (
        <>
        <p className="SendUP">送金金額 </p>
        {/* <p id="textInput" className="SendUPNumber2">円 </p> }
        <input typy="text" name = "name" placeholder='送金金額' class="SendUPNumber2" /> <span class="currency">円</span>

        
        </>
    )
    */
    };
