import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { RecoilRoot } from "recoil";
import HomePage from "pages/HomePage";
import Profile from "pages/Profile";
import GamePageDefault from "pages/GamePageDefault";
import LibraryPage from "pages/LibraryPage";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>

        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/library' element={<LibraryPage />} />
          <Route path='/games/:id' element={<GamePageDefault />} />
        </Routes>
        
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
