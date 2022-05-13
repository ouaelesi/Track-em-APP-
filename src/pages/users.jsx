import React from "react";
import UpBar from "../components/UpBar";
import SearchInput from "../components/SearchInput";
import EmpScroller from "../components/EmpScroller";
import CardsSlider from "../components/CardsSlider";

const Users = () => {
  return (
    <div className="">
      <UpBar />
      <CardsSlider />
      <div className="w-9/12 mx-auto mb-5">
        <SearchInput />
      </div>
      <EmpScroller />
    </div>
  );
};

export default Users;
