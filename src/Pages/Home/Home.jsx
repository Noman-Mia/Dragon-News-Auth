import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import {useLoaderData} from "react-router-dom"
import NewsCard from "./NewsCard";

const Home = () => {    
   const news = useLoaderData();
   console.log(news);
    return (
        <div className="mt-5">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
        
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="text-2xl md:col-span-2 ">
                  {
                    news.map(aNews =><NewsCard
                    news={aNews}
                    key={aNews._id}
                    ></NewsCard>)
                  }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;