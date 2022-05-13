import EmployeeImage from "../assets/profile.png";
import PropTypes from "prop-types";
const EmployeeCard = (props) => {
  return (
    <div
      className={`border-4 w-48 h-52 rounded-xl p-5 border-${props.color}   shadow-md bg-white `}
    >
      <div
        className={`p-2 bg-${props.color}    w-fit rounded-full ml-auto`}
      ></div>
      <img src={EmployeeImage} width="60px" className="mt-5"></img>
      <div className="text-xl mt-2 font-semibold">Sahbi Ouael</div>
      <div className={`text-${props.color}   text-sm`}>Critique Case</div>
    </div>
  );
};
EmployeeCard.propTypes = {
  color: PropTypes.string,
};
export default EmployeeCard;
