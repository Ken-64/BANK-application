import { ReturnHomeButton } from "../Components/ReturnHomeButton.js";
import { MakeLinkButton } from "../Components/MakeLinkButton.js";

export const MadeLinkFin = () => {
  return (

    <div className="FinishDisplay">
      <div className="MadeLinkMessage">請求リンクが作成されました</div>

      <MakeLinkButton />
      <ReturnHomeButton />
    </div>
  );
};
