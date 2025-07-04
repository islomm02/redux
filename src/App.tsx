import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SelectedUsersPage from "./pages/SelectedUsersPage";
function App() {


    return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/selected" element={<SelectedUsersPage />} />
    </Routes>
  );
}

export default App;
