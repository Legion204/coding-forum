import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div>
            <h1 className='font-semibold text-lg p-5 m-5 bg-white rounded-lg text-center'>{title}</h1>
        </div>
    );
};

Bookmark.propTypes={
    bookmark:PropTypes.object
}

export default Bookmark;