import { GiHummingbird } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";
import { GiMedallist } from "react-icons/gi";
import { FaDashcube } from "react-icons/fa6";
import { MdRoundaboutRight } from "react-icons/md";

const Sidebar = ({ onchange, tab }) => {
  // const homeclicked = (a) => {
  //   onclicked(a);
  // };
  // const Dashboard = (b) => {
  //   onclicked(b);
  // };
  return (
    <div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebar pos "
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">
            {" "}
            <GiHummingbird />
            FLYBAR
          </span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto ">
          <li className="nav-item on">
            <a
              href="#"
              className={`nav-link text-black ${tab === "Home" && "active"} `}
              aria-current="page"
              onClick={() => {
                onchange("Home");
              }}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              <IoIosHome /> Home
            </a>
          </li>
          <li className="on">
            <a
              href="#"
              className={`nav-link link-body-emphasis ${
                tab === "Dashboard" && "active"
              }`}
              onClick={() => {
                onchange("Dashboard");
              }}
            >
              <svg className="bi pe-none me-2  " width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              <FaDashcube /> Dashboard
            </a>
          </li>
          <li className="nav-item on">
            <a
              href="#"
              className={`nav-link text-black ${tab === "List" && "active"} `}
              aria-current="page"
              onClick={() => {
                onchange("List");
              }}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              <GiMedallist /> List
            </a>
          </li>
          <li className="on">
            <a
              href="#"
              className={`nav-link link-body-emphasis ${
                tab === "Paramjeet" && "active"
              }`}
              onClick={() => {
                onchange("Paramjeet");
              }}
            >
              <svg className="bi pe-none me-2  " width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              <MdRoundaboutRight /> About Paramjeet
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};
export default Sidebar;
