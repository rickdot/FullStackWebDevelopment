import { useState } from "react"
import blogService from "../services/blogs"
import { useSelector, useDispatch } from "react-redux";
import {showNotification} from "../reducers/notificationReducer"

const BlogForm = ({
  blogs,
  setBlogs,
  createBlog
}) => {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState("")
  const [newAuthor, setNewAuthor] = useState("")
  const [newUrl, setNewUrl] = useState("")
  const handleTitleChange=({ target }) => setNewTitle(target.value)
  const handleAuthorChange=({ target }) => setNewAuthor(target.value)
  const handleUrlChange=({ target }) => setNewUrl(target.value)
  let addBlog = createBlog
  if(!addBlog){
    addBlog = (event) => {
      event.preventDefault()
      const blogObject = {
        title: newTitle,
        author: newAuthor,
        url: newUrl
      }

      blogService
        .create(blogObject)
        .then(returnedBlog => {
          setBlogs(blogs.concat(returnedBlog))
          dispatch(showNotification(`a new blog ${blogObject.title} by ${blogObject.author} added`, 3))
          // setErrorMessage(`a new blog ${blogObject.title} by ${blogObject.author} added`)
          setNewTitle("")
          setNewAuthor("")
          setNewUrl("")
          
        })
    }
  }


  return(
    <div>
      <h2>create new</h2>
      <form onSubmit={addBlog} id="blog-form">
        <div>
          title: <input value={newTitle} onChange={handleTitleChange} id = "title-input" placeholder="input title" data-testid="title-input"/>
        </div>
        <div>
          author: <input value={newAuthor} onChange={handleAuthorChange} id = "author-input" placeholder="input author" data-testid="author-input"/>
        </div>
        <div>
          url: <input value={newUrl} onChange={handleUrlChange} id = "url-input" placeholder="input url" data-testid="url-input"/>
        </div>
        <button type="submit" data-testid="create-blog">create</button>
      </form>
    </div>
  )

}


export default BlogForm