import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import EmpScroller from "../components/EmpScroller";
import CardsSlider from "../components/CardsSlider";
import ButtonGroup from "../components/ButtonGroup";
import Data from "../../Data/Data";

const AllUsers = () => {
  const [users, setUsers] = useState(Data);

  const searchUser = (str) => {
    if (str === "") {
      setUsers(Data);
    } else {
      const searchedUser = users.filter((user) => user.name.includes(str));
      setUsers(searchedUser);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center mt-">
        <ButtonGroup />
      </div>
      <CardsSlider data={Data} />
      <div className="w-9/12 mx-auto mb-5">
        <SearchInput searchUser={searchUser} />
      </div>
      {users.length >= 1 ? (
        <EmpScroller data={users} />
      ) : (
        <p className="text-center">No users found</p>
      )}
    </div>
  );
};

export default AllUsers;
