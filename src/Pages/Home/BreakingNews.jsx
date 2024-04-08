import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div>
     <div className="flex">
     <button className="btn btn-secondary">Breaking News</button>
      <Marquee>
        <Link className="mr-12" to="/">I can be a React component, multiple React components</Link>
        <Link className="mr-12" to="/">I can be a React component, multiple React components</Link>
        <Link className="mr-12" to="/">I can be a React component, multiple React components</Link>
        <Link className="mr-12" to="/">I can be a React component, multiple React components</Link>
        <Link className="mr-12" to="/">I can be a React component, multiple React components</Link>
      </Marquee>
     </div>
    </div>
  );
};

export default BreakingNews;
