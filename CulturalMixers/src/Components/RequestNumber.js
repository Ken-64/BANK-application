import '..//App.css';
import React from 'react';

export const RequestNumber = () => {

    return (
        <>
        <p className="SendUPNumber3">請求金額 </p>
        {/* <p id="textInput" className="SendUPNumber2">円 </p> */}
        <input typy="text" name = "name" placeholder='請求金額' class="SendUPNumber2"/><span class="currency">円</span>

        </>
    )
    };