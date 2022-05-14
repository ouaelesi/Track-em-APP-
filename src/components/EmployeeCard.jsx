import EmployeeImage from "../assets/profile.png";
import PropTypes from "prop-types";
const EmployeeCard = (props) => {
  let color;
  switch (props.employee.state) {
    case "Critical":
      color = "#F04B5F";
      break;
    case "To watch":
      color = "#FAB788";
      break;
    case "Normal":
      color = "#82C164";
      break;
  }
  return (
    <div
      className={`border-4 w-48 h-52 rounded-xl p-4 border-${color}  shadow-md bg-white  cursor-pointer hover:shadow-xl`}
      style={{ borderColor: `${color}` }}
    >
      <div
        className="p-2     w-fit rounded-full ml-auto"
        style={{ background: `${color}` }}
      ></div>
      <img src={EmployeeImage} width="60px" className="mt-5"></img>
      <div className="text-lg mt-2 font-semibold">{props.employee.name}</div>
      <div className="text-sm" style={{ color: `${color}` }}>
        {props.employee.state} Case
      </div>
    </div>
  );
};
EmployeeCard.propTypes = {
  color: PropTypes.string,
  employee: PropTypes.object,
};
export default EmployeeCard;
