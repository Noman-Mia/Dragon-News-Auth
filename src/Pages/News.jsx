import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import {useParams} from "react-router-dom"
const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                   <p>{id}</p>
                </div>

                <div>
                     <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;