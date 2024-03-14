import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    
    return (
        <div className="lg:w-1/3 bg-[#1111110D] m-5 rounded-lg">
            <h1 className='font-bold text-2xl text-left m-5'>Bookmarked Blogs : {bookmarks.length}</h1>
            <div>
            {
                bookmarks.map((bookmark,inx)=><Bookmark key={inx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array.isRequired,
}

export default Bookmarks;