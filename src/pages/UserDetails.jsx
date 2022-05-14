import React, { useState, useEffect } from "react";
import photo from "../assets/profile.png";
import ProblCards from "../components/ProblCards";
import StatsCard from "../components/StatsCard";
import UpBar from "../components/UpBar";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [statType, setType] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:8080/api/employees/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setUser(data.employee);
          setIsPending(false);
        })
        .catch((err) => {
          setIsPending(false);
          console.log(err);
        });
    }, 1000);
  }, []);

  return (
    <div>
      {isPending && (
        <div className="absolute top-1/2 left-1/2">
          <div className="flex items-center gap-2">
            <Spinner /> Loading
          </div>
        </div>
      )}
      {user && (
        <>
          <div className="flex justify-between pr-20">
            <div className="pt-5 text-2xl font-bold">User&apos;s Details</div>
          </div>

          <div className="w-fit flex mx-auto gap-10 bg-white border-2 border-gray-200 rounded-xl p-5 shadow-sm mt-2 shadow-blue-100">
            <img src={photo} width="70px" />
            <div>
              <div className="text-2xl mt-2 font-bold">{user.name}</div>
              <div>{user.state} case</div>
            </div>
          </div>
          <UpBar setType={setType} />
          <div className=" flex mt-5 px-8">
            <StatsCard data={user} statType={statType} />
            <div className=" mx-auto w-8/12">
              <div className="flex gap-10 w-fit mx-auto">
                <ProblCards
                  color="#F04B5F"
                  data={user}
                  _key={0}
                  type={statType}
                />
                <ProblCards
                  color="#323232"
                  data={user}
                  _key={1}
                  type={statType}
                />
                <ProblCards
                  color="#FAB788"
                  data={user}
                  _key={2}
                  type={statType}
                />
              </div>
              <div className=" px-6 w-full mt-8  py-2 bg-white border-2 border-gray-200 rounded-xl shadow-sm  shadow-blue-100">
                <div className="text-center font-bold text-lg">
                  Ouael IS facing some <b className="text-red-400">Problems</b>
                </div>
                <div className="text-center text-sm text-gray-500">
                  Please check your notifications and follow the instructures
                  given there, or report your current state Don't stress about
                  it, we have your back
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetails;
