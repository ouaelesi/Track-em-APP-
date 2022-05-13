import React from "react";
import UpBar from "../components/UpBar";
import SearchInput from "../components/SearchInput";
import EmpScroller from "../components/EmpScroller";
import CardsSlider from "../components/CardsSlider";

const Users = () => {
  return (
    <div className="">
      <div className="text-5xl font-bold">Track’EM Dashboard</div>
      <div className="text-gray-400 text-xl pl-2">Welcome HR Evan</div>
      <UpBar />
      <CardsSlider />
      <SearchInput />
      <EmpScroller />
    </div>
  );
};

export default Users;
