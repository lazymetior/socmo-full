import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AddPost } from "./components/AddPost";
import { Header } from "./components/Header";
import  {Home} from "./components/Home";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";

function App() {
  return (
    
<Router>
<div>
<Header />
  <Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/search" element={<Search />}></Route>
  <Route path="/add-post" element={<AddPost />}></Route>
  <Route path="/profile" element={<Profile />}></Route>
  </Routes>
</div>
</Router>
  );
}

export default App;
