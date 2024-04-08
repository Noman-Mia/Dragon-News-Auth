import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import QZone1 from "../../assets/qZone1.png"
import QZone2 from "../../assets/qZone2.png"
import QZone3 from "../../assets/qZone3.png"
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-semibold"> Login With</h2>
        <button className="btn w-full">
          <FcGoogle />
          Google
        </button> <br />

        <button className="btn w-full">
          <FaGithub />
          Github
        </button>
      </div>
      <div className="p-4 mt-5 mb-6">
        <h2 className="text-3xl font-semibold">Find Us On</h2>
        <a className="flex items-center gap-3 border p-3 rounded-t-lg" href="">
          <FaFacebook />
          <span>facebook</span>
        </a>
        <a className="flex items-center gap-3 border p-3 " href="">
          <FaTwitter></FaTwitter>
          <span>Twitter</span>
        </a>
        <a className="flex items-center gap-3 border p-3 rounded-b-lg" href="">
          <FaInstagram></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>

      {/* Q-Zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-semibold"> Q-Zone</h2>
        <img src={QZone1} alt="" />
        <img src={QZone2} alt="" />
        <img src={QZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
