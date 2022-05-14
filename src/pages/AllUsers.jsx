import React, { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import EmpScroller from "../components/EmpScroller";
import CardsSlider from "../components/CardsSlider";
import ButtonGroup from "../components/ButtonGroup";
import Spinner from "../components/Spinner";

const AllUsers = () => {
  const [users, setUsers] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [all, setAll] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8080/api/employees/")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setUsers(data.employees);
          setIsPending(false);
          setAll(data.employees);
          console.log(all);
        })
        .catch((err) => {
          setIsPending(false);
          console.log(err);
        });
    }, 1000);
  }, []);

  const searchUser = (str) => {
    if (str === "") {
      setUsers(all);
    } else {
      const searchedUser = users.filter((user) => user.name.includes(str));
      setUsers(searchedUser);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {isPending && (
        <div className="absolute top-1/2 left-1/2">
          <div className="flex items-center gap-2">
            <Spinner /> Loading
          </div>
        </div>
      )}
      {users && (
        <>
          <div className="flex justify-center mt-">
            <ButtonGroup />
          </div>
          <CardsSlider data={all} />
          <div className="w-9/12 mx-auto mb-5">
            <SearchInput searchUser={searchUser} />
          </div>
          {users.length >= 1 ? (
            <EmpScroller data={users} />
          ) : (
            <p className="text-center">No users found</p>
          )}
        </>
      )}
    </div>
  );
};

export default AllUsers;
