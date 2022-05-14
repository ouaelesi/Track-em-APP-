import React, { useState } from "react";
import photo from "../assets/profile.png";
import ProblCards from "../components/ProblCards";
import StatsCard from "../components/StatsCard";
import UpBar from "../components/UpBar";
import Data from "../../Data/Data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserDetails = () => {
  let { _id } = useParams();
  let next = parseInt(_id) + 1;
  next === Data.length ? (next = 0) : true;
  const [statType, setType] = useState(0);
  return (
    <div>
      <div className="flex justify-between pr-20">
        <div className="pt-5 text-2xl font-bold">User s Details</div>
        <div className="text-green-500 font-semibold text-xl underline">
          <Link to={`../users/${next}`}>
            <a>Next Employee</a>
          </Link>
        </div>
      </div>

      <div className="w-fit flex mx-auto gap-10 bg-white border-2 border-gray-200 rounded-xl p-5 shadow-sm mt-2 shadow-blue-100">
        <img src={photo} width="70px" />
        <div>
          <div className="text-2xl mt-2 font-bold">{Data[_id].name}</div>
          <div>{Data[_id].state} case</div>
        </div>
      </div>
      <UpBar setType={setType} />
      <div className=" flex mt-5 px-8">
        <StatsCard data={Data[_id]} statType={statType} />
        <div className=" mx-auto w-8/12">
          <div className="flex gap-10 w-fit mx-auto">
            <ProblCards
              color="#F04B5F"
              data={Data[_id]}
              _key={0}
              type={statType}
            />
            <ProblCards
              color="#323232"
              data={Data[_id]}
              _key={1}
              type={statType}
            />
            <ProblCards
              color="#FAB788"
              data={Data[_id]}
              _key={2}
              type={statType}
            />
          </div>
          <div className=" px-6 w-full mt-8  py-2 bg-white border-2 border-gray-200 rounded-xl shadow-sm  shadow-blue-100">
            <div className="text-center font-bold text-lg">
              Ouael IS facing some <b className="text-red-400">Problems</b>
            </div>
            <div className="text-center text-sm text-gray-500">
              Please check your notifications and follow the instructures given
              there, or report your current state Don’t stress about it, we have
              your back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
