import { Link } from 'react-router-dom';

function Blog({ blog, removeBlog, index }) {
  return (
    <div className="blog-ui">
      <h3>
        <span>
          {index + 1}.
        </span>
        {blog.title}
      </h3>
      <p>{blog.author}</p>
      <Link to={{
        pathname: `/edit/${blog.author}`,
        id: index
      }}>
        <button className="edit-btn">Edit</button>
      </Link>
      <button
        className="remove-btn"
        onClick={() => removeBlog(index)}
      >
        Delete
      </button>
    </div>

  )
}
export default Blog;