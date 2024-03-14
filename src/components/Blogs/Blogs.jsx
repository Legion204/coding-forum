import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

    const[blogs, setBlogs]=useState([]);

    useEffect(()=>{
        fetch('Blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])


    return (
        <div className="lg:w-2/3">
            {
                blogs.map((blog,inx)=><Blog 
                    key={inx}
                    blog={blog} 
                    ></Blog>)
            }
        </div>
    );
};

export default Blogs;