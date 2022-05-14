import React from "react";
import SearchInput from "../components/SearchInput";
import EmpScroller from "../components/EmpScroller";
import CardsSlider from "../components/CardsSlider";
import ButtonGroup from "../components/ButtonGroup";
import Data from "../../Data/Data";

const Users = () => {
  return (
    <div className="">
      <div className="flex justify-center mt-">
        <ButtonGroup />
      </div>
      <CardsSlider data={Data} />
      <div className="w-9/12 mx-auto mb-5">
        <SearchInput />
      </div>
      <EmpScroller />
    </div>
  );
};

export default Users;
