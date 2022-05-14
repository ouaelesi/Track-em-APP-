import EmployeeImage from "../assets/profile.png";
import PropTypes from "prop-types";
const EmployeeCard = (props) => {
  return (
    <div
      className={`border-4 w-48 h-52 rounded-xl p-4 border-${props.color}   shadow-md bg-white  cursor-pointer hover:shadow-xl`}
    >
      <div
        className={`p-2 bg-${props.color}    w-fit rounded-full ml-auto`}
      ></div>
      <img src={EmployeeImage} width="60px" className="mt-5"></img>
      <div className="text-lg mt-2 font-semibold">{props.employee.name}</div>
      <div className={`text-${props.color}   text-sm`}>Critique Case</div>
    </div>
  );
};
EmployeeCard.propTypes = {
  color: PropTypes.string,
  employee: PropTypes.object,
};
export default EmployeeCard;
