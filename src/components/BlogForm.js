import { useState } from 'react';

function BlogForm({ addBlog }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <input
            type="text"
            value={title}
            data-id={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Blog Title"
            required
          />
          <input
            type="text"
            value={author}
            data-id={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter Author Name"
            required
          />
          <input
            type="submit"
            value="Add Blog"
            className="add-btn"
          />
        </div>

      </form>
    </div>
  )
}

export default BlogForm;