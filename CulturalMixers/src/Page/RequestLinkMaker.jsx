import { RequestNumber } from "../Components/RequestNumber"
import{RequestMessage} from "../Components/RequestMessage"

export const RequestLinkMaker =() =>{
    <>
    <p className="titleOfsend">請求リンクの作成</p>
    <div className="RequstNumber">
    <RequestNumber/>
    </div>
    <div className="Requstmessage">
    <RequestMessage/>
    </div>
    
    </>
}