import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {
    
    return (
        <div className="lg:w-1/3">
            <h1 className='font-bold text-2xl text-center'>Bookmarked Blogs : {bookmarks.length}</h1>
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.object.isRequired,
}

export default Bookmarks;