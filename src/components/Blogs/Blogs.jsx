import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handelBookmarkByBtn}) => {

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
                    handelBookmarkByBtn={handelBookmarkByBtn} 
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handelBookmarkByBtn:PropTypes.func.isRequired
}

export default Blogs;