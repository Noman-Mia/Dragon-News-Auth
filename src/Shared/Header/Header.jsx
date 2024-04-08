import logo from "../.././assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div>
            <img className="mx-auto" src={logo} alt="" />
            <p className="text-center">Journalism Without Fear or Favour</p>
            <p className="text-xl text-center">{moment().format("dddd, MMMM, D ,YYYY")}</p>
        </div>
    );
};

export default Header;