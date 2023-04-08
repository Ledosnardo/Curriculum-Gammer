import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { RecoilRoot } from "recoil";
import HomePage from "pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>

        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/homepage' element={<HomePage />}/>
        </Routes>
        
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
