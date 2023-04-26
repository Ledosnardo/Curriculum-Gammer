import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { RecoilRoot } from "recoil";
import HomePage from "pages/HomePage";
import Profile from "pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>

        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/homepage' element={<HomePage />}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
        
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
