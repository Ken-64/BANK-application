import '..//App.css';
import React, { useState } from 'react';

export const SendInfo = () => {

    return (
        <>
        {/* <p className="SendUpNumber">送金金額 </p> */}
        {/* <p id="textInput" className="SendUPNumber2">円 </p> */}
        <input typy="text" name = "name" placeholder='送金金額' class="SendUPNumber2"/> <span class="currency">円</span>

        </>
    )
    };
