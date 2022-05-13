import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Recommendations from "./pages/Recommendations";
import Users from "./pages/users";
import "swiper/css/bundle";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-14 pt-8">
        <div className="text-5xl font-bold">Track&apos;EM Dashboard</div>
        <div className="text-gray-400 text- mt-2 pl-2">Welcome HR Evan</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
