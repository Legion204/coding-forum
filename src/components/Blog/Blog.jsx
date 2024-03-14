import { FaBookmark } from "react-icons/fa";
import PropTypes from 'prop-types';

const Blog = ({blog,handelBookmarkByBtn}) => {
    const {cover,title,author_img,author,posted_date,reading_time,hashtags}=blog;

    
    return (
        <div className="space-y-5 m-4">
            <img className="w-full rounded-lg" src={cover} alt="" />
            <div>
             <div className="flex justify-between">
                <div className="flex gap-2">
                <img className="w-16" src={author_img} alt="" />
                    <div>
                    <small className="font-bold text-2xl">{author}</small>
                    <p className="font-semibold text-[#11111199]">{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                <p className="font-medium text-xl text-[#11111199]">{reading_time} min read </p>
                <button onClick={()=>handelBookmarkByBtn(blog)} className="text-2xl text-[#6047EC]"><FaBookmark /></button>
                </div>
             </div>
            </div>
            <h1 className="font-bold text-4xl">{title}</h1>
            <p>
                {
                    hashtags.map((hashTag,inx)=><span className="mr-2" key={inx}><a href="">#{hashTag}</a></span>)
                }
            </p>
            <button className="font-semibold text-xl text-[#6047EC] underline">Mark as read</button>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handelBookmarkByBtn:PropTypes.func.isRequired
}

export default Blog;