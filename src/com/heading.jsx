import "bootstrap/dist/css/bootstrap.min.css";
import { GiFeatheredWing } from "react-icons/gi";
import { MdPriceChange } from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { CiHome } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { MdRoundaboutLeft } from "react-icons/md";

const Heading = ({ onhead }) => {
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
              <li>
                <a href="#" className="nav-link px-2 text-secondary head">
                  <CiHome /> Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white head">
                  <GiFeatheredWing /> Features
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white head">
                  <MdPriceChange /> Pricing
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white head">
                  <BsFillQuestionSquareFill /> FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link px-2 text-white head"
                  onClick={() => onhead("About")}
                >
                  About <MdRoundaboutLeft />
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            ></form>

            <div className="text-end">
              <button
                type="button"
                className="btn btn-outline-light me-2 head"
                onClick={() => onhead("login")}
              >
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Heading;
