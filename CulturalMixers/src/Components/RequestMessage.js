import '..//App.css';
import React, { useState } from 'react';

export const RequestMessage = () => {

    return (
        <>
        <p className="Requestmessage">メッセージ（任意） </p>
        {/* <p id="textInput" className="SendUPNumber2">円 </p> */}
        <input typy="text" name = "name" placeholder=' 'class="RequestMessage"/>

        </>
    )
};