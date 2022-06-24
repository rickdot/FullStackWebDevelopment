import { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({blog, setBlogs, blogs}) =>{
  const [detail, setDetail] = useState(false)

  const hideWhenVisible = { display: detail ? 'none' : '' }
  const showWhenVisible = { display: detail ? '' : 'none' }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const toggleDetail = () => {
    setDetail(!detail)
  }
  
  const handleLike = async () => {
    const blogID = blog._id
    const newBlog = {...blog, likes:blog.likes+1}
    await blogService.update(newBlog, blog._id)
    const updatedBlog = {...newBlog, blogID}

    setBlogs(blogs.map((tempBlog) => (blog._id === tempBlog._id ? updatedBlog : tempBlog)))
  }


  return(
    <div style={blogStyle}>
      {
        detail === false ?
        <div style={hideWhenVisible}>
          {blog.title} {blog.author} <button onClick={toggleDetail}>View</button>
        </div>   :
        <div style={showWhenVisible}>
          Title: {blog.title} <br/>
          Url: {blog.url} <br/>
          Likes: {blog.likes} <button onClick={handleLike}>like</button> <br/>
          Author: {blog.author} <br/>
          <button onClick={toggleDetail}>Hide</button>
        </div> 
      }
    </div>
  )      
}  

export default Blog



