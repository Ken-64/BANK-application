import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Page/Home";
import { UserListPage } from "./Page/UserListPage";
import { SendAccountPage } from "./Page/SendAccountPage";
import { SendMoneyFin } from "./Page/SendMoneyFin";
import { RequestLinkMaker } from "./Page/RequestLinkMaker";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<UserListPage />} />
        <Route path="/send/:id" element={<SendAccountPage />} />
        <Route path="/SendMoneyFinish" element={<SendMoneyFin />} />
        <Route path="/RequestLinkMaker" element={<RequestLinkMaker />} />
      </Routes>
    </Router>
  );
}

export default App;
