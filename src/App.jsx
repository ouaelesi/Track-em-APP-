import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Home from "./pages/Home";
import Users from "./pages/users";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-14 pt-8">
        <Routes>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
