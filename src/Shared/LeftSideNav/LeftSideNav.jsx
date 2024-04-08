import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const LeftSideNav = () => {
    const [categorys, setCategorys] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategorys(data))
    },[])
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-semibold">All Category</h2>
            <button className="btn p-3 font-semibold text-lg w-full">National News</button>
            {
                categorys.map(category =>
                <Link
                className="block ml-4 text-xl font-semibold"
                 key={category.id}
                 to={`/category/${category.id}`}>
                {category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;