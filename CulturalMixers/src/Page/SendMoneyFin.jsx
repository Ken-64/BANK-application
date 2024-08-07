import {ReturnHomeButton} from '../Components/ReturnHomeButton.js';
export const SendMoneyFin = () => {

  return (
    <div className='FinishDisplay'>
      <img src="approval.png" alt="approval" height="200px"/>
      <h2>送金処理が完了しました</h2>
      <ReturnHomeButton />
    </div>
    
  );
};
