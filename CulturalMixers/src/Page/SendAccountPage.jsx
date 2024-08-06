import { SendUserImage } from "../Components/SendUserImage"
import { SendUserName } from "../Components/SendUserName"
import { SendUserNumber } from "../Components/SendUserNumber"
import { SendInfo } from "../Components/SendInfo"
import {SendBotton} from  "../Components/SendBotton"

export const SendAccountPage = () => {
    return (
        <>
        <div className="titleOfsend">送金先</div>
        <div className="SendImageName">
        <SendUserImage/>
        <SendUserName/>
        </div>
        <div className="SendUpSet">
        <SendUserNumber/>
        </div>
        <div className="SendInfo">
        <SendInfo/>
        </div>
        <div className="SendBotton">
        <SendBotton/>
        </div>
        </>
    )
}