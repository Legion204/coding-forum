import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks,setBookmarks]=useState([]);

  const handelBookmarkByBtn=blog=>{
    const newBookmarks=[...bookmarks,blog];
    setBookmarks(newBookmarks);
  }


  const [readTime,setReadTime]=useState(0);

  const handelReadTime = blog=>{
    const newReadingTime= readTime+blog.reading_time;
    setReadTime(newReadingTime);
  }

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='flex'>
        <Blogs 
        handelReadTime={handelReadTime}
        handelBookmarkByBtn={handelBookmarkByBtn}></Blogs>
        <Bookmarks 
        readTime={readTime}
        bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
