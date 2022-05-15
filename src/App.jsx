import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Recommendations from "./pages/Recommendations";
import AllUsers from "./pages/AllUsers";
import UserDetails from "./pages/UserDetails";
import logo from "./assets/logo_green.png";

function App() {
  return (
    <>
      <div className="block md:hidden absolute pt-56  h-full w-full bg-blue-50 text-center">
        <img src={logo} width="200" className="block mx-auto my-10" />
        <div className="font-semibold text-2xl">Sorry!!</div>
        <div className="text-center w-11/12  mx-auto">
          This Dashboard doesn't support small sceens
        </div>
      </div>

      <div className="md:flex APP hidden">
        <Sidebar />
        <div className="flex-1 pl-14 pt-8 bg-gray-50">
          <div className="text-5xl font-extrabold">Track&apos;EM Dashboard</div>
          <div className="text-gray-400 text- mt-2 pl-2">Welcome HR Evan</div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<AllUsers />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/users/:id" element={<UserDetails />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
