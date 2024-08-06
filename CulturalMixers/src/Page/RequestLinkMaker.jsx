import { RequestNumber } from "../Components/RequestNumber"
import{ RequestMessage} from "../Components/RequestMessage"
import { SendMessageBotton } from "../Components/SendMessageBotton";
import React from 'react';

export const RequestLinkMaker =() =>{
    return(
        <>
    <p className="titleOfRequest">請求リンクの作成</p>
    <div className="RequstNumber">
    <RequestNumber/>
    </div>
    <div className="Requstmessage">
    <RequestMessage/>
    </div>
    <div>
    <SendMessageBotton />
    </div>
    </>
    )
}